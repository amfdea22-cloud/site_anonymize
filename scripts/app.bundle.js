// Generated from modular scripts/ (icons.js, data.js, sections.js, modals.js, main.js)
(() => {
'use strict';
// @ts-check

/**
 * Conjunto modular de ícones SVG vetoriais (estilo linear 24x24, stroke 2).
 * @param {string} name
 * @param {number} [size=18]
 * @param {string} [color='currentColor']
 * @param {string} [extraClass='']
 * @returns {string}
 */
function icon(name, size = 18, color = 'currentColor', extraClass = '') {
  /** @type {Record<string, string>} */
  const paths = {
    'shield-check':
      '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    'shield-alert':
      '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    sparkles:
      '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',
    'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    calendar:
      '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    'check-circle':
      '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
    'x-circle':
      '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
    'alert-triangle':
      '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    'alert-circle':
      '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    'scan-text':
      '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 8h8"/><path d="M7 12h10"/><path d="M7 16h6"/>',
    building:
      '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
    scale:
      '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
    'file-search':
      '<path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="m9 18-1.5-1.5"/><circle cx="5" cy="14" r="3"/>',
    fingerprint:
      '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>',
    cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
    landmark:
      '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
    sliders:
      '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
    layers:
      '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    ban: '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
    database:
      '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    'file-text':
      '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    workflow:
      '<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>',
    'help-circle':
      '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    cookie:
      '<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/>',
    calculator:
      '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
    table:
      '<path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/>',
    bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
    server:
      '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    globe:
      '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
    plug: '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  };

  const inner = paths[name] || paths['shield-check'];
  const cls = extraClass ? ` class="${extraClass}"` : '';
  return `<svg${cls} xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}

/**
 * Símbolo vetorial oficial da logomarca ANONYMIZE (Monograma "A" + Barra de Tarjamento Irreversível).
 * @param {number} [size=36]
 * @param {string} [uid='hdr']
 * @returns {string}
 */
function brandMarkSvg(size = 36, uid = 'hdr') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="anm-bg-${uid}" x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#0F1D38" />
        <stop offset="100%" stop-color="#060D1A" />
      </linearGradient>
      <linearGradient id="anm-bd-${uid}" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#00D4FF" />
        <stop offset="55%" stop-color="#2563EB" />
        <stop offset="100%" stop-color="#1E3A8A" />
      </linearGradient>
      <linearGradient id="anm-bar-${uid}" x1="16" y1="36" x2="48" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#00E5FF" />
        <stop offset="100%" stop-color="#38BDF8" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#anm-bg-${uid})" stroke="url(#anm-bd-${uid})" stroke-width="2.5" />
    <path d="M32 13L16.5 49H23.2L32 27.6L40.8 49H47.5L32 13Z" fill="#F8FAFC" />
    <rect x="17" y="34.5" width="30" height="7" rx="3.5" fill="url(#anm-bar-${uid})" />
    <rect x="22.5" y="37" width="11" height="2" rx="1" fill="#060D1A" opacity="0.72" />
    <circle cx="40.5" cy="38" r="1.4" fill="#060D1A" opacity="0.72" />
  </svg>`;
}


// @ts-check

/** @typedef {'pt' | 'en' | 'es'} LangCode */

/** @type {Record<LangCode, { htmlLang: string, title: string }>} */
const PAGE_META = {
  pt: {
    htmlLang: 'pt-BR',
    title: 'ANONYMIZE — Anonimização Irreversível de Dados e Tarjamento com IA | LGPD + LAI',
  },
  en: {
    htmlLang: 'en',
    title: 'ANONYMIZE — Irreversible Data Anonymization & AI Document Redaction | LGPD + FOI',
  },
  es: {
    htmlLang: 'es',
    title: 'ANONYMIZE — Anonimización Irreversible de Datos y Tachado con IA | LGPD + LAI',
  },
};

/**
 * Dicionário editorial e técnico completo: chave em Português (texto normalizado) -> { en, es }.
 * @type {Record<string, { en: string, es: string }>}
 */
const DICT = {
  // Header & Mega-Menus
  'Produtos': { en: 'Products', es: 'Productos' },
  'Soluções': { en: 'Solutions', es: 'Soluciones' },
  'Recursos': { en: 'Resources', es: 'Recursos' },
  'Planos': { en: 'Pricing', es: 'Planes' },
  'Login do Cliente': { en: 'Client Login', es: 'Acceso Clientes' },
  'Criar conta grátis': { en: 'Create free account', es: 'Crear cuenta gratis' },
  'Testar IA Grátis': { en: 'Try AI Free', es: 'Probar IA Gratis' },
  'Perguntas Frequentes (FAQ)': { en: 'Frequently Asked Questions (FAQ)', es: 'Preguntas Frecuentes (FAQ)' },
  'Suíte do Ciclo Documental': { en: 'Document Lifecycle Suite', es: 'Suite del Ciclo Documental' },
  'Escala, Portais & API': { en: 'Scale, Portals & API', es: 'Escala, Portales y API' },
  'Por Setor & Compliance': { en: 'By Sector & Compliance', es: 'Por Sector y Cumplimiento' },
  'Ferramentas & Diagnóstico': { en: 'Tools & Diagnostics', es: 'Herramientas y Diagnóstico' },
  'Base Técnica LGPD': { en: 'LGPD Technical Base', es: 'Base Técnica LGPD' },
  'Principal': { en: 'Core', es: 'Principal' },
  'Novo': { en: 'New', es: 'Nuevo' },
  'Interativo': { en: 'Interactive', es: 'Interactivo' },
  'Tarjamento Irreversível': { en: 'Irreversible Redaction', es: 'Tachado Irreversible' },
  'Ocultação definitiva em PDFs, textos, áudios e planilhas com auditoria.': {
    en: 'Permanent redaction across PDFs, texts, audio, and spreadsheets with audit trail.',
    es: 'Ocultación definitiva en PDF, textos, audios y hojas de cálculo con auditoría.',
  },
  'Visualizador Seguro de Processos': { en: 'Secure Case File Viewer', es: 'Visor Seguro de Expedientes' },
  'Consulta sob demanda de autos extensos, controle por unidade e ICP-Brasil.': {
    en: 'On-demand viewing of large case files, unit-based access control, and digital signatures.',
    es: 'Consulta bajo demanda de expedientes extensos, control por unidad y firma digital.',
  },
  'OCR Neural de Acervos': { en: 'Neural Archive OCR', es: 'OCR Neuronal de Archivos' },
  'Digitalizados e imagens convertidos em lote para PDFs pesquisáveis.': {
    en: 'Scanned documents and images batch-converted into searchable PDFs.',
    es: 'Documentos escaneados e imágenes convertidos por lotes en PDF buscables.',
  },
  'IA Conversacional (RAG Local)': { en: 'Conversational AI (Local RAG)', es: 'IA Conversacional (RAG Local)' },
  'Pergunte aos autos e receba respostas fundamentadas sem expor dados.': {
    en: 'Ask questions to case files and get grounded answers without exposing data.',
    es: 'Consulta expedientes y obtén respuestas fundamentadas sin exponer datos.',
  },
  'Extração Estruturada com IA': { en: 'AI Structured Extraction', es: 'Extracción Estructurada con IA' },
  'Transforme lotes de PDFs, notas e espelhos em planilhas, CSV ou JSON.': {
    en: 'Turn batches of PDFs, invoices, and reports into spreadsheets, CSV, or JSON.',
    es: 'Transforma lotes de PDF, facturas e informes en hojas de cálculo, CSV o JSON.',
  },
  'Anonimização Multiformato': { en: 'Multi-Format Anonymization', es: 'Anonimización Multiformato' },
  'PDF, texto livre, áudio, Excel com k-anonimato e dados sintéticos.': {
    en: 'PDF, free text, audio, Excel with k-anonymity, and synthetic data.',
    es: 'PDF, texto libre, audio, Excel con k-anonimato y datos sintéticos.',
  },
  'Proxy para Portais e Sites': { en: 'Portal & Website Proxy', es: 'Proxy para Portales y Sitios' },
  'Sanitize automaticamente todo PDF publicado no seu portal sem código.': {
    en: 'Automatically sanitize every PDF published on your portal with zero code.',
    es: 'Sanitiza automáticamente cada PDF publicado en tu portal sin programar.',
  },
  'API REST & Conectores Nuvem': { en: 'REST API & Cloud Connectors', es: 'API REST y Conectores Cloud' },
  'Integração com SEI, PJe, Drive, OneDrive, SSO/SAML e Regex.': {
    en: 'Integration with SEI, PJe, Drive, OneDrive, SSO/SAML, and Regex.',
    es: 'Integración con SEI, PJe, Drive, OneDrive, SSO/SAML y Regex.',
  },
  'Simulador Interativo ao Vivo': { en: 'Live Interactive Simulator', es: 'Simulador Interactivo en Vivo' },
  'Compare tarja falsa vs. remoção real e teste o Ctrl+C na hora.': {
    en: 'Compare fake black boxes vs. real removal and test Ctrl+C instantly.',
    es: 'Compara el tachado falso frente a la eliminación real y prueba Ctrl+C al instante.',
  },
  'Órgãos Públicos & LAI': { en: 'Public Sector & FOI (LAI)', es: 'Sector Público y LAI' },
  'Transparência ativa, e-SIC/Fala.BR, SEI e conformidade com a Lei 12.527/2011.': {
    en: 'Active transparency, FOI requests, SEI workflows, and Law 12.527/2011 compliance.',
    es: 'Transparencia activa, solicitudes LAI, SEI y cumplimiento de la Ley 12.527/2011.',
  },
  'Jurídico & Tribunais': { en: 'Legal & Courts', es: 'Jurídico y Tribunales' },
  'Petições, sentenças, acórdãos, PJe e contratos em due diligence.': {
    en: 'Filings, rulings, court decisions, PJe, and due diligence contracts.',
    es: 'Demandas, sentencias, fallos, PJe y contratos en due diligence.',
  },
  'Compliance & DPO': { en: 'Compliance & DPO', es: 'Cumplimiento y DPO' },
  'Governança, evidência auditável SHA-256 e prestação de contas à ANPD.': {
    en: 'Governance, SHA-256 auditable evidence, and accountability to regulators.',
    es: 'Gobernanza, evidencia auditable SHA-256 y rendición de cuentas ante la ANPD.',
  },
  'Saúde & Financeiro': { en: 'Healthcare & Finance', es: 'Salud y Finanzas' },
  'Laudos clínicos (CID), prontuários, extratos, IRPF e sigilo bancário.': {
    en: 'Clinical reports (ICD), medical records, bank statements, and banking secrecy.',
    es: 'Informes clínicos (CIE), historiales médicos, extractos y secreto bancario.',
  },
  'Calculadora de ROI e Economia': { en: 'ROI & Savings Calculator', es: 'Calculadora de ROI y Ahorro' },
  'Simule horas, dias úteis e orçamento economizados com automação.': {
    en: 'Simulate hours, business days, and budget saved with automation.',
    es: 'Simula horas, días hábiles y presupuesto ahorrado con automatización.',
  },
  'Custo do Tarjamento Manual': { en: 'Cost of Manual Redaction', es: 'Costo del Tachado Manual' },
  'Riscos jurídicos, hora-homem oculta e impacto reputacional da inação.': {
    en: 'Legal exposure, hidden staff hours, and reputational impact of inaction.',
    es: 'Riesgos legales, horas ocultas del equipo e impacto reputacional de la inacción.',
  },
  'A Tarja Preta Não Protege': { en: 'Black Boxes Do Not Protect', es: 'La Barra Negra No Protege' },
  'Inspecione o stream interno de um PDF e entenda o vazamento oculto.': {
    en: 'Inspect a PDF internal stream and see how hidden text leaks happen.',
    es: 'Inspecciona el stream interno de un PDF y descubre la fuga oculta.',
  },
  'Conceito LGPD (Art. 5º e 12)': { en: 'LGPD Concept (Art. 5 & 12)', es: 'Concepto LGPD (Art. 5 y 12)' },
  'Meios técnicos razoáveis, reidentificação indireta e papel da ANPD.': {
    en: 'Reasonable technical means, indirect re-identification, and ANPD oversight.',
    es: 'Medios técnicos razonables, reidentificación indirecta y rol de la ANPD.',
  },
  'Anonimização vs. Pseudonimização': { en: 'Anonymization vs. Pseudonymization', es: 'Anonimización vs. Seudonimización' },
  'Tabela comparativa interativa critério a critério.': {
    en: 'Interactive criterion-by-criterion comparison table.',
    es: 'Tabla comparativa interactiva criterio por criterio.',
  },
  '6 Técnicas de Anonimização': { en: '6 Anonymization Techniques', es: '6 Técnicas de Anonimización' },
  'Generalização, Supressão, Perturbação, K-anonimato, L-diversidade e DP.': {
    en: 'Generalization, Suppression, Perturbation, K-anonymity, L-diversity & DP.',
    es: 'Generalización, Supresión, Perturbación, K-anonimato, L-diversidad y PD.',
  },
  'Guia de Implementação & FAQ': { en: 'Implementation Guide & FAQ', es: 'Guía de Implementación y FAQ' },
  'Passo a passo para bancos de dados, documentos e dúvidas frequentes.': {
    en: 'Step-by-step guide for databases, documents, and frequently asked questions.',
    es: 'Paso a paso para bases de datos, documentos y preguntas frecuentes.',
  },
  'Produtos & Plataforma': { en: 'Products & Platform', es: 'Productos y Plataforma' },
  'Suíte de 5 Produtos Documentais': { en: '5-Module Document Suite', es: 'Suite de 5 Productos Documentales' },
  'Proxy de Anonimização para Portais': { en: 'Portal Anonymization Proxy', es: 'Proxy de Anonimización para Portales' },
  'API REST, Nuvem & Regras Regex': { en: 'REST API, Cloud & Regex Rules', es: 'API REST, Nube y Reglas Regex' },
  'Soluções & Recursos': { en: 'Solutions & Resources', es: 'Soluciones y Recursos' },
  'Setor Público (LAI) & Segmentos': { en: 'Public Sector (FOI) & Industries', es: 'Sector Público (LAI) y Sectores' },
  'Planos & Escala': { en: 'Plans & Scale', es: 'Planes y Escala' },

  // Hero & Simulator
  'LGPD (Lei 13.709/2018) + LAI (Lei 12.527/2011)': {
    en: 'LGPD (Law 13.709/2018) + FOI / LAI (Law 12.527/2011)',
    es: 'LGPD (Ley 13.709/2018) + LAI (Ley 12.527/2011)',
  },
  'Anonimização irreversível e': {
    en: 'Irreversible anonymization and',
    es: 'Anonimización irreversible y',
  },
  'tarjamento de PDFs até 99% mais rápido': {
    en: 'PDF redaction up to 99% faster',
    es: 'tachado de PDF hasta un 99% más rápido',
  },
  'com IA.': { en: 'with AI.', es: 'con IA.' },
  'Testar a IA Gratuitamente': { en: 'Try AI for Free', es: 'Probar la IA Gratis' },
  'Agendar Demonstração': { en: 'Schedule a Demo', es: 'Agendar Demostración' },
  'menos trabalho manual em processos e PDFs': {
    en: 'less manual work on case files and PDFs',
    es: 'menos trabajo manual en expedientes y PDF',
  },
  'de texto residual na camada oculta': {
    en: 'residual text in hidden PDF layers',
    es: 'de texto residual en la capa oculta',
  },
  'trilha auditável para DPO e ANPD': {
    en: 'auditable trail for DPOs and regulators',
    es: 'traza auditable para DPO y ANPD',
  },
  '99% menos trabalho manual': { en: '99% less manual work', es: '99% menos trabajo manual' },
  'Escaneando com IA...': { en: 'Scanning with AI...', es: 'Escaneando con IA...' },
  'Simular Varredura IA': { en: 'Replay AI Scan', es: 'Simular Escaneo IA' },
  'Original (IA)': { en: 'Original (AI)', es: 'Original (IA)' },
  'Tarja Falsa (Risco)': { en: 'Fake Redaction (Risk)', es: 'Tachado Falso (Riesgo)' },
  'Testar Ctrl+C / Extrair': { en: 'Test Ctrl+C / Extract', es: 'Probar Ctrl+C / Extraer' },
  'Ocultar teste Ctrl+C': { en: 'Hide Ctrl+C test', es: 'Ocultar prueba Ctrl+C' },
  'Identificação': { en: 'Identity', es: 'Identificación' },
  'Saúde (Sensível)': { en: 'Health (Sensitive)', es: 'Salud (Sensible)' },
  'Bancário': { en: 'Banking', es: 'Bancario' },
  'DESPACHO ADMINISTRATIVO • PUBLICAÇÃO LAI / SEI': {
    en: 'ADMINISTRATIVE RULING • FOI / PUBLIC RECORD',
    es: 'RESOLUCIÓN ADMINISTRATIVA • PUBLICACIÓN LAI / SEI',
  },
  'OCR: ATIVO • PÁG. 01/18': { en: 'OCR: ACTIVE • PAGE 01/18', es: 'OCR: ACTIVO • PÁG. 01/18' },
  'Requerente:': { en: 'Applicant:', es: 'Solicitante:' },
  'Síntese Técnica:': { en: 'Technical Summary:', es: 'Síntesis Técnica:' },
  'Deliberação Pública:': { en: 'Public Ruling:', es: 'Deliberación Pública:' },
  '✔ EXTRAÇÃO ZERO (SEGURO)': { en: '✔ ZERO EXTRACTION (SAFE)', es: '✔ EXTRACCIÓN CERO (SEGURO)' },
  '✖ VAZAMENTO DETECTADO': { en: '✖ DATA LEAK DETECTED', es: '✖ FUGA DETECTADA' },
  'Aguardando sanitização definitiva': {
    en: 'Awaiting permanent sanitization',
    es: 'Esperando sanitización definitiva',
  },
  'Projetado para equipes de alta exigência regulatória': {
    en: 'Built for high-compliance regulatory teams',
    es: 'Diseñado para equipos de alta exigencia regulatoria',
  },
  'Engenharia & API': { en: 'Engineering & API', es: 'Ingeniería y API' },

  // Cost & ROI Calculator (Autoral ANONYMIZE)
  'Diagnóstico de Risco & Retorno Operacional': {
    en: 'Risk Diagnostics & Operational Return',
    es: 'Diagnóstico de Riesgo y Retorno Operativo',
  },
  'O gargalo silencioso da revisão manual de documentos': {
    en: 'The silent bottleneck of manual document review',
    es: 'El cuello de botella silencioso de la revisión manual de documentos',
  },
  'Exposição regulatória e judicial': { en: 'Regulatory & legal exposure', es: 'Exposición regulatoria y judicial' },
  'Capacidade técnica drenada': { en: 'Drained technical capacity', es: 'Capacidad técnica drenada' },
  'Ciclo caro de contenção e republicação': {
    en: 'Costly containment & republication cycle',
    es: 'Ciclo costoso de contención y republicación',
  },
  'Simulador de Retorno Operacional (ROI)': {
    en: 'Operational Return Simulator (ROI)',
    es: 'Simulador de Retorno Operativo (ROI)',
  },
  'Projete o orçamento preservado com a ANONYMIZE': {
    en: 'Project the budget preserved with ANONYMIZE',
    es: 'Proyecta el presupuesto preservado con ANONYMIZE',
  },
  'Comparar com nossos planos': { en: 'Compare with our plans', es: 'Comparar con nuestros planes' },
  'Volume mensal de páginas para sanitização': {
    en: 'Monthly page volume for sanitization',
    es: 'Volumen mensual de páginas para sanitización',
  },
  'Perfil médio de custo/hora da equipe': {
    en: 'Average hourly team cost profile',
    es: 'Perfil promedio de costo/hora del equipo',
  },
  'Orçamento Preservado / Ano': { en: 'Budget Preserved / Year', es: 'Presupuesto Preservado / Año' },
  'CAPACIDADE LIBERADA': { en: 'CAPACITY FREED', es: 'CAPACIDAD LIBERADA' },
  'horas livres/ano': { en: 'hours freed/year', es: 'horas libres/año' },
  'JORNADAS ÚTEIS': { en: 'WORKDAYS', es: 'JORNADAS HÁBILES' },
  'dias recuperados/ano': { en: 'days recovered/year', es: 'días recuperados/año' },
  'VOLUME ANUAL': { en: 'ANNUAL VOLUME', es: 'VOLUMEN ANUAL' },
  'páginas sanitizadas': { en: 'pages sanitized', es: 'páginas sanitizadas' },
  'Validar no meu cenário real': { en: 'Validate in my real scenario', es: 'Validar en mi escenario real' },
  'Copiar projeção para o financeiro': { en: 'Copy projection for finance', es: 'Copiar proyección para finanzas' },
  'Resumo copiado!': { en: 'Summary copied!', es: '¡Resumen copiado!' },

  // Modular Suite & Multiformat (Autoral ANONYMIZE)
  'Arquitetura Modular ANONYMIZE': { en: 'ANONYMIZE Modular Architecture', es: 'Arquitectura Modular ANONYMIZE' },
  'Da ingestão à publicação segura: 5 módulos integrados': {
    en: 'From ingestion to safe publication: 5 integrated modules',
    es: 'De la ingesta a la publicación segura: 5 módulos integrados',
  },
  'NÚCLEO DE PRIVACIDADE': { en: 'PRIVACY CORE', es: 'NÚCLEO DE PRIVACIDAD' },
  'LEITURA CONTROLADA': { en: 'CONTROLLED VIEWING', es: 'LECTURA CONTROLADA' },
  'DIGITALIZAÇÃO EM ESCALA': { en: 'AT-SCALE OCR', es: 'DIGITALIZACIÓN A ESCALA' },
  'CONSULTA PRIVADA • RAG': { en: 'PRIVATE Q&A • RAG', es: 'CONSULTA PRIVADA • RAG' },
  'ESTRUTURAÇÃO': { en: 'STRUCTURING', es: 'ESTRUCTURACIÓN' },
  'Motor de Sanitização Irreversível': { en: 'Irreversible Sanitization Engine', es: 'Motor de Sanitización Irreversible' },
  'Leitor Seguro de Autos': { en: 'Secure Case File Reader', es: 'Lector Seguro de Expedientes' },
  'Reconhecimento Óptico (OCR) Neural': { en: 'Neural Optical Recognition (OCR)', es: 'Reconocimiento Óptico (OCR) Neuronal' },
  'Assistente Documental Privado': { en: 'Private Document Assistant', es: 'Asistente Documental Privado' },
  'Estruturador de Dados por IA': { en: 'AI Data Structurer', es: 'Estructurador de Datos por IA' },
  'Abrir simulador ao vivo': { en: 'Open live simulator', es: 'Abrir simulador en vivo' },
  'Explorar arquitetura': { en: 'Explore architecture', es: 'Explorar arquitectura' },
  'Ver fluxo técnico': { en: 'View technical flow', es: 'Ver flujo técnico' },
  'Ver opções de implantação': { en: 'View deployment options', es: 'Ver opciones de despliegue' },
  'Conhecer integrações': { en: 'Explore integrations', es: 'Conocer integraciones' },
  'Cobertura Multicanal de Arquivos': { en: 'Multi-Channel File Coverage', es: 'Cobertura Multicanal de Archivos' },
  'Privacidade estrutural para cada formato da sua operação': {
    en: 'Structural privacy for every format in your operation',
    es: 'Privacidad estructural para cada formato de tu operación',
  },
  'AUTOS & PDFS': { en: 'CASE FILES & PDFS', es: 'EXPEDIENTES Y PDF' },
  'CORPO TEXTUAL': { en: 'FREE TEXT', es: 'CUERPO TEXTUAL' },
  'MÍDIA & VOZ': { en: 'MEDIA & VOICE', es: 'MEDIA Y VOZ' },
  'BASES TABULARES': { en: 'TABULAR DATA', es: 'BASES TABULARES' },
  'AMBIENTES DE TESTE': { en: 'TEST ENVIRONMENTS', es: 'ENTORNOS DE PRUEBA' },
  'PIPELINES': { en: 'PIPELINES', es: 'PIPELINES' },
  'Sanitização estrutural de PDFs': { en: 'Structural PDF sanitization', es: 'Sanitización estructural de PDF' },
  'Proteção de textos e despachos': { en: 'Text & filing protection', es: 'Protección de textos y escritos' },
  'Ocultação em áudios e gravações': { en: 'Audio & recording redaction', es: 'Ocultación en audios y grabaciones' },
  'Planilhas protegidas por K-anonimato': { en: 'K-anonymity spreadsheet protection', es: 'Hojas protegidas por K-anonimato' },
  'Conjuntos sintéticos estatísticos': { en: 'Statistical synthetic datasets', es: 'Conjuntos sintéticos estadísticos' },
  'Orquestração via API REST': { en: 'REST API orchestration', es: 'Orquestación vía API REST' },

  // Concept LGPD & Comparison
  'Fundamento Legal • LGPD Art. 5º, III e Art. 12': {
    en: 'Legal Foundation • LGPD Art. 5, III & Art. 12',
    es: 'Fundamento Legal • LGPD Art. 5, III y Art. 12',
  },
  'O que é anonimização de dados na LGPD — e por que a irreversibilidade decide tudo': {
    en: 'What data anonymization means under LGPD — and why irreversibility decides everything',
    es: 'Qué es la anonimización de datos en la LGPD — y por qué la irreversibilidad lo decide todo',
  },
  'Atenção ao risco de reidentificação indireta': {
    en: 'Watch out for indirect re-identification risk',
    es: 'Atención al riesgo de reidentificación indirecta',
  },
  '“Meios técnicos razoáveis e disponíveis”': {
    en: '“Reasonable and available technical means”',
    es: '“Medios técnicos razonables y disponibles”',
  },
  'Identificação direta vs. indireta': {
    en: 'Direct vs. indirect identification',
    es: 'Identificación directa vs. indirecta',
  },
  'O papel regulatório da ANPD': {
    en: 'The regulatory role of ANPD',
    es: 'El rol regulatorio de la ANPD',
  },
  'Comparativo Técnico & Jurídico • Art. 12 vs. Art. 13, §4º': {
    en: 'Technical & Legal Comparison • Art. 12 vs. Art. 13, §4',
    es: 'Comparativa Técnica y Jurídica • Art. 12 vs. Art. 13, §4',
  },
  'Visão Completa (6 critérios)': { en: 'Full View (6 criteria)', es: 'Vista Completa (6 criterios)' },
  'Destacar Impacto LGPD': { en: 'Highlight LGPD Impact', es: 'Destacar Impacto LGPD' },
  'Foco em Reversibilidade': { en: 'Focus on Reversibility', es: 'Foco en Reversibilidad' },
  'Critério': { en: 'Criterion', es: 'Criterio' },
  'Anonimização (Irreversível)': { en: 'Anonymization (Irreversible)', es: 'Anonimización (Irreversible)' },
  'Pseudonimização (Reversível)': { en: 'Pseudonymization (Reversible)', es: 'Seudonimización (Reversible)' },
  'Reversível?': { en: 'Reversible?', es: '¿Reversible?' },
  'Ainda é dado pessoal?': { en: 'Still personal data?', es: '¿Sigue siendo dato personal?' },
  'Sujeito à LGPD?': { en: 'Subject to LGPD?', es: '¿Sujeto a la LGPD?' },
  'Risco de reidentificação': { en: 'Re-identification risk', es: 'Riesgo de reidentificación' },
  'Uso típico': { en: 'Typical use', es: 'Uso típico' },
  'Exemplo prático': { en: 'Practical example', es: 'Ejemplo práctico' },
  'Não — Irreversível': { en: 'No — Irreversible', es: 'No — Irreversible' },
  'Sim — Mediante chave': { en: 'Yes — With key', es: 'Sí — Mediante clave' },
  'Não': { en: 'No', es: 'No' },
  'Sim — Permanece pessoal': { en: 'Yes — Remains personal', es: 'Sí — Sigue siendo personal' },
  'Fora do escopo*': { en: 'Out of scope*', es: 'Fuera de alcance*' },
  'Totalmente sujeito': { en: 'Fully subject', es: 'Totalmente sujeto' },
  'Residual / Mitigado': { en: 'Residual / Mitigated', es: 'Residual / Mitigado' },
  'Moderado a Alto': { en: 'Moderate to High', es: 'Moderado a Alto' },

  // Techniques
  'Engenharia de Privacidade • ISO/IEC 20889': {
    en: 'Privacy Engineering • ISO/IEC 20889',
    es: 'Ingeniería de Privacidad • ISO/IEC 20889',
  },
  'Principais técnicas de anonimização de dados': {
    en: 'Core data anonymization techniques',
    es: 'Principales técnicas de anonimización de datos',
  },
  'Generalização': { en: 'Generalization', es: 'Generalización' },
  'Supressão': { en: 'Suppression', es: 'Supresión' },
  'Perturbação (Ruído)': { en: 'Perturbation (Noise)', es: 'Perturbación (Ruido)' },
  'K-anonimato': { en: 'K-anonymity', es: 'K-anonimato' },
  'L-diversidade e T-proximidade': { en: 'L-diversity & T-closeness', es: 'L-diversidad y T-proximidad' },
  'Privacidade Diferencial': { en: 'Differential Privacy', es: 'Privacidad Diferencial' },
  'Resistência à reidentificação': { en: 'Re-identification resistance', es: 'Resistencia a la reidentificación' },
  'Preservação de utilidade analítica': { en: 'Analytical utility preservation', es: 'Preservación de utilidad analítica' },
  'Quando utilizar na prática': { en: 'When to use in practice', es: 'Cuándo utilizar en la práctica' },
  'Ponto crítico de atenção': { en: 'Critical caveat', es: 'Punto crítico de atención' },

  // Document Redaction Lab
  'Anonimização Documental • PDFs, Processos e Contratos': {
    en: 'Document Anonymization • PDFs, Case Files & Contracts',
    es: 'Anonimización Documental • PDF, Expedientes y Contratos',
  },
  'Anonimização de Documentos & Tarjamento Real vs. Falso': {
    en: 'Document Anonymization & Real vs. Fake Redaction',
    es: 'Anonimización de Documentos y Tachado Real vs. Falso',
  },
  'Colocar uma caixa preta por cima do PDF não anonimiza o documento': {
    en: 'Drawing a black box over a PDF does not anonymize the document',
    es: 'Colocar un rectángulo negro sobre un PDF no anonimiza el documento',
  },
  'Inspecionar Camada Interna do PDF': { en: 'Inspect Internal PDF Layer', es: 'Inspeccionar Capa Interna del PDF' },
  'Voltar à Visão do PDF': { en: 'Back to PDF View', es: 'Volver a la Vista del PDF' },
  'Tarjamento Falso (Editor Comum)': { en: 'Fake Redaction (Standard Editor)', es: 'Tachado Falso (Editor Común)' },
  'Tarjamento Real (Motor ANONYMIZE)': { en: 'Real Redaction (ANONYMIZE Engine)', es: 'Tachado Real (Motor ANONYMIZE)' },

  // LGPD Exceptions & LAI & Sectors
  'Quando a anonimização libera obrigações da LGPD — e como conciliar LAI + privacidade': {
    en: 'When anonymization lifts LGPD obligations — and how to balance FOI + privacy',
    es: 'Cuándo la anonimización libera obligaciones de la LGPD — y cómo equilibrar LAI + privacidad',
  },
  'Quando a anonimização libera obrigações': {
    en: 'When anonymization lifts obligations',
    es: 'Cuándo la anonimización libera obligaciones',
  },
  'Quando NÃO libera (Exceções Art. 12, §§ 1º e 2º)': {
    en: 'When it DOES NOT lift (Art. 12 §§1–2 Exceptions)',
    es: 'Cuándo NO libera (Excepciones Art. 12, §§ 1 y 2)',
  },
  'Transparência ativa em larga escala sem vazar dados de cidadãos e terceiros': {
    en: 'Active transparency at scale without leaking citizen or third-party data',
    es: 'Transparencia activa a gran escala sin filtrar datos de ciudadanos ni terceros',
  },
  'Soluções por Segmento': { en: 'Solutions by Industry', es: 'Soluciones por Sector' },
  'Arquitetura adaptada à rotina documental de cada setor': {
    en: 'Architecture tailored to each industry’s document workflows',
    es: 'Arquitectura adaptada a la rutina documental de cada sector',
  },

  // Integrations & Edge Gateway (Autoral ANONYMIZE)
  'Interoperabilidade & Identidade': {
    en: 'Interoperability & Identity',
    es: 'Interoperabilidad e Identidad',
  },
  'Interoperabilidade nativa com sua infraestrutura documental': {
    en: 'Native interoperability with your document infrastructure',
    es: 'Interoperabilidad nativa con tu infraestructura documental',
  },
  'Ver exemplo da API REST': { en: 'View REST API example', es: 'Ver ejemplo de API REST' },
  'Falar com engenharia de integração': { en: 'Talk to integration engineering', es: 'Hablar con ingeniería de integración' },
  'Catálogo de padrões brasileiros customizáveis': {
    en: 'Catalog of customizable regional & personal patterns',
    es: 'Catálogo de patrones personalizables',
  },
  'Editável por política': { en: 'Policy editable', es: 'Editable por política' },
  'Todos': { en: 'All', es: 'Todos' },
  'Documento': { en: 'Document', es: 'Documento' },
  'Financeiro': { en: 'Financial', es: 'Financiero' },
  'Jurídico': { en: 'Legal', es: 'Jurídico' },
  'Endereço': { en: 'Address', es: 'Dirección' },
  'Contato': { en: 'Contact', es: 'Contacto' },
  'Edge Privacy Gateway • Proteção em Trânsito': {
    en: 'Edge Privacy Gateway • In-Transit Protection',
    es: 'Edge Privacy Gateway • Protección en Tránsito',
  },
  'Gateway de privacidade em borda para portais públicos e corporativos': {
    en: 'Edge privacy gateway for public and enterprise portals',
    es: 'Gateway de privacidad en borde para portales públicos y corporativos',
  },
  'Camada de borda sem alterar o CMS': { en: 'Edge layer without touching your CMS', es: 'Capa de borde sin alterar el CMS' },
  'Política Zero-Leak (Fail-Closed)': {
    en: 'Zero-Leak (Fail-Closed) Policy',
    es: 'Política Zero-Leak (Fail-Closed)',
  },
  'Entrega em cache sanitizado': {
    en: 'Sanitized cached delivery',
    es: 'Entrega en caché sanitizado',
  },
  'Ativar gateway no meu portal': { en: 'Enable gateway on my portal', es: 'Activar gateway en mi portal' },
  'Especificação para desenvolvedores': { en: 'Developer specification', es: 'Especificación para desarrolladores' },

  // Implementation Guide
  'Guia Prático de Implementação': { en: 'Practical Implementation Guide', es: 'Guía Práctica de Implementación' },
  'Como implementar anonimização com rigor técnico e governança': {
    en: 'How to implement anonymization with technical rigor and governance',
    es: 'Cómo implementar la anonimización con rigor técnico y gobernanza',
  },
  'Em Documentos (PDF / SEI / PJe)': { en: 'In Documents (PDF / Case Files)', es: 'En Documentos (PDF / SEI / PJe)' },
  'Em Bancos de Dados e Sistemas': { en: 'In Databases & Systems', es: 'En Bases de Datos y Sistemas' },

  // Plans
  'Planos & Escala Corporativa / Governo': {
    en: 'Plans & Enterprise / Government Scale',
    es: 'Planes y Escala Corporativa / Gobierno',
  },
  'Comece gratuitamente e escale para milhares de páginas com auditoria completa': {
    en: 'Start for free and scale to thousands of pages with full audit trails',
    es: 'Comienza gratis y escala a miles de páginas con auditoría completa',
  },
  'Mensal': { en: 'Monthly', es: 'Mensual' },
  'Anual (economize 17%)': { en: 'Annual (save 17%)', es: 'Anual (ahorra 17%)' },
  'Grátis': { en: 'Free', es: 'Gratis' },
  'Sob consulta': { en: 'Custom', es: 'A medida' },
  'Mais escolhido': { en: 'Most popular', es: 'Más elegido' },

  // FAQ
  'Perguntas Frequentes • Referência Técnica e Jurídica': {
    en: 'Frequently Asked Questions • Technical & Legal Reference',
    es: 'Preguntas Frecuentes • Referencia Técnica y Jurídica',
  },
  'Dúvidas essenciais sobre anonimização, LGPD e tarjamento': {
    en: 'Key questions about anonymization, LGPD, and redaction',
    es: 'Dudas esenciales sobre anonimización, LGPD y tachado',
  },
  'Todas': { en: 'All', es: 'Todas' },
  'Técnico': { en: 'Technical', es: 'Técnico' },
  'Documentos': { en: 'Documents', es: 'Documentos' },
  'Setor Público': { en: 'Public Sector', es: 'Sector Público' },
  'Expandir todas': { en: 'Expand all', es: 'Expandir todas' },
  'Recolher todas': { en: 'Collapse all', es: 'Contraer todas' },
  'O que é anonimização de dados?': { en: 'What is data anonymization?', es: '¿Qué es la anonimización de datos?' },
  'Qual a diferença entre anonimização e pseudonimização?': {
    en: 'What is the difference between anonymization and pseudonymization?',
    es: '¿Cuál es la diferencia entre anonimización y seudonimización?',
  },
  'Dado anonimizado está fora da LGPD?': {
    en: 'Is anonymized data outside the scope of LGPD?',
    es: '¿Los datos anonimizados están fuera de la LGPD?',
  },
  'Quais são as principais técnicas de anonimização?': {
    en: 'What are the main anonymization techniques?',
    es: '¿Cuáles son las principales técnicas de anonimización?',
  },
  'Como anonimizar documentos em PDF?': {
    en: 'How do you anonymize PDF documents?',
    es: '¿Cómo anonimizar documentos en PDF?',
  },
  'Tarjamento e anonimização são a mesma coisa?': {
    en: 'Are redaction and anonymization the same thing?',
    es: '¿Tachado y anonimización son lo mismo?',
  },
  'A LGPD exige anonimização dos dados?': {
    en: 'Does LGPD require data anonymization?',
    es: '¿La LGPD exige la anonimización de datos?',
  },
  'Como órgãos públicos devem tratar anonimização de documentos?': {
    en: 'How should public agencies handle document anonymization?',
    es: '¿Cómo deben gestionar los organismos públicos la anonimización documental?',
  },

  // Institutional & Footer & Modals
  'Sobre a Plataforma ANONYMIZE': { en: 'About the ANONYMIZE Platform', es: 'Sobre la Plataforma ANONYMIZE' },
  'Tecnologia brasileira de conformidade documental, anonimização real e tarjamento auditável': {
    en: 'Enterprise technology for document compliance, true anonymization, and auditable redaction',
    es: 'Tecnología de cumplimiento documental, anonimización real y tachado auditable',
  },
  'Falar com um Especialista': { en: 'Talk to a Specialist', es: 'Hablar con un Especialista' },
  'Aprender': { en: 'Learn', es: 'Aprender' },
  'Empresa': { en: 'Company', es: 'Empresa' },
  '© 2026 ANONYMIZE. Todos os direitos reservados.': {
    en: '© 2026 ANONYMIZE. All rights reserved.',
    es: '© 2026 ANONYMIZE. Todos los derechos reservados.',
  },
  'Termos de uso': { en: 'Terms of use', es: 'Términos de uso' },
  'Aviso de privacidade': { en: 'Privacy notice', es: 'Aviso de privacidad' },
  'Falar com o DPO': { en: 'Contact DPO', es: 'Hablar con el DPO' },
  'Preferências de cookies': { en: 'Cookie preferences', es: 'Preferencias de cookies' },
  'Criar conta grátis na ANONYMIZE': { en: 'Create a free ANONYMIZE account', es: 'Crear cuenta gratis en ANONYMIZE' },
  'Agendar Demonstração Técnica': { en: 'Schedule a Technical Demo', es: 'Agendar Demostración Técnica' },
  'Canal do Encarregado de Dados (DPO)': { en: 'Data Protection Officer (DPO) Channel', es: 'Canal del Delegado de Datos (DPO)' },
  'Fechar': { en: 'Close', es: 'Cerrar' },
  'Entendido': { en: 'Got it', es: 'Entendido' },
  'Salvar preferências': { en: 'Save preferences', es: 'Guardar preferencias' },
  'Apenas essenciais': { en: 'Essential only', es: 'Solo esenciales' },
};

/**
 * Normaliza espaços extras para buscar correspondência no dicionário.
 * @param {string} text
 * @returns {string}
 */
function normalizeKey(text) {
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Aplica tradução sobre um nó DOM renderizado quando o idioma for EN ou ES.
 * @param {HTMLElement | null} root
 * @param {LangCode} lang
 */
function translateElement(root, lang) {
  if (!root || lang === 'pt') return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  /** @type {Text[]} */
  const textNodes = [];
  let current = walker.nextNode();
  while (current) {
    if (current.nodeType === Node.TEXT_NODE) {
      textNodes.push(/** @type {Text} */ (current));
    }
    current = walker.nextNode();
  }

  for (const node of textNodes) {
    const raw = node.nodeValue || '';
    const key = normalizeKey(raw);
    if (!key) continue;
    const entry = DICT[key];
    if (entry && entry[lang]) {
      const lead = raw.match(/^\s*/)?.[0] || '';
      const trail = raw.match(/\s*$/)?.[0] || '';
      node.nodeValue = lead + entry[lang] + trail;
    }
  }
}

/**
 * Retorna a bandeira SVG minimalista e o rótulo de cada idioma.
 * @param {LangCode} activeLang
 * @returns {string}
 */
function renderLanguageSwitcher(activeLang) {
  /** @type {Array<{ code: LangCode, label: string, name: string, flag: string }>} */
  const langs = [
    {
      code: 'pt',
      label: 'PT',
      name: 'Português (Brasil)',
      flag: '<svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><rect width="16" height="12" rx="2" fill="#009C3B"/><polygon points="8,1.6 14.2,6 8,10.4 1.8,6" fill="#FFDF00"/><circle cx="8" cy="6" r="2.3" fill="#002776"/></svg>',
    },
    {
      code: 'en',
      label: 'EN',
      name: 'English',
      flag: '<svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><rect width="16" height="12" rx="2" fill="#B22234"/><rect y="2" width="16" height="1.5" fill="#FFFFFF"/><rect y="5" width="16" height="1.5" fill="#FFFFFF"/><rect y="8" width="16" height="1.5" fill="#FFFFFF"/><rect width="7" height="6.5" rx="1" fill="#3C3B6E"/></svg>',
    },
    {
      code: 'es',
      label: 'ES',
      name: 'Español',
      flag: '<svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><rect width="16" height="12" rx="2" fill="#AA151B"/><rect y="3" width="16" height="6" fill="#F1BF00"/></svg>',
    },
  ];

  return `
    <div class="lang-switcher" role="group" aria-label="Selecionar idioma / Language / Idioma">
      ${langs
        .map(
          (l) => `
        <button
          type="button"
          class="lang-btn${activeLang === l.code ? ' active' : ''}"
          aria-pressed="${activeLang === l.code ? 'true' : 'false'}"
          title="${l.name}"
          data-set-lang="${l.code}"
        >
          ${l.flag}
          <span>${l.label}</span>
        </button>`
        )
        .join('')}
    </div>
  `;
}


// @ts-check

/**
 * @typedef {'identificacao' | 'documento' | 'sensivel' | 'financeiro'} EntityCategory
 * @typedef {'signup' | 'login' | 'demo' | 'cookies' | 'dpo' | 'legal-terms' | 'legal-privacy' | 'api-docs'} ModalType
 *
 * @typedef {Object} RedactionEntity
 * @property {string} id
 * @property {string} label
 * @property {EntityCategory} category
 * @property {string} original
 * @property {string} replacement
 * @property {string} confidence
 * @property {string} legalBasis
 *
 * @typedef {Object} ComparisonCriterion
 * @property {string} id
 * @property {string} criterion
 * @property {{ badge: string, tone: 'positive' | 'neutral' | 'warning', detail: string }} anonymization
 * @property {{ badge: string, tone: 'positive' | 'neutral' | 'warning', detail: string }} pseudonymization
 * @property {string} lgpdImpact
 *
 * @typedef {Object} AnonymizationTechnique
 * @property {string} id
 * @property {string} name
 * @property {string} tag
 * @property {string} shortDesc
 * @property {string} fullDesc
 * @property {string} mechanism
 * @property {string[]} bestFor
 * @property {number} privacyScore
 * @property {number} utilityScore
 * @property {string} [formula]
 * @property {Array<{ field: string, before: string, after: string, note: string }>} examples
 * @property {string} caution
 *
 * @typedef {Object} SectorSolution
 * @property {string} id
 * @property {string} sector
 * @property {string} badge
 * @property {string} summary
 * @property {string[]} documents
 * @property {string} complianceFocus
 *
 * @typedef {Object} ImplementationStep
 * @property {string} step
 * @property {string} title
 * @property {string} summary
 * @property {string} deliverable
 * @property {string} technicalNote
 *
 * @typedef {Object} PlanTier
 * @property {string} id
 * @property {string} name
 * @property {string} [badge]
 * @property {boolean} [highlighted]
 * @property {string} tagline
 * @property {string} monthlyPrice
 * @property {string} annualPrice
 * @property {string} periodNote
 * @property {string} ctaLabel
 * @property {ModalType} ctaAction
 * @property {string[]} features
 *
 * @typedef {Object} FaqItem
 * @property {string} id
 * @property {'LGPD' | 'Técnico' | 'Documentos' | 'Setor Público'} category
 * @property {string} question
 * @property {string} answer
 * @property {string} [legalRef]
 */

/** @type {Record<EntityCategory, string>} */
const CATEGORY_LABELS = {
  identificacao: 'Identificação',
  documento: 'CPF / RG',
  sensivel: 'Saúde (Sensível)',
  financeiro: 'Bancário',
};

/** @type {RedactionEntity[]} */
const HERO_ENTITIES = [
  {
    id: 'nome',
    label: 'Nome Completo',
    category: 'identificacao',
    original: 'Mariana Alencar Ferreira',
    replacement: '[TITULAR_ANONIMIZADO_01]',
    confidence: '99,8%',
    legalBasis: 'LGPD Art. 5º, I',
  },
  {
    id: 'cpf',
    label: 'CPF',
    category: 'documento',
    original: '384.912.608-45',
    replacement: '[CPF_REMOVIDO]',
    confidence: '99,9%',
    legalBasis: 'LGPD Art. 5º, I • LAI Art. 31',
  },
  {
    id: 'rg',
    label: 'RG / Órgão Emissor',
    category: 'documento',
    original: '42.871.109-2 SSP/SP',
    replacement: '[DOC_ID_REMOVIDO]',
    confidence: '99,6%',
    legalBasis: 'LGPD Art. 5º, I',
  },
  {
    id: 'endereco',
    label: 'Endereço Residencial',
    category: 'identificacao',
    original: 'Rua dos Pinheiros, 1.482, Apto 74 — São Paulo/SP',
    replacement: '[ENDEREÇO_REMOVIDO]',
    confidence: '99,4%',
    legalBasis: 'LGPD Art. 5º, I',
  },
  {
    id: 'diagnostico',
    label: 'Dado Clínico / CID',
    category: 'sensivel',
    original: 'CID-10 F32.2 — Laudo Psiquiátrico nº 9941/2026',
    replacement: '[DADO_SENSÍVEL_SAÚDE_REMOVIDO]',
    confidence: '99,7%',
    legalBasis: 'LGPD Art. 5º, II',
  },
  {
    id: 'conta',
    label: 'Dados Bancários',
    category: 'financeiro',
    original: 'Ag. 3042-1 • C/C 88410-9 (Banco do Brasil)',
    replacement: '[CONTA_BANCÁRIA_REMOVIDA]',
    confidence: '99,5%',
    legalBasis: 'Sigilo Bancário • LGPD',
  },
];

/** @type {ComparisonCriterion[]} */
const COMPARISON_CRITERIA = [
  {
    id: 'reversivel',
    criterion: 'Reversível?',
    anonymization: {
      badge: 'Não — Irreversível',
      tone: 'positive',
      detail:
        'A vinculação ao titular é destruída de forma definitiva, considerando meios técnicos razoáveis e disponíveis na ocasião do tratamento.',
    },
    pseudonymization: {
      badge: 'Sim — Mediante chave',
      tone: 'warning',
      detail:
        'Permite recompor a identidade do titular quando combinado com informação adicional mantida separadamente pelo controlador.',
    },
    lgpdImpact:
      'A irreversibilidade é a linha divisória jurídica do Art. 12 da LGPD: se existe tabela de correspondência ou chave controlada, o dado não foi anonimizado.',
  },
  {
    id: 'dado-pessoal',
    criterion: 'Ainda é dado pessoal?',
    anonymization: {
      badge: 'Não',
      tone: 'positive',
      detail:
        'Deixa de ser considerado dado pessoal para fins da LGPD, pois o titular não pode ser identificado direta nem indiretamente.',
    },
    pseudonymization: {
      badge: 'Sim — Permanece pessoal',
      tone: 'warning',
      detail:
        'Continua sendo dado pessoal (Art. 13, §4º), pois a pessoa natural segue identificável mediante associação com dados complementares.',
    },
    lgpdImpact:
      'Pseudonimização é uma excelente medida técnica de mitigação de risco, mas não altera a natureza jurídica do dado pessoal.',
  },
  {
    id: 'sujeito-lgpd',
    criterion: 'Sujeito à LGPD?',
    anonymization: {
      badge: 'Fora do escopo*',
      tone: 'positive',
      detail:
        'Não se sujeita às obrigações da LGPD, salvo se o processo for revertido por meios razoáveis ou usado para formação de perfil comportamental (Art. 12, §2º).',
    },
    pseudonymization: {
      badge: 'Totalmente sujeito',
      tone: 'warning',
      detail:
        'Exige base legal válida, transparência ao titular, atendimento a direitos do Art. 18, controle de retenção e comunicação de incidentes à ANPD.',
    },
    lgpdImpact:
      'Publicar um PDF apenas trocando nomes por códigos internos rastreáveis mantém integralmente a responsabilidade da organização sob a LGPD.',
  },
  {
    id: 'reidentificacao',
    criterion: 'Risco de reidentificação',
    anonymization: {
      badge: 'Residual / Mitigado',
      tone: 'positive',
      detail:
        'Controlado por supressão definitiva, generalização, k-anonimato e sanitização completa de camadas ocultas e metadados.',
    },
    pseudonymization: {
      badge: 'Moderado a Alto',
      tone: 'warning',
      detail:
        'Vulnerável ao vazamento da chave/tabela de-para ou a ataques de inferência por cruzamento com bases externas e quase-identificadores.',
    },
    lgpdImpact:
      'A ANPD avalia tanto o custo/esforço de reversão quanto a exposição de quase-identificadores em documentos ou tabelas abertas.',
  },
  {
    id: 'uso-tipico',
    criterion: 'Uso típico',
    anonymization: {
      badge: 'Transparência, LAI e Analytics',
      tone: 'neutral',
      detail:
        'Publicação de processos e decisões (LAI/SEI/PJe), transparência ativa, compartilhamento estatístico, treinamento de IA e pesquisa aberta.',
    },
    pseudonymization: {
      badge: 'Operação interna e Segurança',
      tone: 'neutral',
      detail:
        'Ambientes de homologação controlados, pesquisa clínica com necessidade de retorno ao paciente e segregação de acesso interno.',
    },
    lgpdImpact:
      'Escolha pseudonimização quando precisar voltar ao titular no futuro; escolha anonimização irreversível quando publicar ou compartilhar fora do perímetro.',
  },
  {
    id: 'exemplo',
    criterion: 'Exemplo prático',
    anonymization: {
      badge: 'Remoção definitiva / Faixas',
      tone: 'neutral',
      detail:
        'CPF removido da camada binária do PDF + idade convertida em faixa “35–44 anos” + região “Sudeste”, sem qualquer chave ou log reversível.',
    },
    pseudonymization: {
      badge: 'Hash / Token com tabela',
      tone: 'neutral',
      detail:
        'CPF substituído por token “USR-89F2A” ou hash SHA-256 com salt guardado em cofre para reidentificação futura pelo sistema.',
    },
    lgpdImpact:
      'Mesmo um hash criptográfico de CPF sem salt robusto pode ser revertido em segundos por força bruta devido ao espaço limitado de 11 dígitos.',
  },
];

/** @type {AnonymizationTechnique[]} */
const ANONYMIZATION_TECHNIQUES = [
  {
    id: 'generalizacao',
    name: 'Generalização',
    tag: 'REDUÇÃO DE GRANULARIDADE',
    shortDesc: 'Substitui valores exatos por intervalos, faixas ou categorias mais amplas.',
    fullDesc:
      'A generalização reduz a precisão de atributos quase-identificadores — como datas de nascimento, CEPs ou valores exatos — agrupando-os em intervalos mais amplos. Assim, preserva-se valor estatístico e contexto jurídico sem expor um indivíduo específico.',
    mechanism:
      'Mapeia valores pontuais para hierarquias taxonômicas ou faixas (buckets), diminuindo a singularidade de cada registro no conjunto.',
    bestFor: [
      'Bases demográficas e transparência pública',
      'Relatórios de folha salarial e faixas etárias',
      'Publicação de estatísticas geográficas por macrorregião',
    ],
    privacyScore: 78,
    utilityScore: 86,
    examples: [
      {
        field: 'Data de Nascimento',
        before: '14/03/1988',
        after: 'Faixa 35–44 anos',
        note: 'Elimina singularidade de aniversário exato',
      },
      {
        field: 'CEP Residencial',
        before: '01310-200 (Av. Paulista)',
        after: '013XX-XXX (Centro-Sul SP)',
        note: 'Mantém análise regional sem localizar logradouro',
      },
      {
        field: 'Remuneração Bruta',
        before: 'R$ 14.872,40',
        after: 'R$ 12.000 – R$ 16.000',
        note: 'Evita identificação por valor exato de contracheque',
      },
    ],
    caution:
      'Sozinha, a generalização leve pode não resistir se restarem combinações raras (outliers). Combine com k-anonimato.',
  },
  {
    id: 'supressao',
    name: 'Supressão',
    tag: 'REMOÇÃO IRREVERSÍVEL',
    shortDesc: 'Elimina definitivamente identificadores diretos ou atributos críticos de alto risco.',
    fullDesc:
      'A supressão remove completamente dados pessoais diretos (nome, CPF, RG, telefone, e-mail, assinatura manuscrita) ou registros inteiros de alto risco. Em documentos PDF, corresponde ao tarjamento real com destruição da camada textual e vetorial subjacente.',
    mechanism:
      'Exclui o dado na origem ou sobrescreve o stream binário do documento sem manter tabela de recuperação, garantindo zero reconstrução.',
    bestFor: [
      'Tarjamento de processos judiciais e administrativos (SEI/PJe)',
      'Contratos, ofícios, certidões e laudos clínicos',
      'Atendimento a pedidos de acesso à informação (LAI)',
    ],
    privacyScore: 98,
    utilityScore: 68,
    examples: [
      {
        field: 'CPF / Documento',
        before: '384.912.608-45',
        after: '██████████████',
        note: 'Removido do texto, OCR e metadados do PDF',
      },
      {
        field: 'Nome da Parte',
        before: 'Mariana Alencar Ferreira',
        after: '[SUPRIMIDO — LGPD]',
        note: 'Sem chave de reversão armazenada no arquivo',
      },
      {
        field: 'Assinatura / QR Code',
        before: 'Imagem + token de validação pessoal',
        after: 'Área rasterizada e sanitizada',
        note: 'Impede extração forense ou leitura do código',
      },
    ],
    caution:
      'Em PDFs, desenhar um retângulo preto sobre o texto NÃO é supressão: é preciso destruir a camada textual, os vetores e os metadados.',
  },
  {
    id: 'perturbacao',
    name: 'Perturbação (Ruído)',
    tag: 'VARIAÇÃO ESTATÍSTICA',
    shortDesc: 'Adiciona ruído controlado em variáveis numéricas mantendo propriedades analíticas.',
    fullDesc:
      'A perturbação modifica valores numéricos contínuos por meio de ruído estatístico calibrado (distribuição Gaussiana ou Laplaciana), permutação controlada ou microagregação. O registro individual deixa de corresponder ao valor real, enquanto médias, tendências e correlações seguem confiáveis.',
    mechanism:
      'Soma uma variável aleatória de média zero e variância calibrada ao atributo numérico original, quebrando correspondência exata com bases externas.',
    bestFor: [
      'Pesquisa em saúde e indicadores epidemiológicos',
      'Modelagem de risco no setor financeiro e seguros',
      'Compartilhamento de séries numéricas para BI',
    ],
    privacyScore: 84,
    utilityScore: 88,
    formula: "x' = x + η,  onde  η ~ N(0, σ²)",
    examples: [
      {
        field: 'Glicemia em Jejum',
        before: '118 mg/dL',
        after: '121 mg/dL (η = +3)',
        note: 'Preserva distribuição da coorte clínica',
      },
      {
        field: 'Limite de Crédito',
        before: 'R$ 24.500,00',
        after: 'R$ 25.180,00',
        note: 'Impede cruzamento exato com extratos bancários',
      },
      {
        field: 'Tempo de Internação',
        before: '11 dias',
        after: '10 dias',
        note: 'Mantém acurácia em modelos preditivos hospitalares',
      },
    ],
    caution:
      'Ruído insuficiente permite filtragem estatística; ruído excessivo distorce análises. Valide sempre com testes de inferência.',
  },
  {
    id: 'k-anonimato',
    name: 'K-anonimato',
    tag: 'INDISTINGUIBILIDADE DE GRUPO',
    shortDesc: 'Garante que cada indivíduo seja indistinguível de pelo menos k−1 outros registros.',
    fullDesc:
      'O K-anonimato protege contra reidentificação indireta por combinação de quase-identificadores (como CEP, idade e gênero). Uma base atende ao k-anonimato quando qualquer combinação de quase-identificadores aparece em, no mínimo, k registros idênticos (classes de equivalência).',
    mechanism:
      'Aplica generalização e supressão iterativas até que todo grupo de quase-identificadores possua cardinalidade ≥ k.',
    bestFor: [
      'Abertura de microdados públicos e transparência ativa',
      'Compartilhamento de bases de RH e pesquisa acadêmica',
      'Mitigação de cruzamento com cadastros públicos',
    ],
    privacyScore: 87,
    utilityScore: 79,
    formula: '∀ classe C de quase-identificadores: |C| ≥ k',
    examples: [
      {
        field: 'Registro #01 (k = 3)',
        before: '01310-200 • 36 anos • F',
        after: '013XX-XXX • 35–44 • *',
        note: 'Grupo com ≥ 3 indivíduos idênticos nos QI',
      },
      {
        field: 'Registro #02 (k = 3)',
        before: '01311-000 • 39 anos • M',
        after: '013XX-XXX • 35–44 • *',
        note: 'Probabilidade máxima de ligação direta ≤ 1/k',
      },
      {
        field: 'Registro #03 (k = 3)',
        before: '01310-904 • 42 anos • F',
        after: '013XX-XXX • 35–44 • *',
        note: 'Reduz exposição a ataques de linkage externo',
      },
    ],
    caution:
      'Se todos os k registros da mesma classe tiverem o mesmo atributo sensível (ex.: mesmo diagnóstico), ocorre ataque de homogeneidade.',
  },
  {
    id: 'l-diversidade',
    name: 'L-diversidade e T-proximidade',
    tag: 'PROTEÇÃO DE ATRIBUTOS SENSÍVEIS',
    shortDesc: 'Mitiga ataques de homogeneidade e inferência probabilística em dados sensíveis.',
    fullDesc:
      'Evoluções diretas do k-anonimato. A L-diversidade exige que cada classe de equivalência contenha pelo menos L valores bem representados para o atributo sensível (ex.: diagnósticos distintos). Já a T-proximidade garante que a distribuição do atributo sensível dentro de cada grupo não divirja em mais de t da distribuição global da base.',
    mechanism:
      'Restringe a concentração de atributos sensíveis por classe de equivalência usando entropia ou distância Earth Mover’s Distance (EMD ≤ t).',
    bestFor: [
      'Prontuários médicos e bancos de dados oncológicos',
      'Bases de crédito, inadimplência e sinistros',
      'Dados sindicais, biométricos ou de vulnerabilidade social',
    ],
    privacyScore: 93,
    utilityScore: 73,
    formula: 'D_EMD(P_classe, P_global) ≤ t  ∧  |S_classe| ≥ l',
    examples: [
      {
        field: 'Vulnerável (só k=3)',
        before: 'Grupo A → [HIV, HIV, HIV]',
        after: 'Risco: 100% de inferência sem saber o nome',
        note: 'Ataque de homogeneidade bem-sucedido',
      },
      {
        field: 'Com L-diversidade (l=3)',
        before: 'Grupo A reorganizado',
        after: '[Hipertensão, Asma, Diabetes]',
        note: 'Pelo menos 3 valores distintos por classe',
      },
      {
        field: 'Com T-proximidade (t=0,15)',
        before: 'Grupo com viés extremo de renda',
        after: 'Distribuição alinhada à população geral',
        note: 'Bloqueia inferência por conhecimento prévio',
      },
    ],
    caution:
      'Pode exigir maior generalização em bases pequenas ou com atributos sensíveis altamente desbalanceados.',
  },
  {
    id: 'privacidade-diferencial',
    name: 'Privacidade Diferencial',
    tag: 'GARANTIA MATEMÁTICA FORMAL',
    shortDesc: 'Aplica ruído matematicamente calibrado em consultas e telemetria em larga escala.',
    fullDesc:
      'A Privacidade Diferencial (Differential Privacy) oferece uma garantia matemática formal: o resultado de uma consulta ou modelo estatístico permanece praticamente indistinguível esteja um determinado indivíduo presente ou ausente na base. Controlada pelo orçamento de privacidade ε (épsilon), resiste até a invasores com conhecimento auxiliar arbitrário.',
    mechanism:
      'Injeta ruído calibrado (Laplace ou Gaussiano) proporcional à sensibilidade global da consulta dividido pelo orçamento ε.',
    bestFor: [
      'Telemetria, censos populacionais e painéis públicos',
      'Treinamento de modelos de Machine Learning e IA',
      'APIs de consultas agregadas em larga escala',
    ],
    privacyScore: 96,
    utilityScore: 81,
    formula: 'Pr[M(D₁) ∈ S] ≤ e^ε · Pr[M(D₂) ∈ S] + δ',
    examples: [
      {
        field: 'Consulta de Contagem',
        before: 'Exatamente 1.428 beneficiários na zona sul',
        after: '1.431 beneficiários (ε = 0,5)',
        note: 'Impede ataque de diferenciação entre duas consultas',
      },
      {
        field: 'Telemetria de Uso',
        before: 'Histórico exato por dispositivo',
        after: 'Resposta aleatorizada local (LDP)',
        note: 'Dado já chega perturbado antes de sair do cliente',
      },
      {
        field: 'Média Salarial Regional',
        before: 'R$ 6.410,00 (altera se diretor sair)',
        after: 'R$ 6.385,00 ± ruído calibrado',
        note: 'Protege outliers de alto valor contra inferência',
      },
    ],
    caution:
      'Exige gestão rigorosa do orçamento acumulado de privacidade (privacy budget) quando múltiplas consultas são feitas sobre a mesma base.',
  },
];

/** @type {SectorSolution[]} */
const SECTOR_SOLUTIONS = [
  {
    id: 'governo',
    sector: 'Setor Público & LAI',
    badge: 'SEI • PJe • Fala.BR',
    summary:
      'Equilibre transparência ativa e pedidos da Lei nº 12.527/2011 com a proteção de dados de cidadãos e terceiros em larga escala.',
    documents: ['Processos SEI', 'Ofícios e pareceres', 'Licitações', 'Respostas e-SIC'],
    complianceFocus: 'LAI Art. 31 + LGPD Art. 23',
  },
  {
    id: 'juridico',
    sector: 'Jurídico & Tribunais',
    badge: 'PJe • Contencioso',
    summary:
      'Tarjamento irreversível de peças, acórdãos, provas documentais e contratos para publicação de jurisprudência e due diligence.',
    documents: ['Sentenças e decisões', 'Petições e anexos', 'Contratos', 'Segredo parcial'],
    complianceFocus: 'CNJ • LGPD Arts. 7º e 12',
  },
  {
    id: 'compliance',
    sector: 'Compliance & DPO',
    badge: 'Governança • ANPD',
    summary:
      'Padronize políticas de minimização, gere trilha criptográfica auditável por página e demonstre conformidade técnica à ANPD.',
    documents: ['Relatórios RIPD', 'Auditorias internas', 'Dossiês de incidentes', 'Canal de ética'],
    complianceFocus: 'Prestação de Contas • Art. 6º, X',
  },
  {
    id: 'saude',
    sector: 'Saúde & Pesquisa',
    badge: 'Dados Sensíveis • Art. 11',
    summary:
      'Proteja prontuários, exames, laudos e documentos clínicos com detecção especializada em CIDs, CRM e dados sensíveis de saúde.',
    documents: ['Prontuários', 'Laudos laboratoriais', 'Receituários OCR', 'Estudos clínicos'],
    complianceFocus: 'LGPD Art. 5º, II e Art. 13',
  },
  {
    id: 'financeiro',
    sector: 'Financeiro & Seguros',
    badge: 'Sigilo • BACEN • SUSEP',
    summary:
      'Sanitize dossiês de crédito, comprovantes de renda, extratos e sinistros antes de compartilhar com auditorias ou reguladores.',
    documents: ['Extratos e IRPF', 'Dossiês de sinistro', 'Contratos crédito', 'Relatórios KYC'],
    complianceFocus: 'LC 105/2001 • LGPD',
  },
];

/** @type {ImplementationStep[]} */
const DATABASE_IMPLEMENTATION_STEPS = [
  {
    step: '01',
    title: 'Inventário e Mapeamento de Dados',
    summary:
      'Catalogar tabelas, colunas, data lakes e fluxos de ingestão, separando identificadores diretos (CPF, e-mail), quase-identificadores (CEP, nascimento, cargo) e atributos sensíveis.',
    deliverable: 'Mapa de Atributos & Linhagem',
    technicalNote: 'Inclua logs de aplicação, backups e réplicas analíticas frequentemente esquecidos.',
  },
  {
    step: '02',
    title: 'Classificação por Finalidade e Risco',
    summary:
      'Definir se o caso de uso realmente precisa identificar o titular ou se um conjunto anonimizado atende plenamente a análises estatísticas, BI ou modelos de IA.',
    deliverable: 'Matriz Finalidade × Identificação',
    technicalNote: 'Aplique minimização desde a concepção (Privacy by Design — LGPD Art. 46).',
  },
  {
    step: '03',
    title: 'Seleção e Combinação de Técnicas',
    summary:
      'Aplicar supressão em identificadores diretos e combinar generalização, perturbação, k-anonimato, l-diversidade ou privacidade diferencial conforme a estrutura dos dados.',
    deliverable: 'Pipeline Automatizado de Privacidade',
    technicalNote: 'Combine k-anonimato + l-diversidade em bases com atributos sensíveis.',
  },
  {
    step: '04',
    title: 'Teste de Resistência à Reidentificação',
    summary:
      'Simular ataques reais de vinculação (linkage attack) cruzando a base resultante com bases públicas, registros abertos e atributos raros para medir o risco residual.',
    deliverable: 'Laudo de Risco de Reidentificação',
    technicalNote: 'Considere o critério legal de "meios técnicos razoáveis e disponíveis".',
  },
  {
    step: '05',
    title: 'Documentação Técnica e Governança',
    summary:
      'Registrar parâmetros utilizados (k, l, t, ε), responsáveis, data e revisões periódicas — pois avanços tecnológicos e novas bases abertas alteram o risco ao longo do tempo.',
    deliverable: 'Evidência Auditável para DPO / ANPD',
    technicalNote: 'Reavalie periodicamente conjuntos publicados sob transparência ativa.',
  },
];

/** @type {ImplementationStep[]} */
const DOCUMENT_IMPLEMENTATION_STEPS = [
  {
    step: '01',
    title: 'Ingestão e OCR Neural de Documentos',
    summary:
      'Receber PDFs nativos, digitalizados, imagens ou autos completos (SEI/PJe), executando OCR de alta precisão para tornar legíveis carimbos, tabelas, rodapés e anexos.',
    deliverable: 'Documento Indexado com Coordenadas',
    technicalNote: 'Arquivos escaneados sem OCR impedem busca textual e geram pontos cegos.',
  },
  {
    step: '02',
    title: 'Detecção por IA Jurídica e LGPD',
    summary:
      'Identificar automaticamente nomes, CPFs, RGs, OABs, endereços, dados bancários, menores de idade, CIDs e dados sensíveis com classificação por contexto e confiança.',
    deliverable: 'Mapa de Entidades + Revisão Assistida',
    technicalNote: 'A IA reduz em até 99% a leitura folha a folha preservando o controle humano.',
  },
  {
    step: '03',
    title: 'Remoção Real de Texto e Metadados',
    summary:
      'Destruir definitivamente o texto subjacente no stream binário do PDF, remover objetos vetoriais ocultos, comentários, histórico de revisões, autor e metadados XMP.',
    deliverable: 'PDF Sanitizado e Irreversível',
    technicalNote: 'Diferente de caixas pretas visuais, o dado deixa de existir no arquivo final.',
  },
  {
    step: '04',
    title: 'Validação (Teste de Extração Zero)',
    summary:
      'Executar verificação pós-processamento simulando Ctrl+C, parsers de texto (pdftotext), inspeção de camadas e OCR reverso sobre áreas tarjadas para confirmar vazamento zero.',
    deliverable: 'Certificado de Integridade & Extração Zero',
    technicalNote: 'Qualquer resquício textual bloqueia automaticamente a publicação do arquivo.',
  },
  {
    step: '05',
    title: 'Lote, API e Trilha de Auditoria',
    summary:
      'Processar centenas ou milhares de páginas simultaneamente com registro imutável de quem revisou, quais regras foram aplicadas, timestamp e hash SHA-256 do arquivo final.',
    deliverable: 'Relatório de Auditoria Criptográfica',
    technicalNote: 'Integração nativa via API REST para fluxos do SEI, PJe, ERPs e GEDs.',
  },
];

/** @type {PlanTier[]} */
const PLAN_TIERS = [
  {
    id: 'starter',
    name: 'Starter & Teste IA',
    tagline: 'Para DPOs, advogados e servidores validarem o tarjamento irreversível em minutos.',
    monthlyPrice: 'Grátis',
    annualPrice: 'Grátis',
    periodNote: 'Sem cartão de crédito • Início imediato',
    ctaLabel: 'Criar conta grátis',
    ctaAction: 'signup',
    features: [
      'Até 50 páginas/mês com IA + OCR integrado',
      'Detecção automática de CPF, RG, nomes, e-mails e endereços',
      'Remoção real da camada de texto e limpeza de metadados',
      'Validador automático contra vazamento (teste Ctrl+C)',
      'Relatório resumido de conformidade LGPD',
    ],
  },
  {
    id: 'pro',
    name: 'Profissional & Compliance',
    badge: 'Mais escolhido',
    highlighted: true,
    tagline: 'Para departamentos jurídicos, compliance, saúde e equipes com volume recorrente.',
    monthlyPrice: 'R$ 590',
    annualPrice: 'R$ 490',
    periodNote: '/mês • faturamento anual economiza 17%',
    ctaLabel: 'Testar IA Gratuitamente',
    ctaAction: 'signup',
    features: [
      'Até 5.000 páginas/mês em lote com fila prioritária',
      'IA para dados sensíveis (saúde/CID, menores, financeiro)',
      'Regras customizadas por política interna e glossário próprio',
      'Trilha de auditoria completa com hash SHA-256 por documento',
      'Perfis de revisão multiusuário com controle de aprovação',
      'Suporte técnico especializado e canal DPO',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise & Governo',
    badge: 'LAI • SEI • PJe',
    tagline: 'Para órgãos públicos, tribunais, bancos e grandes corporações em alta escala.',
    monthlyPrice: 'Sob consulta',
    annualPrice: 'Sob consulta',
    periodNote: 'Contratação pública (Lei 14.133) ou SLA corporativo',
    ctaLabel: 'Agendar Demonstração',
    ctaAction: 'demo',
    features: [
      'Volume ilimitado de páginas e processamento paralelo',
      'API REST dedicada e conectores para SEI, PJe e GEDs',
      'Implantação em nuvem privada no Brasil ou On-Premise',
      'SSO (SAML/OIDC), RBAC granular e retenção zero configurável',
      'Relatórios auditáveis prontos para ANPD e órgãos de controle',
      'Onboarding assistido e gerente técnico dedicado',
    ],
  },
];

/** @type {FaqItem[]} */
const FAQ_ITEMS = [
  {
    id: 'o-que-e',
    category: 'LGPD',
    question: 'O que é anonimização de dados?',
    legalRef: 'LGPD • Art. 5º, III e XI',
    answer:
      'Anonimização é a utilização de meios técnicos razoáveis e disponíveis no momento do tratamento pelos quais um dado perde a possibilidade de associação, direta ou indireta, a um indivíduo. Quando executada de forma verdadeiramente irreversível, o dado anonimizado deixa de ser considerado dado pessoal para os fins da LGPD.',
  },
  {
    id: 'diferenca-pseudonimizacao',
    category: 'LGPD',
    question: 'Qual a diferença entre anonimização e pseudonimização?',
    legalRef: 'LGPD • Art. 12 e Art. 13, §4º',
    answer:
      'A diferença fundamental é a reversibilidade. Na pseudonimização, substitui-se o identificador por um código, token ou hash, mas existe uma informação adicional (chave ou tabela de correspondência) mantida separadamente que permite voltar ao titular — por isso, o dado continua sendo pessoal e sujeito integralmente à LGPD. Já na anonimização real, a reversão é tecnicamente inviável por meios razoáveis.',
  },
  {
    id: 'fora-da-lgpd',
    category: 'LGPD',
    question: 'Dado anonimizado está fora da LGPD?',
    legalRef: 'LGPD • Art. 12, caput, §1º e §2º',
    answer:
      'Em regra, sim: o Art. 12 da LGPD estabelece que dados anonimizados não são considerados dados pessoais. Porém, há duas exceções críticas: (1) quando o processo de anonimização puder ser revertido utilizando exclusivamente meios próprios ou esforços razoáveis; e (2) quando os dados forem utilizados para formação do perfil comportamental (profiling) de determinada pessoa natural, se identificada.',
  },
  {
    id: 'principais-tecnicas',
    category: 'Técnico',
    question: 'Quais são as principais técnicas de anonimização?',
    legalRef: 'ISO/IEC 20889 • Boas práticas ANPD',
    answer:
      'As principais técnicas incluem: Supressão (remoção definitiva de identificadores), Generalização (substituição de valores exatos por faixas ou categorias), Perturbação/Ruído (variação estatística controlada em dados numéricos), K-anonimato (garantia de indistinguibilidade entre ao menos k−1 registros), L-diversidade e T-proximidade (proteção de atributos sensíveis contra homogeneidade e inferência) e Privacidade Diferencial (ruído matematicamente calibrado em consultas em larga escala).',
  },
  {
    id: 'como-anonimizar-pdf',
    category: 'Documentos',
    question: 'Como anonimizar documentos em PDF?',
    legalRef: 'Sanitização estrutural + OCR',
    answer:
      'Para anonimizar um PDF corretamente, é necessário: (1) aplicar OCR caso haja páginas escaneadas; (2) mapear identificadores diretos, indiretos e dados sensíveis; (3) remover definitivamente os caracteres do stream textual, objetos vetoriais ocultos e metadados (autor, histórico, comentários); e (4) validar o arquivo final tentando selecionar, copiar e extrair texto. A plataforma ANONYMIZE automatiza todo esse fluxo com IA e gera trilha de auditoria.',
  },
  {
    id: 'tarjamento-vs-anonimizacao',
    category: 'Documentos',
    question: 'Tarjamento e anonimização são a mesma coisa?',
    legalRef: 'Conceito jurídico × Método prático',
    answer:
      'Não exatamente — são complementares. Anonimização é o objetivo jurídico e técnico de tornar o titular inidentificável. Tarjamento é o método prático utilizado em documentos não estruturados (processos, contratos, laudos, ofícios) para suprimir trechos específicos. Contudo, um tarjamento apenas visual (desenhar uma tarja preta por cima sem destruir o texto subjacente) não anonimiza o documento e gera grave risco de vazamento.',
  },
  {
    id: 'lgpd-exige-anonimizacao',
    category: 'LGPD',
    question: 'A LGPD exige anonimização dos dados?',
    legalRef: 'LGPD • Arts. 7º, 11, 13, 16 e 18',
    answer:
      'A LGPD não obriga anonimizar todos os dados em qualquer situação, mas estimula e prevê a anonimização como medida estratégica de conformidade: por exemplo, para estudos por órgãos de pesquisa (sempre que possível, Art. 7º, IV e Art. 13), como direito do titular em caso de dados desnecessários ou excessivos (Art. 18, IV) e como alternativa segura à eliminação ao término do tratamento para retenção estatística (Art. 16, IV).',
  },
  {
    id: 'orgaos-publicos',
    category: 'Setor Público',
    question: 'Como órgãos públicos devem tratar anonimização de documentos?',
    legalRef: 'LAI (Lei 12.527/2011) + LGPD Art. 23',
    answer:
      'Órgãos públicos precisam conciliar o dever de transparência ativa e atendimento à LAI com a proteção de informações pessoais (LAI Art. 31 e LGPD). Isso significa não negar acesso integral a um documento apenas porque ele contém alguns dados pessoais: a prática recomendada é aplicar tarjamento irreversível nos trechos protegidos, preservar a integridade pública do restante do ato e manter trilha auditável do processo em sistemas como SEI e PJe.',
  },
];

/** @type {Array<{ title: string, links: Array<{ label: string, href: string, action?: ModalType }> }>} */
const FOOTER_GROUPS = [
  {
    title: 'Produtos',
    links: [
      { label: 'Tarjamento de Dados', href: '#simulador' },
      { label: 'Visualizador de Processos', href: '#simulador' },
      { label: 'OCR de Documentos', href: '#implementacao' },
      { label: 'IA em Documentos', href: '#tarjamento-real' },
      { label: 'IA para Extração de Dados', href: '#implementacao' },
      { label: 'Tarjador de Documentos', href: '#simulador' },
      { label: 'Como Tarjar PDF', href: '#tarjamento-real' },
      { label: 'Tipos de Anonimização', href: '#tecnicas' },
      { label: 'Formatos Atendidos', href: '#implementacao' },
      { label: 'Planos', href: '#planos' },
      { label: 'API', href: '#planos' },
    ],
  },
  {
    title: 'Soluções',
    links: [
      { label: 'Governo', href: '#setor-publico' },
      { label: 'Financeiro', href: '#solucoes' },
      { label: 'Saúde', href: '#solucoes' },
      { label: 'Jurídico', href: '#solucoes' },
      { label: 'Compliance', href: '#solucoes' },
    ],
  },
  {
    title: 'Aprender',
    links: [
      { label: 'Guia do Tarjamento', href: '#implementacao' },
      { label: 'Como Colocar Tarja Preta em PDF', href: '#tarjamento-real' },
      { label: 'A Tarja Preta Não Protege', href: '#tarjamento-real' },
      { label: 'Anonimizar PDF para a LAI', href: '#setor-publico' },
      { label: 'Tarjamento no SEI', href: '#setor-publico' },
      { label: 'Tarjamento no PJe', href: '#solucoes' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre a ANONYMIZE', href: '#institucional' },
      { label: 'Seja um Parceiro', href: '#contato', action: 'demo' },
      { label: 'Blog', href: '#conceito-lgpd' },
      { label: 'Contato Comercial', href: '#contato', action: 'demo' },
      { label: 'Suporte', href: '#faq' },
      { label: 'LinkedIn', href: '#institucional' },
    ],
  },
];

/**
 * Mega-menus estruturados do Header (Produtos, Soluções e Recursos).
 * @type {Record<'produtos' | 'solucoes' | 'recursos', {
 *   label: string,
 *   columns: Array<{
 *     heading: string,
 *     items: Array<{ title: string, desc: string, href: string, iconName: string, badge?: string, action?: ModalType }>
 *   }>
 * }>}
 */
const NAV_MENUS = {
  produtos: {
    label: 'Produtos',
    columns: [
      {
        heading: 'Suíte do Ciclo Documental',
        items: [
          {
            title: 'Tarjamento Irreversível',
            desc: 'Ocultação definitiva em PDFs, textos, áudios e planilhas com auditoria.',
            href: '#suite-produtos',
            iconName: 'shield-check',
            badge: 'Principal',
          },
          {
            title: 'Visualizador Seguro de Processos',
            desc: 'Consulta sob demanda de autos extensos, controle por unidade e ICP-Brasil.',
            href: '#suite-produtos',
            iconName: 'file-search',
          },
          {
            title: 'OCR Neural de Acervos',
            desc: 'Digitalizados e imagens convertidos em lote para PDFs pesquisáveis.',
            href: '#suite-produtos',
            iconName: 'scan-text',
          },
          {
            title: 'IA Conversacional (RAG Local)',
            desc: 'Pergunte aos autos e receba respostas fundamentadas sem expor dados.',
            href: '#suite-produtos',
            iconName: 'bot',
          },
          {
            title: 'Extração Estruturada com IA',
            desc: 'Transforme lotes de PDFs, notas e espelhos em planilhas, CSV ou JSON.',
            href: '#suite-produtos',
            iconName: 'table',
          },
        ],
      },
      {
        heading: 'Escala, Portais & API',
        items: [
          {
            title: 'Anonimização Multiformato',
            desc: 'PDF, texto livre, áudio, Excel com k-anonimato e dados sintéticos.',
            href: '#multiformato',
            iconName: 'layers',
          },
          {
            title: 'Proxy para Portais e Sites',
            desc: 'Sanitize automaticamente todo PDF publicado no seu portal sem código.',
            href: '#proxy-portais',
            iconName: 'globe',
            badge: 'Novo',
          },
          {
            title: 'API REST & Conectores Nuvem',
            desc: 'Integração com SEI, PJe, Drive, OneDrive, SSO/SAML e Regex.',
            href: '#integracoes',
            iconName: 'plug',
          },
          {
            title: 'Simulador Interativo ao Vivo',
            desc: 'Compare tarja falsa vs. remoção real e teste o Ctrl+C na hora.',
            href: '#simulador',
            iconName: 'sparkles',
          },
        ],
      },
    ],
  },
  solucoes: {
    label: 'Soluções',
    columns: [
      {
        heading: 'Por Setor & Compliance',
        items: [
          {
            title: 'Órgãos Públicos & LAI',
            desc: 'Transparência ativa, e-SIC/Fala.BR, SEI e conformidade com a Lei 12.527/2011.',
            href: '#setor-publico',
            iconName: 'landmark',
          },
          {
            title: 'Jurídico & Tribunais',
            desc: 'Petições, sentenças, acórdãos, PJe e contratos em due diligence.',
            href: '#solucoes',
            iconName: 'scale',
          },
          {
            title: 'Compliance & DPO',
            desc: 'Governança, evidência auditável SHA-256 e prestação de contas à ANPD.',
            href: '#comparativo',
            iconName: 'shield-check',
          },
          {
            title: 'Saúde & Financeiro',
            desc: 'Laudos clínicos (CID), prontuários, extratos, IRPF e sigilo bancário.',
            href: '#solucoes',
            iconName: 'building',
          },
        ],
      },
    ],
  },
  recursos: {
    label: 'Recursos',
    columns: [
      {
        heading: 'Ferramentas & Diagnóstico',
        items: [
          {
            title: 'Calculadora de ROI e Economia',
            desc: 'Simule horas, dias úteis e orçamento economizados com automação.',
            href: '#calculadora-roi',
            iconName: 'calculator',
            badge: 'Interativo',
          },
          {
            title: 'Custo do Tarjamento Manual',
            desc: 'Riscos jurídicos, hora-homem oculta e impacto reputacional da inação.',
            href: '#custo-manual',
            iconName: 'clock',
          },
          {
            title: 'A Tarja Preta Não Protege',
            desc: 'Inspecione o stream interno de um PDF e entenda o vazamento oculto.',
            href: '#tarjamento-real',
            iconName: 'alert-triangle',
          },
        ],
      },
      {
        heading: 'Base Técnica LGPD',
        items: [
          {
            title: 'Conceito LGPD (Art. 5º e 12)',
            desc: 'Meios técnicos razoáveis, reidentificação indireta e papel da ANPD.',
            href: '#conceito-lgpd',
            iconName: 'scale',
          },
          {
            title: 'Anonimização vs. Pseudonimização',
            desc: 'Tabela comparativa interativa critério a critério.',
            href: '#comparativo',
            iconName: 'sliders',
          },
          {
            title: '6 Técnicas de Anonimização',
            desc: 'Generalização, Supressão, Perturbação, K-anonimato, L-diversidade e DP.',
            href: '#tecnicas',
            iconName: 'cpu',
          },
          {
            title: 'Guia de Implementação & FAQ',
            desc: 'Passo a passo para bancos de dados, documentos e dúvidas frequentes.',
            href: '#implementacao',
            iconName: 'workflow',
          },
        ],
      },
    ],
  },
};

/**
 * Cards da área "Gargalo operacional da revisão manual".
 */
const INACTION_COSTS = [
  {
    id: 'passivo-juridico',
    iconName: 'alert-triangle',
    tone: 'danger',
    title: 'Exposição regulatória e judicial',
    metric: 'LGPD Arts. 42 e 52',
    description:
      'Basta um documento publicado com CPF, endereço ou referência a menor de idade ainda acessível para abrir margem a ações indenizatórias, procedimentos da ANPD e responsabilização solidária.',
  },
  {
    id: 'hora-homem',
    iconName: 'clock',
    tone: 'warning',
    title: 'Capacidade técnica drenada',
    metric: '~4,0 min / página manual',
    description:
      'Conferir anexos digitalizados, marcar trechos e revisar linha a linha consome dezenas de horas qualificadas por lote — atrasando prazos da LAI e sobrecarregando equipes jurídicas e de DPO.',
  },
  {
    id: 'reputacao',
    iconName: 'shield-alert',
    tone: 'danger',
    title: 'Ciclo caro de contenção e republicação',
    metric: 'Auditoria + Retificação',
    description:
      'Depois que um arquivo vaza em portal aberto ou indexador externo, retirar cópias de circulação, emitir notas de correção e responder a órgãos de controle exige esforço muito maior que a prevenção.',
  },
];

/**
 * Grade 3x2 de cobertura por formato e canal de entrada.
 */
const MULTIFORMAT_CAPABILITIES = [
  {
    category: 'AUTOS & PDFS',
    iconName: 'file-text',
    title: 'Sanitização estrutural de PDFs',
    description:
      'Eliminação definitiva de texto subjacente, objetos ocultos e metadados XMP em processos, contratos, pareceres, laudos e documentos escaneados.',
  },
  {
    category: 'CORPO TEXTUAL',
    iconName: 'scan-text',
    title: 'Proteção de textos e despachos',
    description:
      'Reconhecimento contextual de identificadores diretos, dados sensíveis e entidades jurídicas em textos corridos antes da publicação ou indexação.',
  },
  {
    category: 'MÍDIA & VOZ',
    iconName: 'mic',
    title: 'Ocultação em áudios e gravações',
    description:
      'Transcrição assistida e silenciamento seletivo de trechos com dados pessoais em atendimentos, oitivas e reuniões gravadas.',
  },
  {
    category: 'BASES TABULARES',
    iconName: 'table',
    title: 'Planilhas protegidas por K-anonimato',
    description:
      'Tratamento automatizado de arquivos XLSX e CSV com agrupamento k-anônimo para neutralizar ataques por cruzamento de colunas.',
  },
  {
    category: 'AMBIENTES DE TESTE',
    iconName: 'sparkles',
    title: 'Conjuntos sintéticos estatísticos',
    description:
      'Geração de tabelas artificiais que preservam distribuições e correlações reais para homologação, BI e modelos analíticos sem titulares reais.',
  },
  {
    category: 'PIPELINES',
    iconName: 'terminal',
    title: 'Orquestração via API REST',
    description:
      'Integração direta com ERPs, GEDs, SEI e PJe para processamento assíncrono em larga escala com validação automática de extração zero.',
  },
];

/**
 * Arquitetura modular de 5 componentes da plataforma ANONYMIZE.
 */
const PRODUCT_SUITE = [
  {
    badge: 'NÚCLEO DE PRIVACIDADE',
    iconName: 'shield-check',
    title: 'Motor de Sanitização Irreversível',
    description:
      'Detecta e remove definitivamente dados pessoais e sensíveis em múltiplos formatos, combinando IA especializada em LGPD, revisão assistida e prova criptográfica SHA-256.',
    href: '#simulador',
    cta: 'Abrir simulador ao vivo',
  },
  {
    badge: 'LEITURA CONTROLADA',
    iconName: 'file-search',
    title: 'Leitor Seguro de Autos',
    description:
      'Visualização rápida de processos extensos no navegador ou em rede fechada (on-premises), com busca instantânea, controle por lotação e validação ICP-Brasil.',
    href: '#implementacao',
    cta: 'Explorar arquitetura',
  },
  {
    badge: 'DIGITALIZAÇÃO EM ESCALA',
    iconName: 'scan-text',
    title: 'Reconhecimento Óptico (OCR) Neural',
    description:
      'Transforma lotes de imagens, carimbos e acervos físicos digitalizados em PDFs pesquisáveis de alta precisão — eliminando pontos cegos na busca e no tarjamento.',
    href: '#implementacao',
    cta: 'Ver fluxo técnico',
  },
  {
    badge: 'CONSULTA PRIVADA • RAG',
    iconName: 'bot',
    title: 'Assistente Documental Privado',
    description:
      'Consulte autos complexos em linguagem natural com respostas rastreadas por página — inclusive operando em modelos locais sem trafegar arquivos para nuvens externas.',
    href: '#planos',
    cta: 'Ver opções de implantação',
  },
  {
    badge: 'ESTRUTURAÇÃO',
    iconName: 'table',
    title: 'Estruturador de Dados por IA',
    description:
      'Extrai campos críticos de contratos, ofícios, notas fiscais e espelhos em lote, entregando planilhas limpas, CSV ou JSON conforme o esquema da sua operação.',
    href: '#integracoes',
    cta: 'Conhecer integrações',
  },
];

/**
 * Conectores de nuvem e autenticação corporativa.
 */
const CLOUD_INTEGRATIONS = [
  { name: 'Google Drive', desc: 'Leitura e devolução de arquivos já sanitizados direto em diretórios corporativos.' },
  { name: 'Microsoft OneDrive', desc: 'Conexão direta com bibliotecas SharePoint e fluxos Microsoft 365.' },
  { name: 'Dropbox Business', desc: 'Sincronização segura de lotes para revisão de compliance e jurídico.' },
  { name: 'Box Enterprise', desc: 'Políticas de retenção e trilha de auditoria integradas ao repositório.' },
];

/**
 * Padrões de Expressões Regulares (Regex) prontos para auditoria e customização.
 */
const REGEX_PATTERNS = [
  { name: 'CPF', category: 'Documento', pattern: '\\b\\d{3}\\.?\\d{3}\\.?\\d{3}-?\\d{2}\\b', sample: '384.912.608-45' },
  { name: 'RG / Registro', category: 'Documento', pattern: '\\b\\d{1,2}\\.?\\d{3}\\.?\\d{3}-?[0-9Xx]\\b', sample: '42.871.109-2' },
  { name: 'Cartão de Crédito', category: 'Financeiro', pattern: '\\b(?:\\d{4}[ -]?){3}\\d{4}\\b', sample: '4532 8910 2234 9012' },
  { name: 'Inscrição OAB', category: 'Jurídico', pattern: '\\bOAB\\s*/?[A-Z]{2}\\s*\\d{3,6}\\b', sample: 'OAB/SP 294810' },
  { name: 'CEP Residencial', category: 'Endereço', pattern: '\\b\\d{5}-?\\d{3}\\b', sample: '01310-200' },
  { name: 'E-mail Pessoal', category: 'Contato', pattern: '[\\w.+-]+@[\\w-]+\\.[a-zA-Z]{2,}', sample: 'titular@dominio.com.br' },
  { name: 'PIS / PASEP', category: 'Documento', pattern: '\\b\\d{3}\\.\\d{5}\\.\\d{2}-\\d\\b', sample: '128.49201.34-7' },
  { name: 'Placa Veicular', category: 'Identificação', pattern: '\\b[A-Z]{3}-?[0-9][A-Z0-9][0-9]{2}\\b', sample: 'BRA2E19' },
];

/**
 * Plataformas compatíveis e pilares do Edge Privacy Gateway para Portais.
 */
const PROXY_PLATFORMS = ['Nginx', 'Cloudflare', 'Apache', 'WordPress', 'Varnish', 'Tomcat'];
const PROXY_PILLARS = [
  {
    iconName: 'zap',
    title: 'Camada de borda sem alterar o CMS',
    description:
      'Conecte o conector reverso na frente do seu portal de transparência ou site institucional e proteja todo acervo PDF sem refatorar sistemas legados.',
  },
  {
    iconName: 'shield-check',
    title: 'Política Zero-Leak (Fail-Closed)',
    description:
      'Em caso de falha de rede ou validação incompleta, o gateway bloqueia o arquivo bruto em vez de liberá-lo — impedindo exposição acidental de titulares.',
  },
  {
    iconName: 'clock',
    title: 'Entrega em cache sanitizado',
    description:
      'A sanitização ocorre sob demanda no primeiro acesso e fica em cache seguro para requisições futuras, mantendo credenciais estritamente no servidor.',
  },
];


// @ts-check



/**
 * Escapa texto para prevenir injeção HTML.
 * @param {string} value
 * @returns {string}
 */
function esc(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/**
 * Renderiza o Header fixo com Mega-Menus acessíveis, seletor de idiomas e drawer mobile.
 * @param {boolean} mobileOpen
 * @param {'produtos' | 'solucoes' | 'recursos' | null} [openMenu=null]
 * @param {'pt' | 'en' | 'es'} [activeLang='pt']
 * @returns {string}
 */
function renderHeader(mobileOpen, openMenu = null, activeLang = 'pt') {
  /** @type {Array<'produtos' | 'solucoes' | 'recursos'>} */
  const menuKeys = ['produtos', 'solucoes', 'recursos'];

  return `
    <header class="site-header" id="site-header">
      <div class="container header-inner">
        <a href="#topo" class="brand-logo" aria-label="ANONYMIZE — Página inicial">
          <span class="brand-mark">${brandMarkSvg(36, 'hdr')}</span>
          <span class="brand-wordmark">
            <span class="brand-name">ANONYMIZE</span>
            <span class="brand-tagline">LGPD • LAI • IA</span>
          </span>
        </a>

        <nav class="nav-desktop" aria-label="Navegação principal">
          ${menuKeys
            .map((key) => {
              const menu = NAV_MENUS[key];
              const isOpen = openMenu === key;
              const isSingle = menu.columns.length === 1;
              return `
                <div class="nav-item-dropdown">
                  <button
                    type="button"
                    class="nav-dropdown-trigger"
                    aria-expanded="${isOpen ? 'true' : 'false'}"
                    aria-controls="mega-menu-${key}"
                    data-nav-dropdown="${key}"
                  >
                    ${esc(menu.label)}
                    ${icon('chevron-down', 15, 'currentColor', 'nav-chevron')}
                  </button>
                  ${
                    isOpen
                      ? `<div id="mega-menu-${key}" class="mega-menu-panel${isSingle ? ' single-col' : ''}" role="region" aria-label="Menu ${esc(menu.label)}">
                          <div class="mega-menu-grid">
                            ${menu.columns
                              .map(
                                (col) => `
                              <div>
                                <div class="mega-col-heading">${esc(col.heading)}</div>
                                ${col.items
                                  .map(
                                    (item) => `
                                  <a href="${item.href}" class="mega-link" data-close-dropdown>
                                    <span class="mega-link-icon">${icon(item.iconName, 17, '#00d4ff')}</span>
                                    <span>
                                      <span class="mega-link-title">
                                        ${esc(item.title)}
                                        ${item.badge ? `<span class="mega-link-badge">${esc(item.badge)}</span>` : ''}
                                      </span>
                                      <span class="mega-link-desc">${esc(item.desc)}</span>
                                    </span>
                                  </a>`
                                  )
                                  .join('')}
                              </div>`
                              )
                              .join('')}
                          </div>
                        </div>`
                      : ''
                  }
                </div>`;
            })
            .join('')}
          <a href="#planos" class="nav-link" data-close-dropdown>Planos</a>
        </nav>

        <div class="header-actions">
          ${renderLanguageSwitcher(activeLang)}
          <button type="button" class="header-login-btn" data-open-modal="login">
            Login do Cliente
          </button>
          <button type="button" class="btn btn-primary btn-sm" data-open-modal="signup">
            Criar conta grátis
          </button>
        </div>

        <button
          type="button"
          class="mobile-menu-toggle"
          data-toggle-mobile
          aria-label="${mobileOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}"
          aria-expanded="${mobileOpen ? 'true' : 'false'}"
          aria-controls="mobile-navigation"
        >
          ${icon(mobileOpen ? 'x' : 'menu', 20, '#ffffff')}
        </button>
      </div>
    </header>
    ${
      mobileOpen
        ? `<nav id="mobile-navigation" class="mobile-drawer" aria-label="Navegação mobile">
            <div class="mobile-lang-row">
              <span class="mono" style="font-size:0.74rem;color:#94a3b8">Idioma / Language</span>
              ${renderLanguageSwitcher(activeLang)}
            </div>
            <span class="mobile-section-label">Produtos &amp; Plataforma</span>
            <a href="#suite-produtos" data-close-mobile>Suíte de 5 Produtos Documentais</a>
            <a href="#multiformato" data-close-mobile>Anonimização Multiformato</a>
            <a href="#proxy-portais" data-close-mobile>Proxy de Anonimização para Portais</a>
            <a href="#integracoes" data-close-mobile>API REST, Nuvem &amp; Regras Regex</a>

            <span class="mobile-section-label">Soluções &amp; Recursos</span>
            <a href="#calculadora-roi" data-close-mobile>Calculadora de ROI e Economia</a>
            <a href="#setor-publico" data-close-mobile>Setor Público (LAI) &amp; Segmentos</a>
            <a href="#tecnicas" data-close-mobile>6 Técnicas de Anonimização</a>
            <a href="#planos" data-close-mobile>Planos &amp; Escala</a>
            <a href="#faq" data-close-mobile>Perguntas Frequentes (FAQ)</a>

            <div class="mobile-drawer-actions">
              <button type="button" class="btn btn-outline-dark btn-sm" data-open-modal="login" data-close-mobile>
                Login do Cliente
              </button>
              <button type="button" class="btn btn-primary btn-sm" data-open-modal="signup" data-close-mobile>
                Testar IA Grátis
              </button>
            </div>
          </nav>`
        : ''
    }
  `;
}

/**
 * Renderiza o Hero e o Simulador Interativo de Tarjamento.
 * @param {{ mode: 'original' | 'fake' | 'anonymize', categories: Record<string, boolean>, extractTested: boolean, scanning?: boolean, justRedacted?: boolean }} simState
 * @returns {string}
 */
function renderHero(simState) {
  /** @type {Record<string, import('./data.js').RedactionEntity>} */
  const entityMap = {};
  /** @type {Record<string, number>} */
  const entitySeq = {};
  HERO_ENTITIES.forEach((entity, idx) => {
    entityMap[entity.id] = entity;
    entitySeq[entity.id] = idx + 1;
  });

  /** @param {string} id */
  const renderEntity = (id) => {
    const item = entityMap[id];
    const seq = entitySeq[id] || 1;
    const isProtected = Boolean(simState.categories[item.category]);
    if (simState.mode === 'original' || !isProtected) {
      const cls = item.category === 'sensivel' ? 'entity-detected-sensivel' : 'entity-detected';
      return `<span class="entity-token ${cls}" title="${esc(item.label)} • Confiança IA: ${esc(item.confidence)} (${esc(item.legalBasis)})">${esc(item.original)}</span>`;
    }
    if (simState.mode === 'fake') {
      return `<span class="entity-token entity-fake-redacted${simState.extractTested ? ' leaked' : ''}" title="Tarja apenas visual — texto ainda existe na camada oculta do PDF">${esc(item.original)}</span>`;
    }
    return `<span class="entity-token entity-true-redacted" data-seq="${seq}" title="Removido irreversivelmente • ${esc(item.legalBasis)}">${esc(item.replacement)}</span>`;
  };

  const activeCount = HERO_ENTITIES.filter((e) => simState.categories[e.category]).length;

  return `
    <section id="topo" class="hero-section">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow eyebrow-dark">
            ${icon('sparkles', 14)}
            LGPD (Lei 13.709/2018) + LAI (Lei 12.527/2011)
          </span>

          <h1 class="hero-title">
            Anonimização irreversível e
            <span class="hero-title-accent">tarjamento de PDFs até 99% mais rápido</span> com IA.
          </h1>

          <p class="hero-lead">
            Entenda como funciona a anonimização real de dados e proteja processos, contratos,
            laudos e ofícios com <strong>remoção definitiva da camada de texto</strong>,
            <strong>OCR neural integrado</strong> e <strong>trilha de auditoria criptográfica</strong> —
            cumprindo a transparência da LAI sem risco de vazamento ou reidentificação indireta.
          </p>

          <div class="hero-cta-row">
            <button type="button" class="btn btn-primary btn-lg" data-open-modal="signup">
              Testar a IA Gratuitamente
              ${icon('arrow-right', 18)}
            </button>
            <button type="button" class="btn btn-outline-dark btn-lg" data-open-modal="demo">
              ${icon('calendar', 17)}
              Agendar Demonstração
            </button>
          </div>

          <div class="hero-metrics-strip">
            <div class="hero-metric-item">
              <span class="hero-metric-value">99%</span>
              <span class="hero-metric-label">menos trabalho manual em processos e PDFs</span>
            </div>
            <div class="hero-metric-item">
              <span class="hero-metric-value">0 bytes</span>
              <span class="hero-metric-label">de texto residual na camada oculta</span>
            </div>
            <div class="hero-metric-item">
              <span class="hero-metric-value">SHA-256</span>
              <span class="hero-metric-label">trilha auditável para DPO e ANPD</span>
            </div>
          </div>
        </div>

        <div id="simulador" class="sim-shell${simState.scanning ? ' is-scanning' : ''}" aria-label="Simulador interativo de tarjamento em documento">
          <div class="sim-topbar">
            <div class="sim-window-meta">
              <div class="sim-dots" aria-hidden="true"><span></span><span></span><span></span></div>
              <span class="sim-filename">SEI_0048219-44.2026.8.26.0053_Decisao.pdf</span>
            </div>
            <span class="sim-speed-badge">
              <span class="sim-live-dot" aria-hidden="true"></span>
              ${simState.scanning ? 'Escaneando com IA...' : '99% menos trabalho manual'}
            </span>
          </div>

          <div class="sim-progress-track" aria-hidden="true">
            <div class="sim-progress-fill"></div>
          </div>

          <div class="sim-controls">
            <div class="sim-mode-tabs" role="tablist" aria-label="Modo de visualização do documento">
              <button type="button" role="tab" aria-selected="${simState.mode === 'original'}"
                class="sim-mode-btn${simState.mode === 'original' ? ' active' : ''}" data-sim-mode="original">
                Original (IA)
              </button>
              <button type="button" role="tab" aria-selected="${simState.mode === 'fake'}"
                class="sim-mode-btn${simState.mode === 'fake' ? ' active-danger' : ''}" data-sim-mode="fake">
                Tarja Falsa (Risco)
              </button>
              <button type="button" role="tab" aria-selected="${simState.mode === 'anonymize'}"
                class="sim-mode-btn${simState.mode === 'anonymize' ? ' active-safe' : ''}" data-sim-mode="anonymize">
                ANONYMIZE IA
              </button>
            </div>

            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
              <button type="button" class="btn btn-outline-dark btn-sm" data-sim-animate>
                ${icon('sparkles', 14, '#00e5ff')}
                Simular Varredura IA
              </button>
              <button type="button" class="btn btn-outline-dark btn-sm" data-sim-extract>
                ${icon('copy', 14)}
                ${simState.extractTested ? 'Ocultar teste Ctrl+C' : 'Testar Ctrl+C / Extrair'}
              </button>
            </div>
          </div>

          <div class="sim-categories" aria-label="Filtrar categorias de dados detectadas">
            ${Object.entries(CATEGORY_LABELS)
              .map(([cat, label]) => {
                const enabled = Boolean(simState.categories[cat]);
                return `<button type="button" class="cat-chip${enabled ? ' enabled' : ''}"
                  aria-pressed="${enabled}" data-sim-cat="${cat}">
                  ${icon('check-circle', 12)}
                  ${esc(label)}
                </button>`;
              })
              .join('')}
          </div>

          <article class="sim-paper${simState.scanning ? ' scanning' : ''}${simState.justRedacted ? ' just-redacted' : ''}">
            <div class="sim-scan-beam" aria-hidden="true"></div>
            <div class="sim-paper-header">
              <span>DESPACHO ADMINISTRATIVO • PUBLICAÇÃO LAI / SEI</span>
              <span>OCR: ATIVO • PÁG. 01/18</span>
            </div>
            <p>
              <strong>Requerente:</strong> ${renderEntity('nome')}, inscrita no CPF sob o nº
              ${renderEntity('cpf')} e portadora do RG ${renderEntity('rg')}, residente em
              ${renderEntity('endereco')}.
            </p>
            <p>
              <strong>Síntese Técnica:</strong> Defere-se parcialmente o pedido de acesso à
              informação nos termos da Lei nº 12.527/2011, resguardando-se o anexo médico referente
              ao registro ${renderEntity('diagnostico')}, bem como a conta indicada para restituição
              ${renderEntity('conta')}.
            </p>
            <p>
              <strong>Deliberação Pública:</strong> Mantém-se integralmente pública a fundamentação
              administrativa e os valores globais do contrato nº 214/2026, garantindo transparência
              ativa sem exposição de terceiros.
            </p>
          </article>

          ${
            simState.extractTested
              ? `<div class="sim-extract-console" role="status" aria-live="polite">
                  <div class="sim-console-head">
                    <span class="mono" style="color:#94a3b8">$ pdftotext documento_saida.pdf - | grep -i "cpf|cid|mariana"</span>
                    ${
                      simState.mode === 'anonymize'
                        ? '<span class="sim-console-status-ok">✔ EXTRAÇÃO ZERO (SEGURO)</span>'
                        : '<span class="sim-console-status-danger">✖ VAZAMENTO DETECTADO</span>'
                    }
                  </div>
                  ${
                    simState.mode === 'anonymize'
                      ? '<div style="color:#6ee7b7">0 correspondências encontradas. Stream de texto destruído, objetos vetoriais sanitizados e metadados XMP removidos irreversivelmente.</div>'
                      : `<div style="color:#fca5a5">[CRÍTICO] Texto extraído intacto: "Mariana Alencar Ferreira | CPF 384.912.608-45 | CID-10 F32.2". ${
                          simState.mode === 'fake'
                            ? 'A caixa preta visual ocultou apenas na tela, mas manteve os dados copiáveis no PDF.'
                            : 'Documento original sem proteção aplicada.'
                        }</div>`
                  }
                </div>`
              : ''
          }

          <div class="sim-audit-footer">
            <span style="display:inline-flex;align-items:center;gap:6px">
              ${icon('scan-text', 13, '#38bdf8')}
              OCR Neural + ${activeCount}/6 entidades selecionadas
            </span>
            <span style="display:inline-flex;align-items:center;gap:6px">
              ${
                simState.mode === 'anonymize'
                  ? `${icon('lock', 13, '#34d399')} Audit SHA-256: <strong style="color:#e2e8f0">9f4b...c82e</strong> • 1,4s`
                  : `${icon('alert-triangle', 13, '#fbbf24')} Aguardando sanitização definitiva`
              }
            </span>
          </div>
        </div>
      </div>
    </section>

    <div class="trust-bar" aria-label="Públicos e conformidades atendidas">
      <div class="container trust-bar-inner">
        <span class="trust-label">Projetado para equipes de alta exigência regulatória</span>
        <div class="trust-pills">
          <span class="trust-pill">${icon('building', 14, '#38bdf8')} Órgãos Públicos &amp; LAI</span>
          <span class="trust-pill">${icon('scale', 14, '#38bdf8')} Jurídico &amp; PJe/SEI</span>
          <span class="trust-pill">${icon('shield-check', 14, '#38bdf8')} Compliance &amp; DPO</span>
          <span class="trust-pill">${icon('file-search', 14, '#38bdf8')} Saúde &amp; Financeiro</span>
          <span class="trust-pill">${icon('fingerprint', 14, '#38bdf8')} Engenharia &amp; API</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Seção 2: Conceito & LGPD (Art. 5º, III).
 * @returns {string}
 */
function renderConceptLgpd() {
  return `
    <section id="conceito-lgpd" class="section-light">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow eyebrow-light">
            ${icon('scale', 14)}
            Fundamento Legal • LGPD Art. 5º, III e Art. 12
          </span>
          <h2 class="section-title">
            O que é anonimização de dados na LGPD — e por que a irreversibilidade decide tudo
          </h2>
          <p class="section-subtitle">
            Na Lei Geral de Proteção de Dados (Lei nº 13.709/2018), anonimizar não significa apenas
            “ocultar um nome”. Significa aplicar transformações técnicas irreversíveis para que o
            titular não possa ser identificado direta nem indiretamente — retirando o conjunto do
            escopo regulatório da lei.
          </p>
        </div>

        <div class="lgpd-layout">
          <div>
            <div class="legal-quote-card">
              <span class="legal-quote-tag">LEI Nº 13.709/2018 • ART. 5º, INCISOS III E XI</span>
              <p class="legal-quote-text">
                “Dado anonimizado: dado relativo a titular que não possa ser identificado,
                considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião de
                seu tratamento.”
              </p>
              <p class="legal-quote-note">
                Pelo <strong>Art. 12 da LGPD</strong>, os dados anonimizados não são considerados
                dados pessoais para os fins da lei — salvo quando o processo ao qual foram submetidos
                for revertido por meios próprios ou esforços razoáveis, ou quando usados para formação
                de perfil comportamental de pessoa natural identificada.
              </p>
            </div>

            <div class="reid-callout">
              <h4>
                ${icon('shield-alert', 18, '#00d4ff')}
                Atenção ao risco de reidentificação indireta
              </h4>
              <p>
                Mesmo sem nome ou CPF, a combinação de <strong>quase-identificadores</strong> em
                relatórios, contratos ou tabelas abertas pode apontar diretamente para um único
                indivíduo quando cruzada com bases públicas, redes sociais ou portais de transparência.
              </p>
              <div class="qi-chain" aria-label="Exemplo de cadeia de reidentificação indireta">
                <span class="qi-chip">CEP 01310-200</span>
                <span style="color:#64748b">+</span>
                <span class="qi-chip">Nasc. 14/03/1988</span>
                <span style="color:#64748b">+</span>
                <span class="qi-chip">Cargo único no setor</span>
                <span style="color:#64748b">→</span>
                <span class="qi-result">Titular reidentificado (LGPD volta a valer)</span>
              </div>
            </div>
          </div>

          <div class="pillars-grid">
            <article class="pillar-card">
              <div class="pillar-icon">${icon('cpu', 22)}</div>
              <div>
                <h3>“Meios técnicos razoáveis e disponíveis”</h3>
                <p>
                  A LGPD adota um critério objetivo e dinâmico (Art. 12, §1º): avalia o
                  <strong>custo, o tempo necessário e o estado da tecnologia</strong> na ocasião do
                  tratamento. Uma técnica segura hoje pode perder eficácia se novas bases públicas ou
                  métodos computacionais tornarem a reversão viável.
                </p>
              </div>
            </article>

            <article class="pillar-card">
              <div class="pillar-icon">${icon('alert-circle', 22)}</div>
              <div>
                <h3>Identificação direta vs. indireta</h3>
                <p>
                  Remover apenas identificadores diretos (nome, CPF, e-mail) é o primeiro passo, mas
                  insuficiente em muitos cenários. Números de processo, matrículas funcionais,
                  assinaturas digitais, metadados de arquivo e contexto narrativo também podem revelar
                  a identidade do titular.
                </p>
              </div>
            </article>

            <article class="pillar-card">
              <div class="pillar-icon">${icon('landmark', 22)}</div>
              <div>
                <h3>O papel regulatório da ANPD</h3>
                <p>
                  Pelo <strong>Art. 12, §3º</strong>, a Autoridade Nacional de Proteção de Dados
                  (ANPD) tem competência para dispor sobre padrões e técnicas utilizados em processos
                  de anonimização e realizar verificações acerca de sua segurança. Documentar o método
                  e manter trilha auditável é essencial para prestar contas.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Seção 3: Tabela Comparativa Interativa Anonimização vs. Pseudonimização.
 * @param {'all' | 'lgpd-focus' | 'reversibility'} view
 * @returns {string}
 */
function renderComparison(view) {
  const rows =
    view === 'reversibility'
      ? COMPARISON_CRITERIA.filter((r) =>
          ['reversivel', 'dado-pessoal', 'reidentificacao', 'exemplo'].includes(r.id)
        )
      : COMPARISON_CRITERIA;

  return `
    <section id="comparativo" class="section-white">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow eyebrow-light">
            Comparativo Técnico &amp; Jurídico • Art. 12 vs. Art. 13, §4º
          </span>
          <h2 class="section-title">Anonimização vs. Pseudonimização</h2>
          <p class="section-subtitle">
            Um dos erros mais caros em projetos de privacidade é tratar pseudonimização como se fosse
            anonimização. Compare critério a critério e veja por que trocar um nome por um código ou
            hash não retira o dado do regime da LGPD.
          </p>
        </div>

        <div class="comp-toolbar">
          <div class="segmented-control" role="tablist" aria-label="Filtros da tabela comparativa">
            <button type="button" role="tab" aria-selected="${view === 'all'}"
              class="segmented-btn${view === 'all' ? ' active' : ''}" data-comp-view="all">
              Visão Completa (6 critérios)
            </button>
            <button type="button" role="tab" aria-selected="${view === 'lgpd-focus'}"
              class="segmented-btn${view === 'lgpd-focus' ? ' active' : ''}" data-comp-view="lgpd-focus">
              Destacar Impacto LGPD
            </button>
            <button type="button" role="tab" aria-selected="${view === 'reversibility'}"
              class="segmented-btn${view === 'reversibility' ? ' active' : ''}" data-comp-view="reversibility">
              Foco em Reversibilidade
            </button>
          </div>
          <span class="mono" style="font-size:0.78rem;color:var(--text-muted)">
            *Conforme exceções do Art. 12, §§ 1º e 2º da LGPD
          </span>
        </div>

        <div class="comp-table-wrap">
          <table class="comp-table">
            <thead>
              <tr>
                <th scope="col">Critério</th>
                <th scope="col" class="col-anon">Anonimização (Irreversível)</th>
                <th scope="col" class="col-pseudo">Pseudonimização (Reversível)</th>
              </tr>
            </thead>
            <tbody>
              ${rows
                .map((row) => {
                  const highlight =
                    view === 'lgpd-focus' &&
                    ['reversivel', 'dado-pessoal', 'sujeito-lgpd'].includes(row.id);
                  return `
                    <tr${highlight ? ' class="row-highlight"' : ''}>
                      <td class="comp-criterion">
                        ${esc(row.criterion)}
                        ${
                          view === 'lgpd-focus'
                            ? `<div class="lgpd-impact-box"><strong>Impacto LGPD:</strong> ${esc(row.lgpdImpact)}</div>`
                            : ''
                        }
                      </td>
                      <td>
                        <span class="status-pill status-${row.anonymization.tone}">
                          ${icon(row.anonymization.tone === 'positive' ? 'check-circle' : 'info', 13)}
                          ${esc(row.anonymization.badge)}
                        </span>
                        <p class="comp-detail">${esc(row.anonymization.detail)}</p>
                      </td>
                      <td>
                        <span class="status-pill status-${row.pseudonymization.tone}">
                          ${icon(row.pseudonymization.tone === 'warning' ? 'alert-triangle' : 'info', 13)}
                          ${esc(row.pseudonymization.badge)}
                        </span>
                        <p class="comp-detail">${esc(row.pseudonymization.detail)}</p>
                      </td>
                    </tr>
                  `;
                })
                .join('')}
            </tbody>
          </table>
        </div>

        <div class="pseudo-warning-banner" role="note">
          ${icon('shield-alert', 22, '#b45309')}
          <div>
            <strong>Por que pseudonimização não tira o dado da LGPD?</strong> No Art. 13, §4º, a
            própria LGPD define pseudonimização como o tratamento que impede a associação direta a um
            indivíduo <em>senão pelo uso de informação adicional mantida separadamente pelo controlador</em>.
            Enquanto existir chave, tabela de correspondência ou hash reversível, o dado continua sendo
            pessoal e exige base legal, governança de direitos do titular e controle de incidentes.
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Seção 4: Abas das 6 Principais Técnicas de Anonimização.
 * @param {{ selectedId: string, kFactor: number, epsilon: number }} techState
 * @returns {string}
 */
function renderTechniques(techState) {
  const active =
    ANONYMIZATION_TECHNIQUES.find((t) => t.id === techState.selectedId) ||
    ANONYMIZATION_TECHNIQUES[0];

  const privacy =
    active.id === 'k-anonimato'
      ? Math.min(98, 72 + techState.kFactor * 2)
      : active.id === 'privacidade-diferencial'
        ? Math.round(Math.max(70, Math.min(99, 102 - techState.epsilon * 18)))
        : active.privacyScore;

  const utility =
    active.id === 'k-anonimato'
      ? Math.max(54, 92 - techState.kFactor * 2)
      : active.id === 'privacidade-diferencial'
        ? Math.round(Math.max(55, Math.min(95, 62 + techState.epsilon * 18)))
        : active.utilityScore;

  return `
    <section id="tecnicas" class="section-dark">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow eyebrow-dark">
            ${icon('cpu', 14)}
            Engenharia de Privacidade • ISO/IEC 20889
          </span>
          <h2 class="section-title">Principais técnicas de anonimização de dados</h2>
          <p class="section-subtitle">
            Cada tipo de dado — estruturado em banco de dados ou não estruturado em PDFs — exige a
            técnica adequada para equilibrar resistência à reidentificação e utilidade analítica ou
            transparência pública. Explore os mecanismos e exemplos práticos abaixo.
          </p>
        </div>

        <div class="techniques-layout">
          <div class="tech-tabs" role="tablist" aria-label="Técnicas de anonimização">
            ${ANONYMIZATION_TECHNIQUES.map((tech) => {
              const isSelected = tech.id === active.id;
              return `
                <button type="button" role="tab" aria-selected="${isSelected}"
                  aria-controls="panel-${tech.id}" id="tab-${tech.id}"
                  class="tech-tab-btn${isSelected ? ' active' : ''}" data-tech-id="${tech.id}">
                  <span class="tech-tab-tag">${esc(tech.tag)}</span>
                  <span class="tech-tab-name">${esc(tech.name)}</span>
                  <span class="tech-tab-short">${esc(tech.shortDesc)}</span>
                </button>
              `;
            }).join('')}
          </div>

          <div class="tech-detail-card" role="tabpanel" id="panel-${active.id}" aria-labelledby="tab-${active.id}">
            <div class="tech-detail-head">
              <div>
                <span class="eyebrow eyebrow-dark" style="margin-bottom:8px">${esc(active.tag)}</span>
                <h3>${esc(active.name)}</h3>
              </div>
              ${active.formula ? `<code class="tech-formula">${esc(active.formula)}</code>` : ''}
            </div>

            <p style="margin:0 0 14px;color:#e2e8f0;line-height:1.7">${esc(active.fullDesc)}</p>
            <p style="margin:0 0 18px;color:#94a3b8;font-size:0.9rem">
              <strong style="color:#38bdf8">Mecanismo técnico:</strong> ${esc(active.mechanism)}
            </p>

            ${
              active.id === 'k-anonimato'
                ? `<div class="tech-slider-box">
                    <div class="tech-slider-head">
                      <span style="display:inline-flex;align-items:center;gap:6px">
                        ${icon('sliders', 15, '#00d4ff')}
                        Simular parâmetro <strong class="mono">k = ${techState.kFactor}</strong>
                        (indistinguível de ${techState.kFactor - 1} registros)
                      </span>
                      <span class="mono" style="color:#38bdf8;font-size:0.78rem">
                        Risco máx. de ligação: ${(100 / techState.kFactor).toFixed(1)}%
                      </span>
                    </div>
                    <input type="range" min="2" max="12" step="1" value="${techState.kFactor}"
                      aria-label="Ajustar valor de k para k-anonimato" class="tech-slider-input" data-slider="k" />
                  </div>`
                : ''
            }

            ${
              active.id === 'privacidade-diferencial'
                ? `<div class="tech-slider-box">
                    <div class="tech-slider-head">
                      <span style="display:inline-flex;align-items:center;gap:6px">
                        ${icon('sliders', 15, '#00d4ff')}
                        Simular orçamento de privacidade <strong class="mono">ε = ${techState.epsilon.toFixed(1)}</strong>
                      </span>
                      <span class="mono" style="color:#38bdf8;font-size:0.78rem">
                        ${
                          techState.epsilon <= 0.5
                            ? 'Privacidade muito alta (mais ruído)'
                            : techState.epsilon <= 1.2
                              ? 'Equilíbrio recomendado'
                              : 'Maior precisão estatística (menor ruído)'
                        }
                      </span>
                    </div>
                    <input type="range" min="0.1" max="1.8" step="0.1" value="${techState.epsilon}"
                      aria-label="Ajustar orçamento de privacidade épsilon" class="tech-slider-input" data-slider="epsilon" />
                  </div>`
                : ''
            }

            <div class="tech-meters">
              <div class="meter-box">
                <div class="meter-head">
                  <span>Resistência à reidentificação</span>
                  <strong class="mono" style="color:#34d399">${privacy}%</strong>
                </div>
                <div class="meter-track"><div class="meter-fill-privacy" style="width:${privacy}%"></div></div>
              </div>
              <div class="meter-box">
                <div class="meter-head">
                  <span>Preservação de utilidade analítica</span>
                  <strong class="mono" style="color:#60a5fa">${utility}%</strong>
                </div>
                <div class="meter-track"><div class="meter-fill-utility" style="width:${utility}%"></div></div>
              </div>
            </div>

            <div style="overflow-x:auto">
              <table class="tech-example-table">
                <thead>
                  <tr>
                    <th>Campo / Cenário</th>
                    <th>Antes (Exposto)</th>
                    <th>Depois (${esc(active.name)})</th>
                    <th>Efeito Técnico</th>
                  </tr>
                </thead>
                <tbody>
                  ${active.examples
                    .map(
                      (ex) => `
                    <tr>
                      <td style="font-weight:600;color:#f8fafc">${esc(ex.field)}</td>
                      <td class="tech-before">${esc(ex.before)}</td>
                      <td class="tech-after">${esc(ex.after)}</td>
                      <td style="color:#94a3b8">${esc(ex.note)}</td>
                    </tr>`
                    )
                    .join('')}
                </tbody>
              </table>
            </div>

            <div class="tech-footer-grid">
              <div class="tech-list-box">
                <h4>Quando utilizar na prática</h4>
                <ul>
                  ${active.bestFor.map((item) => `<li>${esc(item)}</li>`).join('')}
                </ul>
              </div>
              <div class="tech-caution-box">
                <div style="display:flex;align-items:center;gap:8px;font-weight:700;margin-bottom:8px">
                  ${icon('alert-triangle', 16)}
                  Ponto crítico de atenção
                </div>
                ${esc(active.caution)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Seção 5: Anonimização de Documentos & Tarjamento Real vs. Falso.
 * @param {boolean} inspectLayer
 * @returns {string}
 */
function renderDocumentRedaction(inspectLayer) {
  return `
    <section id="tarjamento-real" class="section-light">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow eyebrow-light">
            ${icon('layers', 14)}
            Anonimização Documental • PDFs, Processos e Contratos
          </span>
          <h2 class="section-title">Anonimização de Documentos &amp; Tarjamento Real vs. Falso</h2>
          <p class="section-subtitle">
            Grande parte dos dados pessoais mais sensíveis de uma organização não está em tabelas SQL —
            está em <strong>PDFs, processos administrativos, contratos, laudos médicos, ofícios e
            decisões judiciais</strong>. Entenda a diferença entre o objetivo legal e a execução técnica.
          </p>
        </div>

        <div class="dual-concept-grid">
          <article class="concept-box">
            <span class="eyebrow eyebrow-light" style="margin-bottom:12px">OBJETIVO LEGAL &amp; CONCEITUAL</span>
            <h3>Anonimização</h3>
            <p>
              É o <strong>resultado jurídico e técnico</strong> exigido pela LGPD: garantir que o
              titular não possa ser identificado direta ou indiretamente, considerando meios técnicos
              razoáveis. Aplica-se tanto a bases estruturadas quanto a arquivos e documentos.
            </p>
          </article>

          <article class="concept-box">
            <span class="eyebrow eyebrow-light" style="margin-bottom:12px">MÉTODO PRÁTICO EM DOCUMENTOS</span>
            <h3>Tarjamento (Redaction)</h3>
            <p>
              É o <strong>procedimento operacional</strong> que suprime dados pessoais e sensíveis em
              documentos não estruturados — processos do SEI/PJe, contratos, pareceres, laudos e
              ofícios — preservando a leitura do restante do conteúdo público ou contratual.
            </p>
          </article>
        </div>

        <div class="critical-redaction-lab">
          <div class="lab-header">
            <div style="max-width:680px">
              <span class="eyebrow eyebrow-danger" style="margin-bottom:12px">
                ${icon('alert-triangle', 14)}
                Alerta Crítico de Segurança • A Tarja Preta Visual Não Protege
              </span>
              <h3 style="margin:0 0 8px;font-size:1.5rem;font-weight:800">
                Colocar uma caixa preta por cima do PDF não anonimiza o documento
              </h3>
              <p style="margin:0;color:#cbd5e1;font-size:0.94rem">
                Quando alguém desenha um retângulo preto no Word, navegador ou editor comum de PDF, o
                texto original permanece gravado na camada subjacente. Qualquer pessoa com
                <code class="mono" style="color:#fca5a5">Ctrl+C</code>, busca textual ou leitor de
                metadados extrai todos os dados em segundos — configurando incidente perante a ANPD.
              </p>
            </div>

            <button type="button" class="btn btn-primary" data-toggle-pdf-layer>
              ${icon(inspectLayer ? 'eye' : 'code', 17)}
              ${inspectLayer ? 'Voltar à Visão do PDF' : 'Inspecionar Camada Interna do PDF'}
            </button>
          </div>

          <div class="lab-compare-grid">
            <div class="lab-card danger">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
                <strong style="display:inline-flex;align-items:center;gap:8px;color:#fca5a5">
                  ${icon('x-circle', 18, '#fca5a5')}
                  Tarjamento Falso (Editor Comum)
                </strong>
                <span class="mono" style="font-size:0.72rem;color:#f87171">RISCO DE VAZAMENTO</span>
              </div>

              ${
                !inspectLayer
                  ? `<div style="background:#ffffff;color:#0f172a;border-radius:10px;padding:16px;font-size:0.84rem">
                      <p style="margin:0 0 8px"><strong>Contrato nº 092/2026 — Cláusula 1ª</strong></p>
                      <p style="margin:0">
                        Contratado:
                        <span style="background:#000;color:#000;padding:1px 6px;border-radius:2px">Carlos Eduardo Nogueira</span>
                        • CPF
                        <span style="background:#000;color:#000;padding:1px 6px;border-radius:2px">219.448.703-11</span>
                      </p>
                      <p style="margin:10px 0 0;font-size:0.76rem;color:#b91c1c">
                        Dica: tente selecionar o texto sobre a tarja preta ou clique em "Inspecionar Camada Interna".
                      </p>
                    </div>`
                  : `<pre class="lab-code-view"><span class="code-muted">% PDF-1.7 Object Stream (Camada Textual INTACTA)</span>
<span class="code-danger">BT /F1 11 Tf (Carlos Eduardo Nogueira) Tj ET</span>
<span class="code-danger">BT /F1 11 Tf (CPF 219.448.703-11) Tj ET</span>
<span class="code-muted">% Retângulo apenas sobreposto visualmente:</span>
<span class="code-muted">0 0 0 rg 142 680 180 14 re f</span>
<span class="code-danger">&lt;xmp:Author&gt;carlos.nogueira@empresa.com&lt;/xmp:Author&gt;</span></pre>`
              }

              <ul style="margin:14px 0 0;padding-left:18px;color:#cbd5e1;font-size:0.84rem">
                <li>Texto continua selecionável, copiável e indexável por buscadores.</li>
                <li>Metadados (autor, revisões, comentários e miniaturas) permanecem no arquivo.</li>
                <li>Não atende ao Art. 12 da LGPD e expõe o órgão ou empresa a sanções.</li>
              </ul>
            </div>

            <div class="lab-card safe">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
                <strong style="display:inline-flex;align-items:center;gap:8px;color:#6ee7b7">
                  ${icon('shield-check', 18, '#6ee7b7')}
                  Tarjamento Real (Motor ANONYMIZE)
                </strong>
                <span class="mono" style="font-size:0.72rem;color:#34d399">IRREVERSÍVEL • AUDITADO</span>
              </div>

              ${
                !inspectLayer
                  ? `<div style="background:#ffffff;color:#0f172a;border-radius:10px;padding:16px;font-size:0.84rem">
                      <p style="margin:0 0 8px"><strong>Contrato nº 092/2026 — Cláusula 1ª</strong></p>
                      <p style="margin:0">
                        Contratado:
                        <span class="entity-token entity-true-redacted">[NOME_REMOVIDO]</span>
                        • CPF
                        <span class="entity-token entity-true-redacted">[CPF_REMOVIDO]</span>
                      </p>
                      <p style="margin:10px 0 0;font-size:0.76rem;color:#047857">
                        Stream textual destruído, metadados zerados e certificado SHA-256 gerado.
                      </p>
                    </div>`
                  : `<pre class="lab-code-view"><span class="code-muted">% PDF-1.7 Object Stream (Sanitizado ANONYMIZE)</span>
<span class="code-safe">% [CHARACTER GLYPHS &amp; TEXT STREAM PURGED]</span>
<span class="code-safe">BT /F1 10 Tf ([NOME_REMOVIDO]) Tj ET</span>
<span class="code-safe">BT /F1 10 Tf ([CPF_REMOVIDO]) Tj ET</span>
<span class="code-muted">% XMP / Author / Revision History / Thumbnails:</span>
<span class="code-safe">&lt;anonymize:Sanitized&gt;true&lt;/anonymize:Sanitized&gt;</span></pre>`
              }

              <ul style="margin:14px 0 0;padding-left:18px;color:#cbd5e1;font-size:0.84rem">
                <li>Remoção estrutural do texto, vetores, imagens ocultas e camada OCR afetada.</li>
                <li>Limpeza completa de metadados XMP, histórico de edições e comentários.</li>
                <li>Validação automática de extração zero + trilha de auditoria imutável.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Seção 6: LGPD na Prática, Exceções (Art. 12, §1º) e Setor Público (LAI).
 * @returns {string}
 */
function renderLgpdPracticeLai() {
  return `
    <section id="setor-publico" class="section-white">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow eyebrow-light">
            ${icon('scale', 14)}
            LGPD na Prática • Art. 12, §§ 1º e 2º &amp; LAI (Lei nº 12.527/2011)
          </span>
          <h2 class="section-title">
            Quando a anonimização libera obrigações da LGPD — e como conciliar LAI + privacidade
          </h2>
          <p class="section-subtitle">
            Entender os limites legais do Art. 12 evita passivos regulatórios e permite que empresas e
            órgãos públicos escalem transparência, analytics e compartilhamento documental com total
            segurança jurídica.
          </p>
        </div>

        <div class="exceptions-grid">
          <article class="exception-card releases">
            <h3>${icon('check-circle', 22, '#059669')} Quando a anonimização libera obrigações</h3>
            <ul class="check-list">
              <li>
                ${icon('check-circle', 16, '#059669')}
                <span><strong>Dispensa de base legal e consentimento:</strong> ao deixar de ser dado pessoal, o conjunto não exige nova hipótese legal do Art. 7º ou Art. 11 para utilização secundária.</span>
              </li>
              <li>
                ${icon('check-circle', 16, '#059669')}
                <span><strong>Alternativa segura à eliminação (Art. 16, IV):</strong> permite conservar histórico estatístico e documental após o fim do prazo de retenção sem manter dados identificáveis.</span>
              </li>
              <li>
                ${icon('check-circle', 16, '#059669')}
                <span><strong>Compartilhamento e publicação segura:</strong> viabiliza transparência ativa, abertura de dados, jurisprudência, pesquisa científica e treinamento de IA sem expor titulares.</span>
              </li>
            </ul>
          </article>

          <article class="exception-card blocks">
            <h3>${icon('ban', 22, '#dc2626')} Quando NÃO libera (Exceções Art. 12, §§ 1º e 2º)</h3>
            <ul class="check-list">
              <li>
                ${icon('x-circle', 16, '#dc2626')}
                <span><strong>Reversibilidade por meios razoáveis (Art. 12, §1º):</strong> se o controlador ou terceiros puderem reverter o processo com custo e tempo razoáveis — incluindo tarja visual falsa — a LGPD segue integralmente aplicável.</span>
              </li>
              <li>
                ${icon('x-circle', 16, '#dc2626')}
                <span><strong>Formação de perfil comportamental (Art. 12, §2º):</strong> dados anonimizados utilizados para <em>profiling</em> voltado a determinada pessoa natural, se identificada, voltam a ser tratados como dados pessoais.</span>
              </li>
              <li>
                ${icon('x-circle', 16, '#dc2626')}
                <span><strong>Ausência de comprovação técnica:</strong> sem evidência auditável do método aplicado, a organização não consegue demonstrar conformidade em fiscalizações da ANPD ou órgãos de controle.</span>
              </li>
            </ul>
          </article>
        </div>

        <div class="lai-banner">
          <div>
            <span class="eyebrow eyebrow-dark" style="margin-bottom:14px">
              ${icon('landmark', 14)}
              Setor Público • Equilíbrio LAI (12.527/2011) × LGPD (13.709/2018)
            </span>
            <h3 style="margin:0 0 14px;font-size:clamp(1.45rem,2.4vw,2rem);font-weight:800">
              Transparência ativa em larga escala sem vazar dados de cidadãos e terceiros
            </h3>
            <p style="margin:0 0 16px;color:#cbd5e1;font-size:0.96rem;line-height:1.7">
              A <strong>Lei de Acesso à Informação (LAI)</strong> determina que a publicidade é a
              regra geral e o sigilo é a exceção — mas o <strong>Art. 31 da LAI</strong> e o
              <strong>Art. 23 da LGPD</strong> exigem a proteção de informações pessoais relativas à
              intimidade, vida privada, honra e imagem.
            </p>
            <p style="margin:0;color:#94a3b8;font-size:0.92rem;line-height:1.68">
              Em vez de indeferir pedidos no e-SIC/Fala.BR ou gastar horas tarjando manualmente
              centenas de páginas do <strong>SEI</strong> e do <strong>PJe</strong>, órgãos públicos
              usam a ANONYMIZE para suprimir apenas os trechos protegidos, publicar a íntegra do ato
              administrativo com segurança e manter trilha auditável para TCU, CGU e ANPD.
            </p>
          </div>

          <div class="lai-stats">
            <div class="lai-stat-item">
              <div class="mono" style="color:#00e5ff;font-weight:700;font-size:1.12rem">LAI Art. 7º, §2º + Art. 31</div>
              <div style="font-size:0.84rem;color:#cbd5e1;margin-top:4px">
                Acesso assegurado à parte não sigilosa por meio de certidão, extrato ou cópia com ocultação irreversível da parte sob sigilo.
              </div>
            </div>
            <div class="lai-stat-item">
              <div class="mono" style="color:#34d399;font-weight:700;font-size:1.12rem">Fluxos SEI &amp; PJe em Lote</div>
              <div style="font-size:0.84rem;color:#cbd5e1;margin-top:4px">
                Processamento automatizado de processos de 500+ páginas com OCR em anexos digitalizados e revisão assistida por servidor.
              </div>
            </div>
          </div>
        </div>

        <div id="solucoes" style="padding-top:12px">
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:16px;margin-bottom:22px">
            <div>
              <span class="eyebrow eyebrow-light" style="margin-bottom:10px">
                ${icon('building', 14)}
                Soluções por Segmento
              </span>
              <h3 style="margin:0;font-size:1.55rem;font-weight:800">
                Arquitetura adaptada à rotina documental de cada setor
              </h3>
            </div>
            <span style="font-size:0.88rem;color:var(--text-muted)">
              Políticas pré-treinadas para entidades jurídicas, clínicas, financeiras e públicas
            </span>
          </div>

          <div class="sectors-grid">
            ${SECTOR_SOLUTIONS.map(
              (sol) => `
              <article class="sector-card">
                <span class="sector-badge">${esc(sol.badge)}</span>
                <h4>${esc(sol.sector)}</h4>
                <p>${esc(sol.summary)}</p>
                <div class="mono" style="font-size:0.73rem;color:#059669;font-weight:600;display:inline-flex;align-items:center;gap:5px">
                  ${icon('shield-check', 13, '#059669')}
                  ${esc(sol.complianceFocus)}
                </div>
                <div class="sector-docs">
                  ${sol.documents.map((doc) => `<span class="sector-doc-tag">${esc(doc)}</span>`).join('')}
                </div>
              </article>`
            ).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Seção 7: Guia Prático de Implementação (Bancos de Dados vs. Documentos).
 * @param {'documentos' | 'bancos'} track
 * @returns {string}
 */
function renderImplementationGuide(track) {
  const steps = track === 'documentos' ? DOCUMENT_IMPLEMENTATION_STEPS : DATABASE_IMPLEMENTATION_STEPS;

  return `
    <section id="implementacao" class="section-light">
      <div class="container">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:24px">
          <div class="section-header" style="margin-bottom:0">
            <span class="eyebrow eyebrow-light">
              ${icon('workflow', 14)}
              Guia Prático de Implementação
            </span>
            <h2 class="section-title">Como implementar anonimização com rigor técnico e governança</h2>
            <p class="section-subtitle">
              Alternar entre bases estruturadas e acervos documentais muda completamente o pipeline
              técnico. Selecione a trilha abaixo para ver o passo a passo operacional e os entregáveis
              de auditoria.
            </p>
          </div>

          <div class="segmented-control" role="tablist" aria-label="Trilha de implementação">
            <button type="button" role="tab" aria-selected="${track === 'documentos'}"
              class="segmented-btn${track === 'documentos' ? ' active' : ''}" data-impl-track="documentos">
              <span style="display:inline-flex;align-items:center;gap:7px">
                ${icon('file-text', 15)}
                Em Documentos (PDF / SEI / PJe)
              </span>
            </button>
            <button type="button" role="tab" aria-selected="${track === 'bancos'}"
              class="segmented-btn${track === 'bancos' ? ' active' : ''}" data-impl-track="bancos">
              <span style="display:inline-flex;align-items:center;gap:7px">
                ${icon('database', 15)}
                Em Bancos de Dados e Sistemas
              </span>
            </button>
          </div>
        </div>

        <div class="impl-grid" role="tabpanel">
          ${steps
            .map(
              (item) => `
            <article class="impl-card">
              <span class="impl-step-num">${esc(item.step)}</span>
              <h3>${esc(item.title)}</h3>
              <p>${esc(item.summary)}</p>
              <p style="font-size:0.8rem;color:var(--text-muted);background:#f8fafc;padding:8px 10px;border-radius:8px;border:1px solid var(--border-light)">
                ${esc(item.technicalNote)}
              </p>
              <div class="impl-deliverable">
                ${icon('check-circle', 13, '#0f766e')} ${esc(item.deliverable)}
              </div>
            </article>`
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * Seção de Planos.
 * @param {boolean} annual
 * @returns {string}
 */
function renderPlans(annual) {
  return `
    <section id="planos" class="section-dark">
      <div class="container">
        <div class="section-header centered">
          <span class="eyebrow eyebrow-dark">
            ${icon('layers', 14)}
            Planos &amp; Escala Corporativa / Governo
          </span>
          <h2 class="section-title">
            Comece gratuitamente e escale para milhares de páginas com auditoria completa
          </h2>
          <p class="section-subtitle">
            Infraestrutura segura no Brasil, API REST pronta para SEI/PJe e modelos flexíveis para
            escritórios, departamentos de compliance e órgãos públicos.
          </p>

          <div class="billing-toggle" role="group" aria-label="Período de faturamento">
            <button type="button" class="billing-btn${!annual ? ' active' : ''}"
              aria-pressed="${!annual}" data-billing="monthly">Mensal</button>
            <button type="button" class="billing-btn${annual ? ' active' : ''}"
              aria-pressed="${annual}" data-billing="annual">Anual (economize 17%)</button>
          </div>
        </div>

        <div class="plans-grid">
          ${PLAN_TIERS.map(
            (plan) => `
            <article class="plan-card${plan.highlighted ? ' highlighted' : ''}">
              ${plan.badge ? `<span class="plan-badge">${esc(plan.badge)}</span>` : ''}
              <h3 style="margin:0 0 8px;font-size:1.3rem;font-weight:800">${esc(plan.name)}</h3>
              <p style="margin:0;font-size:0.88rem;color:#94a3b8;min-height:44px">${esc(plan.tagline)}</p>
              <div class="plan-price">${esc(annual ? plan.annualPrice : plan.monthlyPrice)}</div>
              <div class="mono" style="font-size:0.76rem;color:#94a3b8">${esc(plan.periodNote)}</div>
              <ul class="plan-features">
                ${plan.features
                  .map(
                    (f) => `<li>${icon('check-circle', 16, '#00d4ff')}<span>${esc(f)}</span></li>`
                  )
                  .join('')}
              </ul>
              <button type="button" class="btn ${plan.highlighted ? 'btn-primary' : 'btn-outline-dark'}"
                style="width:100%" data-open-modal="${plan.ctaAction}">
                ${esc(plan.ctaLabel)}
                ${icon('arrow-right', 16)}
              </button>
            </article>`
          ).join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * Seção 8: FAQ Expansível (Acordeão Funcional e Acessível).
 * @param {{ filter: string, openIds: string[] }} faqState
 * @returns {string}
 */
function renderFaq(faqState) {
  const categories = ['Todas', 'LGPD', 'Técnico', 'Documentos', 'Setor Público'];
  const visible =
    faqState.filter === 'Todas'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((i) => i.category === faqState.filter);

  const allExpanded = visible.length > 0 && visible.every((i) => faqState.openIds.includes(i.id));

  return `
    <section id="faq" class="section-white">
      <div class="container">
        <div class="section-header centered">
          <span class="eyebrow eyebrow-light">
            ${icon('help-circle', 14)}
            Perguntas Frequentes • Referência Técnica e Jurídica
          </span>
          <h2 class="section-title">Dúvidas essenciais sobre anonimização, LGPD e tarjamento</h2>
          <p class="section-subtitle">
            Respostas objetivas elaboradas para DPOs, procuradorias, departamentos jurídicos e
            equipes de engenharia de dados.
          </p>
        </div>

        <div class="faq-list">
          <div class="faq-toolbar">
            <div class="segmented-control" role="tablist" aria-label="Filtrar perguntas por tema">
              ${categories
                .map(
                  (cat) => `
                <button type="button" role="tab" aria-selected="${faqState.filter === cat}"
                  class="segmented-btn${faqState.filter === cat ? ' active' : ''}" data-faq-filter="${cat}">
                  ${esc(cat)}
                </button>`
                )
                .join('')}
            </div>

            <button type="button" class="btn btn-outline-light btn-sm" data-faq-toggle-all>
              ${allExpanded ? 'Recolher todas' : 'Expandir todas'}
            </button>
          </div>

          ${visible
            .map((item) => {
              const isOpen = faqState.openIds.includes(item.id);
              return `
              <div class="faq-item${isOpen ? ' open' : ''}">
                <h3 style="margin:0">
                  <button type="button" id="faq-trigger-${item.id}" class="faq-trigger"
                    aria-expanded="${isOpen}" aria-controls="faq-panel-${item.id}" data-faq-toggle="${item.id}">
                    <span class="faq-question-meta">
                      <span class="faq-cat-pill">${esc(item.category)}${item.legalRef ? ` • ${esc(item.legalRef)}` : ''}</span>
                      <span class="faq-question-text">${esc(item.question)}</span>
                    </span>
                    ${icon('chevron-down', 20, 'currentColor', 'faq-chevron')}
                  </button>
                </h3>
                ${
                  isOpen
                    ? `<div id="faq-panel-${item.id}" role="region" aria-labelledby="faq-trigger-${item.id}" class="faq-panel">
                        ${esc(item.answer)}
                      </div>`
                    : ''
                }
              </div>`;
            })
            .join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * Seção 9: Bloco Institucional ANONYMIZE & CTA Final.
 * @returns {string}
 */
function renderInstitutionalCta() {
  return `
    <section id="institucional" class="section-light">
      <div class="container">
        <div class="institutional-card">
          <div>
            <span class="eyebrow eyebrow-dark" style="margin-bottom:16px">
              ${icon('shield-check', 14)}
              Sobre a Plataforma ANONYMIZE
            </span>
            <h2 style="margin:0 0 16px;font-size:clamp(1.75rem,3vw,2.5rem);font-weight:800;line-height:1.14;letter-spacing:-0.03em">
              Tecnologia brasileira de conformidade documental, anonimização real e tarjamento auditável
            </h2>
            <p style="margin:0 0 16px;color:#cbd5e1;font-size:1.02rem;line-height:1.7">
              A <strong>ANONYMIZE</strong> nasceu para eliminar o dilema entre velocidade operacional
              e rigor jurídico. Unimos inteligência artificial especializada no contexto legal
              brasileiro, OCR neural de alta precisão e sanitização estrutural irreversível de PDFs
              para que organizações públicas e privadas cumpram a LGPD e a LAI em escala — com
              governança ponta a ponta e zero vazamento na camada de texto.
            </p>
            <p style="margin:0 0 28px;color:#94a3b8;font-size:0.94rem">
              Teste agora com um documento real no ambiente gratuito ou converse com nossos
              especialistas em privacidade, SEI, PJe e integração via API.
            </p>

            <div style="display:flex;flex-wrap:wrap;gap:12px">
              <button type="button" class="btn btn-primary btn-lg" data-open-modal="signup">
                Testar a IA Gratuitamente
                ${icon('arrow-right', 18)}
              </button>
              <button type="button" class="btn btn-outline-dark btn-lg" data-open-modal="demo">
                ${icon('calendar', 17)}
                Falar com um Especialista
              </button>
            </div>
          </div>

          <div class="inst-metrics" aria-label="Indicadores de desempenho da plataforma">
            <div class="inst-metric-box">
              <strong>Até 99%</strong>
              <span>redução de tempo no tarjamento de processos e contratos</span>
            </div>
            <div class="inst-metric-box">
              <strong>100%</strong>
              <span>remoção da camada de texto, vetores ocultos e metadados</span>
            </div>
            <div class="inst-metric-box">
              <strong>LGPD + LAI</strong>
              <span>conformidade nativa para transparência pública e compliance</span>
            </div>
            <div class="inst-metric-box">
              <strong>Auditável</strong>
              <span>trilha imutável com hash SHA-256 pronta para DPO e ANPD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Footer completo com todas as colunas institucionais, produtos, soluções, aprender, empresa e barra legal.
 * @returns {string}
 */
function renderFooter() {
  return `
    <footer class="site-footer" id="contato">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a href="#topo" class="brand-logo" style="margin-bottom:16px" aria-label="ANONYMIZE — Voltar ao topo">
              <span class="brand-mark">${brandMarkSvg(38, 'ftr')}</span>
              <span class="brand-wordmark">
                <span class="brand-name">ANONYMIZE</span>
                <span class="brand-tagline">TARJAMENTO IRREVERSÍVEL</span>
              </span>
            </a>
            <p style="margin:0 0 18px;font-size:0.88rem;line-height:1.65">
              Plataforma de anonimização irreversível de dados e tarjamento automatizado de
              documentos com IA, OCR integrado e trilha de auditoria completa em conformidade com a
              LGPD (Lei nº 13.709/2018) e a LAI (Lei nº 12.527/2011).
            </p>
            <div style="display:flex;flex-direction:column;gap:8px;font-size:0.84rem">
              <a href="mailto:empresa.hubup@gmail.com" style="display:inline-flex;align-items:center;gap:8px;color:#e2e8f0">
                ${icon('mail', 15, '#38bdf8')}
                empresa.hubup@gmail.com
              </a>
              <button type="button" data-open-modal="dpo"
                style="background:none;border:none;padding:0;color:#38bdf8;cursor:pointer;display:inline-flex;align-items:center;gap:8px;font-size:0.84rem;text-align:left">
                ${icon('shield-check', 15, '#38bdf8')}
                Canal do Encarregado (DPO) — dpo@anonymize.com.br
              </button>
            </div>
          </div>

          ${FOOTER_GROUPS.map(
            (group) => `
            <div class="footer-col">
              <h4>${esc(group.title)}</h4>
              <ul class="footer-links">
                ${group.links
                  .map((link) =>
                    link.action
                      ? `<li><button type="button" data-open-modal="${link.action}">${esc(link.label)}</button></li>`
                      : `<li><a href="${link.href}">${esc(link.label)}</a></li>`
                  )
                  .join('')}
              </ul>
            </div>`
          ).join('')}
        </div>

        <div class="footer-bottom">
          <div>© 2026 ANONYMIZE. Todos os direitos reservados.</div>
          <div class="footer-legal-links">
            <button type="button" data-open-modal="legal-terms">Termos de uso</button>
            <button type="button" data-open-modal="legal-privacy">Aviso de privacidade</button>
            <button type="button" data-open-modal="dpo">Falar com o DPO</button>
            <button type="button" data-open-modal="cookies" style="display:inline-flex;align-items:center;gap:6px;color:#cbd5e1">
              ${icon('cookie', 14, '#38bdf8')}
              Preferências de cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  `;
}

/**
 * Botão flutuante de WhatsApp com mensagem pré-preenchida por idioma (PT / EN / ES).
 * Para configurar seu número comercial, basta ajustar a constante WHATSAPP_NUMBER abaixo.
 * @param {'pt' | 'en' | 'es'} [lang='pt']
 * @returns {string}
 */
function renderWhatsAppButton(lang = 'pt') {
  const WHATSAPP_NUMBER = '5581997579346';
  const copy = {
    pt: {
      label: 'Falar no WhatsApp',
      aria: 'Conversar com a equipe ANONYMIZE pelo WhatsApp',
      msg: 'Olá! Gostaria de conhecer melhor a plataforma ANONYMIZE para anonimização e tarjamento de documentos.',
    },
    en: {
      label: 'Chat on WhatsApp',
      aria: 'Chat with the ANONYMIZE team on WhatsApp',
      msg: 'Hello! I would like to learn more about the ANONYMIZE platform for data anonymization and document redaction.',
    },
    es: {
      label: 'Hablar por WhatsApp',
      aria: 'Conversar con el equipo de ANONYMIZE por WhatsApp',
      msg: '¡Hola! Me gustaría conocer más sobre la plataforma ANONYMIZE para anonimización y tachado de documentos.',
    },
  }[lang];

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(copy.msg)}`;

  return `
    <a
      href="${href}"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-fab"
      aria-label="${esc(copy.aria)}"
      title="${esc(copy.aria)}"
    >
      <span class="whatsapp-fab-dot" aria-hidden="true"></span>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .14 5.34.14 11.92c0 2.1.55 4.15 1.59 5.96L0 24l6.29-1.65a11.9 11.9 0 0 0 5.77 1.47h.01c6.57 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.47-8.42ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.45-4.45 9.87-9.91 9.87Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z"/>
      </svg>
    </a>
  `;
}


// @ts-check



/**
 * Formata valor monetário em Real Brasileiro.
 * @param {number} value
 * @returns {string}
 */
function formatBRL(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  });
}

/**
 * Área de Diagnóstico Operacional & Simulador de Retorno (ROI) — posicionada antes dos Planos.
 * @param {{ pagesPerMonth: number, hourlyCost: number, copied: boolean }} roiState
 * @returns {string}
 */
function renderCostAndRoi(roiState) {
  const pagesPerYear = roiState.pagesPerMonth * 12;
  // Premissa técnica ANONYMIZE: 4,0 min/página no fluxo manual (leitura + tarja + revisão) e ganho conservador de 92%
  const manualHoursPerYear = (pagesPerYear * 4.0) / 60;
  const savedHours = Math.round(manualHoursPerYear * 0.92);
  const savedDays = (savedHours / 8).toFixed(1).replace('.', ',');
  const annualSavings = savedHours * roiState.hourlyCost;

  return `
    <section id="custo-manual" class="section-white">
      <div class="container">
        <div class="section-header centered">
          <span class="eyebrow eyebrow-light">
            ${icon('clock', 14)}
            Diagnóstico de Risco &amp; Retorno Operacional
          </span>
          <h2 class="section-title">O gargalo silencioso da revisão manual de documentos</h2>
          <p class="section-subtitle">
            Tratar processos, contratos e anexos manualmente drena horas especializadas e mantém uma
            margem de erro humano difícil de auditar — até o primeiro incidente de exposição de dados.
          </p>
        </div>

        <div class="inaction-grid">
          ${INACTION_COSTS.map(
            (item) => `
            <article class="inaction-card">
              <div class="inaction-head">
                <span class="inaction-icon ${item.tone}">${icon(item.iconName, 20)}</span>
                <span class="inaction-metric">${esc(item.metric)}</span>
              </div>
              <h3>${esc(item.title)}</h3>
              <p>${esc(item.description)}</p>
            </article>`
          ).join('')}
        </div>

        <div id="calculadora-roi" class="roi-shell">
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:14px">
            <div>
              <span class="eyebrow eyebrow-light" style="margin-bottom:10px">
                ${icon('calculator', 14)}
                Simulador de Retorno Operacional (ROI)
              </span>
              <h3 style="margin:0 0 6px;font-size:clamp(1.45rem,2.4vw,2rem);font-weight:800">
                Projete o orçamento preservado com a ANONYMIZE
              </h3>
              <p style="margin:0;color:var(--text-secondary);font-size:0.95rem">
                Ajuste o volume mensal de páginas revisadas e o custo/hora da sua operação para estimar o ganho anual.
              </p>
            </div>
            <a href="#planos" style="font-size:0.86rem;font-weight:700;color:var(--accent-blue);display:inline-flex;align-items:center;gap:6px">
              Comparar com nossos planos ${icon('arrow-right', 15)}
            </a>
          </div>

          <div class="roi-grid">
            <div class="roi-panel">
              <div>
                <label for="roi-pages-input" style="display:block;font-weight:700;font-size:0.92rem;margin-bottom:6px">
                  Volume mensal de páginas para sanitização
                </label>
                <input
                  id="roi-pages-input"
                  type="number"
                  min="100"
                  max="50000"
                  step="100"
                  value="${roiState.pagesPerMonth}"
                  class="roi-number-input"
                  data-roi-input="pages"
                />
                <input
                  type="range"
                  min="100"
                  max="50000"
                  step="100"
                  value="${roiState.pagesPerMonth}"
                  aria-label="Selecionar volume mensal de páginas"
                  class="tech-slider-input"
                  style="margin-top:12px"
                  data-roi-slider="pages"
                />
                <div style="display:flex;justify-content:space-between;font-size:0.76rem;color:var(--text-muted);margin-top:4px" class="mono">
                  <span>100 págs/mês</span>
                  <strong style="color:var(--accent-blue)">${roiState.pagesPerMonth.toLocaleString('pt-BR')} págs/mês</strong>
                  <span>50.000 págs/mês</span>
                </div>
              </div>

              <div>
                <label for="roi-cost-select" style="display:block;font-weight:700;font-size:0.86rem;margin-bottom:6px">
                  Perfil médio de custo/hora da equipe
                </label>
                <select id="roi-cost-select" class="form-input" style="width:100%" data-roi-cost>
                  <option value="90" ${roiState.hourlyCost === 90 ? 'selected' : ''}>R$ 90/hora (operação administrativa / protocolo)</option>
                  <option value="120" ${roiState.hourlyCost === 120 ? 'selected' : ''}>R$ 120/hora (compliance / transparência / DPO)</option>
                  <option value="180" ${roiState.hourlyCost === 180 ? 'selected' : ''}>R$ 180/hora (procuradoria / jurídico especializado)</option>
                </select>
              </div>

              <ul class="roi-assumptions">
                <li>${icon('check-circle', 15, '#059669')} Benchmark de 4 min/página no ciclo manual (leitura, tarja e dupla revisão)</li>
                <li>${icon('check-circle', 15, '#059669')} Redução conservadora de 92% do esforço (chegando a 99% em lote via API)</li>
                <li>${icon('check-circle', 15, '#059669')} Conversão baseada em jornadas úteis de 8 horas</li>
              </ul>
            </div>

            <div class="roi-results-col">
              <div class="roi-big-card">
                <span class="roi-big-label">Orçamento Preservado / Ano</span>
                <div class="roi-big-value">${formatBRL(annualSavings)}</div>
                <p style="margin:8px 0 0;font-size:0.86rem;color:#cbd5e1">
                  Retorno operacional estimado ao substituir a conferência manual por sanitização automatizada com IA.
                </p>
              </div>

              <div class="roi-kpis-grid">
                <div class="roi-kpi-card">
                  <span class="mono" style="font-size:0.69rem;color:var(--accent-blue);font-weight:700">CAPACIDADE LIBERADA</span>
                  <div class="roi-kpi-val">${savedHours.toLocaleString('pt-BR')} h</div>
                  <div class="roi-kpi-sub">horas livres/ano</div>
                </div>
                <div class="roi-kpi-card">
                  <span class="mono" style="font-size:0.69rem;color:#059669;font-weight:700">JORNADAS ÚTEIS</span>
                  <div class="roi-kpi-val">${savedDays}</div>
                  <div class="roi-kpi-sub">dias recuperados/ano</div>
                </div>
                <div class="roi-kpi-card">
                  <span class="mono" style="font-size:0.69rem;color:#6366f1;font-weight:700">VOLUME ANUAL</span>
                  <div class="roi-kpi-val">${pagesPerYear.toLocaleString('pt-BR')}</div>
                  <div class="roi-kpi-sub">páginas sanitizadas</div>
                </div>
              </div>

              <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:4px">
                <button type="button" class="btn btn-primary" style="flex:1" data-open-modal="demo">
                  Validar no meu cenário real ${icon('arrow-right', 16)}
                </button>
                <button type="button" class="btn btn-outline-light" data-roi-copy>
                  ${icon(roiState.copied ? 'check-circle' : 'copy', 15)}
                  ${roiState.copied ? 'Resumo copiado!' : 'Copiar projeção para o financeiro'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Arquitetura Modular ANONYMIZE (5 Módulos primeiro) + Cobertura por Formato (ordem própria).
 * @returns {string}
 */
function renderMultiformatAndSuite() {
  return `
    <section id="suite-produtos" class="section-dark">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow eyebrow-dark">
            ${icon('sparkles', 14)}
            Arquitetura Modular ANONYMIZE
          </span>
          <h2 class="section-title">Da ingestão à publicação segura: 5 módulos integrados</h2>
          <p class="section-subtitle">
            Construa uma esteira completa de governança documental — da digitalização com OCR neural à
            consulta privada por IA local, extração estruturada e sanitização irreversível em nuvem brasileira ou on-premises.
          </p>
        </div>

        <div class="suite-grid">
          ${PRODUCT_SUITE.map(
            (mod) => `
            <article class="suite-card">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <span class="suite-badge">${esc(mod.badge)}</span>
                <span style="color:#00d4ff">${icon(mod.iconName, 20, '#00d4ff')}</span>
              </div>
              <h3>${esc(mod.title)}</h3>
              <p>${esc(mod.description)}</p>
              <a href="${mod.href}" class="suite-link">
                ${esc(mod.cta)} ${icon('arrow-right', 15)}
              </a>
            </article>`
          ).join('')}
        </div>
      </div>
    </section>

    <section id="multiformato" class="section-light">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow eyebrow-light">
            ${icon('layers', 14)}
            Cobertura Multicanal de Arquivos
          </span>
          <h2 class="section-title">Privacidade estrutural para cada formato da sua operação</h2>
          <p class="section-subtitle">
            Dados pessoais circulam em muito mais do que contratos PDF. Centralize regras de detecção,
            k-anonimato tabular, proteção de voz e geração sintética sob uma mesma trilha de auditoria.
          </p>
        </div>

        <div class="multiformat-grid">
          ${MULTIFORMAT_CAPABILITIES.map(
            (cap) => `
            <article class="multiformat-card">
              <span class="multiformat-cat">
                ${icon(cap.iconName, 15)}
                ${esc(cap.category)}
              </span>
              <h3>${esc(cap.title)}</h3>
              <p>${esc(cap.description)}</p>
            </article>`
          ).join('')}
        </div>
      </div>
    </section>
  `;
}

/**
 * Interoperabilidade Corporativa, Conectores Nuvem, SSO e Motor de Regras Regex.
 * @param {string} regexFilter
 * @returns {string}
 */
function renderIntegrationsAndRegex(regexFilter) {
  const categories = ['Todos', 'Documento', 'Financeiro', 'Jurídico', 'Endereço', 'Contato'];
  const filtered =
    regexFilter === 'Todos'
      ? REGEX_PATTERNS
      : REGEX_PATTERNS.filter((r) => r.category === regexFilter);

  return `
    <section id="integracoes" class="section-light">
      <div class="container">
        <div class="integrations-layout">
          <div>
            <span class="eyebrow eyebrow-light">
              ${icon('plug', 14)}
              Interoperabilidade &amp; Identidade
            </span>
            <h2 class="section-title">Interoperabilidade nativa com sua infraestrutura documental</h2>
            <p class="section-subtitle">
              A ANONYMIZE se acopla aos repositórios em nuvem, sistemas de processo eletrônico e
              provedores de identidade corporativos sem criar cópias paralelas nem alterar sua governança de acesso.
            </p>

            <div class="cloud-grid">
              ${CLOUD_INTEGRATIONS.map(
                (cloud) => `
                <div class="cloud-card">
                  <strong>${esc(cloud.name)}</strong>
                  <span>${esc(cloud.desc)}</span>
                </div>`
              ).join('')}
            </div>

            <ul class="check-list" style="margin-bottom:24px">
              <li>
                ${icon('lock', 17, '#1d4ed8')}
                <span><strong>Autenticação federada (Entra ID / SAML 2.0 / OIDC):</strong> controle de acesso por unidade organizacional e perfil de revisão.</span>
              </li>
              <li>
                ${icon('terminal', 17, '#1d4ed8')}
                <span><strong>API REST orientada a eventos:</strong> webhooks, filas em lote e manifesto JSON com evidência criptográfica SHA-256.</span>
              </li>
              <li>
                ${icon('shield-check', 17, '#1d4ed8')}
                <span><strong>Trilha auditável por operador e volume:</strong> histórico filtrável por período, regra aplicada e responsável pela aprovação.</span>
              </li>
            </ul>

            <div style="display:flex;flex-wrap:wrap;gap:10px">
              <button type="button" class="btn btn-dark-solid" data-open-modal="api-docs">
                ${icon('code', 16)}
                Ver exemplo da API REST
              </button>
              <button type="button" class="btn btn-outline-light" data-open-modal="demo">
                Falar com engenharia de integração
              </button>
            </div>
          </div>

          <div class="regex-panel">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
              <div>
                <span class="mono" style="font-size:0.72rem;color:var(--accent-blue);font-weight:700">DETECÇÃO HÍBRIDA: IA + REGEX</span>
                <h3 style="margin:4px 0 0;font-size:1.18rem;font-weight:800">Catálogo de padrões brasileiros customizáveis</h3>
              </div>
              <span class="status-pill status-positive" style="margin:0">Editável por política</span>
            </div>

            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:14px" role="tablist" aria-label="Filtrar expressões regulares">
              ${categories
                .map(
                  (cat) => `
                <button type="button" role="tab" aria-selected="${regexFilter === cat}"
                  class="segmented-btn${regexFilter === cat ? ' active' : ''}"
                  style="padding:6px 11px;font-size:0.76rem;border:1px solid var(--border-light)"
                  data-regex-filter="${cat}">
                  ${esc(cat)}
                </button>`
                )
                .join('')}
            </div>

            <div style="overflow-x:auto">
              <table class="regex-table">
                <thead>
                  <tr>
                    <th>Entidade</th>
                    <th>Expressão Regular</th>
                    <th>Exemplo</th>
                  </tr>
                </thead>
                <tbody>
                  ${filtered
                    .map(
                      (rule) => `
                    <tr>
                      <td>
                        <strong>${esc(rule.name)}</strong>
                        <div style="font-size:0.72rem;color:var(--text-muted)">${esc(rule.category)}</div>
                      </td>
                      <td><code class="regex-code">${esc(rule.pattern)}</code></td>
                      <td class="mono" style="font-size:0.74rem;color:#0f766e">${esc(rule.sample)}</td>
                    </tr>`
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Edge Privacy Gateway para Portais Públicos e Corporativos.
 * @returns {string}
 */
function renderPortalProxy() {
  return `
    <section id="proxy-portais" class="section-white">
      <div class="container">
        <div class="proxy-shell">
          <span class="eyebrow eyebrow-dark" style="margin-bottom:14px">
            ${icon('globe', 14)}
            Edge Privacy Gateway • Proteção em Trânsito
          </span>
          <h2 style="margin:0 auto 14px;max-width:760px;font-size:clamp(1.8rem,3.2vw,2.6rem);font-weight:800;letter-spacing:-0.03em;line-height:1.14">
            Gateway de privacidade em borda para portais públicos e corporativos
          </h2>
          <p style="margin:0 auto;max-width:710px;color:#cbd5e1;font-size:1.02rem;line-height:1.7">
            Intercepte e sanitize automaticamente PDFs servidos no seu portal de transparência ou site
            institucional antes da entrega ao navegador — <strong>sem reescrever o backend nem migrar seu acervo histórico</strong>.
          </p>

          <div class="proxy-platforms" aria-label="Servidores e plataformas suportadas">
            ${PROXY_PLATFORMS.map((p) => `<span class="proxy-platform-pill">${esc(p)}</span>`).join('')}
          </div>

          <div class="proxy-pillars">
            ${PROXY_PILLARS.map(
              (pillar) => `
              <article class="proxy-pillar-card">
                <span style="color:#00d4ff">${icon(pillar.iconName, 22, '#00d4ff')}</span>
                <h3>${esc(pillar.title)}</h3>
                <p>${esc(pillar.description)}</p>
              </article>`
            ).join('')}
          </div>

          <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px">
            <button type="button" class="btn btn-primary btn-lg" data-open-modal="demo">
              Ativar gateway no meu portal ${icon('arrow-right', 18)}
            </button>
            <button type="button" class="btn btn-outline-dark btn-lg" data-open-modal="api-docs">
              ${icon('terminal', 17)}
              Especificação para desenvolvedores
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}


// @ts-check
const TARGET_EMAIL = 'empresa.hubup@gmail.com';
const TARGET_WHATSAPP = '5581997579346';

/**
 * Monta link mailto: completo com assunto e corpo formatados.
 * @param {string} subject
 * @param {string} body
 * @returns {string}
 */
function buildMailtoHref(subject, body) {
  return `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Monta link wa.me com o resumo do orçamento.
 * @param {string} text
 * @returns {string}
 */
function buildWhatsappHref(text) {
  return `https://wa.me/${TARGET_WHATSAPP}?text=${encodeURIComponent(text)}`;
}

/**
 * Renderiza o modal ativo (Signup, Login, Demo/Orçamento, Cookies, DPO, Termos, Privacidade, API).
 * @param {{
 *   activeModal: import('./data.js').ModalType | null,
 *   submitting?: boolean,
 *   submittedMessage: string | null,
 *   submittedMailto?: string | null,
 *   submittedWhatsapp?: string | null,
 *   submittedStatus?: 'sent' | 'fallback' | null,
 *   prefillPages?: number,
 *   cookies: { analytics: boolean, functional: boolean }
 * }} modalState
 * @returns {string}
 */
function renderModal(modalState) {
  const {
    activeModal,
    submitting,
    submittedMessage,
    submittedMailto,
    submittedWhatsapp,
    submittedStatus,
    prefillPages,
    cookies,
  } = modalState;
  if (!activeModal) return '';

  const renderSubmittedView = (badgeText) => `
    <div class="status-pill ${submittedStatus === 'fallback' ? 'status-warning' : 'status-positive'}" style="margin-bottom:14px">
      ${icon(submittedStatus === 'fallback' ? 'mail' : 'check-circle', 14)} ${esc(badgeText)}
    </div>
    <p style="margin:0 0 16px;color:var(--text-secondary);font-size:0.92rem;line-height:1.6">${esc(submittedMessage || '')}</p>
    <div style="display:flex;flex-direction:column;gap:9px">
      ${
        submittedMailto
          ? `<a href="${submittedMailto}" class="btn btn-primary" style="width:100%">
              ${icon('mail', 16)} Abrir no meu aplicativo de e-mail (${TARGET_EMAIL})
            </a>`
          : ''
      }
      ${
        submittedWhatsapp
          ? `<a href="${submittedWhatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light" style="width:100%">
              Enviar resumo também pelo WhatsApp
            </a>`
          : ''
      }
      <button type="button" class="btn btn-dark-solid" style="width:100%" data-close-modal>Concluir</button>
    </div>
  `;

  /** @type {Record<string, { title: string, subtitle: string, body: string }>} */
  const configs = {
    signup: {
      title: 'Criar conta grátis na ANONYMIZE',
      subtitle: `Solicitação direcionada para ${TARGET_EMAIL} • Teste com até 50 páginas/mês e OCR neural.`,
      body: submittedMessage
        ? renderSubmittedView(
            submittedStatus === 'fallback'
              ? 'Pronto para enviar por e-mail'
              : 'Solicitação enviada para nossa equipe'
          )
        : `<form data-modal-form="signup">
            <div class="form-group">
              <label for="signup-name">Nome completo *</label>
              <input id="signup-name" name="name" type="text" required class="form-input" placeholder="Ex.: Dra. Fernanda Oliveira" />
            </div>
            <div class="form-group">
              <label for="signup-email">E-mail corporativo ou institucional *</label>
              <input id="signup-email" name="email" type="email" required class="form-input" placeholder="nome@organizacao.gov.br" />
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
              <div class="form-group">
                <label for="signup-org">Empresa ou Órgão *</label>
                <input id="signup-org" name="organization" type="text" required class="form-input" placeholder="Ex.: Prefeitura / Escritório" />
              </div>
              <div class="form-group">
                <label for="signup-phone">Telefone / WhatsApp</label>
                <input id="signup-phone" name="phone" type="tel" class="form-input" placeholder="(81) 99999-9999" />
              </div>
            </div>
            <div class="form-group">
              <label for="signup-sector">Perfil da organização</label>
              <select id="signup-sector" name="sector" class="form-input">
                <option value="Órgão Público / Transparência LAI">Órgão Público / Transparência LAI</option>
                <option value="Departamento Jurídico / Escritório">Departamento Jurídico / Escritório</option>
                <option value="Compliance / DPO">Compliance / DPO</option>
                <option value="Saúde / Pesquisa Clínica">Saúde / Pesquisa Clínica</option>
                <option value="Financeiro / Seguros">Financeiro / Seguros</option>
                <option value="Engenharia / TI / API">Engenharia / TI / API</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%" ${submitting ? 'disabled' : ''}>
              ${submitting ? 'Enviando solicitação...' : 'Ativar acesso gratuito agora'}
              ${submitting ? '' : icon('arrow-right', 16)}
            </button>
          </form>`,
    },
    login: {
      title: 'Login do Cliente',
      subtitle: 'Acesse sua workspace ANONYMIZE, filas de lote e trilhas de auditoria SHA-256.',
      body: submittedMessage
        ? `<div class="status-pill status-positive" style="margin-bottom:14px">${icon('lock', 14)} Autenticação simulada</div>
           <p style="margin:0 0 18px;color:var(--text-secondary)">${esc(submittedMessage)}</p>
           <button type="button" class="btn btn-dark-solid" style="width:100%" data-close-modal>Voltar ao site</button>`
        : `<form data-modal-form="login">
            <div class="form-group">
              <label for="login-email">E-mail cadastrado</label>
              <input id="login-email" name="email" type="email" required class="form-input" placeholder="voce@empresa.com.br" />
            </div>
            <div class="form-group">
              <label for="login-pass">Senha</label>
              <input id="login-pass" name="password" type="password" required class="form-input" placeholder="••••••••••••" />
            </div>
            <button type="submit" class="btn btn-dark-solid" style="width:100%;margin-bottom:10px">
              Entrar na plataforma
            </button>
            <button type="button" class="btn btn-outline-light" style="width:100%" data-open-modal="signup">
              Ainda não tem conta? Criar conta grátis
            </button>
          </form>`,
    },
    demo: {
      title: 'Solicitar Orçamento & Demonstração',
      subtitle: `Envio direto para ${TARGET_EMAIL} • Proposta personalizada para LGPD, LAI, SEI, PJe e API.`,
      body: submittedMessage
        ? renderSubmittedView(
            submittedStatus === 'fallback'
              ? 'Orçamento pronto para envio por e-mail'
              : 'Orçamento enviado para empresa.hubup@gmail.com'
          )
        : `<form data-modal-form="demo">
            <div class="form-group">
              <label for="demo-name">Seu nome completo *</label>
              <input id="demo-name" name="name" type="text" required class="form-input" placeholder="Ex.: Ricardo Mendes" />
            </div>
            <div class="form-group">
              <label for="demo-email">E-mail profissional *</label>
              <input id="demo-email" name="email" type="email" required class="form-input" placeholder="ricardo@orgao.gov.br" />
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
              <div class="form-group">
                <label for="demo-org">Empresa ou Órgão *</label>
                <input id="demo-org" name="organization" type="text" required class="form-input" placeholder="Nome da instituição" />
              </div>
              <div class="form-group">
                <label for="demo-phone">Telefone / WhatsApp *</label>
                <input id="demo-phone" name="phone" type="tel" required class="form-input" placeholder="(81) 99999-9999" />
              </div>
            </div>
            <div class="form-group">
              <label for="demo-volume">Volume estimado de páginas/mês</label>
              <select id="demo-volume" name="volume" class="form-input">
                <option value="Até 2.000 páginas/mês" ${!prefillPages || prefillPages <= 2000 ? 'selected' : ''}>Até 2.000 páginas/mês</option>
                <option value="2.000 a 10.000 páginas/mês" ${prefillPages && prefillPages > 2000 && prefillPages <= 10000 ? 'selected' : ''}>2.000 a 10.000 páginas/mês</option>
                <option value="10.000 a 50.000 páginas/mês" ${prefillPages && prefillPages > 10000 ? 'selected' : ''}>10.000 a 50.000 páginas/mês</option>
                <option value="Acima de 50.000 páginas/mês (API / Governo)">Acima de 50.000 páginas/mês (API / Governo)</option>
              </select>
            </div>
            <div class="form-group">
              <label for="demo-notes">Detalhes da necessidade ou documentos (opcional)</label>
              <textarea id="demo-notes" name="notes" rows="3" class="form-input" placeholder="Ex.: Tarjamento de processos no SEI, integração via API REST, implantação on-premises..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%" ${submitting ? 'disabled' : ''}>
              ${submitting ? 'Enviando orçamento...' : 'Enviar solicitação de orçamento'}
              ${submitting ? '' : icon('arrow-right', 16)}
            </button>
          </form>`,
    },
    cookies: {
      title: 'Preferências de Cookies',
      subtitle: 'Privacidade por padrão (Privacy by Design). Gerencie seus consentimentos abaixo.',
      body: `
        <div class="cookie-row">
          <div>
            <strong>Estritamente necessários</strong>
            <div style="font-size:0.82rem;color:var(--text-muted)">Essenciais para segurança, sessão e funcionamento da interface.</div>
          </div>
          <span class="status-pill status-positive" style="margin:0">Sempre ativo</span>
        </div>
        <div class="cookie-row">
          <div>
            <strong>Funcionais e preferências</strong>
            <div style="font-size:0.82rem;color:var(--text-muted)">Memoriza configurações de visualização e filtros técnicos.</div>
          </div>
          <input type="checkbox" ${cookies.functional ? 'checked' : ''} data-cookie-toggle="functional" aria-label="Cookies funcionais" />
        </div>
        <div class="cookie-row" style="border-bottom:none">
          <div>
            <strong>Métricas anônimas agregadas</strong>
            <div style="font-size:0.82rem;color:var(--text-muted)">Telemetria sem identificação pessoal para melhoria de performance.</div>
          </div>
          <input type="checkbox" ${cookies.analytics ? 'checked' : ''} data-cookie-toggle="analytics" aria-label="Cookies de métricas anônimas" />
        </div>
        <div style="display:flex;gap:10px;margin-top:18px">
          <button type="button" class="btn btn-outline-light" style="flex:1" data-cookie-save="essential">Apenas essenciais</button>
          <button type="button" class="btn btn-dark-solid" style="flex:1" data-cookie-save="custom">Salvar preferências</button>
        </div>`,
    },
    dpo: {
      title: 'Canal do Encarregado de Dados (DPO)',
      subtitle: 'Atendimento direto para direitos do titular (Art. 18 da LGPD) e auditorias técnicas.',
      body: `
        <p style="margin:0 0 12px;font-size:0.92rem;color:var(--text-secondary)">
          Nos termos do Art. 41 da Lei nº 13.709/2018 (LGPD), o Encarregado pelo Tratamento de Dados
          Pessoais (DPO) da <strong>ANONYMIZE</strong> recebe solicitações de titulares, órgãos
          públicos e comunicações da ANPD pelos canais oficiais:
        </p>
        <div style="background:#f8fafc;border:1px solid var(--border-light);border-radius:12px;padding:14px 16px;margin-bottom:18px" class="mono">
          <div><strong>E-mail Comercial / Orçamentos:</strong> ${TARGET_EMAIL}</div>
          <div><strong>Canal DPO:</strong> dpo@anonymize.com.br</div>
          <div><strong>SLA Titulares:</strong> até 5 dias úteis</div>
        </div>
        <button type="button" class="btn btn-dark-solid" style="width:100%" data-close-modal>Entendido</button>`,
    },
    'legal-terms': {
      title: 'Termos de Uso — ANONYMIZE',
      subtitle: 'Resumo das condições de utilização da plataforma e responsabilidade técnica.',
      body: `
        <p style="margin:0 0 12px;font-size:0.9rem;color:var(--text-secondary)">
          A plataforma ANONYMIZE fornece ferramentas automatizadas de OCR, detecção de entidades e
          sanitização estrutural irreversível de documentos. O controlador mantém integral titularidade
          sobre os arquivos enviados, com opção de retenção zero após o download do documento tarjado.
        </p>
        <p style="margin:0 0 18px;font-size:0.9rem;color:var(--text-secondary)">
          Todas as operações geram trilha de auditoria criptográfica (SHA-256) para apoio à prestação
          de contas prevista no Art. 6º, X da LGPD.
        </p>
        <button type="button" class="btn btn-dark-solid" style="width:100%" data-close-modal>Fechar</button>`,
    },
    'legal-privacy': {
      title: 'Aviso de Privacidade — ANONYMIZE',
      subtitle: 'Transparência sobre dados tratados pela própria ANONYMIZE em conformidade com a LGPD.',
      body: `
        <p style="margin:0 0 12px;font-size:0.9rem;color:var(--text-secondary)">
          Adotamos minimização de dados, criptografia em trânsito (TLS 1.3) e em repouso (AES-256),
          além de política estrita de não utilização de documentos de clientes para treinamento de
          modelos de IA de terceiros.
        </p>
        <p style="margin:0 0 18px;font-size:0.9rem;color:var(--text-secondary)">
          Para exercer direitos previstos no Art. 18 da LGPD, acione nosso atendimento em
          <strong>${TARGET_EMAIL}</strong>.
        </p>
        <button type="button" class="btn btn-dark-solid" style="width:100%" data-close-modal>Fechar</button>`,
    },
    'api-docs': {
      title: 'API REST ANONYMIZE — Especificação Rápida',
      subtitle: 'Exemplo de requisição para sanitização irreversível com trilha SHA-256.',
      body: `
        <p style="margin:0 0 10px;font-size:0.88rem;color:var(--text-secondary)">
          Envie PDFs, planilhas ou textos via endpoint autenticado com chave server-side e receba o
          documento sanitizado acompanhado do manifesto JSON de auditoria:
        </p>
        <pre class="lab-code-view" style="margin:0 0 16px;color:#e2e8f0"><span style="color:#38bdf8">POST /api/v1/anonymize  HTTP/1.1</span>
Authorization: Bearer anm_live_••••••••
Content-Type: multipart/form-data

<span style="color:#6ee7b7">{
  "status": "concluido",
  "paginas_analisadas": 127,
  "entidades_removidas": {
    "nome_completo": 14,
    "cpf": 6,
    "endereco": 4,
    "dado_sensivel_saude": 2
  },
  "camada_textual_purgada": true,
  "audit_sha256": "9f4b21c8e901a7...c82e"
}</span></pre>
        <div style="display:flex;gap:10px">
          <button type="button" class="btn btn-primary" style="flex:1" data-open-modal="demo">Solicitar chave de sandbox</button>
          <button type="button" class="btn btn-outline-light" data-close-modal>Fechar</button>
        </div>`,
    },
  };

  const cfg = configs[activeModal];
  if (!cfg) return '';

  return `
    <div class="modal-backdrop" data-modal-backdrop role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal-card">
        <div class="modal-header">
          <div>
            <h2 id="modal-title" style="margin:0 0 4px;font-size:1.25rem;font-weight:800">${cfg.title}</h2>
            <p style="margin:0;font-size:0.86rem;color:var(--text-muted)">${cfg.subtitle}</p>
          </div>
          <button type="button" class="modal-close" data-close-modal aria-label="Fechar janela">
            ${icon('x', 18)}
          </button>
        </div>
        <div>${cfg.body}</div>
      </div>
    </div>
  `;
}


// @ts-check





const state = {
  /** @type {'pt' | 'en' | 'es'} */
  lang: 'pt',
  mobileOpen: false,
  /** @type {'produtos' | 'solucoes' | 'recursos' | null} */
  openDropdown: null,
  sim: {
    /** @type {'original' | 'fake' | 'anonymize'} */
    mode: 'anonymize',
    /** @type {Record<string, boolean>} */
    categories: {
      identificacao: true,
      documento: true,
      sensivel: true,
      financeiro: true,
    },
    extractTested: false,
    scanning: false,
    justRedacted: false,
  },
  roi: {
    pagesPerMonth: 1000,
    hourlyCost: 120,
    copied: false,
  },
  regexFilter: 'Todos',
  /** @type {'all' | 'lgpd-focus' | 'reversibility'} */
  comparisonView: 'all',
  tech: {
    selectedId: ANONYMIZATION_TECHNIQUES[0].id,
    kFactor: 5,
    epsilon: 0.5,
  },
  inspectPdfLayer: false,
  /** @type {'documentos' | 'bancos'} */
  implTrack: 'documentos',
  annualBilling: true,
  faq: {
    filter: 'Todas',
    openIds: [FAQ_ITEMS[0].id],
  },
  modal: {
    /** @type {import('./data.js').ModalType | null} */
    activeModal: null,
    submitting: false,
    /** @type {string | null} */
    submittedMessage: null,
    /** @type {string | null} */
    submittedMailto: null,
    /** @type {string | null} */
    submittedWhatsapp: null,
    /** @type {'sent' | 'fallback' | null} */
    submittedStatus: null,
    prefillPages: 1000,
    cookies: {
      functional: true,
      analytics: false,
    },
  },
};

/** @param {string} id @param {string} html */
function mount(id, html) {
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = html;
    translateElement(el, state.lang);
  }
}

function applyPageMeta() {
  const meta = PAGE_META[state.lang] || PAGE_META.pt;
  document.documentElement.lang = meta.htmlLang;
  document.title = meta.title;
}

function updateHeaderScroll() {
  const header = document.getElementById('site-header');
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 18);
  }
}

function renderHeaderSlot() {
  mount('slot-header', renderHeader(state.mobileOpen, state.openDropdown, state.lang));
  updateHeaderScroll();
}

function renderAll() {
  applyPageMeta();
  renderHeaderSlot();
  mount('slot-hero', renderHero(state.sim));
  mount('slot-roi', renderCostAndRoi(state.roi));
  mount('slot-multiformat', renderMultiformatAndSuite());
  mount('slot-concept', renderConceptLgpd());
  mount('slot-comparison', renderComparison(state.comparisonView));
  mount('slot-techniques', renderTechniques(state.tech));
  mount('slot-redaction', renderDocumentRedaction(state.inspectPdfLayer));
  mount('slot-lai', renderLgpdPracticeLai());
  mount('slot-integrations', renderIntegrationsAndRegex(state.regexFilter));
  mount('slot-proxy', renderPortalProxy());
  mount('slot-implementation', renderImplementationGuide(state.implTrack));
  mount('slot-plans', renderPlans(state.annualBilling));
  mount('slot-faq', renderFaq(state.faq));
  mount('slot-institutional', renderInstitutionalCta());
  mount('slot-footer', renderFooter());
  mount('slot-whatsapp', renderWhatsAppButton(state.lang));
  mount('slot-modal', renderModal(state.modal));
}

/** @type {number[]} */
let simTimers = [];

function clearSimTimers() {
  for (const id of simTimers) clearTimeout(id);
  simTimers = [];
}

/**
 * Executa a sequência animada de varredura neural (Original -> Scanner -> Tarjamento Progressivo).
 */
function runSimScanAnimation() {
  clearSimTimers();
  state.sim.extractTested = false;
  state.sim.mode = 'original';
  state.sim.scanning = true;
  state.sim.justRedacted = false;
  mount('slot-hero', renderHero(state.sim));

  const t1 = window.setTimeout(() => {
    state.sim.mode = 'anonymize';
    state.sim.justRedacted = true;
    mount('slot-hero', renderHero(state.sim));
  }, 780);

  const t2 = window.setTimeout(() => {
    state.sim.scanning = false;
    mount('slot-hero', renderHero(state.sim));
  }, 1450);

  const t3 = window.setTimeout(() => {
    state.sim.justRedacted = false;
  }, 2100);

  simTimers.push(t1, t2, t3);
}

function renderModalOnly() {
  mount('slot-modal', renderModal(state.modal));
  document.body.style.overflow = state.modal.activeModal ? 'hidden' : '';
}

function bindEvents() {
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    // Language switcher (PT / EN / ES)
    const langBtn = target.closest('[data-set-lang]');
    if (langBtn) {
      const nextLang = langBtn.getAttribute('data-set-lang');
      if (nextLang === 'pt' || nextLang === 'en' || nextLang === 'es') {
        state.lang = nextLang;
        try {
          localStorage.setItem('anonymize_lang', nextLang);
        } catch {
          // Ignorar
        }
        renderAll();
      }
      return;
    }

    // Mega-menu dropdown toggle
    const dropdownBtn = target.closest('[data-nav-dropdown]');
    if (dropdownBtn) {
      const key = dropdownBtn.getAttribute('data-nav-dropdown');
      if (key === 'produtos' || key === 'solucoes' || key === 'recursos') {
        state.openDropdown = state.openDropdown === key ? null : key;
        renderHeaderSlot();
      }
      return;
    }

    // Close mega-menu when clicking a link inside it or outside nav-item-dropdown
    if (target.closest('[data-close-dropdown]') || (state.openDropdown && !target.closest('.nav-item-dropdown'))) {
      state.openDropdown = null;
      renderHeaderSlot();
    }

    // Mobile drawer toggle
    if (target.closest('[data-toggle-mobile]')) {
      state.mobileOpen = !state.mobileOpen;
      state.openDropdown = null;
      renderHeaderSlot();
      return;
    }

    if (target.closest('[data-close-mobile]')) {
      state.mobileOpen = false;
      renderHeaderSlot();
    }

    // Open modal
    const modalBtn = target.closest('[data-open-modal]');
    if (modalBtn) {
      const type = modalBtn.getAttribute('data-open-modal');
      if (type) {
        state.openDropdown = null;
        renderHeaderSlot();
        state.modal.activeModal = /** @type {import('./data.js').ModalType} */ (type);
        state.modal.submitting = false;
        state.modal.submittedMessage = null;
        state.modal.submittedMailto = null;
        state.modal.submittedWhatsapp = null;
        state.modal.submittedStatus = null;
        state.modal.prefillPages = state.roi.pagesPerMonth;
        renderModalOnly();
      }
      return;
    }

    // Close modal
    if (target.closest('[data-close-modal]') || target.matches('[data-modal-backdrop]')) {
      state.modal.activeModal = null;
      state.modal.submitting = false;
      state.modal.submittedMessage = null;
      state.modal.submittedMailto = null;
      state.modal.submittedWhatsapp = null;
      state.modal.submittedStatus = null;
      renderModalOnly();
      return;
    }

    // ROI copy summary
    if (target.closest('[data-roi-copy]')) {
      const pagesYear = state.roi.pagesPerMonth * 12;
      const savedHours = Math.round(((pagesYear * 4.0) / 60) * 0.92);
      const savings = (savedHours * state.roi.hourlyCost).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0,
      });
      const summary = `Projeção ANONYMIZE — Volume: ${state.roi.pagesPerMonth.toLocaleString('pt-BR')} páginas/mês (${pagesYear.toLocaleString('pt-BR')}/ano) | Orçamento preservado estimado: ${savings} (${savedHours.toLocaleString('pt-BR')} horas liberadas/ano).`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(summary).catch(() => {});
      }
      state.roi.copied = true;
      mount('slot-roi', renderCostAndRoi(state.roi));
      setTimeout(() => {
        state.roi.copied = false;
        mount('slot-roi', renderCostAndRoi(state.roi));
      }, 2400);
      return;
    }

    // Regex filter tabs
    const regexBtn = target.closest('[data-regex-filter]');
    if (regexBtn) {
      const cat = regexBtn.getAttribute('data-regex-filter');
      if (cat) {
        state.regexFilter = cat;
        mount('slot-integrations', renderIntegrationsAndRegex(state.regexFilter));
      }
      return;
    }

    // Cookie save buttons
    const cookieSave = target.closest('[data-cookie-save]');
    if (cookieSave) {
      const mode = cookieSave.getAttribute('data-cookie-save');
      if (mode === 'essential') {
        state.modal.cookies.functional = false;
        state.modal.cookies.analytics = false;
      }
      try {
        localStorage.setItem('anonymize_cookie_prefs', JSON.stringify(state.modal.cookies));
      } catch {
        // Ignorar
      }
      state.modal.activeModal = null;
      renderModalOnly();
      return;
    }

    // Hero Simulator Replay AI Scan button
    if (target.closest('[data-sim-animate]')) {
      runSimScanAnimation();
      return;
    }

    // Hero Simulator mode
    const simModeBtn = target.closest('[data-sim-mode]');
    if (simModeBtn) {
      const next = simModeBtn.getAttribute('data-sim-mode');
      if (next === 'original' || next === 'fake' || next === 'anonymize') {
        clearSimTimers();
        state.sim.scanning = false;
        state.sim.mode = next;
        state.sim.extractTested = false;
        state.sim.justRedacted = next === 'anonymize';
        mount('slot-hero', renderHero(state.sim));
      }
      return;
    }

    // Hero Simulator Ctrl+C test
    if (target.closest('[data-sim-extract]')) {
      state.sim.extractTested = !state.sim.extractTested;
      mount('slot-hero', renderHero(state.sim));
      return;
    }

    // Hero Simulator category chip
    const simCatBtn = target.closest('[data-sim-cat]');
    if (simCatBtn) {
      const cat = simCatBtn.getAttribute('data-sim-cat');
      if (cat && cat in state.sim.categories) {
        state.sim.categories[cat] = !state.sim.categories[cat];
        state.sim.extractTested = false;
        mount('slot-hero', renderHero(state.sim));
      }
      return;
    }

    // Comparison view filter
    const compBtn = target.closest('[data-comp-view]');
    if (compBtn) {
      const view = compBtn.getAttribute('data-comp-view');
      if (view === 'all' || view === 'lgpd-focus' || view === 'reversibility') {
        state.comparisonView = view;
        mount('slot-comparison', renderComparison(state.comparisonView));
      }
      return;
    }

    // Technique tab selection
    const techBtn = target.closest('[data-tech-id]');
    if (techBtn) {
      const techId = techBtn.getAttribute('data-tech-id');
      if (techId) {
        state.tech.selectedId = techId;
        mount('slot-techniques', renderTechniques(state.tech));
      }
      return;
    }

    // PDF internal layer inspector toggle
    if (target.closest('[data-toggle-pdf-layer]')) {
      state.inspectPdfLayer = !state.inspectPdfLayer;
      mount('slot-redaction', renderDocumentRedaction(state.inspectPdfLayer));
      return;
    }

    // Implementation guide track switch
    const implBtn = target.closest('[data-impl-track]');
    if (implBtn) {
      const track = implBtn.getAttribute('data-impl-track');
      if (track === 'documentos' || track === 'bancos') {
        state.implTrack = track;
        mount('slot-implementation', renderImplementationGuide(state.implTrack));
      }
      return;
    }

    // Billing period toggle
    const billingBtn = target.closest('[data-billing]');
    if (billingBtn) {
      state.annualBilling = billingBtn.getAttribute('data-billing') === 'annual';
      mount('slot-plans', renderPlans(state.annualBilling));
      return;
    }

    // FAQ filter
    const faqFilterBtn = target.closest('[data-faq-filter]');
    if (faqFilterBtn) {
      const cat = faqFilterBtn.getAttribute('data-faq-filter');
      if (cat) {
        state.faq.filter = cat;
        mount('slot-faq', renderFaq(state.faq));
      }
      return;
    }

    // FAQ single item toggle
    const faqToggleBtn = target.closest('[data-faq-toggle]');
    if (faqToggleBtn) {
      const id = faqToggleBtn.getAttribute('data-faq-toggle');
      if (id) {
        if (state.faq.openIds.includes(id)) {
          state.faq.openIds = state.faq.openIds.filter((item) => item !== id);
        } else {
          state.faq.openIds = [...state.faq.openIds, id];
        }
        mount('slot-faq', renderFaq(state.faq));
      }
      return;
    }

    // FAQ expand/collapse all
    if (target.closest('[data-faq-toggle-all]')) {
      const visible =
        state.faq.filter === 'Todas'
          ? FAQ_ITEMS
          : FAQ_ITEMS.filter((item) => item.category === state.faq.filter);
      const allOpen = visible.every((item) => state.faq.openIds.includes(item.id));
      state.faq.openIds = allOpen ? [] : visible.map((item) => item.id);
      mount('slot-faq', renderFaq(state.faq));
    }
  });

  // Live range sliders & numeric inputs
  document.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    const sliderType = target.getAttribute('data-slider');
    if (sliderType === 'k') {
      state.tech.kFactor = Number(target.value);
      mount('slot-techniques', renderTechniques(state.tech));
      const el = document.querySelector('[data-slider="k"]');
      if (el instanceof HTMLInputElement) el.focus();
      return;
    }

    if (sliderType === 'epsilon') {
      state.tech.epsilon = Number(target.value);
      mount('slot-techniques', renderTechniques(state.tech));
      const el = document.querySelector('[data-slider="epsilon"]');
      if (el instanceof HTMLInputElement) el.focus();
      return;
    }

    if (target.hasAttribute('data-roi-slider')) {
      state.roi.pagesPerMonth = Math.max(100, Math.min(50000, Number(target.value) || 100));
      state.roi.copied = false;
      mount('slot-roi', renderCostAndRoi(state.roi));
      const el = document.querySelector('[data-roi-slider="pages"]');
      if (el instanceof HTMLInputElement) el.focus();
      return;
    }

    if (target.hasAttribute('data-roi-input')) {
      const val = Number(target.value);
      if (!Number.isNaN(val) && val >= 50) {
        state.roi.pagesPerMonth = Math.min(50000, Math.round(val));
        state.roi.copied = false;
        mount('slot-roi', renderCostAndRoi(state.roi));
        const el = document.querySelector('[data-roi-input="pages"]');
        if (el instanceof HTMLInputElement) {
          el.focus();
          el.setSelectionRange(el.value.length, el.value.length);
        }
      }
    }
  });

  document.addEventListener('change', (event) => {
    const target = event.target;
    if (target instanceof HTMLSelectElement && target.hasAttribute('data-roi-cost')) {
      state.roi.hourlyCost = Number(target.value) || 120;
      state.roi.copied = false;
      mount('slot-roi', renderCostAndRoi(state.roi));
      return;
    }

    if (target instanceof HTMLInputElement) {
      const cookieKey = target.getAttribute('data-cookie-toggle');
      if (cookieKey === 'functional' || cookieKey === 'analytics') {
        state.modal.cookies[cookieKey] = target.checked;
      }
    }
  });

  // Modal form submissions (com envio real direcionado para empresa.hubup@gmail.com + fallback mailto/WhatsApp)
  document.addEventListener('submit', async (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    const kind = form.getAttribute('data-modal-form');
    if (!kind) return;

    event.preventDefault();
    const data = new FormData(form);
    const email = String(data.get('email') || '').trim();
    const name = String(data.get('name') || '').trim();
    const organization = String(data.get('organization') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const volume = String(data.get('volume') || '').trim();
    const sector = String(data.get('sector') || '').trim();
    const notes = String(data.get('notes') || '').trim();

    if (kind === 'login') {
      state.modal.submittedMessage = `Credenciais validadas em modo demonstração para ${email}. Em produção, você será direcionado ao painel com SSO e trilha de auditoria SHA-256.`;
      renderModalOnly();
      return;
    }

    const isDemo = kind === 'demo';
    const subject = isDemo
      ? `[ANONYMIZE] Solicitação de Orçamento / Demo — ${organization || name}`
      : `[ANONYMIZE] Novo Cadastro Conta Grátis — ${organization || name}`;

    const summaryLines = [
      isDemo ? 'SOLICITAÇÃO DE ORÇAMENTO / DEMONSTRAÇÃO — ANONYMIZE' : 'SOLICITAÇÃO DE CONTA GRÁTIS — ANONYMIZE',
      `Nome: ${name}`,
      `E-mail: ${email}`,
      organization ? `Empresa / Órgão: ${organization}` : '',
      phone ? `Telefone / WhatsApp: ${phone}` : '',
      volume ? `Volume estimado: ${volume}` : '',
      sector ? `Perfil / Setor: ${sector}` : '',
      notes ? `Observações: ${notes}` : '',
    ].filter(Boolean);

    const plainBody = summaryLines.join('\n');
    const mailtoHref = buildMailtoHref(subject, plainBody);
    const whatsappHref = buildWhatsappHref(plainBody);

    state.modal.submitting = true;
    renderModalOnly();

    let sentAutomatically = false;
    const canUseAjax = window.location.protocol === 'http:' || window.location.protocol === 'https:';

    if (canUseAjax) {
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: subject,
            _template: 'table',
            _captcha: 'false',
            Tipo: isDemo ? 'Solicitação de Orçamento / Demonstração' : 'Conta Grátis',
            Nome: name,
            Email: email,
            Organizacao: organization || 'Não informado',
            Telefone_WhatsApp: phone || 'Não informado',
            Volume_ou_Setor: volume || sector || 'Não informado',
            Observacoes: notes || 'Sem observações adicionais',
          }),
        });
        if (res.ok) {
          sentAutomatically = true;
        }
      } catch {
        sentAutomatically = false;
      }
    }

    state.modal.submitting = false;
    state.modal.submittedMailto = mailtoHref;
    state.modal.submittedWhatsapp = whatsappHref;

    if (sentAutomatically) {
      state.modal.submittedStatus = 'sent';
      state.modal.submittedMessage = `Solicitação enviada com sucesso para ${TARGET_EMAIL}! Nossa equipe responderá para ${email} em até 1 dia útil. Se desejar agilizar, você também pode enviar o resumo pelo WhatsApp abaixo.`;
    } else {
      state.modal.submittedStatus = 'fallback';
      state.modal.submittedMessage = `Preparamos sua solicitação direcionada para ${TARGET_EMAIL}. Clique no botão abaixo para abrir seu aplicativo de e-mail já preenchido ou enviar diretamente pelo WhatsApp.`;
    }
    renderModalOnly();
  });

  // Escape key closes modal, mega-menu or mobile drawer
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (state.modal.activeModal) {
        state.modal.activeModal = null;
        state.modal.submittedMessage = null;
        renderModalOnly();
      } else if (state.openDropdown || state.mobileOpen) {
        state.openDropdown = null;
        state.mobileOpen = false;
        renderHeaderSlot();
      }
    }
  });

  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
}

try {
  const savedLang = localStorage.getItem('anonymize_lang');
  if (savedLang === 'pt' || savedLang === 'en' || savedLang === 'es') {
    state.lang = savedLang;
  }
  const saved = localStorage.getItem('anonymize_cookie_prefs');
  if (saved) {
    const parsed = JSON.parse(saved);
    state.modal.cookies.functional = Boolean(parsed.functional);
    state.modal.cookies.analytics = Boolean(parsed.analytics);
  }
} catch {
  // Ignorar
}

renderAll();
bindEvents();

// Dispara demonstração animada inicial do painel de teste ao carregar a página
if (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.setTimeout(runSimScanAnimation, 420);
}

})();
