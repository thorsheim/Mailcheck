# DNS Email Security Checker — Project Notes

## Deliverable
Single self-contained file: `index.html` (no build tools, no dependencies, no server).
Uses Cloudflare DNS-over-HTTPS API for all lookups.
Uses RIPE Stat API for RPKI/ASPA/ASN data. Uses rdap.org for WHOIS/RDAP.

## Versioning
Footer carries a version string: `Version YYYY-Month-DD-N` (e.g. `2026-March-13-1`).
Increment the trailing counter for multiple releases on the same day.
Current version: **2026-August-13-2**

### Changelog
The footer version string is wrapped in a `<details id="changelog">` element. The `<summary>` shows the current version; clicking expands the full changelog.
Each release gets a `.cl-entry` div containing a `.cl-version` span and a `.cl-changes` `<ul>`.
**When releasing a new version:** update the `<summary>` text, add a new `.cl-entry` block at the top of `#changelog-content`, and update the version in `CLAUDE.md` and `README.md`.
The changelog is hardcoded HTML in the footer — not part of the i18n system.

## Architecture

### UI layout
Tab-based: `#tab-bar` (18 `.tab-btn` elements) + `#tab-panels` (18 `.tab-panel` divs).
Tabs (in order): Overview, DNSSEC, MX, **PTR**, DANE, SPF, DKIM, DMARC, **BIMI**, TLS-RPT, MTA-STS, CAA, RPKI, **ASPA**, **IPv6**, Security.txt, WHOIS, **Fixes**.
- Tab bar hidden until first `runChecks()` call (`.visible` class).
- Tab dots (`.tab-dot`) colored per rating after each check completes.
- Each panel: `.panel-header` (icon + name + badge) + `.panel-body` (summary, issues, details, explanation).
- Overview panel contains `#summary-grade`, `#summary-title`, `#summary-desc`, `#score-bars`.
- No modal popups — DKIM probed-selectors list is a `<details>` block in the DKIM panel.
- `#settings-menu` (fixed top-right): `#settings-btn` (⚙ gear icon) opens `#settings-dropdown`. Dropdown has two `.settings-item` buttons: `#theme-option` (toggles light/dark) and `#scoring-option` (opens `#scoring-modal-backdrop` with the scoring system explanation). Backdrop click or Escape closes the modal. `buildScoringModal()` builds the modal content dynamically using `el()` and `clearNode()`. `applyTheme()` updates the dropdown item text labels (i18n-aware).
- **DKIM selector help popover**: a `.help-btn` (`?` circle) sits inline with the "Extra DKIM Selectors" label. Click toggles `.help-popover` (positioned below the input, `z-index: 200`). Content built lazily via `safeMarkup(popover, tx('SELECTOR_HELP'))` on each open — always uses current language. Closes on click-outside (document click handler), Escape, or language change. `SELECTOR_HELP` is an `x`-namespace key in all 4 languages.
- `#lang-row` inline language buttons (below input row): English / Norsk / Español / Français. Each is a `.lang-btn` carrying `data-lang`; `.lang-sep` spans (`aria-hidden`) render the separator dots so they stay outside each button's hover/active background. Active state is `aria-pressed="true"`, which both announces the selection and drives the highlight through a CSS attribute selector — there is no separate active class to keep in sync. Persisted in `localStorage('mailcheck-lang')`.
- Single skip checkbox (`#skip-cors-cb`) on the same row as the language selector. Persisted in `localStorage('mailcheck-skip-cors')`. When checked, `runChecks` receives `opts.skipMTASTS`/`opts.skipSecTxt` and passes a pre-resolved `{ skipped: true, rating: 'skip' }` result instead of calling the check. Skipped tabs show a grey dot + "Skipped" badge. MTA-STS weight (15%) is excluded from the score and the remaining 85% normalised to 100. Skipped checks are filtered from `renderRecommendations`.
- `#footer` below `#tab-panels`: attribution to Per Thorsheim + links to thorsheim.net and passwordscon.org. Version string on a second line via `<br>`, wrapped in `<details id="changelog">` — clicking expands the full changelog.
- **Mobile tab bar**: `flex-wrap: nowrap; overflow-x: auto` so all 16 tabs scroll horizontally in a single row. Scrollbar hidden (`scrollbar-width: none`). Edge fade via CSS `mask-image` gradient. `flex-shrink: 0` on `.tab-btn` prevents wrapping. Tab click handler calls `btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })` to keep the active tab visible.

### DNS layer
- `dohQuery(name, type)` — fetches `https://cloudflare-dns.com/dns-query?name=…&type=…`
  with `Accept: application/dns-json`. Returns raw JSON.
- `parseTxtData(data)` — strips outer quotes and joins adjacent TXT segments
  (`"part1" "part2"` → `part1part2`).
- **AD flag** (`response.AD === true`) = DNSSEC-validated by Cloudflare's resolver.
- **Status 3** = NXDOMAIN.

### Checks (all run in parallel via `Promise.allSettled`)

