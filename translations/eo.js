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

    OPT_SKIP_CORS:       'Preterpasi MTA-STS kaj Security.txt-kontrolojn por eviti CORS-problemojn',
    CHECK_SKIPPED:       '\u0108i tiu kontrolo estis preterpasita.',

    STATS_TITLE:         '\uD83E\uDD13 Statistikoj',
    STATS_TOTAL_TIME:    'Totala skan-tempo',
    STATS_DOH_REQUESTS:  'Cloudflare DoH-demandoj',
    STATS_RIPE_REQUESTS: 'RIPE Stat API-alvokoj',
    STATS_RIPE_CACHE:    'el ka\u015dmemoro',
    STATS_HTTP_FETCHES:  'HTTP-el\u015dutoj',
    STATS_CHECK_TIMING:  'Tempo po-kontrole',
    STATS_DKIM_SELECTORS:'DKIM-elektiloj testitaj / trovitaj',
    STATS_IPS_RESOLVED:  'IP-oj solvitaj (RPKI)',
    STATS_MS:            'ms',

    DNSSEC_VALIDATED:    '\u2713 DNSSEC konfirmita (AD=vera)',
    DNSSEC_UNVALIDATED:  '\u26a0 Subskribita sed ne konfirmita de solvilisto (AD=malvera)',
    DNSSEC_RESOLVER_ONLY:'\u015closilregistroj ne povis esti el\u015dutitaj, sed DNSSEC konfirmita de solvilisto.',
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
    // Keys added in later releases — backfilled
    PANEL_IPV6:          'IPv6',
    DMARCBIS_TITLE:            'DMARCbis-konformeco — RFC 9989 / 9990 / 9991',
    DMARCBIS_INTRO:            'RFC 9989 malaktualigas RFC 7489 kaj RFC 9091, kaj dividas raportadon en RFC 9990 (kolekta) kaj RFC 9991 (malsukcesa). Ĉi tiuj kontroloj estas informaj kaj ne influas la noton.',
    DMARCBIS_DISCOVERY_TITLE:  'Politika malkovro — DNS-arba trairo (RFC 9989 §4.10)',
    DMARCBIS_TAGS_TITLE:       'Etikeda konformeco (RFC 9989 §4.7, §9.3)',
    DMARCBIS_EXTAUTH_TITLE:    'Rajtigo de ekstera raport-celo (RFC 9990 §4, RFC 9991 §5)',
    DMARCBIS_SUGGESTED_TITLE:  'Proponita RFC 9989-registro',
    DMARCBIS_SUGGESTED_NOTE:   'Historiaj kaj neregistritaj etikedoj forigitaj, pct=0 migrigita al t=y, kaj la etikedoj rekomendataj de RFC 9989 ĉe organiza domajno aldonitaj. La politika valoro restas neŝanĝita — kontrolu antaŭ publikigo.',
    DMARCBIS_TW_TAG_AUTHOR:    'aŭtora domajno',
    DMARCBIS_TW_TAG_ORG:       'organiza domajno',
    DMARCBIS_TW_STEP_FOUND:    'registro',
    DMARCBIS_TW_STEP_NONE:     'neniu',
    DMARCBIS_TW_STEP_MULTI:    'multoblaj',
    DMARCBIS_TW_STEP_ERROR:    'eraro',
    DMARCBIS_TW_NO_POLICY:     'Neniu DMARC-politika registro ie ajn en la arba trairo — ricevantoj aplikas neniun DMARC-traktadon al tiu ĉi domajno',
    DMARCBIS_TW_MULTI:         'Paŝo de la arba trairo redonis multoblajn DMARC-registrojn — RFC 9989 §4.10 forigas ĉiujn',
    DMARCBIS_TAGS_CLEAN:       'Ĉiuj etikedoj estas registritaj kiel aktivaj en RFC 9989 §9.3 — neniu historia, neregistrita aŭ nevalida etikedo',
    DMARCBIS_V_NOT_FIRST:      'v= mankas aŭ ne estas la unua etikedo — RFC 9989 §4.7 postulas ke la tuta registro estu ignorata',
    DMARCBIS_P_DEFAULT_NONE:   'Neniu valida p=-etikedo — RFC 9989 §4.10.1: ĉar rua= ĉeestas, ricevantoj traktas la registron kiel p=none',
    DMARCBIS_P_NO_PROCESSING:  'Neniu valida p=-etikedo kaj neniu rua= — RFC 9989 §4.10.1: ricevantoj aplikas neniun DMARC-traktadon entute',
    DMARCBIS_PCT_ZERO:         'pct=0 estas historia en RFC 9989 — anstataŭigu ĝin per t=y, la etikedo kiu nun portas tiun signifon (Aldono A.6)',
    DMARCBIS_PCT_FULL:         'pct=100 estas historia en RFC 9989 kaj jam estis la defaŭlto — forigu la etikedon',
    DMARCBIS_T_NO_EFFECT:      't=y havas neniun efikon dum la politiko estas none — RFC 9989 §4.7',
    DMARCBIS_T_ENFORCED:       't=n — la publikigita politiko estas aplikata lauvorte (defaŭlto de RFC 9989)',
    DMARCBIS_NP_REJECT:        'np=reject — poŝto de neekzistantaj subdomajnoj estas rifuzata (RFC 9989 §4.7)',
    DMARCBIS_NP_MISSING:       'Neniu np=-etikedo — RFC 9989 aldonas ĝin por neekzistantaj subdomajnoj; np=reject estas rekomendita ĉe organiza domajno',
    DMARCBIS_PSD_Y:            'psd=y — deklarita kiel publika sufiksa domajno; la arba trairo haltas ĉi tie (RFC 9989 §4.10.2)',
    DMARCBIS_PSD_N:            'psd=n — deklarita kiel organiza domajno; la arba trairo haltas ĉi tie (RFC 9989 §4.10.2)',
    DMARCBIS_PSD_U:            'psd=u — la organiza domajno estas lasata al la arba trairo (defaŭlto de RFC 9989)',
    DMARCBIS_PSD_MISSING:      'Neniu psd=-etikedo — publikigi psd=n ĉe la organiza domajno tuj finas la arban trairon kaj forigas ĉian dubon',
    DMARCBIS_FO_NO_RUF:        'fo= ĉeestas sen ruf= — RFC 9989 §4.7 postulas ke ĝia enhavo estu ignorata',
    DMARCBIS_URI_NO_MAILTO:    'Neniu mailto:-URI en rua= — ricevantoj devas subteni nur mailto:, do aliaj skemoj povas esti ignorataj',
    DMARCBIS_EXT_NONE:         'Neniuj rua= aŭ ruf=-URI-oj rajtigendaj — sen kolektaj raportoj mankas ĉia videbleco pri DMARC-malsukcesoj',
    IPV6_HOST_DETAILS: 'Adresdetaloj po gastiganto',
    IPV6_NO_AAAA: 'Neniu AAAA-registro',
    IPV6_NO_MX: 'Neniuj MX-gastigantoj trovitaj',
    IPV6_NO_NS: 'Neniuj NS-gastigantoj trovitaj',
    IPV6_MANDATORY_TITLE: 'Devigaj IPv6-postuloj',
    IPV6_MANDATORY_NOTE: 'IPv6 estas postulata de registara regularo en la jenaj landoj:',
    IPV6_DOMAIN_HAS_IPV6: '✓ La domajno havas IPv6-adreso(j)n',
    IPV6_DOMAIN_NO_IPV6: 'La domajno havas neniun IPv6-adreson — atingebla nur per IPv4',
    IPV6_ALL_MX_HAVE_IPV6: '✓ Ĉiuj MX-gastigantoj havas IPv6-adresojn',
    IPV6_SOME_MX_HAVE_IPV6: 'Kelkaj MX-gastigantoj havas IPv6 — ne ĉiuj',
    IPV6_NO_MX_HAVE_IPV6: 'Neniu MX-gastiganto havas IPv6-adreson',
    IPV6_ALL_NS_HAVE_IPV6: '✓ Ĉiuj NS-gastigantoj havas IPv6-adresojn',
    IPV6_SOME_NS_HAVE_IPV6: 'Kelkaj NS-gastigantoj havas IPv6 — ne ĉiuj',
    IPV6_NO_NS_HAVE_IPV6: 'Neniu NS-gastiganto havas IPv6-adreson',
    IPV6_MX_BADGE_YES: 'IPv6',
    IPV6_MX_BADGE_NO: 'Sen IPv6',
    SPF_NO_IP6_MECHS: 'La MX/NS-gastigantoj subtenas IPv6, sed neniu ip6:-ero troviĝas en la SPF-registro — se tiu ĉi domajno sendas retpoŝton per IPv6, aldonu ip6:-mekanismojn por rajtigi tiujn adresojn',
    SPF_LEGACY_TYPE: 'Malnova SPF-registrotipo (DNS-tipo 99) trovita — malrekomendita ekde RFC 7208 (2014); forigenda',
    SPF_PROPAGATION_MISMATCH: 'La SPF-registro malsamas inter la DNS-solvantoj de Cloudflare kaj Google — nekompleta disvastigo aŭ miskonfiguro',
    DMARC_PROPAGATION_MISMATCH: 'La DMARC-registro malsamas inter la DNS-solvantoj de Cloudflare kaj Google — nekompleta disvastigo aŭ miskonfiguro',
    DKIM_ROTATION_NOTE: 'Bona praktiko: rotaciu DKIM-ŝlosilojn almenaŭ ĉiujare. La aĝo de ŝlosilo ne determineblas el DNS — kontrolu la rotacian politikon ĉe via retpoŝta provizanto.',
    CAA_ISSUEMAIL_NOTE: 'issuemail-etikedo ĉeestas — ĝi regas la eldonon de S/MIME-atestiloj por tiu ĉi domajno (RFC 8657)',
    RPKI_NS_DIVERSITY: 'ASN-diverseco de la nomserviloj',
    RPKI_NS_NO_ASN_DATA: 'Neniuj ASN-datumoj disponeblas por la nomserviloj',
    OVERVIEW_PROVIDERS: 'Detektita retpoŝta infrastrukturo',
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
    // Keys added in later releases — backfilled
    DMARCBIS_TW_AT_AUTHOR:   dom => 'Politika registro publikigita ĉe la aŭtora domajno (_dmarc.' + dom + ') — tio estas la registro kiun ricevantoj aplikas',
    DMARCBIS_TW_INHERITED:   (dom, tag, val) => 'Neniu registro ĉe la aŭtora domajno — ricevantoj heredas la politikon publikigitan ĉe _dmarc.' + dom + ', aplikante ' + tag + '=' + val,
    DMARCBIS_TW_ORG_DOMAIN:  (dom, rule) => 'Organiza domajno: ' + dom + ' — ' + ({
                               'psd-n':    'fiksita de psd=n',
                               'psd-y':    'unu etikedon sub registro kun psd=y',
                               'shortest': 'plej mallonga nomo en la arba trairo kun DMARC-registro',
                               'default':  'neniu registro trovita en la arba trairo, do la informpetita domajno estas uzata',
                             }[rule] || rule),
    DMARCBIS_TW_QUERIES:     n => 'Arba trairo — ' + n + (n === 1 ? ' informpeto' : ' informpetoj'),
    DMARCBIS_V_CASE:         v => 'v=' + v + ' — la versia valoro distingas usklecon en RFC 9989 §4.7 kaj devas esti ekzakte DMARC1',
    DMARCBIS_DUPLICATE_TAGS: l => 'Etikedo ripetita en la registro: ' + l + ' — RFC 9989 §4.8 traktas tion kiel sintaksan eraron',
    DMARCBIS_PCT_PARTIAL:    v => 'pct=' + v + ' estis forigita en RFC 9989 (Aldono A.6) — partaj procentoj estis aplikataj nekonsekvence; uzu t=y dum testado, alie forigu la etikedon',
    DMARCBIS_RF_HISTORIC:    v => 'rf=' + v + ' estas historia en la registro de RFC 9989 §9.3 — forigu ĝin',
    DMARCBIS_RI_HISTORIC:    v => 'ri=' + v + ' estas historia en la registro de RFC 9989 §9.3 — forigu ĝin',
    DMARCBIS_T_INVALID:      v => 't=' + v + ' estas nevalida — RFC 9989 §4.7 permesas nur y aŭ n',
    DMARCBIS_T_TESTING:      (p, eff) => 't=y — testreĝimo: ricevantoj aplikas ' + eff + ' anstataŭ la publikigita p=' + p + ' (RFC 9989 §4.7)',
    DMARCBIS_NP_INVALID:     v => 'np=' + v + ' estas nevalida — RFC 9989 §4.7 permesas nur none, quarantine aŭ reject',
    DMARCBIS_NP_SET:         v => 'np=' + v + ' — politiko por neekzistantaj subdomajnoj (RFC 9989 §4.7)',
    DMARCBIS_PSD_INVALID:    v => 'psd=' + v + ' estas nevalida — RFC 9989 §4.7 permesas nur y, n aŭ u',
    DMARCBIS_SP_INVALID:     v => 'sp=' + v + ' estas nevalida — RFC 9989 §4.7 permesas nur none, quarantine aŭ reject',
    DMARCBIS_SP_IGNORED:     org => 'sp= estas ignorata en tiu ĉi registro — RFC 9989 §4.7: politika malkovro legas sp= nur de la organiza domajno (' + org + ')',
    DMARCBIS_ALIGN_INVALID:  (tag, v) => tag + '=' + v + ' estas nevalida — RFC 9989 §4.7 permesas nur r aŭ s',
    DMARCBIS_FO_INVALID:     v => 'fo=' + v + ' ne kongruas kun la sintakso de RFC 9989 §4.8 — validaj valoroj estas 0, 1, d kaj s, apartigitaj per dupunkto, kie 0 kaj 1 ekskluzivas unu la alian',
    DMARCBIS_URI_OBS_SIZE:   l => 'Malaktuala !size-sufikso en raporta URI: ' + l + ' — RFC 9989 §4.8 petas raport-generilojn ignori ĝin',
    DMARCBIS_UNKNOWN_TAGS:   l => 'Neregistrita(j) etikedo(j): ' + l + ' — forestas el la registro de RFC 9989 §9.3, do ricevantoj devas ignori ilin',
    DMARCBIS_EXT_INTERNAL:   (tag, uri) => tag + '=' + uri + ' — sama organiza domajno, neniu rajtiga registro necesas',
    DMARCBIS_EXT_AUTHORIZED: (tag, uri, name) => tag + '=' + uri + ' — ekstera celo rajtigita de ' + name,
    DMARCBIS_EXT_MISSING:    (tag, uri, name) => tag + '=' + uri + ' — ekstera celo NE rajtigita: neniu v=DMARC1 TXT-registro ĉe ' + name + '; ricevantoj devas ignori tiun ĉi URI-on kaj sendas neniun raporton',
    DMARCBIS_EXT_OVERRIDE:   (tag, uri, name, ov) => tag + '=' + uri + ' — rajtigita de ' + name + ', kiu redirektas raportojn al ' + ov,
    DMARCBIS_EXT_OVERRIDE_BAD: (tag, uri, name, ov) => tag + '=' + uri + ' — la rajtiga registro ĉe ' + name + ' redirektas al ' + ov + ' ĉe alia gastiganto; RFC 9990 §4 malpermesas sendi al ambaŭ adresoj',
    DMARCBIS_EXT_TOO_LONG:   (tag, uri) => tag + '=' + uri + ' — la rajtiga nomo superas la DNS-longolimojn, do la rilato ne konfirmeblas (RFC 9990 §4 paŝo 4)',
    DMARCBIS_EXT_UNPARSABLE: (tag, uri) => tag + '=' + uri + ' — neniu gastiganto eltireblis el tiu ĉi URI',
    DMARCBIS_EXT_ERROR:      (tag, uri, name) => tag + '=' + uri + ' — la informpeto pri ' + name + ' malsukcesis; rajtigo ne konfirmeblis',
    IPV6_DOMAIN_SUMMARY: n => n + ' IPv6-adreso' + (n !== 1 ? 'j' : '') + ' trovita' + (n !== 1 ? 'j' : '') + ' por la domajno.',
    IPV6_MX_SUMMARY: (n, t) => n + '/' + t + ' MX-gastiganto' + (t !== 1 ? 'j' : '') + ' havas IPv6.',
    IPV6_NS_SUMMARY: (n, t) => n + '/' + t + ' NS-gastiganto' + (t !== 1 ? 'j' : '') + ' havas IPv6.',
    SPF_LOOKUP_TOTAL_EXCEED: n => n + ' entutaj DNS-informpetoj (inkluzive de ingitaj include) superas la limon de 10 en RFC 7208 — ricevantoj redonos SPF PermError',
    SPF_LOOKUP_TOTAL_HIGH: n => n + ' entutaj DNS-informpetoj (inkluzive de ingitaj include) — proksimiĝas al la limo de 10 en RFC 7208',
    SPF_FOUND_LOOKUPS_TOTAL: (direct, total) => 'SPF-registro trovita. ' + direct + ' rektaj + ' + total + ' entutaj DNS-informpetoj (rekursie).',
    RPKI_NS_SINGLE_ASN: (asn, holder) => 'Ĉiuj nomserviloj sur unu sola ASN (' + asn + (holder ? ' — ' + holder : '') + ') — ununura punkto de malsukceso por la DNS-vojigo',
    RPKI_NS_MULTI_ASN: n => 'La nomserviloj distribuiĝas sur ' + n + ' malsamaj ASN-oj — bona vojiga rezisto',
  },

  // ── x: explanation strings (HTML) ──────────────────────────────────────────
  x: {
    DMARC:
      '<b>DMARC (Domain-based Message Authentication, Reporting and Conformance)</b> ' +
      'kunligas SPF kaj DKIM per politiko kiu diras al ricevantoj kion fari kiam a\u016dtentikado malsukcesas. ' +
      'Originale <a href="https://www.rfc-editor.org/rfc/rfc7489">RFC 7489</a>, nun normigita kiel <a href="https://www.rfc-editor.org/rfc/rfc9989">RFC 9989</a> (\u201cDMARCbis\u201d), kiu ankaŭ malaktualigas <a href="https://www.rfc-editor.org/rfc/rfc9091">RFC 9091</a> (PSD DMARC). Vidu la DMARCbis-sekcion sube por konformeco kun la pli nova specifo.<br><br>' +
      '<b>Politiko (p=):</b> <b>reject</b> \u2014 malsukceso de a\u016dtentikado \u2192 forigi mesa\u011don (plej forta). ' +
      '<b>quarantine</b> \u2014 sendi al spamo. <b>none</b> \u2014 nur monitorado, neniu ago farita.<br><br>' +
      '<b>Identiga vicigo:</b> DMARC postulas ke la domajno en la <code>From:</code>-kaplinio kongruu kun la domajno a\u016dtentikita de SPF a\u016d DKIM. ' +
      '<b>Malstrikta</b> (defa\u016dlta) permesas organizan-domajnan kongruon; <b>strikta</b> (<code>adkim=s</code> / <code>aspf=s</code>) postulas ekzaktan kongruon.<br><br>' +
      '<b>Raportado:</b> <code>rua=</code> ricevas kolektajn XML-raportojn (rekomendita), difinitajn en ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9990">RFC 9990</a>. ' +
      '<code>ruf=</code> ricevas po-mesa\u011dajn malsukces-raportojn, difinitajn en ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9991">RFC 9991</a> (sentema \u2014 uzu singarde).<br><br>' +
      '<b>Subdomajna politiko (sp=):</b> Se forestas, subdomajnoj heredas <code>p=</code>. ' +
      'Agordu <code>sp=reject</code> por eksplicite protekti \u0109iujn subdomajnojn. ' +
      'RFC 9989 aldonas <code>np=</code> por subdomajnoj kiuj tute ne ekzistas.<br><br>' +
      '<b>pct=:</b> Aplikis la politikon al la specifita procento de malsukcesaj mesa\u011doj. ' +
      '<b>Forigita en RFC 9989</b> \u2014 <code>pct=0</code> nun skribi\u011das <code>t=y</code>, kaj \u0109iu alia valoro simple forigendas.<br><br>' +
      '<b>Ekzemplaj DNS-registroj:</b><br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"</code> \u2014 nur monitorado<br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=quarantine; sp=quarantine; rua=mailto:dmarc@example.com"</code> \u2014 karanteno<br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=reject; sp=reject; np=reject; adkim=s; aspf=s; rua=mailto:dmarc@example.com; psd=n"</code> \u2014 plena devigo, RFC 9989-stile',
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
      '<b>BIMI estas vaste konsiderata kiel merkata afero, kiu ne provizas iun ajn plian sekurecan valoron al iu ajn. Montri logoon en reto-kesto por \u201ckonfirmi\u201d la veran sendiston estas kiel iu ajn GIF-bildo diranta \u201c100% garantiita\u201d. Se vi ankoraŭ volas pagi CA-ojn por \u011di, bonvolu.</b><br><br>' +
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
    // Keys added in later releases — backfilled
    DMARCBIS:
      '<b>DMARCbis</b> estas la revizio de DMARC el 2026, publikigita kiel tri dokumentoj: ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9989">RFC 9989</a> (la protokolo), ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9990">RFC 9990</a> (kolekta raportado) kaj ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9991">RFC 9991</a> (malsukces-raportado). ' +
      'Registroj verkitaj por RFC 7489 plu funkcias \u2014 nenio \u0109i tie rompas ekzistantan instalon \u2014 sed pluraj etikedoj \u015dan\u011dis staton.<br><br>' +
      '<b>Kio \u015dan\u011dis:</b><br>' +
      '\u2022 <code>pct=</code> malaperis (Aldono A.6). Ricevantoj aplikis partajn procentojn nekonsekvence; nur <code>pct=0</code> montri\u011dis utila, kaj \u011di nun estas <code>t=y</code>.<br>' +
      '\u2022 <code>t=</code> (testre\u011dimo) estas nova: kun <code>t=y</code> ricevantoj aplikas unu nivelon sub la publikigita politiko \u2014 <code>reject</code> kondutas kiel <code>quarantine</code>, <code>quarantine</code> kiel <code>none</code>.<br>' +
      '\u2022 <code>np=</code> difinas la politikon por <b>neekzistantaj</b> subdomajnoj, aparte de <code>sp=</code>, kiu kovras la ekzistantajn.<br>' +
      '\u2022 <code>psd=</code> markas publikan sufiksan domajnon (<code>y</code>) a\u016d fiksas organizan domajnon (<code>n</code>). Ambaŭ valoroj tuj finas la arban trairon.<br>' +
      '\u2022 <code>rf=</code> kaj <code>ri=</code> estas historiaj en la etikeda registro (\u00a79.3) kaj forigendas.<br><br>' +
      '<b>DNS-arba trairo (\u00a74.10):</b> la Publika Sufiksa Listo ne plu servas por trovi la organizan domajnon. ' +
      'Ricevantoj informpetas <code>_dmarc.</code> \u0109e la a\u016dtora domajno, poste supreniras etikedon post etikedo \u2014 maksimume ok informpetoj \u2014 \u011dis ili trovas registron ' +
      'a\u016d unu portantan <code>psd=y</code> / <code>psd=n</code>. Tio permesas al grandaj organizoj publikigi politikon \u0109e pluraj punktoj de sia nomspaco.<br><br>' +
      '<b>Rajtigo de ekstera raport-celo (RFC 9990 \u00a74, RFC 9991 \u00a75):</b> se <code>rua=</code> a\u016d <code>ruf=</code> montras ekster via organiza domajno, ' +
      'tiu celo devas publikigi <code>via-domajno._report._dmarc.ilia-domajno</code> enhavantan almena\u016d <code>v=DMARC1</code>. ' +
      'Sen \u011di ricevantoj <b>devas</b> forigi la URI-on, kaj vi silente ricevas nenion. ' +
      'Celo preta akcepti raportojn por iu ajn povas publikigi \u0135okeron \u0109e <code>*._report._dmarc.</code><br><br>' +
      '<b>Dividita raportado:</b> kolektaj raportoj (XML) estas RFC 9990; po-mesa\u011daj malsukces-raportoj estas RFC 9991, kiu ankaŭ \u011disdatigas la ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc6591">RFC 6591</a>-ARF-formaton per kampo <code>Identity-Alignment</code> kaj igas la DKIM-elektilon deviga en raportoj.',
    SELECTOR_HELP:
      '<b>Kio estas DKIM-selektilo?</b> Selektilo estas mallonga etikedo (ekz. <code>google</code>) kiu sciigas ricevantajn po\u015dtservilojn kiun publikan \u015dlosilon uzi por kontroli la DKIM-subskribon de retmesa\u011do. ' +
      'Domajno povas havi plurajn selektilojn \u2014 po unu por po\u015dtprovizanto a\u016d por \u015dlosilrotacio.<br><br>' +
      '<b>Kiel trovi selektilojn:</b> Malfermu ajnan ricevitan retmesa\u011don, vidu \u011diajn kompletajn kapojn kaj ser\u0109u la kapeton <code>DKIM-Signature:</code>. ' +
      'La etikedo <code>s=</code> enhavas la selektilnomon.<br><br>' +
      '<b>Kial aldoni ekstrajn?</b> \u010cirka 85 komunaj selektilnomoj estas a\u016dtomate probitaj. ' +
      'Uzu \u010di tiun kampon por kutimaj a\u016d malkutimaj selektiloj.',
    IPV6:
      '<b>IPv6 (Interreta Protokolo versio 6)</b> estas la posteulo de IPv4; ĝi uzas 128-bitajn adresojn por solvi la elĉerpiĝon de la 32-bita adresspaco de IPv4. ' +
      'Retpoŝta infrastrukturo sen IPv6 ne povas ricevi mesaĝojn de nur-IPv6-sendantoj kaj povas iĝi neatingebla dum nur-IPv6-aliro kreskas.<br><br>' +
      '<b>Kial gravas por retpoŝto:</b> MX-gastigantoj sen AAAA-registroj ne povas akcepti mesaĝojn de nur-IPv6-sendaj serviloj. ' +
      'NS-gastigantoj sen IPv6 ne povas respondi DNS-informpetojn de nur-IPv6-solvantoj. ' +
      'Ambaŭ kaŭzas silentajn liverajn malsukcesojn kiujn estas malfacile diagnozi.<br><br>' +
      '<b>Devigaj registaraj postuloj \u2014 elektitaj landoj:</b><br>' +
      '<b>Norvegio:</b> <a href="https://lovdata.no/dokument/SF/forskrift/2013-04-05-959">Forskrift om IT-standarder i offentlig forvaltning \u00a712</a> \u2014 IPv6 deviga por registaraj servoj ekde la 1-a de januaro 2023; maksimuma prokrasto ĝis la 1-a de januaro 2025.<br>' +
      '<b>Usono:</b> OMB Memorandum M-21-07 \u2014 federaciaj agentejoj devas funkciigi nur-IPv6-infrastrukturon antaŭ la fiska jaro 2025.<br>' +
      '<b>EU:</b> European Interoperability Framework / NIS2-direktivo \u2014 antaŭenigas IPv6-pretecon por publikaj servoj de la membroŝtatoj.<br>' +
      '<b>Barato:</b> DoT National Telecom Policy 2018 \u2014 IPv6 deviga por retprovizantoj, registaro kaj publiksektoraj organizoj.<br>' +
      '<b>Ĉinio:</b> MIIT IPv6 Scale Deployment Action Plan 2017 \u2014 plena disfaldo ĉe retprovizantoj, registaro kaj grandaj platformoj.<br><br>' +
      'Tiu ĉi kontrolo informpetas AAAA-registrojn por la domajno mem, ĉiuj MX-gastigantoj kaj ĉiuj NS-gastigantoj. ' +
      'Ĝi <b>ne</b> influas la ĝeneralan sekurecan poentaron \u2014 nur informa.'
  },
};
