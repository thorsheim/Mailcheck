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
| DMARC | RFC 7489, RFC 9989 | Policy, alignment, pct, rua/ruf endpoints with DNSSEC; **DMARCbis section** — DNS tree walk policy discovery, tag registry conformance, external reporting authorization (RFC 9990/9991), suggested conformant record |
| BIMI | — | Logo URL, VMC authority record |
| TLS-RPT | RFC 8460 | Reporting record, rua= endpoint DNSSEC |
| MTA-STS | RFC 8461 | DNS record, HTTPS policy fetch, MX pattern matching |
| CAA | RFC 8659 | issue/issuewild/issuemail/iodef tags, DNSSEC per CA domain |
| RPKI | — | ROA validation per NS/MX host IP via RIPE Stat |
| ASPA | RFC 9582 | AS Provider Authorization records per ASN via RIPE Stat |
| IPv6 | — | AAAA presence for the domain, NS and MX hosts; government mandate table |
| Security.txt | RFC 9116 | Required/optional fields, expiry |
| WHOIS | RFC 7480 | RDAP lookup via rdap.org |
| Connection | — | The **visitor's** connection, not the domain: resolver DNSSEC validation, public IPv4/IPv6 addresses with ASN/prefix/ROA, ISP BGP route filtering (isbgpsafeyet.com method) |
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

PTR, BIMI, RPKI, ASPA, IPv6, Security.txt, and WHOIS are informational — shown but not scored. The Connection tab tests the visitor's own connection and is never scored either.

## Features

- **No dependencies** — single `index.html`, works offline after first load
- **DMARCbis conformance** — checks the DMARC record against RFC 9989 / 9990 / 9991 (May 2026): DNS tree walk policy discovery, tag registry status, external reporting authorization, and a generated conformant record. Informational only — the grade is unaffected
- **DNS over HTTPS** via Cloudflare (`cloudflare-dns.com/dns-query`)
- **RPKI/ASPA** via RIPE Stat API
- **WHOIS/RDAP** via rdap.org
- **4 UI languages** — English, Norwegian (Bokmål), Spanish, French — picked from an inline button row, persisted in `localStorage`
- **Settings menu** (⚙, top-right) — dark/light theme toggle + scoring system explanation
- **Mobile-friendly** — horizontal scrolling tab bar
- **Language switch** — rerenders all panels without re-querying DNS
- **Skip MTA-STS / Security.txt** — checkbox to skip checks that require direct server access (avoids CORS failures); preference persisted in `localStorage`
- **Shareable link** — "Copy link" button after scan encodes domain, selectors, and skip preference in URL; auto-runs on load
- **Statistics panel** — collapsible "🤓 Statistics" section on Overview tab showing total scan time, DoH query count, RIPE Stat API calls (with cache hits), HTTP fetches, DKIM selectors tested/found, IPs resolved, and per-check timing bars
- **Changelog** — version string in footer expands to full release history

## DKIM selector coverage

~85 selectors probed automatically, covering:

Google Workspace, Microsoft 365, Apple iCloud, Mailchimp/Mandrill, SendGrid, Amazon SES, Postmark, Zoho Mail, Proton Mail, Tuta, Fastmail, HubSpot, Brevo/Sendinblue, Mimecast, Proofpoint, Klaviyo, SparkPost/Bird, Mailgun, Constant Contact, Marketo, Salesforce Pardot, ActiveCampaign, Intercom, Customer.io, Iterable, Sailthru, MailerLite, Infomaniak, OVH, Hetzner, Domeneshop (ds+YYYYMM rotation), and generic/legacy selectors.

Custom selectors can be entered in the "Extra DKIM Selectors" field on the start page. A `?` help button explains what a selector is and how to find it.

## Security

- All DNS/external data rendered via `textContent` or `createTextNode` — never `innerHTML`
- Explanation sections use `safeMarkup()` — a whitelist parser allowing only `<b>`, `<code>`, `<br>`, and `<a href="https://...">` tags
- Links validated to `https?:` or `mailto:` schemes before use as `href`
- No data is sent to any server other than Cloudflare DoH, RIPE Stat, and rdap.org

## Contributing a translation

The UI currently ships in **4 languages**: English, Norwegian Bokmål, Spanish, and French. Adding a new language requires editing only two places in `index.html` — no build tools needed.

See **[translations/CONTRIBUTING.md](translations/CONTRIBUTING.md)** for the full step-by-step guide.

