// Español (es) — traducción para DNS Email Security Checker

const LANG_ES = {

  // ── s: cadenas estáticas ──────────────────────────────────────────────────
  s: {
    APP_TITLE:           'Verificador de seguridad DNS para correo',
    APP_SUBTITLE:        'Comprueba DNSSEC, MX, SPF, DKIM y más para cualquier dominio',
    LABEL_DOMAIN:        'Dominio',
    LABEL_SELECTORS:     'Selectores DKIM adicionales (separados por coma)',
    BTN_CHECK:           'Verificar',
    BTN_CHECKING:        'Verificando\u2026',
    BTN_COPY_LINK:       '\uD83D\uDD17 Copiar enlace',
    BTN_COPIED:          '\u2713 \u00a1Copiado!',
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

    ERR_INVALID_DOMAIN:  'no parece un dominio válido.',
    ERR_CHECK_FAILED:    'Comprobación fallida',
    ERR_PREFIX:          'Error: ',

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

    MX_HOST_DETAILS:     'Detalles del servidor MX',
    MX_NO_DNSSEC:        'Sin DNSSEC',
    MX_SIGNED_UNVAL:     '\u26a0 Firmado, no validado',
    MX_RRSET_WARN:       '\u26a0 El conjunto MX RRset no está validado por DNSSEC \u2014 no se pudo verificar criptográficamente la lista de servidores de correo.',
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
    DKIM_PROVIDER_REF:   'Referencia del proveedor',
    DKIM_TH_PROVIDER:    'Proveedor',
    DKIM_TH_SELECTORS:   'Selectores predeterminados',
    DKIM_TH_INFRA:       'Infraestructura',
    DKIM_AUTO_TESTED_LABEL: 'selectores probados automáticamente',
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
    CAA_ISSUE_PROHIBITED:'Emisión de certificados prohibida para todas las CAs (issue ";")',
    CAA_NO_IODEF:        'Sin etiqueta iodef= \u2014 las infracciones de política de CA no serán notificadas',

    RPKI_HOST_DETAILS:   'Detalles del host',
    RPKI_NO_IPS:         'No se resolvieron IPs',
    RPKI_ASPA_TITLE:     'ASPA (Autorización de proveedor de AS)',
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
    BIMI_LOGO_OK:        'URL del logotipo presente',
    BIMI_AUTHORITY_OK:   'Evidencia de autoridad (VMC) presente',

    PTR_HOST_DETAILS:    'Detalles del host',
    PTR_NO_MX:           'No hay servidores MX para comprobar registros PTR',
    PTR_MATCH:           'FCrDNS confirmado \u2014 PTR coincide con el nombre del servidor MX',
    PTR_MISMATCH:        'PTR presente pero no coincide con el nombre del servidor MX',
    PTR_MISSING:         'No se encontró registro PTR',
  },

  // ── d: cadenas dinámicas (funciones flecha) ───────────────────────────────
  d: {
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
    SPF_REDIRECT:          v => 'redirect=' + v + ' presente \u2014 las políticas anidadas no se siguen en esta comprobación',
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
    PTR_VALUE:             v => 'PTR: ' + v,
  },

  // ── x: textos de explicación (HTML) ──────────────────────────────────────
  x: {
    DMARC:
      '<b>DMARC (Domain-based Message Authentication, Reporting and Conformance, <a href="https://www.rfc-editor.org/rfc/rfc7489">RFC 7489</a>)</b> ' +
      'une SPF y DKIM con una política que indica a los receptores qué hacer cuando falla la autenticación.<br><br>' +
      '<b>Política (p=):</b> <b>reject</b> \u2014 si falla la autenticación, el mensaje se descarta (más fuerte). ' +
      '<b>quarantine</b> \u2014 enviar a spam. <b>none</b> \u2014 solo monitoreo, sin acción.<br><br>' +
      '<b>Alineación de identificadores:</b> DMARC requiere que el dominio en la cabecera <code>From:</code> se alinee con el dominio autenticado por SPF o DKIM. ' +
      '<b>Relajada</b> (por defecto) permite coincidencias de dominio organizacional; <b>estricta</b> (<code>adkim=s</code> / <code>aspf=s</code>) requiere coincidencia exacta.<br><br>' +
      '<b>Informes:</b> <code>rua=</code> recibe informes JSON agregados (recomendado). ' +
      '<code>ruf=</code> recibe informes forenses por mensaje (sensible \u2014 usar con precaución).<br><br>' +
      '<b>Política de subdominio (sp=):</b> Si se omite, los subdominios heredan <code>p=</code>. ' +
      'Usa <code>sp=reject</code> para proteger explícitamente todos los subdominios.<br><br>' +
      '<b>pct=:</b> Aplica la política al porcentaje indicado de mensajes que fallan. 100 (por defecto) significa aplicación completa.<br><br>' +
      '<b>Ejemplos de registros DNS:</b><br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"</code> — solo monitoreo<br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc@example.com; sp=quarantine"</code> — cuarentena<br>' +
      '<code>_dmarc.example.com. TXT "v=DMARC1; p=reject; adkim=r; aspf=r; pct=100; rua=mailto:dmarc@example.com; ruf=mailto:dmarc-forensic@example.com; sp=reject"</code> — aplicación completa',
    DNSSEC:
      '<b>¿Qué es DNSSEC?</b> DNSSEC (<a href="https://www.rfc-editor.org/rfc/rfc4033">RFC 4033</a>) añade firmas criptográficas a los registros DNS, ' +
      'previniendo el envenenamiento de caché y los ataques de intermediario. ' +
      'El <b>indicador AD</b> (Authentic Data) del resolver de Cloudflare confirma que toda la cadena desde la raíz hasta este dominio está validada.<br><br>' +
      '<b>Calificación de algoritmos</b> según <a href="https://www.rfc-editor.org/rfc/rfc8624">RFC 8624</a>: <b>Ed25519</b> (alg 15) y <b>ECDSA P-256</b> (alg 13) son los más fuertes. ' +
      'RSA/SHA-256 (alg 8) es aceptable. RSA/SHA-1 (alg 5) y las variantes DSA son débiles o inseguros.<br><br>' +
      '<b>DNSSEC habilita DANE:</b> Sin DNS validado por DNSSEC, los registros TLSA no son de confianza \u2014 ' +
      'un atacante podría sustituir registros TLSA falsos.',
    MX:
      '<b>Los registros MX (Mail eXchange)</b> (<a href="https://www.rfc-editor.org/rfc/rfc5321">RFC 5321</a>) indican a otros servidores dónde entregar el correo de tu dominio. ' +
      'Los números de prioridad más bajos se intentan primero (prioridad 10 antes que 20).<br><br>' +
      '<b>Por qué importa DNSSEC en MX:</b> Un atacante que pueda falsificar registros MX podría redirigir todo el correo entrante. ' +
      'Los registros MX validados por DNSSEC evitan esto. El DNSSEC de cada nombre de host MX se comprueba en el ápex de su zona.',
    DANE:
      '<b>DANE</b> (<a href="https://www.rfc-editor.org/rfc/rfc7672">RFC 7672</a>) usa registros TLSA (<a href="https://www.rfc-editor.org/rfc/rfc6698">RFC 6698</a>) para permitir que los servidores de correo verifiquen certificados TLS ' +
      'sin depender de CAs comerciales. Se consulta en <b>_25._tcp.&lt;mx-hostname&gt;</b>.<br><br>' +
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
      'publicada en <code>&lt;selector&gt;._domainkey.&lt;domain&gt;</code>. ' +
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
    TLSRPT:
      '<b>TLS-RPT (<a href="https://www.rfc-editor.org/rfc/rfc8460">RFC 8460</a>)</b> permite recibir informes de fallos TLS de los servidores de correo remitentes. ' +
      'Se publica como un registro TXT en <code>_smtp._tls.&lt;dominio&gt;</code>.<br><br>' +
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
      'Registro DNS en <code>_mta-sts.&lt;dominio&gt;</code>; ' +
      'política en <code>https://mta-sts.&lt;dominio&gt;/.well-known/mta-sts.txt</code>.<br><br>' +
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
      'RPKI protege la infraestructura de correo del secuestro de rutas BGP que podría redirigir o interceptar el tráfico de correo.',
    ASPA:
      '<b>ASPA (Autonomous System Provider Authorization, <a href="https://www.rfc-editor.org/rfc/rfc9582">RFC 9582</a>)</b> permite a un AS declarar qué proveedores upstream está autorizado a utilizar. ' +
      'Los registros ASPA publicados permiten detectar filtraciones de rutas: si el tráfico llega a través de un proveedor no autorizado, los routers compatibles con ASPA pueden rechazarlo.<br><br>' +
      '<b>Publicado</b> \u2014 existe un registro ASPA con proveedores declarados. ' +
      '<b>Sin ASPA</b> \u2014 no hay registro publicado; las filtraciones de rutas que involucren a este AS no pueden ser detectadas por routers compatibles con ASPA.<br><br>' +
      'Esta comprobación lee los datos ASPA obtenidos durante la comprobación RPKI, mostrando los registros de autorización de proveedor para todos los ASN asociados a los hosts NS y MX del dominio.<br><br>' +
      '<b>Nota:</b> RFC 9582 es aún un estándar propuesto y el despliegue real es actualmente muy limitado. ' +
      'Por ello, la ausencia de registros ASPA no afecta tu puntuación \u2014 esta comprobación es puramente informativa por ahora. ' +
      'No obstante, vale la pena preguntar a tu proveedor de hosting o ISP si están siguiendo el desarrollo de ASPA y considerando su implementación.',
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
      '<b>Registro DNS:</b> Se publica como un registro TXT en <code>default._bimi.&lt;dominio&gt;</code>.<br><br>' +
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
  },
};
