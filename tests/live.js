'use strict';
// Live smoke test against real DNS/HTTP: runs every check for the given domains
// and then every renderer against the stubbed DOM, so a thrown exception in a
// check or a renderer surfaces here. Run: node tests/live.js [domain ...]
const { load } = require('./harness');
const domains = process.argv.slice(2).length ? process.argv.slice(2) : ['cloudflare.com', 'debian.org', 'mail.cloudflare.com', 'gmail.com', 'dmarcadvisor.com', 'fastmail.com'];
(async () => {
  for (const domain of domains) {
    const app = load({ live: true, console });
    app.currentDomain = domain;
    const t0 = Date.now();
    const names = ['dnssec','mx','ptr','dane','spf','dkim','dmarc','bimi','tlsrpt','mtasts','caa','rpki','ipv6','securityTxt','whois'];
    const fns = [app.checkDNSSEC, app.checkMX, app.checkPTR, app.checkDANE, app.checkSPF, () => app.checkDKIM(domain, []), app.checkDMARC, app.checkBIMI, app.checkTLSRPT, app.checkMTASTS, app.checkCAA, app.checkRPKI, app.checkIPv6, app.checkSecurityTxt, app.checkWHOIS];
    const settled = await Promise.allSettled(fns.map(f => f(domain)));
    const r = {};
    names.forEach((n, i) => { r[n] = settled[i]; });
    r.bgp = { status: 'fulfilled', value: { status: 'error' } };
    r.conn = { status: 'fulfilled', value: { dnssec: 'error', ip: { v4: null, v6: null, v4Info: null, v6Info: null, holders: {} } } };
    app.lastResults = r;
    const summary = names.map(n => n + '=' + (r[n].status === 'fulfilled' ? r[n].value.rating : 'REJECTED:' + r[n].reason)).join(' ');
    console.log(domain, Math.round((Date.now() - t0) / 100) / 10 + 's', 'doh=' + app.scanStats.dohRequests, 'hits=' + app.scanStats.dohCacheHits);
    console.log('  ' + summary);
    for (const n of names) if (r[n].status === 'rejected') console.log('  REJECTED', n, r[n].reason && r[n].reason.stack);
    for (const lang of ['en', 'no']) {
      app.currentLang = lang;
      try { app.rerenderAll(r); } catch (e) { console.log('  RENDER FAILED (' + lang + '):', e.stack.split('\n').slice(0, 4).join('\n    ')); }
    }
  }
})();