| Check | DNS name / endpoint queried | Key detail |
|-------|----------------------------|------------|
| DNSSEC | `<domain>` DNSKEY + SOA | Falls back to zone apex via SOA Authority section for non-apex hostnames |
| MX | `<domain>` MX, then DNSSEC per host | Detects null MX (RFC 7505); `nullMX: true` flag |
| PTR | A+AAAA per MX host → PTR per IP | FCrDNS: checks if PTR value matches MX hostname; does not affect grade |
| DANE | `_25._tcp.<mx-hostname>` TLSA | Checks per-MX-host; requires DNSSEC validation (AD flag) |
| SPF | `<domain>` TXT | Follows `redirect=` to target domain; returns `allQualifier` |
| DKIM | `<selector>._domainkey.<domain>` TXT | ~92 auto selectors + custom; capped at 10 parallel |
| DMARC | `_dmarc.<domain>` TXT | RFC 7489 + RFC 9989 (DMARCbis); parses p=, sp=, pct=, rua=, ruf=, adkim=, aspf=; DNSSEC checked for rua/ruf endpoint domains; DMARCbis sub-analysis attached as `dmarcbis` |
| BIMI | `default._bimi.<domain>` TXT | Parses l= (logo URL) and a= (authority/VMC); does not affect grade |
| TLS-RPT | `_smtp._tls.<domain>` TXT | RFC 8460; DNSSEC checked for rua= endpoint domains |
| MTA-STS | `_mta-sts.<domain>` TXT + HTTPS policy fetch | RFC 8461; collects all `mx:` lines as array; cross-checks against actual MX hosts |
| CAA | `<domain>` CAA (type 257) | Hex format parsed by `parseCAAData()`; DNSSEC checked for each CA domain; values linkified |
| RPKI | RIPE Stat `network-info` + `rpki-validation` + `as-overview` + `aspa` | Checks NS+MX host IPs; includes ASPA section |
| IPv6 | `<domain>` A+AAAA, `<domain>` NS → AAAA per NS host, `<domain>` MX → AAAA per MX host | Informational only; does not affect grade |
| Security.txt | `https://<domain>/.well-known/security.txt` (fallback `/security.txt`) | RFC 9116; parsed fields shown |
| WHOIS | `https://rdap.org/domain/<domain>` | RDAP JSON; registrar, dates, nameservers, status |

### Key functions (approximate line numbers — file grows with each edit; use function names to search)

