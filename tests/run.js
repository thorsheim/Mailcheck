'use strict';
// Regression tests for the check functions. Run: node tests/run.js
const { load } = require('./harness');
let pass = 0, fail = 0;
const tests = [];
function test(name, fn) { tests.push({ name, fn }); }
function eq(actual, expected, msg) {
  const a = JSON.stringify(actual), e = JSON.stringify(expected);
  if (a !== e) throw new Error((msg || '') + ' expected ' + e + ' got ' + a);
}
function has(arr, key) { if (!arr.some(i => i.textKey === key)) throw new Error('missing issue ' + key + ' in ' + JSON.stringify(arr.map(i => i.textKey))); }
function lacks(arr, key) { if (arr.some(i => i.textKey === key)) throw new Error('unexpected issue ' + key); }

const DKIM_OK = 'v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu3YkRJu2iOhdB9XzXjyNnjo1ssq/fFd9tO/Ssl3h8LxRKfZ0BTxzkrcCWGj0nQ8xLxgF2uPnXbeqlX6iKY0Qz4RGCOlGEsmAyQmAo0XPsVpBg6sRlLN9nRtKZoClYE7q9Yh8CRYg0q+V0hYXzTT1D9QexLy2PnI1a6M8MECMmO/C5wRe8ovj9Zt1S4gOv6W3TbJmy7ja9XjVdvUyYAZIfR6U3vUQ0k7Wq8G1LDbtjeIbGXg6B2VQWTFkPm3gH6NU+ufe8Lgyi3rHpjbyYx1lJ7OiD5OIUHpLD9jGE/C0Rg4jWMa5pkkvpQeyeRZMJYvANoEa8e2iCRX7XsPzaoBBwIDAQAB';

test('A1 revoked DKIM selector does not fail the check', async () => {
  const app = load();
  app.txt('s1._domainkey.example.com', DKIM_OK);
  app.txt('old._domainkey.example.com', 'v=DKIM1; k=rsa; p=');
  const r = await app.checkDKIM('example.com', ['s1', 'old']);
  eq(r.found.length, 2, 'found');
  eq(r.rating, 'good', 'rating ignores revoked');
  app.resetScan();
  app.txt('zzold._domainkey.revoked.example', 'v=DKIM1; k=rsa; p=');
  const r2 = await app.checkDKIM('revoked.example', ['zzold']);
  eq(r2.rating, 'warning', 'only revoked → warning');
  eq(r2.messageKey, 'DKIM_ONLY_REVOKED');
});

test('A2 null MX: DANE not applicable, not fail', async () => {
  const app = load();
  app.rr('example.com', 'MX', 15, ['0 .'], { AD: true });
  const mx = await app.checkMX('example.com');
  eq(mx.nullMX, true);
  const d = await app.checkDANE('example.com');
  eq(d.rating, 'good', 'dane');
  eq(d.messageKey, 'DANE_NULL_MX');
  eq(app.log.filter(u => u.includes('_25._tcp.')).length, 0, 'no TLSA query for empty host');
});

test('A3 SPF redirect target unreachable → fail, not excellent', async () => {
  const app = load();
  app.txt('example.com', 'v=spf1 redirect=_spf.other.net');
  app.dns.set('_spf.other.net|TXT', new TypeError('Failed to fetch'));
  const r = await app.checkSPF('example.com');
  eq(r.rating, 'fail');
  has(r.issues, 'SPF_REDIRECT_ERROR');
});

test('A4 SPF redirect ignored when all present', async () => {
  const app = load();
  app.txt('example.com', 'v=spf1 ip4:1.2.3.4 -all redirect=_spf.other.net');
  app.txt('_spf.other.net', 'v=spf1 +all');
  const r = await app.checkSPF('example.com');
  eq(r.redirectDomain, null, 'not followed');
  eq(r.allQualifier, '-');
  eq(r.rating, 'excellent');
  has(r.issues, 'SPF_REDIRECT_IGNORED');
});

test('A5 SERVFAIL is reported as an error, not "no record"', async () => {
  const app = load();
  app.dns.set('example.com|TXT', { Status: 2 });
  app.dns.set('example.com|DNSKEY', { Status: 2 });
  app.dns.set('example.com|SOA', { Status: 2 });
  app.dns.set('_smtp._tls.example.com|TXT', { Status: 2 });
  app.dns.set('_mta-sts.example.com|TXT', { Status: 2 });
  app.dns.set('example.com|CAA', { Status: 2 });
  app.dns.set('_dmarc.example.com|TXT', { Status: 2 });
  for (const fn of ['checkSPF', 'checkDNSSEC', 'checkTLSRPT', 'checkMTASTS', 'checkCAA', 'checkDMARC']) {
    const r = await app[fn]('example.com');
    eq(r.error, true, fn + ' error');
    eq(r.messageKey, 'DNS_SERVFAIL', fn + ' key');
  }
  // network failure on the main SPF lookup is not "no record"
  const app2 = load();
  app2.dns.set('example.com|TXT', new TypeError('Failed to fetch'));
  const s = await app2.checkSPF('example.com');
  eq(s.error, true, 'spf network error');
  eq(s.noRecord, undefined);
});

test('A6 DANE: PKIX usage → warning; invalid TLSA flagged; partial → good', async () => {
  { // multi-line presentation form with parentheses (Cloudflare) is valid, not malformed
    const app = load();
    const d = app.parseTLSAData('3 1 1 ( ' + '9A'.repeat(32) + ' )');
    eq(d.certData.length, 64); eq(app.tlsaInvalidReason(d), null, 'parentheses stripped');
  }
  const app = load();
  app.rr('example.com', 'MX', 15, ['10 mx1.example.com.', '20 mx2.example.com.'], { AD: true });
  app.rr('_25._tcp.mx1.example.com', 'TLSA', 52, ['3 1 1 ' + 'ab'.repeat(32)], { AD: true });
  app.rr('_25._tcp.mx2.example.com', 'TLSA', 52, ['1 1 1 ' + 'ab'.repeat(32)], { AD: true });
  const r = await app.checkDANE('example.com');
  eq(r.hosts[0].rating, 'excellent');
  eq(r.hosts[1].rating, 'warning', 'PKIX-EE');
  eq(r.rating, 'warning');
  app.resetScan();
  app.rr('_25._tcp.mx2.example.com', 'TLSA', 52, ['3 1 1 abcd'], { AD: true });
  const r2 = await app.checkDANE('example.com');
  eq(r2.hosts[1].invalid, 1, 'invalid count');
  eq(r2.hosts[1].rating, 'fail');
  app.resetScan();
  app.dns.delete('_25._tcp.mx2.example.com|TLSA');
  const r3 = await app.checkDANE('example.com');
  eq(r3.rating, 'good', 'partial coverage');
});

test('A7 TLS-RPT: bad URI is not erased by a later https URI', async () => {
  const app = load();
  app.txt('_smtp._tls.example.com', 'v=TLSRPTv1; rua=bogus:x,https://r.example.net/x');
  const r = await app.checkTLSRPT('example.com');
  eq(r.rating, 'warning');
  app.resetScan();
  app.txt('_smtp._tls.example.com', 'v=TLSRPTv1; rua=mailto:a@example.com,https://r.example.net/x');
  eq((await app.checkTLSRPT('example.com')).rating, 'excellent');
});

test('A8 CAA: iodef alone is not excellent; parent climb for subdomains', async () => {
  const app = load();
  app.rr('example.com', 'CAA', 257, ['0 iodef "mailto:sec@example.com"']);
  const r = await app.checkCAA('example.com');
  eq(r.rating, 'warning');
  has(r.issues, 'CAA_NO_RESTRICTION');
  app.resetScan();
  app.rr('example.com', 'CAA', 257, ['0 issue "letsencrypt.org"', '0 iodef "mailto:sec@example.com"']);
  app.dns.set('mail.example.com|CAA', { Status: 0, Answer: [] });
  const r2 = await app.checkCAA('mail.example.com');
  eq(r2.rating, 'excellent');
  eq(r2.climbedTo, 'example.com');
  app.resetScan();
  app.rr('example.com', 'CAA', 257, ['0 issue "letsencrypt.org"']);
  eq((await app.checkCAA('example.com')).rating, 'good', 'restriction without iodef');
});

