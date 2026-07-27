// हिन्दी (hi) — DNS ईमेल सुरक्षा जाँचकर्ता का अनुवाद

const LANG_HI = {

  // ── s: स्थिर स्ट्रिंग ────────────────────────────────────────────────────────
  s: {
    APP_TITLE:           'DNS ईमेल सुरक्षा जाँचकर्ता',
    APP_SUBTITLE:        'किसी भी डोमेन के लिए DNSSEC, MX, SPF, DKIM और अधिक जाँचें',
    LABEL_DOMAIN:        'डोमेन',
    LABEL_SELECTORS:     'अतिरिक्त DKIM सिलेक्टर (अल्पविराम से अलग)',
    BTN_CHECK:           'जाँचें',
    BTN_CHECKING:        'जाँच जारी है\u2026',
    BTN_COPY_LINK:       '\uD83D\uDD17 लिंक कॉपी करें',
    BTN_COPIED:          '\u2713 कॉपी हो गया!',
    LANG_LABEL:          'भाषा',
    OVERVIEW_PLACEHOLDER:'google.com या microsoft.com जैसा कोई डोमेन नाम टाइप करें और जाँचें पर क्लिक करें। कृपया ध्यान दें कि आपके ब्राउज़र या नेटवर्क की सीमाओं के कारण परिणाम सटीक नहीं हो सकते। स्कोर केवल संकेतक उद्देश्यों के लिए हैं और ये अनिवार्य रूप से पूरी सच्चाई या मानकों के अनुपालन को नहीं दर्शाते।',
    RUNNING_CHECKS:      'जाँचें चल रही हैं\u2026',
    CHECKING:            'जाँच जारी है\u2026',

    PANEL_DNSSEC:        'DNSSEC',
    PANEL_MX:            'MX रिकॉर्ड',
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
    PANEL_RECS:          'सुधार',

    RECS_WHAT_TO_FIX:    'क्या ठीक करें',
    RECS_INFORMATIONAL:  'सूचनात्मक',
    RECS_ALL_GOOD:       'सभी जाँचें सफल',
    RECS_ALL_EXCELLENT:  'सब कुछ इष्टतम रूप से कॉन्फ़िगर है।',

    GRADE_TITLE:         'समग्र ग्रेड',
    GRADE_A_DESC:        'मजबूत ईमेल सुरक्षा कॉन्फ़िगरेशन।',
    GRADE_B_DESC:        'मामूली समस्याओं के साथ अच्छा कॉन्फ़िगरेशन।',
    GRADE_C_DESC:        'मध्यम समस्याएं \u2014 चेतावनियाँ जाँचें।',
    GRADE_F_DESC:        'गंभीर समस्याएं \u2014 तत्काल कार्रवाई की सिफारिश।',

    RATING_EXCELLENT:    'उत्कृष्ट',
    RATING_GOOD:         'अच्छा',
    RATING_WARNING:      'चेतावनी',
    RATING_FAIL:         'विफल',
    RATING_SKIP:         'छोड़ा गया',

    ERR_INVALID_DOMAIN:  'वैध डोमेन नहीं लगता।',
    ERR_CHECK_FAILED:    'जाँच विफल',
    ERR_PREFIX:          'त्रुटि: ',

    THEME_LIGHT:         '\u2600 हल्का',
    THEME_DARK:          '\u263D गहरा',
    THEME_TO_DARK:       'गहरी थीम पर स्विच करें',
    THEME_TO_LIGHT:      'हल्की थीम पर स्विच करें',
    SETTINGS_THEME:      'थीम',
    SETTINGS_SCORING:    'स्कोरिंग सिस्टम',
    SCORING_TITLE:       'स्कोरिंग कैसे काम करती है',
    SCORING_CLOSE:       'बंद करें',
    SCORING_SCORED:      'स्कोर की गई जाँचें',
    SCORING_INFO:        'सूचनात्मक (स्कोर नहीं)',
    SCORING_RATINGS:     'रेटिंग अंक',
    SCORING_GRADES:      'ग्रेड सीमाएं',

    OPT_SKIP_CORS:       'CORS समस्याओं से बचने के लिए MTA-STS और Security.txt जाँच छोड़ें',
    CHECK_SKIPPED:       'यह जाँच छोड़ दी गई।',

    STATS_TITLE:         '\uD83E\uDD13 आँकड़े',
    STATS_TOTAL_TIME:    'कुल स्कैन समय',
    STATS_DOH_REQUESTS:  'Cloudflare DoH क्वेरी',
    STATS_RIPE_REQUESTS: 'RIPE Stat API कॉल',
    STATS_RIPE_CACHE:    'कैश से',
    STATS_HTTP_FETCHES:  'HTTP अनुरोध',
    STATS_CHECK_TIMING:  'प्रति जाँच समय',
    STATS_DKIM_SELECTORS:'DKIM सिलेक्टर परीक्षित / पाए गए',
    STATS_IPS_RESOLVED:  'IP पते हल किए गए (RPKI)',
    STATS_MS:            'ms',

    DNSSEC_VALIDATED:    '\u2713 DNSSEC सत्यापित (AD=true)',
    DNSSEC_UNVALIDATED:  '\u26a0 हस्ताक्षरित लेकिन रिज़ॉल्वर द्वारा सत्यापित नहीं (AD=false)',
    DNSSEC_RESOLVER_ONLY:'रिज़ॉल्वर द्वारा DNSSEC सत्यापित, लेकिन की रिकॉर्ड नहीं मिले।',
    DNSSEC_NOT_SIGNED:   'कोई DNSKEY रिकॉर्ड नहीं मिला \u2014 डोमेन DNSSEC-हस्ताक्षरित नहीं है।',
    DNSSEC_ALG_DETAILS:  'एल्गोरिदम विवरण',

    MX_HOST_DETAILS:     'MX सर्वर विवरण',
    MX_NO_DNSSEC:        'DNSSEC नहीं',
    MX_SIGNED_UNVAL:     '\u26a0 हस्ताक्षरित, सत्यापित नहीं',
    MX_RRSET_WARN:       '\u26a0 MX RRset DNSSEC से सत्यापित नहीं \u2014 मेल सर्वरों की सूची क्रिप्टोग्राफिक रूप से सत्यापित नहीं हो सकी।',
    MX_NULL_SUGGEST:     'कोई MX रिकॉर्ड नहीं \u2014 null MX रिकॉर्ड (RFC 7505) प्रकाशित करने पर विचार करें साथ में SPF "-all" और DMARC p=reject से ईमेल दुरुपयोग पूरी तरह रोकें',

    DANE_NO_TLSA:        'कोई TLSA रिकॉर्ड नहीं',
    DANE_TLSA_UNVAL:     '\u26a0 TLSA मिला, DNSSEC से सत्यापित नहीं',
    DANE_NO_VALIDATED:   'DNSSEC-सत्यापित कोई TLSA रिकॉर्ड नहीं मिला।',
    DANE_TLSA_PER_MX:    'प्रति MX सर्वर TLSA रिकॉर्ड',

    SPF_RECORD_ANALYSIS: 'रिकॉर्ड और विश्लेषण',
    SPF_RECORD:          'रिकॉर्ड',
    SPF_MECHANISMS:      'SPF तंत्र',
    SPF_IP_ADDRESSES:    'IP पते',
    SPF_IP_PREFIXES:     'IP उपसर्ग',
    SPF_DNS_NAMES:       'DNS नाम',
    SPF_IMPLICIT:        '(अंतर्निहित)',
    SPF_ORIGINAL_RECORD: 'मूल SPF रिकॉर्ड',
    SPF_PTR_DEPRECATED:  'ptr तंत्र पुराना हो गया है',
    SPF_MISSING_ALL:     '"all" तंत्र गायब \u2014 नीति अधूरी है',
    SPF_ALL_HARDFAIL:    '"-all" (हार्ड फेल) \u2014 अनधिकृत प्रेषक अस्वीकार किए जाते हैं',
    SPF_ALL_SOFTFAIL:    '"~all" (सॉफ्ट फेल) \u2014 अनधिकृत प्रेषक चिह्नित किए जाते हैं पर डिलीवर हो सकते हैं',
    SPF_ALL_NEUTRAL:     '"?all" (तटस्थ) \u2014 कोई सुरक्षा प्रदान नहीं करता',
    SPF_NO_RECORD:       'कोई SPF रिकॉर्ड नहीं मिला',

    DKIM_FOUND_SECTION:  'पाए गए सिलेक्टर',
    DKIM_DNS_KEY_DETAILS:'DNS नाम और की विवरण',
    DKIM_PROVIDER_REF:   'प्रदाता संदर्भ',
    DKIM_TH_PROVIDER:    'प्रदाता',
    DKIM_TH_SELECTORS:   'डिफ़ॉल्ट सिलेक्टर',
    DKIM_TH_INFRA:       'बुनियादी ढांचा',
    DKIM_AUTO_TESTED_LABEL: 'सिलेक्टर स्वचालित रूप से परीक्षित',
    DKIM_REVOKED:        'की निरस्त (खाली p= टैग)',
    DKIM_KEY_TYPE:       'की प्रकार',
    DKIM_KEY_SIZE:       'की आकार',
    DKIM_BITS:           'बिट',
    DKIM_BITS_EQ:        ' (256-बिट समकक्ष)',
    DKIM_KEY_RATING:     'रेटिंग',
    DKIM_HASH_ALGS:      'हैश एल्गोरिदम',
    DKIM_SERVICE_TYPE:   'सेवा प्रकार',
    DKIM_NOTES_FIELD:    'नोट्स',
    DKIM_DNSSEC:         'DNSSEC',
    DKIM_DNSSEC_OK:      '\u2713 सत्यापित',
    DKIM_DNSSEC_FAIL:    '\u2717 सत्यापित नहीं',
    DKIM_NONE_FOUND_NOTE:'इसका मतलब यह नहीं कि DKIM कॉन्फ़िगर नहीं है \u2014 इसका मतलब केवल यह है कि सामान्य मानक सिलेक्टर नामों में से कोई नहीं मिला।',

    TLSRPT_FOUND:        'TLS-RPT रिकॉर्ड मिला।',
    TLSRPT_NOT_FOUND:    'कोई TLS-RPT रिकॉर्ड नहीं।',
    TLSRPT_RECORD_ANALYSIS: 'रिकॉर्ड और विश्लेषण',
    TLSRPT_NO_RECORD_NXDOMAIN: 'कोई TLS-RPT रिकॉर्ड नहीं \u2014 SMTP TLS विफलता रिपोर्ट प्राप्त नहीं होगी',
    TLSRPT_NO_RECORD:    'कोई TLS-RPT रिकॉर्ड नहीं मिला',
    TLSRPT_MULTI_RECORDS:'कई TLS-RPT रिकॉर्ड मिले \u2014 केवल एक होना चाहिए',
    TLSRPT_NO_RUA:       'कोई rua= रिपोर्टिंग URI नहीं \u2014 रिपोर्ट डिलीवर नहीं हो सकती',

    MTASTS_FOUND:        'MTA-STS DNS रिकॉर्ड मिला।',
    MTASTS_NOT_FOUND:    'कोई MTA-STS DNS रिकॉर्ड नहीं।',
    MTASTS_POLICY_ANALYSIS: 'नीति और विश्लेषण',
    MTASTS_RECORD_NOTES: 'रिकॉर्ड और नोट्स',
    MTASTS_NO_RECORD_NXDOMAIN: 'कोई MTA-STS DNS रिकॉर्ड नहीं \u2014 इनकमिंग डिलीवरी के लिए TLS लागू नहीं',
    MTASTS_NO_RECORD:    'कोई MTA-STS DNS रिकॉर्ड नहीं मिला',
    MTASTS_MULTI_RECORDS:'कई MTA-STS DNS रिकॉर्ड मिले \u2014 केवल एक होना चाहिए',
    MTASTS_NO_ID:        'MTA-STS रिकॉर्ड में अनिवार्य id= फ़ील्ड नहीं है',
    MTASTS_MODE_ENFORCE: 'नीति मोड: enforce \u2014 TLS अनिवार्य, बिना TLS डिलीवरी अस्वीकार',
    MTASTS_MODE_TESTING: 'नीति मोड: testing \u2014 TLS विफलताओं की निगरानी बिना लागू किए',
    MTASTS_MODE_NONE:    'नीति मोड: none \u2014 MTA-STS स्पष्ट रूप से अक्षम',
    MTASTS_MX_MATCH:     'सभी MX सर्वर MTA-STS नीति के mx: पैटर्न से मेल खाते हैं',
    MTASTS_MX_MISMATCH:  'एक या अधिक MX सर्वर किसी mx: पैटर्न से कवर नहीं',
    MTASTS_MX_NO_PATTERNS: 'MTA-STS नीति में कोई mx: लाइन नहीं',

    CAA_NO_RECORDS:      'कोई CAA रिकॉर्ड नहीं।',
    CAA_RECORDS_ANALYSIS:'रिकॉर्ड और विश्लेषण',
    CAA_CA_DNSSEC:       'CA डोमेन DNSSEC',
    CAA_DNSSEC_VALIDATED:'DNSSEC सत्यापित',
    CAA_DNSSEC_SIGNED:   'हस्ताक्षरित लेकिन रिज़ॉल्वर द्वारा सत्यापित नहीं',
    CAA_DNSSEC_NONE:     'DNSSEC हस्ताक्षरित नहीं',
    CAA_DNSSEC_ERROR:    'त्रुटि: ',
    CAA_NO_RECORDS_ISSUE:'कोई CAA रिकॉर्ड नहीं \u2014 कोई भी CA इस डोमेन के लिए प्रमाणपत्र जारी कर सकता है',
    CAA_ISSUE_PROHIBITED:'सभी CA के लिए प्रमाणपत्र जारी करना प्रतिबंधित (issue ";")',
    CAA_NO_IODEF:        'कोई iodef= टैग नहीं \u2014 CA नीति उल्लंघनों की रिपोर्ट नहीं होगी',

    RPKI_HOST_DETAILS:   'होस्ट विवरण',
    RPKI_NO_IPS:         'कोई IP हल नहीं हुआ',
    RPKI_ASPA_TITLE:     'ASPA (AS प्रदाता प्राधिकरण)',
    RPKI_ASPA_PROVIDERS: 'प्रदाता:',

    ASPA_NO_DATA:        'कोई ASPA डेटा उपलब्ध नहीं',

    STXT_FOUND:          '\u2713 security.txt मिला',
    STXT_RAW:            'कच्चा security.txt',
    STXT_NOT_FOUND:      'नहीं मिला।',
    STXT_CORS_BLOCKED:   'security.txt प्राप्त नहीं हो सका \u2014 सर्वर cross-origin अनुरोध (CORS) की अनुमति नहीं देता। फ़ाइल मौजूद हो सकती है; मैन्युअल जाँच करें:',
    STXT_CHECK_MANUALLY: 'जाँचे गए URL:',
    CORS_SECURITY_NOTE:  'यह अच्छी बात है! सर्वर की सुरक्षा सामान्य से बेहतर है। इसीलिए यह जाँच स्वचालित रूप से पूरी नहीं हो सकती।',
    STXT_NO_CONTACT:     'अनिवार्य Contact फ़ील्ड गायब है।',
    STXT_NO_EXPIRES:     'Expires फ़ील्ड गायब है \u2014 आवश्यक है',
    STXT_BAD_DATE:       'Expires फ़ील्ड में अमान्य दिनांक प्रारूप।',
    STXT_ENCRYPTION:     'एन्क्रिप्शन की लिंक है।',
    STXT_POLICY:         'भेद्यता प्रकटीकरण नीति लिंक है।',

    WHOIS_RDAP_OK:       '\u2713 RDAP डेटा प्राप्त हुआ',
    WHOIS_ROW_REGISTRAR: 'रजिस्ट्रार',
    WHOIS_ROW_CREATED:   'बनाया गया',
    WHOIS_ROW_UPDATED:   'अपडेट किया गया',
    WHOIS_ROW_EXPIRES:   'समाप्ति',
    WHOIS_ROW_HANDLE:    'हैंडल',
    WHOIS_ROW_STATUS:    'स्थिति',
    WHOIS_NS_TITLE:      'नाम सर्वर',
    WHOIS_EXPIRED:       '\u26a0 डोमेन पंजीकरण समाप्त हो गया है!',
    WHOIS_FAILED:        'RDAP लुकअप विफल।',

    DMARC_FOUND:         'DMARC रिकॉर्ड मिला।',
    DMARC_NOT_FOUND:     'कोई DMARC रिकॉर्ड नहीं।',
    DMARC_RECORD_ANALYSIS: 'रिकॉर्ड और विश्लेषण',
    DMARC_POLICY_NONE:   'p=none \u2014 केवल निगरानी, कोई प्रवर्तन नहीं',
    DMARC_POLICY_QUARANTINE: 'p=quarantine \u2014 संदिग्ध संदेश स्पैम में भेजे जाते हैं',
    DMARC_POLICY_REJECT: 'p=reject \u2014 अनधिकृत संदेश अस्वीकार किए जाते हैं',
    DMARC_SP_REJECT:     'sp=reject \u2014 उपडोमेन: अनधिकृत संदेश अस्वीकार',
    DMARC_SP_QUARANTINE: 'sp=quarantine \u2014 उपडोमेन: संदिग्ध संदेश स्पैम में',
    DMARC_SP_NONE:       'sp=none \u2014 उपडोमेन: कोई प्रवर्तन नहीं',
    DMARC_ADKIM_STRICT:  'adkim=s \u2014 DKIM पहचानकर्ता संरेखण: सख्त',
    DMARC_ASPF_STRICT:   'aspf=s \u2014 SPF पहचानकर्ता संरेखण: सख्त',
    DMARC_NO_RUA:        'कोई rua= नहीं \u2014 कोई DMARC एग्रीगेट रिपोर्ट प्राप्त नहीं होगी',
    DMARC_NO_RECORD_NXDOMAIN: 'कोई DMARC रिकॉर्ड नहीं \u2014 अनधिकृत प्रेषकों को अस्वीकार नहीं किया जा सकता',
    DMARC_NO_RECORD:     'कोई DMARC रिकॉर्ड नहीं मिला',
    DMARC_MULTI_RECORDS: 'कई DMARC रिकॉर्ड \u2014 केवल एक होना चाहिए',
    // DMARCbis (RFC 9989 / 9990 / 9991) \u2014 अनुभाग लेबल
    DMARCBIS_TITLE:            'DMARCbis अनुपालन \u2014 RFC 9989 / 9990 / 9991',
    DMARCBIS_INTRO:            'RFC 9989, RFC 7489 और RFC 9091 को अप्रचलित करता है, और रिपोर्टिंग को RFC 9990 (एग्रीगेट) तथा RFC 9991 (विफलता) में विभाजित करता है। ये जाँच केवल सूचनात्मक हैं और ग्रेड को प्रभावित नहीं करतीं।',
    DMARCBIS_DISCOVERY_TITLE:  'नीति खोज \u2014 DNS ट्री वॉक (RFC 9989 \u00a74.10)',
    DMARCBIS_TAGS_TITLE:       'टैग अनुपालन (RFC 9989 \u00a74.7, \u00a79.3)',
    DMARCBIS_EXTAUTH_TITLE:    'बाहरी रिपोर्टिंग प्राधिकरण (RFC 9990 \u00a74, RFC 9991 \u00a75)',
    DMARCBIS_SUGGESTED_TITLE:  'सुझाया गया RFC 9989 रिकॉर्ड',
    DMARCBIS_SUGGESTED_NOTE:   'ऐतिहासिक और अपंजीकृत टैग हटा दिए गए, pct=0 को t=y में बदला गया, और संगठनात्मक डोमेन पर RFC 9989 द्वारा अनुशंसित टैग जोड़े गए। नीति मान अपरिवर्तित रखा गया है \u2014 प्रकाशित करने से पहले जाँच लें।',
    DMARCBIS_TW_TAG_AUTHOR:    'लेखक डोमेन',
    DMARCBIS_TW_TAG_ORG:       'संगठनात्मक डोमेन',
    DMARCBIS_TW_STEP_FOUND:    'रिकॉर्ड',
    DMARCBIS_TW_STEP_NONE:     'कोई नहीं',
    DMARCBIS_TW_STEP_MULTI:    'एकाधिक',
    DMARCBIS_TW_STEP_ERROR:    'त्रुटि',
    // DMARCbis समस्या कुंजियाँ (स्थिर)
    DMARCBIS_TW_NO_POLICY:     'ट्री वॉक में कहीं भी कोई DMARC नीति रिकॉर्ड नहीं \u2014 प्राप्तकर्ता इस डोमेन पर कोई DMARC प्रसंस्करण लागू नहीं करते',
    DMARCBIS_TW_MULTI:         'ट्री वॉक के एक चरण में एकाधिक DMARC रिकॉर्ड मिले \u2014 RFC 9989 \u00a74.10 उन सभी को छोड़ देता है',
    DMARCBIS_TAGS_CLEAN:       'सभी टैग RFC 9989 \u00a79.3 में सक्रिय के रूप में पंजीकृत हैं \u2014 कोई ऐतिहासिक, अपंजीकृत या अमान्य टैग नहीं',
    DMARCBIS_V_NOT_FIRST:      'v= अनुपस्थित है या पहला टैग नहीं है \u2014 RFC 9989 \u00a74.7 के अनुसार पूरा रिकॉर्ड अनदेखा किया जाना चाहिए',
    DMARCBIS_P_DEFAULT_NONE:   'कोई मान्य p= टैग नहीं \u2014 RFC 9989 \u00a74.10.1: rua= मौजूद होने के कारण प्राप्तकर्ता रिकॉर्ड को p=none मानकर संसाधित करते हैं',
    DMARCBIS_P_NO_PROCESSING:  'कोई मान्य p= टैग नहीं और कोई rua= नहीं \u2014 RFC 9989 \u00a74.10.1: प्राप्तकर्ता कोई भी DMARC प्रसंस्करण लागू नहीं करते',
    DMARCBIS_PCT_ZERO:         'pct=0 RFC 9989 में ऐतिहासिक है \u2014 इसे t=y से बदलें, जो अब यही अर्थ रखता है (परिशिष्ट A.6)',
    DMARCBIS_PCT_FULL:         'pct=100 RFC 9989 में ऐतिहासिक है और पहले से ही डिफ़ॉल्ट था \u2014 टैग हटा दें',
    DMARCBIS_T_NO_EFFECT:      'जब तक नीति none है, t=y का कोई प्रभाव नहीं \u2014 RFC 9989 \u00a74.7',
    DMARCBIS_T_ENFORCED:       't=n \u2014 प्रकाशित नीति यथावत लागू होती है (RFC 9989 डिफ़ॉल्ट)',
    DMARCBIS_NP_REJECT:        'np=reject \u2014 अस्तित्वहीन उपडोमेन से आने वाला मेल अस्वीकृत किया जाता है (RFC 9989 \u00a74.7)',
    DMARCBIS_NP_MISSING:       'कोई np= टैग नहीं \u2014 RFC 9989 इसे अस्तित्वहीन उपडोमेन के लिए जोड़ता है; संगठनात्मक डोमेन पर np=reject अनुशंसित है',
    DMARCBIS_PSD_Y:            'psd=y \u2014 सार्वजनिक प्रत्यय डोमेन घोषित; ट्री वॉक यहीं रुक जाता है (RFC 9989 \u00a74.10.2)',
    DMARCBIS_PSD_N:            'psd=n \u2014 संगठनात्मक डोमेन घोषित; ट्री वॉक यहीं रुक जाता है (RFC 9989 \u00a74.10.2)',
    DMARCBIS_PSD_U:            'psd=u \u2014 संगठनात्मक डोमेन का निर्धारण ट्री वॉक पर छोड़ा गया (RFC 9989 डिफ़ॉल्ट)',
    DMARCBIS_PSD_MISSING:      'कोई psd= टैग नहीं \u2014 संगठनात्मक डोमेन पर psd=n प्रकाशित करने से ट्री वॉक तुरंत समाप्त हो जाता है और सारी अस्पष्टता मिट जाती है',
    DMARCBIS_FO_NO_RUF:        'fo= ruf= के बिना मौजूद है \u2014 RFC 9989 \u00a74.7 के अनुसार इसकी सामग्री अनदेखी की जानी चाहिए',
    DMARCBIS_URI_NO_MAILTO:    'rua= में कोई mailto: URI नहीं \u2014 प्राप्तकर्ताओं को केवल mailto: का समर्थन करना अनिवार्य है, अतः अन्य योजनाएँ अनदेखी की जा सकती हैं',
    DMARCBIS_EXT_NONE:         'प्राधिकृत करने के लिए कोई rua= या ruf= URI नहीं \u2014 एग्रीगेट रिपोर्ट के बिना DMARC विफलताओं की कोई दृश्यता नहीं',

    BIMI_FOUND:          'BIMI रिकॉर्ड मिला।',
    BIMI_NOT_FOUND:      'कोई BIMI रिकॉर्ड नहीं।',
    BIMI_RECORD_ANALYSIS:'रिकॉर्ड और विश्लेषण',
    BIMI_NO_RECORD:      'कोई BIMI रिकॉर्ड नहीं \u2014 समर्थित मेल क्लाइंट में ब्रांड लोगो नहीं दिखेगा',
    BIMI_NO_LOGO:        'l= (लोगो URL) अनुपस्थित या खाली \u2014 BIMI के काम करने के लिए आवश्यक',
    BIMI_NO_AUTHORITY:   'a= (प्राधिकरण साक्ष्य) अनुपस्थित \u2014 Gmail आदि के लिए VMC प्रमाणपत्र आवश्यक',
    BIMI_LOGO_OK:        'लोगो URL मौजूद',
    BIMI_AUTHORITY_OK:   'प्राधिकरण साक्ष्य (VMC) मौजूद',

    PTR_HOST_DETAILS:    'होस्ट विवरण',
    PTR_NO_MX:           'PTR रिकॉर्ड जाँचने के लिए कोई MX होस्ट नहीं',
    PTR_MATCH:           'FCrDNS पुष्टि \u2014 PTR MX होस्टनाम से मेल खाता है',
    PTR_MISMATCH:        'PTR मौजूद लेकिन MX होस्टनाम से मेल नहीं खाता',
    PTR_MISSING:         'कोई PTR रिकॉर्ड नहीं मिला',
    // Keys added in later releases — backfilled
    IPV6_HOST_DETAILS: 'प्रति-होस्ट पता विवरण',
    IPV6_NO_AAAA: 'कोई AAAA रिकॉर्ड नहीं',
    IPV6_NO_MX: 'कोई MX होस्ट नहीं मिला',
    IPV6_NO_NS: 'कोई NS होस्ट नहीं मिला',
    IPV6_MANDATORY_TITLE: 'अनिवार्य IPv6 आवश्यकताएँ',
    IPV6_MANDATORY_NOTE: 'निम्नलिखित देशों में सरकारी विनियम द्वारा IPv6 अनिवार्य है:',
    IPV6_DOMAIN_HAS_IPV6: '✓ डोमेन के पास IPv6 पता/पते हैं',
    IPV6_DOMAIN_NO_IPV6: 'डोमेन का कोई IPv6 पता नहीं — केवल IPv4 पर पहुँच योग्य',
    IPV6_ALL_MX_HAVE_IPV6: '✓ सभी MX होस्ट के पास IPv6 पते हैं',
    IPV6_SOME_MX_HAVE_IPV6: 'कुछ MX होस्ट के पास IPv6 है — सभी के पास नहीं',
    IPV6_NO_MX_HAVE_IPV6: 'किसी भी MX होस्ट के पास IPv6 पता नहीं है',
    IPV6_ALL_NS_HAVE_IPV6: '✓ सभी NS होस्ट के पास IPv6 पते हैं',
    IPV6_SOME_NS_HAVE_IPV6: 'कुछ NS होस्ट के पास IPv6 है — सभी के पास नहीं',
    IPV6_NO_NS_HAVE_IPV6: 'किसी भी NS होस्ट के पास IPv6 पता नहीं है',
    IPV6_MX_BADGE_YES: 'IPv6',
    IPV6_MX_BADGE_NO: 'IPv6 नहीं',
    SPF_NO_IP6_MECHS: 'MX/NS होस्ट IPv6 का समर्थन करते हैं, पर SPF रिकॉर्ड में कोई ip6: प्रविष्टि नहीं मिली — यदि यह डोमेन IPv6 पर मेल भेजता है तो उन पतों को अधिकृत करने के लिए ip6: तंत्र जोड़ें',
    SPF_LEGACY_TYPE: 'पुराना SPF रिकॉर्ड प्रकार (DNS प्रकार 99) मिला — RFC 7208 (2014) से अप्रचलित; इसे हटा देना चाहिए',
    SPF_PROPAGATION_MISMATCH: 'Cloudflare और Google DNS रिज़ॉल्वर के बीच SPF रिकॉर्ड भिन्न है — अधूरा प्रसार या ग़लत कॉन्फ़िगरेशन',
    DMARC_PROPAGATION_MISMATCH: 'Cloudflare और Google DNS रिज़ॉल्वर के बीच DMARC रिकॉर्ड भिन्न है — अधूरा प्रसार या ग़लत कॉन्फ़िगरेशन',
    DKIM_ROTATION_NOTE: 'सर्वोत्तम अभ्यास: DKIM कुंजियाँ कम से कम वर्ष में एक बार बदलें। कुंजी की आयु DNS से निर्धारित नहीं की जा सकती — अपने ईमेल प्रदाता से रोटेशन नीति की पुष्टि करें।',
    CAA_ISSUEMAIL_NOTE: 'issuemail टैग मौजूद — यह इस डोमेन के लिए S/MIME प्रमाणपत्र जारी करने को नियंत्रित करता है (RFC 8657)',
    RPKI_NS_DIVERSITY: 'नेमसर्वर ASN विविधता',
    RPKI_NS_NO_ASN_DATA: 'नेमसर्वर के लिए कोई ASN डेटा उपलब्ध नहीं',
    OVERVIEW_PROVIDERS: 'पहचाना गया ईमेल अवसंरचना',
  },

  // ── d: गतिशील स्ट्रिंग (एरो फ़ंक्शन) ──────────────────────────────────────
  d: {
    MX_HOSTS_FOUND:        n => n + ' MX सर्वर मिले।',
    DKIM_SELECTORS_FOUND:  n => n + ' सिलेक्टर मिले',
    DKIM_ACROSS_PROVIDERS: n => n + ' प्रदाता पर',
    DKIM_SELECTORS_TESTED: n => n + ' सिलेक्टर परीक्षित।',
    DKIM_NONE_FOUND:       n => 'कोई DKIM सिलेक्टर नहीं मिला। ' + n + ' सिलेक्टर परीक्षित किए गए।',
    DKIM_AUTO_TESTED:      n => n + ' सिलेक्टर स्वचालित रूप से परीक्षित',
    SPF_FOUND_LOOKUPS:     n => 'SPF रिकॉर्ड मिला। ' + n + ' DNS लुकअप तंत्र।',
    SPF_MULTI_RECORDS:     n => 'कई SPF रिकॉर्ड मिले (' + n + ') \u2014 केवल एक होना चाहिए',
    SPF_MULTI_MESSAGE:     n => 'कई SPF रिकॉर्ड (' + n + ') \u2014 यह कॉन्फ़िगरेशन त्रुटि है।',
    SPF_LOOKUP_EXCEED:     n => n + ' DNS-लुकअप तंत्र RFC सीमा 10 से अधिक (SPF PermError हो सकता है)',
    SPF_LOOKUP_HIGH:       n => n + ' DNS-लुकअप तंत्र \u2014 RFC सीमा 10 के करीब',
    SPF_REDIRECT:          v => 'redirect=' + v + ' मौजूद',
    SPF_IP4_BROAD:         (v, p) => 'ip4:' + v + ' की बहुत व्यापक रेंज है (/' + p + ' \u2264 /16)',
    SPF_IP6_BROAD:         (v, p) => 'ip6:' + v + ' की बहुत व्यापक रेंज है (/' + p + ' \u2264 /32)',
    SPF_REDIRECT_FOLLOWED: d => '\u2713 redirect= का अनुसरण किया \u2014 प्रभावी नीति यहाँ से लोड: ' + d,
    SPF_REDIRECT_FROM:     d => 'प्रभावी नीति (redirect \u2192 ' + d + ')',
    SPF_REDIRECT_NO_RECORD:d => 'redirect= लक्ष्य का कोई SPF रिकॉर्ड नहीं: ' + d,
    SPF_REDIRECT_MULTI:    d => 'redirect= लक्ष्य के कई SPF रिकॉर्ड हैं: ' + d,
    SPF_REDIRECT_ERROR:    d => 'redirect= लक्ष्य प्राप्त करने में विफल: ' + d,
    CAA_RECORDS_FOUND:     n => n + ' CAA रिकॉर्ड मिले।',
    CAA_AUTHORIZED_CA:     n => 'अधिकृत CA: ',
    CAA_CRITICAL_COUNT:    n => n + ' रिकॉर्ड में क्रिटिकल फ्लैग है',
    DANE_VALIDATED_OF:     (v, t) => t + ' में से ' + v + ' MX सर्वर के DNSSEC-सत्यापित TLSA रिकॉर्ड हैं।',
    TLSA_RECORDS_COUNT:    n => n + ' TLSA रिकॉर्ड',
    RPKI_SUMMARY:          (valid, total, inv, noRoa) => total + ' में से ' + valid + ' IP वैध ROA से कवर' + (inv > 0 ? ' \u2014 ' + inv + ' अमान्य' : '') + (noRoa > 0 ? ' \u2014 ' + noRoa + ' बिना ROA' : ''),
    ASPA_SUMMARY:          (pub, total) => total + ' में से ' + pub + ' ASN का ASPA प्रकाशित',
    TLSRPT_ENDPOINT:       uri => 'रिपोर्टिंग endpoint: ' + uri,
    TLSRPT_BAD_URI:        uri => 'अज्ञात rua= URI स्कीम: ' + uri,
    MTASTS_MAX_AGE_LOW:    age => 'max_age=' + age + 's एक दिन से कम \u2014 604800 (1 सप्ताह) या अधिक उपयोग करें',
    MTASTS_POLICY_UNKNOWN: mode => 'अज्ञात या गायब नीति मोड: ' + (mode || '(खाली)'),
    MTASTS_POLICY_ERROR:   (e, url) => e + ' \u2014 जाँचें: ' + url,
    STXT_EXPIRES_WARN:     n => n + ' दिन में समाप्त \u2014 जल्द नवीनीकृत करें।',
    STXT_EXPIRES_OK:       (d, n) => 'समाप्ति: ' + d + ' (' + n + ' दिन)।',
    STXT_EXPIRED:          d => 'security.txt की समय-सीमा समाप्त (' + d + ')।',
    WHOIS_EXPIRES_SOON:    n => '\u26a0 डोमेन ' + n + ' दिन में समाप्त \u2014 जल्द नवीनीकृत करें।',
    DOMAIN_INVALID:        d => '"' + d + '" वैध डोमेन नहीं लगता।',
    SPF_ALL_PASSALL:       q => '"' + q + 'all" (सब पास) \u2014 किसी भी सर्वर को इस डोमेन से भेजने की अनुमति',
    CAA_IODEF:             v => 'घटना रिपोर्टिंग (iodef): ' + v,
    STXT_CONTACT_OK:       v => 'संपर्क: ' + v,
    DMARC_POLICY_UNKNOWN:  p => 'अज्ञात p= मान: ' + p,
    DMARC_PCT_LOW:         pct => 'pct=' + pct + ' \u2014 नीति केवल ' + pct + '% संदेशों पर लागू',
    DMARC_RUA_URI:         uri => 'एग्रीगेट रिपोर्ट (rua): ' + uri,
    DMARC_RUF_URI:         uri => 'फोरेंसिक रिपोर्ट (ruf): ' + uri,
    // DMARCbis (RFC 9989 / 9990 / 9991)
    DMARCBIS_TW_AT_AUTHOR:   dom => 'नीति रिकॉर्ड लेखक डोमेन (_dmarc.' + dom + ') पर प्रकाशित है \u2014 प्राप्तकर्ता यही रिकॉर्ड लागू करते हैं',
    DMARCBIS_TW_INHERITED:   (dom, tag, val) => 'लेखक डोमेन पर कोई रिकॉर्ड नहीं \u2014 प्राप्तकर्ता _dmarc.' + dom + ' पर प्रकाशित नीति विरासत में लेते हैं और ' + tag + '=' + val + ' लागू करते हैं',
    DMARCBIS_TW_ORG_DOMAIN:  (dom, rule) => 'संगठनात्मक डोमेन: ' + dom + ' \u2014 ' + ({
                               'psd-n':    'psd=n द्वारा निर्धारित',
                               'psd-y':    'psd=y वाले रिकॉर्ड से एक लेबल नीचे',
                               'shortest': 'ट्री वॉक में DMARC रिकॉर्ड वाला सबसे छोटा नाम',
                               'default':  'ट्री वॉक में कोई रिकॉर्ड नहीं मिला, इसलिए क्वेरी किया गया डोमेन उपयोग हुआ',
                             }[rule] || rule),
    DMARCBIS_TW_QUERIES:     n => 'ट्री वॉक \u2014 ' + n + ' क्वेरी',
    DMARCBIS_V_CASE:         v => 'v=' + v + ' \u2014 RFC 9989 \u00a74.7 में संस्करण मान केस-संवेदी है और ठीक DMARC1 होना चाहिए',
    DMARCBIS_DUPLICATE_TAGS: l => 'रिकॉर्ड में दोहराया गया टैग: ' + l + ' \u2014 RFC 9989 \u00a74.8 इसे सिंटैक्स त्रुटि मानता है',
    DMARCBIS_PCT_PARTIAL:    v => 'pct=' + v + ' RFC 9989 (परिशिष्ट A.6) में हटा दिया गया \u2014 आंशिक प्रतिशत असंगत रूप से लागू होते थे; परीक्षण के दौरान t=y का उपयोग करें, अन्यथा टैग हटा दें',
    DMARCBIS_RF_HISTORIC:    v => 'rf=' + v + ' RFC 9989 \u00a79.3 रजिस्ट्री में ऐतिहासिक है \u2014 इसे हटा दें',
    DMARCBIS_RI_HISTORIC:    v => 'ri=' + v + ' RFC 9989 \u00a79.3 रजिस्ट्री में ऐतिहासिक है \u2014 इसे हटा दें',
    DMARCBIS_T_INVALID:      v => 't=' + v + ' अमान्य है \u2014 RFC 9989 \u00a74.7 केवल y या n की अनुमति देता है',
    DMARCBIS_T_TESTING:      (p, eff) => 't=y \u2014 परीक्षण मोड: प्राप्तकर्ता प्रकाशित p=' + p + ' के बजाय ' + eff + ' लागू करते हैं (RFC 9989 \u00a74.7)',
    DMARCBIS_NP_INVALID:     v => 'np=' + v + ' अमान्य है \u2014 RFC 9989 \u00a74.7 केवल none, quarantine या reject की अनुमति देता है',
    DMARCBIS_NP_SET:         v => 'np=' + v + ' \u2014 अस्तित्वहीन उपडोमेन के लिए नीति (RFC 9989 \u00a74.7)',
    DMARCBIS_PSD_INVALID:    v => 'psd=' + v + ' अमान्य है \u2014 RFC 9989 \u00a74.7 केवल y, n या u की अनुमति देता है',
    DMARCBIS_SP_INVALID:     v => 'sp=' + v + ' अमान्य है \u2014 RFC 9989 \u00a74.7 केवल none, quarantine या reject की अनुमति देता है',
    DMARCBIS_SP_IGNORED:     org => 'इस रिकॉर्ड में sp= अनदेखा किया जाता है \u2014 RFC 9989 \u00a74.7: नीति खोज sp= केवल संगठनात्मक डोमेन (' + org + ') से पढ़ती है',
    DMARCBIS_ALIGN_INVALID:  (tag, v) => tag + '=' + v + ' अमान्य है \u2014 RFC 9989 \u00a74.7 केवल r या s की अनुमति देता है',
    DMARCBIS_FO_INVALID:     v => 'fo=' + v + ' RFC 9989 \u00a74.8 के सिंटैक्स से मेल नहीं खाता \u2014 मान्य मान 0, 1, d और s हैं, कोलन से अलग, जिनमें 0 और 1 परस्पर अनन्य हैं',
    DMARCBIS_URI_OBS_SIZE:   l => 'रिपोर्टिंग URI में अप्रचलित !size प्रत्यय: ' + l + ' \u2014 RFC 9989 \u00a74.8 रिपोर्ट जनरेटर को इसे अनदेखा करने को कहता है',
    DMARCBIS_UNKNOWN_TAGS:   l => 'अपंजीकृत टैग: ' + l + ' \u2014 RFC 9989 \u00a79.3 रजिस्ट्री में नहीं हैं, इसलिए प्राप्तकर्ताओं को उन्हें अनदेखा करना होगा',
    DMARCBIS_EXT_INTERNAL:   (tag, uri) => tag + '=' + uri + ' \u2014 वही संगठनात्मक डोमेन, किसी प्राधिकरण रिकॉर्ड की आवश्यकता नहीं',
    DMARCBIS_EXT_AUTHORIZED: (tag, uri, name) => tag + '=' + uri + ' \u2014 बाहरी गंतव्य ' + name + ' द्वारा प्राधिकृत',
    DMARCBIS_EXT_MISSING:    (tag, uri, name) => tag + '=' + uri + ' \u2014 बाहरी गंतव्य प्राधिकृत नहीं: ' + name + ' पर कोई v=DMARC1 TXT रिकॉर्ड नहीं; प्राप्तकर्ताओं को यह URI अनदेखी करनी होगी और कोई रिपोर्ट नहीं भेजी जाएगी',
    DMARCBIS_EXT_OVERRIDE:   (tag, uri, name, ov) => tag + '=' + uri + ' \u2014 ' + name + ' द्वारा प्राधिकृत, जो रिपोर्ट को ' + ov + ' पर पुनर्निर्देशित करता है',
    DMARCBIS_EXT_OVERRIDE_BAD: (tag, uri, name, ov) => tag + '=' + uri + ' \u2014 ' + name + ' पर प्राधिकरण रिकॉर्ड किसी अन्य होस्ट ' + ov + ' पर पुनर्निर्देशित करता है; RFC 9990 \u00a74 दोनों में से किसी भी पते पर भेजने से मना करता है',
    DMARCBIS_EXT_TOO_LONG:   (tag, uri) => tag + '=' + uri + ' \u2014 प्राधिकरण नाम DNS लंबाई सीमा से अधिक है, इसलिए संबंध की पुष्टि नहीं हो सकती (RFC 9990 \u00a74 चरण 4)',
    DMARCBIS_EXT_UNPARSABLE: (tag, uri) => tag + '=' + uri + ' \u2014 इस URI से कोई होस्ट नहीं निकाला जा सका',
    DMARCBIS_EXT_ERROR:      (tag, uri, name) => tag + '=' + uri + ' \u2014 ' + name + ' के लिए लुकअप विफल; प्राधिकरण की पुष्टि नहीं हो सकी',
    BIMI_LOGO_URL:         url => 'लोगो URL: ' + url,
    BIMI_AUTHORITY_URL:    url => 'प्राधिकरण URL: ' + url,
    PTR_VALUE:             v => 'PTR: ' + v,
    // Keys added in later releases — backfilled
    IPV6_DOMAIN_SUMMARY: n => 'डोमेन के लिए ' + n + ' IPv6 पते मिले।',
    IPV6_MX_SUMMARY: (n, t) => t + ' में से ' + n + ' MX होस्ट के पास IPv6 है।',
    IPV6_NS_SUMMARY: (n, t) => t + ' में से ' + n + ' NS होस्ट के पास IPv6 है।',
    SPF_LOOKUP_TOTAL_EXCEED: n => 'कुल ' + n + ' DNS लुकअप (नेस्टेड include सहित) RFC 7208 की 10 की सीमा से अधिक हैं \u2014 प्राप्तकर्ता SPF PermError लौटाएँगे',
    SPF_LOOKUP_TOTAL_HIGH: n => 'कुल ' + n + ' DNS लुकअप (नेस्टेड include सहित) \u2014 RFC 7208 की 10 की सीमा के निकट',
    SPF_FOUND_LOOKUPS_TOTAL: (direct, total) => 'SPF रिकॉर्ड मिला। ' + direct + ' प्रत्यक्ष + कुल ' + total + ' DNS लुकअप (पुनरावर्ती)।',
    RPKI_NS_SINGLE_ASN: (asn, holder) => 'सभी नेमसर्वर एक ही ASN पर (' + asn + (holder ? ' \u2014 ' + holder : '') + ') \u2014 DNS रूटिंग के लिए विफलता का एकल बिंदु',
    RPKI_NS_MULTI_ASN: n => 'नेमसर्वर ' + n + ' विभिन्न ASN में फैले हैं \u2014 अच्छी रूटिंग लचीलापन',
  },

  // ── x: व्याख्या स्ट्रिंग (HTML) ─────────────────────────────────────────────
  x: {
    DMARC:
      '<b>DMARC (Domain-based Message Authentication, Reporting and Conformance)</b> ' +
      'SPF और DKIM को एक नीति के साथ जोड़ता है जो प्राप्तकर्ताओं को बताती है कि प्रमाणीकरण विफल होने पर क्या करना है। ' +
      'मूल रूप से <a href="https://www.rfc-editor.org/rfc/rfc7489">RFC 7489</a>, अब <a href="https://www.rfc-editor.org/rfc/rfc9989">RFC 9989</a> ("DMARCbis") के रूप में मानकीकृत, जो <a href="https://www.rfc-editor.org/rfc/rfc9091">RFC 9091</a> (PSD DMARC) को भी अप्रचलित करता है। नई विशिष्टता के अनुपालन के लिए नीचे DMARCbis अनुभाग देखें।<br><br>' +
      '<b>नीति (p=):</b> <b>reject</b> \u2014 प्रमाणीकरण विफल होने पर संदेश हटाया जाता है (सबसे मजबूत)। ' +
      '<b>quarantine</b> \u2014 स्पैम में भेजें। <b>none</b> \u2014 केवल निगरानी, कोई कार्रवाई नहीं।<br><br>' +
      '<b>पहचानकर्ता संरेखण:</b> DMARC के लिए <code>From:</code> हेडर का डोमेन SPF या DKIM द्वारा प्रमाणित डोमेन से मेल खाना चाहिए। ' +
      '<b>लचीला</b> (डिफ़ॉल्ट) संगठनात्मक डोमेन मिलान की अनुमति देता है; <b>सख्त</b> (<code>adkim=s</code> / <code>aspf=s</code>) सटीक मिलान की आवश्यकता है।<br><br>' +
      '<b>रिपोर्ट:</b> <code>rua=</code> एग्रीगेट XML रिपोर्ट प्राप्त करता है (अनुशंसित), जो ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9990">RFC 9990</a> में परिभाषित है। ' +
      '<code>ruf=</code> प्रति-संदेश विफलता रिपोर्ट प्राप्त करता है, जो ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9991">RFC 9991</a> में परिभाषित है (संवेदनशील \u2014 सावधानी से उपयोग करें)।<br><br>' +
      '<b>उपडोमेन नीति (sp=):</b> छोड़े जाने पर उपडोमेन <code>p=</code> को विरासत में लेते हैं। ' +
      'सभी उपडोमेन की स्पष्ट सुरक्षा के लिए <code>sp=reject</code> सेट करें। RFC 9989 उन उपडोमेन के लिए <code>np=</code> जोड़ता है जो बिल्कुल भी मौजूद नहीं हैं।<br><br>' +
      '<b>pct=:</b> यह नीति को विफल संदेशों के निर्दिष्ट प्रतिशत पर लागू करता था। ' +
      '<b>RFC 9989 में हटा दिया गया</b> \u2014 <code>pct=0</code> अब <code>t=y</code> लिखा जाता है, और कोई भी अन्य मान बस हटा देना चाहिए।',
    DMARCBIS:
      '<b>DMARCbis</b> DMARC का 2026 संशोधन है, जो तीन दस्तावेज़ों के रूप में प्रकाशित हुआ: ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9989">RFC 9989</a> (प्रोटोकॉल), ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9990">RFC 9990</a> (एग्रीगेट रिपोर्टिंग) और ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9991">RFC 9991</a> (विफलता रिपोर्टिंग)। ' +
      'RFC 7489 के लिए लिखे गए रिकॉर्ड काम करते रहते हैं \u2014 यहाँ कुछ भी मौजूदा परिनियोजन को नहीं तोड़ता \u2014 पर कई टैग की स्थिति बदल गई है।<br><br>' +
      '<b>क्या बदला:</b><br>' +
      '\u2022 <code>pct=</code> हटा दिया गया (परिशिष्ट A.6)। प्राप्तकर्ता आंशिक प्रतिशत असंगत रूप से लागू करते थे; केवल <code>pct=0</code> उपयोगी सिद्ध हुआ, और अब वह <code>t=y</code> है।<br>' +
      '\u2022 <code>t=</code> (परीक्षण मोड) नया है: <code>t=y</code> के साथ प्राप्तकर्ता प्रकाशित नीति से एक स्तर नीचे लागू करते हैं \u2014 <code>reject</code> <code>quarantine</code> जैसा और <code>quarantine</code> <code>none</code> जैसा व्यवहार करता है।<br>' +
      '\u2022 <code>np=</code> <b>अस्तित्वहीन</b> उपडोमेन के लिए नीति तय करता है, जबकि <code>sp=</code> मौजूदा उपडोमेन को कवर करता है।<br>' +
      '\u2022 <code>psd=</code> सार्वजनिक प्रत्यय डोमेन (<code>y</code>) चिह्नित करता है या संगठनात्मक डोमेन (<code>n</code>) तय करता है। दोनों में से कोई भी मान ट्री वॉक तुरंत समाप्त कर देता है।<br>' +
      '\u2022 <code>rf=</code> और <code>ri=</code> टैग रजिस्ट्री (\u00a79.3) में ऐतिहासिक हैं और हटा दिए जाने चाहिए।<br><br>' +
      '<b>DNS ट्री वॉक (\u00a74.10):</b> संगठनात्मक डोमेन खोजने के लिए अब Public Suffix List का उपयोग नहीं होता। ' +
      'प्राप्तकर्ता लेखक डोमेन पर <code>_dmarc.</code> की क्वेरी करते हैं, फिर लेबल दर लेबल ऊपर चढ़ते हैं \u2014 अधिकतम आठ क्वेरी \u2014 जब तक कोई रिकॉर्ड न मिले ' +
      'या ऐसा रिकॉर्ड न मिले जिसमें <code>psd=y</code> / <code>psd=n</code> हो। इससे बड़े संगठन अपने नेमस्पेस में कई स्थानों पर नीति प्रकाशित कर सकते हैं।<br><br>' +
      '<b>बाहरी रिपोर्टिंग प्राधिकरण (RFC 9990 \u00a74, RFC 9991 \u00a75):</b> यदि <code>rua=</code> या <code>ruf=</code> आपके संगठनात्मक डोमेन से बाहर इंगित करता है, ' +
      'तो उस गंतव्य को <code>आपका-डोमेन._report._dmarc.उनका-डोमेन</code> प्रकाशित करना होगा जिसमें कम से कम <code>v=DMARC1</code> हो। ' +
      'इसके बिना प्राप्तकर्ताओं को URI <b>अवश्य</b> त्यागनी होगी, और आपको चुपचाप कुछ भी प्राप्त नहीं होगा। ' +
      'कोई भी गंतव्य जो सबकी रिपोर्ट स्वीकारना चाहता है, <code>*._report._dmarc.</code> पर वाइल्डकार्ड प्रकाशित कर सकता है।<br><br>' +
      '<b>रिपोर्टिंग का विभाजन:</b> एग्रीगेट रिपोर्ट (XML) RFC 9990 में हैं; प्रति-संदेश विफलता रिपोर्ट RFC 9991 में, जो ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc6591">RFC 6591</a> के ARF प्रारूप को <code>Identity-Alignment</code> फ़ील्ड के साथ अद्यतन भी करता है और रिपोर्ट में DKIM सिलेक्टर अनिवार्य बनाता है।',
    DNSSEC:
      '<b>DNSSEC क्या है?</b> DNSSEC (<a href="https://www.rfc-editor.org/rfc/rfc4033">RFC 4033</a>) DNS रिकॉर्ड में क्रिप्टोग्राफिक हस्ताक्षर जोड़ता है, ' +
      'कैश पॉइज़निंग और मैन-इन-द-मिडिल हमलों को रोकता है। ' +
      'Cloudflare रिज़ॉल्वर का <b>AD फ्लैग</b> (Authentic Data) पुष्टि करता है कि रूट से इस डोमेन तक पूरी चेन सत्यापित है।<br><br>' +
      '<b>एल्गोरिदम रेटिंग</b> <a href="https://www.rfc-editor.org/rfc/rfc8624">RFC 8624</a> के अनुसार: <b>Ed25519</b> (alg 15) और <b>ECDSA P-256</b> (alg 13) सबसे मजबूत हैं। ' +
      'RSA/SHA-256 (alg 8) स्वीकार्य है। RSA/SHA-1 (alg 5) और DSA वेरिएंट कमज़ोर या असुरक्षित हैं।',
    MX:
      '<b>MX (Mail eXchange) रिकॉर्ड</b> (<a href="https://www.rfc-editor.org/rfc/rfc5321">RFC 5321</a>) अन्य सर्वरों को बताते हैं कि आपके डोमेन का मेल कहाँ डिलीवर करना है। ' +
      'कम प्राथमिकता संख्याएं पहले आज़माई जाती हैं (प्राथमिकता 10 पहले 20 से)।<br><br>' +
      '<b>MX के लिए DNSSEC क्यों महत्वपूर्ण:</b> MX रिकॉर्ड जाली बनाने में सक्षम हमलावर सभी इनकमिंग मेल को रीडायरेक्ट कर सकता है। ' +
      'DNSSEC-सत्यापित MX रिकॉर्ड इसे रोकते हैं।',
    DANE:
      '<b>DANE</b> (<a href="https://www.rfc-editor.org/rfc/rfc7672">RFC 7672</a>) TLSA रिकॉर्ड (<a href="https://www.rfc-editor.org/rfc/rfc6698">RFC 6698</a>) का उपयोग करके मेल सर्वरों को TLS प्रमाणपत्र सत्यापित करने देता है ' +
      'बिना व्यावसायिक CA पर निर्भर हुए। <b>_25._tcp.&lt;mx-hostname&gt;</b> पर क्वेरी की जाती है।<br><br>' +
      '<b>DNSSEC अनिवार्य:</b> DNSSEC के बिना TLSA रिकॉर्ड जाली बनाए जा सकते हैं और DANE कोई सुरक्षा नहीं देता।',
    SPF:
      '<b>SPF (Sender Policy Framework, <a href="https://www.rfc-editor.org/rfc/rfc7208">RFC 7208</a>)</b> निर्दिष्ट करता है कि कौन से सर्वर आपके डोमेन के लिए मेल भेजने के अधिकृत हैं। ' +
      'प्राप्त करने वाले सर्वर जाँचते हैं कि भेजने वाला IP मेल खाता है या नहीं।<br><br>' +
      '<b>क्वालिफायर:</b> <b>-all</b> (हार्ड फेल) अनधिकृत प्रेषकों को अस्वीकार करता है \u2014 सबसे मजबूत। ' +
      '<b>~all</b> (सॉफ्ट फेल) उन्हें संदिग्ध चिह्नित करता है। <b>?all</b> (तटस्थ) कोई सुरक्षा नहीं देता। ' +
      '<b>+all</b> सभी को अनुमति देता है \u2014 इसे कभी उपयोग न करें।',
    DKIM:
      '<b>DKIM सिलेक्टर क्या है?</b> DKIM (<a href="https://www.rfc-editor.org/rfc/rfc6376">RFC 6376</a>) आउटगोइंग मेल पर हस्ताक्षर करने के लिए पब्लिक-की क्रिप्टोग्राफी का उपयोग करता है। ' +
      'एक सिलेक्टर (जैसे <code>google</code>) एक लेबल है जो <code>&lt;selector&gt;._domainkey.&lt;domain&gt;</code> पर प्रकाशित DKIM पब्लिक की की ओर इंगित करता है।<br><br>' +
      '<b>सिलेक्टर खोजना:</b> किसी भी प्राप्त मेल के <code>DKIM-Signature:</code> हेडर में देखें। ' +
      '<code>s=</code> टैग में सिलेक्टर होता है। कस्टम सिलेक्टर स्वचालित रूप से खोजे नहीं जा सकते।',
    TLSRPT:
      '<b>TLS-RPT (<a href="https://www.rfc-editor.org/rfc/rfc8460">RFC 8460</a>)</b> भेजने वाले मेल सर्वरों से TLS विफलता रिपोर्ट प्राप्त करने देता है। ' +
      '<code>_smtp._tls.&lt;domain&gt;</code> पर TXT रिकॉर्ड के रूप में प्रकाशित।<br><br>' +
      '<b>रिपोर्टिंग endpoints rua=:</b> रिपोर्ट <code>mailto:</code> पतों या <code>https:</code> एग्रीगेशन सेवाओं को भेजी जाती हैं। ' +
      'HTTPS endpoints उत्कृष्ट हैं; mailto अच्छा है।',
    MTASTS:
      '<b>MTA-STS (<a href="https://www.rfc-editor.org/rfc/rfc8461">RFC 8461</a>)</b> भेजने वाले सर्वरों को आपके डोमेन पर डिलीवरी के समय TLS की आवश्यकता करने और ' +
      'आपके मेल सर्वर के प्रमाणपत्र को सत्यापित करने का निर्देश देता है।<br><br>' +
      '<b>नीति मोड:</b> <b>enforce</b> \u2014 वैध प्रमाणपत्र के साथ TLS अनिवार्य, अन्यथा डिलीवरी अस्वीकार। ' +
      '<b>testing</b> \u2014 TLS-RPT डेटा एकत्र करें बिना लागू किए। ' +
      '<b>none</b> \u2014 स्पष्ट रूप से अक्षम।',
    CAA:
      '<b>CAA (Certification Authority Authorization, <a href="https://www.rfc-editor.org/rfc/rfc8659">RFC 8659</a>)</b> प्रतिबंधित करता है कि कौन से CA TLS प्रमाणपत्र जारी कर सकते हैं।<br><br>' +
      '<b>टैग:</b> <b>issue</b> \u2014 सामान्य प्रमाणपत्रों के लिए CA अधिकृत करता है। ' +
      '<b>issuewild</b> \u2014 wildcard प्रमाणपत्रों के लिए। ' +
      '<b>iodef</b> \u2014 नीति उल्लंघनों की रिपोर्ट कहाँ करें।<br><br>' +
      '<b>CAA रिकॉर्ड के बिना</b>, डोमेन सत्यापन पास करने वाला कोई भी CA प्रमाणपत्र जारी कर सकता है।',
    RPKI:
      '<b>RPKI (Resource Public Key Infrastructure)</b> IP पते के मालिकों को Route Origin Authorizations (ROA) प्रकाशित करने देता है ' +
      'जो बताते हैं कि कौन सा ASN उनके prefixes की घोषणा करने के लिए अधिकृत है।<br><br>' +
      '<b>वैध</b> \u2014 मिलान करने वाला ROA मौजूद: prefix BGP हाईजैक से सुरक्षित। ' +
      '<b>अमान्य</b> \u2014 ROA मौजूद लेकिन वर्तमान घोषणा अधिकृत नहीं। ' +
      '<b>बिना ROA</b> \u2014 कोई ROA नहीं: prefix असुरक्षित लेकिन routable।',
    ASPA:
      '<b>ASPA (Autonomous System Provider Authorization, <a href="https://www.rfc-editor.org/rfc/rfc9582">RFC 9582</a>)</b> एक AS को उन upstream प्रदाताओं की घोषणा करने देता है जिन्हें वह उपयोग करने के लिए अधिकृत है।<br><br>' +
      '<b>प्रकाशित</b> \u2014 घोषित प्रदाताओं के साथ ASPA रिकॉर्ड मौजूद। ' +
      '<b>ASPA के बिना</b> \u2014 कोई प्रकाशित रिकॉर्ड नहीं।<br><br>' +
      '<b>नोट:</b> RFC 9582 अभी भी एक प्रस्तावित मानक है और वास्तविक तैनाती सीमित है \u2014 ASPA रिकॉर्ड की अनुपस्थिति आपके स्कोर को प्रभावित नहीं करती।',
    STXT:
      '<b>security.txt (<a href="https://www.rfc-editor.org/rfc/rfc9116">RFC 9116</a>)</b> भेद्यता प्रकटीकरण जानकारी प्रकाशित करने का मानक है।<br><br>' +
      'फ़ाइल को <code>/.well-known/security.txt</code> (पसंदीदा) या <code>/security.txt</code> पर रखें।<br><br>' +
      '<b>अनिवार्य फ़ील्ड:</b> <code>Contact</code> \u2014 भेद्यताएं कहाँ रिपोर्ट करें। ' +
      '<code>Expires</code> \u2014 ISO 8601 दिनांक जिसके बाद फ़ाइल पर भरोसा नहीं करना चाहिए।<br><br>' +
      '<b>वैकल्पिक फ़ील्ड:</b> <code>Encryption</code>, <code>Policy</code>, ' +
      '<code>Acknowledgments</code>, <code>Preferred-Languages</code>, <code>Canonical</code>, <code>Hiring</code>।',
    WHOIS:
      '<b>WHOIS / RDAP</b> Registration Data Access Protocol (<a href="https://www.rfc-editor.org/rfc/rfc7480">RFC 7480</a>) के माध्यम से डोमेन पंजीकरण डेटा प्रदान करता है।<br><br>' +
      '<b>नोट:</b> हाल ही में बनाया गया डोमेन कम विश्वास और मैलवेयर वितरण, फ़िशिंग या धोखाधड़ी के लिए उपयोग के बढ़ते जोखिम का संकेत है। ' +
      'यदि आप ऐसा डोमेन जाँच रहे हैं जो आपका नहीं है, तो बहुत हाल की निर्माण तिथि को चेतावनी संकेत मानें।',
    BIMI:
      '<b>BIMI को व्यापक रूप से एक मार्केटिंग टूल माना जाता है जो किसी को कोई अतिरिक्त सुरक्षा मूल्य नहीं देता। मेलबॉक्स में लोगो दिखाकर "साबित" करना कि यह असली प्रेषक है, वैसा ही है जैसे कोई GIF छवि जो कहे "100% गारंटीड"। अगर आप फिर भी CA को इसके लिए भुगतान करना चाहते हैं, तो आगे बढ़ें।</b><br><br>' +
      '<b>BIMI (Brand Indicators for Message Identification)</b> संगठनों को समर्थित मेल क्लाइंट (जैसे Gmail, Apple Mail, Yahoo) में अपना लोगो दिखाने देता है।<br><br>' +
      '<b>आवश्यकताएं:</b> DMARC <code>p=quarantine</code> या <code>p=reject</code> प्रवर्तन मोड में होना चाहिए। ' +
      'BIMI मेल सुरक्षा को सीधे प्रभावित नहीं करता \u2014 यह ब्रांड दृश्यता सुविधा है।',
    PTR:
      '<b>PTR रिकॉर्ड</b> IP पतों को होस्टनामों से मैप करते हैं \u2014 A/AAAA रिकॉर्ड के विपरीत।<br><br>' +
      '<b>FCrDNS (Forward-Confirmed reverse DNS):</b> PTR रिकॉर्ड "फॉरवर्ड-कन्फर्म्ड" होता है जब PTR मूल्य आगे मूल IP पर resolve होता है। ' +
      'कई स्पैम फ़िल्टर और प्राप्तकर्ता MTA MX होस्ट के लिए FCrDNS जाँचते हैं।<br><br>' +
      '<b>यह जाँच</b> प्रत्येक MX होस्ट के लिए A और AAAA रिकॉर्ड resolve करती है, प्रत्येक IP के लिए PTR क्वेरी करती है और जाँचती है कि PTR मूल्य MX होस्टनाम से मेल खाता है या नहीं। ' +
      'समग्र ग्रेड को प्रभावित नहीं करती।',
    SELECTOR_HELP:
      '<b>DKIM \u0938\u093f\u0932\u0947\u0915\u094d\u091f\u0930 \u0915\u094d\u092f\u093e \u0939\u0948?</b> \u0938\u093f\u0932\u0947\u0915\u094d\u091f\u0930 \u090f\u0915 \u091b\u094b\u091f\u093e \u0932\u0947\u092c\u0932 \u0939\u0948 (\u091c\u0948\u0938\u0947 <code>google</code>) \u091c\u094b \u092a\u094d\u0930\u093e\u092a\u094d\u0924\u0915\u0930\u094d\u0924\u093e \u092e\u0947\u0932 \u0938\u0930\u094d\u0935\u0930\u094b\u0902 \u0915\u094b \u092c\u0924\u093e\u0924\u093e \u0939\u0948 \u0915\u093f \u0908\u092e\u0947\u0932 \u092a\u0930 DKIM \u0939\u0938\u094d\u0924\u093e\u0915\u094d\u0937\u0930 \u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0915\u094c\u0928 \u0938\u0940 \u0938\u093e\u0930\u094d\u0935\u091c\u0928\u093f\u0915 \u0915\u0941\u0902\u091c\u0940 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0928\u093e \u0939\u0948\u0964 ' +
      '\u090f\u0915 \u0921\u094b\u092e\u0947\u0928 \u092e\u0947\u0902 \u0915\u0908 \u0938\u093f\u0932\u0947\u0915\u094d\u091f\u0930 \u0939\u094b \u0938\u0915\u0924\u0947 \u0939\u0948\u0902 \u2014 \u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915 \u092e\u0947\u0932 \u092a\u094d\u0930\u0926\u093e\u0924\u093e \u0915\u0947 \u0932\u093f\u090f \u092f\u093e \u0915\u0941\u0902\u091c\u0940 \u0930\u094b\u091f\u0947\u0936\u0928 \u0915\u0947 \u0932\u093f\u090f\u0964<br><br>' +
      '<b>\u0938\u093f\u0932\u0947\u0915\u094d\u091f\u0930 \u0915\u0948\u0938\u0947 \u0916\u094b\u091c\u0947\u0902:</b> \u0915\u094b\u0908 \u092d\u0940 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0908\u092e\u0947\u0932 \u0916\u094b\u0932\u0947\u0902, \u092a\u0942\u0930\u0947 \u0939\u0947\u0921\u0930 \u0926\u0947\u0916\u0947\u0902 \u0914\u0930 <code>DKIM-Signature:</code> \u0939\u0947\u0921\u0930 \u0922\u0942\u0902\u0922\u0947\u0902\u0964 ' +
      '<code>s=</code> \u091f\u0948\u0917 \u092e\u0947\u0902 \u0938\u093f\u0932\u0947\u0915\u094d\u091f\u0930 \u0915\u093e \u0928\u093e\u092e \u0939\u094b\u0924\u093e \u0939\u0948\u0964 Gmail \u092e\u0947\u0902: \u0924\u0940\u0928-\u092c\u093f\u0902\u0926\u0941 \u092e\u0947\u0928\u0942 \u2192 \u201c\u092e\u0942\u0932 \u0926\u093f\u0916\u093e\u090f\u0902\u201d\u0964<br><br>' +
      '<b>\u092f\u0939\u093e\u0901 \u0905\u0924\u093f\u0930\u093f\u0915\u094d\u0924 \u0915\u094d\u092f\u094b\u0902 \u091c\u094b\u0921\u093c\u0947\u0902?</b> \u0932\u0917\u092d\u0917 85 \u0938\u093e\u092e\u093e\u0928\u094d\u092f \u0938\u093f\u0932\u0947\u0915\u094d\u091f\u0930 \u0928\u093e\u092e \u0938\u094d\u0935\u091a\u093e\u0932\u093f\u0924 \u0930\u0942\u092a \u0938\u0947 \u091c\u093e\u0902\u091a\u0947 \u091c\u093e\u0924\u0947 \u0939\u0948\u0902\u0964 ' +
      '\u0915\u0938\u094d\u091f\u092e \u092f\u093e \u0915\u092e-\u0938\u093e\u092e\u093e\u0928\u094d\u092f \u0938\u093f\u0932\u0947\u0915\u094d\u091f\u0930 \u0915\u0947 \u0932\u093f\u090f \u0907\u0938 \u092b\u093c\u0940\u0932\u094d\u0921 \u0915\u093e \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0947\u0902\u0964',
    // Keys added in later releases — backfilled
    IPV6:
      '<b>IPv6 (इंटरनेट प्रोटोकॉल संस्करण 6)</b> IPv4 का उत्तराधिकारी है, जो IPv4 के 32-बिट पता स्थान की समाप्ति हल करने के लिए 128-बिट पतों का उपयोग करता है। ' +
      'IPv6 के बिना ईमेल अवसंरचना केवल-IPv6 प्रेषकों से मेल प्राप्त नहीं कर सकती और केवल-IPv6 पहुँच बढ़ने के साथ अगम्य हो सकती है।<br><br>' +
      '<b>ईमेल के लिए यह क्यों मायने रखता है:</b> AAAA रिकॉर्ड रहित MX होस्ट केवल-IPv6 भेजने वाले सर्वर से मेल स्वीकार नहीं कर सकते। ' +
      'IPv6 रहित NS होस्ट केवल-IPv6 रिज़ॉल्वर की DNS क्वेरी का उत्तर नहीं दे सकते। ' +
      'दोनों ही स्थितियाँ मूक वितरण विफलताएँ उत्पन्न करती हैं जिनका निदान कठिन होता है।<br><br>' +
      '<b>अनिवार्य सरकारी आवश्यकताएँ \u2014 चुनिंदा देश:</b><br>' +
      '<b>नॉर्वे:</b> <a href="https://lovdata.no/dokument/SF/forskrift/2013-04-05-959">Forskrift om IT-standarder i offentlig forvaltning \u00a712</a> \u2014 1 जनवरी 2023 से सरकारी सेवाओं के लिए IPv6 अनिवार्य; अधिकतम विस्तार 1 जनवरी 2025 तक।<br>' +
      '<b>अमेरिका:</b> OMB ज्ञापन M-21-07 \u2014 संघीय एजेंसियों को वित्त वर्ष 2025 तक केवल-IPv6 अवसंरचना संचालित करनी होगी।<br>' +
      '<b>यूरोपीय संघ:</b> European Interoperability Framework / NIS2 निर्देश \u2014 सदस्य देशों की सार्वजनिक सेवाओं में IPv6 तत्परता को बढ़ावा देते हैं।<br>' +
      '<b>भारत:</b> DoT राष्ट्रीय दूरसंचार नीति 2018 \u2014 ISP, सरकार और सार्वजनिक क्षेत्र की संस्थाओं के लिए IPv6 अनिवार्य।<br>' +
      '<b>चीन:</b> MIIT IPv6 Scale Deployment Action Plan 2017 \u2014 ISP, सरकार और प्रमुख प्लेटफ़ॉर्म पर पूर्ण परिनियोजन।<br><br>' +
      'यह जाँच डोमेन स्वयं, सभी MX होस्ट और सभी NS होस्ट के लिए AAAA रिकॉर्ड की क्वेरी करती है। ' +
      'यह समग्र सुरक्षा स्कोर को <b>प्रभावित नहीं</b> करती \u2014 केवल सूचनात्मक है।'
  },
};