```
STRINGS             i18n string tables — see i18n section below
currentLang         module-level language state ('en' | 'no')
t() / ts() / td() / tx()   i18n lookup helpers
applyI18n()         updates all data-i18n / data-i18n-placeholder elements in the DOM
uriHostname(uri)    extracts hostname from mailto: or https: URI (for endpoint DNSSEC checks)
dohQuery()          DoH fetch
parseTxtData()      TXT segment joining
ALG_NAME_TO_NUM     Cloudflare returns algorithm as TEXT (e.g. "ED25519", "ECDSAP256SHA256"),
resolveAlgNum()       never numeric — must map through this table
checkDNSSEC()       DNSKEY + SOA; zone-apex fallback for non-apex hostnames
checkMX()           detects null MX (RFC 7505); returns nullMX:true for MX 0 .
parseTLSAData()     RFC 3597 hex or presentation format
rateTLSA()
checkDANE()
analyzeSPF()        parses SPF record; tracks redirectDomain; skips SPF_MISSING_ALL when redirect present
checkSPF()          follows redirect= to target domain; returns redirectDomain + redirectRecord in result
dsRotationSelectors(monthsBack, monthsAhead)
                    generates Domeneshop's dsYYYYMM window from the current date (default 16 back,
                      1 ahead = 18 selectors). Never hardcode this range — see critical bug 8.
DS_SELECTORS        the generated Domeneshop window, spread into AUTO_SELECTORS
AUTO_SELECTORS      ~92 known DKIM selectors (74 fixed + 18 generated Domeneshop)
SELECTOR_PROVIDER   selector → provider name map; DS_SELECTORS are added to it in a trailing loop
getRSAKeyBits()     DER/SPKI parser — see critical note below
parseDKIMRecord()
probeDKIMSelector() returns { selector, ...analysis, ad }
checkDKIM()         returns {rating, found[], testedCount, message}
checkDMARC()        _dmarc.<domain> TXT; parses p=, sp=, pct=, rua=, ruf=, adkim=, aspf=;
                      runs checkDNSSEC for all unique hostnames in rua= and ruf= URIs;
                      returns endpointDnssec map + dmarcbis (see DMARCbis section)
parseDMARCTagList() order-preserving tag list (v= must be first, duplicates detected)
dmarcTagValue()     single lowercased tag value from a record string
dmarcTreeWalkQuery()one tree-walk step: query _dmarc.<name>, discard non-v=DMARC1 and multi-record sets
dmarcTreeWalk()     RFC 9989 §4.10 DNS Tree Walk; max 8 queries; returns steps[], orgDomain,
                      orgRule, policyDomain, policyRecord, inherited, isOrgDomain
dmarcDomainExists() NXDOMAIN test (RFC 9989 §3.2.13) deciding sp= vs np= for inherited policy
checkReportAuthorization()
                    RFC 9990 §4 / RFC 9991 §5; queries <policyDomain>._report._dmarc.<host>;
                      status: internal|authorized|override|override-bad|missing|too-long|unparsable|error
analyzeDMARCbisTags()
                    pure record conformance analysis (no DNS); returns { issues, map, tags }
buildDMARCbisSuggestion()
                    generates an RFC 9989-conformant record from the parsed tag map
analyzeDMARCbis()   orchestrates tree walk + tag conformance + external auth; returns
                      { rating, issues, tagIssues, extAuth, suggestion, treeWalk, appliedTag }
checkBIMI()         default._bimi.<domain> TXT; parses l= and a=; rating: excellent/good/warning/fail
checkTLSRPT()       _smtp._tls.<domain> TXT; runs checkDNSSEC for all rua= endpoint hostnames;
                      returns endpointDnssec map
checkMTASTS()       collects all mx: lines as array (not last-wins); cross-checks MX hosts against
                      policy patterns (supports *.example.com wildcards); returns mxMatch issues
checkCAA()          also runs checkDNSSEC() for each CA domain; returns caDnssec map
checkSecurityTxt()  fetches and parses RFC 9116 security.txt
checkWHOIS()        RDAP lookup via rdap.org
checkPTR()          resolves A+AAAA per MX host; queries PTR per IP; relaxed FCrDNS match
reverseIPv6(ip)     expands IPv6 to 32 hex nibbles, reverses, appends .ip6.arpa
resolveHostIPs()    DoH A+AAAA resolution helper
rpkiLookupIP()      RIPE Stat network-info + rpki-validation; 2 sequential API calls per IP
aspaLookupASN()     RIPE Stat aspa endpoint; normalises provider list
checkRPKI()         NS+MX hosts → IPs → ROA + ASPA; also fetches asnInfo and provider holder names
getASPARating()     derives ASPA-specific rating from a checkRPKI() result (excellent/warning)
renderASPA()        dedicated ASPA tab renderer; reuses r.rpki result
checkIPv6()         queries A+AAAA for domain, NS hosts, MX hosts; returns mxHosts/nsHosts arrays
                      with v4/v6 address splits; rating: excellent (all have AAAA), good (some),
                      warning (none); informational only (weight=0)
renderIPv6()        renders IPv6 tab: summary, issues, per-host address breakdown (collapsible),
                      mandatory government requirements table (Norway §12 mandatory from 2023-01-01
                      with max extension to 2025-01-01, USA, EU, India, China), explanation
el()                DOM element factory
clearNode()         safe DOM clearing (replaces innerHTML = '')
makeSpinner()
makeBadge(rating)
makeIssueList()     resolves textKey/textArgs on each issue at render time (i18n-aware)
makeEndpointIssueList(issues, endpointDnssec)
                    like makeIssueList but appends a DNSSEC badge to TLSRPT_ENDPOINT,
                    DMARC_RUA_URI, DMARC_RUF_URI items; used in renderTLSRPT + renderDMARC
makeDetails()       <details>/<summary> helper
safeMarkup()        whitelist markup parser for explanation sections
addExplanation()
setTabLoading()     clears panel body, resets dot, adds spinner to panel header
setTabResult()      updates dot color, removes spinner, adds rating badge, calls buildFn(body)
renderRecommendations(r)
                    Aggregates all check results into a prioritized action list.
                      "What to fix": scored checks not at excellent, sorted by weight desc.
                      "Informational": info-only checks not at excellent.
                      Passing checks: collapsed <details> "All checks passing".
                      Check name buttons navigate directly to the relevant tab.
                      Tab dot color = worst rating across all scored checks.
renderSummary()     Weighted grade: DKIM 20%, SPF 15%, DMARC 15%, MTA-STS 15%, DNSSEC 10%,
                      MX 10%, DANE 10%, TLS-RPT 3%, CAA 2%
                      Shows all 18 tabs: 9 scored bars first, then a labeled separator
                      "Informational (not scored)", then PTR, BIMI, RPKI, ASPA, IPv6, Security.txt,
                      WHOIS bars (weight=0). Grade calculation unchanged.
currentDomain       module-level domain state (set in runChecks)
lastResults         stores last Promise.allSettled results for language-switch re-render
scanStats           module-level stats object (null before first scan); reset at top of runChecks();
                      fields: startMs, totalMs, checks{}, dohRequests, ripeStatRequests,
                      ripeStatCacheHits, httpRequests
timed(name, p)      wraps a promise; records elapsed ms into scanStats.checks[name] on settle
rerenderAll(r)      re-renders all 17 panels from stored results (no DNS re-query)
runChecks()         orchestrator; accepts opts={skipMTASTS,skipSecTxt}; resets scanStats; wraps all
                      15 checks in timed(); saves lastResults; calls rerenderAll()
renderStatsPanel(dkim, rpki)
                    appends/replaces <details id="stats-panel"> to #overview-content; reads
                      scanStats for counts and check timings; called at end of renderSummary()
```

### i18n system

Three namespaces per language in the `STRINGS` object:

- **`s` (static)** — plain string key→value. Access with `ts('KEY')`.
- **`d` (dynamic)** — arrow functions for pluralised/interpolated strings. Access with `td('KEY', ...args)`.
- **`x` (explanations)** — full explanation markup strings for `addExplanation()` (17 keys: DMARC, DMARCBIS, DNSSEC, MX, PTR, DANE, SPF, DKIM, DKIM2, TLSRPT, MTASTS, CAA, RPKI, BIMI, STXT, WHOIS, IPV6). Access with `tx('KEY')`.
  `safeMarkup()` builds **text nodes**, so HTML entities are *not* decoded — write `<domain>` literally, never `&lt;domain&gt;`.

Lookup order: current language → English fallback → key name as visible fallback.

