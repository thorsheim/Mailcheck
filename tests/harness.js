'use strict';
// Loads index.html's two <script> blocks into a Node context with stubbed
// browser globals and a programmable fetch(), and returns the module-level
// functions/state so the check functions can be driven against canned DNS.
//
//   const { load } = require('./harness');
//   const app = load();
//   app.dns.set('example.com|TXT', { Status: 0, Answer: [...] });
//   const r = await app.checkSPF('example.com');
//
// `app.dns` is a Map of "name|TYPE" (lowercase name) → DoH JSON. Unknown names
// answer NXDOMAIN by default (`app.defaultStatus` changes that). `app.http` is a
// Map of URL → { status, body, headers } for non-DoH fetches. `app.log` records
// every request so tests can assert on query counts.

const fs = require('fs');
const path = require('path');

function extractScripts(html) {
  const blocks = [];
  const re = /<script>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) blocks.push(m[1]);
  return blocks;
}

function topLevelNames(src) {
  const names = new Set();
  for (const line of src.split('\n')) {
    const m = line.match(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/) ||
              line.match(/^(?:const|let)\s+([A-Za-z_$][\w$]*)\s*=/);
    if (m) names.add(m[1]);
  }
  return [...names];
}

function makeDocument() {
  const mkEl = () => {
    const e = {
      style: {}, dataset: {}, children: [], classList: {
        add() {}, remove() {}, toggle() {}, contains() { return false; },
      },
      setAttribute() {}, getAttribute() { return null; }, removeAttribute() {},
      appendChild(c) { e.children.push(c); return c; }, removeChild() {},
      insertBefore(c) { e.children.push(c); return c; },
      addEventListener() {}, focus() {}, querySelector() { return mkEl(); },
      querySelectorAll() { return []; }, closest() { return e; }, contains() { return true; },
      scrollIntoView() {}, click() {}, remove() {},
      get firstChild() { return e.children[0] || null; },
      textContent: '', hidden: false, disabled: false, value: '', checked: false,
      parentNode: null, title: '', id: '', open: false, href: '', target: '', rel: '',
    };
    e.parentNode = { removeChild() {} };
    return e;
  };
  return {
    addEventListener() {},
    getElementById() { return mkEl(); },
    querySelector() { return mkEl(); },
    querySelectorAll() { return []; },
    createElement() { return mkEl(); },
    createDocumentFragment() { return mkEl(); },
    createTextNode(t) { return { textContent: t }; },
    documentElement: mkEl(),
    body: mkEl(),
  };
}

function load(opts = {}) {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  const [, stringsSrc, mainSrc] = extractScripts(html);
  const names = topLevelNames(mainSrc);
  const exportSrc = 'return {' + names.map(n => `get ${n}() { return ${n}; }, set ${n}(v) { ${n} = v; }`).join(',') + '};';

  const store = new Map();
  const localStorage = {
    getItem: k => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: k => store.delete(k),
  };
  const document = makeDocument();
  const window = { matchMedia: () => ({ matches: false }), location: { search: '', href: '' }, addEventListener() {}, innerWidth: 0, innerHeight: 0 };
  const history = { pushState() {}, replaceState() {} };
  const navigator = {};

  const dns = new Map();
  const http = new Map();
  const log = [];
  const state = { defaultStatus: 3 };

  const realFetch = globalThis.fetch;
  const fetchStub = async (url, init = {}) => {
    log.push(url);
    if (opts.live) return realFetch(url, init);
    const u = new URL(url);
    if (u.hostname === 'cloudflare-dns.com' || u.hostname === 'dns.google') {
      const name = (u.searchParams.get('name') || '').toLowerCase().replace(/\.$/, '');
      const type = (u.searchParams.get('type') || '').toUpperCase();
      const key = name + '|' + type;
      let body = dns.get(key);
      if (body instanceof Error) throw body;
      if (typeof body === 'function') body = body(name, type, u.hostname);
      if (body === undefined) body = { Status: state.defaultStatus, Answer: [] };
      return { ok: true, status: 200, json: async () => body, text: async () => JSON.stringify(body), headers: new Map() };
    }
    let h = http.get(url);
    // Prefix entries: a key ending in '*' matches any URL starting with it.
    if (h === undefined) for (const [k, v] of http) if (k.endsWith('*') && url.startsWith(k.slice(0, -1))) { h = v; break; }
    if (typeof h === 'function') h = h(url, init);
    if (h instanceof Error) throw h;
    if (!h) throw new TypeError('Failed to fetch');
    const headers = new Map(Object.entries(h.headers || {}).map(([k, v]) => [k.toLowerCase(), v]));
    return {
      ok: h.status >= 200 && h.status < 300, status: h.status, redirected: !!h.redirected,
      headers: { get: k => headers.get(k.toLowerCase()) ?? null },
      json: async () => JSON.parse(h.body), text: async () => h.body,
    };
  };

  const body = "'use strict';\n" + stringsSrc + '\n' + mainSrc + '\n' + exportSrc;
  const fn = new Function('document', 'localStorage', 'window', 'history', 'navigator', 'fetch', 'console', body);
  const app = fn(document, localStorage, window, history, navigator, fetchStub, opts.console || { error() {}, log() {}, warn() {} });
  app.dns = dns; app.http = http; app.log = log; app.state = state;
  app.resetScan = () => { app.clearDNSCaches(); app.scanStats = { startMs: 0, totalMs: 0, checks: {}, dohRequests: 0, dohCacheHits: 0, dohFallbacks: 0, ripeStatRequests: 0, ripeStatCacheHits: 0, httpRequests: 0 }; log.length = 0; };
  app.txt = (name, ...strings) => dns.set(name.toLowerCase() + '|TXT', { Status: 0, AD: false, Answer: strings.map(s => ({ name, type: 16, TTL: 300, data: '"' + s + '"' })) });
  app.rr = (name, type, typeNum, datas, extra = {}) => dns.set(name.toLowerCase() + '|' + type, { Status: 0, AD: false, ...extra, Answer: datas.map(d => ({ name, type: typeNum, TTL: 300, data: d })) });
  app.resetScan();
  return app;
}

module.exports = { load };