**Quick overview:**
1. Copy [`translations/TEMPLATE.js`](translations/TEMPLATE.js) and fill in your translations
2. Open a pull request with only your language file — do not edit `index.html`
3. The maintainer integrates it on merge

Missing keys fall back to English automatically, so partial translations are welcome.

---

## Tests

There is no build step, but the check logic can be driven in Node without a browser:

```
node tests/run.js      # regression tests against canned DNS/HTTP answers
node tests/static.js   # i18n key parity and arity, translation-file drift, CSS classes, sinks, tab order, version string
node tests/live.js     # every check + every renderer against real DNS for a set of known domains
```

`tests/harness.js` loads the two `<script>` blocks of `index.html` with stubbed `document`/`localStorage`/`fetch` and exposes the module-level functions.

## Adding a new release

1. Do the work in `index.html`
2. Update the footer `<summary>` version string and add a new `.cl-entry` block at the top of `#changelog-content`
3. Update `Current version` in `CLAUDE.md`
4. Add a row at the top of the version history table in `README.md`
5. Run `node tests/static.js` and `node tests/run.js`

## Version history

| Version | Date | Notes |
|---------|------|-------|
| 2026-October-13-5 | 2026-10-13 | MX hygiene (CNAME or IP-literal targets, unresolvable or duplicate hosts, single host, single AS), HELO/EHLO SPF per MX host in the SPF tab, and SPF depth: permerrors (unknown mechanism, syntax, duplicate modifiers, include without or with several SPF records, more than ten MX hosts, more than two void lookups) rate fail, records over ~450 bytes flagged |
| 2026-October-13-4 | 2026-10-13 | **DANE fix (grades move up):** TLSA records in parenthesised multi-line form, which Cloudflare returns for every SHA-256/SHA-512 digest, were flagged malformed since 2026-October-13-1; correct DANE deployments rated warning or fail. Cross-protocol coherence section at the top of the Fixes tab (display-only): TLS-RPT without MTA-STS/DANE, MTA-STS testing without TLS-RPT, BIMI vs DMARC enforcement, DMARC enforcing without SPF, undeliverable DMARC/TLS-RPT report destinations, DANE + MTA-STS enforce noted |
| 2026-October-13-3 | 2026-10-13 | DNSSEC depth: DS records at the parent matched against the DNSKEY set (island of security, broken chain, stale DS, SHA-1 digest), registry DS data from RDAP compared with DNS, RRSIG lifetimes of DNSKEY/SOA (expired, near expiry relative to the validity window), NSEC3 parameters against RFC 9276, RSA key sizes below 2048 bits; key tags and sizes shown per algorithm. RDAP fetched once per scan and shared with WHOIS |
| 2026-October-13-2 | 2026-10-13 | DKIM wildcard control probe: a random selector is probed with the known ones; a zone with a wildcard under `_domainkey` is shown as one wildcard entry instead of ~90 "found" selectors, selectors returning the identical record are not counted as discoveries, and the check is capped at warning. Also: `t=y` caps at good, Ed25519 key length checked (RFC 8463), obsolete DomainKeys/ADSP policy records reported |
| 2026-October-13-1 | 2026-10-13 | **Grades can move.** Audit fixes across the check logic: revoked DKIM keys no longer fail the check; null MX is not a DANE failure, PKIX-only and malformed TLSA records are flagged, partial DANE coverage rates good; SPF `redirect=` fetch failures are errors (not excellent) and `redirect=` is ignored next to `all`; subdomains without a `_dmarc` record are graded on the inherited organizational policy, DMARC tags tolerate whitespace, `sp=none` lowers the rating; SERVFAIL is reported as a DNS failure everywhere instead of "no record"; TLS-RPT, CAA (parent inheritance, iodef-only no longer excellent, issuemail separated), MTA-STS (no redirects, policy format and `max_age` validated, translated errors), BIMI (opt-out, http URLs), security.txt (`text/plain` required, `__proto__` crash, aligned ratings) and WHOIS (registrar locks, hold statuses, registrable domain) all corrected; Overview bar labels translated; one shared scoring table. New `tests/` directory with a Node harness, static checks and a live smoke run. One scan at a time (Enter/Back/Forward could start a second scan over a running one); language switch mid-scan no longer repaints stale results; Back/Forward no longer push duplicate history entries; DoH falls back to dns.google when cloudflare-dns.com is unreachable; RIPE Stat caches share in-flight lookups, one lookup per address, holder+ASPA in one stage, every origin AS validated; DMARCbis tree walk in parallel; accessibility: scan announcements, tab-dot rating text, labelled settings menu, scoring dialog focus, Fixes-tab focus, translated tab/ARIA/ROA labels and WHOIS dates; blocked localStorage no longer breaks the page; WARP detected positively |
| 2026-August-31-2 | 2026-08-31 | The "Is your ISP BGP-safe?" section now offers a "Report this result by email" link when the verdict is unsafe: a `mailto:` link prefilled with the verdict, ASN, ISP name, UTC date and tool version (always English), opened in the visitor's own mail client — nothing is sent automatically |
| 2026-August-31-1 | 2026-08-31 | New **Connection** tab testing the visitor's own connection, not the scanned domain: DNSSEC validation by the browser's DNS resolver (no-cors probes of `sigok`/`sigfail.ippacket.stream` — method and domains from Matthäus Wander's DNSSEC Resolver Test), public IPv4/IPv6 egress addresses via `ipv4`/`ipv6.icanhazip.com` enriched with ASN, holder, prefix and RPKI ROA status from RIPE Stat, and the "Is your ISP BGP-safe?" test moved here from the RPKI tab (the RPKI explanation now just points at Connection). Session-cached like the BGP test, inconclusive results retried on the next scan; structurally invisible to the grade, score bars and Fixes tab |
| 2026-August-19-1 | 2026-08-19 | A nonexistent domain (NXDOMAIN) no longer triggers a scan: a single SOA lookup gates the run and a "Domain does not exist. Try another one." modal is shown instead, dismissed with OK, Escape or a click outside. Previous results stay untouched and the dead domain is not pushed into the shareable URL |
| 2026-August-17-3 | 2026-08-17 | Jan Sandtrø's name in the acknowledgements now links to sandtro.no |
| 2026-August-17-2 | 2026-08-17 | New "Is your ISP BGP-safe?" section in the RPKI tab, replicating Cloudflare's isbgpsafeyet.com test (MIT): fetches a valid-ROA and an RPKI-invalid beacon from the visitor's browser — if the invalid one loads within 2 s the visitor's ISP does not drop hijacked routes. Detects Cloudflare WARP. Auto-runs once per page session on the first scan; cached for later scans; informational only — measures the visitor's connection, not the scanned domain, and never moves any score |
| 2026-August-17-1 | 2026-08-17 | **Grades can move.** DNSSEC now rates on the *weakest* algorithm a zone publishes rather than the strongest (a zone is signed with all of them and a validator may use any one), which can lower both the DNSSEC and MX bars for zones mid-rollover; single-algorithm zones are unaffected. Every request now has a timeout, so a hung lookup can no longer strand a scan with the spinner up and the button disabled. BIMI restored to the Overview bars and Fixes tab with a proper "Not scored" badge instead of the raw `RATING_NONE`. SPF `a/24`/`mx//64` parsed correctly; DKIM no longer concatenates two TXT records or mistakes a wildcard SPF answer for a key; propagation warnings no longer false-positive on record ordering. Per-scan DNS caching and bounded fan-out cut queries substantially. Theme persists and follows the OS; ARIA tablist with arrow-key navigation; all remaining hardcoded English strings translated; `translations/no.js` added |
| 2026-August-13-4 | 2026-08-13 | IPv6 government requirements reviewed: added the Netherlands (comply-or-explain since 2010; websites **and e-mail** reachable over IPv6 since 2021-12-31) and Germany (Netzstrategie 2030). Corrected the EU entry — NIS2 does not require IPv6. Sweden and Denmark were checked and have no binding requirement; both are now named explicitly rather than silently absent |
| 2026-August-13-3 | 2026-08-13 | Removed the hardcoded "Provider Reference" table from the DKIM tab — the probed-selector list already groups every selector under its provider. The orphaned `DKIM_PROVIDER_REF`, `DKIM_TH_SELECTORS` and `DKIM_TH_INFRA` strings were dropped from all four languages and the contributor files |
| 2026-August-13-2 | 2026-08-13 | Jan Sandtrø added to the acknowledgements — improving the MTA-STS and Security.txt checks, plus many other updates |
| 2026-August-13-1 | 2026-08-13 | DKIM selector audit against live DNS (274 domains) and provider documentation: 15 new selectors added, 16 unsupported ones removed, and several provider attributions corrected (`m1` → Marketo, `pic`/`krs` → Mailgun, `key1`/`key2` → Tucows OpenSRS, `mc1`/`mc2` → SendGrid not Mimecast). Domeneshop's `dsYYYYMM` window is now generated from the current date rather than hardcoded. The probed-selector list groups selectors under their provider, and a new DKIM2 section links the IETF successor drafts |
| 2026-July-27-5 | 2026-07-27 | Language picker changed from a `<select>` dropdown to a row of inline buttons — one click instead of two. Active language marked with `aria-pressed`, which both announces the selection to assistive tech and drives the highlight via a CSS attribute selector |
| 2026-July-27-4 | 2026-07-27 | Esperanto, Arabic and Hindi removed as UI languages — now ships in English, Norwegian, Spanish and French. A stored `mailcheck-lang` naming a removed language falls back to English and is rewritten; text direction fixed to `ltr` (CSS logical properties retained for a future RTL language) |
| 2026-July-27-3 | 2026-07-27 | Translation debt cleared — all 7 UI languages now complete, no English fallback anywhere. Norwegian +13 keys; Esperanto, Spanish, French, Arabic and Hindi +34 each (full IPv6 tab and explanation, SPF recursive lookup counts, SPF legacy type-99, SPF/DMARC propagation warnings, DKIM rotation note, CAA issuemail note, nameserver ASN diversity, Overview provider chips). `translations/*.js` synced with `index.html` |
| 2026-July-27-2 | 2026-07-27 | Arabic Security.txt explanation typo fixed; `translations/ar.js`, `fr.js` and `hi.js` synced with `index.html` (DMARCbis keys backfilled, plus the previously missing `PANEL_IPV6` and `SELECTOR_HELP` keys) |
| 2026-July-27-1 | 2026-07-27 | DMARCbis: new informational section on the DMARC tab checking the record against RFC 9989 / 9990 / 9991 (which obsolete RFC 7489 and RFC 9091) — DNS tree walk policy discovery replacing the Public Suffix List, tag registry conformance (`pct=`/`rf=`/`ri=` historic, new `t=`/`np=`/`psd=`), external reporting authorization via `<domain>._report._dmarc.<destination>`, and a generated conformant record. Grade unchanged; translated into all 7 languages |
| 2026-April-30-2 | 2026-04-30 | Mobile fix: domain/DKIM inputs now fill full card width on mobile (flex column mode was expanding items to fill height, leaving a large blank gap); score bar labels "MTA-STS" and "TLS-RPT" no longer wrap to two lines |
| 2026-April-30-1 | 2026-04-30 | Mobile layout improvements: reduced padding, gear button no longer overlaps title on iPhone; iOS safe-area support (viewport-fit=cover + env(safe-area-inset-*)); new 480px breakpoint for compact phones (Security.txt fields stack vertically, DKIM provider table scrollable); IPv6 requirements table wraps correctly on narrow screens |
| 2026-April-27-2 | 2026-04-27 | SPF recursive include-chain lookup counting; DKIM key rotation best-practice note; Cloudflare vs Google DNS propagation cross-check for SPF and DMARC; nameserver ASN diversity in RPKI tab; SPF legacy type-99 record detection; email provider detection on Overview tab; CAA issuemail tag (RFC 8657) support |
| 2026-April-27-1 | 2026-04-27 | DKIM selector help popover: `?` button next to "Extra DKIM Selectors" input explains what a selector is, how to find it in email headers, and why to add custom ones; translations in all 7 languages |
| 2026-April-17-1 | 2026-04-17 | New IPv6 tab (informational, not scored): AAAA checks for domain, MX hosts, NS hosts; IPv6 badge on MX tab per host; government mandate references (Norway, USA, EU, India, China); EN+NO translations |
| 2026-April-16-2 | 2026-04-16 | Acknowledgements fireworks on click (not hover); acknowledgements table cells left-aligned |
| 2026-April-16-1 | 2026-04-16 | Arabic (العربية) + Hindi (हिन्दी) UI languages — RTL layout via CSS logical properties for Arabic; full translations for both |
| 2026-April-14-9 | 2026-04-14 | Español (es) UI language — full translation of all strings and explanations |
| 2026-April-14-8 | 2026-04-14 | "Statistics" collapsible panel on Overview tab: total scan time, DoH queries, RIPE Stat API calls (with cache hits), HTTP fetches, DKIM selectors tested/found, IPs resolved, per-check timing bars |
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
