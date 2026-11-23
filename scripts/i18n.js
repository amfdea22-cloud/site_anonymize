// @ts-check

/** @typedef {'pt' | 'en' | 'es'} LangCode */

/** @type {Record<LangCode, { htmlLang: string, title: string }>} */
export const PAGE_META = {
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
export function translateElement(root, lang) {
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
export function renderLanguageSwitcher(activeLang) {
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
