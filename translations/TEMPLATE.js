// ============================================================
// TRANSLATION TEMPLATE for DNS Email Security Checker
// ============================================================
//
// HOW TO USE THIS FILE
//   1. Copy this file and name it with your language code, e.g. fr.js
//   2. Replace every empty string '' with your translation.
//   3. For the "d" (dynamic) keys, keep the arrow function structure —
//      only translate the text inside it.  Example:
//        BEFORE:  MX_HOSTS_FOUND: n => '',
//        AFTER:   MX_HOSTS_FOUND: n => n + ' hôtes MX trouvés.',
//   4. For the "x" (explanation) keys, write HTML using only these tags:
//        <b>bold</b>  <a href="…">link</a>  <code>monospace</code>  <br>
//   5. Open index.html and:
//        a. Add your completed object to the STRINGS block (see below).
//        b. Add <option value="fr">Français</option> to #lang-select.
//   6. Open a pull request — see CONTRIBUTING.md for the full workflow.
//
// ADDING TO index.html
//   In the TRANSLATIONS <script> block, after the closing brace of the
//   last language entry, add:
//
//     ,
//     fr: {
//       s: { … paste your s keys here … },
//       d: { … paste your d keys here … },
//       x: { … paste your x keys here … },
//     }
//
// MISSING KEYS
//   Any key you leave out will automatically fall back to English.
//   You do not need to translate every key to submit a useful PR.
// ============================================================

