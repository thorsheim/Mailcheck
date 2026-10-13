// Español (es) — traducción para DNS Email Security Checker

const LANG_ES = {

  // ── s: cadenas estáticas ──────────────────────────────────────────────────
  s: {
    PANEL_ZONE:          'Higiene de la zona DNS',
    TAB_ZONE:            'Zona',
    ZONE_SOA_TITLE:      'SOA (autoridad de la zona)',
    ZONE_ROW_MNAME:      'Servidor de nombres primario (MNAME)',
    ZONE_ROW_RNAME:      'Contacto de la zona (RNAME)',
    ZONE_ROW_SERIAL:     'Serial',
    ZONE_ROW_REFRESH:    'Refresh',
    ZONE_ROW_RETRY:      'Retry',
    ZONE_ROW_EXPIRE:     'Expire',
    ZONE_ROW_MINIMUM:    'TTL de caché negativa (minimum)',
    ZONE_SOA_OK:         'Los temporizadores SOA están dentro de los rangos que recomienda RFC 1912 §2.2',
    ZONE_SOA_RETRY_GE_REFRESH: 'SOA retry no es menor que refresh — tras un refresco fallido, los secundarios esperan más que el intervalo normal de refresco antes de reintentar (RFC 1912 §2.2)',
    ZONE_SOA_EXPIRE_SHORT: 'SOA expire no es mayor que refresh + retry — los secundarios pueden abandonar la zona tras un solo refresco fallido (RFC 1912 §2.2)',
    ZONE_SOA_RNAME_AT:   'El contacto SOA contiene una @ — el buzón se escribe con un punto (hostmaster.example.com), RFC 1035 §3.3.13',
    ZONE_NS_TITLE:       'Servidores de nombres',
    ZONE_NS_NONE:        'No se devolvieron registros NS para la zona',
    ZONE_NS_SINGLE:      'Un solo servidor de nombres — RFC 1034 §4.1 exige al menos dos, en redes distintas, por redundancia',
    ZONE_NS_TWO:         'Dos servidores de nombres — RFC 2182 §5 recomienda al menos tres',
    ZONE_APEX_CNAME:     'CNAME en el ápice de la zona — RFC 2181 §10.1 prohíbe un CNAME junto a los registros SOA, NS y MX; los resolutores discrepan sobre qué devolver y la entrega de correo puede fallar',
    ZONE_TXT_TITLE:      'Registros TXT del ápice',
    ZONE_TXT_TOKENS_TITLE: 'Tokens de verificación',
    ZONE_WILDCARD_TITLE: 'Registros comodín (*.zona)',
    ZONE_WILDCARD_NONE:  'No hay registros comodín en la zona',
    ZONE_WILDCARD_MX:    'MX comodín — el correo a cualquier subdominio no definido, erratas incluidas, se acepta en esta zona; asegúrese de que SPF y la política DMARC sp= cubran los subdominios',
    ZONE_WILDCARD_TXT:   'TXT comodín — toda consulta TXT bajo un nombre no definido se responde con él, incluido el descubrimiento de _dmarc, _mta-sts y _smtp._tls para subdominios que no existen',
    ZONE_WILDCARD_SPF:   'El TXT comodín es un registro SPF — todo nombre de host no definido recibe una política SPF para las comprobaciones HELO/EHLO, una práctica recomendada (RFC 7208 §2.3)',
    ZONE_WILDCARD_ADDR:  'Registro de dirección comodín (A/AAAA/CNAME) — todo subdominio no definido resuelve, así que los nombres de host mal escritos llegan a este servidor (informativo)',
    ZONE_PILL_FOUND:     'presente',
    ZONE_PILL_NONE:      'ninguno',
    CAA_HOSTS_TITLE:     'CAA en los hosts que presentan certificados',
    CAA_HOSTS_NOTE:      'El CAA del dominio de correo no dice nada sobre los certificados de los hosts MX (STARTTLS) ni del host de política MTA-STS (HTTPS). Se muestra como lo evalúa una CA: el registro propio del host o, si no, el del padre más cercano. Informativo — los hosts MX suelen pertenecer al proveedor de correo.',
    CAA_TH_HOST:         'Host',
    CAA_TH_ROLE:         'Rol',
    CAA_TH_STATUS:       'CAA',
    CAA_TH_CAS:          'CA autorizadas',
    CAA_HOST_RESTRICTED: 'Restringido',
    CAA_HOST_NONE:       'Sin restricción',
    CAA_HOST_ERROR:      'Consulta fallida',
    CAA_HOST_PROHIBITED: 'emisión prohibida',
    APP_TITLE:           'Verificador de seguridad DNS para correo',
    APP_SUBTITLE:        'Comprueba DNSSEC, MX, SPF, DKIM y más para cualquier dominio',
    LABEL_DOMAIN:        'Dominio',
    LABEL_SELECTORS:     'Selectores DKIM adicionales (separados por coma)',
    BTN_CHECK:           'Verificar',
    BTN_CHECKING:        'Verificando\u2026',
    BTN_COPY_LINK:       '\uD83D\uDD17 Copiar enlace',
    BTN_COPIED:          '\u2713 \u00a1Copiado!',
    BTN_COPY_FAILED:     'Error al copiar',
    LANG_LABEL:          'Idioma',
    OVERVIEW_PLACEHOLDER:'Escribe un nombre de dominio como google.com o microsoft.com y haz clic en Verificar. Ten en cuenta que los resultados pueden no ser exactos debido a limitaciones de tu navegador o de la red desde la que realizas la prueba. Las puntuaciones son solo orientativas y no reflejan necesariamente la verdad completa ni el cumplimiento de los estándares aplicables.',
    RUNNING_CHECKS:      'Ejecutando comprobaciones\u2026',
    CHECKING:            'Comprobando\u2026',

    PANEL_DNSSEC:        'DNSSEC',
    PANEL_MX:            'Registros MX',
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
    PANEL_RECS:          'Correcciones',

    RECS_WHAT_TO_FIX:    'Qué corregir',
    RECS_INFORMATIONAL:  'Informativo',
    RECS_NOT_SCORED:     'Informado, sin puntuar',
    RECS_ALL_GOOD:       'Todas las comprobaciones superadas',
    RECS_ALL_EXCELLENT:  'Todo está configurado de forma óptima.',

    GRADE_TITLE:         'Calificación global',
    GRADE_A_DESC:        'Configuración de seguridad de correo sólida.',
    GRADE_B_DESC:        'Buena configuración con problemas menores.',
    GRADE_C_DESC:        'Problemas moderados \u2014 revisa las advertencias.',
    GRADE_F_DESC:        'Problemas críticos \u2014 se recomienda acción inmediata.',

    RATING_EXCELLENT:    'Excelente',
    RATING_GOOD:         'Bueno',
    RATING_WARNING:      'Advertencia',
    RATING_FAIL:         'Fallo',
    RATING_SKIP:         'Omitido',
    RATING_NONE:         'Sin puntuar',

    ERR_CHECK_FAILED:    'Comprobación fallida',
    ERR_PREFIX:          'Error: ',
    ERR_NETWORK:         'Error de red',
    ERR_TIMEOUT:         'Tiempo de espera agotado',
    ERR_SCAN_FAILED:     'No se pudo completar el an\u00e1lisis. Comprueba tu conexi\u00f3n de red e int\u00e9ntalo de nuevo.',
    NXDOMAIN_MSG:        'El dominio no existe. Prueba con otro.',
    NXDOMAIN_OK:         'Aceptar',

    THEME_LIGHT:         '\u2600 Claro',
    THEME_DARK:          '\u263D Oscuro',
    THEME_TO_DARK:       'Cambiar a tema oscuro',
    THEME_TO_LIGHT:      'Cambiar a tema claro',
    SETTINGS_THEME:      'Tema',
    SETTINGS_SCORING:    'Sistema de puntuación',
    SCORING_TITLE:       'Cómo funciona la puntuación',
    SCORING_CLOSE:       'Cerrar',
    SCORING_SCORED:      'Comprobaciones puntuadas',
    SCORING_INFO:        'Informativo (sin puntuación)',
    SCORING_RATINGS:     'Puntos por calificación',
    SCORING_GRADES:      'Umbrales de calificación',

    OPT_SKIP_CORS:       'Omitir comprobaciones de MTA-STS y Security.txt para evitar problemas de CORS',
    CHECK_SKIPPED:       'Esta comprobación fue omitida.',

    STATS_TITLE:         '\uD83E\uDD13 Estadísticas',
    STATS_TOTAL_TIME:    'Tiempo total del análisis',
    STATS_DOH_REQUESTS:  'Consultas DoH a Cloudflare',
    STATS_DOH_CACHE:     'en cach\u00e9',
    STATS_RIPE_REQUESTS: 'Llamadas a la API de RIPE Stat',
    STATS_RIPE_CACHE:    'desde caché',
    STATS_HTTP_FETCHES:  'Peticiones HTTP',
    STATS_CHECK_TIMING:  'Tiempo por comprobación',
    STATS_DKIM_SELECTORS:'Selectores DKIM probados / encontrados',
    STATS_IPS_RESOLVED:  'IPs resueltas (RPKI)',
    STATS_MS:            'ms',

    DNSSEC_VALIDATED:    '\u2713 DNSSEC validado (AD=true)',
    DNSSEC_UNVALIDATED:  '\u26a0 Firmado pero no validado por el resolver (AD=false)',
    DNSSEC_RESOLVER_ONLY:'DNSSEC validado por el resolver, pero no se pudieron obtener los registros de clave.',
    DNSSEC_NOT_SIGNED:   'No se encontraron registros DNSKEY \u2014 el dominio no está firmado con DNSSEC.',
    DNSSEC_ALG_DETAILS:  'Detalles del algoritmo',
    DNSSEC_ALG_DECIDES:  'determina la valoraci\u00f3n',
    DNSSEC_ALG_WEAKEST_NOTE: 'Una zona se firma con <b>todos</b> los algoritmos de su conjunto DNSKEY, y un validador puede basarse en cualquiera de ellos. Por eso la valoraci\u00f3n anterior sigue el algoritmo <b>m\u00e1s d\u00e9bil</b> publicado, no el m\u00e1s fuerte: un conjunto mixto solo es tan fuerte como su eslab\u00f3n m\u00e1s d\u00e9bil. Esto es normal y temporal durante un cambio de algoritmo.',

    MX_HOST_DETAILS:     'Detalles del servidor MX',
    MX_NO_DNSSEC:        'Sin DNSSEC',
    MX_SIGNED_UNVAL:     '\u26a0 Firmado, no validado',
    MX_RRSET_WARN:       '\u26a0 El conjunto MX RRset no está validado por DNSSEC \u2014 no se pudo verificar criptográficamente la lista de servidores de correo.',
    MSG_NXDOMAIN:        'NXDOMAIN \u2014 el dominio no existe.',
    MX_NO_RECORDS:       'No se encontraron registros MX.',
    MX_NULL_CONFIRM:     '\u2713 Null MX (RFC 7505) \u2014 el dominio no acepta correo.',
    DANE_NOT_APPLICABLE: 'Sin registros MX \u2014 DANE no es aplicable.',
    DKIM_NO_RECORDS_MSG: 'No se encontraron registros DKIM para ning\u00fan selector conocido.',
    RPKI_NO_HOSTS:       'No hay registros NS ni MX que comprobar.',
    PTR_NO_MX_HOSTS:     'Sin hosts MX.',
    MX_NULL_SUGGEST:     'Sin registros MX \u2014 considera publicar un registro MX nulo (RFC 7505) junto con SPF \u201c-all\u201d y DMARC p=reject para bloquear completamente el abuso de correo',

    DANE_NO_TLSA:        'Sin registro TLSA',
    DANE_TLSA_UNVAL:     '\u26a0 TLSA encontrado, no validado por DNSSEC',
    DANE_NO_VALIDATED:   'No se encontraron registros TLSA validados por DNSSEC.',
    DANE_TLSA_PER_MX:    'Registros TLSA por servidor MX',

    SPF_RECORD_ANALYSIS: 'Registro y análisis',
    SPF_RECORD:          'Registro',
    SPF_MECHANISMS:      'Mecanismos SPF',
    SPF_IP_ADDRESSES:    'Direcciones IP',
    SPF_IP_PREFIXES:     'Prefijos IP',
    SPF_DNS_NAMES:       'Nombres DNS',
    SPF_IMPLICIT:        '(implícito)',
    SPF_ORIGINAL_RECORD: 'Registro SPF original',
    SPF_PTR_DEPRECATED:  'el mecanismo ptr está obsoleto',
    SPF_MISSING_ALL:     'Falta el mecanismo \u201call\u201d \u2014 la política está incompleta',
    SPF_ALL_HARDFAIL:    '"-all" (fallo duro) \u2014 los remitentes no autorizados son rechazados',
    SPF_ALL_SOFTFAIL:    '"~all" (fallo suave) \u2014 los remitentes no autorizados son marcados pero pueden entregarse',
    SPF_ALL_NEUTRAL:     '"?all" (neutral) \u2014 no proporciona protección',
    SPF_NO_RECORD:       'No se encontró registro SPF',

    DKIM_FOUND_SECTION:  'Selectores encontrados',
    DKIM_DNS_KEY_DETAILS:'Nombre DNS y detalles de clave',
    DKIM_TH_PROVIDER:    'Proveedor',
    DKIM_TH_PROBED:      'Selectores probados',
    DKIM_PROV_UNKNOWN:   'Gen\u00e9rico / no espec\u00edfico de proveedor',
    DKIM_DKIM2_TITLE:    'DKIM2: la pr\u00f3xima versi\u00f3n de DKIM',
    DKIM_REVOKED:        'Clave revocada (etiqueta p= vacía)',
    DKIM_KEY_TYPE:       'Tipo de clave',
    DKIM_KEY_SIZE:       'Tamaño de clave',
    DKIM_BITS:           'bits',
    DKIM_BITS_EQ:        ' (equivalente a 256 bits)',
    DKIM_KEY_RATING:     'Calificación',
    DKIM_HASH_ALGS:      'Algoritmos hash',
    DKIM_SERVICE_TYPE:   'Tipo de servicio',
    DKIM_NOTES_FIELD:    'Notas',
    DKIM_DNSSEC:         'DNSSEC',
    DKIM_DNSSEC_OK:      '\u2713 validado',
    DKIM_DNSSEC_FAIL:    '\u2717 no validado',
    DKIM_NONE_FOUND_NOTE:'Esto no significa que DKIM no esté configurado \u2014 solo significa que no se encontró ninguno de los nombres de selector estándar habituales.',

    TLSRPT_FOUND:        'Registro TLS-RPT encontrado.',
    TLSRPT_NOT_FOUND:    'No se encontró registro TLS-RPT.',
    TLSRPT_RECORD_ANALYSIS: 'Registro y análisis',
    TLSRPT_NO_RECORD_NXDOMAIN: 'Sin registro TLS-RPT \u2014 no se recibirán informes de fallos TLS en SMTP',
    TLSRPT_NO_RECORD:    'No se encontró registro TLS-RPT',
    TLSRPT_MULTI_RECORDS:'Se encontraron varios registros TLS-RPT \u2014 debe existir exactamente uno',
    TLSRPT_NO_RUA:       'Sin URI de notificación rua= \u2014 los informes no se pueden entregar',

    MTASTS_FOUND:        'Registro DNS MTA-STS encontrado.',
    MTASTS_NOT_FOUND:    'Sin registro DNS MTA-STS.',
    MTASTS_POLICY_ANALYSIS: 'Política y análisis',
    MTASTS_RECORD_NOTES: 'Registro y notas',
    MTASTS_NO_RECORD_NXDOMAIN: 'Sin registro DNS MTA-STS \u2014 no se aplica TLS en la entrega entrante',
    MTASTS_NO_RECORD:    'No se encontró registro DNS MTA-STS',
    MTASTS_MULTI_RECORDS:'Se encontraron varios registros DNS MTA-STS \u2014 debe existir exactamente uno',
    MTASTS_NO_ID:        'El registro MTA-STS carece del campo id= obligatorio',
    MTASTS_MODE_ENFORCE: 'Modo de política: enforce \u2014 TLS obligatorio, entregas sin TLS rechazadas',
    MTASTS_MODE_TESTING: 'Modo de política: testing \u2014 monitoreo de fallos TLS sin aplicación',
    MTASTS_MODE_NONE:    'Modo de política: none \u2014 MTA-STS está explícitamente desactivado',
    MTASTS_MX_MATCH:     'Todos los servidores MX coinciden con los patrones mx: de la política MTA-STS',
    MTASTS_MX_MISMATCH:  'Uno o más servidores MX no están cubiertos por ningún patrón mx: de la política',
    MTASTS_MX_NO_PATTERNS: 'La política MTA-STS no tiene líneas mx:',

    CAA_NO_RECORDS:      'Sin registros CAA.',
    CAA_RECORDS_ANALYSIS:'Registros y análisis',
    CAA_CA_DNSSEC:       'DNSSEC del dominio de la CA',
    CAA_DNSSEC_VALIDATED:'DNSSEC validado',
    CAA_DNSSEC_SIGNED:   'firmado pero no validado por el resolver',
    CAA_DNSSEC_NONE:     'no firmado con DNSSEC',
    CAA_DNSSEC_ERROR:    'error: ',
    CAA_NO_RECORDS_ISSUE:'Sin registros CAA \u2014 cualquier autoridad de certificación puede emitir certificados para este dominio',
    CAA_NXDOMAIN:        'NXDOMAIN \u2014 el dominio no existe.',
    CAA_ISSUE_PROHIBITED:'Emisión de certificados prohibida para todas las CAs (issue ";")',
    CAA_NO_IODEF:        'Sin etiqueta iodef= \u2014 las infracciones de política de CA no serán notificadas',

    RPKI_HOST_DETAILS:   'Detalles del host',
    RPKI_NO_IPS:         'No se resolvieron IPs',
    RPKI_ASPA_PROVIDERS: 'Proveedores:',

    ASPA_NO_DATA:        'No hay datos ASPA disponibles',

    STXT_FOUND:          '\u2713 security.txt encontrado',
    STXT_RAW:            'security.txt sin procesar',
    STXT_NOT_FOUND:      'No encontrado.',
    STXT_CORS_BLOCKED:   'No se pudo obtener security.txt \u2014 el servidor no permite solicitudes de origen cruzado (CORS). Es posible que el archivo exista; verifícalo manualmente:',
    STXT_CHECK_MANUALLY: 'URLs comprobadas:',
    CORS_SECURITY_NOTE:  '\u00a1Esto es bueno! El servidor tiene una seguridad superior a la normal. Sin embargo, por este motivo, esta comprobación no puede completarse automáticamente.',
    STXT_NO_CONTACT:     'Falta el campo Contact obligatorio.',
    STXT_NO_EXPIRES:     'Falta el campo Expires \u2014 obligatorio según',
    STXT_BAD_DATE:       'El campo Expires tiene un formato de fecha inválido.',
    STXT_ENCRYPTION:     'Clave de cifrado vinculada.',
    STXT_POLICY:         'Política de divulgación de vulnerabilidades vinculada.',

    WHOIS_RDAP_OK:       '\u2713 Datos RDAP obtenidos',
    WHOIS_ROW_REGISTRAR: 'Registrador',
    WHOIS_ROW_CREATED:   'Creado',
    WHOIS_ROW_UPDATED:   'Actualizado',
    WHOIS_ROW_EXPIRES:   'Vence',
    WHOIS_ROW_HANDLE:    'Handle',
    WHOIS_ROW_STATUS:    'Estado',
    WHOIS_NS_TITLE:      'Servidores de nombres',
    WHOIS_EXPIRED:       '\u26a0 \u00a1El registro del dominio ha expirado!',
    WHOIS_FAILED:        'Error en la consulta RDAP.',

    DMARC_FOUND:         'Registro DMARC encontrado.',
    DMARC_NOT_FOUND:     'Sin registro DMARC.',
    DMARC_RECORD_ANALYSIS: 'Registro y análisis',
    DMARC_POLICY_NONE:   'p=none \u2014 solo monitoreo, sin aplicación',
    DMARC_POLICY_QUARANTINE: 'p=quarantine \u2014 mensajes sospechosos enviados a spam',
    DMARC_POLICY_REJECT: 'p=reject \u2014 mensajes no autorizados rechazados',
    DMARC_SP_REJECT:     'sp=reject \u2014 subdominios: mensajes no autorizados rechazados',
    DMARC_SP_QUARANTINE: 'sp=quarantine \u2014 subdominios: mensajes sospechosos enviados a spam',
    DMARC_SP_NONE:       'sp=none \u2014 subdominios: sin aplicación',
    DMARC_ADKIM_STRICT:  'adkim=s \u2014 alineación de identificador DKIM: estricta',
    DMARC_ASPF_STRICT:   'aspf=s \u2014 alineación de identificador SPF: estricta',
    DMARC_NO_RUA:        'Sin rua= \u2014 no se recibirán informes DMARC agregados',
    DMARC_NO_RECORD_NXDOMAIN: 'Sin registro DMARC \u2014 no se pueden rechazar remitentes no autorizados',
    DMARC_NO_RECORD:     'No se encontró registro DMARC',
    DMARC_MULTI_RECORDS: 'Varios registros DMARC \u2014 debe existir exactamente uno',

    BIMI_FOUND:          'Registro BIMI encontrado.',
    BIMI_NOT_FOUND:      'Sin registro BIMI.',
    BIMI_RECORD_ANALYSIS:'Registro y análisis',
    BIMI_NO_RECORD:      'Sin registro BIMI \u2014 el logotipo de marca no se muestra en los clientes de correo compatibles',
    BIMI_NO_LOGO:        'l= (URL del logotipo) ausente o vacío \u2014 necesario para que BIMI funcione',
    BIMI_NO_AUTHORITY:   'a= (evidencia de autoridad) ausente \u2014 se requiere certificado VMC para que Gmail y otros muestren el logotipo',
    BIMI_LOGO_OK:        'URL del logotipo',
    BIMI_AUTHORITY_OK:   'Autoridad (VMC)',

    PTR_HOST_DETAILS:    'Detalles del host',
    PTR_NO_MX:           'No hay servidores MX para comprobar registros PTR',
    PTR_MATCH:           'FCrDNS confirmado \u2014 PTR coincide con el nombre del servidor MX',
    PTR_MISMATCH:        'PTR presente pero no coincide con el nombre del servidor MX',
    PTR_MISSING:         'No se encontró registro PTR',
    // Keys added in later releases — backfilled
    PANEL_IPV6:          'IPv6',
    DMARCBIS_TITLE:            'Conformidad DMARCbis — RFC 9989 / 9990 / 9991',
    DMARCBIS_INTRO:            'RFC 9989 deja obsoletos RFC 7489 y RFC 9091, y divide los informes en RFC 9990 (agregados) y RFC 9991 (de fallo). Estas comprobaciones son informativas y no afectan a la calificación.',
    DMARCBIS_DISCOVERY_TITLE:  'Descubrimiento de política — recorrido del árbol DNS (RFC 9989 §4.10)',
    DMARCBIS_TAGS_TITLE:       'Conformidad de etiquetas (RFC 9989 §4.7, §9.3)',
    DMARCBIS_EXTAUTH_TITLE:    'Autorización de destino externo (RFC 9990 §4, RFC 9991 §5)',
    DMARCBIS_SUGGESTED_TITLE:  'Registro RFC 9989 sugerido',
    DMARCBIS_SUGGESTED_NOTE:   'Etiquetas históricas y no registradas eliminadas, pct=0 migrado a t=y, y añadidas las etiquetas que RFC 9989 recomienda en un dominio organizacional. El valor de la política se mantiene sin cambios — revísalo antes de publicar.',
    DMARCBIS_TW_TAG_AUTHOR:    'dominio autor',
    DMARCBIS_TW_TAG_ORG:       'dominio organizacional',
    DMARCBIS_TW_STEP_FOUND:    'registro',
    DMARCBIS_TW_STEP_NONE:     'ninguno',
    DMARCBIS_TW_STEP_MULTI:    'varios',
    DMARCBIS_TW_STEP_ERROR:    'error',
    DMARCBIS_TW_NO_POLICY:     'Ningún registro de política DMARC en todo el recorrido del árbol — los receptores no aplican ningún procesamiento DMARC a este dominio',
    DMARCBIS_TW_MULTI:         'Un paso del recorrido devolvió varios registros DMARC — RFC 9989 §4.10 los descarta todos',
    DMARCBIS_TAGS_CLEAN:       'Todas las etiquetas figuran como activas en el registro de RFC 9989 §9.3 — sin etiquetas históricas, no registradas ni inválidas',
    DMARCBIS_V_NOT_FIRST:      'Falta v= o no es la primera etiqueta — RFC 9989 §4.7 exige ignorar el registro completo',
    DMARCBIS_P_DEFAULT_NONE:   'Sin etiqueta p= válida — RFC 9989 §4.10.1: al existir rua=, los receptores procesan el registro como p=none',
    DMARCBIS_P_NO_PROCESSING:  'Sin etiqueta p= válida y sin rua= — RFC 9989 §4.10.1: los receptores no aplican ningún procesamiento DMARC',
    DMARCBIS_PCT_ZERO:         'pct=0 es histórica en RFC 9989 — sustitúyela por t=y, la etiqueta que ahora tiene ese significado (Apéndice A.6)',
    DMARCBIS_PCT_FULL:         'pct=100 es histórica en RFC 9989 y ya era el valor por defecto — elimina la etiqueta',
    DMARCBIS_T_NO_EFFECT:      't=y no tiene efecto mientras la política sea none — RFC 9989 §4.7',
    DMARCBIS_T_ENFORCED:       't=n — la política publicada se aplica tal cual (valor por defecto de RFC 9989)',
    DMARCBIS_NP_REJECT:        'np=reject — el correo desde subdominios inexistentes se rechaza (RFC 9989 §4.7)',
    DMARCBIS_NP_MISSING:       'Sin etiqueta np= — RFC 9989 la añade para subdominios inexistentes; se recomienda np=reject en un dominio organizacional',
    DMARCBIS_PSD_Y:            'psd=y — declarado dominio de sufijo público; el recorrido del árbol se detiene aquí (RFC 9989 §4.10.2)',
    DMARCBIS_PSD_N:            'psd=n — declarado dominio organizacional; el recorrido del árbol se detiene aquí (RFC 9989 §4.10.2)',
    DMARCBIS_PSD_U:            'psd=u — el dominio organizacional se deja al recorrido del árbol (valor por defecto de RFC 9989)',
    DMARCBIS_PSD_MISSING:      'Sin etiqueta psd= — publicar psd=n en el dominio organizacional finaliza el recorrido de inmediato y elimina toda ambigüedad',
    DMARCBIS_FO_NO_RUF:        'fo= está presente sin ruf= — RFC 9989 §4.7 exige ignorar su contenido',
    DMARCBIS_URI_NO_MAILTO:    'Sin URI mailto: en rua= — los receptores solo están obligados a admitir mailto:, por lo que otros esquemas pueden ignorarse',
    DMARCBIS_EXT_NONE:         'No hay URIs rua= ni ruf= que autorizar — sin informes agregados no hay visibilidad de los fallos DMARC',
    IPV6_HOST_DETAILS: 'Detalles de direcciones por host',
    IPV6_NO_MX: 'No se encontraron hosts MX',
    IPV6_NO_NS: 'No se encontraron hosts NS',
    IPV6_MANDATORY_TITLE: 'Requisitos obligatorios de IPv6',
    IPV6_MANDATORY_NOTE: 'IPv6 es obligatorio por normativa gubernamental en los siguientes países:',
    IPV6_NO_MANDATE: '<b>Comprobado, sin requisito vinculante:</b> <b>Suecia</b>: PTS recomienda IPv6 y propuso en 2022 que se exigiera a organismos, municipios y regiones admitirlo en sitios web, correo electr\u00f3nico y DNS, pero no se ha aprobado ninguna normativa. <b>Dinamarca</b>: IPv6 no forma parte de los requisitos t\u00e9cnicos m\u00ednimos para las autoridades estatales; el gobierno ha declarado que no se prioriz\u00f3.',
    IPV6_DOMAIN_HAS_IPV6: '✓ El dominio tiene dirección(es) IPv6',
    IPV6_DOMAIN_NO_IPV6: 'El dominio no tiene dirección IPv6 — solo accesible por IPv4',
    IPV6_ALL_MX_HAVE_IPV6: '✓ Todos los hosts MX tienen direcciones IPv6',
    IPV6_SOME_MX_HAVE_IPV6: 'Algunos hosts MX tienen IPv6 — no todos',
    IPV6_NO_MX_HAVE_IPV6: 'Ningún host MX tiene dirección IPv6',
    IPV6_ALL_NS_HAVE_IPV6: '✓ Todos los hosts NS tienen direcciones IPv6',
    IPV6_SOME_NS_HAVE_IPV6: 'Algunos hosts NS tienen IPv6 — no todos',
    IPV6_NO_NS_HAVE_IPV6: 'Ningún host NS tiene dirección IPv6',
    IPV6_MX_BADGE_YES: 'IPv6',
    IPV6_MX_BADGE_NO: 'Sin IPv6',
    SPF_NO_IP6_MECHS: 'Los hosts MX/NS admiten IPv6, pero no se encontraron entradas ip6: en el registro SPF — si este dominio envía correo por IPv6, añade mecanismos ip6: para autorizar esas direcciones',
    SPF_LEGACY_TYPE: 'Tipo de registro SPF heredado (tipo DNS 99) encontrado — obsoleto desde RFC 7208 (2014); debe eliminarse',
    SPF_PROPAGATION_MISMATCH: 'El registro SPF difiere entre los resolutores DNS de Cloudflare y Google — propagación incompleta o configuración errónea',
    DMARC_PROPAGATION_MISMATCH: 'El registro DMARC difiere entre los resolutores DNS de Cloudflare y Google — propagación incompleta o configuración errónea',
    DKIM_ROTATION_NOTE: 'Buena práctica: rota las claves DKIM al menos una vez al año. La antigüedad de la clave no puede determinarse desde el DNS — confirma la política de rotación con tu proveedor de correo.',
    CAA_ISSUEMAIL_NOTE: 'Etiqueta issuemail presente — controla la emisión de certificados S/MIME para este dominio (RFC 8657)',
    RPKI_NS_DIVERSITY: 'Diversidad de ASN de los servidores de nombres',
    RPKI_NS_NO_ASN_DATA: 'No hay datos de ASN disponibles para los servidores de nombres',
    // ISP BGP safety (isbgpsafeyet.com method)
    BGP_ISP_TITLE:       '¿Es tu ISP seguro en BGP?',
    BGP_ISP_SAFE:        'Tu ISP descartó la ruta de prueba RPKI-inválida — filtra anuncios BGP inválidos (validación de origen de ruta).',
    BGP_ISP_UNSAFE:      'Tu ISP aceptó una ruta de prueba RPKI-inválida — no filtra anuncios BGP inválidos y no ofrece protección contra el secuestro de BGP.',
    BGP_ISP_WARP:        'Estás conectado a través de Cloudflare WARP, que ya protege tu tráfico contra el secuestro de BGP — pero oculta tu ISP, así que la prueba no puede medirlo. Desconecta WARP y escanea de nuevo para probar tu ISP.',
    BGP_ISP_ERROR:       'No se pudo contactar con los puntos de prueba — resultado desconocido. La prueba se ejecutará de nuevo en el próximo escaneo.',
    BGP_ISP_ATTRIBUTION: 'Método de prueba de Cloudflare:',
    BGP_ISP_BADGE_SAFE:  'Seguro',
    BGP_ISP_BADGE_UNSAFE:'No seguro',
    BGP_ISP_BADGE_WARP:  'WARP',
    BGP_ISP_BADGE_ERROR: 'Desconocido',
    BGP_ISP_REPORT:      'Informar de este resultado por correo electrónico',
    // Connection tab (visitor tests)
    PANEL_CONN:          'Conexión',
    CONN_DNSSEC_TITLE:   '¿Valida DNSSEC tu resolutor DNS?',
    CONN_DNSSEC_OK:      'Tu resolutor DNS valida DNSSEC — un nombre de prueba con una firma deliberadamente rota fue rechazado correctamente.',
    CONN_DNSSEC_BAD:     'Tu resolutor DNS no valida DNSSEC — un nombre de prueba con una firma deliberadamente rota se resolvió de todos modos. Las respuestas DNS falsificadas para dominios firmados no serían detectadas en esta conexión.',
    CONN_DNSSEC_ERROR:   'No se pudo contactar con los puntos de prueba de DNSSEC — resultado desconocido. La prueba se ejecutará de nuevo en el próximo escaneo.',
    CONN_DNSSEC_BADGE_OK:    'Valida',
    CONN_DNSSEC_BADGE_BAD:   'No valida',
    CONN_DNSSEC_BADGE_ERROR: 'Desconocido',
    CONN_DNSSEC_ATTRIBUTION: 'Método de prueba y dominios de Matthäus Wander:',
    CONN_IP_TITLE:       'Tus direcciones IP públicas',
    CONN_IP_BOTH:        'Tu conexión tiene tanto una dirección IPv4 pública como una IPv6 pública (doble pila).',
    CONN_IP6_ONLY:       'Tu conexión es solo IPv6 — no se detectó ninguna dirección IPv4 pública.',
    CONN_IP6_MISSING:    'Sin conectividad IPv6 — tu red o tu ISP aún no ha habilitado IPv6.',
    CONN_IP_ERROR:       'No se pudieron determinar tus direcciones IP públicas — los puntos de prueba estaban inaccesibles.',
    CONN_IP_BADGE_BOTH:  'Doble pila',
    CONN_IP_BADGE_V6ONLY:'Solo IPv6',
    CONN_IP_BADGE_NOV6:  'Sin IPv6',
    CONN_IP_BADGE_ERROR: 'Desconocido',
    CONN_IP_NONE:        'ninguna dirección detectada',
    OVERVIEW_PROVIDERS: 'Infraestructura de correo detectada',
    // Added 2026-October-13-1
    ERR_BAD_JSON:        'Respuesta inesperada (no es JSON)',
    DANE_NULL_MX:        'MX nulo (RFC 7505) \u2014 este dominio no recibe correo, por lo que DANE no es aplicable.',
    DANE_PKIX_USAGE:     'Solo usos PKIX (0/1) publicados \u2014 los clientes SMTP no los utilizan (RFC 7672 \u00a73.1.3); publica DANE-EE (3) o DANE-TA (2)',
    DKIM_ONLY_REVOKED:   'Todos los selectores encontrados est\u00e1n revocados (p= vac\u00edo) \u2014 no se encontr\u00f3 ninguna clave DKIM operativa.',
    MTASTS_ERR_TIMEOUT:  'La descarga del archivo de pol\u00edtica agot\u00f3 el tiempo de espera',
    MTASTS_ERR_CORS:     'Archivo de pol\u00edtica no accesible (CORS, redirecci\u00f3n o error de red)',
    MTASTS_NO_MAX_AGE:   'max_age ausente o no es un n\u00famero simple \u2014 obligatorio seg\u00fan RFC 8461 \u00a73.2',
    CAA_NO_RESTRICTION:  'Sin registro issue/issuewild \u2014 cualquier CA puede seguir emitiendo certificados; iodef por s\u00ed solo no restringe nada',
    BIMI_OPT_OUT:        'l= est\u00e1 vac\u00edo \u2014 una exclusi\u00f3n expl\u00edcita de BIMI para este selector (v\u00e1lido)',
    STXT_MULTI_EXPIRES:  'M\u00e1s de un campo Expires \u2014 RFC 9116 permite exactamente uno',
    WHOIS_NA:            'N/D',
    WHOIS_UNLOCKED:      'Sin bloqueo de registrador/registro (transfer/delete/update prohibited) \u2014 act\u00edvalo para resistir el secuestro del dominio',
    WHOIS_NOT_FOUND:     'No se encontr\u00f3 ning\u00fan registro RDAP para este dominio.',
    PTR_NULL_MX:         'MX nulo \u2014 el dominio no recibe correo; nada que comprobar.',
    SCORING_SKIP_NOTE:   'Cuando se omite una comprobaci\u00f3n (la casilla CORS), su peso se excluye y los pesos restantes se escalan a 100.',
    PANEL_OVERVIEW:      'Resumen',
    SETTINGS_OPEN:       'Ajustes',
    TABLIST_LABEL:       'Resultados de las comprobaciones',
    SELECTOR_HELP_LABEL: '\u00bfQu\u00e9 es un selector DKIM?',
    CONN_ROA_VALID:      'v\u00e1lida',
    CONN_ROA_INVALID:    'inv\u00e1lida',
    CONN_ROA_NONE:       'sin ROA',
    CONN_ROA_NOT_ROUTED: 'no enrutado',
    DKIM_WILDCARD_PILL:  'comod\u00edn',
    DKIM_WILDCARD_SECTION: 'Registro comod\u00edn (responde a cualquier selector)',
    DNSSEC_CHAIN_TITLE:  'Cadena de confianza',
    DNSSEC_DS_RECORDS:   'Registros DS en la zona padre',
    DNSSEC_DS_MATCHED:   'coincide con una DNSKEY',
    DNSSEC_DS_UNMATCHED: 'sin DNSKEY coincidente',
    DNSSEC_KEY_TAG:      'etiqueta de clave',
    DNSSEC_KEY_REVOKED:  'revocada',
    DNSSEC_DS_UNAVAILABLE: 'No se pudo obtener el conjunto de registros DS — cadena de confianza no verificada',
    DNSSEC_NO_DS:        'Sin registro DS en la zona padre — la zona está firmada pero nada la enlaza con su padre (una "isla de seguridad"); los validadores la tratan como no firmada',
    DNSSEC_DS_NONE_MATCH: 'Ningún registro DS de la zona padre coincide con una DNSKEY publicada — la cadena de confianza está rota',
    DNSSEC_RDAP_UNSIGNED: 'El registro (RDAP) indica que la delegación no está firmada aunque existen registros DS en DNS',
    DNSSEC_RRSIG_NONE:   'No se devolvió ningún RRSIG para los registros DNSKEY/SOA — no se pudo comprobar la vigencia de las firmas',
    DNSSEC_NSEC3_GOOD:   'NSEC3 con 0 iteraciones y sin sal — como recomienda RFC 9276',
    DNSSEC_NSEC3_OPTOUT: 'Indicador opt-out de NSEC3 activo — no se demuestra la ausencia de delegaciones sin firmar (pensado para grandes zonas de delegación)',
    RECS_COHERENCE:      'Coherencia entre protocolos',
    COH_NONE:            'Sin conflictos entre los registros publicados.',
    COH_TLSRPT_NO_POLICY: 'TLS-RPT est\u00e1 publicado pero no hay ni pol\u00edtica MTA-STS ni DANE \u2014 los receptores no tienen nada sobre lo que informar',
    COH_MTASTS_TESTING_BLIND: 'MTA-STS est\u00e1 en modo de prueba pero no existe registro TLS-RPT \u2014 los fallos en modo de prueba no se informan a ning\u00fan sitio, as\u00ed que la prueba nunca te dir\u00e1 nada',
    COH_BELT_AND_BRACES: 'Tanto DANE como una pol\u00edtica MTA-STS en modo enforce protegen el TLS entrante \u2014 doble seguridad',
    MX_SINGLE_HOST:      'Solo un servidor MX \u2014 sin alternativa si no est\u00e1 disponible (informativo)',
    MX_NONE_USABLE:      'Ning\u00fan servidor MX resuelve a una direcci\u00f3n \u2014 los remitentes conformes no pueden entregar correo a este dominio',
    MX_PILL_LITERAL:     'direcci\u00f3n IP',
    MX_PILL_UNRESOLVABLE: 'no resoluble',
    PANEL_AUTOCONF:      'Autoconfiguración del cliente de correo',
    AUTOCONF_NONE:       'Nada publicado para la autoconfiguración de clientes de correo: sin registros SRV, sin Autodiscover, sin host autoconfig y sin entrada en la ISPDB de Thunderbird — los usuarios deben escribir la configuración del servidor a mano y los clientes adivinan nombres de host',
    AUTOCONF_NO_MAIL:    'El dominio no tiene servidores MX, así que no se espera autoconfiguración de clientes',
    AUTOCONF_NO_SRV:     'Sin registros SRV según RFC 6186 — los clientes que los admiten recurren a adivinar nombres como imap.<domain> y smtp.<domain>',
    AUTOCONF_NO_AUTODISCOVER: 'Sin registro SRV de Autodiscover ni host autodiscover.<domain> — Outlook aún puede encontrar https://<domain>/autodiscover/autodiscover.xml, que un navegador no puede probar',
    AUTOCONF_NO_MOZ:     'Sin host autoconfig.<domain> ni entrada en la ISPDB — Thunderbird aún puede encontrar https://<domain>/.well-known/autoconfig/mail/config-v1.1.xml, que un navegador no puede probar',
    AUTOCONF_SRV_SIGNED: 'Las respuestas SRV están validadas con DNSSEC — un cliente puede verificar el certificado del servidor contra el nombre de destino SRV (RFC 6186 §6, RFC 7817)',
    AUTOCONF_SRV_UNSIGNED: 'Las respuestas SRV no están validadas con DNSSEC — un cliente que siga RFC 6186 §6 / RFC 7817 debe entonces verificar el certificado del servidor contra el propio dominio de correo, no contra el destino SRV',
    AUTOCONF_ISPDB_NONE: 'No figura en la ISPDB de Thunderbird (autoconfig.thunderbird.net)',
    AUTOCONF_SRV_TITLE:  'Registros de servicio SRV (RFC 6186, RFC 8314, RFC 8620)',
    AUTOCONF_MS_TITLE:   'Microsoft Autodiscover',
    AUTOCONF_MOZ_TITLE:  'Autoconfig de Mozilla Thunderbird',
    AUTOCONF_ISPDB_TITLE: 'Entrada en la ISPDB de Thunderbird',
    AUTOCONF_TH_SERVICE: 'Servicio',
    AUTOCONF_TH_TARGET:  'Destino',
    AUTOCONF_TH_PORT:    'Puerto',
    AUTOCONF_TH_PRIO:    'Prioridad / peso',
    AUTOCONF_TH_TYPE:    'Tipo',
    AUTOCONF_TH_HOST:    'Host',
    AUTOCONF_TH_SOCKET:  'Cifrado',
    AUTOCONF_PILL_DECLINED: 'no ofrecido',
    AUTOCONF_PILL_NONE:  'no publicado',
    AUTOCONF_PILL_ERROR: 'consulta fallida',
    AUTOCONF_ROW_SRV:    'SRV de Autodiscover',
    AUTOCONF_ROW_HOST:   'host autodiscover',
    AUTOCONF_ROW_MOZ_HOST: 'host autoconfig',
    AUTOCONF_ROW_ISPDB:  'ISPDB',
    WHOIS_REGISTRY_LOCK: 'Bloqueo de registro (server*Prohibited) — los cambios requieren verificación fuera de banda en el propio registro; la protección más fuerte disponible',
    WHOIS_LOCK_UNKNOWN:  'El registro no publica códigos de estado EPP en RDAP, así que el estado de bloqueo no puede leerse aquí — confirma los bloqueos de transfer, delete y update con el registrador',
    WHOIS_PENDING_TRANSFER: 'Hay una transferencia de registrador en curso (pendingTransfer) — si no la solicitaste, contacta con el registrador de inmediato',
    WHOIS_ROW_DNSSEC:    'DNSSEC (registro)',
    WHOIS_DNSSEC_UNSIGNED: 'sin firmar — no hay registro DS en el registro',
    WHOIS_DNSSEC_NA:     'no publicado por el registro',
    WHOIS_DNSSEC_REG_ONLY: 'El registro informa de que la delegación está firmada, pero no se encontró ningún DNSKEY en DNS — la cadena de confianza está rota y los resolutores validadores rechazarán el dominio',
    WHOIS_DNSSEC_DNS_ONLY: 'Hay registros DNSKEY publicados en DNS, pero el registro informa de que la delegación no está firmada — el registro DS no se ha enviado al registrador («isla de seguridad»)',
    SPF_HELO_TITLE:      'Identidad HELO/EHLO \u2014 SPF en los servidores MX',
    SPF_HELO_NOTE:       'RFC 7208 \u00a72.3 recomienda un registro SPF para cada nombre de host que un MTA anuncia en HELO/EHLO; los servidores MX son los candidatos habituales. Informativo \u2014 no puntuado.',
    SPF_HELO_PRESENT:    'registro SPF',
    SPF_HELO_ABSENT:     'sin registro SPF',
    SPF_HELO_MULTI:      'varios registros SPF (permerror)',
  },

  // ── d: cadenas dinámicas (funciones flecha) ───────────────────────────────
  d: {
    ZONE_SUMMARY:        zone => 'Higiene de la zona para ' + zone,
    ZONE_APEX_NOTE:      (zone, name) => name + ' no es un ápice de zona — SOA, servidores de nombres, tamaño TXT y comodines se informan para su zona ' + zone,
    ZONE_SOA_RANGE:      (field, value, lo, hi) => 'SOA ' + field + ' es ' + value + ' s — RFC 1912 §2.2 recomienda ' + lo + '–' + hi + ' s',
    ZONE_SOA_SERIAL_ODD: serial => 'El serial SOA es ' + serial + ' — inofensivo, pero la forma habitual es AAAAMMDDnn para que un problema de transferencia de zona sea visible',
    ZONE_SOA_MNAME_HIDDEN: mname => 'El primario SOA ' + mname + ' no está en el conjunto NS — un primario oculto (habitual, informativo)',
    ZONE_NS_OK:          n => n + ' servidores de nombres',
    ZONE_TXT_SIZE:       (count, bytes) => count + ' registro(s) TXT, unos ' + bytes + ' bytes en el cable',
    ZONE_TXT_LARGE:      bytes => 'La respuesta TXT del ápice ocupa unos ' + bytes + ' bytes — supera el búfer EDNS de 1232 bytes del DNS Flag Day 2020, así que los resolutores reintentan por TCP o reciben una respuesta truncada; elimine registros obsoletos',
    ZONE_TXT_TOKENS:     n => n + ' token(s) de verificación de dominio publicado(s) — desde fuera no se puede ver si cada uno sigue siendo necesario; revíselos de vez en cuando',
    ZONE_DUR:            n => n + ' s' + (n >= 86400 ? ' (' + Math.round(n / 8640) / 10 + ' d)' : n >= 3600 ? ' (' + Math.round(n / 360) / 10 + ' h)' : n >= 60 ? ' (' + Math.round(n / 6) / 10 + ' min)' : ''),
    CAA_HOSTS_COVERED:   n => 'Los ' + n + ' host(s) que presentan certificados (MX, MTA-STS) están cubiertos por una restricción CAA',
    CAA_HOSTS_UNCOVERED: (n, total, hosts) => n + ' de ' + total + ' host(s) que presentan certificados no tienen restricción CAA: ' + hosts + ' (informativo — normalmente la zona del proveedor de correo)',
    CAA_HOST_FROM:       parent => 'de ' + parent,
    MX_HOSTS_FOUND:        n => n + ' servidor' + (n !== 1 ? 'es' : '') + ' MX encontrado' + (n !== 1 ? 's' : '') + '.',
    DKIM_SELECTORS_FOUND:  n => n + ' selector' + (n !== 1 ? 'es' : '') + ' encontrado' + (n !== 1 ? 's' : ''),
    DKIM_ACROSS_PROVIDERS: n => 'en ' + n + ' proveedor' + (n !== 1 ? 'es' : ''),
    DKIM_SELECTORS_TESTED: n => n + ' selectores probados.',
    DKIM_NONE_FOUND:       n => 'No se encontraron selectores DKIM. Se probaron ' + n + ' selectores.',
    DKIM_AUTO_TESTED:      n => n + ' selectores probados automáticamente',
    SPF_FOUND_LOOKUPS:     n => 'Registro SPF encontrado. ' + n + ' mecanismo' + (n !== 1 ? 's' : '') + ' de consulta DNS.',
    SPF_MULTI_RECORDS:     n => 'Se encontraron varios registros SPF (' + n + ') \u2014 se requiere exactamente uno',
    SPF_MULTI_MESSAGE:     n => 'Varios registros SPF (' + n + ') \u2014 esto es un error de configuración.',
    SPF_LOOKUP_EXCEED:     n => n + ' mecanismos de consulta DNS superan el límite RFC de 10 (puede causar SPF PermError)',
    SPF_LOOKUP_HIGH:       n => n + ' mecanismos de consulta DNS \u2014 acercándose al límite RFC de 10',
    SPF_IP4_BROAD:         (v, p) => 'ip4:' + v + ' tiene un rango muy amplio (/' + p + ' \u2264 /16)',
    SPF_IP6_BROAD:         (v, p) => 'ip6:' + v + ' tiene un rango muy amplio (/' + p + ' \u2264 /32)',
    SPF_REDIRECT_FOLLOWED: d => '\u2713 redirect= seguido \u2014 política efectiva cargada desde: ' + d,
    SPF_REDIRECT_FROM:     d => 'Política efectiva (redirect \u2192 ' + d + ')',
    SPF_REDIRECT_NO_RECORD:d => 'El destino de redirect= no tiene registro SPF: ' + d,
    SPF_REDIRECT_MULTI:    d => 'El destino de redirect= tiene varios registros SPF: ' + d,
    SPF_REDIRECT_ERROR:    d => 'Error al obtener el destino de redirect=: ' + d,
    CAA_RECORDS_FOUND:     n => n + ' registro' + (n !== 1 ? 's' : '') + ' CAA encontrado' + (n !== 1 ? 's' : '') + '.',
    CAA_AUTHORIZED_CA:     n => 'CA' + (n !== 1 ? 's' : '') + ' autorizada' + (n !== 1 ? 's' : '') + ': ',
    CAA_CRITICAL_COUNT:    n => n + ' registro' + (n !== 1 ? 's' : '') + ' con indicador crítico \u2014 las CAs que no entiendan la etiqueta deben rechazar la emisión',
    DANE_VALIDATED_OF:     (v, t) => v + ' de ' + t + ' servidor' + (t !== 1 ? 'es' : '') + ' MX tiene' + (t !== 1 ? 'n' : '') + ' registros TLSA validados por DNSSEC.',
    TLSA_RECORDS_COUNT:    n => n + ' registro' + (n !== 1 ? 's' : '') + ' TLSA',
    RPKI_SUMMARY:          (valid, total, inv, noRoa) => valid + '/' + total + ' IP' + (total !== 1 ? 's' : '') + ' cubiert' + (total !== 1 ? 'as' : 'a') + ' por ROA válido' + (inv > 0 ? ' \u2014 ' + inv + ' inválid' + (inv !== 1 ? 'as' : 'a') : '') + (noRoa > 0 ? ' \u2014 ' + noRoa + ' sin ROA' : ''),
    ASPA_SUMMARY:          (pub, total) => pub + '/' + total + ' ASN' + (total !== 1 ? 's' : '') + ' con ASPA publicado',
    CONN_NOTE:             dom => 'Todo en esta pestaña prueba la conexión a internet y el navegador que estás usando ahora mismo — no tiene relación con ' + dom + ' y nunca afecta a ninguna valoración, puntuación o nota.',
    TLSRPT_ENDPOINT:       uri => 'Punto de notificación: ' + uri,
    TLSRPT_BAD_URI:        uri => 'Esquema de URI rua= desconocido: ' + uri,
    MTASTS_MAX_AGE_LOW:    age => 'max_age=' + age + 's es menor de 1 día \u2014 considera 604800 (1 semana) o más',
    MTASTS_POLICY_UNKNOWN: mode => 'Modo de política desconocido o ausente: ' + (mode || '(vacío)'),
    MTASTS_POLICY_ERROR:   (e, url) => e + ' \u2014 verifica: ' + url,
    STXT_EXPIRES_WARN:     n => 'Vence en ' + n + ' días \u2014 renueva pronto.',
    STXT_EXPIRES_OK:       (d, n) => 'Vence: ' + d + ' (' + n + ' días).',
    STXT_EXPIRED:          d => 'security.txt ha expirado (' + d + ').',
    WHOIS_EXPIRES_SOON:    n => '\u26a0 El dominio vence en ' + n + ' días \u2014 renueva pronto.',
    DOMAIN_INVALID:        d => '"' + d + '" no parece un dominio válido.',
    SPF_ALL_PASSALL:       q => '"' + q + 'all" (pasar todo) \u2014 permite que cualquier servidor envíe como este dominio',
    CAA_IODEF:             v => 'Notificación de incidencias (iodef): ' + v,
    STXT_CONTACT_OK:       v => 'Contacto: ' + v,
    DMARC_POLICY_UNKNOWN:  p => 'Valor de p= desconocido: ' + p,
    DMARC_PCT_LOW:         pct => 'pct=' + pct + ' \u2014 política aplicada solo al ' + pct + '% de los mensajes',
    DMARC_RUA_URI:         uri => 'Informes agregados (rua): ' + uri,
    DMARC_RUF_URI:         uri => 'Informes forenses (ruf): ' + uri,
    BIMI_LOGO_URL:         url => 'URL del logotipo: ' + url,
    BIMI_AUTHORITY_URL:    url => 'URL de autoridad: ' + url,
    // Keys added in later releases — backfilled
    DMARCBIS_TW_AT_AUTHOR:   dom => 'Registro de política publicado en el dominio autor (_dmarc.' + dom + ') — este es el registro que aplican los receptores',
    DMARCBIS_TW_INHERITED:   (dom, tag, val) => 'Sin registro en el dominio autor — los receptores heredan la política publicada en _dmarc.' + dom + ', aplicando ' + tag + '=' + val,
    DMARCBIS_TW_ORG_DOMAIN:  (dom, rule) => 'Dominio organizacional: ' + dom + ' — ' + ({
                               'psd-n':    'fijado por psd=n',
                               'psd-y':    'una etiqueta por debajo de un registro con psd=y',
                               'shortest': 'nombre más corto del recorrido con un registro DMARC',
                               'default':  'no se halló ningún registro en el recorrido, por lo que se usa el dominio consultado',
                             }[rule] || rule),
    DMARCBIS_TW_QUERIES:     n => 'Recorrido del árbol — ' + n + (n === 1 ? ' consulta' : ' consultas'),
    DMARCBIS_V_CASE:         v => 'v=' + v + ' — el valor de versión distingue mayúsculas en RFC 9989 §4.7 y debe ser exactamente DMARC1',
    DMARCBIS_DUPLICATE_TAGS: l => 'Etiqueta repetida en el registro: ' + l + ' — RFC 9989 §4.8 lo considera un error de sintaxis',
    DMARCBIS_PCT_PARTIAL:    v => 'pct=' + v + ' se eliminó en RFC 9989 (Apéndice A.6) — los porcentajes parciales se aplicaban de forma inconsistente; usa t=y durante las pruebas y, si no, elimina la etiqueta',
    DMARCBIS_RF_HISTORIC:    v => 'rf=' + v + ' es histórica en el registro de RFC 9989 §9.3 — elimínala',
    DMARCBIS_RI_HISTORIC:    v => 'ri=' + v + ' es histórica en el registro de RFC 9989 §9.3 — elimínala',
    DMARCBIS_T_INVALID:      v => 't=' + v + ' no es válido — RFC 9989 §4.7 solo permite y o n',
    DMARCBIS_T_TESTING:      (p, eff) => 't=y — modo de prueba: los receptores aplican ' + eff + ' en lugar de la p=' + p + ' publicada (RFC 9989 §4.7)',
    DMARCBIS_NP_INVALID:     v => 'np=' + v + ' no es válido — RFC 9989 §4.7 solo permite none, quarantine o reject',
    DMARCBIS_NP_SET:         v => 'np=' + v + ' — política para subdominios inexistentes (RFC 9989 §4.7)',
    DMARCBIS_PSD_INVALID:    v => 'psd=' + v + ' no es válido — RFC 9989 §4.7 solo permite y, n o u',
    DMARCBIS_SP_INVALID:     v => 'sp=' + v + ' no es válido — RFC 9989 §4.7 solo permite none, quarantine o reject',
    DMARCBIS_SP_IGNORED:     org => 'sp= se ignora en este registro — RFC 9989 §4.7: el descubrimiento de política solo lee sp= del dominio organizacional (' + org + ')',
    DMARCBIS_ALIGN_INVALID:  (tag, v) => tag + '=' + v + ' no es válido — RFC 9989 §4.7 solo permite r o s',
    DMARCBIS_FO_INVALID:     v => 'fo=' + v + ' no cumple la sintaxis de RFC 9989 §4.8 — los valores válidos son 0, 1, d y s, separados por dos puntos, y 0 y 1 son mutuamente excluyentes',
    DMARCBIS_URI_OBS_SIZE:   l => 'Sufijo !size obsoleto en una URI de informes: ' + l + ' — RFC 9989 §4.8 indica a los generadores de informes que lo ignoren',
    DMARCBIS_UNKNOWN_TAGS:   l => 'Etiqueta(s) no registrada(s): ' + l + ' — no figuran en el registro de RFC 9989 §9.3, por lo que los receptores deben ignorarlas',
    DMARCBIS_EXT_INTERNAL:   (tag, uri) => tag + '=' + uri + ' — mismo dominio organizacional, no se necesita registro de autorización',
    DMARCBIS_EXT_AUTHORIZED: (tag, uri, name) => tag + '=' + uri + ' — destino externo autorizado por ' + name,
    DMARCBIS_EXT_MISSING:    (tag, uri, name) => tag + '=' + uri + ' — destino externo NO autorizado: no hay registro TXT v=DMARC1 en ' + name + '; los receptores deben ignorar esta URI y no enviar informes',
    DMARCBIS_EXT_OVERRIDE:   (tag, uri, name, ov) => tag + '=' + uri + ' — autorizado por ' + name + ', que redirige los informes a ' + ov,
    DMARCBIS_EXT_OVERRIDE_BAD: (tag, uri, name, ov) => tag + '=' + uri + ' — el registro de autorización en ' + name + ' redirige a ' + ov + ' en otro host; RFC 9990 §4 prohíbe enviar a cualquiera de las dos direcciones',
    DMARCBIS_EXT_TOO_LONG:   (tag, uri) => tag + '=' + uri + ' — el nombre de autorización supera los límites de longitud del DNS, por lo que la relación no puede confirmarse (RFC 9990 §4 paso 4)',
    DMARCBIS_EXT_UNPARSABLE: (tag, uri) => tag + '=' + uri + ' — no se pudo extraer ningún host de esta URI',
    DMARCBIS_EXT_ERROR:      (tag, uri, name) => tag + '=' + uri + ' — la consulta de ' + name + ' falló; no se pudo confirmar la autorización',
    IPV6_MX_SUMMARY: (n, t) => n + '/' + t + ' host' + (t !== 1 ? 's' : '') + ' MX con IPv6.',
    IPV6_NS_SUMMARY: (n, t) => n + '/' + t + ' host' + (t !== 1 ? 's' : '') + ' NS con IPv6.',
    SPF_LOOKUP_TOTAL_EXCEED: n => n + ' consultas DNS totales (incluidos los include anidados) superan el límite de 10 de RFC 7208 — los receptores devolverán SPF PermError',
    SPF_LOOKUP_TOTAL_HIGH: n => n + ' consultas DNS totales (incluidos los include anidados) — cerca del límite de 10 de RFC 7208',
    SPF_FOUND_LOOKUPS_TOTAL: (direct, total) => 'Registro SPF encontrado. ' + direct + ' directas + ' + total + ' consultas DNS totales (recursivas).',
    RPKI_NS_SINGLE_ASN: (asn, holder) => 'Todos los servidores de nombres en un único ASN (' + asn + (holder ? ' — ' + holder : '') + ') — punto único de fallo para el enrutamiento DNS',
    RPKI_NS_MULTI_ASN: n => 'Los servidores de nombres se reparten entre ' + n + ' ASN distintos — buena resiliencia de enrutamiento',
    // Added 2026-October-13-1
    DNS_SERVFAIL:          s => 'La consulta DNS fall\u00f3 (RCODE ' + s + (s === 2 ? ', SERVFAIL \u2014 a menudo un fallo de validaci\u00f3n DNSSEC' : '') + ')',
    DANE_TLSA_INVALID:     n => n + ' registro(s) TLSA malformado(s) \u2014 valor de campo o longitud de resumen no v\u00e1lidos',
    SPF_REDIRECT_IGNORED:  t => 'redirect=' + t + ' se ignora porque el registro tiene un mecanismo "all" (RFC 7208 \u00a76.1)',
    DMARC_INHERITED:       (d, tag) => 'Sin registro propio \u2014 pol\u00edtica heredada de ' + d + ' (se aplica la etiqueta ' + tag + '=)',
    DMARC_PCT_INVALID:     v => 'pct=' + v + ' no es un entero 0\u2013100 \u2014 los receptores lo ignoran (se trata como 100)',
    MTASTS_ERR_HTTP:       s => 'El archivo de pol\u00edtica devolvi\u00f3 HTTP ' + s,
    MTASTS_NOT_A_POLICY:   url => 'El archivo en ' + url + ' no es una pol\u00edtica MTA-STS (la primera l\u00ednea debe ser "version: STSv1")',
    MTASTS_MAX_AGE_HIGH:   a => 'max_age=' + a + ' supera el m\u00e1ximo de un a\u00f1o (31557600)',
    CAA_INHERITED:         p => 'Sin CAA en este nombre \u2014 se aplican los registros de ' + p + ' (RFC 8659 \u00a73)',
    BIMI_MULTI_RECORDS:    n => n + ' registros BIMI en este selector \u2014 se tratan como ninguno',
    BIMI_NOT_HTTPS:        u => 'La URL no es https: \u2014 ' + u,
    WHOIS_QUERIED_PARENT:  d => '(datos del dominio registrable ' + d + ')',
    WHOIS_HOLD:            s => 'Estado del dominio: ' + s + ' \u2014 el dominio est\u00e1 retenido o en proceso de eliminaci\u00f3n',
    WHOIS_LOCKED:          n => 'Bloqueo de registrador/registro activo (' + n + ' indicador(es) prohibited) \u2014 protegido contra transferencias, eliminaciones o cambios no autorizados',
    SCAN_DONE:             (d, g) => 'An\u00e1lisis de ' + d + ' completado. Calificaci\u00f3n general ' + g + '.',
    DKIM_WILDCARD:         n => 'Un registro comod\u00edn en *._domainkey responde a cualquier nombre de selector \u2014 ' + n + ' de los selectores probados lo devolvieron. No es posible descubrir los selectores realmente en uso, y una clave compartida por todos los selectores no puede rotarse por selector; publica las claves bajo selectores expl\u00edcitos.',
    DKIM_TESTING_FLAG:     s => 't=y (modo de prueba) en ' + s + ' \u2014 el dominio declara que su despliegue DKIM a\u00fan no est\u00e1 en producci\u00f3n; elimina el indicador cuando la firma est\u00e9 verificada',
    DKIM_LEGACY_POLICY:    n => 'Registro de pol\u00edtica obsoleto en ' + n + ' (DomainKeys / ADSP, hist\u00f3rico desde 2013) \u2014 los receptores lo ignoran; puede eliminarse',
    DNSSEC_DS_OK:          n => n + ' registro' + (n !== 1 ? 's' : '') + ' DS en la zona padre, cada uno coincidente con una clave publicada',
    DNSSEC_DS_STALE:       (tag, alg) => 'El DS con etiqueta de clave ' + tag + ' (algoritmo ' + alg + ') no coincide con ninguna DNSKEY publicada — un DS obsoleto de una clave anterior',
    DNSSEC_DS_SHA1:        tag => 'El DS con etiqueta de clave ' + tag + ' usa el tipo de resumen 1 (SHA-1) — obsoleto (RFC 8624); publica un DS SHA-256',
    DNSSEC_DS_BAD_DIGEST:  (tag, type) => 'El DS con etiqueta de clave ' + tag + ' usa el tipo de resumen ' + type + ' — no admitido por los validadores',
    DNSSEC_ALG_NO_DS:      alg => 'El algoritmo ' + alg + ' está publicado en DNSKEY pero no tiene DS en la zona padre — los validadores aún no pueden usarlo (¿cambio de algoritmo en curso?)',
    DNSSEC_RDAP_MATCH:     (reg, dns) => 'Los datos DS del registro (RDAP) coinciden con DNS (' + reg + ' registro' + (reg !== 1 ? 's' : '') + ')',
    DNSSEC_RDAP_MISMATCH:  (reg, dns) => 'El conjunto DS del registro (RDAP, ' + reg + ') difiere del conjunto DS en DNS (' + dns + ') — una rotación de claves detenida o a medias',
    DNSSEC_RRSIG_EXPIRED:  (type, date) => 'El RRSIG sobre ' + type + ' caducó el ' + date + ' — los validadores ahora rechazan esta zona',
    DNSSEC_RRSIG_NEAR:     (type, hours, pct) => 'El RRSIG sobre ' + type + ' caduca en ' + hours + ' h (queda el ' + pct + '% de su ventana de validez) — la refirma puede haberse detenido',
    DNSSEC_RRSIG_OK:       (type, days, window) => 'Firmas válidas — el RRSIG sobre ' + type + ' caduca en ' + days + ' días (ventana de validez ' + window + ' días)',
    DNSSEC_RRSIG_FUTURE:   type => 'Un RRSIG sobre ' + type + ' aún no es válido (inicio en el futuro) — revisa el reloj del firmante',
    DNSSEC_NSEC3_HIGH:     n => 'Las iteraciones NSEC3 (' + n + ') superan 100 — los validadores que siguen RFC 9276 tratan la zona como insegura (no firmada)',
    DNSSEC_NSEC3_PARAMS:   (n, salt) => 'NSEC3 con ' + n + ' iteraci' + (n !== 1 ? 'ones' : 'ón') + ' y sal ' + salt + ' — RFC 9276 recomienda 0 iteraciones y sin sal',
    DNSSEC_KEY_SMALL:      (tag, bits) => 'La clave RSA con etiqueta ' + tag + ' tiene solo ' + bits + ' bits — usa 2048 bits o más (RFC 8624)',
    COH_BIMI_DMARC:        why => 'Hay un registro BIMI publicado pero DMARC no cumple los requisitos de BIMI (' + why + ') \u2014 se necesitan p=quarantine o p=reject, pct=100 y sp distinto de none, o el logotipo nunca se mostrar\u00e1',
    COH_DMARC_NO_SPF:      p => 'DMARC aplica p=' + p + ' pero el dominio no tiene registro SPF \u2014 la alineaci\u00f3n depende por completo de DKIM; el correo sin firmar de este dominio ya est\u00e1 siendo ' + (p === 'reject' ? 'rechazado' : 'puesto en cuarentena'),
    COH_RUA_UNDELIVERABLE: h => 'El destino de informes ' + h + ' no tiene MX ni registro de direcci\u00f3n \u2014 los informes DMARC/TLS-RPT enviados all\u00ed no se pueden entregar',
    COH_RUA_DELIVERABLE:   n => n + ' destino' + (n !== 1 ? 's' : '') + ' de informes (rua/ruf) acepta' + (n !== 1 ? 'n' : '') + ' correo (hay MX o registro de direcci\u00f3n)',
    MX_CNAME_TARGET:       h => h + ' es un CNAME \u2014 el destino de un MX debe ser un nombre de host can\u00f3nico (RFC 5321 \u00a75.1, RFC 2181 \u00a710.3); algunos remitentes lo rechazan',
    MX_IP_LITERAL:         h => 'El destino MX ' + h + ' es una direcci\u00f3n IP \u2014 MX debe nombrar un host (RFC 5321 \u00a75.1); los remitentes conformes lo ignoran',
    MX_UNRESOLVABLE:       h => h + ' no tiene registro A ni AAAA \u2014 el correo dirigido a este servidor MX no se puede entregar',
    MX_DUPLICATE_HOST:     h => h + ' aparece m\u00e1s de una vez en el conjunto MX',
    MX_SINGLE_ASN:         (asn, holder) => 'Todos los servidores MX est\u00e1n en un \u00fanico AS (AS' + asn + (holder ? ' \u2014 ' + holder : '') + ') \u2014 un solo incidente de enrutamiento deja sin servicio todas las rutas entrantes (informativo)',
    SPF_UNKNOWN_MECH:      term => 'Mecanismo desconocido "' + term + '" \u2014 permerror: los receptores tratan todo el registro como inv\u00e1lido (RFC 7208 \u00a74.6.1)',
    SPF_SYNTAX:            term => 'T\u00e9rmino no analizable "' + term + '" \u2014 permerror: los receptores tratan todo el registro como inv\u00e1lido',
    SPF_DUPLICATE_MODIFIER: m => 'El modificador ' + m + '= aparece m\u00e1s de una vez \u2014 permerror (RFC 7208 \u00a76)',
    SPF_RECORD_LONG:       n => 'El registro tiene ' + n + ' bytes \u2014 por encima de ~450 ya no cabe en una respuesta UDP de 512 bytes y puede ser truncado por resolvers antiguos (RFC 7208 \u00a73.4)',
    AUTOCONF_SUMMARY:    (srv, mechs) => srv + ' servicio(s) SRV publicado(s), ' + mechs + ' mecanismo(s) de autoconfiguración encontrado(s)',
    AUTOCONF_SRV_FOUND:  n => n + ' registro(s) de servicio SRV publicado(s) (RFC 6186) — los clientes que los admiten toman nombres de servidor y puertos del DNS',
    AUTOCONF_DECLINED:   svc => '_' + svc + '._tcp declara el servicio como no ofrecido (destino «.», RFC 2782) — los clientes lo omiten en lugar de sondear',
    AUTOCONF_PREFER_IMPLICIT: (plain, tls) => 'Solo se publica _' + plain + '._tcp — RFC 8314 §3 recomienda TLS implícito, así que publica también _' + tls + '._tcp',
    AUTOCONF_TARGET_UNRESOLVABLE: (svc, target) => 'El destino SRV ' + target + ' de _' + svc + '._tcp no tiene registro A/AAAA — los clientes no pueden conectarse',
    AUTOCONF_TARGET_CNAME: (svc, target) => 'El destino SRV ' + target + ' de _' + svc + '._tcp es un CNAME — RFC 2782 prohíbe un alias como destino',
    AUTOCONF_TARGET_LITERAL: (svc, target) => 'El destino SRV ' + target + ' de _' + svc + '._tcp es una dirección IP — RFC 2782 exige un nombre de host',
    AUTOCONF_NONSTANDARD_PORT: (svc, port, std) => '_' + svc + '._tcp usa el puerto ' + port + ' en lugar del estándar ' + std + ' — correcto para clientes con SRV, pero los que adivinan no lo encontrarán',
    AUTOCONF_AUTODISCOVER_SRV: (target, port) => 'SRV de Autodiscover: ' + target + ':' + port + ' — Outlook encuentra el punto de Autodiscover de Exchange / Microsoft 365 mediante DNS',
    AUTOCONF_AUTODISCOVER_HOST: (name, cname) => name + ' resuelve' + (cname ? ' (CNAME → ' + cname + ')' : '') + ' — Outlook prueba https://' + name + '/autodiscover/autodiscover.xml',
    AUTOCONF_M365:       name => name + ' apunta a Microsoft 365 (autodiscover.outlook.com)',
    AUTOCONF_MOZ_HOST:   (name, cname) => name + ' resuelve' + (cname ? ' (CNAME → ' + cname + ')' : '') + ' — Thunderbird obtiene /mail/config-v1.1.xml de ahí (no se descarga aquí)',
    AUTOCONF_ISPDB_YES:  provider => 'Figura en la ISPDB de Thunderbird como «' + provider + '» — Thunderbird y K-9 Mail configuran cuentas sin ningún registro DNS',
    AUTOCONF_ISPDB_PLAIN: (type, host) => 'La entrada de la ISPDB configura ' + type + ' en ' + host + ' sin cifrado (socketType plain)',
    AUTOCONF_ISPDB_HTTP: s => 'La consulta a la ISPDB devolvió HTTP ' + s,
    WHOIS_LOCK_PARTIAL:  missing => 'Bloqueo parcial — ' + missing + ' no está activado; activa los tres (transfer, delete, update) en el registrador',
    WHOIS_DNSSEC_SIGNED: n => 'firmada — ' + n + ' registro(s) DS en el registro',
    SPF_INCLUDE_NO_RECORD: t => 'include:' + t + ' \u2014 el destino no tiene registro SPF \u2014 permerror (RFC 7208 \u00a75.2)',
    SPF_INCLUDE_MULTI:     t => 'include:' + t + ' \u2014 el destino publica varios registros SPF \u2014 permerror',
    SPF_MX_TOO_MANY:       (t, n) => 'mx:' + t + ' tiene ' + n + ' servidores MX \u2014 m\u00e1s de 10 es un permerror (RFC 7208 \u00a74.6.4)',
    SPF_VOID_LOOKUPS:      n => n + ' consultas vac\u00edas (NXDOMAIN o respuestas vac\u00edas) en el \u00e1rbol de include \u2014 m\u00e1s de 2 es un permerror (RFC 7208 \u00a74.6.4)',
  },

  // ── x: textos de explicación (HTML) ──────────────────────────────────────
  x: {
    ZONE:
      '<b>La higiene de la zona</b> examina la propia zona DNS en lugar de un registro de correo concreto: los ajustes que deciden cómo se replica la zona, cuántos servidores responden por ella, cuánto ha crecido la respuesta del ápice y qué devuelve la consulta de un nombre que <b>no</b> existe. Nada de esto puntúa.<br><br>' +
      '<b>Temporizadores SOA.</b> El registro Start of Authority lleva cinco números. <code>refresh</code> es cada cuánto los secundarios piden cambios al primario, <code>retry</code> cuánto esperan tras un refresco fallido, <code>expire</code> cuánto siguen sirviendo la zona cuando el primario no responde, y <code>minimum</code> es el TTL de caché negativa (RFC 2308): cuánto recuerda un resolutor que un nombre no existe. RFC 1912 §2.2 da rangos que funcionan; retry debe ser menor que refresh, y expire mayor que ambos juntos, o una sola transferencia fallida puede dejar la zona fuera de línea. El serial solo se compara, nunca se interpreta, así que un valor raro como 1 es inofensivo; la convención AAAAMMDDnn solo hace fácil detectar una transferencia atascada. Estos temporizadores solo importan en zonas replicadas con AXFR/IXFR; los grandes proveedores anycast (Google, Cloudflare, Azure) replican de otra forma y eligen a prop\u00f3sito valores fuera de los rangos, as\u00ed que los hallazgos sobre temporizadores son notas, nunca advertencias.<br><br>' +
      '<b>Servidores de nombres.</b> RFC 1034 exige al menos dos, RFC 2182 recomienda tres o más en redes separadas. La línea de diversidad de AS reutiliza los datos de la pestaña RPKI: todos los servidores tras un solo sistema autónomo están a un incidente de enrutamiento de que el dominio desaparezca, correo incluido — los registros MX no se encuentran cuando la zona no se puede resolver.<br><br>' +
      '<b>CNAME en el ápice.</b> Un ápice de zona posee registros SOA y NS, así que RFC 2181 §10.1 prohíbe un CNAME ahí; el registro MX del dominio también sería un alias. Los proveedores de alojamiento emulan el efecto con «CNAME flattening» o registros <code>ALIAS</code>, invisibles aquí — solo se marca un CNAME real en la respuesta.<br><br>' +
      '<b>Tamaño TXT del ápice.</b> SPF, DMARC y un puñado de tokens de verificación de dominio viven todos en el conjunto TXT del ápice, y todos se devuelven juntos en cada consulta. Desde el DNS Flag Day 2020 los resolutores usan un búfer EDNS de 1232 bytes; una respuesta mayor se trunca y se reintenta por TCP, que algunas redes bloquean. Los tokens de verificación se listan para poder revisarlos — si un token de un servicio abandonado hace años sigue siendo necesario no se puede ver desde fuera.<br><br>' +
      '<b>Comodines.</b> Un registro en <code>*.<domain></code> responde por todo nombre que no existe. Un <b>MX</b> comodín hace que la zona acepte correo para cualquier subdominio, erratas incluidas, y la política DMARC <code>sp=</code> importa entonces para todos. Un <b>TXT</b> comodín es peor de lo que parece: también responde a <code>_dmarc.<sub></code>, <code>_mta-sts.<sub></code> y <code>_smtp._tls.<sub></code> para subdominios que nunca se crearon, así que los receptores encuentran una «política» que en realidad es un token de verificación. La excepción es un <code>v=spf1 -all</code> comodín, que da a todo nombre de host una política SPF para las comprobaciones HELO/EHLO y es una práctica recomendada. Un A/AAAA comodín es habitual y solo se anota.<br><br>' +
      '<b>Lo que no se puede comprobar desde un navegador:</b> si la delegación del padre coincide con el conjunto NS propio de la zona (delegación coja), si las transferencias de zona (AXFR) están abiertas y si los servidores responden siquiera — todo eso requiere consultas directas a los servidores autoritativos, que un resolutor DNS sobre HTTPS no expone.',
    DMARC:
      '<b>DMARC (Domain-based Message Authentication, Reporting and Conformance)</b> ' +
      'une SPF y DKIM con una pol\u00edtica que indica a los receptores qu\u00e9 hacer cuando falla la autenticaci\u00f3n. ' +
      'Originalmente <a href="https://www.rfc-editor.org/rfc/rfc7489">RFC 7489</a>, ahora normalizado como <a href="https://www.rfc-editor.org/rfc/rfc9989">RFC 9989</a> («DMARCbis»), que tambi\u00e9n deja obsoleto <a href="https://www.rfc-editor.org/rfc/rfc9091">RFC 9091</a> (PSD DMARC). Consulta la secci\u00f3n DMARCbis m\u00e1s abajo para la conformidad con la especificaci\u00f3n m\u00e1s reciente.<br><br>' +
      '<b>Pol\u00edtica (p=):</b> <b>reject</b> \u2014 si falla la autenticaci\u00f3n, el mensaje se descarta (m\u00e1s fuerte). ' +
      '<b>quarantine</b> \u2014 enviar a spam. <b>none</b> \u2014 solo monitoreo, sin acci\u00f3n.<br><br>' +
      '<b>Alineaci\u00f3n de identificadores:</b> DMARC requiere que el dominio en la cabecera <code>From:</code> se alinee con el dominio autenticado por SPF o DKIM. ' +
      '<b>Relajada</b> (por defecto) permite coincidencias de dominio organizacional; <b>estricta</b> (<code>adkim=s</code> / <code>aspf=s</code>) requiere coincidencia exacta.<br><br>' +
      '<b>Informes:</b> <code>rua=</code> recibe informes XML agregados (recomendado), definidos en ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9990">RFC 9990</a>. ' +
      '<code>ruf=</code> recibe informes de fallo por mensaje, definidos en ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9991">RFC 9991</a> (sensible \u2014 usar con precauci\u00f3n).<br><br>' +
      '<b>Pol\u00edtica de subdominio (sp=):</b> Si se omite, los subdominios heredan <code>p=</code>. ' +
      'Usa <code>sp=reject</code> para proteger expl\u00edcitamente todos los subdominios. ' +
      'RFC 9989 a\u00f1ade <code>np=</code> para subdominios que ni siquiera existen.<br><br>' +
      '<b>pct=:</b> Aplicaba la pol\u00edtica al porcentaje indicado de mensajes que fallan. ' +
      '<b>Eliminado en RFC 9989</b> \u2014 <code>pct=0</code> ahora se escribe <code>t=y</code>, y cualquier otro valor debe simplemente eliminarse.<br><br>' +
      '<b>Ejemplos de registros DNS:</b><br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"</code> \u2014 solo monitoreo<br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=quarantine; sp=quarantine; rua=mailto:dmarc@example.com"</code> \u2014 cuarentena<br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=reject; sp=reject; np=reject; adkim=s; aspf=s; rua=mailto:dmarc@example.com; psd=n"</code> \u2014 aplicaci\u00f3n completa, al estilo RFC 9989',
    DNSSEC:
      '<b>¿Qué es DNSSEC?</b> DNSSEC (<a href="https://www.rfc-editor.org/rfc/rfc4033">RFC 4033</a>) añade firmas criptográficas a los registros DNS, ' +
      'previniendo el envenenamiento de caché y los ataques de intermediario. ' +
      'El <b>indicador AD</b> (Authentic Data) del resolver de Cloudflare confirma que toda la cadena desde la raíz hasta este dominio está validada.<br><br>' +
      '<b>Calificación de algoritmos</b> según <a href="https://www.rfc-editor.org/rfc/rfc8624">RFC 8624</a>: <b>Ed25519</b> (alg 15) y <b>ECDSA P-256</b> (alg 13) son los más fuertes. ' +
      'RSA/SHA-256 (alg 8) es aceptable. RSA/SHA-1 (alg 5) y las variantes DSA son débiles o inseguros. ' +
      'Cuando una zona publica varios algoritmos se firma con todos y un validador puede usar cualquiera, por lo que la valoración sigue el <b>más débil</b> presente.<br><br>' +
      '<b>DNSSEC habilita DANE:</b> Sin DNS validado por DNSSEC, los registros TLSA no son de confianza \u2014 ' +
      'un atacante podría sustituir registros TLSA falsos.',
    MX:
      '<b>Los registros MX (Mail eXchange)</b> (<a href="https://www.rfc-editor.org/rfc/rfc5321">RFC 5321</a>) indican a otros servidores dónde entregar el correo de tu dominio. ' +
      'Los números de prioridad más bajos se intentan primero (prioridad 10 antes que 20).<br><br>' +
      '<b>Por qué importa DNSSEC en MX:</b> Un atacante que pueda falsificar registros MX podría redirigir todo el correo entrante. ' +
      'Los registros MX validados por DNSSEC evitan esto. El DNSSEC de cada nombre de host MX se comprueba en el ápex de su zona.',
    DANE:
      '<b>DANE</b> (<a href="https://www.rfc-editor.org/rfc/rfc7672">RFC 7672</a>) usa registros TLSA (<a href="https://www.rfc-editor.org/rfc/rfc6698">RFC 6698</a>) para permitir que los servidores de correo verifiquen certificados TLS ' +
      'sin depender de CAs comerciales. Se consulta en <b>_25._tcp.<mx-hostname></b>.<br><br>' +
      '<b>Códigos de uso TLSA:</b> ' +
      '<b>DANE-EE (3)</b> \u2014 anclar al certificado de entidad final (más fuerte). ' +
      '<b>DANE-TA (2)</b> \u2014 anclar a un ancla de confianza. ' +
      '<b>PKIX-EE (1)</b> / <b>PKIX-TA (0)</b> \u2014 requieren validación de CA más coincidencia TLSA.<br><br>' +
      '<b>Tipos de coincidencia:</b> SHA-256 (1) y SHA-512 (2) son los recomendados. La coincidencia exacta (0) es frágil al rotar certificados.<br><br>' +
      '<b>DNSSEC obligatorio:</b> Sin DNSSEC, los registros TLSA pueden ser falsificados y DANE no ofrece seguridad.',
    SPF:
      '<b>SPF (Sender Policy Framework, <a href="https://www.rfc-editor.org/rfc/rfc7208">RFC 7208</a>)</b> especifica qué servidores están autorizados a enviar correo para tu dominio. ' +
      'Los servidores receptores comprueban si la IP de envío coincide.<br><br>' +
      '<b>Calificadores:</b> <b>-all</b> (fallo duro) rechaza remitentes no autorizados \u2014 el más fuerte. ' +
      '<b>~all</b> (fallo suave) los marca como sospechosos. <b>?all</b> (neutral) no ofrece protección. ' +
      '<b>+all</b> permite a cualquiera \u2014 nunca uses esto.<br><br>' +
      '<b>Mecanismos:</b> <b>include:</b> delega en otro dominio. ' +
      '<b>ip4:</b>/<b>ip6:</b> autorizan rangos de IP. <b>mx</b> autoriza tus servidores MX.<br><br>' +
      '<b>Límite de 10 consultas (<a href="https://www.rfc-editor.org/rfc/rfc7208#section-4.6.4">RFC 7208 \u00a74.6.4</a>):</b> Superar 10 mecanismos de consulta DNS provoca un PermError.',
    DKIM:
      '<b>¿Qué es un selector DKIM?</b> DKIM (<a href="https://www.rfc-editor.org/rfc/rfc6376">RFC 6376</a>) usa criptografía de clave pública para firmar el correo saliente. ' +
      'Un selector (p. ej. <code>google</code>) es una etiqueta que apunta a una clave pública DKIM ' +
      'publicada en <code><selector>._domainkey.<domain></code>. ' +
      'Un dominio puede tener varios selectores \u2014 uno por proveedor de correo o para la rotación de claves.<br><br>' +
      '<b>Encontrar selectores:</b> Busca en la cabecera <code>DKIM-Signature:</code> de cualquier correo recibido. ' +
      'La etiqueta <code>s=</code> contiene el selector. Los selectores personalizados no pueden descubrirse automáticamente.<br><br>' +
      '<b>Etiquetas del registro de clave (<a href="https://www.rfc-editor.org/rfc/rfc6376">RFC 6376</a> \u00a73.6.1):</b><br>' +
      '<b>k=</b> tipo de clave: <b>ed25519</b> es el recomendado (compacto y fuerte). <b>rsa</b> es el valor por defecto si se omite.<br>' +
      '<b>h=</b> algoritmos hash permitidos. <b>sha256</b> es el único valor recomendado. ' +
      '<b>sha1</b> fue deprecado en <a href="https://www.rfc-editor.org/rfc/rfc8301">RFC 8301</a> (2018) y no debe usarse. ' +
      'Si se omite, todos los algoritmos están permitidos implícitamente \u2014 añade explícitamente <code>h=sha256</code> para restringir al algoritmo fuerte.<br>' +
      '<b>s=</b> tipo de servicio: <b>email</b> restringe la clave al uso para correo (recomendado). ' +
      '<b>*</b> (por defecto si se omite) permite su uso para cualquier servicio.<br>' +
      '<b>t=y</b> marca la clave como en modo prueba \u2014 los verificadores no deben rechazar los fallos. Eliminar de las claves en producción.<br>' +
      '<b>t=s</b> deshabilita la herencia de clave por subdominios \u2014 los subdominios deben publicar sus propias claves DKIM.<br>' +
      '<b>p=</b> la clave pública (base64). Un valor vacío revoca la clave, que es la forma recomendada de retirar un selector.<br>' +
      '<b>v=</b> versión: <code>DKIM1</code> es opcional pero recomendado para mayor claridad. Cualquier otro valor invalida el registro.<br>' +
      '<b>n=</b> notas: texto legible por humanos que los verificadores ignoran.<br><br>' +
      '<b>Tamaños de clave:</b> <b>Ed25519</b> es el más fuerte y compacto. ' +
      '<b>RSA-2048</b> es la recomendación mínima. ' +
      '<b>RSA-1024</b> es débil y debe reemplazarse inmediatamente.<br><br>' +
      '<b>DNSSEC en los registros DKIM</b> evita que un atacante sustituya tu clave pública en DNS.',
    DKIM2:
      'El grupo de trabajo DKIM del IETF est\u00e1 desarrollando <b>DKIM2</b>, un sucesor de DKIM1 ' +
      '(<a href="https://www.rfc-editor.org/rfc/rfc6376">RFC 6376</a>) que tambi\u00e9n asume la funci\u00f3n de ARC ' +
      '(<a href="https://www.rfc-editor.org/rfc/rfc8617">RFC 8617</a>). Todav\u00eda es un Internet-Draft: ' +
      'a\u00fan no hay nada que implementar, y este verificador no lo comprueba.<br><br>' +
      '<b>Qu\u00e9 cambia:</b> cada salto que procesa un mensaje a\u00f1ade su propia firma, en lugar de que solo el ' +
      'dominio de origen firme una vez. Cada firma registra el sobre SMTP (<code>MAIL FROM</code> y ' +
      '<code>RCPT TO</code>) en ese salto, construyendo una cadena de custodia verificable. Los cambios hechos ' +
      'en tr\u00e1nsito por listas de correo y reenviadores se describen mediante "recetas" que viajan con el ' +
      'mensaje, de modo que el receptor puede reconstruir el original y a\u00fan validar la firma. Esto ataca los ' +
      'dos fallos que DKIM1 no puede resolver: la rotura por reenv\u00edo y los ataques de repetici\u00f3n.<br><br>' +
      '<b>Qu\u00e9 se mantiene:</b> las claves se siguen publicando en DNS en ' +
      '<code><selector>._domainkey.<dominio></code>, como registros <code>v=DKIM1</code> con ' +
      'etiquetas <code>k=</code> y <code>p=</code>, por lo que las claves existentes se conservan sin cambios. ' +
      '<code>rsa-sha256</code> sigue siendo obligatorio, <code>ed25519-sha256</code> es recomendado y ' +
      '<code>rsa-sha1</code> se rechaza por completo. Las etiquetas <code>h=</code>, <code>n=</code> y ' +
      '<code>s=</code> quedan retiradas.<br><br>' +
      '<b>Estado:</b> <code>draft-ietf-dkim-dkim2-spec</code> es el documento adoptado por el grupo de trabajo, ' +
      'junto a borradores separados para la codificaci\u00f3n DNS y las buenas pr\u00e1cticas. Implementaciones ' +
      'independientes en Rust, Python y Go demostraron interoperabilidad en julio de 2026. Nada es a\u00fan un RFC, ' +
      'as\u00ed que hoy no se requiere ninguna acci\u00f3n, pero la higiene de claves que corrijas ahora (Ed25519 o ' +
      'RSA-2048, <code>h=sha256</code>, DNSSEC) se traslada directamente a DKIM2.<br><br>' +
      '<b>M\u00e1s informaci\u00f3n:</b><br>' +
      '<a href="https://datatracker.ietf.org/wg/dkim/documents/">Grupo de trabajo DKIM del IETF \u2014 todos los documentos</a><br>' +
      '<a href="https://datatracker.ietf.org/doc/draft-ietf-dkim-dkim2-spec/">draft-ietf-dkim-dkim2-spec \u2014 especificaci\u00f3n principal</a><br>' +
      '<a href="https://datatracker.ietf.org/doc/draft-ietf-dkim-dkim2-dns/">draft-ietf-dkim-dkim2-dns \u2014 especificaci\u00f3n de nombres de dominio</a><br>' +
      '<a href="https://datatracker.ietf.org/doc/draft-ietf-dkim-dkim2-bcp/">draft-ietf-dkim-dkim2-bcp \u2014 buenas pr\u00e1cticas</a><br>' +
      '<a href="https://datatracker.ietf.org/doc/draft-ietf-dkim-dkim2-motivation/">draft-ietf-dkim-dkim2-motivation \u2014 justificaci\u00f3n y contexto</a>',
    TLSRPT:
      '<b>TLS-RPT (<a href="https://www.rfc-editor.org/rfc/rfc8460">RFC 8460</a>)</b> permite recibir informes de fallos TLS de los servidores de correo remitentes. ' +
      'Se publica como un registro TXT en <code>_smtp._tls.<dominio></code>.<br><br>' +
      '<b>Puntos de notificación rua=:</b> Los informes se envían a direcciones <code>mailto:</code> o servicios de agregación <code>https:</code>. ' +
      'Los puntos HTTPS son excelentes; mailto es bueno.<br><br>' +
      '<b>Contenido de los informes:</b> Datos JSON agregados \u2014 conexiones TLS exitosas, fallos de handshake, ' +
      'errores de certificado e infracciones de política. Esencial para diagnosticar problemas de MTA-STS y DANE.<br><br>' +
      '<b>Ejemplos de registros DNS:</b><br>' +
      '<code>_smtp._tls.example.com. TXT "v=TLSRPTv1; rua=mailto:tlsrpt@example.com"</code><br>' +
      '<code>_smtp._tls.example.com. TXT "v=TLSRPTv1; rua=https://tlsrpt.example.com/v1"</code> — punto de agregación HTTPS',
    MTASTS:
      '<b>MTA-STS (<a href="https://www.rfc-editor.org/rfc/rfc8461">RFC 8461</a>)</b> instruye a los servidores remitentes a requerir TLS al entregar a tu dominio ' +
      'y a validar el certificado de tu servidor de correo. ' +
      'Registro DNS en <code>_mta-sts.<dominio></code>; ' +
      'política en <code>https://mta-sts.<dominio>/.well-known/mta-sts.txt</code>.<br><br>' +
      '<b>Modos de política:</b> <b>enforce</b> \u2014 TLS obligatorio con certificado válido, o entrega rechazada. ' +
      '<b>testing</b> \u2014 recopilar datos TLS-RPT sin aplicar. ' +
      '<b>none</b> \u2014 explícitamente desactivado.<br><br>' +
      '<b>max_age:</b> Segundos que los remitentes almacenan la política en caché. 604800 (1 semana) o 31557600 (1 año) son valores típicos.<br><br>' +
      '<b>Ejemplo de registro DNS:</b><br>' +
      '<code>_mta-sts.example.com. TXT "v=STSv1; id=20240101000000"</code><br><br>' +
      '<b>Ejemplo de archivo de política</b> en <code>https://mta-sts.example.com/.well-known/mta-sts.txt</code>:<br>' +
      '<code>version: STSv1</code><br>' +
      '<code>mode: enforce</code><br>' +
      '<code>mx: mail.example.com</code><br>' +
      '<code>max_age: 604800</code>',
    CAA:
      '<b>CAA (Certification Authority Authorization, <a href="https://www.rfc-editor.org/rfc/rfc8659">RFC 8659</a>)</b> restringe qué CAs pueden emitir certificados TLS.<br><br>' +
      '<b>Etiquetas:</b> <b>issue</b> \u2014 autoriza una CA para certificados regulares (p. ej. <code>issue "letsencrypt.org"</code>). ' +
      '<b>issuewild</b> \u2014 autoriza una CA para certificados wildcard. ' +
      '<b>iodef</b> \u2014 dónde deben notificar las CAs las infracciones de política.<br><br>' +
      '<b>Certificados S/MIME (issuemail, <a href="https://www.rfc-editor.org/rfc/rfc9495">RFC 9495</a>):</b> ' +
      'La etiqueta <b>issuemail</b> controla qué CAs pueden emitir certificados S/MIME para las direcciones de correo de tu dominio. ' +
      'Si se omite, la etiqueta <b>issue</b> también regula la emisión S/MIME. ' +
      'Usa <code>issuemail ";"</code> para prohibir toda emisión S/MIME desde tu dominio.<br><br>' +
      '<b>Certificados VMC para BIMI:</b> Los Verified Mark Certificates (VMC) usados para registros de autoridad BIMI están regidos por la etiqueta estándar <b>issue</b> \u2014 no existe una etiqueta específica para VMC. ' +
      'Solo un pequeño número de CAs emite actualmente VMC (DigiCert, Entrust). ' +
      'Si usas BIMI con VMC (etiqueta <code>a=</code>), asegúrate de que tus registros <b>issue</b> incluyan tu proveedor de VMC.<br><br>' +
      '<b>Indicador crítico:</b> Las CAs que no entiendan una etiqueta con indicador crítico deben rechazar la emisión. ' +
      'Usar con cuidado \u2014 etiquetas críticas desconocidas pueden bloquear toda emisión de certificados.<br><br>' +
      '<b>Sin registros CAA,</b> cualquier CA que supere la validación de dominio puede emitir certificados.<br><br>' +
      '<b>Ejemplos de registros DNS:</b><br>' +
      '<code>example.com. CAA 0 issue "letsencrypt.org"</code><br>' +
      '<code>example.com. CAA 0 issue "sectigo.com"</code><br>' +
      '<code>example.com. CAA 0 issuewild "letsencrypt.org"</code><br>' +
      '<code>example.com. CAA 0 issuemail "sectigo.com"</code><br>' +
      '<code>example.com. CAA 0 iodef "mailto:caa-violations@example.com"</code>',
    RPKI:
      '<b>RPKI (Resource Public Key Infrastructure)</b> permite a los titulares de direcciones IP publicar Autorizaciones de Origen de Ruta (ROA) ' +
      'que especifican qué ASN está autorizado a anunciar sus prefijos.<br><br>' +
      '<b>Válido</b> \u2014 existe una ROA coincidente: el prefijo está protegido contra el secuestro de BGP. ' +
      '<b>Inválido</b> \u2014 existe una ROA pero NO autoriza el anuncio actual: los routers con validación RPKI pueden filtrar la ruta. ' +
      '<b>Sin ROA</b> \u2014 no se encontró ninguna ROA: el prefijo no está protegido pero puede enrutarse.<br><br>' +
      'Esta comprobación resuelve IPs para todos los hosts NS y MX, luego consulta RIPE Stat para validar cada prefijo frente a su ASN de origen. ' +
      'RPKI protege la infraestructura de correo del secuestro de rutas BGP que podría redirigir o interceptar el tráfico de correo.<br><br>' +
      '\u00bfQuieres saber si tu propio ISP filtra rutas secuestradas? Consulta la pesta\u00f1a <b>Conexi\u00f3n</b>.',
    ASPA:
      '<b>ASPA (Autonomous System Provider Authorization, <a href="https://www.rfc-editor.org/rfc/rfc9582">RFC 9582</a>)</b> permite a un AS declarar qué proveedores upstream está autorizado a utilizar. ' +
      'Los registros ASPA publicados permiten detectar filtraciones de rutas: si el tráfico llega a través de un proveedor no autorizado, los routers compatibles con ASPA pueden rechazarlo.<br><br>' +
      '<b>Publicado</b> \u2014 existe un registro ASPA con proveedores declarados. ' +
      '<b>Sin ASPA</b> \u2014 no hay registro publicado; las filtraciones de rutas que involucren a este AS no pueden ser detectadas por routers compatibles con ASPA.<br><br>' +
      'Esta comprobación lee los datos ASPA obtenidos durante la comprobación RPKI, mostrando los registros de autorización de proveedor para todos los ASN asociados a los hosts NS y MX del dominio.<br><br>' +
      '<b>Nota:</b> RFC 9582 es aún un estándar propuesto y el despliegue real es actualmente muy limitado. ' +
      'Por ello, la ausencia de registros ASPA no afecta tu puntuación \u2014 esta comprobación es puramente informativa por ahora. ' +
      'No obstante, vale la pena preguntar a tu proveedor de hosting o ISP si están siguiendo el desarrollo de ASPA y considerando su implementación.',
    CONN:
      '<b>Conexi\u00f3n</b> \u2014 a diferencia de todas las dem\u00e1s pesta\u00f1as, estas pruebas examinan la conexi\u00f3n a internet y el navegador desde los que escaneas, no el dominio que introdujiste. Nada de lo que hay aqu\u00ed afecta a ninguna valoraci\u00f3n, puntuaci\u00f3n o nota.<br><br>' +
      '<b>Validaci\u00f3n DNSSEC</b> \u2014 se obtienen dos nombres de prueba por HTTPS: uno correctamente firmado y otro con la firma DNSSEC deliberadamente rota. Un resolutor validador se niega a resolver el nombre roto, as\u00ed que si aun as\u00ed se carga, el resolutor que usa tu navegador (el del sistema operativo, el de tu ISP, o un servicio de DNS cifrado \u00abDNS seguro\u00bb configurado en el navegador) acepta respuestas DNS falsificadas para dominios firmados. ' +
      'M\u00e9todo de prueba y dominios del <a href="https://wander.science/projects/dns/dnssec-resolver-test/">DNSSEC Resolver Test</a> de Matth\u00e4us Wander.<br><br>' +
      '<b>Direcciones IP p\u00fablicas</b> \u2014 tus direcciones IPv4 e IPv6 visibles desde el exterior seg\u00fan las reporta icanhazip.com (operado por Cloudflare), con la red que las anuncia (ASN y titular), el prefijo que las cubre, y si esa ruta est\u00e1 protegida por una ROA de RPKI v\u00e1lida. La falta de IPv6 aqu\u00ed significa que tu ISP o tu red a\u00fan no lo ha habilitado.<br><br>' +
      '<b>\u00bfEs tu ISP seguro en BGP?</b> \u2014 prueba si tu ISP filtra rutas BGP secuestradas: obtiene un recurso de prueba anunciado con una ROA v\u00e1lida y otro anunciado desde un ASN no autorizado. Si el inv\u00e1lido se carga, tu ISP acepta rutas secuestradas. ' +
      'Basado en <a href="https://isbgpsafeyet.com">isbgpsafeyet.com</a> de Cloudflare (licencia MIT).<br><br>' +
      '<b>Nota de privacidad:</b> estas pruebas contactan con ippacket.stream, icanhazip.com, isbgpsafeyet.com y RIPE Stat, y tus direcciones IP p\u00fablicas se env\u00edan a RIPE Stat para consultar sus datos de red. Los resultados se guardan durante la sesi\u00f3n de la p\u00e1gina: se ejecutan en tu primer escaneo y los escaneos posteriores los reutilizan.',
    STXT:
      '<b>security.txt (<a href="https://www.rfc-editor.org/rfc/rfc9116">RFC 9116</a>)</b> es un estándar para publicar información de divulgación de vulnerabilidades.<br><br>' +
      'Coloca el archivo en <code>/.well-known/security.txt</code> (preferido) o <code>/security.txt</code>.<br><br>' +
      '<b>Campos obligatorios:</b> <code>Contact</code> \u2014 dónde reportar vulnerabilidades (correo, URL o teléfono). ' +
      '<code>Expires</code> \u2014 fecha ISO 8601 a partir de la cual el archivo no debe ser confiable.<br><br>' +
      '<b>Campos opcionales:</b> <code>Encryption</code> (URL de clave GPG), <code>Policy</code> (URL de política de divulgación), ' +
      '<code>Acknowledgments</code>, <code>Preferred-Languages</code>, <code>Canonical</code>, <code>Hiring</code>.<br><br>' +
      '<b>Ejemplo de archivo:</b><br>' +
      '<code>Contact: mailto:security@example.com</code><br>' +
      '<code>Contact: https://example.com/security/report</code><br>' +
      '<code>Expires: 2027-01-01T00:00:00Z</code><br>' +
      '<code>Encryption: https://example.com/pgp-key.asc</code><br>' +
      '<code>Policy: https://example.com/security/policy</code><br>' +
      '<code>Preferred-Languages: es, en</code><br>' +
      '<code>Canonical: https://example.com/.well-known/security.txt</code><br><br>' +
      'Usa <a href="https://securitytxt.org/">securitytxt.org</a> para generar y firmar tu archivo.',
    WHOIS:
      '<b>WHOIS / RDAP</b> proporciona datos de registro de dominio mediante el Protocolo de Acceso a Datos de Registro (<a href="https://www.rfc-editor.org/rfc/rfc7480">RFC 7480</a>).<br><br>' +
      '<b>Bloqueos:</b> <code>clientTransferProhibited</code>, <code>clientDeleteProhibited</code> y <code>clientUpdateProhibited</code> los establece el registrador; las variantes <code>server*</code> son un bloqueo de registro, en el que cualquier cambio requiere verificación fuera de banda. <code>pendingTransfer</code> significa que hay una transferencia en curso. Algunos registros (p. ej. .no y .de) no publican ningún código de estado. La fila <b>DNSSEC (registro)</b> muestra si el registro tiene registros DS para la delegación, comparado con lo que dice el DNS.<br><br>' +
      'Los datos se obtienen del servidor RDAP autoritativo para el TLD del dominio a través de <code>rdap.org</code>.<br><br>' +
      '<b>Campos principales:</b> <b>Registrador</b> \u2014 quién gestiona el registro. ' +
      '<b>Vence</b> \u2014 cuándo debe renovarse el registro. ' +
      '<b>Estado</b> \u2014 bloqueos del dominio (p. ej. <code>clientTransferProhibited</code> impide transferencias no autorizadas).<br><br>' +
      'RDAP reemplaza el antiguo protocolo WHOIS de texto plano (<a href="https://www.rfc-editor.org/rfc/rfc3912">RFC 3912</a>) con una API estructurada basada en JSON.<br><br>' +
      '<b>Nota:</b> Un dominio creado recientemente es un indicador reconocido de menor confianza y mayor riesgo de ser utilizado para distribución de malware, phishing o fraude. ' +
      'Si estás verificando un dominio que no posees ni controlas, trata una fecha de creación muy reciente como señal de advertencia y aplica precaución y verificación adicional antes de interactuar con cualquier correo o servicio de ese dominio.',
    BIMI:
      '<b>BIMI se considera ampliamente una herramienta de marketing que no aporta ningún valor de seguridad adicional a nadie. Mostrar un logotipo en un buzón de correo para "demostrar" que es el remitente real es como cualquier imagen GIF que diga "100% garantizado". Si aun así quieres pagar a las CAs por ello, adelante.</b><br><br>' +
      '<b>BIMI (Brand Indicators for Message Identification)</b> permite a las organizaciones mostrar su logotipo en los clientes de correo que lo admiten (p. ej. Gmail, Apple Mail, Yahoo).<br><br>' +
      '<b>Registro DNS:</b> Se publica como un registro TXT en <code>default._bimi.<dominio></code>.<br><br>' +
      '<b>l= (URL del logotipo):</b> Una URL que apunta a un archivo SVG del logotipo. Necesario para que BIMI funcione. ' +
      'El SVG debe ser una imagen cuadrada y segura para perfiles, alojada sobre HTTPS.<br><br>' +
      '<b>a= (evidencia de autoridad):</b> Una URL que apunta a un Verified Mark Certificate (VMC) emitido por una CA autorizada (p. ej. DigiCert, Entrust). ' +
      'La mayoría de los principales clientes (incluido Gmail) lo requieren para mostrar el logotipo. Sin VMC, el registro es solo informativo.<br><br>' +
      '<b>Requisitos:</b> DMARC debe estar en modo de aplicación <code>p=quarantine</code> o <code>p=reject</code>. ' +
      'BIMI no afecta directamente a la seguridad del correo \u2014 es una característica de visibilidad de marca que recompensa una aplicación sólida de DMARC.',
    PTR:
      '<b>Los registros PTR</b> (registros de puntero) mapean direcciones IP a nombres de host \u2014 lo inverso de los registros A/AAAA.<br><br>' +
      '<b>FCrDNS (Forward-Confirmed reverse DNS):</b> Un registro PTR está "confirmado por adelantado" cuando el valor PTR resuelve hacia adelante a la IP original. ' +
      'Muchos filtros de spam y MTAs receptores comprueban FCrDNS para los hosts MX. Una coincidencia genera confianza; un PTR ausente o no coincidente puede aumentar las puntuaciones de spam.<br><br>' +
      '<b>IPv4:</b> Invertido como <code>d.c.b.a.in-addr.arpa</code>. ' +
      '<b>IPv6:</b> Expandido a 32 dígitos hexadecimales, invertido y añadido con <code>.ip6.arpa</code>.<br><br>' +
      '<b>Esta comprobación</b> resuelve los registros A y AAAA para cada host MX, consulta el PTR para cada IP y verifica si el valor PTR coincide con el nombre de host MX (comprobación FCrDNS relajada). ' +
      'No afecta a la calificación global.',
    // Keys added in later releases — backfilled
    DMARCBIS:
      '<b>DMARCbis</b> es la revisi\u00f3n de DMARC de 2026, publicada como tres documentos: ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9989">RFC 9989</a> (el protocolo), ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9990">RFC 9990</a> (informes agregados) y ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc9991">RFC 9991</a> (informes de fallo). ' +
      'Los registros escritos para RFC 7489 siguen funcionando \u2014 nada de esto rompe una implementaci\u00f3n existente \u2014 pero varias etiquetas han cambiado de estado.<br><br>' +
      '<b>Qu\u00e9 ha cambiado:</b><br>' +
      '\u2022 <code>pct=</code> desaparece (Ap\u00e9ndice A.6). Los receptores aplicaban los porcentajes parciales de forma inconsistente; solo <code>pct=0</code> result\u00f3 \u00fatil, y ahora es <code>t=y</code>.<br>' +
      '\u2022 <code>t=</code> (modo de prueba) es nueva: con <code>t=y</code> los receptores aplican un nivel por debajo de la pol\u00edtica publicada \u2014 <code>reject</code> act\u00faa como <code>quarantine</code>, y <code>quarantine</code> como <code>none</code>.<br>' +
      '\u2022 <code>np=</code> fija la pol\u00edtica para subdominios <b>inexistentes</b>, por separado de <code>sp=</code>, que cubre los existentes.<br>' +
      '\u2022 <code>psd=</code> marca un dominio de sufijo p\u00fablico (<code>y</code>) o fija un dominio organizacional (<code>n</code>). Cualquiera de los dos valores finaliza el recorrido del \u00e1rbol.<br>' +
      '\u2022 <code>rf=</code> y <code>ri=</code> son hist\u00f3ricas en el registro de etiquetas (\u00a79.3) y deben eliminarse.<br><br>' +
      '<b>Recorrido del \u00e1rbol DNS (\u00a74.10):</b> la Public Suffix List ya no se usa para hallar el dominio organizacional. ' +
      'Los receptores consultan <code>_dmarc.</code> en el dominio autor y luego suben etiqueta a etiqueta \u2014 como m\u00e1ximo ocho consultas \u2014 hasta encontrar un registro ' +
      'o uno que lleve <code>psd=y</code> / <code>psd=n</code>. Esto permite a las grandes organizaciones publicar pol\u00edtica en varios puntos de su espacio de nombres.<br><br>' +
      '<b>Autorizaci\u00f3n de destino externo (RFC 9990 \u00a74, RFC 9991 \u00a75):</b> si <code>rua=</code> o <code>ruf=</code> apunta fuera de tu dominio organizacional, ' +
      'ese destino debe publicar <code>tu-dominio._report._dmarc.su-dominio</code> con al menos <code>v=DMARC1</code>. ' +
      'Sin ello los receptores <b>deben</b> descartar la URI, y no recibir\u00e1s nada sin aviso alguno. ' +
      'Un destino dispuesto a aceptar informes de cualquiera puede publicar un comod\u00edn en <code>*._report._dmarc.</code><br><br>' +
      '<b>Divisi\u00f3n de los informes:</b> los informes agregados (XML) son RFC 9990; los informes de fallo por mensaje son RFC 9991, que adem\u00e1s actualiza el formato ARF de ' +
      '<a href="https://www.rfc-editor.org/rfc/rfc6591">RFC 6591</a> con un campo <code>Identity-Alignment</code> y hace obligatorio el selector DKIM en los informes.',
    AUTOCONF:
      '<b>La autoconfiguración del cliente de correo</b> es la forma en que un programa de correo convierte una dirección como <code>usuario@example.com</code> en nombres de servidor, puertos y ajustes de cifrado sin que el usuario los escriba. Tres mecanismos pueden verse desde el DNS y uno desde una base de datos pública:<br><br>' +
      '<b>Registros SRV</b> (<a href="https://www.rfc-editor.org/rfc/rfc6186">RFC 6186</a>): <code>_submission._tcp</code>, <code>_imap._tcp</code>, <code>_imaps._tcp</code>, <code>_pop3._tcp</code> y <code>_pop3s._tcp</code>, más <code>_submissions._tcp</code> de <a href="https://www.rfc-editor.org/rfc/rfc8314">RFC 8314</a> y <code>_jmap._tcp</code> de <a href="https://www.rfc-editor.org/rfc/rfc8620">RFC 8620</a>. Un destino «<code>.</code>» indica explícitamente que el servicio no se ofrece (<a href="https://www.rfc-editor.org/rfc/rfc2782">RFC 2782</a>). RFC 8314 recomienda TLS implícito (<code>imaps</code> 993, <code>pop3s</code> 995, <code>submissions</code> 465) frente a STARTTLS en los puertos de texto claro. Si la respuesta SRV no está validada con DNSSEC, un cliente que siga RFC 6186 §6 / <a href="https://www.rfc-editor.org/rfc/rfc7817">RFC 7817</a> debe comprobar el certificado del servidor contra el dominio de correo, no contra el destino SRV.<br><br>' +
      '<b>Microsoft Autodiscover</b>: Outlook consulta el SRV <code>_autodiscover._tcp.<domain></code> y <code>autodiscover.<domain></code> (un CNAME a <code>autodiscover.outlook.com</code> significa Microsoft 365), tras probar primero <code>https://<domain>/autodiscover/autodiscover.xml</code> directamente — ese paso HTTPS no puede probarse desde un navegador.<br><br>' +
      '<b>Autoconfig de Mozilla</b>: Thunderbird obtiene <code>config-v1.1.xml</code> de <code>autoconfig.<domain></code> o de <code>https://<domain>/.well-known/autoconfig/mail/</code>, y consulta la ISPDB central en <code>autoconfig.thunderbird.net</code>, que esta pestaña consulta directamente (envía cabeceras CORS correctas, así que el nombre del dominio analizado se envía a Mozilla). Apple Mail e iOS no tienen mecanismo DNS; adivinan y usan perfiles de configuración.<br><br>' +
      '<b>Esta comprobación</b> consulta los siete nombres SRV, el SRV y el host de Autodiscover, el host autoconfig y la ISPDB, resuelve cada destino SRV y señala los servicios solo en texto claro, los destinos no resolubles o CNAME y los puertos no estándar. ' +
      '<b>No</b> afecta a la puntuación de seguridad general — solo informativa.',
    SELECTOR_HELP:
      '<b>\u00bfQu\u00e9 es un selector DKIM?</b> Un selector es una etiqueta corta (p. ej. <code>google</code>) que indica a los servidores receptores qu\u00e9 clave p\u00fablica usar para verificar la firma DKIM de un correo. ' +
      'Un dominio puede tener varios selectores \u2014 uno por proveedor de correo o para la rotaci\u00f3n de claves.<br><br>' +
      '<b>C\u00f3mo encontrar tus selectores:</b> Abre cualquier correo recibido, visualiza sus cabeceras completas y busca la cabecera <code>DKIM-Signature:</code>. ' +
      'La etiqueta <code>s=</code> contiene el nombre del selector. En Gmail: men\u00fa de tres puntos \u2192 \u201cMostrar original\u201d.<br><br>' +
      '<b>\u00bfPor qu\u00e9 a\u00f1adir extras aqu\u00ed?</b> Aproximadamente 85 nombres de selector comunes se comprueban autom\u00e1ticamente. ' +
      'Usa este campo para selectores personalizados o poco comunes.',
    IPV6:
      '<b>IPv6 (Internet Protocol version 6)</b> es el sucesor de IPv4 y usa direcciones de 128 bits para resolver el agotamiento del espacio de direcciones de 32 bits de IPv4. ' +
      'Una infraestructura de correo sin IPv6 no puede recibir mensajes de remitentes solo-IPv6 y puede volverse inalcanzable a medida que crece el acceso solo-IPv6.<br><br>' +
      '<b>Por qué importa para el correo:</b> los hosts MX sin registros AAAA no pueden aceptar correo de servidores emisores solo-IPv6. ' +
      'Los hosts NS sin IPv6 no pueden responder consultas DNS de resolutores solo-IPv6. ' +
      'Ambos casos provocan fallos de entrega silenciosos y difíciles de diagnosticar.<br><br>' +
      '<b>Requisitos gubernamentales obligatorios \u2014 países seleccionados:</b><br>' +
      '<b>Noruega:</b> <a href="https://lovdata.no/dokument/SF/forskrift/2013-04-05-959">Forskrift om IT-standarder i offentlig forvaltning \u00a712</a> \u2014 IPv6 obligatorio para los servicios públicos desde el 1 de enero de 2023; prórroga máxima hasta el 1 de enero de 2025.<br>' +
      '<b>Países Bajos:</b> <a href="https://www.forumstandaardisatie.nl/open-standaarden/ipv6">IPv6 en la lista «pas toe of leg uit» (cumplir o explicar) del Forum Standaardisatie</a> desde 2010; un acuerdo de toda la administración exige que los organismos públicos sean accesibles por IPv6 para <b>sitios web y correo electrónico</b> desde el 31 de diciembre de 2021.<br>' +
      '<b>EE. UU.:</b> Memorando OMB M-21-07 \u2014 las agencias federales deben operar infraestructura solo-IPv6 para el año fiscal 2025.<br>' +
      '<b>Alemania:</b> <a href="https://www.it-planungsrat.de/beschluss/beschluss-2018-42">Netzstrategie 2030 für die öffentliche Verwaltung</a> \u2014 decisión del IT-Planungsrat (2019) que introduce IPv6 en las redes de la administración pública.<br>' +
      '<b>India:</b> DoT National Telecom Policy 2018 \u2014 IPv6 obligatorio para ISP, administración y entidades del sector público.<br>' +
      '<b>China:</b> MIIT IPv6 Scale Deployment Action Plan 2017 \u2014 despliegue completo en ISP, administración y grandes plataformas.<br>' +
      '<b>UE:</b> <a href="https://ec.europa.eu/isa2/sites/default/files/ipv6_framework_for_european_governments_0.pdf">IPv6 Framework for European Governments</a> \u2014 orientación para los estados miembros, <b>no</b> un mandato vinculante. En contra de una afirmación habitual, NIS2 no exige IPv6.<br><br>' +
      '<b>Sin requisito vinculante:</b> <b>Suecia</b>: PTS recomienda IPv6 y propuso en 2022 exigirlo a organismos, municipios y regiones para sitios web, correo y DNS, pero no se ha aprobado normativa. <b>Dinamarca</b>: IPv6 no forma parte de los requisitos técnicos mínimos para las autoridades estatales.<br><br>' +
      'Esta comprobación consulta los registros AAAA del propio dominio, de todos los hosts MX y de todos los hosts NS. ' +
      '<b>No</b> afecta a la puntuación de seguridad global \u2014 es solo informativa.'
  },
};