**Issue objects** in check functions use `textKey`/`textArgs` instead of `text` so that `makeIssueList()` can resolve them at render time (enabling language-switch without re-querying DNS):
```js
// In check functions:
issues.push({ rating: 'warning', textKey: 'SPF_MISSING_ALL' });
issues.push({ rating: 'warning', textKey: 'SPF_IP4_BROAD', textArgs: [val, prefix] });

// makeIssueList() resolves:
const resolvedText = iss.textKey
  ? (iss.textArgs ? td(iss.textKey, ...iss.textArgs) : ts(iss.textKey))
  : iss.text;   // legacy fallback
```

**`STRINGS` lives in its own `<script>` block**, separated from the main logic script by a closing `</script>` / opening `<script>` pair. The block is preceded by a `<!-- TRANSLATIONS -->` HTML comment banner. The main logic script opens immediately after with `'use strict'`.

**Adding a new language**: add a new key (e.g. `fr`) to `STRINGS` with all three sub-objects (`s`, `d`, `x`), then add a `<span class="lang-sep" aria-hidden="true">&middot;</span>` + `<button type="button" class="lang-btn" data-lang="fr" lang="fr">Français</button>` pair to `#lang-row`. No other changes needed — the click handler is bound to all `.lang-btn` elements.

**Contributor workflow**: external translators submit only `translations/<lang>.js` (copied from `translations/TEMPLATE.js`). The maintainer pastes it into the `STRINGS` block in `index.html` and adds the `<option>` tag on merge. See `translations/CONTRIBUTING.md`.

**Current languages**: `en` (English, default), `es` (Spanish), `fr` (French), `no` (Norwegian Bokmål).
All four are **complete** — no language relies on the English fallback. When adding a key, add it to every language, and mirror it into `translations/<lang>.js` so the contributor files stay in sync.

**Removed languages**: `eo` (Esperanto), `ar` (Arabic), `hi` (Hindi) were dropped in 2026-July-27-4. Their `STRINGS` blocks and `translations/*.js` files are recoverable from git history at tag/commit `7de8c09`.

**Stale stored preference**: `currentLang` is validated against `STRINGS` at startup — a `mailcheck-lang` value in `localStorage` naming a removed language falls back to `en` and is rewritten, so the highlighted `.lang-btn` and `currentLang` can never disagree.

**Text direction**: no RTL language currently ships, so `applyI18n()` hard-sets `dir = 'ltr'`. The stylesheet uses CSS logical properties throughout, so re-adding an RTL language only needs that one line to select `'rtl'`.

### IPv6 tab details
- `checkIPv6(domain)` queries NS, MX, domain A+AAAA in one parallel `Promise.allSettled`, then calls `resolveHostIPs()` for each unique NS/MX host.
- Returns `{ rating, issues, domainIPs: {v4, v6}, mxHosts: [{hostname, v4, v6}], nsHosts: [{hostname, v4, v6}] }`.
- Rating: `excellent` (all MX+NS hosts-with-IPs have AAAA), `good` (some have AAAA), `warning` (none have AAAA), `fail` (exception).
- Informational only — weight 0; appears in informational score bars and scoring modal.
- `renderIPv6` accesses `lastResults.ipv6` — same module-level pattern as `renderMX` accessing `lastResults.dmarc`.
- MX tab: `renderMX` reads `lastResults.ipv6` to show a green "IPv6" or amber "No IPv6" badge on each MX host row.
- SPF tab: `renderSPF` reads `lastResults.ipv6` to show a `SPF_NO_IP6_MECHS` warning when MX/NS hosts have AAAA but no `ip6:` mechanisms appear in the SPF record.
- Norway regulation: §12 of Forskrift om IT-standarder i offentlig forvaltning — mandatory from **1 January 2023**, with a maximum 2-year extension to **1 January 2025**. Regulation enacted 2013-04-05, lovdata.no link in explanation.
- Test: `cloudflare.com` and `gmail.com` → excellent; a domain with IPv6-capable MX but no `ip6:` in SPF → SPF tab shows warning note.

### SPF redirect details
- `analyzeSPF()` tracks `redirectDomain` when it encounters `redirect=<val>`. Does NOT push the old `SPF_REDIRECT` warning.
- When `redirectDomain` is set and there is no `all` mechanism, `SPF_MISSING_ALL` is NOT pushed (RFC 7208: redirect replaces `all`).
- `checkSPF()` checks `analysis.redirectDomain` after calling `analyzeSPF`. If present, it fetches the TXT record at the redirect target, calls `analyzeSPF` on it, runs DNSSEC checks on the redirect target's mechanisms, and returns a combined result with `redirectDomain` + `redirectRecord`. The redirect analysis rating/issues/mechanisms/allQualifier are used as the effective policy.
- `renderSPF()` shows two labeled records when `d.redirectDomain` is set: "Original SPF record" and "Effective policy (redirect → target)" before the issue list.
- Error cases: redirect target has no SPF (`SPF_REDIRECT_NO_RECORD`), multiple SPF (`SPF_REDIRECT_MULTI`), fetch failure (`SPF_REDIRECT_ERROR`).
- Test domain: `dmarcadvisor.com` → `v=spf1 redirect=spf.dmarcadvisor.com.eu-2o4fmqie.e1.dspf.app`