test('A9 DMARC: spaces around =, case, sp=none, pct range', async () => {
  const app = load();
  app.txt('_dmarc.example.com', 'v = DMARC1; p = reject; adkim=S; sp=none; rua=mailto:d@example.com');
  const r = await app.checkDMARC('example.com');
  eq(r.parsed.p, 'reject');
  has(r.issues, 'DMARC_POLICY_REJECT');
  has(r.issues, 'DMARC_ADKIM_STRICT');
  eq(r.rating, 'warning', 'sp=none lowers rating');
  app.resetScan();
  app.txt('_dmarc.example.com', 'v=DMARC1; p=reject; pct=150; rua=mailto:d@example.com');
  const r2 = await app.checkDMARC('example.com');
  has(r2.issues, 'DMARC_PCT_INVALID');
});

test('A10 DMARC: subdomain inherits organizational policy', async () => {
  const app = load();
  app.txt('_dmarc.example.com', 'v=DMARC1; p=reject; sp=quarantine; rua=mailto:d@example.com');
  app.dns.set('_dmarc.mail.example.com|TXT', { Status: 3 });
  app.dns.set('_dmarc.com|TXT', { Status: 0, Answer: [] });
  const r = await app.checkDMARC('mail.example.com');
  eq(r.rating, 'good', 'graded on sp=quarantine');
  eq(r.inheritedFrom, 'example.com');
  has(r.issues, 'DMARC_INHERITED');
  has(r.issues, 'DMARC_POLICY_QUARANTINE');
});

test('A11 MTA-STS: HTML body is not a policy; max_age required; errors are keys', async () => {
  const app = load();
  app.txt('_mta-sts.example.com', 'v=STSv1; id=20240101');
  app.rr('example.com', 'MX', 15, ['10 mx.example.com.']);
  app.http.set('https://mta-sts.example.com/.well-known/mta-sts.txt', { status: 200, body: '<html>nope</html>' });
  const r = await app.checkMTASTS('example.com');
  eq(r.rating, 'warning'); has(r.issues, 'MTASTS_NOT_A_POLICY');
  app.resetScan();
  app.http.set('https://mta-sts.example.com/.well-known/mta-sts.txt', { status: 200, body: 'version: STSv1\nmode: enforce\nmx: mx.example.com\n' });
  const r2 = await app.checkMTASTS('example.com');
  has(r2.issues, 'MTASTS_NO_MAX_AGE'); eq(r2.rating, 'warning');
  app.resetScan();
  app.http.set('https://mta-sts.example.com/.well-known/mta-sts.txt', { status: 404, body: '' });
  const r3 = await app.checkMTASTS('example.com');
  const err = r3.issues.find(i => i.textKey === 'MTASTS_POLICY_ERROR');
  eq(err.textArgs[0].key, 'MTASTS_ERR_HTTP'); eq(r3.policyErrorKey, 'MTASTS_ERR_HTTP');
  app.resetScan();
  app.http.set('https://mta-sts.example.com/.well-known/mta-sts.txt', new TypeError('Failed to fetch'));
  eq((await app.checkMTASTS('example.com')).corsBlocked, true);
});

test('A13 WHOIS: excellent when locked, warning on hold/expired, subdomain uses registrable domain', async () => {
  const app = load();
  const future = new Date(Date.now() + 400 * 86400000).toISOString();
  app.http.set('https://rdap.org/domain/example.com', { status: 200, body: JSON.stringify({ handle: 'X', status: ['client transfer prohibited', 'client delete prohibited', 'client update prohibited'], events: [{ eventAction: 'expiration', eventDate: future }], entities: [], nameservers: [] }) });
  app.http.set('https://rdap.org/domain/mail.example.com', { status: 404, body: '' });
  const r = await app.checkWHOIS('mail.example.com');
  eq(r.rating, 'excellent'); eq(r.queriedDomain, 'example.com');
  app.resetScan();
  app.http.set('https://rdap.org/domain/example.com', { status: 200, body: JSON.stringify({ handle: 'X', status: ['client hold'], events: [{ eventAction: 'expiration', eventDate: future }], entities: [], nameservers: [] }) });
  eq((await app.checkWHOIS('example.com')).rating, 'warning');
  app.resetScan();
  app.http.set('https://rdap.org/domain/example.com', { status: 200, body: JSON.stringify({ handle: 'X', status: ['active'], events: [{ eventAction: 'expiration', eventDate: future }], entities: [], nameservers: [] }) });
  eq((await app.checkWHOIS('example.com')).rating, 'good');
});

test('B5 security.txt: HTML 200 rejected, __proto__ line safe, ratings aligned', async () => {
  const app = load();
  const base = 'https://example.com';
  app.http.set(base + '/.well-known/security.txt', { status: 200, body: '<!doctype html><html></html>', headers: { 'content-type': 'text/html' } });
  app.http.set(base + '/security.txt', { status: 200, body: 'Contact: mailto:s@example.com\n__proto__: x\nconstructor: y\n', headers: { 'content-type': 'text/plain' } });
  const r = await app.checkSecurityTxt('example.com');
  eq(r.found, true); eq(r.fetchedUrl, base + '/security.txt');
  eq(r.rating, 'warning', 'missing Expires → warning');
  app.resetScan();
  app.http.set(base + '/security.txt', { status: 200, body: 'Contact: mailto:s@example.com\nExpires: 2020-01-01T00:00:00Z\n', headers: { 'content-type': 'text/plain' } });
  eq((await app.checkSecurityTxt('example.com')).rating, 'fail', 'expired → fail');
});

test('B10 dohCache: a late rejection does not evict a newer in-flight entry', async () => {
  const app = load();
  let rejectOld;
  app.dns.set('x.example.com|TXT', () => new Promise((_, rej) => { rejectOld = rej; }));
  // The stub returns the body via json(); make the whole fetch hang instead.
  app.dns.set('x.example.com|TXT', new Promise((_, rej) => { rejectOld = rej; }));
  const p1 = app.dohQuery('x.example.com', 'TXT').catch(() => 'old-failed');
  app.clearDNSCaches();
  app.txt('x.example.com', 'v=spf1 -all');
  const p2 = app.dohQuery('x.example.com', 'TXT');
  rejectOld(new TypeError('Failed to fetch'));
  await p1;
  eq(app.dohCache.get('x.example.com|TXT') === p2, true, 'new entry survives');
});

test('B11 DNSSEC: malformed DNSKEY and REVOKE flag', async () => {
  const app = load();
  app.rr('example.com', 'DNSKEY', 48, ['257 3', '385 3 ECDSAP256SHA256 AAAA', '256 3 RSASHA1 BBBB'], { AD: true });
  app.rr('example.com', 'SOA', 6, ['ns1.example.com. h.example.com. 1 2 3 4 5'], { AD: true });
  const r = await app.checkDNSSEC('example.com');
  eq(r.error, undefined, 'no throw');
  eq(r.rating, 'warning', 'RSASHA1 decides, revoked ECDSA skipped');
});

test('A12 helper: ratingLabel is translated', async () => {
  const app = load();
  app.currentLang = 'no';
  if (app.ts('RATING_EXCELLENT') === 'RATING_EXCELLENT') throw new Error('key missing');
  eq(app.ts('RATING_EXCELLENT') !== 'excellent', true);
});

