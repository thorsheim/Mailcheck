# Contributing a Translation

Thank you for helping translate the DNS Email Security Checker!

**You only need to submit one file** — your language file (e.g. `translations/fr.js`).
Do not edit `index.html`. The maintainer will integrate your translation when merging.

---

## Step 1 — Copy the template

Copy `translations/TEMPLATE.js` and rename it to your language code:

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

## Step 3 — Open a pull request

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

3. Search for `lang-select` and add your option:

```html
<option value="fr">Français</option>
```

4. Open `index.html` in a browser, select your language, and run a check on
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
