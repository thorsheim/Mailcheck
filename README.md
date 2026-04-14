# DNS Email Security Checker

A single-file, self-contained web tool for checking email security DNS configuration for any domain. No build tools, no server, no dependencies — open `index.html` in a browser.

Live version: **https://passwordscon.org/mailcheck/**

Created by [Per Thorsheim](https://thorsheim.net) · [PasswordsCon](https://passwordscon.org)

---

## What it checks

| Tab | Standard | What is tested |
|-----|----------|----------------|
| Overview | — | Weighted grade (A–F) across all scored checks |
| DNSSEC | RFC 4033 | DNSKEY presence, algorithm strength, AD flag from Cloudflare resolver |
| MX | RFC 5321 | MX records, DNSSEC per host, null MX (RFC 7505) |
| PTR | — | Forward-confirmed reverse DNS (FCrDNS) per MX IP |
| DANE | RFC 7672 | TLSA records per MX host, DNSSEC requirement |
| SPF | RFC 7208 | Record syntax, qualifiers, redirect= following, lookup count |
| DKIM | RFC 6376 | ~85 auto-probed selectors + custom; key type, size, hash algorithms (`h=`), service type (`s=`), flags (`t=`), notes (`n=`), raw record |
| DMARC | RFC 7489 | Policy, alignment, pct, rua/ruf endpoints with DNSSEC |
| BIMI | — | Logo URL, VMC authority record |
| TLS-RPT | RFC 8460 | Reporting record, rua= endpoint DNSSEC |
| MTA-STS | RFC 8461 | DNS record, HTTPS policy fetch, MX pattern matching |
| CAA | RFC 8659 | issue/issuewild/issuemail/iodef tags, DNSSEC per CA domain |
| RPKI | — | ROA validation per NS/MX host IP via RIPE Stat |
| ASPA | RFC 9582 | AS Provider Authorization records per ASN via RIPE Stat |
| Security.txt | RFC 9116 | Required/optional fields, expiry |
| WHOIS | RFC 7480 | RDAP lookup via rdap.org |
| Fixes | — | Prioritised action list with weights |

## Scoring

Weighted grade from nine scored checks:

| Check | Weight |
|-------|--------|
| DKIM | 20% |
| SPF | 15% |
| DMARC | 15% |
| MTA-STS | 15% |
| DNSSEC | 10% |
| MX | 10% |
| DANE | 10% |
| TLS-RPT | 3% |
| CAA | 2% |

PTR, BIMI, RPKI, ASPA, Security.txt, and WHOIS are informational — shown but not scored.

## Features

- **No dependencies** — single `index.html`, works offline after first load
- **DNS over HTTPS** via Cloudflare (`cloudflare-dns.com/dns-query`)
- **RPKI/ASPA** via RIPE Stat API
- **WHOIS/RDAP** via rdap.org
- **English / Esperanto / Norwegian** (Bokmål) UI — persisted in `localStorage`
- **Settings menu** (⚙, top-right) — dark/light theme toggle + scoring system explanation
- **Mobile-friendly** — horizontal scrolling tab bar
- **Language switch** — rerenders all panels without re-querying DNS
- **Skip MTA-STS / Security.txt** — checkboxes on the input page to skip checks that require direct server access (avoids CORS failures); preference persisted in `localStorage`
- **Changelog** — version string in footer expands to full release history

## DKIM selector coverage

~85 selectors probed automatically, covering:

Google Workspace, Microsoft 365, Apple iCloud, Mailchimp/Mandrill, SendGrid, Amazon SES, Postmark, Zoho Mail, Proton Mail, Tuta, Fastmail, HubSpot, Brevo/Sendinblue, Mimecast, Proofpoint, Klaviyo, SparkPost/Bird, Mailgun, Constant Contact, Marketo, Salesforce Pardot, ActiveCampaign, Intercom, Customer.io, Iterable, Sailthru, MailerLite, Infomaniak, OVH, Hetzner, Domeneshop (ds+YYYYMM rotation), and generic/legacy selectors.

Custom selectors can be entered in the DKIM tab.

## Security

- All DNS/external data rendered via `textContent` or `createTextNode` — never `innerHTML`
- Explanation sections use `safeMarkup()` — a whitelist parser allowing only `<b>`, `<code>`, `<br>`, and `<a href="https://...">` tags
- Links validated to `https?:` or `mailto:` schemes before use as `href`
- No data is sent to any server other than Cloudflare DoH, RIPE Stat, and rdap.org

## Contributing a translation

The UI currently ships in **English** and **Norwegian Bokmål**. Adding a new language requires editing only two places in `index.html` — no build tools needed.

See **[translations/CONTRIBUTING.md](translations/CONTRIBUTING.md)** for the full step-by-step guide.

**Quick overview:**
1. Copy [`translations/TEMPLATE.js`](translations/TEMPLATE.js) and fill in your translations
2. Open a pull request with only your language file — do not edit `index.html`
3. The maintainer integrates it on merge

Missing keys fall back to English automatically, so partial translations are welcome.

---

## Adding a new release

1. Do the work in `index.html`
2. Update the footer `<summary>` version string and add a new `.cl-entry` block at the top of `#changelog-content`
3. Update `Current version` in `CLAUDE.md`
4. Add a row at the top of the version history table in `README.md`

## Version history

| Version | Date | Notes |
|---------|------|-------|
| 2026-April-14-7 | 2026-04-14 | BIMI removed from score bars and Fixes tab; tab dot always grey; explanation opens with editorial note |
| 2026-April-14-6 | 2026-04-14 | Skip CORS option consolidated to a single checkbox covering both MTA-STS and Security.txt |
| 2026-April-14-5 | 2026-04-14 | Esperanto (eo) UI language — full translation of all strings and explanations |
| 2026-April-14-4 | 2026-04-14 | Acknowledgements section in footer with fireworks on hover |
| 2026-April-14-3 | 2026-04-14 | Shareable link: "Copy link" button after scan encodes domain, selectors, and skip preferences in URL; auto-run on load from URL params |
| 2026-April-14-2 | 2026-04-14 | Skip checkboxes for MTA-STS and Security.txt to avoid CORS issues; skipped checks excluded from score and Fixes tab |
| 2026-April-14-1 | 2026-04-14 | CORS bold note (MTA-STS/Security.txt); DKIM no-selector note; ASPA RFC status note; WHOIS new-domain trust note; DNSSEC alg rating badges; light theme default |
| 2026-April-13-4 | 2026-04-13 | Overview placeholder updated with usage guidance and accuracy disclaimer |
| 2026-April-13-3 | 2026-04-13 | RPKI/ASPA: in-memory session caching for all RIPE Stat API calls; `fetchASNHolder()` helper extracted |
| 2026-April-13-2 | 2026-04-13 | Settings menu (⚙) replaces theme toggle — adds scoring system explanation panel |
| 2026-April-13-1 | 2026-04-13 | ASPA tab (17th tab) split from RPKI; "Recs" renamed to "Fixes"; ASPA added to score bars and Fixes tab |
| 2026-April-08-5 | 2026-04-08 | Security.txt: also tries www. subdomain; CORS-blocked fetches show informative message + manual check links |
| 2026-April-08-4 | 2026-04-08 | Footer version line hints "click for changelog" |
| 2026-April-08-3 | 2026-04-08 | Changelog panel in footer |
| 2026-April-08-2 | 2026-04-08 | Raw DKIM record displayed in key details |
| 2026-April-08-1 | 2026-04-08 | DKIM tag analysis (h=, s=, v=, n=, t=); expanded selector list (~85); DNS config examples for DMARC, TLS-RPT, MTA-STS, CAA, Security.txt; CAA issuemail/BIMI VMC info; securitytxt.org link; text rendering fixes |
| 2026-March-13-1 | 2026-03-13 | Initial public release |
