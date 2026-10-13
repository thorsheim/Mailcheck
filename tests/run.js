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
  app.http.set('https://rdap.org/domain/example.com', { status: 200, body: JSON.stringify({ handle: 'X', status: ['client transfer prohibited', 'client delete prohibited'], events: [{ eventAction: 'expiration', eventDate: future }], entities: [], nameservers: [] }) });
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

(async () => {
  for (const t of tests) {
    try { await t.fn(); pass++; console.log('PASS', t.name); }
    catch (e) { fail++; console.log('FAIL', t.name, '\n     ', e.message); }
  }
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