test('B8 RIPE caches share in-flight lookups and dedupe IPs; failures not cached', async () => {
  const app = load();
  let calls = 0;
  app.http.set('https://stat.ripe.net/data/network-info/data.json?resource=192.0.2.1&sourceapp=email-security-checker', () => { calls++; return { status: 200, body: JSON.stringify({ data: { asns: ['64500'], prefix: '192.0.2.0/24' } }) }; });
  app.http.set('https://stat.ripe.net/data/rpki-validation/data.json?resource=AS64500&prefix=192.0.2.0%2F24&sourceapp=email-security-checker', { status: 200, body: JSON.stringify({ data: { status: 'valid', validating_roas: [] } }) });
  const [a, b] = await Promise.all([app.rpkiLookupIP('192.0.2.1'), app.rpkiLookupIP('192.0.2.1')]);
  eq(calls, 1, 'one network-info call for two concurrent lookups');
  eq(a.status, 'valid'); eq(a === b, true);
  // holder failure is not cached for the session
  let hcalls = 0;
  app.http.set('https://stat.ripe.net/data/as-overview/data.json?resource=AS64500&sourceapp=email-security-checker', () => { hcalls++; return hcalls === 1 ? new TypeError('Failed to fetch') : { status: 200, body: JSON.stringify({ data: { holder: 'EXAMPLE-AS' } }) }; });
  eq(await app.fetchASNHolder('64500'), null);
  eq(await app.fetchASNHolder('64500'), 'EXAMPLE-AS', 'retried after failure');
  // checkRPKI: NS and MX sharing one IP → one lookup
  app.resetScan();
  app.rr('example.com', 'NS', 2, ['ns1.example.com.']);
  app.rr('example.com', 'MX', 15, ['10 ns1.example.com.']);
  app.rr('ns1.example.com', 'A', 1, ['192.0.2.1']);
  app.http.set('https://stat.ripe.net/data/aspa/data.json?resource=AS64500&sourceapp=email-security-checker', { status: 200, body: JSON.stringify({ data: { provider_asns: [] } }) });
  const r = await app.checkRPKI('example.com');
  eq(r.rating, 'excellent'); eq(r.hosts.length, 1); eq(r.hosts[0].isNS && r.hosts[0].isMX, true);
});

test('B8 RPKI: multi-origin prefix is rated on the worst origin; errors cap at good', async () => {
  const app = load();
  app.http.set('https://stat.ripe.net/data/network-info/data.json?resource=192.0.2.2&sourceapp=email-security-checker', { status: 200, body: JSON.stringify({ data: { asns: ['64500', '64501'], prefix: '192.0.2.0/24' } }) });
  app.http.set('https://stat.ripe.net/data/rpki-validation/data.json?resource=AS64500&prefix=192.0.2.0%2F24&sourceapp=email-security-checker', { status: 200, body: JSON.stringify({ data: { status: 'valid' } }) });
  app.http.set('https://stat.ripe.net/data/rpki-validation/data.json?resource=AS64501&prefix=192.0.2.0%2F24&sourceapp=email-security-checker', { status: 200, body: JSON.stringify({ data: { status: 'invalid' } }) });
  const r = await app.rpkiLookupIP('192.0.2.2');
  eq(r.status, 'invalid'); eq(r.asns, ['64500', '64501']);
});

test('B9 WARP is only reported on a positive warp=on/plus line', async () => {
  for (const [trace, expected] of [['fl=1\nwarp=on\n', 'warp'], ['fl=1\n', 'not-warp'], ['warp=off\n', 'not-warp']]) {
    const app = load();
    app.http.set('https://isbgpsafeyet.com/cdn-cgi/trace', { status: 200, body: trace });
    app.http.set('https://valid.rpki.isbgpsafeyet.com/*', { status: 200, body: JSON.stringify({ asn: 1, name: 'x' }) });
    app.http.set('https://invalid.rpki.isbgpsafeyet.com/*', new TypeError('Failed to fetch'));
    const r = await app.runBGPSafetyTest();
    eq(r.status === 'warp' ? 'warp' : 'not-warp', expected, JSON.stringify(trace));
  }
});

test('C3 DMARC tree walk issues its lookups in parallel and stops at psd=', async () => {
  const app = load();
  const order = [];
  const answer = (name, psd) => () => { order.push(name); return { Status: 0, Answer: psd ? [{ name, type: 16, data: '"v=DMARC1; p=reject; psd=' + psd + '"' }] : [] }; };
  const domain = 'a.b.c.d.e.f.g.h.i.j.mail.example.com';
  app.dns.set('_dmarc.' + domain + '|TXT', { Status: 0, Answer: [] });
  for (const n of ['g.h.i.j.mail.example.com', 'h.i.j.mail.example.com', 'i.j.mail.example.com', 'j.mail.example.com', 'mail.example.com']) app.dns.set('_dmarc.' + n + '|TXT', answer(n, null));
  app.dns.set('_dmarc.example.com|TXT', answer('example.com', 'n'));
  app.dns.set('_dmarc.com|TXT', answer('com', 'y'));
  const tw = await app.dmarcTreeWalk(domain, null, false);
  eq(tw.steps.length, 7, 'author + six (stopped at example.com psd=n; com not consumed)');
  eq(tw.orgDomain, 'example.com'); eq(tw.orgRule, 'psd-n');
  eq(order.length, 7, 'all seven candidates queried at once');
});

test('C9 DoH falls back to Google on a Cloudflare network error', async () => {
  const app = load();
  app.dns.set('example.com|TXT', (name, type, host) => { if (host === 'cloudflare-dns.com') throw new TypeError('Failed to fetch'); return { Status: 0, Answer: [{ name, type: 16, data: '"v=spf1 -all"' }] }; });
  const r = await app.checkSPF('example.com');
  eq(r.rating, 'excellent');
  eq(app.scanStats.dohFallbacks >= 1, true, 'fallback counted');
  eq(app.log.some(u => u.startsWith('https://dns.google/')), true);
});

test('B4 a stored bogus language name falls back to en', async () => {
  const app = load();
  eq(app.currentLang, 'en');
});

test('D2 DKIM wildcard control probe: identical answers are not discoveries, cap at warning', async () => {
  const app = load();
  // Wildcard key under _domainkey: every selector, including the random control, answers with it.
  app.txt('*._domainkey.wild.example', DKIM_OK);
  const r = await app.checkDKIM('wild.example', []);
  eq(!!r.wildcard, true, 'wildcard detected');
  eq(r.wildcard.selector, '*');
  eq(r.found.length, 0, 'no selector is a genuine discovery');
  eq(r.wildcardHits > 50, true, 'all probed selectors hit the wildcard');
  eq(r.rating, 'warning');
  has(r.issues, 'DKIM_WILDCARD');
  // An explicit selector whose record differs from the wildcard is genuine.
  app.resetScan();
  app.txt('real._domainkey.wild.example', 'v=DKIM1; k=rsa; t=y; p=' + DKIM_OK.slice(DKIM_OK.indexOf('p=') + 2));
  const r2 = await app.checkDKIM('wild.example', ['real']);
  eq(r2.found.map(s => s.selector), ['real']);
  eq(r2.rating, 'warning', 'wildcard still caps the rating');
  has(r2.issues, 'DKIM_TESTING_FLAG');
  // No wildcard: the control probe is NXDOMAIN and changes nothing; t=y alone caps at good.
  app.resetScan();
  app.txt('s1._domainkey.plain.example', 'v=DKIM1; k=rsa; t=y; p=' + DKIM_OK.slice(DKIM_OK.indexOf('p=') + 2));
  const r3 = await app.checkDKIM('plain.example', []);
  eq(r3.wildcard, null); eq(r3.rating, 'good'); has(r3.issues, 'DKIM_TESTING_FLAG');
  // Legacy policy records are reported, never rated.
  app.resetScan();
  app.txt('s1._domainkey.legacy.example', DKIM_OK);
  app.txt('_adsp._domainkey.legacy.example', 'dkim=all');
  const r4 = await app.checkDKIM('legacy.example', []);
  eq(r4.rating, 'good'); has(r4.issues, 'DKIM_LEGACY_POLICY');
  // Ed25519: p= must be exactly 32 bytes.
  eq(app.parseDKIMRecord('v=DKIM1; k=ed25519; p=11qYAYKxCrfVS/7TyWQHOg7hcvPapiMlrwIaaPcHURo=').rating, 'excellent');
  eq(app.parseDKIMRecord('v=DKIM1; k=ed25519; p=11qYAYKxCrfVS/7TyWQHOg7hcvPapiMlrwIaaPcH').rating, 'fail');
});

