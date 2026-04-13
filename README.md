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
- **English / Norwegian** (Bokmål) UI — persisted in `localStorage`
- **Settings menu** (⚙, top-right) — dark/light theme toggle + scoring system explanation
- **Mobile-friendly** — horizontal scrolling tab bar
- **Language switch** — rerenders all panels without re-querying DNS
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

## Adding a new release

1. Do the work in `index.html`
2. Update the footer `<summary>` version string and add a new `.cl-entry` block at the top of `#changelog-content`
3. Update `Current version` in `CLAUDE.md`
4. Add a row at the top of the version history table in `README.md`

## Version history

| Version | Date | Notes |
|---------|------|-------|
| 2026-April-13-3 | 2026-04-13 | RPKI/ASPA: in-memory session caching for all RIPE Stat API calls; `fetchASNHolder()` helper extracted |
| 2026-April-13-2 | 2026-04-13 | Settings menu (⚙) replaces theme toggle — adds scoring system explanation panel |
| 2026-April-13-1 | 2026-04-13 | ASPA tab (17th tab) split from RPKI; "Recs" renamed to "Fixes"; ASPA added to score bars and Fixes tab |
| 2026-April-08-5 | 2026-04-08 | Security.txt: also tries www. subdomain; CORS-blocked fetches show informative message + manual check links |
| 2026-April-08-4 | 2026-04-08 | Footer version line hints "click for changelog" |
| 2026-April-08-3 | 2026-04-08 | Changelog panel in footer |
| 2026-April-08-2 | 2026-04-08 | Raw DKIM record displayed in key details |
| 2026-April-08-1 | 2026-04-08 | DKIM tag analysis (h=, s=, v=, n=, t=); expanded selector list (~85); DNS config examples for DMARC, TLS-RPT, MTA-STS, CAA, Security.txt; CAA issuemail/BIMI VMC info; securitytxt.org link; text rendering fixes |
| 2026-March-13-1 | 2026-03-13 | Initial public release |
