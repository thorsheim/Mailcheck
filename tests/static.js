'use strict';
// Static consistency checks from CLAUDE.md "Testing notes". Run: node tests/static.js
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const blocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const STRINGS = new Function(blocks[1] + '\nreturn STRINGS;')();
let problems = 0;
const bad = m => { problems++; console.log('PROBLEM', m); };

// 1. key parity + 2. d arity
const langs = Object.keys(STRINGS);
const en = STRINGS.en;
for (const ns of ['s', 'd', 'x']) {
  const enKeys = Object.keys(en[ns]);
  for (const l of langs) {
    const keys = Object.keys(STRINGS[l][ns]);
    const missing = enKeys.filter(k => !keys.includes(k)), extra = keys.filter(k => !enKeys.includes(k));
    if (missing.length) bad(`${l}.${ns} missing ${missing.join(',')}`);
    if (extra.length) bad(`${l}.${ns} extra ${extra.join(',')}`);
    if (ns === 'd') for (const k of keys) if (en.d[k] && STRINGS[l].d[k].length !== en.d[k].length) bad(`${l}.d.${k} arity ${STRINGS[l].d[k].length} vs en ${en.d[k].length}`);
  }
}
console.log('key counts', Object.fromEntries(langs.map(l => [l, ['s','d','x'].map(ns => Object.keys(STRINGS[l][ns]).length).join('/')])));

// 3. translation files
for (const f of ['es.js', 'fr.js', 'no.js', 'TEMPLATE.js']) {
  const src = fs.readFileSync(path.join(root, 'translations', f), 'utf8');
  const obj = new Function(src + '\nreturn ' + (src.match(/const (LANG_\w+)/) || [])[1] + ';')();
  for (const ns of ['s', 'd', 'x']) {
    const enKeys = Object.keys(en[ns]), keys = Object.keys(obj[ns]);
    const missing = enKeys.filter(k => !keys.includes(k)), extra = keys.filter(k => !enKeys.includes(k));
    if (missing.length) bad(`translations/${f} ${ns} missing ${missing.join(',')}`);
    if (extra.length) bad(`translations/${f} ${ns} extra ${extra.join(',')}`);
  }
  if (f !== 'TEMPLATE.js') {
    const lang = f.replace('.js', '');
    for (const ns of ['s', 'x']) for (const k of Object.keys(obj[ns])) if (STRINGS[lang][ns][k] !== undefined && obj[ns][k] !== STRINGS[lang][ns][k]) bad(`translations/${f} ${ns}.${k} value drift`);
    const args = ['A1', 'B2', 'C3', 'D4'];
    for (const k of Object.keys(obj.d)) if (STRINGS[lang].d[k] && String(obj.d[k](...args)) !== String(STRINGS[lang].d[k](...args))) bad(`translations/${f} d.${k} value drift`);
  }
}

// 4. referenced keys exist
const main = blocks[2];
const refs = new Set();
for (const m of main.matchAll(/\b(?:ts|td|tx)\('([A-Z0-9_]+)'/g)) if (!m[1].endsWith('_')) refs.add(m[1]);
for (const m of main.matchAll(/(?:textKey|messageKey|key):\s*'([A-Z0-9_]+)'/g)) refs.add(m[1]);
for (const m of main.matchAll(/(?:policyErrorKey|key) = '([A-Z0-9_]+)'/g)) refs.add(m[1]);
for (const m of html.matchAll(/data-i18n(?:-placeholder)?="([A-Z0-9_]+)"/g)) refs.add(m[1]);
const all = new Set([...Object.keys(en.s), ...Object.keys(en.d), ...Object.keys(en.x)]);
for (const r of refs) if (!all.has(r)) bad(`referenced key missing in en: ${r}`);
const dynamicPrefixes = ['RATING_', 'PANEL_', 'DMARCBIS_EXT_'];
for (const k of all) if (!refs.has(k) && !dynamicPrefixes.some(p => k.startsWith(p)) && !main.includes("'" + k + "'")) console.log('note: en key never referenced:', k);

// 5. CSS classes
const css = html.match(/<style>([\s\S]*?)<\/style>/)[1];
const classRefs = new Set();
for (const m of main.matchAll(/el\('[a-z0-9]+',\s*'([^']+)'/g)) for (const c of m[1].split(/\s+/)) classRefs.add(c);
for (const m of main.matchAll(/className\s*=\s*'([^']+)'/g)) for (const c of m[1].split(/\s+/)) classRefs.add(c);
for (const m of main.matchAll(/classList\.(?:add|toggle|remove)\('([^']+)'/g)) classRefs.add(m[1]);
for (const c of classRefs) if (c && !/[+]/.test(c) && !new RegExp('\\.' + c.replace(/[-]/g, '\\-') + '[\\s,:.{>\\[]').test(css)) console.log('note: class not in <style>:', c);

// 6. sinks
for (const s of ['innerHTML', 'outerHTML', 'insertAdjacentHTML', 'eval(', 'new Function', 'document.write']) if (main.includes(s)) bad('dangerous sink ' + s);

// 7. tab order
const tabs = [...html.matchAll(/class="tab-btn[^"]*" data-tab="([^"]+)"/g)].map(m => m[1]);
const panels = [...html.matchAll(/class="tab-panel[^"]*" id="panel-([^"]+)"/g)].map(m => m[1]);
if (tabs.join() !== panels.join()) bad('tab/panel order differs');

// 8. version string
const v = html.match(/<summary[^>]*>\s*Version ([^<\s]+)/) || html.match(/Version (\d{4}-[A-Za-z]+-\d+-\d+)/);
const claude = fs.readFileSync(path.join(root, 'CLAUDE.md'), 'utf8').match(/Current version: \*\*([^*]+)\*\*/);
const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8').match(/\| (\d{4}-[A-Za-z]+-\d+-\d+) \|/);
console.log('versions', v && v[1], claude && claude[1], readme && readme[1]);
if (!(v && claude && readme && v[1] === claude[1] && v[1] === readme[1])) bad('version mismatch');

// 9. legacy text: issues
for (const m of main.matchAll(/\{\s*rating:\s*'[a-z]+',\s*text:/g)) bad('legacy text: issue at ' + main.slice(m.index, m.index + 60));
// 10. bare fetch
for (const m of main.matchAll(/\bfetch\(([^)]*)\)/g)) if (!/signal/.test(m[0]) && !/^url, \{ headers, signal/.test(m[1])) console.log('note: fetch without signal:', m[0].slice(0, 80));

console.log(problems ? `${problems} problems` : 'static checks OK');
process.exit(problems ? 1 : 0);