test('D1 DNSSEC depth: DS match, RRSIG lifetime, NSEC3, RSA size, registry cross-check', async () => {
  const KSK = 'mdsswUyr3DPW132mOi8V9xESWE8jTo0dxCjjnopKl+GqJxpVXckHAeF+KkxLbxILfDLUT0rAK9iUzy1L53eKGQ==';
  const ZSK = 'oJMRESz5E4gYzS/q6XDrvU1qMPYIjCWzJaOau8XNEZeqCYKD5ar0IRd8KqXXFJkqmVfRvMGPmM1x8fGAa2XhSA==';
  const DS  = '2371 13 2 32996839a6d808afe3eb4a795a0e6a7a39a76fc52ff228b22b76f6d63826f2b9';
  const now = Math.floor(Date.now() / 1000);
  const rrsig = (type, exp, inc) => type + ' 13 2 3600 ' + exp + ' ' + inc + ' 2371 example.com. c2ln';
  const setup = (app, { ds = [DS], exp = now + 30 * 86400, inc = now - 5 * 86400, n3 = '1 0 0 -', keys = ['257 3 ECDSAP256SHA256 ' + KSK, '256 3 ECDSAP256SHA256 ' + ZSK], rdap } = {}) => {
    app.rr('example.com', 'DNSKEY', 48, keys, { AD: true });
    app.dns.set('example.com|DNSKEY', { Status: 0, AD: true, Answer: [
      ...keys.map(d => ({ name: 'example.com', type: 48, data: d })),
      { name: 'example.com', type: 46, data: rrsig('DNSKEY', exp, inc) }] });
    app.dns.set('example.com|SOA', { Status: 0, AD: true, Answer: [
      { name: 'example.com', type: 6, data: 'ns1.example.com. h.example.com. 1 2 3 4 5' },
      { name: 'example.com', type: 46, data: rrsig('soa', exp + 86400, inc) }] });
    app.rr('example.com', 'DS', 43, ds, { AD: true });
    if (n3) app.rr('example.com', 'NSEC3PARAM', 51, [n3], { AD: true });
    if (rdap) app.http.set('https://rdap.org/domain/example.com', { status: 200, body: JSON.stringify({ secureDNS: rdap }) });
  };
  let app = load();
  eq(app.dnskeyKeyTag(257, 3, 13, KSK), 2371, 'RFC 4034 key tag');
  setup(app, { rdap: { delegationSigned: true, dsData: [{ keyTag: 2371, algorithm: 13, digestType: 2, digest: '32996839A6D808AFE3EB4A795A0E6A7A39A76FC52FF228B22B76F6D63826F2B9' }] } });
  let r = await app.checkDNSSECFull('example.com');
  eq(r.rating, 'excellent'); eq(r.depth.zone, 'example.com');
  for (const k of ['DNSSEC_DS_OK', 'DNSSEC_RDAP_MATCH', 'DNSSEC_RRSIG_OK', 'DNSSEC_NSEC3_GOOD']) has(r.depth.issues, k);
  const resolves = iss => { for (const i of iss) { const s = i.textArgs ? app.td(i.textKey, ...i.textArgs) : app.ts(i.textKey); if (s === i.textKey) throw new Error('issue does not resolve: ' + i.textKey); } };
  resolves(r.depth.issues);
  eq(r.depth.ds[0].matched, true); eq(r.depth.rrsig.typeCovered, 'DNSKEY'); eq(r.depth.nsec3.iterations, 0);
  // island of security + expired signature + registry mismatch
  app = load();
  setup(app, { ds: [], exp: now - 3600, inc: now - 10 * 86400, rdap: { delegationSigned: true, dsData: [{ keyTag: 1111, algorithm: 13, digestType: 2, digest: 'ab' }] } });
  app.dns.set('example.com|DS', { Status: 0, AD: true, Answer: [] });
  r = await app.checkDNSSECFull('example.com');
  eq(r.rating, 'fail'); has(r.depth.issues, 'DNSSEC_NO_DS'); has(r.depth.issues, 'DNSSEC_RRSIG_EXPIRED'); has(r.depth.issues, 'DNSSEC_RDAP_MISMATCH');
  // stale DS + SHA-1 DS + NSEC3 iterations > 100 + near-expiry signature → warning
  app = load();
  setup(app, { ds: [DS, '9999 13 2 ' + 'ab'.repeat(32), '2371 13 1 ' + 'ab'.repeat(20)], exp: now + 3600, inc: now - 10 * 86400, n3: '1 1 150 AABB' });
  r = await app.checkDNSSECFull('example.com');
  eq(r.rating, 'warning');
  for (const k of ['DNSSEC_DS_STALE', 'DNSSEC_DS_SHA1', 'DNSSEC_NSEC3_HIGH', 'DNSSEC_NSEC3_OPTOUT', 'DNSSEC_RRSIG_NEAR']) has(r.depth.issues, k);
  resolves(r.depth.issues);
  // no DS matches any key → fail
  app = load();
  setup(app, { ds: ['9999 13 2 ' + 'ab'.repeat(32)] });
  r = await app.checkDNSSECFull('example.com');
  eq(r.rating, 'fail'); has(r.depth.issues, 'DNSSEC_DS_NONE_MATCH');
  // RSA 1024-bit key (RFC 3110: exponent length, exponent, modulus) → warning; KSK alg without DS → informational
  const rsa1024 = Buffer.concat([Buffer.from([3, 1, 0, 1]), Buffer.alloc(128, 0x80)]).toString('base64');
  eq(app.dnskeyRSABits(rsa1024), 1024);
  app = load();
  setup(app, { keys: ['257 3 ECDSAP256SHA256 ' + KSK, '256 3 RSASHA256 ' + rsa1024, '257 3 RSASHA256 ' + rsa1024] });
  r = await app.checkDNSSECFull('example.com');
  has(r.depth.issues, 'DNSSEC_KEY_SMALL'); has(r.depth.issues, 'DNSSEC_ALG_NO_DS');
  eq(r.depth.issues.find(i => i.textKey === 'DNSSEC_ALG_NO_DS').info, true, 'informational');
  eq(r.rating, 'warning');
  // a hostname inside the zone: depth runs on the apex
  app = load();
  setup(app);
  app.dns.set('mail.example.com|DNSKEY', { Status: 0, AD: true, Answer: [] });
  app.dns.set('mail.example.com|SOA', { Status: 0, AD: true, Answer: [], Authority: [{ name: 'example.com', type: 6, data: 'ns1.example.com. h.example.com. 1 2 3 4 5' }] });
  r = await app.checkDNSSECFull('mail.example.com');
  eq(r.zone, 'example.com'); eq(r.depth.zone, 'example.com'); has(r.depth.issues, 'DNSSEC_DS_OK');
  // unsigned zone: no depth section
  app = load();
  app.rr('plain.example', 'SOA', 6, ['ns1.plain.example. h.plain.example. 1 2 3 4 5']);
  app.dns.set('plain.example|DNSKEY', { Status: 0, Answer: [] });
  r = await app.checkDNSSECFull('plain.example');
  eq(r.rating, 'fail'); eq(r.depth, undefined);
});

