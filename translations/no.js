// Norsk bokmål (no) — oversettelse for DNS Email Security Checker
//
// Denne filen speiler `no`-blokken i index.html. Se CONTRIBUTING.md.
// Nøkkelsettet må være identisk med engelsk; kjør kontrollen i CONTRIBUTING.md
// etter endringer.

const LANG_NO = {
  // ── s: static strings ────────────────────────────────────────────────────
  s: {
    APP_TITLE:           'DNS e-postsikkerhetssjekk',
    APP_SUBTITLE:        'Sjekk DNSSEC, MX, SPF, DKIM og mer for et domene',
    LABEL_DOMAIN:        'Domene',
    LABEL_SELECTORS:     'Egne DKIM-selektorer (kommaseparert)',
    BTN_CHECK:           'Sjekk',
    BTN_CHECKING:        'Sjekker\u2026',
    LANG_LABEL:          'Spr\u00e5k',
    OVERVIEW_PLACEHOLDER:'Skriv inn et domenenavn som google.com eller microsoft.com, og klikk Sjekk. Merk at resultatene kan v\u00e6re feil p\u00e5 grunn av begrensninger i nettleseren din eller i nettverket du tester fra. Poengsummene er kun veiledende og viser ikke n\u00f8dvendigvis sannheten eller etterlevelse av relevante standarder.',
    RUNNING_CHECKS:      'Kj\u00f8rer sjekker\u2026',
    CHECKING:            'Sjekker\u2026',
    PANEL_DNSSEC:        'DNSSEC',
    PANEL_MX:            'MX-poster',
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
    PANEL_IPV6:          'IPv6',
    PANEL_STXT:          'Security.txt',
    PANEL_WHOIS:         'WHOIS / RDAP',
    PANEL_RECS:          'Rettinger',
    RECS_WHAT_TO_FIX:    'Hva som b\u00f8r fikses',
    RECS_INFORMATIONAL:  'Informasjon',
    RECS_NOT_SCORED:     'Rapportert, ikke poengsatt',
    RECS_ALL_GOOD:       'Alle sjekker best\u00e5tt',
    RECS_ALL_EXCELLENT:  'Alt er konfigurert optimalt.',
    GRADE_TITLE:         'Samlet karakter',
    GRADE_A_DESC:        'Sterk e-postsikkerhetskonfigurasjon.',
    GRADE_B_DESC:        'God konfigurasjon med mindre problemer.',
    GRADE_C_DESC:        'Moderate problemer \u2014 g\u00e5 gjennom advarslene.',
    GRADE_F_DESC:        'Kritiske problemer \u2014 tiltak anbefales umiddelbart.',
    RATING_EXCELLENT:    'Utmerket',
    RATING_GOOD:         'God',
    RATING_WARNING:      'Advarsel',
    RATING_FAIL:         'Feil',
    ERR_CHECK_FAILED:    'Sjekk mislyktes',
    ERR_PREFIX:          'Feil: ',
    ERR_NETWORK:         'Nettverksfeil',
    ERR_TIMEOUT:         'Tidsavbrudd',
    ERR_SCAN_FAILED:     'Skanningen kunne ikke fullf\u00f8res. Sjekk nettverkstilkoblingen og pr\u00f8v igjen.',
    NXDOMAIN_MSG:        'Domenet finnes ikke. Pr\u00f8v et annet.',
    NXDOMAIN_OK:         'OK',
    THEME_LIGHT:         '\u2600 Lyst',
    THEME_DARK:          '\u263D M\u00f8rkt',
    THEME_TO_DARK:       'Bytt til m\u00f8rkt tema',
    THEME_TO_LIGHT:      'Bytt til lyst tema',
    SETTINGS_THEME:      'Tema',
    SETTINGS_SCORING:    'Poengsystem',
    SCORING_TITLE:       'Slik beregnes scoren',
    SCORING_CLOSE:       'Lukk',
    SCORING_SCORED:      'Scorede sjekker',
    SCORING_INFO:        'Informasjon (ikke scoret)',
    SCORING_RATINGS:     'Ratingpoeng',
    SCORING_GRADES:      'Karaktergrenser',
    // Skip options
    OPT_SKIP_CORS:       'Hopp over MTA-STS- og Security.txt-sjekker for \u00e5 unng\u00e5 CORS-problemer',
    CHECK_SKIPPED:       'Denne sjekken ble hoppet over.',
    RATING_SKIP:         'Hoppet over',
    RATING_NONE:         'Ikke poengsatt',
    // Share link
    BTN_COPY_LINK:       '\uD83D\uDD17 Kopier lenke',
    BTN_COPIED:          '\u2713 Kopiert!',
    BTN_COPY_FAILED:     'Kopiering mislyktes',
    // Stats panel
    STATS_TITLE:         '\uD83E\uDD13 Statistikk',
    STATS_TOTAL_TIME:    'Total skanningstid',
    STATS_DOH_REQUESTS:  'Cloudflare DoH-foresp\u00f8rsler',
    STATS_DOH_CACHE:     'bufret',
    STATS_RIPE_REQUESTS: 'RIPE Stat API-kall',
    STATS_RIPE_CACHE:    'fra cache',
    STATS_HTTP_FETCHES:  'HTTP-hentinger',
    STATS_CHECK_TIMING:  'Tid per sjekk',
    STATS_DKIM_SELECTORS:'DKIM-velgere testet / funnet',
    STATS_IPS_RESOLVED:  'IP-er sl\u00e5tt opp (RPKI)',
    STATS_MS:            'ms',
    // DNSSEC
    DNSSEC_VALIDATED:    '\u2713 DNSSEC validert (AD=true)',
    DNSSEC_UNVALIDATED:  '\u26a0 Signert, men ikke validert av resolver (AD=false)',
    DNSSEC_RESOLVER_ONLY:'DNSSEC validert av resolver, men n\u00f8kkelposter kunne ikke hentes.',
    DNSSEC_NOT_SIGNED:   'Ingen DNSKEY-poster funnet \u2014 domenet er ikke DNSSEC-signert.',
    DNSSEC_ALG_DETAILS:  'Algoritmedetaljer',
    DNSSEC_ALG_DECIDES:  'avgj\u00f8r vurderingen',
    DNSSEC_ALG_WEAKEST_NOTE: 'En sone signeres med <b>alle</b> algoritmene i DNSKEY-settet, og en validator kan bruke hvilken som helst av dem. Vurderingen over f\u00f8lger derfor den <b>svakeste</b> algoritmen som publiseres, ikke den sterkeste \u2014 et blandet sett er bare s\u00e5 sterkt som det svakeste leddet. Dette er normalt og midlertidig under et algoritmebytte.',
    // MX
    MX_HOST_DETAILS:     'MX-vertsdetaljer',
    MX_NO_DNSSEC:        'Ingen DNSSEC',
    MX_SIGNED_UNVAL:     '\u26a0 Signert, ikke validert',
    MX_RRSET_WARN:       '\u26a0 MX RRset ikke DNSSEC-validert \u2014 listen over e-postservere kunne ikke verifiseres kryptografisk.',
    MSG_NXDOMAIN:        'NXDOMAIN \u2014 domenet finnes ikke.',
    MX_NO_RECORDS:       'Ingen MX-oppf\u00f8ringer funnet.',
    MX_NULL_CONFIRM:     '\u2713 Null MX (RFC 7505) \u2014 domenet tar ikke imot e-post.',
    DANE_NOT_APPLICABLE: 'Ingen MX-oppf\u00f8ringer \u2014 DANE er ikke aktuelt.',
    DKIM_NO_RECORDS_MSG: 'Ingen DKIM-oppf\u00f8ringer funnet for noen kjent selektor.',
    RPKI_NO_HOSTS:       'Ingen NS- eller MX-oppf\u00f8ringer \u00e5 sjekke.',
    PTR_NO_MX_HOSTS:     'Ingen MX-verter.',
    // DANE
    DANE_NO_TLSA:        'Ingen TLSA-post',
    DANE_TLSA_UNVAL:     '\u26a0 TLSA funnet, ikke DNSSEC-validert',
    DANE_NO_VALIDATED:   'Ingen DNSSEC-validerte TLSA-poster funnet.',
    DANE_TLSA_PER_MX:    'TLSA-poster per MX-vert',
    // SPF
    SPF_RECORD_ANALYSIS: 'Post og analyse',
    SPF_RECORD:          'Post',
    SPF_MECHANISMS:      'SPF-mekanismer',
    SPF_IP_ADDRESSES:    'IP-adresser',
    SPF_IP_PREFIXES:     'IP-prefikser',
    SPF_DNS_NAMES:       'DNS-navn',
    SPF_IMPLICIT:        '(implisitt)',
    // DKIM
    DKIM_FOUND_SECTION:  'Funne selektorer',
    DKIM_DNS_KEY_DETAILS:'DNS-navn og n\u00f8kkeldetaljer',
    DKIM_TH_PROVIDER:    'Leverand\u00f8r',
    DKIM_TH_PROBED:      'Selektorer testet',
    DKIM_PROV_UNKNOWN:   'Generisk / ikke leverandørspesifikk',
    DKIM_DKIM2_TITLE:    'DKIM2 — neste versjon av DKIM',
    DKIM_REVOKED:        'N\u00f8kkel tilbakekalt (tom p=-tag)',
    DKIM_KEY_TYPE:       'N\u00f8kkeltype',
    DKIM_KEY_SIZE:       'N\u00f8kkelst\u00f8rrelse',
    DKIM_BITS:           'bit',
    DKIM_BITS_EQ:        ' (256-bit ekvivalent)',
    DKIM_KEY_RATING:     'Vurdering',
    DKIM_HASH_ALGS:      'Hash-algoritmer',
    DKIM_SERVICE_TYPE:   'Tjenestetype',
    DKIM_NOTES_FIELD:    'Merknader',
    DKIM_DNSSEC:         'DNSSEC',
    DKIM_DNSSEC_OK:      '\u2713 validert',
    DKIM_DNSSEC_FAIL:    '\u2717 ikke validert',
    DKIM_NONE_FOUND_NOTE:'Dette betyr ikke at DKIM ikke er konfigurert \u2014 det betyr bare at ingen av de vanlige selectornavnene ble funnet.',
    // TLS-RPT
    TLSRPT_FOUND:        'TLS-RPT-post funnet.',
    TLSRPT_NOT_FOUND:    'Ingen TLS-RPT-post.',
    TLSRPT_RECORD_ANALYSIS: 'Post og analyse',
    // MTA-STS
    MTASTS_FOUND:        'MTA-STS DNS-post funnet.',
    MTASTS_NOT_FOUND:    'Ingen MTA-STS DNS-post.',
    MTASTS_POLICY_ANALYSIS: 'Policy og analyse',
    MTASTS_RECORD_NOTES: 'Post og merknader',
    // CAA
    CAA_NO_RECORDS:      'Ingen CAA-poster.',
    CAA_RECORDS_ANALYSIS:'Poster og analyse',
    CAA_CA_DNSSEC:       'CA-domene DNSSEC',
    CAA_DNSSEC_VALIDATED:'DNSSEC validert',
    CAA_DNSSEC_SIGNED:   'signert men ikke validert av resolver',
    CAA_DNSSEC_NONE:     'ikke DNSSEC-signert',
    CAA_DNSSEC_ERROR:    'feil: ',
    // RPKI
    RPKI_HOST_DETAILS:   'Vertsdetaljer',
    RPKI_NO_IPS:         'Ingen IP-adresser l\u00f8st opp',
    RPKI_ASPA_PROVIDERS: 'Leverand\u00f8rer:',
    // ASPA
    ASPA_NO_DATA:        'Ingen ASPA-data tilgjengelig',
    // IPv6
    IPV6_HOST_DETAILS:      'Adressedetaljer per vert',
    IPV6_NO_MX:             'Ingen MX-verter funnet',
    IPV6_NO_NS:             'Ingen NS-verter funnet',
    IPV6_MANDATORY_TITLE:   'Obligatoriske IPv6-krav',
    IPV6_MANDATORY_NOTE:    'IPv6 er p\u00e5krevd ved forskrift i f\u00f8lgende land:',
    IPV6_NO_MANDATE:        '<b>Sjekket, ingen bindende krav:</b> <b>Sverige</b> \u2014 PTS anbefaler IPv6 og foreslo i 2022 at myndigheter, kommuner og regioner skulle p\u00e5legges \u00e5 st\u00f8tte det for nettsider, e-post og DNS, men ingen slik forskrift er vedtatt. <b>Danmark</b> \u2014 IPv6 inng\u00e5r ikke i de tekniske minimumskravene for statlige myndigheter; regjeringen har opplyst at det ikke har v\u00e6rt prioritert.',
    IPV6_DOMAIN_HAS_IPV6:   '\u2713 Domenet har IPv6-adresse(r)',
    IPV6_DOMAIN_NO_IPV6:    'Domenet har ingen IPv6-adresse \u2014 kun n\u00e5dd via IPv4',
    IPV6_ALL_MX_HAVE_IPV6:  '\u2713 Alle MX-verter har IPv6-adresser',
    IPV6_SOME_MX_HAVE_IPV6: 'Noen MX-verter har IPv6 \u2014 ikke alle',
    IPV6_NO_MX_HAVE_IPV6:   'Ingen MX-verter har IPv6-adresser',
    IPV6_ALL_NS_HAVE_IPV6:  '\u2713 Alle NS-verter har IPv6-adresser',
    IPV6_SOME_NS_HAVE_IPV6: 'Noen NS-verter har IPv6 \u2014 ikke alle',
    IPV6_NO_NS_HAVE_IPV6:   'Ingen NS-verter har IPv6-adresser',
    IPV6_MX_BADGE_YES:      'IPv6',
    IPV6_MX_BADGE_NO:       'Ingen IPv6',
    SPF_NO_IP6_MECHS:       'MX/NS-verter st\u00f8tter IPv6, men ingen ip6:-oppf\u00f8ringer er funnet i SPF-posten \u2014 hvis dette domenet sender e-post over IPv6, legg til ip6:-mekanismer for \u00e5 autorisere disse adressene',
    // Security.txt
    STXT_FOUND:          '\u2713 security.txt funnet',
    STXT_RAW:            'R\u00e5 security.txt',
    STXT_NOT_FOUND:      'Ikke funnet.',
    STXT_CORS_BLOCKED:   'Kunne ikke hente security.txt \u2014 serveren tillater ikke kryssopprinnelsesforesp\u00f8rsler (CORS). Filen kan finnes; sjekk manuelt:',
    STXT_CHECK_MANUALLY: 'URL-er sjekket:',
    CORS_SECURITY_NOTE:  'Dette er bra \u2014 serveren har bedre enn normal sikkerhet! Men p\u00e5 grunn av dette kan denne sjekken ikke fullf\u00f8res automatisk.',
    // WHOIS
    WHOIS_RDAP_OK:       '\u2713 RDAP-data hentet',
    WHOIS_ROW_REGISTRAR: 'Registrar',
    WHOIS_ROW_CREATED:   'Opprettet',
    WHOIS_ROW_UPDATED:   'Oppdatert',
    WHOIS_ROW_EXPIRES:   'Utl\u00f8per',
    WHOIS_ROW_HANDLE:    'Handle',
    WHOIS_ROW_STATUS:    'Status',
    WHOIS_NS_TITLE:      'Navneservere',
    WHOIS_EXPIRED:       '\u26a0 Domeneregistreringen har utl\u00f8pt!',
    WHOIS_FAILED:        'RDAP-oppslag mislyktes.',
    // SPF issue keys
    SPF_ORIGINAL_RECORD: 'Opprinnelig SPF-post',
    SPF_PTR_DEPRECATED:  'ptr-mekanismen er utg\u00e5tt',
    SPF_MISSING_ALL:     'Mangler "all"-mekanisme \u2014 policyen er ufullstendig',
    SPF_ALL_HARDFAIL:    '"-all" (hard feil) \u2014 uautoriserte avsendere avvises',
    SPF_ALL_SOFTFAIL:    '"~all" (myk feil) \u2014 uautoriserte avsendere merkes men kan leveres',
    SPF_ALL_NEUTRAL:     '"?all" (n\u00f8ytral) \u2014 gir ingen beskyttelse',
    SPF_NO_RECORD:       'Ingen SPF-post funnet',
    // TLS-RPT issue keys
    TLSRPT_NO_RECORD_NXDOMAIN: 'Ingen TLS-RPT-post \u2014 TLS-feilrapporter for SMTP vil ikke mottas',
    TLSRPT_NO_RECORD:    'Ingen TLS-RPT-post funnet',
    TLSRPT_MULTI_RECORDS:'Flere TLS-RPT-poster funnet \u2014 m\u00e5 v\u00e6re n\u00f8yaktig \u00e9n',
    TLSRPT_NO_RUA:       'Ingen rua=-rapporterings-URI \u2014 rapporter kan ikke leveres',
    // MTA-STS issue keys
    MTASTS_NO_RECORD_NXDOMAIN: 'Ingen MTA-STS DNS-post \u2014 inng\u00e5ende TLS-levering h\u00e5ndheves ikke',
    MTASTS_NO_RECORD:    'Ingen MTA-STS DNS-post funnet',
    MTASTS_MULTI_RECORDS:'Flere MTA-STS DNS-poster funnet \u2014 m\u00e5 v\u00e6re n\u00f8yaktig \u00e9n',
    MTASTS_NO_ID:        'MTA-STS-posten mangler p\u00e5krevd id=-felt',
    MTASTS_MODE_ENFORCE: 'Policy-modus: enforce \u2014 TLS p\u00e5krevd, levering uten TLS avvises',
    MTASTS_MODE_TESTING: 'Policy-modus: testing \u2014 overv\u00e5ker TLS-feil uten h\u00e5ndhevelse',
    MTASTS_MODE_NONE:    'Policy-modus: none \u2014 MTA-STS er eksplisitt deaktivert',
    // CAA issue keys
    CAA_NO_RECORDS_ISSUE:'Ingen CAA-poster \u2014 enhver sertifiseringsinstans kan utstede sertifikater for dette domenet',
    CAA_NXDOMAIN:        'NXDOMAIN \u2014 domenet finnes ikke.',
    CAA_ISSUE_PROHIBITED:'Sertifikatutstedelse forbudt for alle CAer (issue ";")',
    CAA_NO_IODEF:        'Ingen iodef=-tag \u2014 CA-policybrudd vil ikke rapporteres',
    // Security.txt issue keys
    STXT_NO_CONTACT:     'Mangler p\u00e5krevd Contact-felt.',
    STXT_NO_EXPIRES:     'Mangler Expires-felt \u2014 p\u00e5krevd av',
    STXT_BAD_DATE:       'Expires-feltet har ugyldig datoformat.',
    STXT_ENCRYPTION:     'Krypteringsn\u00f8kkel lenket.',
    STXT_POLICY:         'Policy for s\u00e5rbarhetsavsl\u00f8ring lenket.',
    // DMARC static keys
    DMARC_FOUND:         'DMARC-post funnet.',
    DMARC_NOT_FOUND:     'Ingen DMARC-post.',
    DMARC_RECORD_ANALYSIS: 'Post og analyse',
    DMARC_POLICY_NONE:   'p=none \u2014 kun overv\u00e5king, ingen h\u00e5ndhevelse',
    DMARC_POLICY_QUARANTINE: 'p=quarantine \u2014 mistenkelige meldinger sendes til spam',
    DMARC_POLICY_REJECT: 'p=reject \u2014 uautoriserte meldinger avvises',
    DMARC_SP_REJECT:     'sp=reject \u2014 underdomener: uautoriserte meldinger avvises',
    DMARC_SP_QUARANTINE: 'sp=quarantine \u2014 underdomener: mistenkelige meldinger sendes til spam',
    DMARC_SP_NONE:       'sp=none \u2014 underdomener: ingen h\u00e5ndhevelse',
    DMARC_ADKIM_STRICT:  'adkim=s \u2014 DKIM-identifikatortilpasning: streng',
    DMARC_ASPF_STRICT:   'aspf=s \u2014 SPF-identifikatortilpasning: streng',
    DMARC_NO_RUA:        'Ingen rua= \u2014 aggregerte DMARC-rapporter vil ikke mottas',
    // DMARC issue keys (static)
    DMARC_NO_RECORD_NXDOMAIN: 'Ingen DMARC-post \u2014 uautoriserte avsendere kan ikke avvises',
    DMARC_NO_RECORD:     'Ingen DMARC-post funnet',
    DMARC_MULTI_RECORDS: 'Flere DMARC-poster \u2014 m\u00e5 v\u00e6re n\u00f8yaktig \u00e9n',
    // DMARCbis (RFC 9989 / 9990 / 9991) \u2014 seksjonsetiketter
    DMARCBIS_TITLE:            'DMARCbis-samsvar \u2014 RFC 9989 / 9990 / 9991',
    DMARCBIS_INTRO:            'RFC 9989 erstatter RFC 7489 og RFC 9091, og deler rapportering i RFC 9990 (aggregert) og RFC 9991 (feilrapporter). Disse kontrollene er informative og p\u00e5virker ikke karakteren.',
    DMARCBIS_DISCOVERY_TITLE:  'Policyoppslag \u2014 DNS-trevandring (RFC 9989 \u00a74.10)',
    DMARCBIS_TAGS_TITLE:       'Taggsamsvar (RFC 9989 \u00a74.7, \u00a79.3)',
    DMARCBIS_EXTAUTH_TITLE:    'Autorisasjon av ekstern rapportmottaker (RFC 9990 \u00a74, RFC 9991 \u00a75)',
    DMARCBIS_SUGGESTED_TITLE:  'Foresl\u00e5tt RFC 9989-post',
    DMARCBIS_SUGGESTED_NOTE:   'Historiske og uregistrerte tagger fjernet, pct=0 erstattet med t=y, og taggene RFC 9989 anbefaler p\u00e5 et organisasjonsdomene lagt til. Policyverdien er beholdt uendret \u2014 kontroller f\u00f8r publisering.',
    DMARCBIS_TW_TAG_AUTHOR:    'avsenderdomene',
    DMARCBIS_TW_TAG_ORG:       'organisasjonsdomene',
    DMARCBIS_TW_STEP_FOUND:    'post',
    DMARCBIS_TW_STEP_NONE:     'ingen',
    DMARCBIS_TW_STEP_MULTI:    'flere',
    DMARCBIS_TW_STEP_ERROR:    'feil',
    // DMARCbis-avviksn\u00f8kler (statiske)
    DMARCBIS_TW_NO_POLICY:     'Ingen DMARC-policypost noe sted i trevandringen \u2014 mottakere utf\u00f8rer ingen DMARC-behandling for dette domenet',
    DMARCBIS_TW_MULTI:         'Et steg i trevandringen returnerte flere DMARC-poster \u2014 RFC 9989 \u00a74.10 forkaster dem alle',
    DMARCBIS_TAGS_CLEAN:       'Alle tagger er registrert som aktive i RFC 9989 \u00a79.3 \u2014 ingen historiske, uregistrerte eller ugyldige tagger',
    DMARCBIS_V_NOT_FIRST:      'v= mangler eller er ikke f\u00f8rste tagg \u2014 RFC 9989 \u00a74.7 krever at hele posten ignoreres',
    DMARCBIS_P_DEFAULT_NONE:   'Ingen gyldig p=-tagg \u2014 RFC 9989 \u00a74.10.1: siden rua= finnes, behandler mottakere posten som p=none',
    DMARCBIS_P_NO_PROCESSING:  'Ingen gyldig p=-tagg og ingen rua= \u2014 RFC 9989 \u00a74.10.1: mottakere utf\u00f8rer ingen DMARC-behandling i det hele tatt',
    DMARCBIS_PCT_ZERO:         'pct=0 er historisk i RFC 9989 \u2014 erstatt den med t=y, taggen som n\u00e5 har denne betydningen (tillegg A.6)',
    DMARCBIS_PCT_FULL:         'pct=100 er historisk i RFC 9989 og var allerede standardverdien \u2014 fjern taggen',
    DMARCBIS_T_NO_EFFECT:      't=y har ingen virkning s\u00e5 lenge policyen er none \u2014 RFC 9989 \u00a74.7',
    DMARCBIS_T_ENFORCED:       't=n \u2014 den publiserte policyen h\u00e5ndheves som skrevet (RFC 9989-standard)',
    DMARCBIS_NP_REJECT:        'np=reject \u2014 e-post fra ikke-eksisterende underdomener avvises (RFC 9989 \u00a74.7)',
    DMARCBIS_NP_MISSING:       'Ingen np=-tagg \u2014 RFC 9989 innf\u00f8rer den for ikke-eksisterende underdomener; np=reject anbefales p\u00e5 et organisasjonsdomene',
    DMARCBIS_PSD_Y:            'psd=y \u2014 erkl\u00e6rt som offentlig suffiksdomene; trevandringen stopper her (RFC 9989 \u00a74.10.2)',
    DMARCBIS_PSD_N:            'psd=n \u2014 erkl\u00e6rt som organisasjonsdomene; trevandringen stopper her (RFC 9989 \u00a74.10.2)',
    DMARCBIS_PSD_U:            'psd=u \u2014 organisasjonsdomenet overlates til trevandringen (RFC 9989-standard)',
    DMARCBIS_PSD_MISSING:      'Ingen psd=-tagg \u2014 \u00e5 publisere psd=n p\u00e5 organisasjonsdomenet avslutter trevandringen umiddelbart og fjerner all tvil',
    DMARCBIS_FO_NO_RUF:        'fo= finnes uten ruf= \u2014 RFC 9989 \u00a74.7 krever at innholdet ignoreres',
    DMARCBIS_URI_NO_MAILTO:    'Ingen mailto:-URI i rua= \u2014 mottakere m\u00e5 bare st\u00f8tte mailto:, s\u00e5 andre skjemaer kan bli ignorert',
    DMARCBIS_EXT_NONE:         'Ingen rua= eller ruf=-URI-er \u00e5 autorisere \u2014 uten aggregerte rapporter er det ingen innsikt i DMARC-feil',
    // MX null record suggestion
    MX_NULL_SUGGEST:     'Ingen MX-poster \u2014 vurder \u00e5 publisere en null MX-post (RFC 7505) sammen med SPF \u201e-all\u201c og DMARC p=reject for \u00e5 fullstendig blokkere e-postmisbruk',
    // BIMI issue keys
    BIMI_FOUND:          'BIMI-post funnet.',
    BIMI_NOT_FOUND:      'Ingen BIMI-post.',
    BIMI_RECORD_ANALYSIS:'Post og analyse',
    BIMI_NO_RECORD:      'Ingen BIMI-post \u2014 merkevarelogo vises ikke i st\u00f8ttede e-postklienter',
    BIMI_NO_LOGO:        'l= (logo-URL) mangler eller er tom \u2014 p\u00e5krevd for at BIMI skal fungere',
    BIMI_NO_AUTHORITY:   'a= (autoritetsdokumentasjon) mangler \u2014 VMC-sertifikat kreves av Gmail og andre leverand\u00f8rer for \u00e5 vise logoen',
    BIMI_LOGO_OK:        'Logo-URL',
    BIMI_AUTHORITY_OK:   'Autoritet (VMC)',
    // PTR issue keys
    PTR_HOST_DETAILS:    'Vertsdetaljer',
    PTR_NO_MX:           'Ingen MX-verter \u00e5 sjekke PTR-poster for',
    PTR_MATCH:           'FCrDNS bekreftet \u2014 PTR samsvarer med MX-vertsnavn',
    PTR_MISMATCH:        'PTR til stede men samsvarer ikke med MX-vertsnavn',
    PTR_MISSING:         'Ingen PTR-post funnet',
    // MTA-STS MX match keys
    MTASTS_MX_MATCH:     'Alle MX-verter samsvarer med MTA-STS-policy mx:-m\u00f8nstre',
    MTASTS_MX_MISMATCH:  '\u00c9n eller flere MX-verter dekkes ikke av noen policy mx:-m\u00f8nster',
    MTASTS_MX_NO_PATTERNS: 'MTA-STS-policyen har ingen mx:-linjer',
    // Keys added in later releases — backfilled
    SPF_LEGACY_TYPE: 'Utdatert SPF-posttype (DNS-type 99) funnet — avviklet siden RFC 7208 (2014); bør fjernes',
    SPF_PROPAGATION_MISMATCH: 'SPF-posten er forskjellig mellom Cloudflare- og Google-DNS-resolvere — ufullstendig propagering eller feilkonfigurasjon',
    DMARC_PROPAGATION_MISMATCH: 'DMARC-posten er forskjellig mellom Cloudflare- og Google-DNS-resolvere — ufullstendig propagering eller feilkonfigurasjon',
    DKIM_ROTATION_NOTE: 'Beste praksis: roter DKIM-nøkler minst årlig. Nøkkelalder kan ikke fastslås fra DNS — bekreft rotasjonspolicy med e-postleverandøren din.',
    CAA_ISSUEMAIL_NOTE: 'issuemail-tagg til stede — styrer utstedelse av S/MIME-sertifikater for dette domenet (RFC 8657)',
    RPKI_NS_DIVERSITY: 'ASN-spredning for navnetjenere',
    RPKI_NS_NO_ASN_DATA: 'Ingen ASN-data tilgjengelig for navnetjenerne',
    // ISP BGP safety (isbgpsafeyet.com method)
    BGP_ISP_TITLE:       'Er internettleverandøren din BGP-trygg?',
    BGP_ISP_SAFE:        'Internettleverandøren din forkastet den RPKI-ugyldige testruten — den filtrerer ugyldige BGP-annonseringer (validering av ruteopprinnelse).',
    BGP_ISP_UNSAFE:      'Internettleverandøren din godtok en RPKI-ugyldig testrute — den filtrerer ikke ugyldige BGP-annonseringer og gir ingen beskyttelse mot BGP-kapring.',
    BGP_ISP_WARP:        'Du er tilkoblet via Cloudflare WARP, som allerede beskytter trafikken din mot BGP-kapring — men den skjuler internettleverandøren din, så testen kan ikke måle den. Koble fra WARP og skann på nytt for å teste internettleverandøren din.',
    BGP_ISP_ERROR:       'Testendepunktene kunne ikke nås — resultatet er ukjent. Testen kjøres på nytt ved neste skanning.',
    BGP_ISP_ATTRIBUTION: 'Testmetode fra Cloudflare:',
    BGP_ISP_BADGE_SAFE:  'Trygg',
    BGP_ISP_BADGE_UNSAFE:'Ikke trygg',
    BGP_ISP_BADGE_WARP:  'WARP',
    BGP_ISP_BADGE_ERROR: 'Ukjent',
    OVERVIEW_PROVIDERS: 'Oppdaget e-postinfrastruktur',
  },
  // ── d: dynamic strings (arrow functions) ─────────────────────────────────
  d: {
    MX_HOSTS_FOUND:        n => n + ' MX-vert' + (n !== 1 ? 'er' : '') + ' funnet.',
    DKIM_SELECTORS_FOUND:  n => n + ' selektor' + (n !== 1 ? 'er' : '') + ' funnet',
    DKIM_ACROSS_PROVIDERS: n => 'hos ' + n + ' leverand\u00f8r' + (n !== 1 ? 'er' : ''),
    DKIM_SELECTORS_TESTED: n => n + ' selektorer testet.',
    DKIM_NONE_FOUND:       n => 'Ingen DKIM-selektorer funnet. ' + n + ' selektorer ble testet.',
    DKIM_AUTO_TESTED:      n => n + ' selektorer testet automatisk',
    SPF_FOUND_LOOKUPS:     n => 'SPF-post funnet. ' + n + ' DNS-oppslagsmekanisme' + (n !== 1 ? 'r' : '') + '.',
    SPF_MULTI_RECORDS:     n => 'Flere SPF-poster funnet (' + n + ') \u2014 m\u00e5 v\u00e6re n\u00f8yaktig \u00e9n',
    SPF_MULTI_MESSAGE:     n => 'Flere SPF-poster (' + n + ') \u2014 dette er en konfigurasjonsfeil.',
    SPF_LOOKUP_EXCEED:     n => n + ' DNS-oppslagsmekanismer overskrider RFC-grensen p\u00e5 10 (kan f\u00f8re til SPF PermError)',
    SPF_LOOKUP_HIGH:       n => n + ' DNS-oppslagsmekanismer \u2014 n\u00e6rmer seg RFC-grensen p\u00e5 10',
    SPF_IP4_BROAD:         (v, p) => 'ip4:' + v + ' har et sv\u00e6rt bredt omr\u00e5de (/' + p + ' \u2264 /16)',
    SPF_IP6_BROAD:         (v, p) => 'ip6:' + v + ' har et sv\u00e6rt bredt omr\u00e5de (/' + p + ' \u2264 /32)',
    SPF_REDIRECT_FOLLOWED: d => '\u2713 redirect= fulgt \u2014 effektiv policy lastet fra: ' + d,
    SPF_REDIRECT_FROM:     d => 'Effektiv policy (redirect \u2192 ' + d + ')',
    SPF_REDIRECT_NO_RECORD:d => 'redirect=-m\u00e5l har ingen SPF-post: ' + d,
    SPF_REDIRECT_MULTI:    d => 'redirect=-m\u00e5l har flere SPF-poster: ' + d,
    SPF_REDIRECT_ERROR:    d => 'Kunne ikke hente redirect=-m\u00e5l: ' + d,
    CAA_RECORDS_FOUND:     n => n + ' CAA-post' + (n !== 1 ? 'er' : '') + ' funnet.',
    CAA_AUTHORIZED_CA:     n => 'Autorisert CA' + (n !== 1 ? 'er' : '') + ': ',
    CAA_CRITICAL_COUNT:    n => n + ' post(er) med kritisk flagg satt \u2014 CAer som ikke forst\u00e5r taggen m\u00e5 nekte utstedelse',
    DANE_VALIDATED_OF:     (v, t) => v + ' av ' + t + ' MX-vert' + (t !== 1 ? 'er' : '') + ' har DNSSEC-validerte TLSA-poster.',
    TLSA_RECORDS_COUNT:    n => n + ' TLSA-poster',
    RPKI_SUMMARY:          (valid, total, inv, noRoa) => valid + '/' + total + ' IP' + (total !== 1 ? 'er' : '') + ' dekket av gyldig ROA' + (inv > 0 ? ' \u2014 ' + inv + ' ugyldig' : '') + (noRoa > 0 ? ' \u2014 ' + noRoa + ' ingen ROA' : ''),
    ASPA_SUMMARY:          (pub, total) => pub + '/' + total + ' ASN' + (total !== 1 ? 'er' : '') + ' med publisert ASPA',
    BGP_ISP_NOTE:          dom => 'Dette tester internettforbindelsen du surfer fra — den er urelatert til ' + dom + ' og påvirker aldri noen vurdering, poengsum eller karakter.',
    TLSRPT_ENDPOINT:       uri => 'Rapporteringsendepunkt: ' + uri,
    TLSRPT_BAD_URI:        uri => 'Ukjent rua= URI-skjema: ' + uri,
    MTASTS_MAX_AGE_LOW:    age => 'max_age=' + age + 's er under 1 dag \u2014 vurder 604800 (1 uke) eller mer',
    MTASTS_POLICY_UNKNOWN: mode => 'Ukjent eller manglende policy-modus: ' + (mode || '(tom)'),
    MTASTS_POLICY_ERROR:   (e, url) => e + ' \u2014 verifiser: ' + url,
    STXT_EXPIRES_WARN:     n => 'Utl\u00f8per om ' + n + ' dager \u2014 forny snart.',
    STXT_EXPIRES_OK:       (d, n) => 'Utl\u00f8per: ' + d + ' (' + n + ' dager).',
    STXT_EXPIRED:          d => 'security.txt har utl\u00f8pt (' + d + ').',
    WHOIS_EXPIRES_SOON:    n => '\u26a0 Domenet utl\u00f8per om ' + n + ' dager \u2014 forny snart.',
    DOMAIN_INVALID:        d => '"' + d + '" ser ikke ut som et gyldig domene.',
    SPF_ALL_PASSALL:       q => '"' + q + 'all" (tillat alle) \u2014 lar enhver server sende som dette domenet',
    CAA_IODEF:             v => 'Hendelsesrapportering (iodef): ' + v,
    STXT_CONTACT_OK:       v => 'Kontakt: ' + v,
    DMARC_POLICY_UNKNOWN:  p => 'Ukjent p=-verdi: ' + p,
    DMARC_PCT_LOW:         pct => 'pct=' + pct + ' \u2014 policy h\u00e5ndheves kun for ' + pct + '% av meldingene',
    DMARC_RUA_URI:         uri => 'Aggregerte rapporter (rua): ' + uri,
    DMARC_RUF_URI:         uri => 'Rettsmessige rapporter (ruf): ' + uri,
    // DMARCbis (RFC 9989 / 9990 / 9991)
    DMARCBIS_TW_AT_AUTHOR:   dom => 'Policypost publisert på avsenderdomenet (_dmarc.' + dom + ') — dette er posten mottakere bruker',
    DMARCBIS_TW_INHERITED:   (dom, tag, val) => 'Ingen post på avsenderdomenet — mottakere arver policyen publisert på _dmarc.' + dom + ' og bruker ' + tag + '=' + val,
    DMARCBIS_TW_ORG_DOMAIN:  (dom, rule) => 'Organisasjonsdomene: ' + dom + ' — ' + ({
                               'psd-n':    'fastsatt av psd=n',
                               'psd-y':    'ett nivå under en psd=y-post',
                               'shortest': 'korteste navn i trevandringen med en DMARC-post',
                               'default':  'ingen post funnet i trevandringen, så det spurte domenet brukes',
                             }[rule] || rule),
    DMARCBIS_TW_QUERIES:     n => 'Trevandring — ' + n + (n === 1 ? ' oppslag' : ' oppslag'),
    DMARCBIS_V_CASE:         v => 'v=' + v + ' — versjonsverdien skiller mellom store og små bokstaver i RFC 9989 §4.7 og må være nøyaktig DMARC1',
    DMARCBIS_DUPLICATE_TAGS: l => 'Tagg gjentatt i posten: ' + l + ' — RFC 9989 §4.8 regner dette som en syntaksfeil',
    DMARCBIS_PCT_PARTIAL:    v => 'pct=' + v + ' ble fjernet i RFC 9989 (tillegg A.6) — delvise prosentandeler ble håndtert ulikt av mottakere; bruk t=y under testing, ellers fjern taggen',
    DMARCBIS_RF_HISTORIC:    v => 'rf=' + v + ' er historisk i taggregisteret i RFC 9989 §9.3 — fjern den',
    DMARCBIS_RI_HISTORIC:    v => 'ri=' + v + ' er historisk i taggregisteret i RFC 9989 §9.3 — fjern den',
    DMARCBIS_T_INVALID:      v => 't=' + v + ' er ugyldig — RFC 9989 §4.7 tillater bare y eller n',
    DMARCBIS_T_TESTING:      (p, eff) => 't=y — testmodus: mottakere bruker ' + eff + ' i stedet for den publiserte p=' + p + ' (RFC 9989 §4.7)',
    DMARCBIS_NP_INVALID:     v => 'np=' + v + ' er ugyldig — RFC 9989 §4.7 tillater bare none, quarantine eller reject',
    DMARCBIS_NP_SET:         v => 'np=' + v + ' — policy for ikke-eksisterende underdomener (RFC 9989 §4.7)',
    DMARCBIS_PSD_INVALID:    v => 'psd=' + v + ' er ugyldig — RFC 9989 §4.7 tillater bare y, n eller u',
    DMARCBIS_SP_INVALID:     v => 'sp=' + v + ' er ugyldig — RFC 9989 §4.7 tillater bare none, quarantine eller reject',
    DMARCBIS_SP_IGNORED:     org => 'sp= ignoreres i denne posten — RFC 9989 §4.7: policyoppslag leser bare sp= fra organisasjonsdomenet (' + org + ')',
    DMARCBIS_ALIGN_INVALID:  (tag, v) => tag + '=' + v + ' er ugyldig — RFC 9989 §4.7 tillater bare r eller s',
    DMARCBIS_FO_INVALID:     v => 'fo=' + v + ' samsvarer ikke med syntaksen i RFC 9989 §4.8 — gyldige verdier er 0, 1, d og s, kolonseparert, der 0 og 1 utelukker hverandre',
    DMARCBIS_URI_OBS_SIZE:   l => 'Utdatert !size-suffiks i en rapport-URI: ' + l + ' — RFC 9989 §4.8 ber rapportgeneratorer ignorere det',
    DMARCBIS_UNKNOWN_TAGS:   l => 'Uregistrert(e) tagg(er): ' + l + ' — finnes ikke i registeret i RFC 9989 §9.3, så mottakere må ignorere dem',
    DMARCBIS_EXT_INTERNAL:   (tag, uri) => tag + '=' + uri + ' — samme organisasjonsdomene, ingen autorisasjonspost nødvendig',
    DMARCBIS_EXT_AUTHORIZED: (tag, uri, name) => tag + '=' + uri + ' — ekstern mottaker autorisert av ' + name,
    DMARCBIS_EXT_MISSING:    (tag, uri, name) => tag + '=' + uri + ' — ekstern mottaker IKKE autorisert: ingen v=DMARC1 TXT-post på ' + name + '; mottakere må ignorere denne URI-en og sender ingen rapporter',
    DMARCBIS_EXT_OVERRIDE:   (tag, uri, name, ov) => tag + '=' + uri + ' — autorisert av ' + name + ', som omdirigerer rapporter til ' + ov,
    DMARCBIS_EXT_OVERRIDE_BAD: (tag, uri, name, ov) => tag + '=' + uri + ' — autorisasjonsposten på ' + name + ' omdirigerer til ' + ov + ' på en annen vert; RFC 9990 §4 forbyr å sende til noen av adressene',
    DMARCBIS_EXT_TOO_LONG:   (tag, uri) => tag + '=' + uri + ' — autorisasjonsnavnet overskrider DNS-lengdegrensene, så forholdet kan ikke bekreftes (RFC 9990 §4 steg 4)',
    DMARCBIS_EXT_UNPARSABLE: (tag, uri) => tag + '=' + uri + ' — ingen vert kunne hentes ut av denne URI-en',
    DMARCBIS_EXT_ERROR:      (tag, uri, name) => tag + '=' + uri + ' — oppslaget for ' + name + ' feilet; autorisasjon kunne ikke bekreftes',
    BIMI_LOGO_URL:         url => 'Logo-URL: ' + url,
    BIMI_AUTHORITY_URL:    url => 'Autoritets-URL: ' + url,
    IPV6_MX_SUMMARY:       (n, t) => n + '/' + t + ' MX-vert' + (t !== 1 ? 'er' : '') + ' har IPv6.',
    IPV6_NS_SUMMARY:       (n, t) => n + '/' + t + ' NS-vert' + (t !== 1 ? 'er' : '') + ' har IPv6.',
    // Keys added in later releases — backfilled
    SPF_LOOKUP_TOTAL_EXCEED: n => n + ' totale DNS-oppslag (inkludert nøstede include) overskrider RFC 7208-grensen på 10 — mottakere vil returnere SPF PermError',
    SPF_LOOKUP_TOTAL_HIGH: n => n + ' totale DNS-oppslag (inkludert nøstede include) — nærmer seg RFC 7208-grensen på 10',
    SPF_FOUND_LOOKUPS_TOTAL: (direct, total) => 'SPF-post funnet. ' + direct + ' direkte + ' + total + ' totale DNS-oppslag (rekursivt).',
    RPKI_NS_SINGLE_ASN: (asn, holder) => 'Alle navnetjenere på ett enkelt ASN (' + asn + (holder ? ' — ' + holder : '') + ') — enkeltpunkt for feil i DNS-rutingen',
    RPKI_NS_MULTI_ASN: n => 'Navnetjenerne fordeler seg på ' + n + ' ulike ASN-er — god rutingredundans',
  },
  // ── x: explanation strings (HTML) ────────────────────────────────────────
  x: {
    DMARC:
      '<b>DMARC (Domain-based Message Authentication, Reporting and Conformance)</b> ' +
      'knytter SPF og DKIM sammen med en policy som forteller mottakere hva de skal gj\u00f8re n\u00e5r autentisering mislykkes. ' +
      'Opprinnelig <a href="https://www.rfc-editor.org/rfc/rfc7489">RFC 7489</a>, n\u00e5 standardisert som <a href="https://www.rfc-editor.org/rfc/rfc9989">RFC 9989</a> (\u00abDMARCbis\u00bb), som ogs\u00e5 erstatter <a href="https://www.rfc-editor.org/rfc/rfc9091">RFC 9091</a> (PSD DMARC). Se DMARCbis-seksjonen nedenfor for samsvar med den nyere spesifikasjonen.<br><br>' +
      '<b>Policy (p=):</b> <b>reject</b> \u2014 autentisering feiler \u2192 forkast meldingen (sterkest). ' +
      '<b>quarantine</b> \u2014 send til spam. <b>none</b> \u2014 kun overv\u00e5king, ingen handling.<br><br>' +
      '<b>Identifikatortilpasning:</b> DMARC krever at domenet i <code>From:</code>-headeren samsvarer med domenet autentisert av SPF eller DKIM. ' +
      '<b>Avslappet</b> (standard) tillater treff p\u00e5 organisasjonsdomenet; <b>streng</b> (<code>adkim=s</code> / <code>aspf=s</code>) krever n\u00f8yaktig treff.<br><br>' +
      '<b>Rapportering:</b> <code>rua=</code> mottar aggregerte XML-rapporter (anbefalt), definert i ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9990">RFC 9990</a>. ' +
      '<code>ruf=</code> mottar feilrapporter per melding, definert i ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9991">RFC 9991</a> (sensitiv \u2014 bruk med forsiktighet).<br><br>' +
      '<b>Underdomene-policy (sp=):</b> Hvis utelatt arver underdomener <code>p=</code>. ' +
      'Sett <code>sp=reject</code> for \u00e5 eksplisitt beskytte alle underdomener. ' +
      'RFC 9989 innf\u00f8rer <code>np=</code> for underdomener som ikke finnes i det hele tatt.<br><br>' +
      '<b>pct=:</b> Brukte policyen p\u00e5 den angitte prosentandelen av feilede meldinger. ' +
      '<b>Fjernet i RFC 9989</b> \u2014 <code>pct=0</code> skrives n\u00e5 <code>t=y</code>, og alle andre verdier b\u00f8r ganske enkelt fjernes.<br><br>' +
      '<b>Eksempel p\u00e5 DNS-poster:</b><br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"</code> — kun overv\u00e5king<br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=quarantine; sp=quarantine; rua=mailto:dmarc@example.com"</code> — karantene<br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=reject; sp=reject; np=reject; adkim=s; aspf=s; rua=mailto:dmarc@example.com; psd=n"</code> — full h\u00e5ndhevelse, RFC 9989-stil',
    DMARCBIS:
      '<b>DMARCbis</b> er 2026-revisjonen av DMARC, publisert som tre dokumenter: ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9989">RFC 9989</a> (protokollen), ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9990">RFC 9990</a> (aggregert rapportering) og ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9991">RFC 9991</a> (feilrapportering). ' +
      'Poster skrevet for RFC 7489 fungerer fortsatt \u2014 ingenting her \u00f8delegger en eksisterende oppsett \u2014 men flere tagger har endret status.<br><br>' +
      '<b>Hva er endret:</b><br>' +
      '\u2022 <code>pct=</code> er borte (tillegg A.6). Mottakere h\u00e5ndterte delvise prosentandeler ulikt; bare <code>pct=0</code> viste seg nyttig, og den heter n\u00e5 <code>t=y</code>.<br>' +
      '\u2022 <code>t=</code> (testmodus) er ny: med <code>t=y</code> bruker mottakere ett niv\u00e5 under den publiserte policyen \u2014 <code>reject</code> oppf\u00f8rer seg som <code>quarantine</code>, <code>quarantine</code> som <code>none</code>.<br>' +
      '\u2022 <code>np=</code> setter policy for <b>ikke-eksisterende</b> underdomener, atskilt fra <code>sp=</code> som d\u00e6kker de eksisterende.<br>' +
      '\u2022 <code>psd=</code> merker et offentlig suffiksdomene (<code>y</code>) eller fastsetter et organisasjonsdomene (<code>n</code>). Begge verdier avslutter trevandringen umiddelbart.<br>' +
      '\u2022 <code>rf=</code> og <code>ri=</code> er historiske i taggregisteret (\u00a79.3) og b\u00f8r fjernes.<br><br>' +
      '<b>DNS-trevandring (\u00a74.10):</b> Public Suffix List brukes ikke lenger for \u00e5 finne organisasjonsdomenet. ' +
      'Mottakere sp\u00f8r etter <code>_dmarc.</code> p\u00e5 avsenderdomenet og g\u00e5r deretter oppover etikett for etikett \u2014 h\u00f8yst \u00e5tte oppslag \u2014 til de finner en post ' +
      'eller en som b\u00e6rer <code>psd=y</code> / <code>psd=n</code>. Dette lar store organisasjoner publisere policy flere steder i navnerommet.<br><br>' +
      '<b>Autorisasjon av ekstern rapportmottaker (RFC 9990 \u00a74, RFC 9991 \u00a75):</b> hvis <code>rua=</code> eller <code>ruf=</code> peker utenfor organisasjonsdomenet ditt, ' +
      'm\u00e5 mottakeren publisere <code>ditt-domene._report._dmarc.deres-domene</code> med minst <code>v=DMARC1</code>. ' +
      'Uten den <b>m\u00e5</b> mottakere forkaste URI-en, og du mottar ingenting uten varsel. ' +
      'En mottaker som gjerne tar imot rapporter for hvem som helst kan publisere et jokertegn p\u00e5 <code>*._report._dmarc.</code><br><br>' +
      '<b>Delt rapportering:</b> aggregerte rapporter (XML) er RFC 9990; feilrapporter per melding er RFC 9991, som ogs\u00e5 oppdaterer ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc6591">RFC 6591</a>-ARF-formatet med et <code>Identity-Alignment</code>-felt og gj\u00f8r DKIM-selektoren obligatorisk i rapporter.',
    DNSSEC:
      '<b>Hva er DNSSEC?</b> DNSSEC (<a href="https://www.rfc-editor.org/rfc/rfc4033">RFC 4033</a>) legger til kryptografiske signaturer p\u00e5 DNS-poster ' +
      'og beskytter mot cache-forgiftning og mann-i-midten-angrep. ' +
      '<b>AD-flagget</b> (Authentic Data) fra Cloudflares resolver bekrefter at hele kjeden fra rot til dette domenet er validert.<br><br>' +
      '<b>Algoritmerangeringer</b> f\u00f8lger <a href="https://www.rfc-editor.org/rfc/rfc8624">RFC 8624</a>: <b>Ed25519</b> (alg 15) og <b>ECDSA P-256</b> (alg 13) er de sterkeste. ' +
      'RSA/SHA-256 (alg 8) er akseptabel. RSA/SHA-1 (alg 5) og DSA-varianter er svake eller brutte. ' +
      'N\u00e5r en sone publiserer flere algoritmer, signeres den med alle, og en validator kan bruke hvilken som helst \u2014 derfor f\u00f8lger vurderingen den <b>svakeste</b> som finnes.<br><br>' +
      '<b>DNSSEC aktiverer DANE:</b> Uten DNSSEC-validert DNS kan ikke TLSA-poster stoles p\u00e5 \u2014 ' +
      'en angriper kunne erstatte falske TLSA-poster.',
    MX:
      '<b>MX-poster (Mail eXchange)</b> (<a href="https://www.rfc-editor.org/rfc/rfc5321">RFC 5321</a>) forteller andre servere hvor de skal levere e-post for domenet ditt. ' +
      'Lavere prioritetstall fors\u00f8kes f\u00f8rst (prioritet 10 f\u00f8r 20).<br><br>' +
      '<b>Hvorfor DNSSEC p\u00e5 MX er viktig:</b> En angriper som kan forfalske MX-poster kan omdirigere all innkommende e-post. ' +
      'DNSSEC-validerte MX-poster forhindrer dette. DNSSEC for hvert MX-vertsnavn sjekkes ved sonetoppen.',
    DANE:
      '<b>DANE</b> (<a href="https://www.rfc-editor.org/rfc/rfc7672">RFC 7672</a>) bruker TLSA-poster (<a href="https://www.rfc-editor.org/rfc/rfc6698">RFC 6698</a>) for \u00e5 la e-postservere verifisere TLS-sertifikater ' +
      'uten \u00e5 stole p\u00e5 kommersielle CAer. Sp\u00f8rres p\u00e5 <b>_25._tcp.<mx-vertsnavn></b>.<br><br>' +
      '<b>TLSA-brukskoder:</b> ' +
      '<b>DANE-EE (3)</b> \u2014 festes til sluttenhetssertifikat (sterkest). ' +
      '<b>DANE-TA (2)</b> \u2014 festes til et tillitsanker. ' +
      '<b>PKIX-EE (1)</b> / <b>PKIX-TA (0)</b> \u2014 krever CA-validering pluss TLSA-treff.<br><br>' +
      '<b>Sammenlignende typer:</b> SHA-256 (1) og SHA-512 (2) anbefales. N\u00f8yaktig match (0) er uforutsigbar ved sertifikatrotasjon.<br><br>' +
      '<b>DNSSEC p\u00e5krevd:</b> Uten DNSSEC kan TLSA-poster forfalskes og DANE gir ingen sikkerhet.',
    SPF:
      '<b>SPF (Sender Policy Framework, <a href="https://www.rfc-editor.org/rfc/rfc7208">RFC 7208</a>)</b> angir hvilke servere som er autorisert til \u00e5 sende e-post for domenet ditt. ' +
      'Mottaksservere sjekker om avsender-IP samsvarer.<br><br>' +
      '<b>Kvalifikatorer:</b> <b>-all</b> (hard feil) avviser uautoriserte avsendere \u2014 sterkest. ' +
      '<b>~all</b> (myk feil) markerer dem som mistenkelige. <b>?all</b> (n\u00f8ytral) gir ingen beskyttelse. ' +
      '<b>+all</b> tillater hvem som helst \u2014 aldri bruk dette.<br><br>' +
      '<b>Mekanismer:</b> <b>include:</b> delegerer til et annet domene. ' +
      '<b>ip4:</b>/<b>ip6:</b> autoriserer IP-omr\u00e5der. <b>mx</b> autoriserer MX-vertene dine.<br><br>' +
      '<b>10-oppslagsgrense (<a href="https://www.rfc-editor.org/rfc/rfc7208#section-4.6.4">RFC 7208 \u00a74.6.4</a>):</b> Mer enn 10 DNS-sp\u00f8rrende mekanismer f\u00f8rer til PermError.',
    DKIM:
      '<b>Hva er en DKIM-selektor?</b> DKIM (<a href="https://www.rfc-editor.org/rfc/rfc6376">RFC 6376</a>) bruker offentlig-n\u00f8kkelkryptografi for \u00e5 signere utg\u00e5ende e-post. ' +
      'En selektor (f.eks. <code>google</code>) er en etikett som peker til en DKIM-offentlig n\u00f8kkel ' +
      'publisert p\u00e5 <code><selektor>._domainkey.<domene></code>. ' +
      'Et domene kan ha flere selektorer \u2014 \u00e9n per e-postleverand\u00f8r eller for n\u00f8kkelrotasjon.<br><br>' +
      '<b>Finne selektorer:</b> Se p\u00e5 <code>DKIM-Signature:</code>-headeren i en mottatt e-post. ' +
      '<code>s=</code>-taggen inneholder selektoren. Egne selektorer kan ikke oppdages automatisk.<br><br>' +
      '<b>N\u00f8kkelposttagger (<a href="https://www.rfc-editor.org/rfc/rfc6376">RFC 6376</a> \u00a73.6.1):</b><br>' +
      '<b>k=</b> n\u00f8kkeltype: <b>ed25519</b> anbefales (kompakt, sterk). <b>rsa</b> er standard hvis fraværende.<br>' +
      '<b>h=</b> tillatte hash-algoritmer. <b>sha256</b> er den eneste anbefalte verdien. ' +
      '<b>sha1</b> ble utfaset i <a href="https://www.rfc-editor.org/rfc/rfc8301">RFC 8301</a> (2018) og m\u00e5 ikke brukes. ' +
      'Hvis fraværende er alle algoritmer implisitt tillatt \u2014 legg eksplisitt til <code>h=sha256</code> for \u00e5 begrense til kun sterk algoritme.<br>' +
      '<b>s=</b> tjenestetype: <b>email</b> begrenser n\u00f8kkelen til e-postbruk (anbefalt). ' +
      '<b>*</b> (standard hvis fraværende) tillater bruk for enhver tjeneste.<br>' +
      '<b>t=y</b> markerer n\u00f8kkelen som i testmodus \u2014 verifiserende servere b\u00f8r ikke avvise feil. Fjern fra produksjonn\u00f8kler.<br>' +
      '<b>t=s</b> deaktiverer n\u00f8kkelarv for underdomener \u2014 underdomener m\u00e5 publisere egne DKIM-n\u00f8kler.<br>' +
      '<b>p=</b> offentlig n\u00f8kkel (base64). En tom verdi tilbakekaller n\u00f8kkelen, som er anbefalt m\u00e5te \u00e5 avvikle en selektor p\u00e5.<br>' +
      '<b>v=</b> versjon: <code>DKIM1</code> er valgfritt men anbefalt for tydelighetens skyld. Enhver annen verdi ugyldiggj\u00f8r posten.<br>' +
      '<b>n=</b> merknader: menneskelig lesbar tekst som ignoreres av verifiseringsservere.<br><br>' +
      '<b>N\u00f8kkelst\u00f8rrelser:</b> <b>Ed25519</b> er sterkest og mest kompakt. ' +
      '<b>RSA-2048</b> er minimumsanbefalingen. ' +
      '<b>RSA-1024</b> er svak og b\u00f8r erstattes umiddelbart.<br><br>' +
      '<b>DNSSEC p\u00e5 DKIM-poster</b> forhindrer at en angriper erstatter din offentlige n\u00f8kkel i DNS.',
    DKIM2:
      'IETFs DKIM-arbeidsgruppe utvikler <b>DKIM2</b>, en etterf\u00f8lger til DKIM1 ' +
      '(<a href="https://www.rfc-editor.org/rfc/rfc6376">RFC 6376</a>) som ogs\u00e5 overtar oppgaven til ARC ' +
      '(<a href="https://www.rfc-editor.org/rfc/rfc8617">RFC 8617</a>). Det er fortsatt et Internet-Draft \u2014 ' +
      'ingenting skal tas i bruk enn\u00e5, og denne testen sjekker ikke for det.<br><br>' +
      '<b>Hva endres:</b> hvert ledd som h\u00e5ndterer en melding legger til sin egen signatur, i stedet for at ' +
      'kun avsenderdomenet signerer \u00e9n gang. Hver signatur registrerer SMTP-konvolutten (<code>MAIL FROM</code> og ' +
      '<code>RCPT TO</code>) i det leddet, og bygger en verifiserbar sporingskjede. Endringer gjort underveis av ' +
      'e-postlister og videresendere beskrives med "oppskrifter" som f\u00f8lger meldingen, slik at mottakeren kan ' +
      'gjenskape originalen og fortsatt validere signaturen. Dette retter seg mot de to problemene DKIM1 ikke ' +
      'kan h\u00e5ndtere: \u00f8delagt videresending og replay-angrep.<br><br>' +
      '<b>Hva forblir likt:</b> n\u00f8kler publiseres fortsatt i DNS p\u00e5 ' +
      '<code><selector>._domainkey.<domene></code>, fortsatt som <code>v=DKIM1</code>-poster med ' +
      '<code>k=</code>- og <code>p=</code>-tagger, s\u00e5 eksisterende n\u00f8kler videref\u00f8res uendret. ' +
      '<code>rsa-sha256</code> forblir obligatorisk, <code>ed25519-sha256</code> anbefales, og ' +
      '<code>rsa-sha1</code> avvises helt. Taggene <code>h=</code>, <code>n=</code> og <code>s=</code> ' +
      'utg\u00e5r.<br><br>' +
      '<b>Status:</b> <code>draft-ietf-dkim-dkim2-spec</code> er arbeidsgruppens vedtatte dokument, ved siden av ' +
      'egne utkast for DNS-koding og beste praksis. Uavhengige implementasjoner i Rust, Python og Go viste ' +
      'interoperabilitet i juli 2026. Ingenting er RFC enn\u00e5, s\u00e5 ingen tiltak kreves i dag \u2014 men n\u00f8kkelhygienen ' +
      'du retter opp n\u00e5 (Ed25519 eller RSA-2048, <code>h=sha256</code>, DNSSEC) videref\u00f8res direkte til DKIM2.<br><br>' +
      '<b>Mer informasjon:</b><br>' +
      '<a href="https://datatracker.ietf.org/wg/dkim/documents/">IETF DKIM-arbeidsgruppen \u2014 alle dokumenter</a><br>' +
      '<a href="https://datatracker.ietf.org/doc/draft-ietf-dkim-dkim2-spec/">draft-ietf-dkim-dkim2-spec \u2014 kjernespesifikasjonen</a><br>' +
      '<a href="https://datatracker.ietf.org/doc/draft-ietf-dkim-dkim2-dns/">draft-ietf-dkim-dkim2-dns \u2014 domenenavnspesifikasjon</a><br>' +
      '<a href="https://datatracker.ietf.org/doc/draft-ietf-dkim-dkim2-bcp/">draft-ietf-dkim-dkim2-bcp \u2014 beste praksis</a><br>' +
      '<a href="https://datatracker.ietf.org/doc/draft-ietf-dkim-dkim2-motivation/">draft-ietf-dkim-dkim2-motivation \u2014 bakgrunn og begrunnelse</a>',
    TLSRPT:
      '<b>TLS-RPT (<a href="https://www.rfc-editor.org/rfc/rfc8460">RFC 8460</a>)</b> gj\u00f8r det mulig \u00e5 motta TLS-feilrapporter fra avsendende e-postservere. ' +
      'Publiseres som en TXT-post p\u00e5 <code>_smtp._tls.<domene></code>.<br><br>' +
      '<b>rua=-endepunkter:</b> Rapporter sendes til <code>mailto:</code>-adresser eller <code>https:</code>-aggregeringstjenester. ' +
      'HTTPS-endepunkter vurderes som utmerkede; mailto som gode.<br><br>' +
      '<b>Hva rapporter inneholder:</b> Aggregerte JSON-data \u2014 vellykkede TLS-tilkoblinger, h\u00e5ndtrykkfeil, ' +
      'sertifikatfeil og policybrudd. Nyttig for \u00e5 diagnostisere MTA-STS- og DANE-problemer.<br><br>' +
      '<b>Eksempel p\u00e5 DNS-poster:</b><br>' +
      '<code>_smtp._tls.example.com. TXT "v=TLSRPTv1; rua=mailto:tlsrpt@example.com"</code><br>' +
      '<code>_smtp._tls.example.com. TXT "v=TLSRPTv1; rua=https://tlsrpt.example.com/v1"</code> — HTTPS-aggregeringsendepunkt',
    MTASTS:
      '<b>MTA-STS (<a href="https://www.rfc-editor.org/rfc/rfc8461">RFC 8461</a>)</b> instruerer avsendende servere om \u00e5 kreve TLS ved levering til domenet ditt ' +
      'og om \u00e5 validere e-postserverens sertifikat. ' +
      'DNS-post p\u00e5 <code>_mta-sts.<domene></code>; ' +
      'policy p\u00e5 <code>https://mta-sts.<domene>/.well-known/mta-sts.txt</code>.<br><br>' +
      '<b>Policy-moduser:</b> <b>enforce</b> \u2014 TLS p\u00e5krevd med gyldig sertifikat, ellers avvises levering. ' +
      '<b>testing</b> \u2014 samle TLS-RPT-data uten h\u00e5ndhevelse. ' +
      '<b>none</b> \u2014 eksplisitt deaktivert.<br><br>' +
      '<b>max_age:</b> Sekunder avsendere bufrer policyen. 604800 (1 uke) eller 31557600 (1 \u00e5r) er typisk.<br><br>' +
      '<b>Eksempel p\u00e5 DNS-post:</b><br>' +
      '<code>_mta-sts.example.com. TXT "v=STSv1; id=20240101000000"</code><br><br>' +
      '<b>Eksempel p\u00e5 policyfil</b> p\u00e5 <code>https://mta-sts.example.com/.well-known/mta-sts.txt</code>:<br>' +
      '<code>version: STSv1</code><br>' +
      '<code>mode: enforce</code><br>' +
      '<code>mx: mail.example.com</code><br>' +
      '<code>max_age: 604800</code>',
    CAA:
      '<b>CAA (Certification Authority Authorization, <a href="https://www.rfc-editor.org/rfc/rfc8659">RFC 8659</a>)</b> begrenser hvilke CAer som kan utstede TLS-sertifikater.<br><br>' +
      '<b>Tagger:</b> <b>issue</b> \u2014 autoriserer en CA for vanlige sertifikater (f.eks. <code>issue "letsencrypt.org"</code>). ' +
      '<b>issuewild</b> \u2014 autoriserer en CA for jokertegnsertifikater. ' +
      '<b>iodef</b> \u2014 hvor CAer skal rapportere policybrudd.<br><br>' +
      '<b>S/MIME-sertifikater (issuemail, <a href="https://www.rfc-editor.org/rfc/rfc9495">RFC 9495</a>):</b> ' +
      '<b>issuemail</b>-taggen kontrollerer hvilke CAer som kan utstede S/MIME-sertifikater for e-postadresser i domenet ditt. ' +
      'Hvis fraværende styrer <b>issue</b>-taggen ogs\u00e5 S/MIME-utstedelse. ' +
      'Sett <code>issuemail ";"</code> for \u00e5 forby all S/MIME-utstedelse fra domenet ditt.<br><br>' +
      '<b>BIMI VMC-sertifikater:</b> Verified Mark Certificates (VMC) brukt for BIMI-autoritetspostene styres av den vanlige <b>issue</b>-taggen \u2014 det finnes ingen egen VMC-spesifikk tag. ' +
      'Kun et f\u00e5tall CAer utsteder VMCer for \u00f8yeblikket (DigiCert, Entrust). ' +
      'Hvis du bruker BIMI med VMC (<code>a=</code>-tag), s\u00f8rg for at <b>issue</b>-postene inkluderer din VMC-leverand\u00f8r.<br><br>' +
      '<b>Kritisk flagg:</b> CAer som ikke forst\u00e5r en kritisk tagget tag m\u00e5 nekte utstedelse. ' +
      'Bruk med forsiktighet \u2014 ukjente kritiske tagger kan blokkere all sertifikatutstedelse.<br><br>' +
      '<b>Uten CAA-poster</b> kan enhver CA som best\u00e5r domenevalidering utstede sertifikater.<br><br>' +
      '<b>Eksempel p\u00e5 DNS-poster:</b><br>' +
      '<code>example.com. CAA 0 issue "letsencrypt.org"</code><br>' +
      '<code>example.com. CAA 0 issue "sectigo.com"</code><br>' +
      '<code>example.com. CAA 0 issuewild "letsencrypt.org"</code><br>' +
      '<code>example.com. CAA 0 issuemail "sectigo.com"</code><br>' +
      '<code>example.com. CAA 0 iodef "mailto:caa-violations@example.com"</code>',
    RPKI:
      '<b>RPKI (Resource Public Key Infrastructure)</b> lar IP-adresseinnehavere publisere Route Origin Authorizations (ROAer) ' +
      'som spesifiserer hvilke ASN-er som er autorisert til \u00e5 annonsere prefiksene deres.<br><br>' +
      '<b>Gyldig</b> \u2014 en samsvarende ROA finnes: prefikset er beskyttet mot BGP-kapring. ' +
      '<b>Ugyldig</b> \u2014 en ROA finnes men autoriserer IKKE gjeldende annonsering: ruten kan filtreres av RPKI-validerende rutere. ' +
      '<b>Ingen ROA</b> \u2014 ingen ROA funnet: prefikset er ubeskyttet men kan fortsatt rutes.<br><br>' +
      'Denne sjekken l\u00f8ser opp IP-adresser for alle NS- og MX-verter og sp\u00f8r RIPE Stat for \u00e5 validere hvert prefiks mot sitt opprinnelses-ASN. ' +
      'RPKI beskytter e-postinfrastruktur mot BGP-rutekapring som kan omdirigere eller avskj\u00e6re e-posttrafikk.<br><br>' +
      '<b>Er internettleverand\u00f8ren din BGP-trygg?</b> tester forbindelsen du surfer fra, ikke det skannede domenet: ' +
      'den henter \u00e9n testressurs annonsert med en gyldig ROA og \u00e9n annonsert fra et uautorisert ASN. ' +
      'Hvis den ugyldige lastes, godtar internettleverand\u00f8ren din kaprede ruter. ' +
      'Basert p\u00e5 Cloudflares <a href="https://isbgpsafeyet.com">isbgpsafeyet.com</a> (MIT-lisensiert). ' +
      'Resultatet er kun til informasjon og p\u00e5virker aldri noen poengsum.',
    ASPA:
      '<b>ASPA (Autonomous System Provider Authorization, <a href="https://www.rfc-editor.org/rfc/rfc9582">RFC 9582</a>)</b> lar et AS erkl\u00e6re hvilke oppstr\u00f8ms-leverand\u00f8rer det er autorisert til \u00e5 bruke. ' +
      'Publiserte ASPA-poster muliggj\u00f8r deteksjon av rutelekk: hvis trafikk ankommer gjennom en uautorisert leverand\u00f8r, kan ASPA-bevisste rutere avvise den.<br><br>' +
      '<b>Publisert</b> \u2014 ASPA-post finnes med erkl\u00e6rte leverand\u00f8rer. ' +
      '<b>Ingen ASPA</b> \u2014 ingen post publisert; rutelekker for dette AS-et kan ikke oppdages av ASPA-bevisste rutere.<br><br>' +
      'Denne sjekken leser ASPA-data hentet under RPKI-sjekken og viser leverand\u00f8rautorisasjonsposter for alle ASN-er tilknyttet domenets NS- og MX-verter.<br><br>' +
      '<b>Merk:</b> RFC 9582 er fortsatt en foreslått standard og faktisk distribusjon er forel\u00f8pig svært begrenset. ' +
      'Derfor p\u00e5virker manglende ASPA-poster ikke poengsummen din \u2014 denne sjekken er rent informativ for n\u00e5. ' +
      'Likevel er det verdt \u00e5 kontakte din hostingleverand\u00f8r eller internettleverand\u00f8r(er) og sp\u00f8rre om de f\u00f8lger utviklingen av ASPA og vurderer distribusjon.',
    STXT:
      '<b>security.txt (<a href="https://www.rfc-editor.org/rfc/rfc9116">RFC 9116</a>)</b> er en standard for publisering av informasjon om s\u00e5rbarhetsavsl\u00f8ring.<br><br>' +
      'Plasser filen p\u00e5 <code>/.well-known/security.txt</code> (foretrukket) eller <code>/security.txt</code>.<br><br>' +
      '<b>P\u00e5krevde felt:</b> <code>Contact</code> \u2014 hvor s\u00e5rbarheter skal rapporteres (e-post, URL eller telefon). ' +
      '<code>Expires</code> \u2014 ISO 8601-dato etter hvilken filen ikke skal stoles p\u00e5.<br><br>' +
      '<b>Valgfrie felt:</b> <code>Encryption</code> (GPG-n\u00f8kkel-URL), <code>Policy</code> (policy-URL for avsl\u00f8ring), ' +
      '<code>Acknowledgments</code>, <code>Preferred-Languages</code>, <code>Canonical</code>, <code>Hiring</code>.<br><br>' +
      '<b>Eksempelfil:</b><br>' +
      '<code>Contact: mailto:security@example.com</code><br>' +
      '<code>Contact: https://example.com/security/report</code><br>' +
      '<code>Expires: 2027-01-01T00:00:00Z</code><br>' +
      '<code>Encryption: https://example.com/pgp-key.asc</code><br>' +
      '<code>Policy: https://example.com/security/policy</code><br>' +
      '<code>Preferred-Languages: en, no</code><br>' +
      '<code>Canonical: https://example.com/.well-known/security.txt</code><br><br>' +
      'Bruk <a href="https://securitytxt.org/">securitytxt.org</a> for \u00e5 generere og signere filen din.',
    WHOIS:
      '<b>WHOIS / RDAP</b> gir domenregistreringsdata via Registration Data Access Protocol (<a href="https://www.rfc-editor.org/rfc/rfc7480">RFC 7480</a>).<br><br>' +
      'Data hentes fra den autoritative RDAP-serveren for domenets TLD via <code>rdap.org</code>.<br><br>' +
      '<b>Nykkelfelter:</b> <b>Registrar</b> \u2014 hvem som administrerer registreringen. ' +
      '<b>Utl\u00f8per</b> \u2014 n\u00e5r registreringen m\u00e5 fornyes. ' +
      '<b>Status</b> \u2014 domenel\u00e5ser (f.eks. <code>clientTransferProhibited</code> forhindrer uautorisert overf\u00f8ring).<br><br>' +
      'RDAP erstatter den eldre ren-tekst WHOIS-protokollen (<a href="https://www.rfc-editor.org/rfc/rfc3912">RFC 3912</a>) med et strukturert JSON-basert API.<br><br>' +
      '<b>Merk:</b> Et nylig opprettet domene er en anerkjent indikator p\u00e5 redusert tillit og \u00f8kt risiko for at domenet brukes til distribusjon av skadelig programvare, phishing eller svindel. ' +
      'Hvis du sjekker et domene du ikke eier eller kontrollerer, b\u00f8r en svært nylig opprettelsesdato behandles som et advarselstegn \u2014 v\u00e6r ekstra forsiktig og verifiser grundig f\u00f8r du samhandler med e-post eller tjenester fra det domenet.',
    BIMI:
      '<b>BIMI er bredt ansett som en markedsf\u00f8ringsting som ikke gir noen ekstra sikkerhetsverdi for noen. \u00c5 vise en logo i en innboks for \u00e5 \u00abbekrefte\u00bb den ekte avsenderen er som et GIF-bilde som sier \u00ab100 % garantert\u00bb. Hvis du fortsatt vil betale CA-er for det, v\u00e6r s\u00e5 god.</b><br><br>' +
      '<b>BIMI (Brand Indicators for Message Identification)</b> lar organisasjoner vise logoen sin i e-postklienter som st\u00f8tter det (f.eks. Gmail, Apple Mail, Yahoo).<br><br>' +
      '<b>DNS-post:</b> Publiseres som en TXT-post p\u00e5 <code>default._bimi.<domene></code>.<br><br>' +
      '<b>l= (logo-URL):</b> En URL til en SVG-logofil. P\u00e5krevd for at BIMI skal fungere. ' +
      'SVG-en m\u00e5 v\u00e6re et kvadratisk, profils\u00f8mmelig bilde tilgjengelig via HTTPS.<br><br>' +
      '<b>a= (autoritetsdokumentasjon):</b> En URL til et Verified Mark Certificate (VMC) utstedt av en autorisert CA. ' +
      'P\u00e5krevd av de fleste store klienter (inkludert Gmail) for faktisk \u00e5 vise logoen. Uten VMC er posten kun informativ.<br><br>' +
      '<b>Krav:</b> DMARC m\u00e5 v\u00e6re i <code>p=quarantine</code> eller <code>p=reject</code> h\u00e5ndhevelsesmodus. ' +
      'BIMI p\u00e5virker ikke e-postsikkerhet direkte \u2014 det er en merkevaresynlighetsfunksjon.',
    PTR:
      '<b>PTR-poster</b> (pekerposter) kartlegger IP-adresser tilbake til vertsnavn \u2014 det omvendte av A/AAAA-poster.<br><br>' +
      '<b>FCrDNS (Forward-Confirmed reverse DNS):</b> En PTR-post er "fremoverbekreftet" n\u00e5r PTR-verdien l\u00f8ses frem til den opprinnelige IP-adressen. ' +
      'Mange spamfiltre og mottakende MTAer sjekker FCrDNS for MX-verter. Et samsvar bygger tillit; en manglende eller feil-matchende PTR kan \u00f8ke spamskorer.<br><br>' +
      '<b>IPv4:</b> Reversert som <code>d.c.b.a.in-addr.arpa</code>. ' +
      '<b>IPv6:</b> Utvidet til 32 hex-nibbler, reversert og lagt til <code>.ip6.arpa</code>.<br><br>' +
      '<b>Denne sjekken</b> l\u00f8ser A- og AAAA-poster for hver MX-vert, sp\u00f8r PTR for hver IP, og bekrefter om PTR-verdien samsvarer med MX-vertsnavnet. ' +
      'P\u00e5virker ikke den samlede karakteren.',
    IPV6:
      '<b>IPv6 (Internettprotokoll versjon 6)</b> er etterfølgeren til IPv4, og bruker 128-bits adresser for å løse uttømmingen av IPv4-adresserommet. ' +
      'E-postinfrastruktur uten IPv6 kan ikke motta e-post fra IPv6-eksklusivt sendende servere og kan bli utilgjengelig etter hvert som IPv6-eksklusiv tilgang vokser.<br><br>' +
      '<b>Obligatorisk krav i Norge:</b> <a href="https://lovdata.no/dokument/SF/forskrift/2013-04-05-959">Forskrift om IT-standarder i offentlig forvaltning §12</a> ' +
      'stiller krav om at offentlige virksomheter skal støtte IPv6 for sine nettsteder og tjenester. Kravet ble obligatorisk fra 1. januar 2023, med mulighet for inntil 2 års utsettelse til 1. januar 2025.<br><br>' +
      '<b>Relevans for e-post:</b> MX-verter uten AAAA-poster kan ikke ta imot e-post fra IPv6-eksklusivt sendende servere. ' +
      'NS-verter uten IPv6 kan ikke svare på DNS-forespørsler fra IPv6-eksklusivt løsende klienter. ' +
      'Begge deler kan forårsake lydløse leveringsfeil som er vanskelige å feilsøke.<br><br>' +
      '<b>Obligatoriske myndighetskrav — utvalgte land:</b><br>' +
      '<b>Norge:</b> <a href="https://lovdata.no/dokument/SF/forskrift/2013-04-05-959">Forskrift om IT-standarder i offentlig forvaltning §12</a> \u2014 IPv6 obligatorisk for offentlige tjenester fra 1. januar 2023; maksimal utsettelse til 1. januar 2025.<br>' +
      '<b>Nederland:</b> <a href="https://www.forumstandaardisatie.nl/open-standaarden/ipv6">IPv6 på Forum Standaardisaties «pas toe of leg uit»-liste</a> siden 2010; en avtale for hele offentlig sektor krever at alle offentlige virksomheter er tilgjengelige over IPv6 for <b>nettsider og e-post</b> fra 31. desember 2021.<br>' +
      '<b>USA:</b> OMB-memo M-21-07 \u2014 føderale etater skal drive IPv6-eksklusiv infrastruktur innen FY2025.<br>' +
      '<b>Tyskland:</b> <a href="https://www.it-planungsrat.de/beschluss/beschluss-2018-42">Netzstrategie 2030 für die öffentliche Verwaltung</a> \u2014 vedtak i IT-Planungsrat (2019) om innføring av IPv6 i offentlig forvaltnings nett.<br>' +
      '<b>India:</b> DoT nasjonal telekomspolicy 2018 \u2014 IPv6 obligatorisk for ISP-er, offentlige og statlige virksomheter.<br>' +
      '<b>Kina:</b> MIITs handlingsplan for IPv6-skalering 2017 \u2014 full distribusjon hos ISP-er, offentlig sektor og store plattformer.<br>' +
      '<b>EU:</b> <a href="https://ec.europa.eu/isa2/sites/default/files/ipv6_framework_for_european_governments_0.pdf">IPv6 Framework for European Governments</a> \u2014 veiledning for medlemsstatene, <b>ikke</b> et bindende krav. I motsetning til en vanlig påstand stiller ikke NIS2 krav om IPv6.<br><br>' +
      '<b>Ingen bindende krav:</b> <b>Sverige</b> \u2014 PTS anbefaler IPv6 og foreslo i 2022 at myndigheter, kommuner og regioner skulle pålegges å støtte det for nettsider, e-post og DNS, men ingen forskrift er vedtatt. <b>Danmark</b> \u2014 IPv6 inngår ikke i de tekniske minimumskravene for statlige myndigheter.<br><br>' +
      'Denne sjekken spør etter AAAA-poster for selve domenet, alle MX-verter og alle NS-verter. ' +
      'Det påvirker <b>ikke</b> den samlede sikkerhetsscoren \u2014 kun informativt.',
    SELECTOR_HELP:
      '<b>Hva er en DKIM-selektor?</b> En selektor er en kort etikett (f.eks. <code>google</code>) som forteller mottakende e-postservere hvilken offentlig n\u00f8kkel de skal bruke n\u00e5r de bekrefter DKIM-signaturen p\u00e5 en e-post. ' +
      'Et domene kan ha flere selektorer \u2014 \u00e9n per e-postleverand\u00f8r eller for n\u00f8kkelrotasjon.<br><br>' +
      '<b>Slik finner du selektorer:</b> \u00c5pne en mottatt e-post, vis fullstendige hoder og se etter <code>DKIM-Signature:</code>-hodet. ' +
      '<code>s=</code>-taggen inneholder selektornavnet. I Gmail: klikk trepunktmenyen \u2192 \u00abVis original\u00bb.<br><br>' +
      '<b>Hvorfor legge til ekstra her?</b> Ca. 85 vanlige selektornavn testes automatisk. ' +
      'Bruk dette feltet for egendefinerte eller sjeldne selektorer.',
  },
};