### DKIM details
- `probeDKIMSelector(selector, domain)` returns `{ selector, ...analysis, ad }` — the `ad` field
  captures the AD flag from the DoH response for per-selector DNSSEC validation status.
- `checkDKIM` adds `provider: SELECTOR_PROVIDER[selector] || null` to each found selector object.
- **Selector list provenance (audited 2026-08-13):** every entry was checked against live DNS across
  274 domains plus provider documentation. When adding a selector, verify it the same way — a
  plausible-looking name is not evidence. Two traps found during that audit:
  - ~15 domains publish a **wildcard TXT under `_domainkey`** (hubspot.com, brevo.com, zendesk.com,
    gov.uk, yahoo.com, netflix.com …). They answer *every* selector query, so any frequency count
    must be validated with a nonsense-selector control probe first.
  - CNAME targets reveal the real owner. `mc1`/`mc2` point at `sendgrid.net` (not Mimecast),
    `key1`/`key2` at `dkim.hostedemail.link` (Tucows OpenSRS), `scph*` is SparkPost (not Mailchimp),
    `kl`/`kl2` are Klaviyo riding SendGrid, and `mte1`/`mte2` → `dkim{1,2}.mandrillapp.com` are
    Mandrill's current pair (bare `mandrill` is the older shared key).
- Providers whose selector is **admin-chosen with no fixed default** (Mimecast, Proofpoint, OVH,
  Hetzner, Infomaniak, Zoho beyond its `zoho` example) cannot be probed reliably — do not re-add
  year-stamped guesses like `pp2024`.
- `renderDKIM` renders the probed list as a `.provider-table` grouped by provider, with
  unattributed selectors collected into a trailing `DKIM_PROV_UNKNOWN` row.
- The DKIM2 section (`tx('DKIM2')`, title `DKIM_DKIM2_TITLE`) is **informational only** — DKIM2 is
  still an Internet-Draft and nothing in it touches the rating, score bars or grade.
- `renderDKIM` uses module-level `currentDomain` (set in `runChecks`) for DNS name display.

### DMARC / TLS-RPT endpoint DNSSEC details
- `uriHostname(uri)` extracts the hostname from a `mailto:user@host` or `https://host/path` URI. Handles `!size` suffix in DMARC URIs. Used for DNSSEC checks on reporting endpoints.
- `checkDMARC` collects all unique hostnames from `rua=` and `ruf=` URIs, runs `checkDNSSEC` on each in parallel, returns `endpointDnssec: { [hostname]: dnssecResult }`.
- `checkTLSRPT` does the same for `rua=` URIs, returns `endpointDnssec`.
- `makeEndpointIssueList(issues, endpointDnssec)`: like `makeIssueList` but for `TLSRPT_ENDPOINT`, `DMARC_RUA_URI`, `DMARC_RUF_URI` issues it appends a DNSSEC badge (rating + algorithm name) for the endpoint's hostname.
- `renderDMARC` and `renderTLSRPT` use `makeEndpointIssueList` instead of `makeIssueList`.

### BIMI details
- Queries `default._bimi.<domain>` TXT; record must start with `v=BIMI1`.
- Parses tag=value pairs: `l=` (logo URL, required), `a=` (authority/VMC URL, optional but required by Gmail).
- Rating: `excellent` (both l= and a= present), `good` (l= only), `warning` (record present, l= empty), `fail` (no record).
- Does NOT affect grade score.
- `renderBIMI` renders `BIMI_LOGO_URL` and `BIMI_AUTHORITY_URL` issues as clickable `<a>` links (not plain text). Other issues use normal `textContent` rendering.

### PTR / FCrDNS details
- `checkPTR(domain)` re-queries MX records, resolves A+AAAA per MX host (via `resolveHostIPs`), then queries PTR for each IP (capped at 4 IPs per host).
- IPv4 PTR: `d.c.b.a.in-addr.arpa`. IPv6 PTR: `reverseIPv6(ip)` — expands to 32 hex nibbles, reverses, appends `.ip6.arpa`.
- Relaxed FCrDNS: checks if PTR value (trailing dot stripped, lowercased) matches the MX hostname exactly.
- Ratings per IP: `excellent` (PTR matches MX hostname), `good` (PTR present, no match), `warning` (no PTR), overall = worst across all IPs.
- Does NOT affect grade score.

### MTA-STS details
- Policy parse now collects ALL `mx:` lines into an array (previously last-wins). Other keys remain scalar.
- MX match check: after fetching the policy, re-queries domain MX, checks each MX hostname against `mx:` patterns. Wildcard `*.example.com` matches `bar.example.com` but not `example.com` or `bar.baz.example.com`.
- Issues: `MTASTS_MX_MATCH` (good), `MTASTS_MX_MISMATCH` (warning), `MTASTS_MX_NO_PATTERNS` (warning).
- `renderMTASTS` displays multi-value `mx:` lines correctly (one per line) via `flatMap`.
- CORS failures for the policy file fetch are expected for some servers — rating: `warning`.