test('D5 cross-protocol coherence', async () => {
  const run = async (app, over = {}) => {
    const P = k => Promise.resolve(over[k] !== undefined ? over[k] : base[k]);
    return app.checkCoherence({ dane: P('dane'), spf: P('spf'), dmarc: P('dmarc'), bimi: P('bimi'), tlsrpt: P('tlsrpt'), mtasts: P('mtasts') });
  };
  const base = {
    dane:   { rating: 'fail', hosts: [{ hostname: 'mx.example.com', records: [], ad: false, usable: 0 }] },
    spf:    { rating: 'excellent', records: ['v=spf1 -all'] },
    dmarc:  { rating: 'excellent', parsed: { v: 'DMARC1', p: 'reject', rua: 'mailto:dmarc@reports.example' }, pct: 100 },
    bimi:   { rating: 'fail', record: null },
    tlsrpt: { rating: 'warning', record: null, rua: [] },
    mtasts: { rating: 'warning', record: null, policy: null },
  };
  let app = load();
  app.rr('reports.example', 'MX', 15, ['10 mx.reports.example.']);
  let c = await run(app);
  eq(c.issues.map(i => i.textKey), ['COH_RUA_DELIVERABLE'], 'baseline is coherent');
  eq(c.delivery['reports.example'], 'mx');
  // TLS-RPT with nothing to report on
  c = await run(app, { tlsrpt: { rating: 'good', record: 'v=TLSRPTv1; rua=mailto:tls@reports.example', rua: ['mailto:tls@reports.example'] } });
  has(c.issues, 'COH_TLSRPT_NO_POLICY');
  // ...but an MTA-STS record whose policy could not be fetched (CORS) is not "absent"
  c = await run(app, { tlsrpt: { rating: 'good', record: 'v=TLSRPTv1; rua=mailto:tls@reports.example', rua: ['mailto:tls@reports.example'] },
                       mtasts: { rating: 'warning', record: 'v=STSv1; id=1', policy: null, policyErrorKey: 'MTASTS_ERR_CORS' } });
  lacks(c.issues, 'COH_TLSRPT_NO_POLICY');
  // MTA-STS testing without TLS-RPT; enforce + DANE = belt and braces
  c = await run(app, { mtasts: { rating: 'good', record: 'v=STSv1; id=1', policy: { mode: 'testing', mx: ['mx.example.com'], max_age: '86400' } } });
  has(c.issues, 'COH_MTASTS_TESTING_BLIND');
  c = await run(app, { mtasts: { rating: 'excellent', record: 'v=STSv1; id=1', policy: { mode: 'enforce', mx: ['mx.example.com'], max_age: '86400' } },
                       dane: { rating: 'excellent', hosts: [{ hostname: 'mx.example.com', records: [{ usage: 3 }], ad: true, usable: 1 }] },
                       tlsrpt: { rating: 'good', record: 'v=TLSRPTv1; rua=mailto:tls@reports.example', rua: ['mailto:tls@reports.example'] } });
  has(c.issues, 'COH_BELT_AND_BRACES'); lacks(c.issues, 'COH_TLSRPT_NO_POLICY'); lacks(c.issues, 'COH_MTASTS_TESTING_BLIND');
  // BIMI vs DMARC
  c = await run(app, { bimi: { rating: 'good', record: 'v=BIMI1; l=https://x/logo.svg', parsed: { l: 'https://x/logo.svg' } },
                       dmarc: { rating: 'warning', parsed: { v: 'DMARC1', p: 'none', sp: 'none', pct: '50', rua: 'mailto:dmarc@reports.example' }, pct: 50 } });
  const b = c.issues.find(i => i.textKey === 'COH_BIMI_DMARC');
  eq(!!b, true); eq(b.textArgs[0], 'p=none, pct=50, sp=none');
  c = await run(app, { bimi: { rating: 'good', record: 'v=BIMI1; l=https://x/logo.svg', parsed: { l: 'https://x/logo.svg' } } });
  lacks(c.issues, 'COH_BIMI_DMARC');
  // inherited policy: the applied tag counts
  c = await run(app, { bimi: { rating: 'good', record: 'v=BIMI1; l=https://x/logo.svg', parsed: {} },
                       dmarc: { rating: 'warning', parsed: { v: 'DMARC1', p: 'reject', sp: 'none', rua: 'mailto:dmarc@reports.example' }, pct: 100, inheritedFrom: 'example.com', appliedTag: 'sp' } });
  has(c.issues, 'COH_BIMI_DMARC');
  // DMARC enforcing with no SPF
  c = await run(app, { spf: { rating: 'fail', records: [] } });
  has(c.issues, 'COH_DMARC_NO_SPF');
  // undeliverable report destination (no MX, no A) and null MX; implicit MX via A is fine
  app = load();
  app.dns.set('dead.example|MX', { Status: 0, Answer: [] });
  app.rr('nullmx.example', 'MX', 15, ['0 .']);
  app.dns.set('a-only.example|MX', { Status: 0, Answer: [] });
  app.rr('a-only.example', 'A', 1, ['192.0.2.1']);
  c = await run(app, { dmarc: { rating: 'excellent', parsed: { v: 'DMARC1', p: 'reject', rua: 'mailto:a@dead.example, mailto:b@nullmx.example', ruf: 'mailto:c@a-only.example' }, pct: 100 } });
  eq(c.delivery, { 'dead.example': 'none', 'nullmx.example': 'null-mx', 'a-only.example': 'implicit' });
  eq(c.issues.filter(i => i.textKey === 'COH_RUA_UNDELIVERABLE').map(i => i.textArgs[0]).sort(), ['dead.example', 'nullmx.example']);
  lacks(c.issues, 'COH_RUA_DELIVERABLE');
  // every issue resolves to text in every language
  for (const lang of ['en', 'no', 'es', 'fr']) { app.currentLang = lang; for (const i of c.issues) { const s = i.textArgs ? app.td(i.textKey, ...i.textArgs) : app.ts(i.textKey); if (s === i.textKey) throw new Error('unresolved ' + i.textKey + ' in ' + lang); } }
  // skipped MTA-STS is unknown, not absent: no TLS-RPT finding
  c = await run(load(), { mtasts: { skipped: true, rating: 'skip' }, tlsrpt: { rating: 'good', record: 'v=TLSRPTv1; rua=https://r.example/x', rua: ['https://r.example/x'] } });
  lacks(c.issues, 'COH_TLSRPT_NO_POLICY');
});

test('D3 MX hygiene and HELO SPF', async () => {
  let app = load();
  app.rr('example.com', 'MX', 15, ['10 mx1.example.com.', '20 alias.example.com.', '30 192.0.2.9', '40 ghost.example.com.', '10 mx1.example.com.'], { AD: true });
  app.rr('mx1.example.com', 'A', 1, ['192.0.2.1']);
  app.txt('mx1.example.com', 'v=spf1 a -all');
  app.dns.set('alias.example.com|A', { Status: 0, Answer: [{ name: 'alias.example.com', type: 5, data: 'mx1.example.com.' }, { name: 'mx1.example.com', type: 1, data: '192.0.2.1' }] });
  app.dns.set('ghost.example.com|A', { Status: 0, Answer: [] });
  app.dns.set('ghost.example.com|AAAA', { Status: 0, Answer: [] });
  let r = await app.checkMX('example.com');
  const keys = r.issues.map(i => i.textKey);
  for (const k of ['MX_DUPLICATE_HOST', 'MX_CNAME_TARGET', 'MX_IP_LITERAL', 'MX_UNRESOLVABLE']) has(r.issues, k);
  lacks(r.issues, 'MX_NONE_USABLE'); lacks(r.issues, 'MX_SINGLE_HOST');
  const H = n => r.hosts.find(h => h.hostname === n);
  eq(H('mx1.example.com').helo.allQualifier, '-', 'HELO SPF on mx1'); eq(H('alias.example.com').cname, true); eq(H('192.0.2.9').ipLiteral, true); eq(H('ghost.example.com').ips.length, 0);
  eq(keys.indexOf('MX_NONE_USABLE'), -1);
  // all unusable → fail
  app = load();
  app.rr('dead.example', 'MX', 15, ['10 ghost.dead.example.'], { AD: true });
  app.dns.set('ghost.dead.example|A', { Status: 0, Answer: [] }); app.dns.set('ghost.dead.example|AAAA', { Status: 0, Answer: [] });
  r = await app.checkMX('dead.example');
  eq(r.rating, 'fail'); has(r.issues, 'MX_NONE_USABLE'); has(r.issues, 'MX_SINGLE_HOST');
  // a clean single host: only the informational note, rating unchanged by hygiene
  app = load();
  app.rr('ok.example', 'MX', 15, ['10 mx.ok.example.'], { AD: false });
  app.rr('mx.ok.example', 'A', 1, ['192.0.2.1']);
  r = await app.checkMX('ok.example');
  eq(r.issues.map(i => i.textKey), ['MX_SINGLE_HOST']); eq(r.hosts[0].helo, null);
});

