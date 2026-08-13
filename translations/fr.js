// Français (fr) — traduction pour DNS Email Security Checker

const LANG_FR = {

  // ── s: chaînes statiques ──────────────────────────────────────────────────
  s: {
    APP_TITLE:           'Vérificateur de sécurité DNS pour le courrier',
    APP_SUBTITLE:        'Vérifiez DNSSEC, MX, SPF, DKIM et plus pour n\'importe quel domaine',
    LABEL_DOMAIN:        'Domaine',
    LABEL_SELECTORS:     'Sélecteurs DKIM supplémentaires (séparés par des virgules)',
    BTN_CHECK:           'Vérifier',
    BTN_CHECKING:        'Vérification\u2026',
    BTN_COPY_LINK:       '\uD83D\uDD17 Copier le lien',
    BTN_COPIED:          '\u2713 Copié\u00a0!',
    LANG_LABEL:          'Langue',
    OVERVIEW_PLACEHOLDER:'Saisissez un nom de domaine comme google.com ou microsoft.com, puis cliquez sur Vérifier. Notez que les résultats peuvent ne pas être exacts en raison des limitations de votre navigateur ou du réseau depuis lequel vous effectuez le test. Les scores sont fournis à titre indicatif uniquement et ne reflètent pas nécessairement la réalité complète ni la conformité aux normes applicables.',
    RUNNING_CHECKS:      'Vérifications en cours\u2026',
    CHECKING:            'Vérification\u2026',

    PANEL_DNSSEC:        'DNSSEC',
    PANEL_MX:            'Enregistrements MX',
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
    PANEL_RECS:          'Correctifs',

    RECS_WHAT_TO_FIX:    'Quoi corriger',
    RECS_INFORMATIONAL:  'Informatif',
    RECS_ALL_GOOD:       'Toutes les vérifications réussies',
    RECS_ALL_EXCELLENT:  'Tout est configuré de manière optimale.',

    GRADE_TITLE:         'Note globale',
    GRADE_A_DESC:        'Configuration de sécurité de messagerie solide.',
    GRADE_B_DESC:        'Bonne configuration avec des problèmes mineurs.',
    GRADE_C_DESC:        'Problèmes modérés \u2014 vérifiez les avertissements.',
    GRADE_F_DESC:        'Problèmes critiques \u2014 action immédiate recommandée.',

    RATING_EXCELLENT:    'Excellent',
    RATING_GOOD:         'Bon',
    RATING_WARNING:      'Avertissement',
    RATING_FAIL:         'Échec',
    RATING_SKIP:         'Ignoré',

    ERR_INVALID_DOMAIN:  'ne ressemble pas à un domaine valide.',
    ERR_CHECK_FAILED:    'Vérification échouée',
    ERR_PREFIX:          'Erreur\u00a0: ',

    THEME_LIGHT:         '\u2600 Clair',
    THEME_DARK:          '\u263D Sombre',
    THEME_TO_DARK:       'Passer au thème sombre',
    THEME_TO_LIGHT:      'Passer au thème clair',
    SETTINGS_THEME:      'Thème',
    SETTINGS_SCORING:    'Système de notation',
    SCORING_TITLE:       'Fonctionnement de la notation',
    SCORING_CLOSE:       'Fermer',
    SCORING_SCORED:      'Vérifications notées',
    SCORING_INFO:        'Informatif (non noté)',
    SCORING_RATINGS:     'Points par évaluation',
    SCORING_GRADES:      'Seuils de note',

    OPT_SKIP_CORS:       'Ignorer les vérifications MTA-STS et Security.txt pour éviter les problèmes CORS',
    CHECK_SKIPPED:       'Cette vérification a été ignorée.',

    STATS_TITLE:         '\uD83E\uDD13 Statistiques',
    STATS_TOTAL_TIME:    'Durée totale de l\'analyse',
    STATS_DOH_REQUESTS:  'Requêtes DoH Cloudflare',
    STATS_RIPE_REQUESTS: 'Appels API RIPE Stat',
    STATS_RIPE_CACHE:    'depuis le cache',
    STATS_HTTP_FETCHES:  'Requêtes HTTP',
    STATS_CHECK_TIMING:  'Durée par vérification',
    STATS_DKIM_SELECTORS:'Sélecteurs DKIM testés / trouvés',
    STATS_IPS_RESOLVED:  'IPs résolues (RPKI)',
    STATS_MS:            'ms',

    DNSSEC_VALIDATED:    '\u2713 DNSSEC validé (AD=true)',
    DNSSEC_UNVALIDATED:  '\u26a0 Signé mais non validé par le résolveur (AD=false)',
    DNSSEC_RESOLVER_ONLY:'DNSSEC validé par le résolveur, mais les enregistrements de clé n\'ont pu être récupérés.',
    DNSSEC_NOT_SIGNED:   'Aucun enregistrement DNSKEY trouvé \u2014 le domaine n\'est pas signé DNSSEC.',
    DNSSEC_ALG_DETAILS:  'Détails de l\'algorithme',

    MX_HOST_DETAILS:     'Détails des serveurs MX',
    MX_NO_DNSSEC:        'Sans DNSSEC',
    MX_SIGNED_UNVAL:     '\u26a0 Signé, non validé',
    MX_RRSET_WARN:       '\u26a0 Le RRset MX n\'est pas validé par DNSSEC \u2014 la liste des serveurs de messagerie n\'a pas pu être vérifiée cryptographiquement.',
    MX_NULL_SUGGEST:     'Aucun enregistrement MX \u2014 envisagez de publier un enregistrement MX nul (RFC 7505) accompagné de SPF \u201c-all\u201d et DMARC p=reject pour bloquer complètement les abus de messagerie',

    DANE_NO_TLSA:        'Aucun enregistrement TLSA',
    DANE_TLSA_UNVAL:     '\u26a0 TLSA trouvé, non validé par DNSSEC',
    DANE_NO_VALIDATED:   'Aucun enregistrement TLSA validé par DNSSEC trouvé.',
    DANE_TLSA_PER_MX:    'Enregistrements TLSA par serveur MX',

    SPF_RECORD_ANALYSIS: 'Enregistrement et analyse',
    SPF_RECORD:          'Enregistrement',
    SPF_MECHANISMS:      'Mécanismes SPF',
    SPF_IP_ADDRESSES:    'Adresses IP',
    SPF_IP_PREFIXES:     'Préfixes IP',
    SPF_DNS_NAMES:       'Noms DNS',
    SPF_IMPLICIT:        '(implicite)',
    SPF_ORIGINAL_RECORD: 'Enregistrement SPF original',
    SPF_PTR_DEPRECATED:  'le mécanisme ptr est déprécié',
    SPF_MISSING_ALL:     'Mécanisme \u201call\u201d manquant \u2014 la politique est incomplète',
    SPF_ALL_HARDFAIL:    '"-all" (échec dur) \u2014 les expéditeurs non autorisés sont rejetés',
    SPF_ALL_SOFTFAIL:    '"~all" (échec souple) \u2014 les expéditeurs non autorisés sont marqués mais peuvent être livrés',
    SPF_ALL_NEUTRAL:     '"?all" (neutre) \u2014 n\'offre aucune protection',
    SPF_NO_RECORD:       'Aucun enregistrement SPF trouvé',

    DKIM_FOUND_SECTION:  'Sélecteurs trouvés',
    DKIM_DNS_KEY_DETAILS:'Nom DNS et détails de clé',
    DKIM_TH_PROVIDER:    'Fournisseur',
    DKIM_TH_PROBED:      'S\u00e9lecteurs test\u00e9s',
    DKIM_PROV_UNKNOWN:   'G\u00e9n\u00e9rique / non sp\u00e9cifique \u00e0 un fournisseur',
    DKIM_DKIM2_TITLE:    'DKIM2\u00a0: la prochaine version de DKIM',
    DKIM_AUTO_TESTED_LABEL: 'sélecteurs testés automatiquement',
    DKIM_REVOKED:        'Clé révoquée (balise p= vide)',
    DKIM_KEY_TYPE:       'Type de clé',
    DKIM_KEY_SIZE:       'Taille de clé',
    DKIM_BITS:           'bits',
    DKIM_BITS_EQ:        ' (équivalent 256 bits)',
    DKIM_KEY_RATING:     'Évaluation',
    DKIM_HASH_ALGS:      'Algorithmes de hachage',
    DKIM_SERVICE_TYPE:   'Type de service',
    DKIM_NOTES_FIELD:    'Notes',
    DKIM_DNSSEC:         'DNSSEC',
    DKIM_DNSSEC_OK:      '\u2713 validé',
    DKIM_DNSSEC_FAIL:    '\u2717 non validé',
    DKIM_NONE_FOUND_NOTE:'Cela ne signifie pas que DKIM n\'est pas configuré \u2014 cela signifie seulement qu\'aucun des noms de sélecteur standard habituels n\'a été trouvé.',

    TLSRPT_FOUND:        'Enregistrement TLS-RPT trouvé.',
    TLSRPT_NOT_FOUND:    'Aucun enregistrement TLS-RPT.',
    TLSRPT_RECORD_ANALYSIS: 'Enregistrement et analyse',
    TLSRPT_NO_RECORD_NXDOMAIN: 'Aucun enregistrement TLS-RPT \u2014 les rapports d\'échecs TLS SMTP ne seront pas reçus',
    TLSRPT_NO_RECORD:    'Aucun enregistrement TLS-RPT trouvé',
    TLSRPT_MULTI_RECORDS:'Plusieurs enregistrements TLS-RPT trouvés \u2014 exactement un seul est requis',
    TLSRPT_NO_RUA:       'Aucune URI de rapport rua= \u2014 les rapports ne peuvent pas être livrés',

    MTASTS_FOUND:        'Enregistrement DNS MTA-STS trouvé.',
    MTASTS_NOT_FOUND:    'Aucun enregistrement DNS MTA-STS.',
    MTASTS_POLICY_ANALYSIS: 'Politique et analyse',
    MTASTS_RECORD_NOTES: 'Enregistrement et notes',
    MTASTS_NO_RECORD_NXDOMAIN: 'Aucun enregistrement DNS MTA-STS \u2014 TLS n\'est pas appliqué pour la livraison entrante',
    MTASTS_NO_RECORD:    'Aucun enregistrement DNS MTA-STS trouvé',
    MTASTS_MULTI_RECORDS:'Plusieurs enregistrements DNS MTA-STS trouvés \u2014 exactement un seul est requis',
    MTASTS_NO_ID:        'L\'enregistrement MTA-STS manque du champ id= obligatoire',
    MTASTS_MODE_ENFORCE: 'Mode de politique\u00a0: enforce \u2014 TLS obligatoire, les livraisons sans TLS sont rejetées',
    MTASTS_MODE_TESTING: 'Mode de politique\u00a0: testing \u2014 surveillance des échecs TLS sans application',
    MTASTS_MODE_NONE:    'Mode de politique\u00a0: none \u2014 MTA-STS est explicitement désactivé',
    MTASTS_MX_MATCH:     'Tous les serveurs MX correspondent aux modèles mx: de la politique MTA-STS',
    MTASTS_MX_MISMATCH:  'Un ou plusieurs serveurs MX ne sont couverts par aucun modèle mx: de la politique',
    MTASTS_MX_NO_PATTERNS: 'La politique MTA-STS ne contient aucune ligne mx:',

    CAA_NO_RECORDS:      'Aucun enregistrement CAA.',
    CAA_RECORDS_ANALYSIS:'Enregistrements et analyse',
    CAA_CA_DNSSEC:       'DNSSEC du domaine CA',
    CAA_DNSSEC_VALIDATED:'DNSSEC validé',
    CAA_DNSSEC_SIGNED:   'signé mais non validé par le résolveur',
    CAA_DNSSEC_NONE:     'non signé DNSSEC',
    CAA_DNSSEC_ERROR:    'erreur\u00a0: ',
    CAA_NO_RECORDS_ISSUE:'Aucun enregistrement CAA \u2014 n\'importe quelle autorité de certification peut émettre des certificats pour ce domaine',
    CAA_ISSUE_PROHIBITED:'Émission de certificats interdite pour toutes les CA (issue ";")',
    CAA_NO_IODEF:        'Aucune balise iodef= \u2014 les violations de politique CA ne seront pas signalées',

    RPKI_HOST_DETAILS:   'Détails de l\'hôte',
    RPKI_NO_IPS:         'Aucune IP résolue',
    RPKI_ASPA_TITLE:     'ASPA (Autorisation de fournisseur AS)',
    RPKI_ASPA_PROVIDERS: 'Fournisseurs\u00a0:',

    ASPA_NO_DATA:        'Aucune donnée ASPA disponible',

    STXT_FOUND:          '\u2713 security.txt trouvé',
    STXT_RAW:            'security.txt brut',
    STXT_NOT_FOUND:      'Non trouvé.',
    STXT_CORS_BLOCKED:   'Impossible de récupérer security.txt \u2014 le serveur n\'autorise pas les requêtes cross-origin (CORS). Le fichier peut exister\u00a0; vérifiez manuellement\u00a0:',
    STXT_CHECK_MANUALLY: 'URLs vérifiées\u00a0:',
    CORS_SECURITY_NOTE:  'C\'est une bonne chose\u00a0! Le serveur dispose d\'une sécurité supérieure à la normale. Cependant, c\'est pourquoi cette vérification ne peut pas être effectuée automatiquement.',
    STXT_NO_CONTACT:     'Champ Contact obligatoire manquant.',
    STXT_NO_EXPIRES:     'Champ Expires manquant \u2014 obligatoire selon',
    STXT_BAD_DATE:       'Le champ Expires a un format de date invalide.',
    STXT_ENCRYPTION:     'Clé de chiffrement liée.',
    STXT_POLICY:         'Politique de divulgation des vulnérabilités liée.',

    WHOIS_RDAP_OK:       '\u2713 Données RDAP récupérées',
    WHOIS_ROW_REGISTRAR: 'Registrar',
    WHOIS_ROW_CREATED:   'Créé',
    WHOIS_ROW_UPDATED:   'Mis à jour',
    WHOIS_ROW_EXPIRES:   'Expire',
    WHOIS_ROW_HANDLE:    'Identifiant',
    WHOIS_ROW_STATUS:    'Statut',
    WHOIS_NS_TITLE:      'Serveurs de noms',
    WHOIS_EXPIRED:       '\u26a0 L\'enregistrement du domaine a expiré\u00a0!',
    WHOIS_FAILED:        'Échec de la recherche RDAP.',

    DMARC_FOUND:         'Enregistrement DMARC trouvé.',
    DMARC_NOT_FOUND:     'Aucun enregistrement DMARC.',
    DMARC_RECORD_ANALYSIS: 'Enregistrement et analyse',
    DMARC_POLICY_NONE:   'p=none \u2014 surveillance uniquement, pas d\'application',
    DMARC_POLICY_QUARANTINE: 'p=quarantine \u2014 messages suspects envoyés en spam',
    DMARC_POLICY_REJECT: 'p=reject \u2014 messages non autorisés rejetés',
    DMARC_SP_REJECT:     'sp=reject \u2014 sous-domaines\u00a0: messages non autorisés rejetés',
    DMARC_SP_QUARANTINE: 'sp=quarantine \u2014 sous-domaines\u00a0: messages suspects envoyés en spam',
    DMARC_SP_NONE:       'sp=none \u2014 sous-domaines\u00a0: sans application',
    DMARC_ADKIM_STRICT:  'adkim=s \u2014 alignement d\'identifiant DKIM\u00a0: strict',
    DMARC_ASPF_STRICT:   'aspf=s \u2014 alignement d\'identifiant SPF\u00a0: strict',
    DMARC_NO_RUA:        'Aucun rua= \u2014 aucun rapport DMARC agrégé ne sera reçu',
    DMARC_NO_RECORD_NXDOMAIN: 'Aucun enregistrement DMARC \u2014 les expéditeurs non autorisés ne peuvent pas être rejetés',
    DMARC_NO_RECORD:     'Aucun enregistrement DMARC trouvé',
    DMARC_MULTI_RECORDS: 'Plusieurs enregistrements DMARC \u2014 exactement un seul est requis',
    // DMARCbis (RFC 9989 / 9990 / 9991) — libellés de section
    DMARCBIS_TITLE:            'Conformité DMARCbis — RFC 9989 / 9990 / 9991',
    DMARCBIS_INTRO:            'RFC 9989 rend obsolètes RFC 7489 et RFC 9091, et scinde les rapports entre RFC 9990 (agrégés) et RFC 9991 (d’échec). Ces vérifications sont informatives et n’affectent pas la note.',
    DMARCBIS_DISCOVERY_TITLE:  'Découverte de la politique — parcours de l’arbre DNS (RFC 9989 §4.10)',
    DMARCBIS_TAGS_TITLE:       'Conformité des balises (RFC 9989 §4.7, §9.3)',
    DMARCBIS_EXTAUTH_TITLE:    'Autorisation de destination externe (RFC 9990 §4, RFC 9991 §5)',
    DMARCBIS_SUGGESTED_TITLE:  'Enregistrement RFC 9989 suggéré',
    DMARCBIS_SUGGESTED_NOTE:   'Balises historiques et non enregistrées supprimées, pct=0 migré vers t=y, et ajout des balises que RFC 9989 recommande sur un domaine organisationnel. La valeur de politique est reprise telle quelle — vérifiez avant publication.',
    DMARCBIS_TW_TAG_AUTHOR:    'domaine auteur',
    DMARCBIS_TW_TAG_ORG:       'domaine organisationnel',
    DMARCBIS_TW_STEP_FOUND:    'enregistrement',
    DMARCBIS_TW_STEP_NONE:     'aucun',
    DMARCBIS_TW_STEP_MULTI:    'plusieurs',
    DMARCBIS_TW_STEP_ERROR:    'erreur',
    // Clés d’anomalies DMARCbis (statiques)
    DMARCBIS_TW_NO_POLICY:     'Aucun enregistrement de politique DMARC dans tout le parcours de l’arbre — les destinataires n’appliquent aucun traitement DMARC à ce domaine',
    DMARCBIS_TW_MULTI:         'Une étape du parcours a renvoyé plusieurs enregistrements DMARC — RFC 9989 §4.10 les écarte tous',
    DMARCBIS_TAGS_CLEAN:       'Toutes les balises sont actives dans le registre RFC 9989 §9.3 — aucune balise historique, non enregistrée ou invalide',
    DMARCBIS_V_NOT_FIRST:      'v= est absente ou n’est pas la première balise — RFC 9989 §4.7 impose d’ignorer l’enregistrement entier',
    DMARCBIS_P_DEFAULT_NONE:   'Aucune balise p= valide — RFC 9989 §4.10.1 : puisque rua= est présente, les destinataires traitent l’enregistrement comme p=none',
    DMARCBIS_P_NO_PROCESSING:  'Aucune balise p= valide ni rua= — RFC 9989 §4.10.1 : les destinataires n’appliquent aucun traitement DMARC',
    DMARCBIS_PCT_ZERO:         'pct=0 est historique dans RFC 9989 — remplacez-la par t=y, la balise qui porte désormais ce sens (annexe A.6)',
    DMARCBIS_PCT_FULL:         'pct=100 est historique dans RFC 9989 et était déjà la valeur par défaut — supprimez la balise',
    DMARCBIS_T_NO_EFFECT:      't=y n’a aucun effet tant que la politique est none — RFC 9989 §4.7',
    DMARCBIS_T_ENFORCED:       't=n — la politique publiée est appliquée telle quelle (valeur par défaut de RFC 9989)',
    DMARCBIS_NP_REJECT:        'np=reject — les messages provenant de sous-domaines inexistants sont rejetés (RFC 9989 §4.7)',
    DMARCBIS_NP_MISSING:       'Aucune balise np= — RFC 9989 l’ajoute pour les sous-domaines inexistants ; np=reject est recommandée sur un domaine organisationnel',
    DMARCBIS_PSD_Y:            'psd=y — déclaré domaine de suffixe public ; le parcours de l’arbre s’arrête ici (RFC 9989 §4.10.2)',
    DMARCBIS_PSD_N:            'psd=n — déclaré domaine organisationnel ; le parcours de l’arbre s’arrête ici (RFC 9989 §4.10.2)',
    DMARCBIS_PSD_U:            'psd=u — le domaine organisationnel est laissé au parcours de l’arbre (valeur par défaut de RFC 9989)',
    DMARCBIS_PSD_MISSING:      'Aucune balise psd= — publier psd=n sur le domaine organisationnel met immédiatement fin au parcours et lève toute ambiguïté',
    DMARCBIS_FO_NO_RUF:        'fo= est présente sans ruf= — RFC 9989 §4.7 impose d’ignorer son contenu',
    DMARCBIS_URI_NO_MAILTO:    'Aucune URI mailto: dans rua= — les destinataires ne sont tenus de prendre en charge que mailto:, les autres schémas peuvent donc être ignorés',
    DMARCBIS_EXT_NONE:         'Aucune URI rua= ou ruf= à autoriser — sans rapports agrégés, aucune visibilité sur les échecs DMARC',

    BIMI_FOUND:          'Enregistrement BIMI trouvé.',
    BIMI_NOT_FOUND:      'Aucun enregistrement BIMI.',
    BIMI_RECORD_ANALYSIS:'Enregistrement et analyse',
    BIMI_NO_RECORD:      'Aucun enregistrement BIMI \u2014 le logo de marque ne s\'affiche pas dans les clients de messagerie compatibles',
    BIMI_NO_LOGO:        'l= (URL du logo) absent ou vide \u2014 nécessaire pour que BIMI fonctionne',
    BIMI_NO_AUTHORITY:   'a= (preuve d\'autorité) absent \u2014 un certificat VMC est requis pour que Gmail et d\'autres affichent le logo',
    BIMI_LOGO_OK:        'URL du logo présente',
    BIMI_AUTHORITY_OK:   'Preuve d\'autorité (VMC) présente',

    PTR_HOST_DETAILS:    'Détails de l\'hôte',
    PTR_NO_MX:           'Aucun serveur MX pour vérifier les enregistrements PTR',
    PTR_MATCH:           'FCrDNS confirmé \u2014 PTR correspond au nom du serveur MX',
    PTR_MISMATCH:        'PTR présent mais ne correspond pas au nom du serveur MX',
    PTR_MISSING:         'Aucun enregistrement PTR trouvé',
    // Keys added in later releases — backfilled
    IPV6_HOST_DETAILS: 'Détail des adresses par hôte',
    IPV6_NO_AAAA: 'Aucun enregistrement AAAA',
    IPV6_NO_MX: 'Aucun hôte MX trouvé',
    IPV6_NO_NS: 'Aucun hôte NS trouvé',
    IPV6_MANDATORY_TITLE: 'Exigences IPv6 obligatoires',
    IPV6_MANDATORY_NOTE: 'IPv6 est imposé par la réglementation publique dans les pays suivants :',
    IPV6_DOMAIN_HAS_IPV6: '✓ Le domaine possède une ou plusieurs adresses IPv6',
    IPV6_DOMAIN_NO_IPV6: 'Le domaine n’a aucune adresse IPv6 — joignable uniquement en IPv4',
    IPV6_ALL_MX_HAVE_IPV6: '✓ Tous les hôtes MX ont des adresses IPv6',
    IPV6_SOME_MX_HAVE_IPV6: 'Certains hôtes MX ont IPv6 — pas tous',
    IPV6_NO_MX_HAVE_IPV6: 'Aucun hôte MX n’a d’adresse IPv6',
    IPV6_ALL_NS_HAVE_IPV6: '✓ Tous les hôtes NS ont des adresses IPv6',
    IPV6_SOME_NS_HAVE_IPV6: 'Certains hôtes NS ont IPv6 — pas tous',
    IPV6_NO_NS_HAVE_IPV6: 'Aucun hôte NS n’a d’adresse IPv6',
    IPV6_MX_BADGE_YES: 'IPv6',
    IPV6_MX_BADGE_NO: 'Sans IPv6',
    SPF_NO_IP6_MECHS: 'Les hôtes MX/NS prennent en charge IPv6, mais aucune entrée ip6: n’a été trouvée dans l’enregistrement SPF — si ce domaine envoie du courrier en IPv6, ajoutez des mécanismes ip6: pour autoriser ces adresses',
    SPF_LEGACY_TYPE: 'Ancien type d’enregistrement SPF (type DNS 99) détecté — obsolète depuis RFC 7208 (2014) ; à supprimer',
    SPF_PROPAGATION_MISMATCH: 'L’enregistrement SPF diffère entre les résolveurs DNS de Cloudflare et de Google — propagation incomplète ou mauvaise configuration',
    DMARC_PROPAGATION_MISMATCH: 'L’enregistrement DMARC diffère entre les résolveurs DNS de Cloudflare et de Google — propagation incomplète ou mauvaise configuration',
    DKIM_ROTATION_NOTE: 'Bonne pratique : renouvelez les clés DKIM au moins une fois par an. L’ancienneté d’une clé ne peut pas être déterminée depuis le DNS — vérifiez la politique de rotation auprès de votre fournisseur de messagerie.',
    CAA_ISSUEMAIL_NOTE: 'Balise issuemail présente — elle contrôle l’émission des certificats S/MIME pour ce domaine (RFC 8657)',
    RPKI_NS_DIVERSITY: 'Diversité des ASN des serveurs de noms',
    RPKI_NS_NO_ASN_DATA: 'Aucune donnée ASN disponible pour les serveurs de noms',
    OVERVIEW_PROVIDERS: 'Infrastructure de messagerie détectée',
  },

  // ── d: chaînes dynamiques (fonctions fléchées) ────────────────────────────
  d: {
    MX_HOSTS_FOUND:        n => n + ' serveur' + (n !== 1 ? 's' : '') + ' MX trouvé' + (n !== 1 ? 's' : '') + '.',
    DKIM_SELECTORS_FOUND:  n => n + ' sélecteur' + (n !== 1 ? 's' : '') + ' trouvé' + (n !== 1 ? 's' : ''),
    DKIM_ACROSS_PROVIDERS: n => 'sur ' + n + ' fournisseur' + (n !== 1 ? 's' : ''),
    DKIM_SELECTORS_TESTED: n => n + ' sélecteurs testés.',
    DKIM_NONE_FOUND:       n => 'Aucun sélecteur DKIM trouvé. ' + n + ' sélecteurs ont été testés.',
    DKIM_AUTO_TESTED:      n => n + ' sélecteurs testés automatiquement',
    SPF_FOUND_LOOKUPS:     n => 'Enregistrement SPF trouvé. ' + n + ' mécanisme' + (n !== 1 ? 's' : '') + ' de requête DNS.',
    SPF_MULTI_RECORDS:     n => 'Plusieurs enregistrements SPF trouvés (' + n + ') \u2014 exactement un seul est requis',
    SPF_MULTI_MESSAGE:     n => 'Plusieurs enregistrements SPF (' + n + ') \u2014 il s\'agit d\'une erreur de configuration.',
    SPF_LOOKUP_EXCEED:     n => n + ' mécanismes de requête DNS dépassent la limite RFC de 10 (peut provoquer un SPF PermError)',
    SPF_LOOKUP_HIGH:       n => n + ' mécanismes de requête DNS \u2014 approchant la limite RFC de 10',
    SPF_REDIRECT:          v => 'redirect=' + v + ' présent',
    SPF_IP4_BROAD:         (v, p) => 'ip4:' + v + ' a une plage très large (/' + p + ' \u2264 /16)',
    SPF_IP6_BROAD:         (v, p) => 'ip6:' + v + ' a une plage très large (/' + p + ' \u2264 /32)',
    SPF_REDIRECT_FOLLOWED: d => '\u2713 redirect= suivi \u2014 politique effective chargée depuis\u00a0: ' + d,
    SPF_REDIRECT_FROM:     d => 'Politique effective (redirect \u2192 ' + d + ')',
    SPF_REDIRECT_NO_RECORD:d => 'La cible de redirect= n\'a pas d\'enregistrement SPF\u00a0: ' + d,
    SPF_REDIRECT_MULTI:    d => 'La cible de redirect= a plusieurs enregistrements SPF\u00a0: ' + d,
    SPF_REDIRECT_ERROR:    d => 'Échec de récupération de la cible redirect=\u00a0: ' + d,
    CAA_RECORDS_FOUND:     n => n + ' enregistrement' + (n !== 1 ? 's' : '') + ' CAA trouvé' + (n !== 1 ? 's' : '') + '.',
    CAA_AUTHORIZED_CA:     n => 'CA' + (n !== 1 ? 's' : '') + ' autorisée' + (n !== 1 ? 's' : '') + '\u00a0: ',
    CAA_CRITICAL_COUNT:    n => n + ' enregistrement' + (n !== 1 ? 's' : '') + ' avec indicateur critique \u2014 les CA ne comprenant pas la balise doivent refuser l\'émission',
    DANE_VALIDATED_OF:     (v, t) => v + ' sur ' + t + ' serveur' + (t !== 1 ? 's' : '') + ' MX ' + (t !== 1 ? 'ont' : 'a') + ' des enregistrements TLSA validés par DNSSEC.',
    TLSA_RECORDS_COUNT:    n => n + ' enregistrement' + (n !== 1 ? 's' : '') + ' TLSA',
    RPKI_SUMMARY:          (valid, total, inv, noRoa) => valid + '/' + total + ' IP' + (total !== 1 ? 's' : '') + ' couverte' + (total !== 1 ? 's' : '') + ' par un ROA valide' + (inv > 0 ? ' \u2014 ' + inv + ' invalide' + (inv !== 1 ? 's' : '') : '') + (noRoa > 0 ? ' \u2014 ' + noRoa + ' sans ROA' : ''),
    ASPA_SUMMARY:          (pub, total) => pub + '/' + total + ' ASN' + (total !== 1 ? 's' : '') + ' avec ASPA publié',
    TLSRPT_ENDPOINT:       uri => 'Point de rapport\u00a0: ' + uri,
    TLSRPT_BAD_URI:        uri => 'Schéma URI rua= inconnu\u00a0: ' + uri,
    MTASTS_MAX_AGE_LOW:    age => 'max_age=' + age + 's est inférieur à 1 jour \u2014 envisagez 604800 (1 semaine) ou plus',
    MTASTS_POLICY_UNKNOWN: mode => 'Mode de politique inconnu ou manquant\u00a0: ' + (mode || '(vide)'),
    MTASTS_POLICY_ERROR:   (e, url) => e + ' \u2014 vérifiez\u00a0: ' + url,
    STXT_EXPIRES_WARN:     n => 'Expire dans ' + n + ' jours \u2014 renouvelez bientôt.',
    STXT_EXPIRES_OK:       (d, n) => 'Expire\u00a0: ' + d + ' (' + n + ' jours).',
    STXT_EXPIRED:          d => 'security.txt a expiré (' + d + ').',
    WHOIS_EXPIRES_SOON:    n => '\u26a0 Le domaine expire dans ' + n + ' jours \u2014 renouvelez bientôt.',
    DOMAIN_INVALID:        d => '\u00ab\u00a0' + d + '\u00a0\u00bb ne ressemble pas à un domaine valide.',
    SPF_ALL_PASSALL:       q => '"' + q + 'all" (tout accepter) \u2014 autorise n\'importe quel serveur à envoyer pour ce domaine',
    CAA_IODEF:             v => 'Signalement d\'incident (iodef)\u00a0: ' + v,
    STXT_CONTACT_OK:       v => 'Contact\u00a0: ' + v,
    DMARC_POLICY_UNKNOWN:  p => 'Valeur p= inconnue\u00a0: ' + p,
    DMARC_PCT_LOW:         pct => 'pct=' + pct + ' \u2014 politique appliquée sur seulement ' + pct + '% des messages',
    DMARC_RUA_URI:         uri => 'Rapports agrégés (rua)\u00a0: ' + uri,
    DMARC_RUF_URI:         uri => 'Rapports forensiques (ruf)\u00a0: ' + uri,
    // DMARCbis (RFC 9989 / 9990 / 9991)
    DMARCBIS_TW_AT_AUTHOR:   dom => 'Enregistrement de politique publié sur le domaine auteur (_dmarc.' + dom + ') — c’est celui qu’appliquent les destinataires',
    DMARCBIS_TW_INHERITED:   (dom, tag, val) => 'Aucun enregistrement sur le domaine auteur — les destinataires héritent de la politique publiée sur _dmarc.' + dom + ', en appliquant ' + tag + '=' + val,
    DMARCBIS_TW_ORG_DOMAIN:  (dom, rule) => 'Domaine organisationnel : ' + dom + ' — ' + ({
                               'psd-n':    'fixé par psd=n',
                               'psd-y':    'une étiquette sous un enregistrement psd=y',
                               'shortest': 'nom le plus court du parcours portant un enregistrement DMARC',
                               'default':  'aucun enregistrement trouvé dans le parcours, le domaine interrogé est donc utilisé',
                             }[rule] || rule),
    DMARCBIS_TW_QUERIES:     n => 'Parcours de l’arbre — ' + n + (n === 1 ? ' requête' : ' requêtes'),
    DMARCBIS_V_CASE:         v => 'v=' + v + ' — la valeur de version est sensible à la casse dans RFC 9989 §4.7 et doit être exactement DMARC1',
    DMARCBIS_DUPLICATE_TAGS: l => 'Balise répétée dans l’enregistrement : ' + l + ' — RFC 9989 §4.8 y voit une erreur de syntaxe',
    DMARCBIS_PCT_PARTIAL:    v => 'pct=' + v + ' a été supprimée dans RFC 9989 (annexe A.6) — les pourcentages partiels étaient appliqués de manière incohérente ; utilisez t=y pendant les tests, sinon retirez la balise',
    DMARCBIS_RF_HISTORIC:    v => 'rf=' + v + ' est historique dans le registre RFC 9989 §9.3 — supprimez-la',
    DMARCBIS_RI_HISTORIC:    v => 'ri=' + v + ' est historique dans le registre RFC 9989 §9.3 — supprimez-la',
    DMARCBIS_T_INVALID:      v => 't=' + v + ' est invalide — RFC 9989 §4.7 n’autorise que y ou n',
    DMARCBIS_T_TESTING:      (p, eff) => 't=y — mode test : les destinataires appliquent ' + eff + ' au lieu de la p=' + p + ' publiée (RFC 9989 §4.7)',
    DMARCBIS_NP_INVALID:     v => 'np=' + v + ' est invalide — RFC 9989 §4.7 n’autorise que none, quarantine ou reject',
    DMARCBIS_NP_SET:         v => 'np=' + v + ' — politique pour les sous-domaines inexistants (RFC 9989 §4.7)',
    DMARCBIS_PSD_INVALID:    v => 'psd=' + v + ' est invalide — RFC 9989 §4.7 n’autorise que y, n ou u',
    DMARCBIS_SP_INVALID:     v => 'sp=' + v + ' est invalide — RFC 9989 §4.7 n’autorise que none, quarantine ou reject',
    DMARCBIS_SP_IGNORED:     org => 'sp= est ignorée sur cet enregistrement — RFC 9989 §4.7 : la découverte de politique ne lit sp= que sur le domaine organisationnel (' + org + ')',
    DMARCBIS_ALIGN_INVALID:  (tag, v) => tag + '=' + v + ' est invalide — RFC 9989 §4.7 n’autorise que r ou s',
    DMARCBIS_FO_INVALID:     v => 'fo=' + v + ' ne respecte pas la syntaxe de RFC 9989 §4.8 — les valeurs valides sont 0, 1, d et s, séparées par des deux-points, 0 et 1 étant mutuellement exclusifs',
    DMARCBIS_URI_OBS_SIZE:   l => 'Suffixe !size obsolète dans une URI de rapport : ' + l + ' — RFC 9989 §4.8 demande aux générateurs de rapports de l’ignorer',
    DMARCBIS_UNKNOWN_TAGS:   l => 'Balise(s) non enregistrée(s) : ' + l + ' — absentes du registre RFC 9989 §9.3, les destinataires doivent donc les ignorer',
    DMARCBIS_EXT_INTERNAL:   (tag, uri) => tag + '=' + uri + ' — même domaine organisationnel, aucun enregistrement d’autorisation nécessaire',
    DMARCBIS_EXT_AUTHORIZED: (tag, uri, name) => tag + '=' + uri + ' — destination externe autorisée par ' + name,
    DMARCBIS_EXT_MISSING:    (tag, uri, name) => tag + '=' + uri + ' — destination externe NON autorisée : aucun enregistrement TXT v=DMARC1 à ' + name + ' ; les destinataires doivent ignorer cette URI et n’envoient aucun rapport',
    DMARCBIS_EXT_OVERRIDE:   (tag, uri, name, ov) => tag + '=' + uri + ' — autorisée par ' + name + ', qui redirige les rapports vers ' + ov,
    DMARCBIS_EXT_OVERRIDE_BAD: (tag, uri, name, ov) => tag + '=' + uri + ' — l’enregistrement d’autorisation à ' + name + ' redirige vers ' + ov + ' sur un autre hôte ; RFC 9990 §4 interdit d’envoyer à l’une ou l’autre adresse',
    DMARCBIS_EXT_TOO_LONG:   (tag, uri) => tag + '=' + uri + ' — le nom d’autorisation dépasse les limites de longueur DNS, la relation ne peut donc pas être confirmée (RFC 9990 §4 étape 4)',
    DMARCBIS_EXT_UNPARSABLE: (tag, uri) => tag + '=' + uri + ' — aucun hôte n’a pu être extrait de cette URI',
    DMARCBIS_EXT_ERROR:      (tag, uri, name) => tag + '=' + uri + ' — la requête pour ' + name + ' a échoué ; l’autorisation n’a pas pu être confirmée',
    BIMI_LOGO_URL:         url => 'URL du logo\u00a0: ' + url,
    BIMI_AUTHORITY_URL:    url => 'URL d\'autorité\u00a0: ' + url,
    PTR_VALUE:             v => 'PTR\u00a0: ' + v,
    // Keys added in later releases — backfilled
    IPV6_DOMAIN_SUMMARY: n => n + ' adresse' + (n !== 1 ? 's' : '') + ' IPv6 trouvée' + (n !== 1 ? 's' : '') + ' pour le domaine.',
    IPV6_MX_SUMMARY: (n, t) => n + '/' + t + ' hôte' + (t !== 1 ? 's' : '') + ' MX disposent d\u2019IPv6.',
    IPV6_NS_SUMMARY: (n, t) => n + '/' + t + ' hôte' + (t !== 1 ? 's' : '') + ' NS disposent d\u2019IPv6.',
    SPF_LOOKUP_TOTAL_EXCEED: n => n + ' requêtes DNS au total (y compris les include imbriqués) dépassent la limite de 10 de RFC 7208 — les destinataires renverront SPF PermError',
    SPF_LOOKUP_TOTAL_HIGH: n => n + ' requêtes DNS au total (y compris les include imbriqués) — proche de la limite de 10 de RFC 7208',
    SPF_FOUND_LOOKUPS_TOTAL: (direct, total) => 'Enregistrement SPF trouvé. ' + direct + ' directes + ' + total + ' requêtes DNS au total (récursif).',
    RPKI_NS_SINGLE_ASN: (asn, holder) => 'Tous les serveurs de noms sur un seul ASN (' + asn + (holder ? ' — ' + holder : '') + ') — point unique de défaillance pour le routage DNS',
    RPKI_NS_MULTI_ASN: n => 'Les serveurs de noms se répartissent sur ' + n + ' ASN différents — bonne résilience de routage',
  },

  // ── x: textes d'explication (HTML) ───────────────────────────────────────
  x: {
    DMARC:
      '<b>DMARC (Domain-based Message Authentication, Reporting and Conformance)</b> ' +
      'combine SPF et DKIM avec une politique indiquant aux destinataires quoi faire en cas d\'\u00e9chec d\'authentification. ' +
      '\u00c0 l\u2019origine <a href="https://www.rfc-editor.org/rfc/rfc7489">RFC 7489</a>, d\u00e9sormais normalis\u00e9 par <a href="https://www.rfc-editor.org/rfc/rfc9989">RFC 9989</a> (\u00ab\u00a0DMARCbis\u00a0\u00bb), qui rend \u00e9galement obsol\u00e8te <a href="https://www.rfc-editor.org/rfc/rfc9091">RFC 9091</a> (PSD DMARC). Voir la section DMARCbis ci-dessous pour la conformit\u00e9 avec la nouvelle sp\u00e9cification.<br><br>' +
      '<b>Politique (p=)\u00a0:</b> <b>reject</b> \u2014 si l\'authentification \u00e9choue, le message est supprim\u00e9 (le plus fort). ' +
      '<b>quarantine</b> \u2014 envoyer en spam. <b>none</b> \u2014 surveillance uniquement, aucune action.<br><br>' +
      '<b>Alignement des identifiants\u00a0:</b> DMARC exige que le domaine dans l\'en-t\u00eate <code>From:</code> s\'aligne avec le domaine authentifi\u00e9 par SPF ou DKIM. ' +
      'Le mode <b>relax\u00e9</b> (par d\u00e9faut) autorise les correspondances de domaine organisationnel\u00a0; le mode <b>strict</b> (<code>adkim=s</code> / <code>aspf=s</code>) exige une correspondance exacte.<br><br>' +
      '<b>Rapports\u00a0:</b> <code>rua=</code> re\u00e7oit des rapports XML agr\u00e9g\u00e9s (recommand\u00e9), d\u00e9finis par ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9990">RFC 9990</a>. ' +
      '<code>ruf=</code> re\u00e7oit des rapports d\u2019\u00e9chec par message, d\u00e9finis par ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9991">RFC 9991</a> (sensible \u2014 \u00e0 utiliser avec pr\u00e9caution).<br><br>' +
      '<b>Politique de sous-domaine (sp=)\u00a0:</b> Si omis, les sous-domaines h\u00e9ritent de <code>p=</code>. ' +
      'Utilisez <code>sp=reject</code> pour prot\u00e9ger explicitement tous les sous-domaines. ' +
      'RFC 9989 ajoute <code>np=</code> pour les sous-domaines qui n\u2019existent pas du tout.<br><br>' +
      '<b>pct=\u00a0:</b> Appliquait la politique au pourcentage indiqu\u00e9 des messages \u00e9chou\u00e9s. ' +
      '<b>Supprim\u00e9 dans RFC 9989</b> \u2014 <code>pct=0</code> s\u2019\u00e9crit d\u00e9sormais <code>t=y</code>, et toute autre valeur doit simplement \u00eatre retir\u00e9e.<br><br>' +
      '<b>Exemples d\'enregistrements DNS\u00a0:</b><br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"</code> \u2014 surveillance uniquement<br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=quarantine; sp=quarantine; rua=mailto:dmarc@example.com"</code> \u2014 quarantaine<br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=reject; sp=reject; np=reject; adkim=s; aspf=s; rua=mailto:dmarc@example.com; psd=n"</code> \u2014 application compl\u00e8te, style RFC 9989',
    DMARCBIS:
      '<b>DMARCbis</b> est la r\u00e9vision 2026 de DMARC, publi\u00e9e en trois documents\u00a0: ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9989">RFC 9989</a> (le protocole), ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9990">RFC 9990</a> (rapports agr\u00e9g\u00e9s) et ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9991">RFC 9991</a> (rapports d\u2019\u00e9chec). ' +
      'Les enregistrements \u00e9crits pour RFC 7489 continuent de fonctionner \u2014 rien ici ne casse un d\u00e9ploiement existant \u2014 mais plusieurs balises ont chang\u00e9 de statut.<br><br>' +
      '<b>Ce qui a chang\u00e9\u00a0:</b><br>' +
      '\u2022 <code>pct=</code> dispara\u00eet (annexe A.6). Les destinataires appliquaient les pourcentages partiels de mani\u00e8re incoh\u00e9rente\u00a0; seul <code>pct=0</code> s\u2019est av\u00e9r\u00e9 utile, et il s\u2019\u00e9crit d\u00e9sormais <code>t=y</code>.<br>' +
      '\u2022 <code>t=</code> (mode test) est nouvelle\u00a0: avec <code>t=y</code>, les destinataires appliquent un niveau en dessous de la politique publi\u00e9e \u2014 <code>reject</code> se comporte comme <code>quarantine</code>, et <code>quarantine</code> comme <code>none</code>.<br>' +
      '\u2022 <code>np=</code> d\u00e9finit la politique pour les sous-domaines <b>inexistants</b>, s\u00e9par\u00e9ment de <code>sp=</code> qui couvre les sous-domaines existants.<br>' +
      '\u2022 <code>psd=</code> marque un domaine de suffixe public (<code>y</code>) ou fixe un domaine organisationnel (<code>n</code>). L\u2019une ou l\u2019autre valeur met fin imm\u00e9diatement au parcours de l\u2019arbre.<br>' +
      '\u2022 <code>rf=</code> et <code>ri=</code> sont historiques dans le registre des balises (\u00a79.3) et doivent \u00eatre supprim\u00e9es.<br><br>' +
      '<b>Parcours de l\u2019arbre DNS (\u00a74.10)\u00a0:</b> la Public Suffix List ne sert plus \u00e0 trouver le domaine organisationnel. ' +
      'Les destinataires interrogent <code>_dmarc.</code> au niveau du domaine auteur, puis remontent \u00e9tiquette par \u00e9tiquette \u2014 au plus huit requ\u00eates \u2014 jusqu\u2019\u00e0 trouver un enregistrement ' +
      'ou un enregistrement portant <code>psd=y</code> / <code>psd=n</code>. Les grandes organisations peuvent ainsi publier leur politique en plusieurs points de leur espace de noms.<br><br>' +
      '<b>Autorisation d\u2019une destination externe (RFC 9990 \u00a74, RFC 9991 \u00a75)\u00a0:</b> si <code>rua=</code> ou <code>ruf=</code> pointe hors de votre domaine organisationnel, ' +
      'cette destination doit publier <code>votre-domaine._report._dmarc.leur-domaine</code> contenant au moins <code>v=DMARC1</code>. ' +
      'Sans cela, les destinataires <b>doivent</b> ignorer l\u2019URI, et vous ne recevez rien sans aucune alerte. ' +
      'Une destination pr\u00eate \u00e0 accepter les rapports de tout le monde peut publier un joker sur <code>*._report._dmarc.</code><br><br>' +
      '<b>S\u00e9paration des rapports\u00a0:</b> les rapports agr\u00e9g\u00e9s (XML) rel\u00e8vent de RFC 9990\u00a0; les rapports d\u2019\u00e9chec par message rel\u00e8vent de RFC 9991, qui met aussi \u00e0 jour le format ARF de ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc6591">RFC 6591</a> avec un champ <code>Identity-Alignment</code> et rend le s\u00e9lecteur DKIM obligatoire dans les rapports.',
    DNSSEC:
      '<b>Qu\'est-ce que DNSSEC\u00a0?</b> DNSSEC (<a href="https://www.rfc-editor.org/rfc/rfc4033">RFC 4033</a>) ajoute des signatures cryptographiques aux enregistrements DNS, ' +
      'empêchant l\'empoisonnement de cache et les attaques de l\'homme du milieu. ' +
      'L\'<b>indicateur AD</b> (Authentic Data) du résolveur Cloudflare confirme que toute la chaîne depuis la racine jusqu\'à ce domaine est validée.<br><br>' +
      '<b>Évaluation des algorithmes</b> selon <a href="https://www.rfc-editor.org/rfc/rfc8624">RFC 8624</a>\u00a0: <b>Ed25519</b> (alg 15) et <b>ECDSA P-256</b> (alg 13) sont les plus forts. ' +
      'RSA/SHA-256 (alg 8) est acceptable. RSA/SHA-1 (alg 5) et les variantes DSA sont faibles ou non sécurisés.<br><br>' +
      '<b>DNSSEC active DANE\u00a0:</b> Sans DNS validé par DNSSEC, les enregistrements TLSA ne sont pas fiables \u2014 ' +
      'un attaquant pourrait substituer de faux enregistrements TLSA.',
    MX:
      '<b>Les enregistrements MX (Mail eXchange)</b> (<a href="https://www.rfc-editor.org/rfc/rfc5321">RFC 5321</a>) indiquent aux autres serveurs où livrer le courrier de votre domaine. ' +
      'Les numéros de priorité plus bas sont essayés en premier (priorité 10 avant 20).<br><br>' +
      '<b>Pourquoi DNSSEC est important pour MX\u00a0:</b> Un attaquant capable de falsifier les enregistrements MX pourrait rediriger tous les courriers entrants. ' +
      'Les enregistrements MX validés par DNSSEC empêchent cela. Le DNSSEC de chaque nom d\'hôte MX est vérifié au sommet de sa zone.',
    DANE:
      '<b>DANE</b> (<a href="https://www.rfc-editor.org/rfc/rfc7672">RFC 7672</a>) utilise des enregistrements TLSA (<a href="https://www.rfc-editor.org/rfc/rfc6698">RFC 6698</a>) pour permettre aux serveurs de messagerie de vérifier les certificats TLS ' +
      'sans dépendre des CA commerciales. Interrogé à <b>_25._tcp.<mx-hostname></b>.<br><br>' +
      '<b>Codes d\'utilisation TLSA\u00a0:</b> ' +
      '<b>DANE-EE (3)</b> \u2014 ancrer au certificat d\'entité finale (le plus fort). ' +
      '<b>DANE-TA (2)</b> \u2014 ancrer à une ancre de confiance. ' +
      '<b>PKIX-EE (1)</b> / <b>PKIX-TA (0)</b> \u2014 nécessitent une validation CA plus une correspondance TLSA.<br><br>' +
      '<b>Types de correspondance\u00a0:</b> SHA-256 (1) et SHA-512 (2) sont recommandés. La correspondance exacte (0) est fragile lors de la rotation des certificats.<br><br>' +
      '<b>DNSSEC obligatoire\u00a0:</b> Sans DNSSEC, les enregistrements TLSA peuvent être falsifiés et DANE n\'offre aucune sécurité.',
    SPF:
      '<b>SPF (Sender Policy Framework, <a href="https://www.rfc-editor.org/rfc/rfc7208">RFC 7208</a>)</b> spécifie quels serveurs sont autorisés à envoyer du courrier pour votre domaine. ' +
      'Les serveurs destinataires vérifient si l\'IP d\'envoi correspond.<br><br>' +
      '<b>Qualificateurs\u00a0:</b> <b>-all</b> (échec dur) rejette les expéditeurs non autorisés \u2014 le plus fort. ' +
      '<b>~all</b> (échec souple) les marque comme suspects. <b>?all</b> (neutre) n\'offre aucune protection. ' +
      '<b>+all</b> autorise tout le monde \u2014 ne jamais utiliser ceci.<br><br>' +
      '<b>Mécanismes\u00a0:</b> <b>include:</b> délègue à un autre domaine. ' +
      '<b>ip4:</b>/<b>ip6:</b> autorisent des plages d\'IP. <b>mx</b> autorise vos serveurs MX.<br><br>' +
      '<b>Limite de 10 requêtes (<a href="https://www.rfc-editor.org/rfc/rfc7208#section-4.6.4">RFC 7208 §4.6.4</a>)\u00a0:</b> Dépasser 10 mécanismes de requête DNS provoque un PermError.',
    DKIM:
      '<b>Qu\'est-ce qu\'un sélecteur DKIM\u00a0?</b> DKIM (<a href="https://www.rfc-editor.org/rfc/rfc6376">RFC 6376</a>) utilise la cryptographie à clé publique pour signer le courrier sortant. ' +
      'Un sélecteur (ex. <code>google</code>) est une étiquette pointant vers une clé publique DKIM ' +
      'publiée à <code><selector>._domainkey.<domain></code>. ' +
      'Un domaine peut avoir plusieurs sélecteurs \u2014 un par fournisseur de messagerie ou pour la rotation des clés.<br><br>' +
      '<b>Trouver des sélecteurs\u00a0:</b> Recherchez dans l\'en-tête <code>DKIM-Signature:</code> de tout courrier reçu. ' +
      'La balise <code>s=</code> contient le sélecteur. Les sélecteurs personnalisés ne peuvent pas être découverts automatiquement.<br><br>' +
      '<b>Balises d\'enregistrement de clé (<a href="https://www.rfc-editor.org/rfc/rfc6376">RFC 6376</a> §3.6.1)\u00a0:</b><br>' +
      '<b>k=</b> type de clé\u00a0: <b>ed25519</b> est recommandé (compact et fort). <b>rsa</b> est la valeur par défaut si omis.<br>' +
      '<b>h=</b> algorithmes de hachage autorisés. <b>sha256</b> est la seule valeur recommandée. ' +
      '<b>sha1</b> a été déprécié dans <a href="https://www.rfc-editor.org/rfc/rfc8301">RFC 8301</a> (2018) et ne doit pas être utilisé. ' +
      'Si omis, tous les algorithmes sont implicitement autorisés \u2014 ajoutez explicitement <code>h=sha256</code> pour restreindre à l\'algorithme fort.<br>' +
      '<b>s=</b> type de service\u00a0: <b>email</b> restreint la clé à l\'usage pour la messagerie (recommandé). ' +
      '<b>*</b> (par défaut si omis) autorise l\'utilisation pour tout service.<br>' +
      '<b>t=y</b> marque la clé en mode test \u2014 les vérificateurs ne doivent pas rejeter les échecs. À supprimer des clés en production.<br>' +
      '<b>t=s</b> désactive l\'héritage de clé par les sous-domaines \u2014 les sous-domaines doivent publier leurs propres clés DKIM.<br>' +
      '<b>p=</b> la clé publique (base64). Une valeur vide révoque la clé, ce qui est la méthode recommandée pour retirer un sélecteur.<br>' +
      '<b>v=</b> version\u00a0: <code>DKIM1</code> est optionnel mais recommandé pour la clarté. Toute autre valeur invalide l\'enregistrement.<br>' +
      '<b>n=</b> notes\u00a0: texte lisible par l\'humain ignoré par les vérificateurs.<br><br>' +
      '<b>Tailles de clé\u00a0:</b> <b>Ed25519</b> est le plus fort et le plus compact. ' +
      '<b>RSA-2048</b> est la recommandation minimale. ' +
      '<b>RSA-1024</b> est faible et doit être remplacé immédiatement.<br><br>' +
      '<b>DNSSEC sur les enregistrements DKIM</b> empêche un attaquant de substituer votre clé publique dans le DNS.',
    DKIM2:
      'Le groupe de travail DKIM de l\u2019IETF d\u00e9veloppe <b>DKIM2</b>, un successeur de DKIM1 ' +
      '(<a href="https://www.rfc-editor.org/rfc/rfc6376">RFC 6376</a>) qui reprend aussi le r\u00f4le d\u2019ARC ' +
      '(<a href="https://www.rfc-editor.org/rfc/rfc8617">RFC 8617</a>). Ce n\u2019est encore qu\u2019un Internet-Draft : ' +
      'il n\u2019y a rien \u00e0 d\u00e9ployer pour l\u2019instant, et ce v\u00e9rificateur ne le teste pas.<br><br>' +
      '<b>Ce qui change :</b> chaque saut qui traite un message ajoute sa propre signature, au lieu que seul le ' +
      'domaine d\u2019origine signe une fois. Chaque signature enregistre l\u2019enveloppe SMTP (<code>MAIL FROM</code> et ' +
      '<code>RCPT TO</code>) \u00e0 ce saut, construisant une cha\u00eene de possession v\u00e9rifiable. Les modifications ' +
      'apport\u00e9es en transit par les listes de diffusion et les redirecteurs sont d\u00e9crites par des \u00ab recettes \u00bb ' +
      'transport\u00e9es dans le message, de sorte que le destinataire peut reconstituer l\u2019original et valider malgr\u00e9 ' +
      'tout la signature. Cela vise les deux \u00e9checs que DKIM1 ne sait pas traiter : la rupture par redirection ' +
      'et les attaques par rejeu.<br><br>' +
      '<b>Ce qui ne change pas :</b> les cl\u00e9s restent publi\u00e9es dans le DNS \u00e0 ' +
      '<code><s\u00e9lecteur>._domainkey.<domaine></code>, toujours sous forme d\u2019enregistrements ' +
      '<code>v=DKIM1</code> avec les balises <code>k=</code> et <code>p=</code> : les cl\u00e9s existantes sont ' +
      'conserv\u00e9es telles quelles. <code>rsa-sha256</code> reste obligatoire, <code>ed25519-sha256</code> est ' +
      'recommand\u00e9 et <code>rsa-sha1</code> est rejet\u00e9 sans appel. Les balises <code>h=</code>, <code>n=</code> ' +
      'et <code>s=</code> sont retir\u00e9es.<br><br>' +
      '<b>\u00c9tat d\u2019avancement :</b> <code>draft-ietf-dkim-dkim2-spec</code> est le document adopt\u00e9 par le groupe ' +
      'de travail, aux c\u00f4t\u00e9s de brouillons distincts pour l\u2019encodage DNS et les bonnes pratiques. Des ' +
      'impl\u00e9mentations ind\u00e9pendantes en Rust, Python et Go ont d\u00e9montr\u00e9 leur interop\u00e9rabilit\u00e9 en juillet 2026. ' +
      'Rien n\u2019est encore un RFC, aucune action n\u2019est donc requise aujourd\u2019hui \u2014 mais l\u2019hygi\u00e8ne des cl\u00e9s que ' +
      'vous corrigez maintenant (Ed25519 ou RSA-2048, <code>h=sha256</code>, DNSSEC) se reporte directement ' +
      'sur DKIM2.<br><br>' +
      '<b>Pour aller plus loin :</b><br>' +
      '<a href="https://datatracker.ietf.org/wg/dkim/documents/">Groupe de travail DKIM de l\u2019IETF \u2014 tous les documents</a><br>' +
      '<a href="https://datatracker.ietf.org/doc/draft-ietf-dkim-dkim2-spec/">draft-ietf-dkim-dkim2-spec \u2014 sp\u00e9cification principale</a><br>' +
      '<a href="https://datatracker.ietf.org/doc/draft-ietf-dkim-dkim2-dns/">draft-ietf-dkim-dkim2-dns \u2014 sp\u00e9cification des noms de domaine</a><br>' +
      '<a href="https://datatracker.ietf.org/doc/draft-ietf-dkim-dkim2-bcp/">draft-ietf-dkim-dkim2-bcp \u2014 bonnes pratiques</a><br>' +
      '<a href="https://datatracker.ietf.org/doc/draft-ietf-dkim-dkim2-motivation/">draft-ietf-dkim-dkim2-motivation \u2014 justification et contexte</a>',
    TLSRPT:
      '<b>TLS-RPT (<a href="https://www.rfc-editor.org/rfc/rfc8460">RFC 8460</a>)</b> permet de recevoir des rapports d\'échecs TLS des serveurs de messagerie expéditeurs. ' +
      'Publié comme enregistrement TXT à <code>_smtp._tls.<domaine></code>.<br><br>' +
      '<b>Points de rapport rua=\u00a0:</b> Les rapports sont envoyés aux adresses <code>mailto:</code> ou aux services d\'agrégation <code>https:</code>. ' +
      'Les points HTTPS sont excellents\u00a0; mailto est bon.<br><br>' +
      '<b>Contenu des rapports\u00a0:</b> Données JSON agrégées \u2014 connexions TLS réussies, échecs de handshake, ' +
      'erreurs de certificat et violations de politique. Essentiel pour diagnostiquer les problèmes MTA-STS et DANE.<br><br>' +
      '<b>Exemples d\'enregistrements DNS\u00a0:</b><br>' +
      '<code>_smtp._tls.example.com. TXT "v=TLSRPTv1; rua=mailto:tlsrpt@example.com"</code><br>' +
      '<code>_smtp._tls.example.com. TXT "v=TLSRPTv1; rua=https://tlsrpt.example.com/v1"</code> — point d\'agrégation HTTPS',
    MTASTS:
      '<b>MTA-STS (<a href="https://www.rfc-editor.org/rfc/rfc8461">RFC 8461</a>)</b> indique aux serveurs expéditeurs d\'exiger TLS lors de la livraison à votre domaine ' +
      'et de valider le certificat de votre serveur de messagerie. ' +
      'Enregistrement DNS à <code>_mta-sts.<domaine></code>\u00a0; ' +
      'politique à <code>https://mta-sts.<domaine>/.well-known/mta-sts.txt</code>.<br><br>' +
      '<b>Modes de politique\u00a0:</b> <b>enforce</b> \u2014 TLS obligatoire avec certificat valide, ou livraison refusée. ' +
      '<b>testing</b> \u2014 collecter des données TLS-RPT sans appliquer. ' +
      '<b>none</b> \u2014 explicitement désactivé.<br><br>' +
      '<b>max_age\u00a0:</b> Secondes pendant lesquelles les expéditeurs mettent la politique en cache. 604800 (1 semaine) ou 31557600 (1 an) sont des valeurs typiques.<br><br>' +
      '<b>Exemple d\'enregistrement DNS\u00a0:</b><br>' +
      '<code>_mta-sts.example.com. TXT "v=STSv1; id=20240101000000"</code><br><br>' +
      '<b>Exemple de fichier de politique</b> à <code>https://mta-sts.example.com/.well-known/mta-sts.txt</code>\u00a0:<br>' +
      '<code>version: STSv1</code><br>' +
      '<code>mode: enforce</code><br>' +
      '<code>mx: mail.example.com</code><br>' +
      '<code>max_age: 604800</code>',
    CAA:
      '<b>CAA (Certification Authority Authorization, <a href="https://www.rfc-editor.org/rfc/rfc8659">RFC 8659</a>)</b> restreint les CA pouvant émettre des certificats TLS.<br><br>' +
      '<b>Balises\u00a0:</b> <b>issue</b> \u2014 autorise une CA pour les certificats normaux (ex. <code>issue "letsencrypt.org"</code>). ' +
      '<b>issuewild</b> \u2014 autorise une CA pour les certificats wildcard. ' +
      '<b>iodef</b> \u2014 où les CA doivent signaler les violations de politique.<br><br>' +
      '<b>Certificats S/MIME (issuemail, <a href="https://www.rfc-editor.org/rfc/rfc9495">RFC 9495</a>)\u00a0:</b> ' +
      'La balise <b>issuemail</b> contrôle quelles CA peuvent émettre des certificats S/MIME pour les adresses e-mail de votre domaine. ' +
      'Si omise, la balise <b>issue</b> régit également l\'émission S/MIME. ' +
      'Utilisez <code>issuemail ";"</code> pour interdire toute émission S/MIME depuis votre domaine.<br><br>' +
      '<b>Certificats VMC pour BIMI\u00a0:</b> Les Verified Mark Certificates (VMC) utilisés pour les enregistrements d\'autorité BIMI sont régis par la balise standard <b>issue</b> \u2014 il n\'existe pas de balise spécifique aux VMC. ' +
      'Seul un petit nombre de CA émet actuellement des VMC (DigiCert, Entrust). ' +
      'Si vous utilisez BIMI avec VMC (balise <code>a=</code>), assurez-vous que vos enregistrements <b>issue</b> incluent votre fournisseur VMC.<br><br>' +
      '<b>Indicateur critique\u00a0:</b> Les CA ne comprenant pas une balise avec indicateur critique doivent refuser l\'émission. ' +
      'À utiliser avec précaution \u2014 les balises critiques inconnues peuvent bloquer toute émission de certificats.<br><br>' +
      '<b>Sans enregistrements CAA,</b> toute CA réussissant la validation de domaine peut émettre des certificats.<br><br>' +
      '<b>Exemples d\'enregistrements DNS\u00a0:</b><br>' +
      '<code>example.com. CAA 0 issue "letsencrypt.org"</code><br>' +
      '<code>example.com. CAA 0 issue "sectigo.com"</code><br>' +
      '<code>example.com. CAA 0 issuewild "letsencrypt.org"</code><br>' +
      '<code>example.com. CAA 0 issuemail "sectigo.com"</code><br>' +
      '<code>example.com. CAA 0 iodef "mailto:caa-violations@example.com"</code>',
    RPKI:
      '<b>RPKI (Resource Public Key Infrastructure)</b> permet aux détenteurs d\'adresses IP de publier des Autorisations d\'Origine de Route (ROA) ' +
      'spécifiant quel ASN est autorisé à annoncer leurs préfixes.<br><br>' +
      '<b>Valide</b> \u2014 une ROA correspondante existe\u00a0: le préfixe est protégé contre le détournement BGP. ' +
      '<b>Invalide</b> \u2014 une ROA existe mais n\'autorise PAS l\'annonce actuelle\u00a0: les routeurs avec validation RPKI peuvent filtrer la route. ' +
      '<b>Sans ROA</b> \u2014 aucune ROA trouvée\u00a0: le préfixe n\'est pas protégé mais peut être routé.<br><br>' +
      'Cette vérification résout les IPs pour tous les hôtes NS et MX, puis interroge RIPE Stat pour valider chaque préfixe par rapport à son ASN d\'origine. ' +
      'RPKI protège l\'infrastructure de messagerie contre le détournement de routes BGP qui pourrait rediriger ou intercepter le trafic de messagerie.',
    ASPA:
      '<b>ASPA (Autonomous System Provider Authorization, <a href="https://www.rfc-editor.org/rfc/rfc9582">RFC 9582</a>)</b> permet à un AS de déclarer quels fournisseurs upstream il est autorisé à utiliser. ' +
      'Les enregistrements ASPA publiés permettent de détecter les fuites de routes\u00a0: si le trafic arrive via un fournisseur non autorisé, les routeurs compatibles ASPA peuvent le rejeter.<br><br>' +
      '<b>Publié</b> \u2014 un enregistrement ASPA avec des fournisseurs déclarés existe. ' +
      '<b>Sans ASPA</b> \u2014 aucun enregistrement publié\u00a0; les fuites de routes impliquant cet AS ne peuvent pas être détectées par les routeurs compatibles ASPA.<br><br>' +
      'Cette vérification lit les données ASPA obtenues lors de la vérification RPKI, affichant les enregistrements d\'autorisation de fournisseur pour tous les ASN associés aux hôtes NS et MX du domaine.<br><br>' +
      '<b>Note\u00a0:</b> RFC 9582 est encore une norme proposée et le déploiement réel est actuellement très limité. ' +
      'C\'est pourquoi l\'absence d\'enregistrements ASPA n\'affecte pas votre score \u2014 cette vérification est purement informative pour l\'instant. ' +
      'Cependant, il vaut la peine de demander à votre hébergeur ou FAI s\'il suit le développement d\'ASPA et envisage son implémentation.',
    STXT:
      '<b>security.txt (<a href="https://www.rfc-editor.org/rfc/rfc9116">RFC 9116</a>)</b> est une norme pour publier des informations de divulgation des vulnérabilités.<br><br>' +
      'Placez le fichier à <code>/.well-known/security.txt</code> (préféré) ou <code>/security.txt</code>.<br><br>' +
      '<b>Champs obligatoires\u00a0:</b> <code>Contact</code> \u2014 où signaler des vulnérabilités (e-mail, URL ou téléphone). ' +
      '<code>Expires</code> \u2014 date ISO 8601 à partir de laquelle le fichier ne doit plus être fiable.<br><br>' +
      '<b>Champs optionnels\u00a0:</b> <code>Encryption</code> (URL de clé GPG), <code>Policy</code> (URL de politique de divulgation), ' +
      '<code>Acknowledgments</code>, <code>Preferred-Languages</code>, <code>Canonical</code>, <code>Hiring</code>.<br><br>' +
      '<b>Exemple de fichier\u00a0:</b><br>' +
      '<code>Contact: mailto:security@example.com</code><br>' +
      '<code>Contact: https://example.com/security/report</code><br>' +
      '<code>Expires: 2027-01-01T00:00:00Z</code><br>' +
      '<code>Encryption: https://example.com/pgp-key.asc</code><br>' +
      '<code>Policy: https://example.com/security/policy</code><br>' +
      '<code>Preferred-Languages: fr, en</code><br>' +
      '<code>Canonical: https://example.com/.well-known/security.txt</code><br><br>' +
      'Utilisez <a href="https://securitytxt.org/">securitytxt.org</a> pour générer et signer votre fichier.',
    WHOIS:
      '<b>WHOIS / RDAP</b> fournit des données d\'enregistrement de domaine via le protocole d\'accès aux données d\'enregistrement (<a href="https://www.rfc-editor.org/rfc/rfc7480">RFC 7480</a>).<br><br>' +
      'Les données sont récupérées depuis le serveur RDAP faisant autorité pour le TLD du domaine via <code>rdap.org</code>.<br><br>' +
      '<b>Champs principaux\u00a0:</b> <b>Registrar</b> \u2014 qui gère l\'enregistrement. ' +
      '<b>Expire</b> \u2014 quand l\'enregistrement doit être renouvelé. ' +
      '<b>Statut</b> \u2014 verrous du domaine (ex. <code>clientTransferProhibited</code> empêche les transferts non autorisés).<br><br>' +
      'RDAP remplace l\'ancien protocole WHOIS en texte brut (<a href="https://www.rfc-editor.org/rfc/rfc3912">RFC 3912</a>) par une API structurée basée sur JSON.<br><br>' +
      '<b>Note\u00a0:</b> Un domaine récemment créé est un indicateur reconnu de moindre confiance et de risque accru d\'être utilisé pour la distribution de logiciels malveillants, le phishing ou la fraude. ' +
      'Si vous vérifiez un domaine que vous ne possédez ni ne contrôlez, traitez une date de création très récente comme un signal d\'avertissement et appliquez une précaution et une vérification supplémentaires avant d\'interagir avec tout courrier ou service de ce domaine.',
    BIMI:
      '<b>BIMI est généralement considéré comme un outil marketing qui n\'apporte aucune valeur de sécurité supplémentaire. Afficher un logo dans une boîte aux lettres pour « prouver » que c\'est le vrai expéditeur revient à afficher un GIF disant « 100\u00a0% garanti ». Si vous souhaitez quand même payer des CA pour cela, libre à vous.</b><br><br>' +
      '<b>BIMI (Brand Indicators for Message Identification)</b> permet aux organisations d\'afficher leur logo dans les clients de messagerie compatibles (ex. Gmail, Apple Mail, Yahoo).<br><br>' +
      '<b>Enregistrement DNS\u00a0:</b> Publié comme enregistrement TXT à <code>default._bimi.<domaine></code>.<br><br>' +
      '<b>l= (URL du logo)\u00a0:</b> Une URL pointant vers un fichier SVG du logo. Nécessaire pour que BIMI fonctionne. ' +
      'Le SVG doit être une image carrée et sécurisée pour les profils, hébergée sur HTTPS.<br><br>' +
      '<b>a= (preuve d\'autorité)\u00a0:</b> Une URL pointant vers un Verified Mark Certificate (VMC) émis par une CA autorisée (ex. DigiCert, Entrust). ' +
      'La plupart des grands clients (dont Gmail) l\'exigent pour afficher le logo. Sans VMC, l\'enregistrement est purement informatif.<br><br>' +
      '<b>Prérequis\u00a0:</b> DMARC doit être en mode d\'application <code>p=quarantine</code> ou <code>p=reject</code>. ' +
      'BIMI n\'affecte pas directement la sécurité de la messagerie \u2014 c\'est une fonctionnalité de visibilité de marque qui récompense une application rigoureuse de DMARC.',
    PTR:
      '<b>Les enregistrements PTR</b> (enregistrements pointeur) mappent les adresses IP vers des noms d\'hôte \u2014 l\'inverse des enregistrements A/AAAA.<br><br>' +
      '<b>FCrDNS (Forward-Confirmed reverse DNS)\u00a0:</b> Un enregistrement PTR est « confirmé en avant » lorsque la valeur PTR résout en avant vers l\'IP d\'origine. ' +
      'De nombreux filtres anti-spam et MTA destinataires vérifient FCrDNS pour les hôtes MX. Une correspondance renforce la confiance\u00a0; un PTR absent ou non correspondant peut augmenter les scores de spam.<br><br>' +
      '<b>IPv4\u00a0:</b> Inversé comme <code>d.c.b.a.in-addr.arpa</code>. ' +
      '<b>IPv6\u00a0:</b> Étendu à 32 chiffres hexadécimaux, inversé et suivi de <code>.ip6.arpa</code>.<br><br>' +
      '<b>Cette vérification</b> résout les enregistrements A et AAAA pour chaque hôte MX, interroge le PTR pour chaque IP et vérifie si la valeur PTR correspond au nom d\'hôte MX (vérification FCrDNS relaxée). ' +
      'N\'affecte pas la note globale.',
    SELECTOR_HELP:
      '<b>Qu\u2019est-ce qu\u2019un s\u00e9lecteur DKIM\u00a0?</b> Un s\u00e9lecteur est un court libell\u00e9 (ex. <code>google</code>) qui indique aux serveurs destinataires quelle cl\u00e9 publique utiliser pour v\u00e9rifier la signature DKIM d\u2019un e-mail. ' +
      'Un domaine peut avoir plusieurs s\u00e9lecteurs \u2014 un par fournisseur de messagerie ou pour la rotation des cl\u00e9s.<br><br>' +
      '<b>Comment trouver vos s\u00e9lecteurs\u00a0:</b> Ouvrez un e-mail re\u00e7u, affichez ses en-t\u00eates complets et cherchez l\u2019en-t\u00eate <code>DKIM-Signature:</code>. ' +
      'La balise <code>s=</code> contient le nom du s\u00e9lecteur. Dans Gmail\u00a0: menu trois points \u2192 \u00ab\u00a0Afficher l\u2019original\u00a0\u00bb.<br><br>' +
      '<b>Pourquoi en ajouter ici\u00a0?</b> Environ 85 noms de s\u00e9lecteurs courants sont sond\u00e9s automatiquement. ' +
      'Utilisez ce champ pour les s\u00e9lecteurs personnalis\u00e9s ou peu communs.',
    // Keys added in later releases — backfilled
    IPV6:
      '<b>IPv6 (Internet Protocol version 6)</b> est le successeur d\u2019IPv4\u00a0; il utilise des adresses de 128 bits pour résoudre l\u2019épuisement de l\u2019espace d\u2019adressage 32 bits d\u2019IPv4. ' +
      'Une infrastructure de messagerie sans IPv6 ne peut pas recevoir de courrier d\u2019expéditeurs uniquement IPv6 et risque de devenir injoignable à mesure que l\u2019accès uniquement IPv6 se généralise.<br><br>' +
      '<b>Pourquoi c\u2019est important pour le courrier\u00a0:</b> les hôtes MX sans enregistrement AAAA ne peuvent pas accepter de courrier provenant de serveurs émetteurs uniquement IPv6. ' +
      'Les hôtes NS sans IPv6 ne peuvent pas répondre aux requêtes DNS des résolveurs uniquement IPv6. ' +
      'Dans les deux cas, cela produit des échecs de livraison silencieux et difficiles à diagnostiquer.<br><br>' +
      '<b>Exigences réglementaires obligatoires \u2014 pays sélectionnés\u00a0:</b><br>' +
      '<b>Norvège\u00a0:</b> <a href="https://lovdata.no/dokument/SF/forskrift/2013-04-05-959">Forskrift om IT-standarder i offentlig forvaltning \u00a712</a> \u2014 IPv6 obligatoire pour les services publics depuis le 1er janvier 2023\u00a0; report maximal jusqu\u2019au 1er janvier 2025.<br>' +
      '<b>États-Unis\u00a0:</b> mémorandum OMB M-21-07 \u2014 les agences fédérales doivent exploiter une infrastructure uniquement IPv6 d\u2019ici l\u2019exercice 2025.<br>' +
      '<b>UE\u00a0:</b> cadre européen d\u2019interopérabilité / directive NIS2 \u2014 encouragent la compatibilité IPv6 des services publics des États membres.<br>' +
      '<b>Inde\u00a0:</b> DoT National Telecom Policy 2018 \u2014 IPv6 obligatoire pour les FAI, l\u2019administration et le secteur public.<br>' +
      '<b>Chine\u00a0:</b> MIIT IPv6 Scale Deployment Action Plan 2017 \u2014 déploiement complet chez les FAI, l\u2019administration et les grandes plateformes.<br><br>' +
      'Cette vérification interroge les enregistrements AAAA du domaine lui-même, de tous les hôtes MX et de tous les hôtes NS. ' +
      'Elle <b>n\u2019affecte pas</b> la note de sécurité globale \u2014 elle est purement informative.'
  },
};