### RPKI/ASPA details
- `checkRPKI` resolves A+AAAA for all NS and MX hosts, caps at 4 IPs per host.
- Per IP: `rpkiLookupIP` calls RIPE Stat `network-info` (→ ASN + prefix) then `rpki-validation` (→ status + ROAs). Two sequential fetches per IP.
- After host results: fetches `as-overview` for all unique ASNs to get holder names (`asnInfo`).
- Then fetches `aspa` endpoint for each unique ASN (`aspaData`). Normalises provider list from objects or plain numbers.
- Finally fetches `as-overview` for any provider ASNs from ASPA records not already in `asnInfo`.
- RPKI status values: `valid` (excellent), `invalid` (fail), `unknown`/`not_routed` (warning).
- ASPA status: `published` (excellent badge), absent (warning badge "NO ASPA"), error (warning badge "UNAVAILABLE").
- `renderRPKI`: host details section only (NS/MX type tags, IPs, prefix, ASN+holder, ROA badge). ASPA section moved to `renderASPA`.
- `getASPARating(result)`: derives ASPA rating from `checkRPKI` result — `excellent` if all ASNs published, `warning` otherwise. Used by `renderASPA`, `renderSummary`, `renderRecommendations`.
- `renderASPA(result)`: reuses `r.rpki` result; renders per-ASN ASPA status (published/no-aspa/error badge) + provider chips with holder names.

### CAA details
- `checkCAA` extracts CA domain names from `issue`/`issuewild` values (part before `;`), runs `checkDNSSEC` on each in parallel, returns `caDnssec` map.
- `renderCAA` records list: `iodef` values with `https?:` or `mailto:` scheme → `<a>` link; `issue`/`issuewild` CA domain → `<a>` to `https://<domain>`, trailing params as text.
- CA Domain DNSSEC section rendered inside the "Records & analysis" `<details>` block.
- All links: `target="_blank" rel="noopener noreferrer"`.
- Global CSS rule `.panel-body a` styles all panel links (color: `var(--accent-hover)`, underline on hover).

### Security.txt details
- Fetches `/.well-known/security.txt` first, falls back to `/security.txt`.
- Parses RFC 9116 fields (key: value lines, `#` comments ignored).
- Required fields checked: `Contact` (fail if missing), `Expires` (warning if missing, fail if expired, warning if < 30 days).
- Optional fields displayed: `Encryption`, `Policy`, `Acknowledgments`, `Preferred-Languages`, `Canonical`, `Hiring`.
- Raw text shown in a `<details>` block.
- CORS failures are expected for servers that don't set `Access-Control-Allow-Origin`. Rating: warning if file inaccessible.

### DMARC details
- Queries `_dmarc.<domain>` TXT; record must start with `v=DMARC1`.
- Parses all tag=value pairs split by `;`.
- Rating: `excellent` (p=reject, pct=100), `good` (p=quarantine), `warning` (p=none or pct<100 or no rua=), `fail` (no record).
- `checkDMARC` returns `{ rating, record, parsed, pct, issues, endpointDnssec, dmarcbis }`. `parsed` is the full tag map.
- `renderMX` accesses `lastResults.dmarc` to check if `p=reject` is set when the domain has no MX records.
- `analyzeSPF` and `checkSPF` both return `allQualifier` so `renderMX` can check for SPF `-all`.
- Null MX (RFC 7505): `checkMX` detects a single `MX 0 .` record and returns `{ nullMX: true, rating: 'good', hosts: [] }`. `renderMX` shows a positive confirmation for null MX.
- When no MX (and not null MX): if SPF `-all` or DMARC `p=reject` is missing, `renderMX` shows `MX_NULL_SUGGEST` warning recommending null MX + SPF -all + DMARC p=reject.

### DMARCbis details (RFC 9989 / 9990 / 9991)
Additive section rendered **below** the RFC 7489 analysis and the DMARC explanation.
**Informational only** — `dmarcbis.rating` never reaches the tab dot, the score bars or the grade.
`checkDMARC` attaches it via `const bis = (rec, multi) => analyzeDMARCbis(...).catch(() => null)`;
every early-return branch (NXDOMAIN, no record, multi-record) also carries it, so the tree walk
still reports an inherited parent policy when the author domain has no record of its own.

- **Tag registry** (`DMARCBIS_ACTIVE_TAGS` / `DMARCBIS_HISTORIC_TAGS`) mirrors RFC 9989 §9.3.
  Active: adkim, aspf, fo, np, p, psd, rua, ruf, sp, t, v. Historic: pct, rf, ri.
- **DNS Tree Walk** (`dmarcTreeWalk`, §4.10): starts at the parent of the queried domain (the author
  lookup is passed in from `checkDMARC`, never repeated), walks toward the root one label at a time,
  and stops on a record carrying `psd=y` or `psd=n`. Domains with ≥8 labels jump straight to their
  seven right-most labels so the total never exceeds `DMARCBIS_TW_MAX_QUERIES` (8).
  Organizational-domain selection follows §4.10.2: psd=n wins, else a non-start psd=y (org = one label
  below), else the shortest name carrying a record, else the queried domain (`orgRule` records which).
- **Policy discovery** (§4.10.1): the author domain's own record wins; otherwise the nearest ancestor.
  For an inherited policy, `dmarcDomainExists()` decides whether `np=` (NXDOMAIN) or `sp=` applies.
- **External reporting authorization** (RFC 9990 §4, RFC 9991 §5): for each `rua=`/`ruf=` URI whose host
  is not under `orgDomain`, queries `<policyDomain>._report._dmarc.<host>` TXT. A wildcard at
  `*._report._dmarc.<host>` answers the same query, so `authorized` covers both cases. A `rua=`/`ruf=`
  tag in the authorization record is a destination override — legal only on the same host
  (`override-bad` otherwise: RFC 9990 §4 forbids sending to *either* address).