test('D4 SPF depth: permerrors, void lookups, mx host count, record length', async () => {
  let app = load();
  const a = app.analyzeSPF('v=spf1 inlcude:_spf.example.com ip4:192.0.2.0/24 foo=bar redirect=a.example redirect=b.example ?all', 'example.com');
  has(a.issues, 'SPF_UNKNOWN_MECH'); has(a.issues, 'SPF_DUPLICATE_MODIFIER'); eq(a.rating, 'fail');
  lacks(a.issues, 'SPF_SYNTAX');
  eq(app.analyzeSPF('v=spf1 ip4:192.0.2.0/24 -all', 'example.com').issues.some(i => i.rating === 'fail'), false, 'clean record has no permerror');
  has(app.analyzeSPF('v=spf1 ~~all -all', 'example.com').issues, 'SPF_SYNTAX');
  const long = 'v=spf1 ' + Array.from({ length: 40 }, (_, i) => 'ip4:198.51.' + i + '.0/24').join(' ') + ' -all';
  has(app.analyzeSPF(long, 'example.com').issues, 'SPF_RECORD_LONG');
  // include tree: no SPF at target, several at another, void lookups, too many MX hosts
  app = load();
  app.txt('example.com', 'v=spf1 include:none.example include:multi.example include:void1.example include:void2.example mx:big.example a:ghost.example -all');
  app.txt('none.example', 'something else');
  app.txt('multi.example', 'v=spf1 -all', 'v=spf1 ~all');
  // void1/void2 are NXDOMAIN by default; ghost has no A/AAAA
  app.dns.set('ghost.example|A', { Status: 0, Answer: [] }); app.dns.set('ghost.example|AAAA', { Status: 0, Answer: [] });
  app.rr('big.example', 'MX', 15, Array.from({ length: 11 }, (_, i) => (i + 1) + ' mx' + i + '.big.example.'));
  const r = await app.checkSPF('example.com');
  eq(r.rating, 'fail');
  for (const k of ['SPF_INCLUDE_NO_RECORD', 'SPF_INCLUDE_MULTI', 'SPF_MX_TOO_MANY', 'SPF_VOID_LOOKUPS']) has(r.issues, k);
  eq(r.voidLookups >= 3, true, 'void1 + void2 + ghost (+ none.example counts as a record, not void)');
  eq(r.issues.find(i => i.textKey === 'SPF_INCLUDE_NO_RECORD').textArgs[0], 'none.example');
  // a healthy include tree stays clean
  app = load();
  app.txt('example.com', 'v=spf1 include:_spf.example.com -all');
  app.txt('_spf.example.com', 'v=spf1 ip4:192.0.2.0/24 ~all');
  const ok = await app.checkSPF('example.com');
  eq(ok.rating, 'excellent'); eq(ok.voidLookups, 0); eq(ok.totalLookupCount, 1);
  for (const lang of ['en', 'no', 'es', 'fr']) { app.currentLang = lang; for (const i of r.issues) { const s = i.textArgs ? app.td(i.textKey, ...i.textArgs) : app.ts(i.textKey); if (s === i.textKey) throw new Error('unresolved ' + i.textKey + ' in ' + lang); } }
});

test('D8 WHOIS registrar locks: partial, registry, pending transfer, unknown, registry DNSSEC flag', async () => {
  const app = load();
  const future = new Date(Date.now() + 400 * 86400000).toISOString();
  const doc = (status, extra) => ({ status: 200, body: JSON.stringify({ handle: 'X', status, events: [{ eventAction: 'expiration', eventDate: future }], entities: [], nameservers: [], ...(extra || {}) }) });
  const run = async (status, extra) => { app.resetScan(); app.http.set('https://rdap.org/domain/example.com', doc(status, extra)); return app.checkWHOIS('example.com'); };
  let r = await run(['client transfer prohibited']);
  eq(r.rating, 'good', 'lone transfer lock is good'); eq(r.lockLevel, 'registrar'); eq(r.locks.transfer, true); eq(r.locks.delete, false);
  has(app.whoisLockIssues(r), 'WHOIS_LOCK_PARTIAL'); lacks(app.whoisLockIssues(r), 'WHOIS_LOCKED');
  r = await run(['server transfer prohibited', 'server delete prohibited', 'server update prohibited']);
  eq(r.rating, 'excellent'); eq(r.registryLock, true); eq(r.lockLevel, 'registry');
  has(app.whoisLockIssues(r), 'WHOIS_REGISTRY_LOCK'); has(app.whoisLockIssues(r), 'WHOIS_LOCKED');
  r = await run(['client transfer prohibited', 'client delete prohibited', 'client update prohibited', 'pending transfer']);
  eq(r.rating, 'warning'); eq(r.pendingTransfer, true); has(app.whoisLockIssues(r), 'WHOIS_PENDING_TRANSFER');
  r = await run([], { secureDNS: { delegationSigned: true, dsData: [{ keyTag: 1 }, { keyTag: 2 }] } });
  eq(r.rating, 'good'); eq(r.lockLevel, 'unknown'); eq(r.secureDNS.signed, true); eq(r.secureDNS.dsCount, 2);
  has(app.whoisLockIssues(r), 'WHOIS_LOCK_UNKNOWN'); lacks(app.whoisLockIssues(r), 'WHOIS_UNLOCKED');
  // registry says signed but DNS has no DNSKEY → broken chain
  app.lastResults = { dnssec: { status: 'fulfilled', value: { rating: 'fail', hasDNSKEY: false, ad: false } } };
  has(app.whoisLockIssues(r), 'WHOIS_DNSSEC_REG_ONLY');
  app.lastResults = { dnssec: { status: 'fulfilled', value: { rating: 'fail', error: true, messageKey: 'DNS_SERVFAIL' } } };
  has(app.whoisLockIssues(r), 'WHOIS_DNSSEC_REG_ONLY');
  // registry says unsigned but DNSKEY is published → island of security
  r = await run(['ok'], { secureDNS: { delegationSigned: false } });
  app.lastResults = { dnssec: { status: 'fulfilled', value: { rating: 'warning', hasDNSKEY: true, ad: false } } };
  has(app.whoisLockIssues(r), 'WHOIS_DNSSEC_DNS_ONLY'); has(app.whoisLockIssues(r), 'WHOIS_UNLOCKED');
  // a parent-domain RDAP answer (subdomain scan) never cross-checks
  lacks(app.whoisLockIssues({ ...r, queriedDomain: 'example.com' }), 'WHOIS_DNSSEC_DNS_ONLY');
  for (const lang of ['en', 'no', 'es', 'fr']) {
    app.currentLang = lang;
    for (const i of app.whoisLockIssues(r)) { const s = i.textArgs ? app.td(i.textKey, ...i.textArgs) : app.ts(i.textKey); if (s === i.textKey) throw new Error('unresolved ' + i.textKey + ' in ' + lang); }
    app.renderWHOIS({ status: 'fulfilled', value: r });
  }
});