const LANG_TEMPLATE = {

  // ── s: static strings ──────────────────────────────────────────────────────
  // Plain key → string.  No HTML.  No function syntax.
  s: {

    // Page / app chrome
    APP_TITLE:              '',  // Browser tab title, e.g. "DNS Email Security Checker"
    APP_SUBTITLE:           '',  // Subtitle below the title
    LABEL_DOMAIN:           '',  // Input label: "Domain"
    LABEL_SELECTORS:        '',  // Input label for extra DKIM selectors
    BTN_CHECK:              '',  // "Check" button label
    BTN_CHECKING:           '',  // "Checking…" while running
    BTN_COPY_LINK:          '',  // Copy-shareable-link button: "🔗 Copy link"
    BTN_COPIED:             '',  // Confirmation after copying: "✓ Copied!"
    LANG_LABEL:             '',  // "Language" label next to the language picker
    OVERVIEW_PLACEHOLDER:   '',  // Placeholder shown before first check is run
    RUNNING_CHECKS:         '',  // "Running checks…" message
    CHECKING:               '',  // Short "Checking…" status

    // Tab / panel names
    PANEL_DNSSEC:           '',
    PANEL_MX:               '',
    PANEL_PTR:              '',
    PANEL_DANE:             '',
    PANEL_SPF:              '',
    PANEL_DKIM:             '',
    PANEL_DMARC:            '',
    PANEL_BIMI:             '',
    PANEL_TLSRPT:           '',
    PANEL_MTASTS:           '',
    PANEL_CAA:              '',
    PANEL_RPKI:             '',
    PANEL_ASPA:             '',
    PANEL_STXT:             '',  // "Security.txt"
    PANEL_WHOIS:            '',
    PANEL_RECS:             '',  // "Fixes" — the recommendations tab

    // Fixes / Recommendations tab
    RECS_WHAT_TO_FIX:       '',  // Section heading "What to fix"
    RECS_INFORMATIONAL:     '',  // Section heading "Informational"
    RECS_ALL_GOOD:          '',  // "All checks passing"
    RECS_ALL_EXCELLENT:     '',  // "Everything is configured optimally."

    // Summary / grade
    GRADE_TITLE:            '',  // "Overall Grade"
    GRADE_A_DESC:           '',  // Description for grade A
    GRADE_B_DESC:           '',  // Description for grade B
    GRADE_C_DESC:           '',  // Description for grade C
    GRADE_F_DESC:           '',  // Description for grade F

    // Rating badge labels
    RATING_EXCELLENT:       '',
    RATING_GOOD:            '',
    RATING_WARNING:         '',
    RATING_FAIL:            '',

    // Generic errors
    ERR_INVALID_DOMAIN:     '',  // "does not look like a valid domain."
    ERR_CHECK_FAILED:       '',  // "Check failed"
    ERR_PREFIX:             '',  // "Error: " prefix for error messages

    // Settings / theme
    THEME_LIGHT:            '',  // e.g. "☀ Light"
    THEME_DARK:             '',  // e.g. "☽ Dark"
    THEME_TO_DARK:          '',  // Tooltip: "Switch to dark theme"
    THEME_TO_LIGHT:         '',  // Tooltip: "Switch to light theme"
    SETTINGS_THEME:         '',  // "Theme"
    SETTINGS_SCORING:       '',  // "Scoring System"
    SCORING_TITLE:          '',  // "How Scoring Works"
    SCORING_CLOSE:          '',  // "Close"
    SCORING_SCORED:         '',  // "Scored checks"
    SCORING_INFO:           '',  // "Informational (not scored)"
    SCORING_RATINGS:        '',  // "Rating points"
    SCORING_GRADES:         '',  // "Grade thresholds"

    // Skip options (checkboxes on the input page)
    OPT_SKIP_CORS:          '',  // Checkbox label: "Skip MTA-STS and Security.txt checks to avoid CORS issues"
    CHECK_SKIPPED:          '',  // Shown in panel body when a check was skipped: "This check was skipped."
    RATING_SKIP:            '',  // Badge label: "Skipped"

    // DNSSEC
    DNSSEC_VALIDATED:       '',  // "✓ DNSSEC validated (AD=true)"
    DNSSEC_UNVALIDATED:     '',  // "⚠ Signed but not validated by resolver (AD=false)"
    DNSSEC_RESOLVER_ONLY:   '',  // Validated by resolver but key records unavailable
    DNSSEC_NOT_SIGNED:      '',  // "No DNSKEY records found — domain is not DNSSEC-signed."
    DNSSEC_ALG_DETAILS:     '',  // "Algorithm details" (expandable section label)

    // MX
    MX_HOST_DETAILS:        '',  // "MX host details" (expandable section label)
    MX_NO_DNSSEC:           '',  // "No DNSSEC"
    MX_SIGNED_UNVAL:        '',  // "⚠ Signed, unvalidated"
    MX_RRSET_WARN:          '',  // Warning when MX RRset is not DNSSEC-validated
    MX_NULL_SUGGEST:        '',  // Warning suggesting null MX + SPF -all + DMARC p=reject

    // DANE
    DANE_NO_TLSA:           '',  // "No TLSA record"
    DANE_TLSA_UNVAL:        '',  // "⚠ TLSA found, not DNSSEC-validated"
    DANE_NO_VALIDATED:      '',  // "No DNSSEC-validated TLSA records found."
    DANE_TLSA_PER_MX:       '',  // "TLSA records per MX host"

    // SPF
    SPF_RECORD_ANALYSIS:    '',  // "Record & analysis"
    SPF_RECORD:             '',  // "Record"
    SPF_MECHANISMS:         '',  // "SPF mechanisms"
    SPF_IP_ADDRESSES:       '',  // "IP addresses"
    SPF_IP_PREFIXES:        '',  // "IP prefixes"
    SPF_DNS_NAMES:          '',  // "DNS names"
    SPF_IMPLICIT:           '',  // "(implicit)"
    SPF_ORIGINAL_RECORD:    '',  // "Original SPF record"
    SPF_PTR_DEPRECATED:     '',  // "ptr mechanism is deprecated"
    SPF_MISSING_ALL:        '',  // 'Missing "all" mechanism — policy is incomplete'
    SPF_ALL_HARDFAIL:       '',  // '"-all" (hard fail) — unauthorized senders are rejected'
    SPF_ALL_SOFTFAIL:       '',  // '"~all" (soft fail) — unauthorized senders are marked but may be delivered'
    SPF_ALL_NEUTRAL:        '',  // '"?all" (neutral) — provides no protection'
    SPF_NO_RECORD:          '',  // "No SPF record found"

    // DKIM
    DKIM_FOUND_SECTION:     '',  // "Found Selectors"
    DKIM_DNS_KEY_DETAILS:   '',  // "DNS name & key details"
    DKIM_PROVIDER_REF:      '',  // "Provider Reference"
    DKIM_TH_PROVIDER:       '',  // Table header "Provider"
    DKIM_TH_SELECTORS:      '',  // Table header "Default Selectors"
    DKIM_TH_INFRA:          '',  // Table header "Infrastructure"
    DKIM_AUTO_TESTED_LABEL: '',  // "selectors automatically tested"
    DKIM_REVOKED:           '',  // "Key revoked (empty p= tag)"
    DKIM_KEY_TYPE:          '',  // "Key type"
    DKIM_KEY_SIZE:          '',  // "Key size"
    DKIM_BITS:              '',  // "bits"
    DKIM_BITS_EQ:           '',  // " (256-bit equivalent)"
    DKIM_KEY_RATING:        '',  // "Rating"
    DKIM_HASH_ALGS:         '',  // "Hash algorithms"
    DKIM_SERVICE_TYPE:      '',  // "Service type"
    DKIM_NOTES_FIELD:       '',  // "Notes"
    DKIM_DNSSEC:            '',  // "DNSSEC"
    DKIM_DNSSEC_OK:         '',  // "✓ validated"
    DKIM_DNSSEC_FAIL:       '',  // "✗ not validated"
    DKIM_NONE_FOUND_NOTE:   '',  // Bold note: DKIM may exist with a non-standard selector

    // TLS-RPT
    TLSRPT_FOUND:           '',  // "TLS-RPT record found."
    TLSRPT_NOT_FOUND:       '',  // "No TLS-RPT record."
    TLSRPT_RECORD_ANALYSIS: '',  // "Record & analysis"
    TLSRPT_NO_RECORD_NXDOMAIN: '', // No TLS-RPT record — reports won't be received
    TLSRPT_NO_RECORD:       '',
    TLSRPT_MULTI_RECORDS:   '',
    TLSRPT_NO_RUA:          '',  // "No rua= reporting URI"

    // MTA-STS
    MTASTS_FOUND:           '',  // "MTA-STS DNS record found."
    MTASTS_NOT_FOUND:       '',  // "No MTA-STS DNS record."
    MTASTS_POLICY_ANALYSIS: '',  // "Policy & analysis"
    MTASTS_RECORD_NOTES:    '',  // "Record & notes"
    MTASTS_NO_RECORD_NXDOMAIN: '',
    MTASTS_NO_RECORD:       '',
    MTASTS_MULTI_RECORDS:   '',
    MTASTS_NO_ID:           '',
    MTASTS_MODE_ENFORCE:    '',  // "Policy mode: enforce — TLS required, non-TLS deliveries rejected"
    MTASTS_MODE_TESTING:    '',  // "Policy mode: testing — monitoring TLS failures but not enforcing"
    MTASTS_MODE_NONE:       '',  // "Policy mode: none — MTA-STS is explicitly disabled"
    MTASTS_MX_MATCH:        '',  // All MX hosts matched by policy patterns
    MTASTS_MX_MISMATCH:     '',  // One or more MX hosts not covered
    MTASTS_MX_NO_PATTERNS:  '',  // Policy has no mx: lines

    // CAA
    CAA_NO_RECORDS:         '',  // "No CAA records."
    CAA_RECORDS_ANALYSIS:   '',  // "Records & analysis"
    CAA_CA_DNSSEC:          '',  // "CA Domain DNSSEC"
    CAA_DNSSEC_VALIDATED:   '',
    CAA_DNSSEC_SIGNED:      '',
    CAA_DNSSEC_NONE:        '',
    CAA_DNSSEC_ERROR:       '',
    CAA_NO_RECORDS_ISSUE:   '',
    CAA_ISSUE_PROHIBITED:   '',
    CAA_NO_IODEF:           '',

    // RPKI
    RPKI_HOST_DETAILS:      '',  // "Host Details"
    RPKI_NO_IPS:            '',  // "No IPs resolved"
    RPKI_ASPA_TITLE:        '',  // "ASPA (AS Provider Authorization)"
    RPKI_ASPA_PROVIDERS:    '',  // "Providers:"

    // ASPA
    ASPA_NO_DATA:           '',  // "No ASPA data available"

    // Security.txt
    STXT_FOUND:             '',  // "✓ security.txt found"
    STXT_RAW:               '',  // "Raw security.txt"
    STXT_NOT_FOUND:         '',  // "Not found."
    STXT_CORS_BLOCKED:      '',  // CORS-blocked message (followed by CORS_SECURITY_NOTE)
    STXT_CHECK_MANUALLY:    '',  // "URLs checked:"
    CORS_SECURITY_NOTE:     '',  // Bold note about CORS meaning better-than-normal security
    STXT_NO_CONTACT:        '',
    STXT_NO_EXPIRES:        '',
    STXT_BAD_DATE:          '',
    STXT_ENCRYPTION:        '',
    STXT_POLICY:            '',

    // WHOIS
    WHOIS_RDAP_OK:          '',  // "✓ RDAP data retrieved"
    WHOIS_ROW_REGISTRAR:    '',  // "Registrar"
    WHOIS_ROW_CREATED:      '',  // "Created"
    WHOIS_ROW_UPDATED:      '',  // "Updated"
    WHOIS_ROW_EXPIRES:      '',  // "Expires"
    WHOIS_ROW_HANDLE:       '',  // "Handle"
    WHOIS_ROW_STATUS:       '',  // "Status"
    WHOIS_NS_TITLE:         '',  // "Name Servers"
    WHOIS_EXPIRED:          '',  // "⚠ Domain registration has expired!"
    WHOIS_FAILED:           '',  // "RDAP lookup failed."

    // DMARC
    DMARC_FOUND:            '',  // "DMARC record found."
    DMARC_NOT_FOUND:        '',  // "No DMARC record."
    DMARC_RECORD_ANALYSIS:  '',  // "Record & analysis"
    DMARC_POLICY_NONE:      '',  // "p=none — monitoring only, no enforcement"
    DMARC_POLICY_QUARANTINE:'',  // "p=quarantine — suspicious messages sent to spam"
    DMARC_POLICY_REJECT:    '',  // "p=reject — unauthorized messages rejected"
    DMARC_SP_REJECT:        '',
    DMARC_SP_QUARANTINE:    '',
    DMARC_SP_NONE:          '',
    DMARC_ADKIM_STRICT:     '',
    DMARC_ASPF_STRICT:      '',
    DMARC_NO_RUA:           '',
    DMARC_NO_RECORD_NXDOMAIN: '',
    DMARC_NO_RECORD:        '',
    DMARC_MULTI_RECORDS:    '',

    // BIMI
    BIMI_FOUND:             '',  // "BIMI record found."
    BIMI_NOT_FOUND:         '',  // "No BIMI record."
    BIMI_RECORD_ANALYSIS:   '',  // "Record & analysis"
    BIMI_NO_RECORD:         '',
    BIMI_NO_LOGO:           '',
    BIMI_NO_AUTHORITY:      '',
    BIMI_LOGO_OK:           '',
    BIMI_AUTHORITY_OK:      '',

    // PTR
    PTR_HOST_DETAILS:       '',  // "Host details"
    PTR_NO_MX:              '',  // "No MX hosts to check PTR records for"
    PTR_MATCH:              '',  // "FCrDNS confirmed — PTR matches MX hostname"
    PTR_MISMATCH:           '',  // "PTR present but does not match MX hostname"
    PTR_MISSING:            '',  // "No PTR record found"
  },

  // ── d: dynamic strings (arrow functions) ───────────────────────────────────
  // Each value is an arrow function.  Keep the function structure and argument
  // names exactly as shown.  Translate only the text string returned.
  //
  // Example — English:  MX_HOSTS_FOUND: n => n + ' MX hosts found.',
  // Example — French:   MX_HOSTS_FOUND: n => n + ' hôtes MX trouvés.',
  d: {
    MX_HOSTS_FOUND:           n => '',   // "3 MX hosts found."
    DKIM_SELECTORS_FOUND:     n => '',   // "2 selectors found"
    DKIM_ACROSS_PROVIDERS:    n => '',   // "across 1 provider"
    DKIM_SELECTORS_TESTED:    n => '',   // "48 selectors tested."
    DKIM_NONE_FOUND:          n => '',   // "No DKIM selectors found. 48 selectors were tested."
    DKIM_AUTO_TESTED:         n => '',   // "48 selectors automatically tested"
    SPF_FOUND_LOOKUPS:        n => '',   // "SPF record found. 3 DNS lookup mechanisms."
    SPF_MULTI_RECORDS:        n => '',   // "Multiple SPF records found (2) — requires exactly one"
    SPF_MULTI_MESSAGE:        n => '',   // "Multiple SPF records (2) — this is a configuration error."
    SPF_LOOKUP_EXCEED:        n => '',   // "11 DNS-lookup mechanisms exceed the RFC limit of 10"
    SPF_LOOKUP_HIGH:          n => '',   // "9 DNS-lookup mechanisms — approaching the RFC limit of 10"
    SPF_REDIRECT:             v => '',   // "redirect=spf.example.com present"
    SPF_IP4_BROAD:       (v, p) => '',   // "ip4:10.0.0.0 has a very broad range (/8 ≤ /16)"
    SPF_IP6_BROAD:       (v, p) => '',   // "ip6:… has a very broad range"
    SPF_REDIRECT_FOLLOWED:    d => '',   // "✓ redirect= followed — effective policy loaded from: …"
    SPF_REDIRECT_FROM:        d => '',   // "Effective policy (redirect → example.com)"
    SPF_REDIRECT_NO_RECORD:   d => '',   // "redirect= target has no SPF record: …"
    SPF_REDIRECT_MULTI:       d => '',   // "redirect= target has multiple SPF records: …"
    SPF_REDIRECT_ERROR:       d => '',   // "Failed to fetch redirect= target: …"
    CAA_RECORDS_FOUND:        n => '',   // "3 CAA records found."
    CAA_AUTHORIZED_CA:        n => '',   // "Authorized CAs: " (n is the count)
    CAA_CRITICAL_COUNT:       n => '',   // "1 record(s) with critical flag set"
    DANE_VALIDATED_OF:   (v, t) => '',   // "2 of 3 MX hosts have DNSSEC-validated TLSA records."
    TLSA_RECORDS_COUNT:       n => '',   // "2 TLSA records"
    RPKI_SUMMARY: (valid, total, inv, noRoa) => '', // "4/4 IPs covered by valid ROA"
    ASPA_SUMMARY:    (pub, total) => '',  // "2/3 ASNs with published ASPA"
    TLSRPT_ENDPOINT:        uri => '',   // "Reporting endpoint: mailto:tls@example.com"
    TLSRPT_BAD_URI:         uri => '',   // "Unknown rua= URI scheme: …"
    MTASTS_MAX_AGE_LOW:     age => '',   // "max_age=3600s is less than 1 day"
    MTASTS_POLICY_UNKNOWN: mode => '',   // "Policy mode unknown or missing: …"
    MTASTS_POLICY_ERROR: (e, url) => '', // "Policy file not accessible (CORS or network error) — verify: …"
    STXT_EXPIRES_WARN:        n => '',   // "Expires in 15 days — renew soon."
    STXT_EXPIRES_OK:     (d, n) => '',   // "Expires: 2027-01-01 (365 days)."
    STXT_EXPIRED:             d => '',   // "security.txt has expired (2024-01-01)."
    WHOIS_EXPIRES_SOON:       n => '',   // "⚠ Domain expires in 10 days — renew soon."
    DOMAIN_INVALID:           d => '',   // '"foo" does not look like a valid domain.'
    SPF_ALL_PASSALL:          q => '',   // '"+all" (pass all) — allows any server to send'
    CAA_IODEF:                v => '',   // "Incident reporting (iodef): mailto:…"
    STXT_CONTACT_OK:          v => '',   // "Contact: https://…"
    DMARC_POLICY_UNKNOWN:     p => '',   // "Unknown p= value: …"
    DMARC_PCT_LOW:          pct => '',   // "pct=50 — policy enforced on only 50% of messages"
    DMARC_RUA_URI:          uri => '',   // "Aggregate reports (rua): mailto:…"
    DMARC_RUF_URI:          uri => '',   // "Forensic reports (ruf): mailto:…"
    BIMI_LOGO_URL:          url => '',   // "Logo URL: https://…"
    BIMI_AUTHORITY_URL:     url => '',   // "Authority URL: https://…"
    PTR_VALUE:                v => '',   // "PTR: mail.example.com"
  },

  // ── x: explanation strings (HTML) ──────────────────────────────────────────
  // Each value is an HTML string shown in the expandable "What is this?"
  // section at the bottom of each tab.
  // Allowed tags ONLY: <b>  <a href="…">  <code>  <br>
  // Keep all <a href="…"> links as-is (they point to RFCs).
  x: {
    DMARC:   '',
    DNSSEC:  '',
    MX:      '',
    PTR:     '',
    DANE:    '',
    SPF:     '',
    DKIM:    '',
    TLSRPT:  '',
    MTASTS:  '',
    CAA:     '',
    RPKI:    '',
    ASPA:    '',
    STXT:    '',  // Security.txt explanation
    WHOIS:   '',
    BIMI:    '',
  },
};