- **Tag conformance** (`analyzeDMARCbisTags`, pure — no DNS): v= first and case-exact, duplicate tags,
  p= missing (→ p=none if rua= present, else no DMARC processing), pct= historic (0 → suggest t=y,
  100 → drop, other → drop), rf=/ri= historic, t= validity + testing semantics, np=/psd= presence and
  validity (only flagged as missing at the organizational domain), sp= ignored on subdomain records,
  adkim/aspf validity, fo= without ruf= and fo= syntax, obsolete `!size` URI suffix, missing mailto:
  in rua=, unregistered tags.
- `buildDMARCbisSuggestion()` emits a conformant record: historic/unregistered tags dropped, `pct=0`
  migrated to `t=y`, `np=reject` and `psd=n` added at an organizational domain. The `p=` value is
  carried over unchanged — never silently strengthened.
- `renderDMARCbis(body, bis)` renders four sub-sections (discovery + collapsible query list, tag
  conformance, external authorization, suggested record) plus `tx('DMARCBIS')`.
  `DMARCBIS_EXT_RATING` / `DMARCBIS_EXT_KEY` map ext-auth statuses to ratings and i18n keys; all four
  ext-auth textArgs are always `(tag, uri, name, override)`.
- `DMARCBIS_TW_ORG_DOMAIN` takes the *rule key* (`'psd-n' | 'psd-y' | 'shortest' | 'default'`) as an
  arg and resolves it inside the per-language `d` function — never call `ts()` at check time
  (see critical bug 5).
- Test domains: `gov.uk` (np=reject, sp=none, fo= without ruf=), `cloudflare.com` (pct=100 historic),
  `mail.cloudflare.com` (inherited via sp=), `zzz-no-such-host.thorsheim.net` (NXDOMAIN → np/sp path),
  `a.b.c.d.e.f.g.h.i.j.mail.example.com` (reproduces the RFC 9989 §4.10 eight-query example exactly).

### WHOIS/RDAP details
- Single fetch to `https://rdap.org/domain/<domain>` (bootstraps to authoritative RDAP server).
- Extracts: registrar (from `entities[].vcardArray fn field`), created/updated/expires (from `events[]`), status, nameservers.
- Shows expiry warning if domain expires within 30 days or has already expired.
- Rating: `good` if data found, `warning` if lookup failed. Does not affect grade score.

### Recommendations tab details
- `renderRecommendations(r)` reads all 14 check results from the `Promise.allSettled` result object.
- Scored checks (with weight): DKIM 20%, SPF 15%, DMARC 15%, MTA-STS 15%, DNSSEC 10%, MX 10%, DANE 10%, TLS-RPT 3%, CAA 2%.
- Informational checks (weight=0): PTR, BIMI, RPKI, ASPA, Security.txt, WHOIS.
- Tab dot color = worst rating across the 9 scored checks only (informational excluded).
- Layout: "What to fix" section (scored non-excellent) → "Informational" section (info non-excellent) → `<details>` "All checks passing" (all excellent checks, collapsed unless everything passes).
- Each row: check name button (navigates to that tab on click) + weight badge (scored only) + rating badge + issue list from `makeIssueList()`.
- When all checks are excellent: only shows "Everything is configured optimally." message + open passing list.
- CSS classes: `.rec-check-row`, `.rec-check-header`, `.rec-check-name`, `.rec-weight-badge`.
- i18n keys: `PANEL_RECS` (value: "Fixes"), `RECS_WHAT_TO_FIX`, `RECS_INFORMATIONAL`, `RECS_ALL_GOOD`, `RECS_ALL_EXCELLENT`.

## Critical bugs fixed — do not re-introduce

### 1. DNSKEY algorithm field is a text mnemonic, not a number
Cloudflare DoH returns `"data": "257 3 ED25519 <key>"` — the algorithm field (index 2
after splitting on whitespace) is always a text name (`ED25519`, `ECDSAP256SHA256`,
`RSASHA256`, etc.). `parseInt("ED25519")` = NaN. Always go through `resolveAlgNum()`.

### 2. DNSKEY records live only at zone apexes
MX hostnames (e.g. `mx.domeneshop.no`) are not zone apexes and have no DNSKEY records.
`checkDNSSEC()` handles this by: if DNSKEY query returns empty, look for a SOA record
in **both Answer and Authority sections** of the SOA response, extract the zone name,
and re-query DNSKEY at that apex.

### 3. `getRSAKeyBits()` — `pos += readLen()` stale-pos bug
`readLen()` advances `pos` as a side-effect AND returns the data length.
`pos += readLen()` evaluates the LHS `pos` **before** `readLen()` runs, so the addition
uses the pre-call (stale) value of `pos`, undercounting by the number of length bytes
consumed. Always assign to a local first:
```javascript
// WRONG:  pos += readLen();
// RIGHT:
const n = readLen();
pos += n;
```
This applies in `skipItem()`. `enterSeq()` is fine because it discards the return value.

### 4. MTA-STS policy fetch failure must be rated `warning`, not `good`
When the HTTPS policy file fetch fails (CORS, network error, timeout), the `policyError`
branch must set `rating = 'warning'`. Previously it set `rating = 'good'`, causing the
tab dot to show green while the panel body showed an error message. The issue pushed in
that branch has `rating: 'warning'` — the overall panel rating must match.