test('D6 autoconfig: SRV parse, declined target, cleartext-only, targets, Autodiscover, ISPDB', async () => {
  let app = load();
  app.rr('example.com', 'MX', 15, ['10 mx.example.com.'], { AD: true });
  app.rr('_imaps._tcp.example.com', 'SRV', 33, ['0 1 993 imap.example.com.'], { AD: true });
  app.rr('_imap._tcp.example.com', 'SRV', 33, ['0 0 0 '], { AD: true });                  // Cloudflare's form of target "."
  app.rr('_submission._tcp.example.com', 'SRV', 33, ['10 1 2587 smtp2.example.com.', '0 1 587 smtp.example.com.'], { AD: true });
  app.rr('_pop3._tcp.example.com', 'SRV', 33, ['0 0 110 pop.example.com.']);              // not AD
  app.rr('_pop3s._tcp.example.com', 'SRV', 33, ['0 0 0 .'], { AD: true });                // Google's form
  app.rr('imap.example.com', 'A', 1, ['192.0.2.1']);
  app.rr('smtp.example.com', 'A', 1, ['192.0.2.2']);
  app.dns.set('smtp2.example.com|A', { Status: 0, Answer: [{ name: 'smtp2.example.com', type: 5, data: 'smtp.example.com.' }, { name: 'smtp.example.com', type: 1, data: '192.0.2.2' }] });
  app.dns.set('pop.example.com|A', { Status: 0, Answer: [] }); app.dns.set('pop.example.com|AAAA', { Status: 0, Answer: [] });
  app.rr('_autodiscover._tcp.example.com', 'SRV', 33, ['0 0 443 autodiscover.example.com.']);
  app.dns.set('autodiscover.example.com|A', { Status: 0, Answer: [{ name: 'autodiscover.example.com', type: 5, data: 'autodiscover.outlook.com.' }, { name: 'autodiscover.outlook.com', type: 1, data: '192.0.2.50' }] });
  app.rr('autoconfig.example.com', 'A', 1, ['192.0.2.60']);
  app.http.set('https://autoconfig.thunderbird.net/v1.1/example.com', { status: 200, body: '<clientConfig version="1.1"><emailProvider id="example.com"><domain>example.com</domain><displayName>Example Mail</displayName><incomingServer type="imap"><hostname>imap.example.com</hostname><port>143</port><socketType>plain</socketType></incomingServer><outgoingServer type="smtp"><hostname>smtp.example.com</hostname><port>465</port><socketType>SSL</socketType></outgoingServer></emailProvider></clientConfig>' });
  let r = await app.checkAutoconfig('example.com');
  const S = n => r.services.find(s => s.svc === n);
  eq(S('imaps').status, 'found'); eq(S('imaps').records[0].port, 993); eq(S('imaps').records[0].target, 'imap.example.com');
  eq(S('imap').status, 'declined'); eq(S('pop3s').status, 'declined'); eq(S('jmap').status, 'none');
  eq(S('submission').records.map(x => x.target).join(), 'smtp.example.com,smtp2.example.com', 'sorted by priority');
  eq(r.issues.filter(i => i.textKey === 'AUTOCONF_PREFER_IMPLICIT').map(i => i.rating + ':' + i.textArgs[0]).sort().join(), 'good:submission,warning:pop3');
  for (const k of ['AUTOCONF_SRV_FOUND', 'AUTOCONF_DECLINED', 'AUTOCONF_TARGET_CNAME', 'AUTOCONF_TARGET_UNRESOLVABLE', 'AUTOCONF_NONSTANDARD_PORT', 'AUTOCONF_SRV_UNSIGNED',
    'AUTOCONF_AUTODISCOVER_SRV', 'AUTOCONF_AUTODISCOVER_HOST', 'AUTOCONF_M365', 'AUTOCONF_MOZ_HOST', 'AUTOCONF_ISPDB_YES', 'AUTOCONF_ISPDB_PLAIN']) has(r.issues, k);
  lacks(r.issues, 'AUTOCONF_SRV_SIGNED'); lacks(r.issues, 'AUTOCONF_NO_MOZ'); lacks(r.issues, 'AUTOCONF_NO_AUTODISCOVER');
  eq(r.targets['smtp2.example.com'].cname, true); eq(r.targets['pop.example.com'].ips.length, 0);
  eq(r.autodiscover.m365, true); eq(r.autodiscover.srv.port, 443);
  eq(r.ispdb.provider, 'Example Mail'); eq(r.ispdb.servers.length, 2); eq(r.ispdb.servers[1].direction, 'out');
  eq(r.mechanisms, 4); eq(r.rating, 'warning');
  for (const lang of ['en', 'no', 'es', 'fr']) {
    app.currentLang = lang;
    for (const i of r.issues) { const s = i.textArgs ? app.td(i.textKey, ...i.textArgs) : app.ts(i.textKey); if (s === i.textKey) throw new Error('unresolved ' + i.textKey + ' in ' + lang); }
    app.renderAutoconfig({ status: 'fulfilled', value: r });
  }
  // clean implicit-TLS deployment, DNSSEC-validated, nothing else → excellent
  app = load();
  app.rr('clean.example', 'MX', 15, ['10 mx.clean.example.']);
  app.rr('_imaps._tcp.clean.example', 'SRV', 33, ['0 1 993 imap.clean.example.'], { AD: true });
  app.rr('_submissions._tcp.clean.example', 'SRV', 33, ['0 1 465 smtp.clean.example.'], { AD: true });
  app.rr('imap.clean.example', 'A', 1, ['192.0.2.1']); app.rr('smtp.clean.example', 'A', 1, ['192.0.2.2']);
  app.http.set('https://autoconfig.thunderbird.net/v1.1/clean.example', { status: 404, body: '' });
  r = await app.checkAutoconfig('clean.example');
  eq(r.rating, 'excellent'); has(r.issues, 'AUTOCONF_SRV_SIGNED'); has(r.issues, 'AUTOCONF_NO_AUTODISCOVER'); has(r.issues, 'AUTOCONF_NO_MOZ'); eq(r.ispdb.status, 'none');
  // nothing published: warning when the domain receives mail, good when it does not
  app = load();
  app.rr('bare.example', 'MX', 15, ['10 mx.bare.example.']);
  r = await app.checkAutoconfig('bare.example');
  eq(r.rating, 'warning'); has(r.issues, 'AUTOCONF_NONE'); eq(r.mechanisms, 0);
  r = await app.checkAutoconfig('nomail.example');
  eq(r.rating, 'good'); has(r.issues, 'AUTOCONF_NO_MAIL');
  // SERVFAIL on the first lookup is an error, not "nothing published"
  app = load();
  app.dns.set('_submission._tcp.sf.example|SRV', { Status: 2, Answer: [] });
  r = await app.checkAutoconfig('sf.example');
  eq(r.error, true); eq(r.messageKey, 'DNS_SERVFAIL');
  app.renderAutoconfig({ status: 'fulfilled', value: r }); app.renderAutoconfig({ status: 'rejected', reason: new Error('x') });
});

