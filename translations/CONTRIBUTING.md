# Contributing a Translation

Thank you for helping translate the DNS Email Security Checker!

**You only need to submit one file** — your language file (e.g. `translations/fr.js`).
Do not edit `index.html`. The maintainer will integrate your translation when merging.

---

## Step 1 — Copy the template

Copy `translations/TEMPLATE.js` and rename it to your language code.

Already shipping: `no.js` (Norwegian Bokmål), `es.js` (Spanish), `fr.js` (French). English lives
in `index.html` and is the reference. To **improve** an existing translation rather than add a
new one, edit that language's file directly — it is a complete, current copy of what ships.

Otherwise, name your new file for your language:

```
translations/fr.js      # French
translations/de.js      # German
translations/es.js      # Spanish
translations/pt.js      # Portuguese
…
```

Language codes follow [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt) (same as
HTML `lang` attribute values): `fr`, `de`, `es`, `pt`, `ja`, `zh`, `ar`, etc.

---

## Step 2 — Fill in your translations

Open your language file and replace every empty string `''` with your translation.

### The `s` namespace — plain strings
Simple key → string pairs. No HTML, no functions.

```js
APP_TITLE: 'Vérificateur de sécurité DNS',
BTN_CHECK: 'Vérifier',
```

### The `d` namespace — dynamic strings (arrow functions)
Each value is a JavaScript arrow function. **Keep the function structure exactly
as shown.** Only translate the text that the function returns. Use the provided
argument (e.g. `n` for a count) in your sentence.

```js
// English original:
MX_HOSTS_FOUND: n => n + ' MX host' + (n !== 1 ? 's' : '') + ' found.',

// French translation:
MX_HOSTS_FOUND: n => n + ' hôte' + (n !== 1 ? 's' : '') + ' MX trouvé' + (n !== 1 ? 's' : '') + '.',
```

If your language does not pluralise the same way, simplify as needed:

```js
// Japanese (no grammatical plural):
MX_HOSTS_FOUND: n => n + ' 件の MX ホストが見つかりました。',
```

### The `x` namespace — explanation strings (HTML)
Each value is an HTML string shown in the expandable "What is this?" section at
the bottom of each tab. Only these HTML tags are allowed:

```
<b>bold text</b>
<a href="https://…">link text</a>
<code>monospace</code>
<br>
```

Keep all `<a href="…">` links unchanged — they point to RFCs and external
references that should remain intact. Only translate the surrounding text.

```js
// Example (shortened for clarity):
DMARC: '<b>DMARC</b> relie SPF et DKIM avec une politique…<br><br>' +
       '<b>Politique (p=):</b> <b>reject</b> — échec…',
```

---

## Step 3 — Check your file before submitting

Your file must define **exactly the same keys** as English — no more, no fewer — and every `d`
function must take the same number of arguments as the English one. A missing key silently falls
back to English; a wrong argument count produces a broken string that still parses. From the
repo root:

```js
// node check.js  — adjust the language file name on the first line
const mine = require('./translations/fr.js');   // see note below
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8').split('\n');
const o = html.findIndex(l => l.trim() === '<script>');
const c = html.findIndex(l => l.trim() === '</script>');
eval(html.slice(o + 1, c).join('\n'));         // defines STRINGS
for (const ns of ['s', 'd', 'x']) {
  const en = Object.keys(STRINGS.en[ns]), got = Object.keys(mine[ns] || {});
  const missing = en.filter(k => !got.includes(k));
  const extra   = got.filter(k => !en.includes(k));
  if (missing.length) console.log(ns, 'MISSING:', missing.join(', '));
  if (extra.length)   console.log(ns, 'UNKNOWN:', extra.join(', '));
  if (ns === 'd') for (const k of en)
    if (mine.d[k] && mine.d[k].length !== STRINGS.en.d[k].length)
      console.log('d.' + k, 'takes', mine.d[k].length, 'args, English takes', STRINGS.en.d[k].length);
}
```

(Add `module.exports = LANG_XX;` to the end of your file temporarily, or change `const LANG_XX =`
to `module.exports =`, so `require` can read it. Remove that before committing.)

---

## Step 4 — Open a pull request

Commit only your language file (e.g. `translations/fr.js`) and open a pull request
with a title like: `Add French (fr) translation`.

**Do not include changes to `index.html`** — the maintainer handles that step.

Include in the PR description:
- Which keys you translated (all of them, or a partial set)
- Any notes about tricky phrases or intentional simplifications
- Whether you are a native speaker or used assistance

---

## Testing your translation locally (optional)

If you want to see your translation in the browser before submitting, you can
temporarily integrate it into `index.html`:

1. Open `index.html` and search for `TRANSLATIONS`.
2. Inside the `<script>` block, find the closing `};` of the `STRINGS` object
   and add your language entry before it:

```js
  ,
  fr: {
    s: { /* paste your s keys */ },
    d: { /* paste your d keys */ },
    x: { /* paste your x keys */ },
  }
```

3. Search for `lang-row` and add your button, preceded by a separator span:

```html
<span class="lang-sep" aria-hidden="true">&middot;</span>
<button type="button" class="lang-btn" data-lang="fr" lang="fr">Français</button>
```

The `data-lang` value must match the key you added to `STRINGS`. The `lang`
attribute is the BCP 47 tag for the button's own text, so browsers and screen
readers pronounce the language name correctly.

4. Open `index.html` in a browser, click your language, and run a check on
   a domain like `gmail.com` or `cloudflare.com`.

**Do not commit these `index.html` changes** — only commit your language file.

---

## Tips

- Missing keys fall back to English automatically — a partial translation is
  still useful and worth submitting.
- The `x` explanation strings are the longest; translating just `s` and `d`
  already covers most of the visible UI.
- Unicode escape sequences like `\u2713` (✓) and `\u2014` (—) in the English
  strings can be written as literal characters in your translation.
- If you spot an error in the English strings while translating, please mention
  it in the PR.