### 5. Issue strings must use `textKey`/`textArgs`, not `text`
Check functions (analyzeSPF, checkTLSRPT, checkMTASTS, checkCAA, checkSecurityTxt, etc.)
must emit `{ rating, textKey, textArgs? }` rather than `{ rating, text }` so that
`makeIssueList()` can re-resolve strings in the current language when `rerenderAll()` is
called after a language switch. Using `text:` bakes the string in at check time and it
will not update on language change.

### 6. SPF redirect= must not trigger SPF_MISSING_ALL
When an SPF record contains `redirect=<domain>` and no `all` mechanism, this is valid
per RFC 7208 — the redirect replaces `all`. `analyzeSPF` must not push `SPF_MISSING_ALL`
when `redirectDomain` is set. `checkSPF` follows the redirect and uses the target's
analysis as the effective policy.

### 7. MTA-STS policy mx: lines must be collected as an array
The policy parser previously used last-wins for duplicate keys, silently dropping all
but the last `mx:` line. RFC 8461 allows multiple `mx:` lines. The parser now pushes
`mx:` values into an array: `policy.mx = [...(policy.mx || []), val]`. All other keys
remain scalar.

### 8. Domeneshop `dsYYYYMM` selectors must be generated, not hardcoded
The list was originally a checked-in range (`ds202410` … `ds202606`). Domeneshop rotates keys
monthly, so a hardcoded window silently stops covering current selectors — by August 2026 the
committed range had been stale for two months and the checker would have missed every key issued
after June. `dsRotationSelectors()` derives the window from `new Date()` instead. Do not replace it
with a literal list.

## Security
- All DNS/external data goes through `escapeHtml()` or `textContent` before any DOM insertion.
- Issue text set via `textContent` (not innerHTML) — `escapeHtml()` not needed on issue strings.
- Explanation sections built with `safeMarkup()` — whitelist parser, no innerHTML.
- `clearNode(n)` used for all DOM clearing — no `innerHTML = ''` anywhere in JS.
- `el()` and `appendChild` used for all DOM construction.
- Links constructed with `document.createElement('a')` + `textContent` + validated `href`
  (only `https?:` and `mailto:` schemes for iodef; `https://` prefix for CA domains). Never `innerHTML`.
- BIMI logo/authority URLs validated with `/^https?:\/\//` before being used as `href`.

## Ratings
`['excellent', 'good', 'warning', 'fail']` — `worstRating(a, b)` takes the higher-index.
`ratingScore()`: excellent=100, good=75, warning=40, fail=0.

## Testing notes
- `gmail.com` — SPF `~all`, DMARC p=none. Note: it publishes **no** discoverable DKIM selector —
  its `20230601`-style selectors are all revoked (`p=` empty), so 0 found is the correct result here
- `cloudflare.com` — DNSSEC alg 13 (ECDSAP256SHA256); good CAA + RPKI coverage; DMARC p=reject.
  Also the best DKIM test domain: finds `k1`, `mandrill`, `s1`, `smtpapi`, `m1`, `m2`, `krs`
  across five providers, exercising the provider-attribution path
- `dmarcadvisor.com` — SPF redirect= only (no mechanisms, no all); tests redirect following
- `apple.com` — has BIMI record; tests BIMI tab
- `fastmail.com` — MTA-STS enforce mode with multiple mx: lines; tests MX match check
- DMARC: `p=reject` → excellent, `p=quarantine` → good, `p=none` → warning, no record → fail
- DMARCbis tree walk: `mail.cloudflare.com` (no own record → inherits via `sp=`), `zzz-no-such-host.thorsheim.net`
  (NXDOMAIN → `np=`/`sp=` selection path), `a.b.c.d.e.f.g.h.i.j.mail.example.com` (reproduces the eight-query
  example in RFC 9989 §4.10 exactly: author domain, then `g.h.i.j.mail.example.com` down to `com`)
- DMARCbis tag conformance: `gov.uk` (`np=reject` + `sp=none`, and `fo=1` published without `ruf=`),
  `cloudflare.com` (`pct=100` flagged historic), `mimecast.com` (`pct=100` + three external report destinations)
- DMARCbis external auth: `thorsheim.net` (rua + ruf both at dmarcmanager.app), `gmail.com` (wildcard
  authorization at google.com). A destination with no `_report._dmarc` record must rate `fail`, not warning.
- DMARCbis must never move the grade: the DMARC tab dot, score bars and overall grade for any test domain
  must be identical with and without the section
- Null MX: domain with `MX 0 .` should show green confirmation; domain with no MX and missing SPF `-all` or DMARC `p=reject` should show `MX_NULL_SUGGEST` warning
- PTR: Google/Cloudflare MX hosts should show FCrDNS confirmed; check IPv6 PTR reversal correctness
- RPKI: any domain with Google/Cloudflare NS or MX will show valid ROAs; ASPA coverage varies by ASN
- Language switch: run a check, then toggle EN↔NO — all panel content, badges, explanations, and issue text should update immediately without re-querying DNS
- Recommendations tab: `cloudflare.com` → scored checks not at excellent appear under "What to fix" with weight badges; passing checks in collapsed "All checks passing" details block; clicking a check name jumps to that tab
