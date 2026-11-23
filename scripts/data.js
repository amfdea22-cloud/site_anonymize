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
export const CATEGORY_LABELS = {
  identificacao: 'Identificação',
  documento: 'CPF / RG',
  sensivel: 'Saúde (Sensível)',
  financeiro: 'Bancário',
};

/** @type {RedactionEntity[]} */
export const HERO_ENTITIES = [
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
export const COMPARISON_CRITERIA = [
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
export const ANONYMIZATION_TECHNIQUES = [
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
export const SECTOR_SOLUTIONS = [
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
export const DATABASE_IMPLEMENTATION_STEPS = [
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
export const DOCUMENT_IMPLEMENTATION_STEPS = [
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
export const PLAN_TIERS = [
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
export const FAQ_ITEMS = [
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
export const FOOTER_GROUPS = [
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
export const NAV_MENUS = {
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
export const INACTION_COSTS = [
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
export const MULTIFORMAT_CAPABILITIES = [
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
export const PRODUCT_SUITE = [
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
export const CLOUD_INTEGRATIONS = [
  { name: 'Google Drive', desc: 'Leitura e devolução de arquivos já sanitizados direto em diretórios corporativos.' },
  { name: 'Microsoft OneDrive', desc: 'Conexão direta com bibliotecas SharePoint e fluxos Microsoft 365.' },
  { name: 'Dropbox Business', desc: 'Sincronização segura de lotes para revisão de compliance e jurídico.' },
  { name: 'Box Enterprise', desc: 'Políticas de retenção e trilha de auditoria integradas ao repositório.' },
];

/**
 * Padrões de Expressões Regulares (Regex) prontos para auditoria e customização.
 */
export const REGEX_PATTERNS = [
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
export const PROXY_PLATFORMS = ['Nginx', 'Cloudflare', 'Apache', 'WordPress', 'Varnish', 'Tomcat'];

export const PROXY_PILLARS = [
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
