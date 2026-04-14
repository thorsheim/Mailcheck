// Esperanto (eo) translation for DNS Email Security Checker
// Translated by Claude Sonnet 4.6

const LANG_EO = {

  // ── s: static strings ──────────────────────────────────────────────────────
  s: {
    APP_TITLE:           'DNS Retpoŝta Sekureca Kontrolilo',
    APP_SUBTITLE:        'Kontroli DNSSEC, MX, SPF, DKIM kaj pli por iu ajn domajno',
    LABEL_DOMAIN:        'Domajno',
    LABEL_SELECTORS:     'Ekstra DKIM-elektiloj (komoseparitaj)',
    BTN_CHECK:           'Kontroli',
    BTN_CHECKING:        'Kontrolante\u2026',
    BTN_COPY_LINK:       '\uD83D\uDD17 Kopii ligilon',
    BTN_COPIED:          '\u2713 Kopiita!',
    LANG_LABEL:          'Lingvo',
    OVERVIEW_PLACEHOLDER:'Tajpu domajnonomon kiel google.com a\u016d microsoft.com, kaj alklaku Kontroli. Bonvolu kompreni ke la rezultoj eble ne estas \u011dustaj pro limigoj en via retumilo a\u016d en la reto el kiu vi testas. Poentoj estas nur indikaj; ili ne nepre montras la tutan veron a\u016d konformecon kun rilataj normoj.',
    RUNNING_CHECKS:      'Plenumas kontrolojn\u2026',
    CHECKING:            'Kontrolante\u2026',

    PANEL_DNSSEC:        'DNSSEC',
    PANEL_MX:            'MX-registroj',
    PANEL_PTR:           'PTR / FCrDNS',
    PANEL_DANE:          'DANE / TLSA',
    PANEL_SPF:           'SPF',
    PANEL_DKIM:          'DKIM',
    PANEL_DMARC:         'DMARC',
    PANEL_BIMI:          'BIMI',
    PANEL_TLSRPT:        'TLS-RPT',
    PANEL_MTASTS:        'MTA-STS',
    PANEL_CAA:           'CAA',
    PANEL_RPKI:          'RPKI ROA',
    PANEL_ASPA:          'ASPA',
    PANEL_STXT:          'Security.txt',
    PANEL_WHOIS:         'WHOIS / RDAP',
    PANEL_RECS:          'Riparoj',

    RECS_WHAT_TO_FIX:    'Kion ripari',
    RECS_INFORMATIONAL:  'Informaj',
    RECS_ALL_GOOD:       '\u0108iuj kontroloj sukcesas',
    RECS_ALL_EXCELLENT:  '\u0108io estas agordita optimume.',

    GRADE_TITLE:         '\u011cenerala Grado',
    GRADE_A_DESC:        'Forta retpo\u015dta sekureca agordo.',
    GRADE_B_DESC:        'Bona agordo kun malgravaj problemoj.',
    GRADE_C_DESC:        'Moderaj problemoj \u2014 revizu avertojn.',
    GRADE_F_DESC:        'Kritikaj problemoj \u2014 tuja ago rekomendatas.',

    RATING_EXCELLENT:    'Bonega',
    RATING_GOOD:         'Bona',
    RATING_WARNING:      'Averto',
    RATING_FAIL:         'Fiasko',
    RATING_SKIP:         'Preterpasita',

    ERR_INVALID_DOMAIN:  'ne \u015dajnas esti valida domajno.',
    ERR_CHECK_FAILED:    'Kontrolo malsukcesis',
    ERR_PREFIX:          'Eraro: ',

    THEME_LIGHT:         '\u2600 Hela',
    THEME_DARK:          '\u263D Malhela',
    THEME_TO_DARK:       '\u015can\u011di al malhela temo',
    THEME_TO_LIGHT:      '\u015can\u011di al hela temo',
    SETTINGS_THEME:      'Temo',
    SETTINGS_SCORING:    'Poentad-sistemo',
    SCORING_TITLE:       'Kiel Poentado Funkcias',
    SCORING_CLOSE:       'Fermi',
    SCORING_SCORED:      'Poentitaj kontroloj',
    SCORING_INFO:        'Informaj (ne poentitaj)',
    SCORING_RATINGS:     'Poentoj la\u016d taksado',
    SCORING_GRADES:      'Grado-sojloj',

    OPT_SKIP_CORS:       'Preterpasi por eviti CORS-problemojn:',
    CHECK_SKIPPED:       '\u0108i tiu kontrolo estis preterpasita.',

    DNSSEC_VALIDATED:    '\u2713 DNSSEC konfirmita (AD=vera)',
    DNSSEC_UNVALIDATED:  '\u26a0 Subskribita sed ne konfirmita de solvilisto (AD=malvera)',
    DNSSEC_RESOLVER_ONLY:'DNSSEC konfirmita de solvilisto, sed \u015dlosilregistroj ne povis esti elŝutitaj.',
    DNSSEC_NOT_SIGNED:   'Neniuj DNSKEY-registroj trovitaj \u2014 domajno ne estas DNSSEC-subskribita.',
    DNSSEC_ALG_DETAILS:  'Algoritmaj detaloj',

    MX_HOST_DETAILS:     'MX-gastiga detaloj',
    MX_NO_DNSSEC:        'Neniu DNSSEC',
    MX_SIGNED_UNVAL:     '\u26a0 Subskribita, ne konfirmita',
    MX_RRSET_WARN:       '\u26a0 MX RRset ne DNSSEC-konfirmita \u2014 la listo de retpo\u015dt-serviloj ne povis esti kriptografe kontrolita.',
    MX_NULL_SUGGEST:     'Neniuj MX-registroj \u2014 konsideru publikigi nulan MX-registron (RFC 7505) kune kun SPF \u201c-all\u201d kaj DMARC p=reject por plene bloki retpo\u015dtan misuzon',

    DANE_NO_TLSA:        'Neniu TLSA-registro',
    DANE_TLSA_UNVAL:     '\u26a0 TLSA trovita, ne DNSSEC-konfirmita',
    DANE_NO_VALIDATED:   'Neniuj DNSSEC-konfirmitaj TLSA-registroj trovitaj.',
    DANE_TLSA_PER_MX:    'TLSA-registroj la\u016d MX-gastigo',

    SPF_RECORD_ANALYSIS: 'Registro & analizo',
    SPF_RECORD:          'Registro',
    SPF_MECHANISMS:      'SPF-mekanismoj',
    SPF_IP_ADDRESSES:    'IP-adresoj',
    SPF_IP_PREFIXES:     'IP-prefiksoj',
    SPF_DNS_NAMES:       'DNS-nomoj',
    SPF_IMPLICIT:        '(implica)',
    SPF_ORIGINAL_RECORD: 'Originala SPF-registro',
    SPF_PTR_DEPRECATED:  'ptr-mekanismo estas malrekomendita',
    SPF_MISSING_ALL:     'Mankas \u201call\u201d-mekanismo \u2014 politiko estas nekompleta',
    SPF_ALL_HARDFAIL:    '"-all" (malmola fiasko) \u2014 nea\u016dtorizitaj sendintoj estas rifuzitaj',
    SPF_ALL_SOFTFAIL:    '"~all" (mola fiasko) \u2014 nea\u016dtorizitaj sendintoj estas markitaj sed povas esti liveritaj',
    SPF_ALL_NEUTRAL:     '"?all" (ne\u016dtrala) \u2014 ne provizas protekton',
    SPF_NO_RECORD:       'Neniu SPF-registro trovita',

    DKIM_FOUND_SECTION:  'Trovitaj elektiloj',
    DKIM_DNS_KEY_DETAILS:'DNS-nomo & \u015dlosil-detaloj',
    DKIM_PROVIDER_REF:   'Provizanto-referenco',
    DKIM_TH_PROVIDER:    'Provizanto',
    DKIM_TH_SELECTORS:   'Defa\u016dltaj elektiloj',
    DKIM_TH_INFRA:       'Infrastrukturo',
    DKIM_AUTO_TESTED_LABEL: 'elektiloj a\u016dtomate testitaj',
    DKIM_REVOKED:        '\u015closilo revokita (malplena p=-etikedo)',
    DKIM_KEY_TYPE:       '\u015closila tipo',
    DKIM_KEY_SIZE:       '\u015closila grandeco',
    DKIM_BITS:           'bitoj',
    DKIM_BITS_EQ:        ' (256-bita ekvivalento)',
    DKIM_KEY_RATING:     'Taksado',
    DKIM_HASH_ALGS:      'Ha\u015d-algoritmoj',
    DKIM_SERVICE_TYPE:   'Servo-tipo',
    DKIM_NOTES_FIELD:    'Notoj',
    DKIM_DNSSEC:         'DNSSEC',
    DKIM_DNSSEC_OK:      '\u2713 konfirmita',
    DKIM_DNSSEC_FAIL:    '\u2717 ne konfirmita',
    DKIM_NONE_FOUND_NOTE:'\u0108i tio ne signifas ke DKIM ne estas agordita \u2014 \u011di nur signifas ke neniu el la norma elektilo-nomoj ofte uzataj estis trovita.',

    TLSRPT_FOUND:        'TLS-RPT registro trovita.',
    TLSRPT_NOT_FOUND:    'Neniu TLS-RPT registro.',
    TLSRPT_RECORD_ANALYSIS: 'Registro & analizo',
    TLSRPT_NO_RECORD_NXDOMAIN: 'Neniu TLS-RPT registro \u2014 SMTP TLS-fiasko-raportoj ne estos ricevitaj',
    TLSRPT_NO_RECORD:    'Neniu TLS-RPT registro trovita',
    TLSRPT_MULTI_RECORDS:'Multoblaj TLS-RPT registroj trovitaj \u2014 devas esti ekzakte unu',
    TLSRPT_NO_RUA:       'Neniu rua=-raportadresa URI \u2014 raportoj ne povas esti liveritaj',

    MTASTS_FOUND:        'MTA-STS DNS-registro trovita.',
    MTASTS_NOT_FOUND:    'Neniu MTA-STS DNS-registro.',
    MTASTS_POLICY_ANALYSIS: 'Politiko & analizo',
    MTASTS_RECORD_NOTES: 'Registro & notoj',
    MTASTS_NO_RECORD_NXDOMAIN: 'Neniu MTA-STS DNS-registro \u2014 envenanta TLS-livero ne estas devigata',
    MTASTS_NO_RECORD:    'Neniu MTA-STS DNS-registro trovita',
    MTASTS_MULTI_RECORDS:'Multoblaj MTA-STS DNS-registroj trovitaj \u2014 devas esti ekzakte unu',
    MTASTS_NO_ID:        'MTA-STS registro mankas postulan id=-kampon',
    MTASTS_MODE_ENFORCE: 'Politika re\u011dimo: devigi \u2014 TLS postulata, ne-TLS-livera\u0135oj rifuzitaj',
    MTASTS_MODE_TESTING: 'Politika re\u011dimo: testi \u2014 monitorado de TLS-fiaskoj sen devigo',
    MTASTS_MODE_NONE:    'Politika re\u011dimo: neniu \u2014 MTA-STS estas eksplicite mal\u015daltita',
    MTASTS_MX_MATCH:     '\u0108iuj MX-gastigoj kongruas kun MTA-STS-politikaj mx:-\u015dablonoj',
    MTASTS_MX_MISMATCH:  'Unu a\u016d pli da MX-gastigoj ne estas kovrataj de iu ajn politika mx:-\u015dablono',
    MTASTS_MX_NO_PATTERNS: 'MTA-STS-politiko ne havas mx:-liniojn',

    CAA_NO_RECORDS:      'Neniuj CAA-registroj.',
    CAA_RECORDS_ANALYSIS:'Registroj & analizo',
    CAA_CA_DNSSEC:       'CA-domajno DNSSEC',
    CAA_DNSSEC_VALIDATED:'DNSSEC konfirmita',
    CAA_DNSSEC_SIGNED:   'subskribita sed ne konfirmita de solvilisto',
    CAA_DNSSEC_NONE:     'ne DNSSEC-subskribita',
    CAA_DNSSEC_ERROR:    'eraro: ',
    CAA_NO_RECORDS_ISSUE:'Neniuj CAA-registroj \u2014 iu ajn atestila a\u016dtoritato povas eldoni atestilojn por \u0109i tiu domajno',
    CAA_ISSUE_PROHIBITED:'Atestila eldono malpermesita por \u0109iuj CA-oj (issue ";")',
    CAA_NO_IODEF:        'Neniu iodef=-etikedo \u2014 CA-politikaj malobservoj ne estos raportitaj',

    RPKI_HOST_DETAILS:   'Gastigaj Detaloj',
    RPKI_NO_IPS:         'Neniuj IP-oj solvitaj',
    RPKI_ASPA_TITLE:     'ASPA (AS-Provizanto A\u016dtorizito)',
    RPKI_ASPA_PROVIDERS: 'Provizantoj:',

    ASPA_NO_DATA:        'Neniuj ASPA-datumoj disponeblaj',

    STXT_FOUND:          '\u2713 security.txt trovita',
    STXT_RAW:            'Krudaj security.txt',
    STXT_NOT_FOUND:      'Ne trovita.',
    STXT_CORS_BLOCKED:   'Ne povis el\u015duti security.txt \u2014 servilo ne permesas interdomajnajn petojn (CORS). La dosiero eble ekzistas; kontrolu mane:',
    STXT_CHECK_MANUALLY: 'Kontrolitaj URL-oj:',
    CORS_SECURITY_NOTE:  '\u0108i tio estas bona \u2014 la servilo havas pli ol normalan sekurecon! Tamen, pro \u0109i tiu fakto, \u0109i tiu kontrolo ne povas plenumi a\u016dtomate.',
    STXT_NO_CONTACT:     'Mankas postulata Kontakta kampo.',
    STXT_NO_EXPIRES:     'Mankas Eksvalidi\u011d-kampo \u2014 postulata de',
    STXT_BAD_DATE:       'Eksvalidi\u011d-kampo havas nevalidan datformaton.',
    STXT_ENCRYPTION:     '\u0108ifrada \u015dlosilo ligita.',
    STXT_POLICY:         'Vundeblec-malka\u015da politiko ligita.',

    WHOIS_RDAP_OK:       '\u2713 RDAP-datumoj el\u015dutitaj',
    WHOIS_ROW_REGISTRAR: 'Registrinto',
    WHOIS_ROW_CREATED:   'Kreita',
    WHOIS_ROW_UPDATED:   '\u011cisdatigita',
    WHOIS_ROW_EXPIRES:   'Eksvalidi\u011das',
    WHOIS_ROW_HANDLE:    'Identigilo',
    WHOIS_ROW_STATUS:    'Stato',
    WHOIS_NS_TITLE:      'Nomserviloj',
    WHOIS_EXPIRED:       '\u26a0 Domajna registrado eksvalidi\u011dis!',
    WHOIS_FAILED:        'RDAP-ser\u0109o malsukcesis.',

    DMARC_FOUND:         'DMARC-registro trovita.',
    DMARC_NOT_FOUND:     'Neniu DMARC-registro.',
    DMARC_RECORD_ANALYSIS: 'Registro & analizo',
    DMARC_POLICY_NONE:   'p=none \u2014 nur monitorado, neniu devigo',
    DMARC_POLICY_QUARANTINE: 'p=quarantine \u2014 suspektindaj mesa\u011doj senditaj al spamo',
    DMARC_POLICY_REJECT: 'p=reject \u2014 nea\u016dtorizitaj mesa\u011doj rifuzitaj',
    DMARC_SP_REJECT:     'sp=reject \u2014 subdomajnoj: nea\u016dtorizitaj mesa\u011doj rifuzitaj',
    DMARC_SP_QUARANTINE: 'sp=quarantine \u2014 subdomajnoj: suspektindaj mesa\u011doj senditaj al spamo',
    DMARC_SP_NONE:       'sp=none \u2014 subdomajnoj: neniu devigo',
    DMARC_ADKIM_STRICT:  'adkim=s \u2014 DKIM-identiga vicigo: strikta',
    DMARC_ASPF_STRICT:   'aspf=s \u2014 SPF-identiga vicigo: strikta',
    DMARC_NO_RUA:        'Neniu rua= \u2014 kolektitaj DMARC-raportoj ne estos ricevitaj',
    DMARC_NO_RECORD_NXDOMAIN: 'Neniu DMARC-registro \u2014 nea\u016dtorizitaj sendintoj ne povas esti rifuzitaj',
    DMARC_NO_RECORD:     'Neniu DMARC-registro trovita',
    DMARC_MULTI_RECORDS: 'Multoblaj DMARC-registroj \u2014 devas esti ekzakte unu',

    BIMI_FOUND:          'BIMI-registro trovita.',
    BIMI_NOT_FOUND:      'Neniu BIMI-registro.',
    BIMI_RECORD_ANALYSIS:'Registro & analizo',
    BIMI_NO_RECORD:      'Neniu BIMI-registro \u2014 marka logoo ne montrita en subtenantaj retpo\u015dt-programoj',
    BIMI_NO_LOGO:        'l= (logo-URL) mankas a\u016d malplena \u2014 postulata por ke BIMI funkcii',
    BIMI_NO_AUTHORITY:   'a= (a\u016dtoritata atesto) forestanta \u2014 VMC-atestilo postulata de Gmail kaj aliaj provizantoj por montri logoon',
    BIMI_LOGO_OK:        'Logo-URL \u0109eestas',
    BIMI_AUTHORITY_OK:   'A\u016dtoritata atesto (VMC) \u0109eestas',

    PTR_HOST_DETAILS:    'Gastigaj detaloj',
    PTR_NO_MX:           'Neniuj MX-gastigoj por kontroli PTR-registrojn',
    PTR_MATCH:           'FCrDNS konfirmita \u2014 PTR kongruas kun MX-gastig-nomo',
    PTR_MISMATCH:        'PTR \u0109eestas sed ne kongruas kun MX-gastig-nomo',
    PTR_MISSING:         'Neniu PTR-registro trovita',
  },

  // ── d: dynamic strings (arrow functions) ───────────────────────────────────
  d: {
    MX_HOSTS_FOUND:        n => n + ' MX-gastigo' + (n !== 1 ? 'j' : '') + ' trovita' + (n !== 1 ? 'j' : '') + '.',
    DKIM_SELECTORS_FOUND:  n => n + ' elektilo' + (n !== 1 ? 'j' : '') + ' trovita' + (n !== 1 ? 'j' : ''),
    DKIM_ACROSS_PROVIDERS: n => 'tra ' + n + ' provizanto' + (n !== 1 ? 'j' : ''),
    DKIM_SELECTORS_TESTED: n => n + ' elektiloj testitaj.',
    DKIM_NONE_FOUND:       n => 'Neniuj DKIM-elektiloj trovitaj. ' + n + ' elektiloj estis testitaj.',
    DKIM_AUTO_TESTED:      n => n + ' elektiloj a\u016dtomate testitaj',
    SPF_FOUND_LOOKUPS:     n => 'SPF-registro trovita. ' + n + ' DNS-ser\u0109-mekanismo' + (n !== 1 ? 'j' : '') + '.',
    SPF_MULTI_RECORDS:     n => 'Multoblaj SPF-registroj trovitaj (' + n + ') \u2014 postulas ekzakte unu',
    SPF_MULTI_MESSAGE:     n => 'Multoblaj SPF-registroj (' + n + ') \u2014 \u0109i tio estas agordo-eraro.',
    SPF_LOOKUP_EXCEED:     n => n + ' DNS-ser\u0109-mekanismoj superas la RFC-limon de 10 (povas ka\u016dzi SPF PermError)',
    SPF_LOOKUP_HIGH:       n => n + ' DNS-ser\u0109-mekanismoj \u2014 alproksimante la RFC-limon de 10',
    SPF_REDIRECT:          v => 'redirect=' + v + ' \u0109eestas \u2014 nestita politiko ne sekva en \u0109i tiu kontrolo',
    SPF_IP4_BROAD:         (v, p) => 'ip4:' + v + ' havas tre vastan gamon (/' + p + ' \u2264 /16)',
    SPF_IP6_BROAD:         (v, p) => 'ip6:' + v + ' havas tre vastan gamon (/' + p + ' \u2264 /32)',
    SPF_REDIRECT_FOLLOWED: d => '\u2713 redirect= sekva \u2014 efika politiko \u015dargita de: ' + d,
    SPF_REDIRECT_FROM:     d => 'Efika politiko (redirect \u2192 ' + d + ')',
    SPF_REDIRECT_NO_RECORD:d => 'redirect=-celo ne havas SPF-registron: ' + d,
    SPF_REDIRECT_MULTI:    d => 'redirect=-celo havas multoblajn SPF-registrojn: ' + d,
    SPF_REDIRECT_ERROR:    d => 'Malsukcesis el\u015duti redirect=-celon: ' + d,
    CAA_RECORDS_FOUND:     n => n + ' CAA-registro' + (n !== 1 ? 'j' : '') + ' trovita' + (n !== 1 ? 'j' : '') + '.',
    CAA_AUTHORIZED_CA:     n => 'A\u016dtorizita CA' + (n !== 1 ? '-oj' : '') + ': ',
    CAA_CRITICAL_COUNT:    n => n + ' registro(j) kun kritika flagsigno \u2014 CA-oj kiuj ne komprenas la etikedon devas rifuzi eldonon',
    DANE_VALIDATED_OF:     (v, t) => v + ' el ' + t + ' MX-gastigo' + (t !== 1 ? 'j' : '') + ' havas DNSSEC-konfirmitajn TLSA-registrojn.',
    TLSA_RECORDS_COUNT:    n => n + ' TLSA-registroj',
    RPKI_SUMMARY:          (valid, total, inv, noRoa) => valid + '/' + total + ' IP' + (total !== 1 ? '-oj' : '') + ' kovritaj de valida ROA' + (inv > 0 ? ' \u2014 ' + inv + ' nevalida' : '') + (noRoa > 0 ? ' \u2014 ' + noRoa + ' neniu ROA' : ''),
    ASPA_SUMMARY:          (pub, total) => pub + '/' + total + ' ASN' + (total !== 1 ? '-oj' : '') + ' kun publikigita ASPA',
    TLSRPT_ENDPOINT:       uri => 'Raporta finpunkto: ' + uri,
    TLSRPT_BAD_URI:        uri => 'Nekonata rua=-URI-skemo: ' + uri,
    MTASTS_MAX_AGE_LOW:    age => 'max_age=' + age + 's estas malpli ol 1 tago \u2014 konsideru 604800 (1 semajno) a\u016d pli',
    MTASTS_POLICY_UNKNOWN: mode => 'Politika re\u011dimo nekonata a\u016d mankanta: ' + (mode || '(malplena)'),
    MTASTS_POLICY_ERROR:   (e, url) => e + ' \u2014 kontrolu: ' + url,
    STXT_EXPIRES_WARN:     n => 'Eksvalidi\u011das post ' + n + ' tagoj \u2014 bald a\u016d renovigu.',
    STXT_EXPIRES_OK:       (d, n) => 'Eksvalidi\u011das: ' + d + ' (' + n + ' tagoj).',
    STXT_EXPIRED:          d => 'security.txt eksvalidi\u011dis (' + d + ').',
    WHOIS_EXPIRES_SOON:    n => '\u26a0 Domajno eksvalidi\u011das post ' + n + ' tagoj \u2014 bald a\u016d renovigu.',
    DOMAIN_INVALID:        d => '"' + d + '" ne \u015dajnas esti valida domajno.',
    SPF_ALL_PASSALL:       q => '"' + q + 'all" (pasigi \u0109iujn) \u2014 permesas al iu ajn servilo sendi kiel \u0109i tiu domajno',
    CAA_IODEF:             v => 'Okaza\u0135a raportado (iodef): ' + v,
    STXT_CONTACT_OK:       v => 'Kontakto: ' + v,
    DMARC_POLICY_UNKNOWN:  p => 'Nekonata p=-valoro: ' + p,
    DMARC_PCT_LOW:         pct => 'pct=' + pct + ' \u2014 politiko devigata nur sur ' + pct + '% de mesa\u011doj',
    DMARC_RUA_URI:         uri => 'Kolektaj raportoj (rua): ' + uri,
    DMARC_RUF_URI:         uri => 'Jurisprudencaj raportoj (ruf): ' + uri,
    BIMI_LOGO_URL:         url => 'Logo-URL: ' + url,
    BIMI_AUTHORITY_URL:    url => 'A\u016dtoritata URL: ' + url,
    PTR_VALUE:             v => 'PTR: ' + v,
  },

  // ── x: explanation strings (HTML) ──────────────────────────────────────────
  x: {
    DMARC:
      '<b>DMARC (Domain-based Message Authentication, Reporting and Conformance, <a href="https://www.rfc-editor.org/rfc/rfc7489">RFC 7489</a>)</b> ' +
      'kunligas SPF kaj DKIM per politiko kiu diras al ricevantoj kion fari kiam a\u016dtentikado malsukcesas.<br><br>' +
      '<b>Politiko (p=):</b> <b>reject</b> \u2014 malsukceso de a\u016dtentikado \u2192 forigi mesa\u011don (plej forta). ' +
      '<b>quarantine</b> \u2014 sendi al spamo. <b>none</b> \u2014 nur monitorado, neniu ago farita.<br><br>' +
      '<b>Identiga vicigo:</b> DMARC postulas ke la domajno en la <code>From:</code>-kaplinio kongruu kun la domajno a\u016dtentikita de SPF a\u016d DKIM. ' +
      '<b>Malstrikta</b> (defa\u016dlta) permesas organizan-domajnan kongruon; <b>strikta</b> (<code>adkim=s</code> / <code>aspf=s</code>) postulas ekzaktan kongruon.<br><br>' +
      '<b>Raportado:</b> <code>rua=</code> ricevas kolektajn JSON-raportojn (rekomendita). ' +
      '<code>ruf=</code> ricevas po-mesa\u011dajn jurisprudencajn raportojn (sentema \u2014 uzu singarde).<br><br>' +
      '<b>Subdomajna politiko (sp=):</b> Se forestas, subdomajnoj heredas <code>p=</code>. ' +
      'Agordu <code>sp=reject</code> por eksplicite protekti \u0109iujn subdomajnojn.<br><br>' +
      '<b>pct=:</b> Aplikas la politikon al la specifita procento de malsukcesaj mesa\u011doj. 100 (defa\u016dlta) signifas plenan devigon.<br><br>' +
      '<b>Ekzemplaj DNS-registroj:</b><br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"</code> \u2014 nur monitorado<br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc@example.com; sp=quarantine"</code> \u2014 karanteno<br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=reject; adkim=r; aspf=r; pct=100; rua=mailto:dmarc@example.com; ruf=mailto:dmarc-forensic@example.com; sp=reject"</code> \u2014 plena devigo',
    DNSSEC:
      '<b>Kio estas DNSSEC?</b> DNSSEC (<a href="https://www.rfc-editor.org/rfc/rfc4033">RFC 4033</a>) aldonas kriptografajn subskribojn al DNS-registroj, ' +
      'malhelpi ka\u015dmemoron venenadon kaj vir-en-meza atakojn. ' +
      'La <b>AD-flagsigno</b> (Authentic Data) de la Cloudflare-solvilisto konfirmas ke la tuta \u0109eno de radiko al \u0109i tiu domajno estas validumita.<br><br>' +
      '<b>Algoritmo-taksadoj</b> sekvas <a href="https://www.rfc-editor.org/rfc/rfc8624">RFC 8624</a>: <b>Ed25519</b> (alg 15) kaj <b>ECDSA P-256</b> (alg 13) estas la plej fortaj. ' +
      'RSA/SHA-256 (alg 8) estas akceptebla. RSA/SHA-1 (alg 5) kaj DSA-variantoj estas malfortaj a\u016d rompitaj.<br><br>' +
      '<b>DNSSEC ebligas DANE:</b> Sen DNSSEC-konfirmita DNS, TLSA-registroj ne povas esti fidataj \u2014 ' +
      'atakanto povus anstata\u016di falsajn TLSA-registrojn.',
    MX:
      '<b>MX (Mail eXchange)-registroj</b> (<a href="https://www.rfc-editor.org/rfc/rfc5321">RFC 5321</a>) diras al aliaj serviloj kie liveri retpo\u015dton por via domajno. ' +
      'Pli malaltaj prioritataj numeroj estas provitaj unue (prioritato 10 anta\u016d 20).<br><br>' +
      '<b>Kial DNSSEC sur MX gravas:</b> Atakanto kiu povas falsigi MX-registrojn povus alidirekti \u0109iun envenantan retpo\u015dton. ' +
      'DNSSEC-konfirmitaj MX-registroj malhelpas \u0109i tion. La DNSSEC de \u0109iu MX-gastig-nomo estas kontrolata \u0109e \u011dia zona apekso.',
    DANE:
      '<b>DANE</b> (<a href="https://www.rfc-editor.org/rfc/rfc7672">RFC 7672</a>) uzas TLSA-registrojn (<a href="https://www.rfc-editor.org/rfc/rfc6698">RFC 6698</a>) por permesi al retpo\u015dt-serviloj kontroli TLS-atestilojn ' +
      'sen dependi de komercaj CA-oj. Demandita \u0109e <b>_25._tcp.&lt;mx-gastigo&gt;</b>.<br><br>' +
      '<b>TLSA-uzokodoj:</b> ' +
      '<b>DANE-EE (3)</b> \u2014 fiksi al fino-subjekta atestilo (plej forta). ' +
      '<b>DANE-TA (2)</b> \u2014 fiksi al fidinda ankro. ' +
      '<b>PKIX-EE (1)</b> / <b>PKIX-TA (0)</b> \u2014 postulas CA-validumadon plus TLSA-kongruon.<br><br>' +
      '<b>Kongruaj tipoj:</b> SHA-256 (1) kaj SHA-512 (2) estas rekomenditaj. Ekzakta kongruo (0) estas fragila sur atestila rotacio.<br><br>' +
      '<b>DNSSEC postulata:</b> Sen DNSSEC, TLSA-registroj povas esti falsigitaj kaj DANE ne provizas sekurecon.',
    SPF:
      '<b>SPF (Sender Policy Framework, <a href="https://www.rfc-editor.org/rfc/rfc7208">RFC 7208</a>)</b> specifas kiuj serviloj estas a\u016dtorizitaj sendi retpo\u015dton por via domajno. ' +
      'Ricevaj serviloj kontrolas \u0109u la sendanta IP kongruas.<br><br>' +
      '<b>Kvalifikiloj:</b> <b>-all</b> (malmola fiasko) rifuzas nea\u016dtorizitajn sendintojn \u2014 plej forta. ' +
      '<b>~all</b> (mola fiasko) markas ilin suspektindaj. <b>?all</b> (ne\u016dtrala) ne provizas protekton. ' +
      '<b>+all</b> permesas al \u0109iu \u2014 neniam uzu \u0109i tion.<br><br>' +
      '<b>Mekanismoj:</b> <b>include:</b> delegas al alia domajno. ' +
      '<b>ip4:</b>/<b>ip6:</b> a\u016dtorizigas IP-gamojn. <b>mx</b> a\u016dtorizigas viajn MX-gastigojn.<br><br>' +
      '<b>10-ser\u0109a limo (<a href="https://www.rfc-editor.org/rfc/rfc7208#section-4.6.4">RFC 7208 \u00a74.6.4</a>):</b> Superado de 10 DNS-demandantaj mekanismoj ka\u016dzas PermError.',
    DKIM:
      '<b>Kio estas DKIM-elektilo?</b> DKIM (<a href="https://www.rfc-editor.org/rfc/rfc6376">RFC 6376</a>) uzas publika-\u015dlosilan kriptografion por subskribi elsendan retpo\u015dton. ' +
      'Elektilo (ekz. <code>google</code>) estas etikedo montranta al DKIM-publika \u015dlosilo ' +
      'publikigita \u0109e <code>&lt;elektilo&gt;._domainkey.&lt;domajno&gt;</code>. ' +
      'Domajno povas havi multoblajn elektilojn \u2014 po unu por \u0109iu retpo\u015dta provizanto a\u016d por \u015dlosila rotacio.<br><br>' +
      '<b>Trovo de elektiloj:</b> Rigardu la <code>DKIM-Signature:</code>-kaplinion en iu ajn ricevita retpo\u015dto. ' +
      'La <code>s=</code>-etikedo enhavas la elektilon. Kutimaj elektiloj ne povas esti a\u016dtomate malkovritaj.<br><br>' +
      '<b>\u015closila registro-etikedoj (<a href="https://www.rfc-editor.org/rfc/rfc6376">RFC 6376</a> \u00a73.6.1):</b><br>' +
      '<b>k=</b> \u015dlosila tipo: <b>ed25519</b> estas rekomendita (kompakta, forta). <b>rsa</b> estas la defa\u016dlta se forestas.<br>' +
      '<b>h=</b> permesitaj ha\u015d-algoritmoj. <b>sha256</b> estas la sola rekomendita valoro. ' +
      '<b>sha1</b> estis malrekomendita en <a href="https://www.rfc-editor.org/rfc/rfc8301">RFC 8301</a> (2018) kaj ne devas esti uzata. ' +
      'Se forestas, \u0109iuj algoritmoj estas implicite permesitaj \u2014 eksplicite aldonu <code>h=sha256</code> por limigi al la forta algoritmo nur.<br>' +
      '<b>s=</b> servo-tipo: <b>email</b> limigas la \u015dlosilon al retpo\u015dta uzo (rekomendita). ' +
      '<b>*</b> (defa\u016dlta se forestas) permesas uzon por iu ajn servo.<br>' +
      '<b>t=y</b> markas la \u015dlosilon kiel estantan en testa re\u011dimo \u2014 konfirmantoj ne devus rifuzi fiaskojn. Forigu de produktaj \u015dlosiloj.<br>' +
      '<b>t=s</b> mal\u015daltas \u015dlosilan heredon de subdomajnoj \u2014 subdomajnoj devas publikigi siajn proprajn DKIM-\u015dlosilojn.<br>' +
      '<b>p=</b> la publika \u015dlosilo (base64). Malplena valoro revokos la \u015dlosilon, kio estas la rekomendita maniero por mal-komisioni elektilon.<br>' +
      '<b>v=</b> versio: <code>DKIM1</code> estas nedeviga sed rekomendita por klareco. Iu ajn alia valoro senvalidigas la registron.<br>' +
      '<b>n=</b> notoj: hom-legebla teksto ignorita de konfirmantoj.<br><br>' +
      '<b>\u015closila grandeco:</b> <b>Ed25519</b> estas plej forta kaj plej kompakta. ' +
      '<b>RSA-2048</b> estas la minimuma rekomendo. ' +
      '<b>RSA-1024</b> estas malforta kaj devus esti anstata\u016digita tuj.<br><br>' +
      '<b>DNSSEC sur DKIM-registroj</b> malhelpas atakanton anstata\u016di vian publikan \u015dlosilon en DNS.',
    TLSRPT:
      '<b>TLS-RPT (<a href="https://www.rfc-editor.org/rfc/rfc8460">RFC 8460</a>)</b> ebligas ricevi TLS-fiasko-raportojn de sendaj retpo\u015dt-serviloj. ' +
      'Publikigita kiel TXT-registro \u0109e <code>_smtp._tls.&lt;domajno&gt;</code>.<br><br>' +
      '<b>rua=-finpunktoj:</b> Raportoj iras al <code>mailto:</code>-adresoj a\u016d <code>https:</code>-agregadaj servoj. ' +
      'HTTPS-finpunktoj estas takstitaj bonega; mailto estas bona.<br><br>' +
      '<b>Kion raportoj enhavas:</b> Agregitaj JSON-datumoj \u2014 sukcesaj TLS-konektoj, manpremo-fiaskoj, ' +
      'atestaĵeraroj, kaj politikaj malobservoj. Esencaj por diagnozi MTA-STS kaj DANE problemojn.<br><br>' +
      '<b>Ekzemplaj DNS-registroj:</b><br>' +
      '<code>_smtp._tls.example.com. TXT "v=TLSRPTv1; rua=mailto:tlsrpt@example.com"</code><br>' +
      '<code>_smtp._tls.example.com. TXT "v=TLSRPTv1; rua=https://tlsrpt.example.com/v1"</code> \u2014 HTTPS-agregada finpunkto',
    MTASTS:
      '<b>MTA-STS (<a href="https://www.rfc-editor.org/rfc/rfc8461">RFC 8461</a>)</b> instrukcias sendantajn servilojn postuli TLS kiam liverantas al via domajno ' +
      'kaj validumi la atestecon de via retpo\u015dt-servilo. ' +
      'DNS-registro \u0109e <code>_mta-sts.&lt;domajno&gt;</code>; ' +
      'politiko \u0109e <code>https://mta-sts.&lt;domajno&gt;/.well-known/mta-sts.txt</code>.<br><br>' +
      '<b>Politikaj re\u011dimoj:</b> <b>enforce</b> \u2014 TLS postulata kun valida atestilo, a\u016d livero rifuzita. ' +
      '<b>testing</b> \u2014 kolekti TLS-RPT-datumojn sen devigo. ' +
      '<b>none</b> \u2014 eksplicite mal\u015daltita.<br><br>' +
      '<b>max_age:</b> Sekundoj dum kiuj sendantoj konservas la politikon. 604800 (1 semajno) a\u016d 31557600 (1 jaro) estas tipaj.<br><br>' +
      '<b>Ekzempla DNS-registro:</b><br>' +
      '<code>_mta-sts.example.com. TXT "v=STSv1; id=20240101000000"</code><br><br>' +
      '<b>Ekzempla politika dosiero</b> \u0109e <code>https://mta-sts.example.com/.well-known/mta-sts.txt</code>:<br>' +
      '<code>version: STSv1</code><br>' +
      '<code>mode: enforce</code><br>' +
      '<code>mx: mail.example.com</code><br>' +
      '<code>max_age: 604800</code>',
    CAA:
      '<b>CAA (Certification Authority Authorization, <a href="https://www.rfc-editor.org/rfc/rfc8659">RFC 8659</a>)</b> limigas kiuj CA-oj povas eldoni TLS-atestilojn.<br><br>' +
      '<b>Etikedoj:</b> <b>issue</b> \u2014 a\u016dtorizas CA-on por regulaj atestiloj (ekz. <code>issue "letsencrypt.org"</code>). ' +
      '<b>issuewild</b> \u2014 a\u016dtorizas CA-on por \u011dokera atestiloj. ' +
      '<b>iodef</b> \u2014 kie CA-oj devus raporti politikajn malobservojn.<br><br>' +
      '<b>S/MIME-atestiloj (issuemail, <a href="https://www.rfc-editor.org/rfc/rfc9495">RFC 9495</a>):</b> ' +
      'La <b>issuemail</b>-etikedo kontrolas kiuj CA-oj povas eldoni S/MIME-atestilojn por retpo\u015dt-adresoj \u0109e via domajno. ' +
      'Se forestas, la <b>issue</b>-etikedo anka\u016d regas S/MIME-eldonon. ' +
      'Agordu <code>issuemail ";"</code> por malpermesi \u0109ian S/MIME-eldonon de via domajno.<br><br>' +
      '<b>BIMI VMC-atestiloj:</b> Verifitaj Marko-Atestiloj (VMC) uzataj por BIMI-a\u016dtoritato-registroj estas regataj de la norma <b>issue</b>-etikedo \u2014 ne ekzistas aparta VMC-specifa etikedo. ' +
      'Nur malgranda nombro da CA-oj nuntempe eldonis VMC-ojn (DigiCert, Entrust). ' +
      'Se vi uzas BIMI kun VMC (<code>a=</code>-etikedo), certigu ke viaj <b>issue</b>-registroj inkludas vian VMC-provizanton.<br><br>' +
      '<b>Kritika flagsigno:</b> CA-oj kiuj ne komprenas kritike-flagititan etikedon devas rifuzi eldonon. ' +
      'Uzu singarde \u2014 nekonataj kritikaj etikedoj povas bloki \u0109ian atestila eldonon.<br><br>' +
      '<b>Sen CAA-registroj,</b> iu ajn CA kiu trapasos domajna validumadon povas eldoni atestilojn.<br><br>' +
      '<b>Ekzemplaj DNS-registroj:</b><br>' +
      '<code>example.com. CAA 0 issue "letsencrypt.org"</code><br>' +
      '<code>example.com. CAA 0 issue "sectigo.com"</code><br>' +
      '<code>example.com. CAA 0 issuewild "letsencrypt.org"</code><br>' +
      '<code>example.com. CAA 0 issuemail "sectigo.com"</code><br>' +
      '<code>example.com. CAA 0 iodef "mailto:caa-violations@example.com"</code>',
    RPKI:
      '<b>RPKI (Resource Public Key Infrastructure)</b> permesas al IP-adreso-posedantoj publikigi Itinero-Origina A\u016dtorizitojn (ROA-ojn) ' +
      'kiuj specifas kiun ASN-on estas a\u016dtorizita sciigi siajn prefiksojn.<br><br>' +
      '<b>Valida</b> \u2014 kongrua ROA ekzistas: la prefikso estas protektita kontra\u016d BGP-pirataĵo. ' +
      '<b>Nevalida</b> \u2014 ROA ekzistas sed NE a\u016dtorizas la nunan sciigon: itinero eble estas filtrita de RPKI-konfirmantaj biregiloj. ' +
      '<b>Neniu ROA</b> \u2014 neniu ROA trovita: prefikso estas neprotektita sed da\u016dre povas esti direktita.<br><br>' +
      '\u0108i tiu kontrolo solvas IP-ojn por \u0109iuj NS kaj MX-gastigoj, poste demandas RIPE Stat por validumi \u0109iun prefikson kontra\u016d \u011dia origina ASN. ' +
      'RPKI protektas retpo\u015dtan infrastrukturon kontra\u016d BGP-itinera pirataĵo kiu povus alidirekti a\u016d kapti retpo\u015dtan trafikon.',
    ASPA:
      '<b>ASPA (Autonomous System Provider Authorization, <a href="https://www.rfc-editor.org/rfc/rfc9582">RFC 9582</a>)</b> permesas al AS deklari kiujn suprenfluan provizantojn \u011di estas a\u016dtorizita uzi. ' +
      'Publikigitaj ASPA-registroj ebligas itinero-fuga detekton: se trafiko alvenas tra nea\u016dtorizita provizanto, ASPA-konsciaj biregiloj povas rifuzi \u011din.<br><br>' +
      '<b>Publikigita</b> \u2014 ASPA-registro ekzistas kun deklaritaj provizantoj. ' +
      '<b>Neniu ASPA</b> \u2014 neniu registro publikigita; itinero-fugoj implikantaj \u0109i tiun AS ne povas esti detektitaj de ASPA-konsciaj biregiloj.<br><br>' +
      '\u0108i tiu kontrolo legas la ASPA-datumojn el\u015dutitajn dum la RPKI-kontrolo, montrante provizanto-a\u016dtorizaĵajn registrojn por \u0109iuj ASN-oj asociitaj kun la NS kaj MX-gastigoj de la domajno.<br><br>' +
      '<b>Noto:</b> RFC 9582 estas anka\u016d proponita normo kaj reala-monda disvolvo estas nuntempe tre limigita. ' +
      'Pro tio, la foresto de ASPA-registroj ne influas vian poenton \u2014 \u0109i tiu kontrolo estas pure informala nuntempe. ' +
      'Tamen, indas kontakti vian gastigadan provizanton a\u016d ISP-on(j) por demandi \u0109u ili sekvas la disvolvadon de ASPA kaj konsideras efektivigon.',
    STXT:
      '<b>security.txt (<a href="https://www.rfc-editor.org/rfc/rfc9116">RFC 9116</a>)</b> estas normo por publikigi vundeblec-malka\u015dan informon.<br><br>' +
      'Metu la dosieron \u0109e <code>/.well-known/security.txt</code> (preferita) a\u016d <code>/security.txt</code>.<br><br>' +
      '<b>Postulataj kampoj:</b> <code>Contact</code> \u2014 kie raporti vundeblecojn (retpo\u015dto, URL a\u016d telefono). ' +
      '<code>Expires</code> \u2014 ISO 8601-dato post kiu la dosiero ne devus esti fidata.<br><br>' +
      '<b>Nedevigaj kampoj:</b> <code>Encryption</code> (GPG-\u015dlosila URL), <code>Policy</code> (malka\u015da-politika URL), ' +
      '<code>Acknowledgments</code>, <code>Preferred-Languages</code>, <code>Canonical</code>, <code>Hiring</code>.<br><br>' +
      '<b>Ekzempla dosiero:</b><br>' +
      '<code>Contact: mailto:security@example.com</code><br>' +
      '<code>Contact: https://example.com/security/report</code><br>' +
      '<code>Expires: 2027-01-01T00:00:00Z</code><br>' +
      '<code>Encryption: https://example.com/pgp-key.asc</code><br>' +
      '<code>Policy: https://example.com/security/policy</code><br>' +
      '<code>Preferred-Languages: en, eo</code><br>' +
      '<code>Canonical: https://example.com/.well-known/security.txt</code><br><br>' +
      'Uzu <a href="https://securitytxt.org/">securitytxt.org</a> por generi kaj subskribi vian dosieron.',
    WHOIS:
      '<b>WHOIS / RDAP</b> provizas domajna-registran datumojn per la Registration Data Access Protocol (<a href="https://www.rfc-editor.org/rfc/rfc7480">RFC 7480</a>).<br><br>' +
      'Datumoj estas el\u015dutitaj de la a\u016dtoritata RDAP-servilo por la TLD de la domajno per <code>rdap.org</code>.<br><br>' +
      '<b>\u015closilaj kampoj:</b> <b>Registrinto</b> \u2014 kiu administras la registradon. ' +
      '<b>Eksvalidi\u011das</b> \u2014 kiam la registrado devas esti renovigita. ' +
      '<b>Stato</b> \u2014 domajna \u015dlosoj (ekz. <code>clientTransferProhibited</code> malhelpas nea\u016dtorizitajn transsendojn).<br><br>' +
      'RDAP anstata\u016digas la malpli novan klartekstan WHOIS-protokolon (<a href="https://www.rfc-editor.org/rfc/rfc3912">RFC 3912</a>) per strukturita JSON-baza API.<br><br>' +
      '<b>Noto:</b> Lastatempe kreita domajno estas rekonate indikilo de malplii\u011dinta fido kaj pliigita risko de la domajno estanta uzata por malica programaro, phi\u015ding a\u016d fra\u016ddo. ' +
      'Se vi kontrolas domajnon kiu ne apartenas al vi, traktu tre fre\u015dan krea-daton kiel avertosigno kaj apliku ekstra singardo kaj kontrolon anta\u016d interagi kun iu ajn retpo\u015dto a\u016d servo de tiu domajno.',
    BIMI:
      '<b>BIMI (Brand Indicators for Message Identification)</b> permesas al organizoj montri sian logoon en retpo\u015dt-programoj kiuj subtenas \u011din (ekz. Gmail, Apple Mail, Yahoo).<br><br>' +
      '<b>DNS-registro:</b> Publikigita kiel TXT-registro \u0109e <code>default._bimi.&lt;domajno&gt;</code>.<br><br>' +
      '<b>l= (logo-URL):</b> URL montranta al SVG-logo dosiero. Postulata por ke BIMI funkcii. ' +
      'La SVG devas esti kvadrata, profil-sekura bildo gastigita super HTTPS.<br><br>' +
      '<b>a= (a\u016dtoritata atesto):</b> URL montranta al Verifita Marko-Atestilo (VMC) eldonita de a\u016dtorizita CA (ekz. DigiCert, Entrust). ' +
      'Postulata de plej gravaj programoj (inkluzive Gmail) por efektive montri la logoon. Sen VMC, la registro estas nur informala.<br><br>' +
      '<b>Postuloj:</b> DMARC devas esti en <code>p=quarantine</code> a\u016d <code>p=reject</code>-deviga re\u011dimo. ' +
      'BIMI ne rekte influas retpo\u015dtan sekurecon \u2014 \u011di estas marca videblo-tra\u0135to kiu rekompencos fortan DMARC-devigon.',
    PTR:
      '<b>PTR-registroj</b> (montril-registroj) mapas IP-adresojn reen al gastig-nomoj \u2014 la reverso de A/AAAA-registroj.<br><br>' +
      '<b>FCrDNS (Forward-Confirmed reverse DNS):</b> PTR-registro estas \u201canta\u016de konfirmita\u201d kiam la PTR-valoro solvas anta\u016den al la originala IP. ' +
      'Multaj spamo-filtriloj kaj ricevantaj MTA-oj kontrolas FCrDNS por MX-gastigoj. Kongruo konstruas fidon; mankanta a\u016d malkongrua PTR povas pliigi spamopunktojn.<br><br>' +
      '<b>IPv4:</b> Inversigita kiel <code>d.c.b.a.in-addr.arpa</code>. ' +
      '<b>IPv6:</b> Etendita al 32 heksaj nibbloj, inversigita, kaj aldonita per <code>.ip6.arpa</code>.<br><br>' +
      '<b>\u0108i tiu kontrolo</b> solvas A kaj AAAA-registrojn por \u0109iu MX-gastigo, demandas la PTR-on por \u0109iu IP, kaj kontrolas \u0109u la PTR-valoro kongruas kun la MX-gastig-nomo (malstrikta FCrDNS-kontrolo). ' +
      'Ne influas la \u011deneralan gradon.',
  },
};