test('D7 zone hygiene: SOA timers, NS count, apex CNAME, TXT size and tokens, wildcards', async () => {
  let app = load();
  app.rr('example.com', 'SOA', 6, ['ns1.example.com. hostmaster.example.com. 2026101301 14400 3600 1209600 3600']);
  app.rr('example.com', 'NS', 2, ['ns1.example.com.', 'ns2.example.com.', 'ns3.example.com.']);
  app.txt('example.com', 'v=spf1 -all', 'google-site-verification=abcdefghijklmnop', 'MS=ms12345678');
  let r = await app.checkZone('example.com');
  eq(r.rating, 'good'); eq(r.zone, 'example.com'); eq(r.isApex, true);
  for (const k of ['ZONE_SOA_OK', 'ZONE_NS_OK', 'ZONE_TXT_TOKENS', 'ZONE_WILDCARD_NONE']) has(r.issues, k);
  lacks(r.issues, 'ZONE_SOA_MNAME_HIDDEN'); lacks(r.issues, 'ZONE_APEX_NOTE');
  eq(r.txt.tokens.length, 2); eq(r.txt.count, 3); eq(r.soa.rnameEmail, 'hostmaster@example.com'); eq(r.ns.length, 3);
  // everything wrong at once
  app = load();
  app.rr('bad.example', 'SOA', 6, ['ns1.bad.example. hostmaster@bad.example. 1 900 900 1800 60']);
  app.rr('bad.example', 'NS', 2, ['ns1.bad.example.']);
  app.dns.set('bad.example|A', { Status: 0, Answer: [{ name: 'bad.example', type: 5, data: 'www.bad.example.' }, { name: 'www.bad.example', type: 1, data: '192.0.2.1' }] });
  app.txt('bad.example', 'v=spf1 -all', ...Array.from({ length: 12 }, (_, i) => 'svc' + i + '-domain-verification=' + 'x'.repeat(120)));
  app.rr('*.bad.example', 'MX', 15, ['10 mail.bad.example.']);
  app.txt('*.bad.example', 'some-site-verification=abc');
  app.rr('*.bad.example', 'A', 1, ['192.0.2.9']);
  r = await app.checkZone('bad.example');
  eq(r.rating, 'warning');
  for (const k of ['ZONE_SOA_RETRY_GE_REFRESH', 'ZONE_SOA_EXPIRE_SHORT', 'ZONE_SOA_RNAME_AT', 'ZONE_SOA_SERIAL_ODD', 'ZONE_NS_SINGLE', 'ZONE_APEX_CNAME',
    'ZONE_TXT_LARGE', 'ZONE_WILDCARD_MX', 'ZONE_WILDCARD_TXT', 'ZONE_WILDCARD_ADDR']) has(r.issues, k);
  for (const k of ['ZONE_SOA_OK', 'ZONE_WILDCARD_NONE', 'ZONE_WILDCARD_SPF']) lacks(r.issues, k);
  eq(r.issues.filter(i => i.textKey === 'ZONE_SOA_RANGE').map(i => i.textArgs[0]).join(), 'refresh,expire,minimum');
  // timer findings are notes: only the structural errors rate
  eq(r.issues.filter(i => i.textKey === 'ZONE_SOA_RANGE' || i.textKey === 'ZONE_SOA_EXPIRE_SHORT').every(i => i.rating === 'good'), true);
  eq(r.txt.tokens.length, 12); eq(r.txt.bytes > 1232, true); eq(r.wildcard.mx, ['10 mail.bad.example.']); eq(r.apexCname, true);
  // hostname inside a zone: SOA from the Authority section, hidden primary, two NS, wildcard SPF
  app = load();
  app.dns.set('host.sub.example|SOA', { Status: 0, Answer: [], Authority: [{ name: 'sub.example', type: 6, data: 'hidden.sub.example. hostmaster.sub.example. 2026101301 14400 3600 1209600 3600' }] });
  app.rr('sub.example', 'NS', 2, ['ns1.sub.example.', 'ns2.sub.example.']);
  app.txt('*.sub.example', 'v=spf1 -all');
  r = await app.checkZone('host.sub.example');
  eq(r.zone, 'sub.example'); eq(r.isApex, false); eq(r.rating, 'good');
  for (const k of ['ZONE_APEX_NOTE', 'ZONE_NS_TWO', 'ZONE_SOA_MNAME_HIDDEN', 'ZONE_WILDCARD_SPF']) has(r.issues, k);
  lacks(r.issues, 'ZONE_WILDCARD_TXT'); lacks(r.issues, 'ZONE_APEX_CNAME');
  for (const lang of ['en', 'no', 'es', 'fr']) {
    app.currentLang = lang;
    for (const i of r.issues) { const s = i.textArgs ? app.td(i.textKey, ...i.textArgs) : app.ts(i.textKey); if (s === i.textKey) throw new Error('unresolved ' + i.textKey + ' in ' + lang); }
    app.renderZone({ status: 'fulfilled', value: r });
  }
  app.renderZone({ status: 'rejected', reason: new Error('x') });
  // SERVFAIL on the SOA is an error, never "no zone"
  app.dns.set('sf.example|SOA', { Status: 2, Answer: [] });
  r = await app.checkZone('sf.example');
  eq(r.error, true); eq(r.messageKey, 'DNS_SERVFAIL');
});

test('D9 CAA on certificate-presenting hosts: parent climb, mta-sts host, uncovered provider zone, errors', async () => {
  let app = load();
  app.rr('example.com', 'CAA', 257, ['0 issue "letsencrypt.org"', '0 iodef "mailto:sec@example.com"']);
  app.rr('example.com', 'MX', 15, ['10 aspmx.l.google.com.', '20 mx.example.com.']);
  app.rr('google.com', 'CAA', 257, ['0 issue "pki.goog"']);
  app.rr('mta-sts.example.com', 'A', 1, ['192.0.2.5']);
  let r = await app.checkCAA('example.com');
  const H = h => r.tlsHosts.find(x => x.host === h);
  eq(r.rating, 'excellent'); eq(r.tlsHosts.length, 3);
  eq(H('aspmx.l.google.com').status, 'restricted'); eq(H('aspmx.l.google.com').climbedTo, 'google.com'); eq(H('aspmx.l.google.com').cas, ['pki.goog']);
  eq(H('mx.example.com').climbedTo, 'example.com'); eq(H('mx.example.com').cas, ['letsencrypt.org']);
  eq(H('mta-sts.example.com').role, 'mta-sts'); eq(H('mta-sts.example.com').status, 'restricted');
  has(r.issues, 'CAA_HOSTS_COVERED'); lacks(r.issues, 'CAA_HOSTS_UNCOVERED');
  eq(r.issues.find(i => i.textKey === 'CAA_HOSTS_COVERED').info, true);
  // provider zone without any CAA → informational only; issue ";" counts as restricted
  app = load();
  app.rr('example.org', 'CAA', 257, ['0 issue "letsencrypt.org"', '0 iodef "mailto:sec@example.org"']);
  app.rr('example.org', 'MX', 15, ['10 mx1.provider.net.', '20 mx.locked.net.']);
  app.rr('locked.net', 'CAA', 257, ['0 issue ";"']);
  r = await app.checkCAA('example.org');
  eq(r.rating, 'excellent', 'host coverage never moves the CAA rating'); eq(r.tlsHosts.length, 2, 'no mta-sts host');
  eq(H('mx1.provider.net').status, 'none'); eq(H('mx1.provider.net').climbedTo, null);
  eq(H('mx.locked.net').status, 'restricted'); eq(H('mx.locked.net').prohibited, true);
  has(r.issues, 'CAA_HOSTS_UNCOVERED'); eq(r.issues.find(i => i.textKey === 'CAA_HOSTS_UNCOVERED').textArgs, [1, 2, 'mx1.provider.net']);
  for (const lang of ['en', 'no', 'es', 'fr']) { app.currentLang = lang; app.renderCAA({ status: 'fulfilled', value: r }); }
  // SERVFAIL on a host's CAA is an error status, not "no restriction"
  app.dns.set('mx1.provider.net|CAA', { Status: 2, Answer: [] });
  app.resetScan();
  r = await app.checkCAA('example.org');
  eq(H('mx1.provider.net').status, 'error'); eq(H('mx1.provider.net').problem.messageKey, 'DNS_SERVFAIL');
  lacks(r.issues, 'CAA_HOSTS_COVERED'); lacks(r.issues, 'CAA_HOSTS_UNCOVERED');
  // no CAA at the apex at all → the host section is not built (nothing to compare against)
  app = load();
  app.rr('bare.example', 'MX', 15, ['10 mx.bare.example.']);
  r = await app.checkCAA('bare.example');
  eq(r.rating, 'warning'); eq(r.tlsHosts, undefined);
});

(async () => {
  for (const t of tests) {
    try { await t.fn(); pass++; console.log('PASS', t.name); }
    catch (e) { fail++; console.log('FAIL', t.name, '\n     ', e.message); }
  }
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
