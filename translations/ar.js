// العربية (ar) — ترجمة مدقق أمان DNS للبريد الإلكتروني

const LANG_AR = {

  // ── s: نصوص ثابتة ──────────────────────────────────────────────────────────
  s: {
    APP_TITLE:           'مدقق أمان DNS للبريد الإلكتروني',
    APP_SUBTITLE:        'تحقق من DNSSEC وMX وSPF وDKIM والمزيد لأي نطاق',
    LABEL_DOMAIN:        'النطاق',
    LABEL_SELECTORS:     'محددات DKIM إضافية (مفصولة بفاصلة)',
    BTN_CHECK:           'فحص',
    BTN_CHECKING:        'جارٍ الفحص\u2026',
    BTN_COPY_LINK:       '\uD83D\uDD17 نسخ الرابط',
    BTN_COPIED:          '\u2713 تم النسخ!',
    LANG_LABEL:          'اللغة',
    OVERVIEW_PLACEHOLDER:'أدخل اسم نطاق مثل google.com أو microsoft.com ثم انقر على فحص. يُرجى العلم بأن النتائج قد لا تكون دقيقة بسبب قيود متصفحك أو الشبكة التي تجري منها الاختبار. الدرجات لأغراض إرشادية فحسب ولا تعكس بالضرورة الحقيقة الكاملة أو الامتثال للمعايير ذات الصلة.',
    RUNNING_CHECKS:      'جارٍ إجراء الفحوصات\u2026',
    CHECKING:            'جارٍ الفحص\u2026',

    PANEL_DNSSEC:        'DNSSEC',
    PANEL_MX:            'سجلات MX',
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
    PANEL_RECS:          'الإصلاحات',

    RECS_WHAT_TO_FIX:    'ما يجب إصلاحه',
    RECS_INFORMATIONAL:  'معلوماتي',
    RECS_ALL_GOOD:       'جميع الفحوصات ناجحة',
    RECS_ALL_EXCELLENT:  'كل شيء مُهيَّأ بشكل مثالي.',

    GRADE_TITLE:         'التقييم الإجمالي',
    GRADE_A_DESC:        'إعداد أمان بريد إلكتروني قوي.',
    GRADE_B_DESC:        'إعداد جيد مع مشكلات طفيفة.',
    GRADE_C_DESC:        'مشكلات متوسطة \u2014 راجع التحذيرات.',
    GRADE_F_DESC:        'مشكلات حرجة \u2014 يُنصح باتخاذ إجراء فوري.',

    RATING_EXCELLENT:    'ممتاز',
    RATING_GOOD:         'جيد',
    RATING_WARNING:      'تحذير',
    RATING_FAIL:         'فشل',
    RATING_SKIP:         'تم التخطي',

    ERR_INVALID_DOMAIN:  'لا يبدو أنه نطاق صالح.',
    ERR_CHECK_FAILED:    'فشل الفحص',
    ERR_PREFIX:          'خطأ: ',

    THEME_LIGHT:         '\u2600 فاتح',
    THEME_DARK:          '\u263D داكن',
    THEME_TO_DARK:       'التبديل إلى السمة الداكنة',
    THEME_TO_LIGHT:      'التبديل إلى السمة الفاتحة',
    SETTINGS_THEME:      'السمة',
    SETTINGS_SCORING:    'نظام التقييم',
    SCORING_TITLE:       'كيف يعمل التقييم',
    SCORING_CLOSE:       'إغلاق',
    SCORING_SCORED:      'الفحوصات المقيّمة',
    SCORING_INFO:        'معلوماتي (غير مقيّم)',
    SCORING_RATINGS:     'نقاط التقييم',
    SCORING_GRADES:      'عتبات الدرجات',

    OPT_SKIP_CORS:       'تخطي فحوصات MTA-STS وSecurity.txt لتجنب مشكلات CORS',
    CHECK_SKIPPED:       'تم تخطي هذا الفحص.',

    STATS_TITLE:         '\uD83E\uDD13 إحصائيات',
    STATS_TOTAL_TIME:    'إجمالي وقت الفحص',
    STATS_DOH_REQUESTS:  'استعلامات DoH لـ Cloudflare',
    STATS_RIPE_REQUESTS: 'طلبات RIPE Stat API',
    STATS_RIPE_CACHE:    'من التخزين المؤقت',
    STATS_HTTP_FETCHES:  'طلبات HTTP',
    STATS_CHECK_TIMING:  'توقيت كل فحص',
    STATS_DKIM_SELECTORS:'محددات DKIM المُختبرة / المُكتشفة',
    STATS_IPS_RESOLVED:  'عناوين IP المحلولة (RPKI)',
    STATS_MS:            'ms',

    DNSSEC_VALIDATED:    '\u2713 تم التحقق من DNSSEC (AD=true)',
    DNSSEC_UNVALIDATED:  '\u26a0 موقَّع لكن غير مُتحقَّق منه بواسطة المحلل (AD=false)',
    DNSSEC_RESOLVER_ONLY:'تم التحقق من DNSSEC بواسطة المحلل، لكن تعذّر استرداد سجلات المفاتيح.',
    DNSSEC_NOT_SIGNED:   'لم يتم العثور على سجلات DNSKEY \u2014 النطاق غير موقَّع بـ DNSSEC.',
    DNSSEC_ALG_DETAILS:  'تفاصيل الخوارزمية',

    MX_HOST_DETAILS:     'تفاصيل خوادم MX',
    MX_NO_DNSSEC:        'بدون DNSSEC',
    MX_SIGNED_UNVAL:     '\u26a0 موقَّع، غير مُتحقَّق منه',
    MX_RRSET_WARN:       '\u26a0 مجموعة سجلات MX غير مُتحقَّق منها بـ DNSSEC \u2014 تعذّر التحقق الكريبتوغرافي من قائمة خوادم البريد.',
    MX_NULL_SUGGEST:     'لا توجد سجلات MX \u2014 يُنصح بنشر سجل MX فارغ (RFC 7505) مع SPF "-all" وDMARC p=reject لمنع إساءة استخدام البريد بالكامل',

    DANE_NO_TLSA:        'لا يوجد سجل TLSA',
    DANE_TLSA_UNVAL:     '\u26a0 تم العثور على TLSA، غير مُتحقَّق منه بـ DNSSEC',
    DANE_NO_VALIDATED:   'لم يتم العثور على سجلات TLSA مُتحقَّق منها بـ DNSSEC.',
    DANE_TLSA_PER_MX:    'سجلات TLSA لكل خادم MX',

    SPF_RECORD_ANALYSIS: 'السجل والتحليل',
    SPF_RECORD:          'السجل',
    SPF_MECHANISMS:      'آليات SPF',
    SPF_IP_ADDRESSES:    'عناوين IP',
    SPF_IP_PREFIXES:     'بوادئ IP',
    SPF_DNS_NAMES:       'أسماء DNS',
    SPF_IMPLICIT:        '(ضمني)',
    SPF_ORIGINAL_RECORD: 'سجل SPF الأصلي',
    SPF_PTR_DEPRECATED:  'آلية ptr مُهمَلة',
    SPF_MISSING_ALL:     'آلية "all" مفقودة \u2014 السياسة غير مكتملة',
    SPF_ALL_HARDFAIL:    '"-all" (فشل صارم) \u2014 يتم رفض المرسلين غير المصرح لهم',
    SPF_ALL_SOFTFAIL:    '"~all" (فشل ناعم) \u2014 يتم تمييز المرسلين غير المصرح لهم لكن قد يتم تسليمهم',
    SPF_ALL_NEUTRAL:     '"?all" (محايد) \u2014 لا يوفر أي حماية',
    SPF_NO_RECORD:       'لم يتم العثور على سجل SPF',

    DKIM_FOUND_SECTION:  'المحددات المُكتشفة',
    DKIM_DNS_KEY_DETAILS:'اسم DNS وتفاصيل المفتاح',
    DKIM_PROVIDER_REF:   'مرجع المزود',
    DKIM_TH_PROVIDER:    'المزود',
    DKIM_TH_SELECTORS:   'المحددات الافتراضية',
    DKIM_TH_INFRA:       'البنية التحتية',
    DKIM_AUTO_TESTED_LABEL: 'محددات تم اختبارها تلقائياً',
    DKIM_REVOKED:        'تم إلغاء المفتاح (وسم p= فارغ)',
    DKIM_KEY_TYPE:       'نوع المفتاح',
    DKIM_KEY_SIZE:       'حجم المفتاح',
    DKIM_BITS:           'بت',
    DKIM_BITS_EQ:        ' (ما يعادل 256 بت)',
    DKIM_KEY_RATING:     'التقييم',
    DKIM_HASH_ALGS:      'خوارزميات التجزئة',
    DKIM_SERVICE_TYPE:   'نوع الخدمة',
    DKIM_NOTES_FIELD:    'ملاحظات',
    DKIM_DNSSEC:         'DNSSEC',
    DKIM_DNSSEC_OK:      '\u2713 مُتحقَّق منه',
    DKIM_DNSSEC_FAIL:    '\u2717 غير مُتحقَّق منه',
    DKIM_NONE_FOUND_NOTE:'هذا لا يعني أن DKIM غير مُهيَّأ \u2014 يعني فقط أنه لم يتم العثور على أيٍّ من أسماء المحددات القياسية الشائعة.',

    TLSRPT_FOUND:        'تم العثور على سجل TLS-RPT.',
    TLSRPT_NOT_FOUND:    'لا يوجد سجل TLS-RPT.',
    TLSRPT_RECORD_ANALYSIS: 'السجل والتحليل',
    TLSRPT_NO_RECORD_NXDOMAIN: 'لا يوجد سجل TLS-RPT \u2014 لن يتم استقبال تقارير فشل TLS في SMTP',
    TLSRPT_NO_RECORD:    'لم يتم العثور على سجل TLS-RPT',
    TLSRPT_MULTI_RECORDS:'تم العثور على سجلات TLS-RPT متعددة \u2014 يجب وجود سجل واحد فقط',
    TLSRPT_NO_RUA:       'لا يوجد URI للإبلاغ rua= \u2014 لا يمكن تسليم التقارير',

    MTASTS_FOUND:        'تم العثور على سجل DNS لـ MTA-STS.',
    MTASTS_NOT_FOUND:    'لا يوجد سجل DNS لـ MTA-STS.',
    MTASTS_POLICY_ANALYSIS: 'السياسة والتحليل',
    MTASTS_RECORD_NOTES: 'السجل والملاحظات',
    MTASTS_NO_RECORD_NXDOMAIN: 'لا يوجد سجل DNS لـ MTA-STS \u2014 TLS غير مفروض للتسليم الوارد',
    MTASTS_NO_RECORD:    'لم يتم العثور على سجل DNS لـ MTA-STS',
    MTASTS_MULTI_RECORDS:'تم العثور على سجلات DNS متعددة لـ MTA-STS \u2014 يجب وجود سجل واحد فقط',
    MTASTS_NO_ID:        'سجل MTA-STS يفتقر إلى حقل id= الإلزامي',
    MTASTS_MODE_ENFORCE: 'وضع السياسة: enforce \u2014 TLS إلزامي، يتم رفض التسليم بدون TLS',
    MTASTS_MODE_TESTING: 'وضع السياسة: testing \u2014 مراقبة فشل TLS دون تطبيق',
    MTASTS_MODE_NONE:    'وضع السياسة: none \u2014 MTA-STS معطَّل صراحةً',
    MTASTS_MX_MATCH:     'جميع خوادم MX تطابق أنماط mx: في سياسة MTA-STS',
    MTASTS_MX_MISMATCH:  'خادم MX واحد أو أكثر غير مُغطَّى بأي نمط mx: في السياسة',
    MTASTS_MX_NO_PATTERNS: 'سياسة MTA-STS لا تحتوي على أسطر mx:',

    CAA_NO_RECORDS:      'لا توجد سجلات CAA.',
    CAA_RECORDS_ANALYSIS:'السجلات والتحليل',
    CAA_CA_DNSSEC:       'DNSSEC لنطاق CA',
    CAA_DNSSEC_VALIDATED:'تم التحقق من DNSSEC',
    CAA_DNSSEC_SIGNED:   'موقَّع لكن غير مُتحقَّق منه بواسطة المحلل',
    CAA_DNSSEC_NONE:     'غير موقَّع بـ DNSSEC',
    CAA_DNSSEC_ERROR:    'خطأ: ',
    CAA_NO_RECORDS_ISSUE:'لا توجد سجلات CAA \u2014 يمكن لأي جهة إصدار شهادات إصدار شهادات لهذا النطاق',
    CAA_ISSUE_PROHIBITED:'إصدار الشهادات محظور لجميع جهات الإصدار (issue ";")',
    CAA_NO_IODEF:        'لا يوجد وسم iodef= \u2014 لن يتم الإبلاغ عن انتهاكات سياسة CA',

    RPKI_HOST_DETAILS:   'تفاصيل المضيف',
    RPKI_NO_IPS:         'لم يتم حل أي عناوين IP',
    RPKI_ASPA_TITLE:     'ASPA (تفويض مزود AS)',
    RPKI_ASPA_PROVIDERS: 'المزودون:',

    ASPA_NO_DATA:        'لا تتوفر بيانات ASPA',

    STXT_FOUND:          '\u2713 تم العثور على security.txt',
    STXT_RAW:            'security.txt الخام',
    STXT_NOT_FOUND:      'غير موجود.',
    STXT_CORS_BLOCKED:   'تعذّر جلب security.txt \u2014 الخادم لا يسمح بالطلبات عبر الأصول (CORS). قد يكون الملف موجوداً؛ تحقق يدوياً:',
    STXT_CHECK_MANUALLY: 'عناوين URL التي تم فحصها:',
    CORS_SECURITY_NOTE:  'هذا أمر جيد! الخادم يتمتع بأمان أعلى من المعتاد. ومع ذلك، لهذا السبب لا يمكن إتمام هذا الفحص تلقائياً.',
    STXT_NO_CONTACT:     'حقل Contact الإلزامي مفقود.',
    STXT_NO_EXPIRES:     'حقل Expires مفقود \u2014 إلزامي وفقاً لـ',
    STXT_BAD_DATE:       'حقل Expires يحتوي على تنسيق تاريخ غير صالح.',
    STXT_ENCRYPTION:     'مفتاح التشفير مرتبط.',
    STXT_POLICY:         'سياسة الإفصاح عن الثغرات مرتبطة.',

    WHOIS_RDAP_OK:       '\u2713 تم استرداد بيانات RDAP',
    WHOIS_ROW_REGISTRAR: 'المسجّل',
    WHOIS_ROW_CREATED:   'تاريخ الإنشاء',
    WHOIS_ROW_UPDATED:   'آخر تحديث',
    WHOIS_ROW_EXPIRES:   'تاريخ الانتهاء',
    WHOIS_ROW_HANDLE:    'المعرف',
    WHOIS_ROW_STATUS:    'الحالة',
    WHOIS_NS_TITLE:      'خوادم الأسماء',
    WHOIS_EXPIRED:       '\u26a0 انتهت صلاحية تسجيل النطاق!',
    WHOIS_FAILED:        'فشل البحث في RDAP.',

    DMARC_FOUND:         'تم العثور على سجل DMARC.',
    DMARC_NOT_FOUND:     'لا يوجد سجل DMARC.',
    DMARC_RECORD_ANALYSIS: 'السجل والتحليل',
    DMARC_POLICY_NONE:   'p=none \u2014 مراقبة فقط، لا تطبيق',
    DMARC_POLICY_QUARANTINE: 'p=quarantine \u2014 الرسائل المشبوهة تُرسَل إلى البريد المزعج',
    DMARC_POLICY_REJECT: 'p=reject \u2014 يتم رفض الرسائل غير المصرح بها',
    DMARC_SP_REJECT:     'sp=reject \u2014 النطاقات الفرعية: يتم رفض الرسائل غير المصرح بها',
    DMARC_SP_QUARANTINE: 'sp=quarantine \u2014 النطاقات الفرعية: الرسائل المشبوهة تُرسَل إلى البريد المزعج',
    DMARC_SP_NONE:       'sp=none \u2014 النطاقات الفرعية: بدون تطبيق',
    DMARC_ADKIM_STRICT:  'adkim=s \u2014 محاذاة معرّف DKIM: صارمة',
    DMARC_ASPF_STRICT:   'aspf=s \u2014 محاذاة معرّف SPF: صارمة',
    DMARC_NO_RUA:        'لا يوجد rua= \u2014 لن يتم استقبال تقارير DMARC المجمّعة',
    DMARC_NO_RECORD_NXDOMAIN: 'لا يوجد سجل DMARC \u2014 لا يمكن رفض المرسلين غير المصرح لهم',
    DMARC_NO_RECORD:     'لم يتم العثور على سجل DMARC',
    DMARC_MULTI_RECORDS: 'سجلات DMARC متعددة \u2014 يجب وجود سجل واحد فقط',
    // DMARCbis (RFC 9989 / 9990 / 9991) \u2014 عناوين الأقسام
    DMARCBIS_TITLE:            'توافق DMARCbis \u2014 RFC 9989 / 9990 / 9991',
    DMARCBIS_INTRO:            'يُلغي RFC 9989 كلاً من RFC 7489 وRFC 9091، ويقسّم التقارير بين RFC 9990 (المجمّعة) وRFC 9991 (تقارير الفشل). هذه الفحوص إعلامية ولا تؤثر على التقييم.',
    DMARCBIS_DISCOVERY_TITLE:  'اكتشاف السياسة \u2014 اجتياز شجرة DNS (RFC 9989 \u00a74.10)',
    DMARCBIS_TAGS_TITLE:       'توافق الوسوم (RFC 9989 \u00a74.7، \u00a79.3)',
    DMARCBIS_EXTAUTH_TITLE:    'تفويض الوجهات الخارجية (RFC 9990 \u00a74، RFC 9991 \u00a75)',
    DMARCBIS_SUGGESTED_TITLE:  'سجل RFC 9989 المقترح',
    DMARCBIS_SUGGESTED_NOTE:   'أُزيلت الوسوم التاريخية وغير المسجّلة، ونُقل pct=0 إلى t=y، وأُضيفت الوسوم التي يوصي بها RFC 9989 على نطاق المؤسسة. قيمة السياسة منقولة كما هي \u2014 راجعها قبل النشر.',
    DMARCBIS_TW_TAG_AUTHOR:    'نطاق المؤلف',
    DMARCBIS_TW_TAG_ORG:       'نطاق المؤسسة',
    DMARCBIS_TW_STEP_FOUND:    'سجل',
    DMARCBIS_TW_STEP_NONE:     'لا شيء',
    DMARCBIS_TW_STEP_MULTI:    'متعددة',
    DMARCBIS_TW_STEP_ERROR:    'خطأ',
    // مفاتيح ملاحظات DMARCbis (ثابتة)
    DMARCBIS_TW_NO_POLICY:     'لا يوجد سجل سياسة DMARC في أي موضع من اجتياز الشجرة \u2014 لن يطبّق المستقبلون أي معالجة DMARC على هذا النطاق',
    DMARCBIS_TW_MULTI:         'أعادت إحدى خطوات الاجتياز سجلات DMARC متعددة \u2014 وRFC 9989 \u00a74.10 يتجاهلها جميعاً',
    DMARCBIS_TAGS_CLEAN:       'جميع الوسوم مسجّلة كنشطة في RFC 9989 \u00a79.3 \u2014 لا وسوم تاريخية أو غير مسجّلة أو غير صالحة',
    DMARCBIS_V_NOT_FIRST:      'الوسم v= مفقود أو ليس الوسم الأول \u2014 يوجب RFC 9989 \u00a74.7 تجاهل السجل بالكامل',
    DMARCBIS_P_DEFAULT_NONE:   'لا يوجد وسم p= صالح \u2014 RFC 9989 \u00a74.10.1: بما أن rua= موجود، يعامل المستقبلون السجل كأنه p=none',
    DMARCBIS_P_NO_PROCESSING:  'لا يوجد وسم p= صالح ولا rua= \u2014 RFC 9989 \u00a74.10.1: لن يطبّق المستقبلون أي معالجة DMARC إطلاقاً',
    DMARCBIS_PCT_ZERO:         'الوسم pct=0 تاريخي في RFC 9989 \u2014 استبدله بـ t=y، وهو الوسم الذي يحمل هذا المعنى الآن (الملحق A.6)',
    DMARCBIS_PCT_FULL:         'الوسم pct=100 تاريخي في RFC 9989 وكان أصلاً القيمة الافتراضية \u2014 احذف الوسم',
    DMARCBIS_T_NO_EFFECT:      'الوسم t=y بلا أثر طالما كانت السياسة none \u2014 RFC 9989 \u00a74.7',
    DMARCBIS_T_ENFORCED:       't=n \u2014 تُطبَّق السياسة المنشورة كما وردت (الافتراضي في RFC 9989)',
    DMARCBIS_NP_REJECT:        'np=reject \u2014 تُرفض الرسائل الواردة من نطاقات فرعية غير موجودة (RFC 9989 \u00a74.7)',
    DMARCBIS_NP_MISSING:       'لا يوجد وسم np= \u2014 أضافه RFC 9989 للنطاقات الفرعية غير الموجودة؛ ويُوصى بـ np=reject على نطاق المؤسسة',
    DMARCBIS_PSD_Y:            'psd=y \u2014 مُعلَن كنطاق لاحقة عامة؛ يتوقف اجتياز الشجرة هنا (RFC 9989 \u00a74.10.2)',
    DMARCBIS_PSD_N:            'psd=n \u2014 مُعلَن كنطاق للمؤسسة؛ يتوقف اجتياز الشجرة هنا (RFC 9989 \u00a74.10.2)',
    DMARCBIS_PSD_U:            'psd=u \u2014 يُترك تحديد نطاق المؤسسة لاجتياز الشجرة (الافتراضي في RFC 9989)',
    DMARCBIS_PSD_MISSING:      'لا يوجد وسم psd= \u2014 نشر psd=n على نطاق المؤسسة يُنهي اجتياز الشجرة فوراً ويزيل أي التباس',
    DMARCBIS_FO_NO_RUF:        'الوسم fo= موجود بدون ruf= \u2014 يوجب RFC 9989 \u00a74.7 تجاهل محتواه',
    DMARCBIS_URI_NO_MAILTO:    'لا يوجد عنوان mailto: في rua= \u2014 المستقبلون ملزمون بدعم mailto: فقط، لذا قد تُتجاهل المخططات الأخرى',
    DMARCBIS_EXT_NONE:         'لا توجد عناوين rua= أو ruf= للتفويض \u2014 بدون التقارير المجمّعة لا رؤية لحالات فشل DMARC',

    BIMI_FOUND:          'تم العثور على سجل BIMI.',
    BIMI_NOT_FOUND:      'لا يوجد سجل BIMI.',
    BIMI_RECORD_ANALYSIS:'السجل والتحليل',
    BIMI_NO_RECORD:      'لا يوجد سجل BIMI \u2014 لن يظهر شعار العلامة التجارية في عملاء البريد المدعومين',
    BIMI_NO_LOGO:        'l= (رابط الشعار) غائب أو فارغ \u2014 ضروري لعمل BIMI',
    BIMI_NO_AUTHORITY:   'a= (دليل السلطة) غائب \u2014 شهادة VMC مطلوبة لكي تعرض Gmail وغيرها الشعار',
    BIMI_LOGO_OK:        'رابط الشعار موجود',
    BIMI_AUTHORITY_OK:   'دليل السلطة (VMC) موجود',

    PTR_HOST_DETAILS:    'تفاصيل المضيف',
    PTR_NO_MX:           'لا توجد خوادم MX للتحقق من سجلات PTR',
    PTR_MATCH:           'FCrDNS مؤكَّد \u2014 PTR يطابق اسم مضيف MX',
    PTR_MISMATCH:        'PTR موجود لكنه لا يطابق اسم مضيف MX',
    PTR_MISSING:         'لم يتم العثور على سجل PTR',
    // Keys added in later releases — backfilled
    IPV6_HOST_DETAILS: 'تفاصيل العناوين لكل مضيف',
    IPV6_NO_AAAA: 'لا يوجد سجل AAAA',
    IPV6_NO_MX: 'لم يُعثر على مضيفات MX',
    IPV6_NO_NS: 'لم يُعثر على مضيفات NS',
    IPV6_MANDATORY_TITLE: 'متطلبات IPv6 الإلزامية',
    IPV6_MANDATORY_NOTE: '‏IPv6 مطلوب بموجب أنظمة حكومية في الدول التالية:',
    IPV6_DOMAIN_HAS_IPV6: '✓ النطاق لديه عنوان أو أكثر من نوع IPv6',
    IPV6_DOMAIN_NO_IPV6: 'النطاق بلا عنوان IPv6 — لا يمكن الوصول إليه إلا عبر IPv4',
    IPV6_ALL_MX_HAVE_IPV6: '✓ جميع مضيفات MX لديها عناوين IPv6',
    IPV6_SOME_MX_HAVE_IPV6: 'بعض مضيفات MX لديها IPv6 — وليس جميعها',
    IPV6_NO_MX_HAVE_IPV6: 'لا يوجد مضيف MX لديه عنوان IPv6',
    IPV6_ALL_NS_HAVE_IPV6: '✓ جميع مضيفات NS لديها عناوين IPv6',
    IPV6_SOME_NS_HAVE_IPV6: 'بعض مضيفات NS لديها IPv6 — وليس جميعها',
    IPV6_NO_NS_HAVE_IPV6: 'لا يوجد مضيف NS لديه عنوان IPv6',
    IPV6_MX_BADGE_YES: 'IPv6',
    IPV6_MX_BADGE_NO: 'بلا IPv6',
    SPF_NO_IP6_MECHS: 'مضيفات MX/NS تدعم IPv6، لكن لم يُعثر على أي مدخلات ip6: في سجل SPF — إذا كان هذا النطاق يرسل البريد عبر IPv6 فأضف آليات ip6: لتفويض تلك العناوين',
    SPF_LEGACY_TYPE: 'عُثر على نوع سجل SPF قديم (نوع DNS رقم 99) — مهجور منذ RFC 7208 (2014)؛ ينبغي إزالته',
    SPF_PROPAGATION_MISMATCH: 'سجل SPF يختلف بين محلّلي DNS لدى Cloudflare وGoogle — انتشار غير مكتمل أو خطأ في الإعداد',
    DMARC_PROPAGATION_MISMATCH: 'سجل DMARC يختلف بين محلّلي DNS لدى Cloudflare وGoogle — انتشار غير مكتمل أو خطأ في الإعداد',
    DKIM_ROTATION_NOTE: 'أفضل ممارسة: بدّل مفاتيح DKIM مرة واحدة سنوياً على الأقل. لا يمكن تحديد عمر المفتاح من DNS — تحقق من سياسة التبديل مع مزود البريد لديك.',
    CAA_ISSUEMAIL_NOTE: 'وسم issuemail موجود — يتحكم في إصدار شهادات S/MIME لهذا النطاق (RFC 8657)',
    RPKI_NS_DIVERSITY: 'تنوّع أرقام ASN لخوادم الأسماء',
    RPKI_NS_NO_ASN_DATA: 'لا تتوفر بيانات ASN لخوادم الأسماء',
    OVERVIEW_PROVIDERS: 'بنية البريد المكتشفة',
  },

  // ── d: نصوص ديناميكية (دوال سهمية) ─────────────────────────────────────────
  d: {
    MX_HOSTS_FOUND:        n => 'تم العثور على ' + n + ' خادم' + (n === 1 ? '' : ' MX') + (n === 1 ? ' MX' : '') + '.',
    DKIM_SELECTORS_FOUND:  n => 'تم العثور على ' + n + ' محدد',
    DKIM_ACROSS_PROVIDERS: n => 'عبر ' + n + ' مزود',
    DKIM_SELECTORS_TESTED: n => 'تم اختبار ' + n + ' محدد.',
    DKIM_NONE_FOUND:       n => 'لم يتم العثور على محددات DKIM. تم اختبار ' + n + ' محدداً.',
    DKIM_AUTO_TESTED:      n => n + ' محدد تم اختباره تلقائياً',
    SPF_FOUND_LOOKUPS:     n => 'تم العثور على سجل SPF. ' + n + ' آلية استعلام DNS.',
    SPF_MULTI_RECORDS:     n => 'تم العثور على سجلات SPF متعددة (' + n + ') \u2014 يجب وجود سجل واحد فقط',
    SPF_MULTI_MESSAGE:     n => 'سجلات SPF متعددة (' + n + ') \u2014 هذا خطأ في التهيئة.',
    SPF_LOOKUP_EXCEED:     n => n + ' آلية استعلام DNS تتجاوز حد RFC البالغ 10 (قد يسبب SPF PermError)',
    SPF_LOOKUP_HIGH:       n => n + ' آليات استعلام DNS \u2014 يقترب من حد RFC البالغ 10',
    SPF_REDIRECT:          v => 'redirect=' + v + ' موجود',
    SPF_IP4_BROAD:         (v, p) => 'ip4:' + v + ' له نطاق واسع جداً (/' + p + ' \u2264 /16)',
    SPF_IP6_BROAD:         (v, p) => 'ip6:' + v + ' له نطاق واسع جداً (/' + p + ' \u2264 /32)',
    SPF_REDIRECT_FOLLOWED: d => '\u2713 تم اتباع redirect= \u2014 السياسة الفعلية محمّلة من: ' + d,
    SPF_REDIRECT_FROM:     d => 'السياسة الفعلية (redirect \u2192 ' + d + ')',
    SPF_REDIRECT_NO_RECORD:d => 'هدف redirect= لا يحتوي على سجل SPF: ' + d,
    SPF_REDIRECT_MULTI:    d => 'هدف redirect= يحتوي على سجلات SPF متعددة: ' + d,
    SPF_REDIRECT_ERROR:    d => 'فشل جلب هدف redirect=: ' + d,
    CAA_RECORDS_FOUND:     n => 'تم العثور على ' + n + ' سجل CAA.',
    CAA_AUTHORIZED_CA:     n => 'جهة' + (n === 1 ? '' : ' إصدار') + ' مصرح لها: ',
    CAA_CRITICAL_COUNT:    n => n + ' سجل' + (n === 1 ? '' : 'ات') + ' بعلامة حرجة',
    DANE_VALIDATED_OF:     (v, t) => v + ' من ' + t + ' خادم MX لديها سجلات TLSA مُتحقَّق منها بـ DNSSEC.',
    TLSA_RECORDS_COUNT:    n => n + ' سجل TLSA',
    RPKI_SUMMARY:          (valid, total, inv, noRoa) => valid + '/' + total + ' عنوان IP مُغطَّى بـ ROA صالح' + (inv > 0 ? ' \u2014 ' + inv + ' غير صالح' : '') + (noRoa > 0 ? ' \u2014 ' + noRoa + ' بدون ROA' : ''),
    ASPA_SUMMARY:          (pub, total) => pub + '/' + total + ' ASN مع ASPA منشور',
    TLSRPT_ENDPOINT:       uri => 'نقطة الإبلاغ: ' + uri,
    TLSRPT_BAD_URI:        uri => 'مخطط URI rua= غير معروف: ' + uri,
    MTASTS_MAX_AGE_LOW:    age => 'max_age=' + age + 's أقل من يوم واحد \u2014 يُنصح باستخدام 604800 (أسبوع) أو أكثر',
    MTASTS_POLICY_UNKNOWN: mode => 'وضع السياسة غير معروف أو مفقود: ' + (mode || '(فارغ)'),
    MTASTS_POLICY_ERROR:   (e, url) => e + ' \u2014 تحقق من: ' + url,
    STXT_EXPIRES_WARN:     n => 'ينتهي خلال ' + n + ' يوم \u2014 جدّده قريباً.',
    STXT_EXPIRES_OK:       (d, n) => 'ينتهي: ' + d + ' (' + n + ' يوم).',
    STXT_EXPIRED:          d => 'انتهت صلاحية security.txt (' + d + ').',
    WHOIS_EXPIRES_SOON:    n => '\u26a0 ينتهي النطاق خلال ' + n + ' يوم \u2014 جدّده قريباً.',
    DOMAIN_INVALID:        d => '"' + d + '" لا يبدو أنه نطاق صالح.',
    SPF_ALL_PASSALL:       q => '"' + q + 'all" (قبول الكل) \u2014 يسمح لأي خادم بالإرسال كهذا النطاق',
    CAA_IODEF:             v => 'الإبلاغ عن الحوادث (iodef): ' + v,
    STXT_CONTACT_OK:       v => 'التواصل: ' + v,
    DMARC_POLICY_UNKNOWN:  p => 'قيمة p= غير معروفة: ' + p,
    DMARC_PCT_LOW:         pct => 'pct=' + pct + ' \u2014 السياسة مطبَّقة على ' + pct + '% فقط من الرسائل',
    DMARC_RUA_URI:         uri => 'التقارير المجمّعة (rua): ' + uri,
    DMARC_RUF_URI:         uri => 'التقارير الجنائية (ruf): ' + uri,
    // DMARCbis (RFC 9989 / 9990 / 9991)
    DMARCBIS_TW_AT_AUTHOR:   dom => 'سجل السياسة منشور على نطاق المؤلف (_dmarc.' + dom + ') \u2014 وهذا هو السجل الذي يطبّقه المستقبلون',
    DMARCBIS_TW_INHERITED:   (dom, tag, val) => 'لا يوجد سجل على نطاق المؤلف \u2014 يرث المستقبلون السياسة المنشورة على _dmarc.' + dom + ' مطبّقين ' + tag + '=' + val,
    DMARCBIS_TW_ORG_DOMAIN:  (dom, rule) => 'نطاق المؤسسة: ' + dom + ' \u2014 ' + ({
                               'psd-n':    'مثبّت بواسطة psd=n',
                               'psd-y':    'تسمية واحدة أسفل سجل يحمل psd=y',
                               'shortest': 'أقصر اسم في اجتياز الشجرة يحمل سجل DMARC',
                               'default':  'لم يُعثر على سجل في اجتياز الشجرة، لذا يُستخدم النطاق المستعلَم عنه',
                             }[rule] || rule),
    DMARCBIS_TW_QUERIES:     n => 'اجتياز الشجرة \u2014 ' + n + ' استعلام',
    DMARCBIS_V_CASE:         v => 'v=' + v + ' \u2014 قيمة الإصدار حسّاسة لحالة الأحرف في RFC 9989 \u00a74.7 ويجب أن تكون DMARC1 بالضبط',
    DMARCBIS_DUPLICATE_TAGS: l => 'وسم مكرر في السجل: ' + l + ' \u2014 يعتبره RFC 9989 \u00a74.8 خطأ نحوياً',
    DMARCBIS_PCT_PARTIAL:    v => 'أُزيل pct=' + v + ' في RFC 9989 (الملحق A.6) \u2014 كانت النسب الجزئية تُطبَّق بصورة غير متسقة؛ استخدم t=y أثناء الاختبار، وإلا فاحذف الوسم',
    DMARCBIS_RF_HISTORIC:    v => 'rf=' + v + ' تاريخي في سجل RFC 9989 \u00a79.3 \u2014 احذفه',
    DMARCBIS_RI_HISTORIC:    v => 'ri=' + v + ' تاريخي في سجل RFC 9989 \u00a79.3 \u2014 احذفه',
    DMARCBIS_T_INVALID:      v => 't=' + v + ' غير صالح \u2014 يسمح RFC 9989 \u00a74.7 بـ y أو n فقط',
    DMARCBIS_T_TESTING:      (p, eff) => 't=y \u2014 وضع الاختبار: يطبّق المستقبلون ' + eff + ' بدلاً من p=' + p + ' المنشورة (RFC 9989 \u00a74.7)',
    DMARCBIS_NP_INVALID:     v => 'np=' + v + ' غير صالح \u2014 يسمح RFC 9989 \u00a74.7 بـ none أو quarantine أو reject فقط',
    DMARCBIS_NP_SET:         v => 'np=' + v + ' \u2014 السياسة الخاصة بالنطاقات الفرعية غير الموجودة (RFC 9989 \u00a74.7)',
    DMARCBIS_PSD_INVALID:    v => 'psd=' + v + ' غير صالح \u2014 يسمح RFC 9989 \u00a74.7 بـ y أو n أو u فقط',
    DMARCBIS_SP_INVALID:     v => 'sp=' + v + ' غير صالح \u2014 يسمح RFC 9989 \u00a74.7 بـ none أو quarantine أو reject فقط',
    DMARCBIS_SP_IGNORED:     org => 'يُتجاهل sp= في هذا السجل \u2014 RFC 9989 \u00a74.7: لا يقرأ اكتشاف السياسة الوسم sp= إلا من نطاق المؤسسة (' + org + ')',
    DMARCBIS_ALIGN_INVALID:  (tag, v) => tag + '=' + v + ' غير صالح \u2014 يسمح RFC 9989 \u00a74.7 بـ r أو s فقط',
    DMARCBIS_FO_INVALID:     v => 'fo=' + v + ' لا يطابق صيغة RFC 9989 \u00a74.8 \u2014 القيم الصالحة هي 0 و1 وd وs مفصولة بنقطتين رأسيتين، مع تعارض 0 و1',
    DMARCBIS_URI_OBS_SIZE:   l => 'لاحقة !size متقادمة في عنوان تقارير: ' + l + ' \u2014 يطلب RFC 9989 \u00a74.8 من مولّدات التقارير تجاهلها',
    DMARCBIS_UNKNOWN_TAGS:   l => 'وسم/وسوم غير مسجّلة: ' + l + ' \u2014 غير موجودة في سجل RFC 9989 \u00a79.3، لذا يجب على المستقبلين تجاهلها',
    DMARCBIS_EXT_INTERNAL:   (tag, uri) => tag + '=' + uri + ' \u2014 نفس نطاق المؤسسة، لا حاجة إلى سجل تفويض',
    DMARCBIS_EXT_AUTHORIZED: (tag, uri, name) => tag + '=' + uri + ' \u2014 وجهة خارجية مفوَّضة بواسطة ' + name,
    DMARCBIS_EXT_MISSING:    (tag, uri, name) => tag + '=' + uri + ' \u2014 وجهة خارجية غير مفوَّضة: لا يوجد سجل TXT بقيمة v=DMARC1 عند ' + name + '؛ يجب على المستقبلين تجاهل هذا العنوان وعدم إرسال أي تقارير',
    DMARCBIS_EXT_OVERRIDE:   (tag, uri, name, ov) => tag + '=' + uri + ' \u2014 مفوَّض بواسطة ' + name + ' الذي يعيد توجيه التقارير إلى ' + ov,
    DMARCBIS_EXT_OVERRIDE_BAD: (tag, uri, name, ov) => tag + '=' + uri + ' \u2014 سجل التفويض عند ' + name + ' يعيد التوجيه إلى ' + ov + ' على مضيف مختلف؛ ويمنع RFC 9990 \u00a74 الإرسال إلى أي من العنوانين',
    DMARCBIS_EXT_TOO_LONG:   (tag, uri) => tag + '=' + uri + ' \u2014 اسم التفويض يتجاوز حدود طول DNS، لذا يتعذر تأكيد العلاقة (RFC 9990 \u00a74 الخطوة 4)',
    DMARCBIS_EXT_UNPARSABLE: (tag, uri) => tag + '=' + uri + ' \u2014 تعذر استخراج أي مضيف من هذا العنوان',
    DMARCBIS_EXT_ERROR:      (tag, uri, name) => tag + '=' + uri + ' \u2014 فشل الاستعلام عن ' + name + '؛ تعذر تأكيد التفويض',
    BIMI_LOGO_URL:         url => 'رابط الشعار: ' + url,
    BIMI_AUTHORITY_URL:    url => 'رابط السلطة: ' + url,
    PTR_VALUE:             v => 'PTR: ' + v,
    // Keys added in later releases — backfilled
    IPV6_DOMAIN_SUMMARY: n => 'عدد عناوين IPv6 التي عُثر عليها للنطاق: ' + n + '.',
    IPV6_MX_SUMMARY: (n, t) => n + '/' + t + ' من مضيفات MX لديها IPv6.',
    IPV6_NS_SUMMARY: (n, t) => n + '/' + t + ' من مضيفات NS لديها IPv6.',
    SPF_LOOKUP_TOTAL_EXCEED: n => 'إجمالي استعلامات DNS ' + n + ' (بما فيها include المتداخلة) يتجاوز حد RFC 7208 البالغ 10 \u2014 سيعيد المستقبلون SPF PermError',
    SPF_LOOKUP_TOTAL_HIGH: n => 'إجمالي استعلامات DNS ' + n + ' (بما فيها include المتداخلة) \u2014 يقترب من حد RFC 7208 البالغ 10',
    SPF_FOUND_LOOKUPS_TOTAL: (direct, total) => 'تم العثور على سجل SPF. ' + direct + ' استعلاماً مباشراً + ' + total + ' إجمالي استعلامات DNS (بشكل تعاودي).',
    RPKI_NS_SINGLE_ASN: (asn, holder) => 'جميع خوادم الأسماء على ASN واحد (' + asn + (holder ? ' \u2014 ' + holder : '') + ') \u2014 نقطة فشل واحدة لتوجيه DNS',
    RPKI_NS_MULTI_ASN: n => 'خوادم الأسماء موزّعة على ' + n + ' من أرقام ASN المختلفة \u2014 مرونة توجيه جيدة',
  },

  // ── x: نصوص الشرح (HTML) ────────────────────────────────────────────────────
  x: {
    DMARC:
      '<b>DMARC (Domain-based Message Authentication, Reporting and Conformance)</b> ' +
      'يجمع SPF وDKIM مع سياسة تخبر المستقبلين بما يجب فعله عند فشل المصادقة. ' +
      'كان في الأصل <a href="https://www.rfc-editor.org/rfc/rfc7489">RFC 7489</a>، وأصبح الآن معياراً بموجب <a href="https://www.rfc-editor.org/rfc/rfc9989">RFC 9989</a> («DMARCbis») الذي يُلغي أيضاً <a href="https://www.rfc-editor.org/rfc/rfc9091">RFC 9091</a> (PSD DMARC). راجع قسم DMARCbis أدناه للتحقق من التوافق مع المواصفة الأحدث.<br><br>' +
      '<b>السياسة (p=):</b> <b>reject</b> \u2014 إذا فشلت المصادقة يتم تجاهل الرسالة (الأقوى). ' +
      '<b>quarantine</b> \u2014 إرسالها إلى البريد المزعج. <b>none</b> \u2014 مراقبة فقط دون أي إجراء.<br><br>' +
      '<b>محاذاة المعرّف:</b> يشترط DMARC أن يتوافق النطاق في ترويسة <code>From:</code> مع النطاق المُصادَق عليه بواسطة SPF أو DKIM. ' +
      'المحاذاة <b>المتساهلة</b> (الافتراضية) تسمح بمطابقات نطاق المؤسسة؛ <b>الصارمة</b> (<code>adkim=s</code> / <code>aspf=s</code>) تشترط المطابقة التامة.<br><br>' +
      '<b>التقارير:</b> <code>rua=</code> يستقبل تقارير XML مجمّعة (مُوصى به)، مُعرَّفة في ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9990">RFC 9990</a>. ' +
      '<code>ruf=</code> يستقبل تقارير فشل لكل رسالة، مُعرَّفة في ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9991">RFC 9991</a> (حساسة \u2014 استخدم بحذر).<br><br>' +
      '<b>سياسة النطاق الفرعي (sp=):</b> إذا حُذف، ترث النطاقات الفرعية <code>p=</code>. ' +
      'استخدم <code>sp=reject</code> لحماية جميع النطاقات الفرعية صراحةً. ' +
      'يضيف RFC 9989 الوسم <code>np=</code> للنطاقات الفرعية غير الموجودة أصلاً.<br><br>' +
      '<b>pct=:</b> كان يطبّق السياسة على نسبة مئوية من الرسائل الفاشلة. ' +
      '<b>أُزيل في RFC 9989</b> \u2014 تُكتب <code>pct=0</code> الآن <code>t=y</code>، وأي قيمة أخرى ينبغي حذفها ببساطة.',
    DMARCBIS:
      '<b>DMARCbis</b> هو تنقيح DMARC لعام 2026، وقد نُشر في ثلاث وثائق: ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9989">RFC 9989</a> (البروتوكول)، ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9990">RFC 9990</a> (التقارير المجمّعة) و' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9991">RFC 9991</a> (تقارير الفشل). ' +
      'السجلات المكتوبة وفق RFC 7489 تظل تعمل \u2014 لا شيء هنا يعطّل نشراً قائماً \u2014 لكن عدة وسوم غيّرت حالتها.<br><br>' +
      '<b>ما الذي تغيّر:</b><br>' +
      '\u2022 أُزيل <code>pct=</code> (الملحق A.6). كان المستقبلون يطبّقون النسب الجزئية بصورة غير متسقة؛ ولم تثبت فائدة سوى <code>pct=0</code> التي صارت الآن <code>t=y</code>.<br>' +
      '\u2022 <code>t=</code> (وضع الاختبار) وسم جديد: مع <code>t=y</code> يطبّق المستقبلون مستوى واحداً أدنى من السياسة المنشورة \u2014 فيتصرف <code>reject</code> كأنه <code>quarantine</code>، و<code>quarantine</code> كأنه <code>none</code>.<br>' +
      '\u2022 <code>np=</code> يحدد السياسة للنطاقات الفرعية <b>غير الموجودة</b>، بمعزل عن <code>sp=</code> الذي يغطي الموجودة منها.<br>' +
      '\u2022 <code>psd=</code> يُعلِن نطاق لاحقة عامة (<code>y</code>) أو يُثبّت نطاق المؤسسة (<code>n</code>). وكلتا القيمتين تُنهيان اجتياز الشجرة فوراً.<br>' +
      '\u2022 <code>rf=</code> و<code>ri=</code> تاريخيان في سجل الوسوم (\u00a79.3) وينبغي إزالتهما.<br><br>' +
      '<b>اجتياز شجرة DNS (\u00a74.10):</b> لم تعد قائمة اللواحق العامة تُستخدم لتحديد نطاق المؤسسة. ' +
      'يستعلم المستقبلون عن <code>_dmarc.</code> عند نطاق المؤلف، ثم يصعدون تسمية تلو الأخرى \u2014 بحد أقصى ثمانية استعلامات \u2014 حتى يجدوا سجلاً ' +
      'أو سجلاً يحمل <code>psd=y</code> / <code>psd=n</code>. وهذا يتيح للمؤسسات الكبيرة نشر السياسة في عدة نقاط من مساحة أسمائها.<br><br>' +
      '<b>تفويض الوجهات الخارجية (RFC 9990 \u00a74، RFC 9991 \u00a75):</b> إذا أشار <code>rua=</code> أو <code>ruf=</code> إلى خارج نطاق مؤسستك، ' +
      'فيجب على تلك الوجهة نشر <code>نطاقك._report._dmarc.نطاقهم</code> يحتوي على <code>v=DMARC1</code> على الأقل. ' +
      'وبدونه <b>يجب</b> على المستقبلين تجاهل الـ URI، فلا يصلك شيء دون أي إشعار. ' +
      'ويمكن لوجهة ترغب في استقبال تقارير الجميع نشر سجل بدل عام عند <code>*._report._dmarc.</code><br><br>' +
      '<b>فصل التقارير:</b> التقارير المجمّعة (XML) في RFC 9990؛ وتقارير الفشل لكل رسالة في RFC 9991 الذي يحدّث أيضاً صيغة ARF في ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc6591">RFC 6591</a> بإضافة حقل <code>Identity-Alignment</code> ويجعل مُحدِّد DKIM إلزامياً في التقارير.',
    DNSSEC:
      '<b>ما هو DNSSEC؟</b> DNSSEC (<a href="https://www.rfc-editor.org/rfc/rfc4033">RFC 4033</a>) يضيف توقيعات تشفيرية لسجلات DNS، ' +
      'مما يمنع تسمم ذاكرة التخزين المؤقت وهجمات الوسيط. ' +
      '<b>علامة AD</b> (البيانات الأصيلة) من محلل Cloudflare تؤكد أن السلسلة بأكملها من الجذر إلى هذا النطاق مُتحقَّق منها.<br><br>' +
      '<b>تقييم الخوارزميات</b> وفقاً لـ <a href="https://www.rfc-editor.org/rfc/rfc8624">RFC 8624</a>: <b>Ed25519</b> (alg 15) و<b>ECDSA P-256</b> (alg 13) هما الأقوى. ' +
      'RSA/SHA-256 (alg 8) مقبول. RSA/SHA-1 (alg 5) وبدائل DSA ضعيفة أو غير آمنة.<br><br>' +
      '<b>DNSSEC يُمكّن DANE:</b> بدون DNS مُتحقَّق منه بـ DNSSEC، لا يمكن الوثوق بسجلات TLSA.',
    MX:
      '<b>سجلات MX (Mail eXchange)</b> (<a href="https://www.rfc-editor.org/rfc/rfc5321">RFC 5321</a>) تخبر الخوادم الأخرى بمكان تسليم البريد لنطاقك. ' +
      'الأرقام ذات الأولوية الأقل تُجرَّب أولاً (الأولوية 10 قبل 20).<br><br>' +
      '<b>لماذا DNSSEC مهم لـ MX:</b> المهاجم القادر على تزوير سجلات MX يمكنه إعادة توجيه جميع البريد الوارد. ' +
      'سجلات MX المُتحقَّق منها بـ DNSSEC تمنع ذلك.',
    DANE:
      '<b>DANE</b> (<a href="https://www.rfc-editor.org/rfc/rfc7672">RFC 7672</a>) يستخدم سجلات TLSA (<a href="https://www.rfc-editor.org/rfc/rfc6698">RFC 6698</a>) للسماح لخوادم البريد بالتحقق من شهادات TLS ' +
      'دون الاعتماد على جهات إصدار الشهادات التجارية. يُستعلم عنه في <b>_25._tcp.&lt;mx-hostname&gt;</b>.<br><br>' +
      '<b>أكواد استخدام TLSA:</b> ' +
      '<b>DANE-EE (3)</b> \u2014 تثبيت على شهادة الكيان النهائي (الأقوى). ' +
      '<b>DANE-TA (2)</b> \u2014 تثبيت على مرساة الثقة. ' +
      '<b>PKIX-EE (1)</b> / <b>PKIX-TA (0)</b> \u2014 تتطلب التحقق من CA بالإضافة إلى مطابقة TLSA.<br><br>' +
      '<b>DNSSEC إلزامي:</b> بدون DNSSEC، يمكن تزوير سجلات TLSA ولا يوفر DANE أي أمان.',
    SPF:
      '<b>SPF (Sender Policy Framework, <a href="https://www.rfc-editor.org/rfc/rfc7208">RFC 7208</a>)</b> يحدد الخوادم المصرح لها بإرسال البريد من نطاقك. ' +
      'تتحقق خوادم الاستقبال مما إذا كانت IP المُرسِلة تتطابق.<br><br>' +
      '<b>المحدِّدات:</b> <b>-all</b> (فشل صارم) يرفض المرسلين غير المصرح لهم \u2014 الأقوى. ' +
      '<b>~all</b> (فشل ناعم) يضع علامة عليهم. <b>?all</b> (محايد) لا يوفر أي حماية. ' +
      '<b>+all</b> يسمح للجميع \u2014 لا تستخدم هذا أبداً.<br><br>' +
      '<b>الآليات:</b> <b>include:</b> يفوّض لنطاق آخر. ' +
      '<b>ip4:</b>/<b>ip6:</b> يصرح بنطاقات IP. <b>mx</b> يصرح بخوادم MX الخاصة بك.',
    DKIM:
      '<b>ما هو محدد DKIM؟</b> DKIM (<a href="https://www.rfc-editor.org/rfc/rfc6376">RFC 6376</a>) يستخدم تشفير المفتاح العام لتوقيع البريد الصادر. ' +
      'المحدِّد (مثلاً <code>google</code>) هو تسمية تشير إلى مفتاح DKIM العام ' +
      'المنشور في <code>&lt;selector&gt;._domainkey.&lt;domain&gt;</code>. ' +
      'يمكن للنطاق أن يمتلك محددات متعددة \u2014 واحد لكل مزود بريد أو لتدوير المفاتيح.<br><br>' +
      '<b>البحث عن المحددات:</b> ابحث في ترويسة <code>DKIM-Signature:</code> في أي بريد مستلَم. ' +
      'الوسم <code>s=</code> يحتوي على المحدِّد. المحددات المخصصة لا يمكن اكتشافها تلقائياً.',
    TLSRPT:
      '<b>TLS-RPT (<a href="https://www.rfc-editor.org/rfc/rfc8460">RFC 8460</a>)</b> يسمح باستقبال تقارير فشل TLS من خوادم البريد المُرسِلة. ' +
      'يُنشر كسجل TXT في <code>_smtp._tls.&lt;domain&gt;</code>.<br><br>' +
      '<b>نقاط الإبلاغ rua=:</b> ترسَل التقارير إلى عناوين <code>mailto:</code> أو خدمات تجميع <code>https:</code>. ' +
      'نقاط HTTPS ممتازة؛ mailto جيد.<br><br>' +
      '<b>محتوى التقارير:</b> بيانات JSON مجمّعة \u2014 اتصالات TLS الناجحة، وفشل المصافحة، ' +
      'وأخطاء الشهادات، وانتهاكات السياسة. ضروري لتشخيص مشكلات MTA-STS وDANE.',
    MTASTS:
      '<b>MTA-STS (<a href="https://www.rfc-editor.org/rfc/rfc8461">RFC 8461</a>)</b> يوجّه خوادم الإرسال لاشتراط TLS عند التسليم لنطاقك ' +
      'والتحقق من صحة شهادة خادم البريد الخاص بك. ' +
      'سجل DNS في <code>_mta-sts.&lt;domain&gt;</code>؛ ' +
      'السياسة في <code>https://mta-sts.&lt;domain&gt;/.well-known/mta-sts.txt</code>.<br><br>' +
      '<b>أوضاع السياسة:</b> <b>enforce</b> \u2014 TLS إلزامي مع شهادة صالحة، وإلا يُرفض التسليم. ' +
      '<b>testing</b> \u2014 جمع بيانات TLS-RPT دون تطبيق. ' +
      '<b>none</b> \u2014 معطَّل صراحةً.',
    CAA:
      '<b>CAA (Certification Authority Authorization, <a href="https://www.rfc-editor.org/rfc/rfc8659">RFC 8659</a>)</b> يقيّد جهات إصدار الشهادات التي يمكنها إصدار شهادات TLS.<br><br>' +
      '<b>الوسوم:</b> <b>issue</b> \u2014 يصرح لجهة إصدار شهادات عادية (مثلاً <code>issue "letsencrypt.org"</code>). ' +
      '<b>issuewild</b> \u2014 يصرح لشهادات wildcard. ' +
      '<b>iodef</b> \u2014 أين تبلّغ جهات الإصدار عن انتهاكات السياسة.<br><br>' +
      '<b>بدون سجلات CAA،</b> يمكن لأي جهة إصدار اجتياز التحقق من النطاق إصدار شهادات.',
    RPKI:
      '<b>RPKI (Resource Public Key Infrastructure)</b> يتيح لأصحاب عناوين IP نشر تفويضات أصل المسار (ROA) ' +
      'التي تحدد ASN المصرح له بالإعلان عن بوادئهم.<br><br>' +
      '<b>صالح</b> \u2014 يوجد ROA مطابق: البادئة محمية من اختطاف BGP. ' +
      '<b>غير صالح</b> \u2014 يوجد ROA لكنه لا يصرح بالإعلان الحالي: قد تُرشَّح المسارات. ' +
      '<b>بدون ROA</b> \u2014 لا يوجد ROA: البادئة غير محمية لكن قابلة للتوجيه.',
    ASPA:
      '<b>ASPA (Autonomous System Provider Authorization, <a href="https://www.rfc-editor.org/rfc/rfc9582">RFC 9582</a>)</b> يتيح لـ AS الإعلان عن مزودي المنبع المصرح لهم. ' +
      'سجلات ASPA المنشورة تمكّن من اكتشاف تسربات المسارات.<br><br>' +
      '<b>منشور</b> \u2014 يوجد سجل ASPA مع مزودين معلنين. ' +
      '<b>بدون ASPA</b> \u2014 لا يوجد سجل منشور.<br><br>' +
      '<b>ملاحظة:</b> RFC 9582 لا يزال معياراً مقترحاً والانتشار الفعلي محدود حالياً \u2014 غياب ASPA لا يؤثر على درجتك.',
    STXT:
      '<b>security.txt (<a href="https://www.rfc-editor.org/rfc/rfc9116">RFC 9116</a>)</b> معيار لنشر معلومات الإفصاح عن الثغرات الأمنية.<br><br>' +
      'ضع الملف في <code>/.well-known/security.txt</code> (المُفضَّل) أو <code>/security.txt</code>.<br><br>' +
      '<b>الحقول الإلزامية:</b> <code>Contact</code> \u2014 أين تبلّغ عن الثغرات. ' +
      '<code>Expires</code> \u2014 تاريخ ISO 8601 بعده لا يُوثَق بالملف.<br><br>' +
      '<b>الحقول الاختيارية:</b> <code>Encryption</code>، <code>Policy</code>، ' +
      '<code>Acknowledgments</code>، <code>Preferred-Languages</code>، <code>Canonical</code>، <code>Hiring</code>.',
    WHOIS:
      '<b>WHOIS / RDAP</b> يوفر بيانات تسجيل النطاق عبر بروتوكول الوصول إلى بيانات التسجيل (<a href="https://www.rfc-editor.org/rfc/rfc7480">RFC 7480</a>).<br><br>' +
      'تُسترد البيانات من خادم RDAP المرجعي للـ TLD الخاص بالنطاق عبر <code>rdap.org</code>.<br><br>' +
      '<b>ملاحظة:</b> النطاق المُنشأ حديثاً مؤشر معترف به على انخفاض الثقة وزيادة مخاطر استخدامه في توزيع البرمجيات الخبيثة أو التصيد الاحتيالي. ' +
      'إذا كنت تتحقق من نطاق لا تملكه، عامل تاريخ الإنشاء الحديث جداً كإشارة تحذير.',
    BIMI:
      '<b>يُعتبَر BIMI على نطاق واسع أداةً تسويقية لا تضيف أي قيمة أمنية. عرض شعار في صندوق بريد "لإثبات" أنه المرسل الحقيقي لا يختلف عن أي صورة GIF تقول "100% مضمون". إذا كنت لا تزال ترغب في الدفع لجهات إصدار الشهادات مقابل ذلك، فهذا شأنك.</b><br><br>' +
      '<b>BIMI (Brand Indicators for Message Identification)</b> يتيح للمنظمات عرض شعارها في عملاء البريد المدعومين (مثل Gmail وApple Mail وYahoo).<br><br>' +
      '<b>المتطلبات:</b> يجب أن يكون DMARC في وضع التطبيق <code>p=quarantine</code> أو <code>p=reject</code>. ' +
      'BIMI لا يؤثر مباشرةً على أمان البريد \u2014 هو ميزة ظهور العلامة التجارية.',
    PTR:
      '<b>سجلات PTR</b> تربط عناوين IP بأسماء المضيفين \u2014 عكس سجلات A/AAAA.<br><br>' +
      '<b>FCrDNS (Forward-Confirmed reverse DNS):</b> سجل PTR "مؤكَّد للأمام" عندما تحل قيمة PTR للأمام إلى IP الأصلية. ' +
      'كثير من فلاتر البريد المزعج وMTA المستقبِلة تتحقق من FCrDNS لخوادم MX. المطابقة تبني الثقة؛ PTR المفقود أو غير المطابق قد يرفع درجات البريد المزعج.<br><br>' +
      '<b>هذا الفحص</b> يحل سجلات A وAAAA لكل مضيف MX، يستعلم عن PTR لكل IP ويتحقق من تطابق قيمة PTR مع اسم مضيف MX. ' +
      'لا يؤثر على التقييم الإجمالي.',
    SELECTOR_HELP:
      '<b>\u0645\u0627 \u0647\u0648 \u0645\u062d\u062f\u062f DKIM\u061f</b> \u0627\u0644\u0645\u062d\u062f\u062f \u0647\u0648 \u062a\u0633\u0645\u064a\u0629 \u0642\u0635\u064a\u0631\u0629 (\u0645\u062b\u0644 <code>google</code>) ' +
      '\u062a\u064f\u062e\u0628\u0631 \u062e\u0648\u0627\u062f\u0645 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0650\u0644\u0629 \u0628\u0623\u064a \u0645\u0641\u062a\u0627\u062d \u0639\u0627\u0645 \u062a\u0633\u062a\u062e\u062f\u0645\u0647 \u0644\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u062a\u0648\u0642\u064a\u0639 DKIM \u0639\u0644\u0649 \u0627\u0644\u0631\u0633\u0627\u0644\u0629. ' +
      '\u064a\u0645\u0643\u0646 \u0644\u0644\u0646\u0637\u0627\u0642 \u0623\u0646 \u064a\u0645\u062a\u0644\u0643 \u0645\u062d\u062f\u062f\u0627\u062a \u0645\u062a\u0639\u062f\u062f\u0629 \u2014 \u0648\u0627\u062d\u062f \u0644\u0643\u0644 \u0645\u0632\u0648\u062f \u0628\u0631\u064a\u062f \u0623\u0648 \u0644\u062a\u062f\u0648\u064a\u0631 \u0627\u0644\u0645\u0641\u0627\u062a\u064a\u062d.<br><br>' +
      '<b>\u0643\u064a\u0641\u064a\u0629 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u062d\u062f\u062f\u0627\u062a:</b> \u0627\u0641\u062a\u062d \u0623\u064a \u0631\u0633\u0627\u0644\u0629 \u0628\u0631\u064a\u062f \u0645\u0633\u062a\u0644\u0645\u0629\u060c \u0627\u0639\u0631\u0636 \u0631\u0624\u0648\u0633\u0647\u0627 \u0643\u0627\u0645\u0644\u0629\u064b\u060c \u0648\u0627\u0628\u062d\u062b \u0639\u0646 \u0631\u0623\u0633 <code>DKIM-Signature:</code>. ' +
      '\u062a\u062d\u062a\u0648\u064a \u0639\u0644\u0627\u0645\u0629 <code>s=</code> \u0639\u0644\u0649 \u0627\u0633\u0645 \u0627\u0644\u0645\u062d\u062f\u062f. \u0641\u064a Gmail: \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u062b\u0644\u0627\u062b\u064a\u0629 \u0627\u0644\u0646\u0642\u0627\u0637 \u2190 \u201c\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0623\u0635\u0644\u064a\u201d.<br><br>' +
      '<b>\u0644\u0645\u0627\u0630\u0627 \u062a\u0636\u064a\u0641 \u0645\u062d\u062f\u062f\u0627\u062a \u0625\u0636\u0627\u0641\u064a\u0629 \u0647\u0646\u0627\u061f</b> \u064a\u064f\u0641\u062d\u0635 \u0646\u062d\u0648 85 \u0627\u0633\u0645 \u0645\u062d\u062f\u062f \u0634\u0627\u0626\u0639\u0627\u064b \u062a\u0644\u0642\u0627\u0626\u064a\u0627\u064b. ' +
      '\u0627\u0633\u062a\u062e\u062f\u0645 \u0647\u0630\u0627 \u0627\u0644\u062d\u0642\u0644 \u0644\u0644\u0645\u062d\u062f\u062f\u0627\u062a \u0627\u0644\u0645\u062e\u0635\u0635\u0629 \u0623\u0648 \u063a\u064a\u0631 \u0627\u0644\u0634\u0627\u0626\u0639\u0629.',
    // Keys added in later releases — backfilled
    IPV6:
      '<b>IPv6 (الإصدار السادس من بروتوكول الإنترنت)</b> هو خليفة IPv4، ويستخدم عناوين بطول 128 بت لمعالجة نفاد مساحة عناوين IPv4 ذات الـ 32 بت. ' +
      'بنية البريد التي تفتقر إلى IPv6 لا تستطيع استقبال الرسائل من مرسلين يعملون بـ IPv6 فقط، وقد تصبح غير قابلة للوصول مع اتساع الاعتماد على IPv6 وحده.<br><br>' +
      '<b>لماذا يهم هذا للبريد:</b> مضيفات MX التي بلا سجلات AAAA لا تستطيع قبول البريد من خوادم إرسال تعمل بـ IPv6 فقط. ' +
      'ومضيفات NS التي بلا IPv6 لا تستطيع الرد على استعلامات DNS من محلّلات تعمل بـ IPv6 فقط. ' +
      'وكلا الحالتين تسبب إخفاقات تسليم صامتة يصعب تشخيصها.<br><br>' +
      '<b>متطلبات حكومية إلزامية \u2014 دول مختارة:</b><br>' +
      '<b>النرويج:</b> <a href="https://lovdata.no/dokument/SF/forskrift/2013-04-05-959">Forskrift om IT-standarder i offentlig forvaltning \u00a712</a> \u2014 ‏IPv6 إلزامي للخدمات الحكومية اعتباراً من 1 يناير 2023، بمهلة قصوى حتى 1 يناير 2025.<br>' +
      '<b>الولايات المتحدة:</b> مذكرة OMB M-21-07 \u2014 على الوكالات الفيدرالية تشغيل بنية تعمل بـ IPv6 فقط بحلول السنة المالية 2025.<br>' +
      '<b>الاتحاد الأوروبي:</b> إطار التشغيل البيني الأوروبي / توجيه NIS2 \u2014 يشجعان جاهزية IPv6 في الخدمات العامة للدول الأعضاء.<br>' +
      '<b>الهند:</b> سياسة الاتصالات الوطنية 2018 الصادرة عن DoT \u2014 ‏IPv6 إلزامي لمزودي الخدمة والجهات الحكومية والقطاع العام.<br>' +
      '<b>الصين:</b> خطة عمل MIIT لنشر IPv6 على نطاق واسع 2017 \u2014 نشر كامل لدى مزودي الخدمة والجهات الحكومية والمنصات الكبرى.<br><br>' +
      'يستعلم هذا الفحص عن سجلات AAAA للنطاق نفسه ولجميع مضيفات MX وجميع مضيفات NS. ' +
      'وهو <b>لا</b> يؤثر على درجة الأمان الإجمالية \u2014 للعلم فقط.'
  },
};
