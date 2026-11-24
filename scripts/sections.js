// @ts-check
import { brandMarkSvg, icon } from './icons.js';
import { renderLanguageSwitcher } from './i18n.js';
import {
  ANONYMIZATION_TECHNIQUES,
  CATEGORY_LABELS,
  COMPARISON_CRITERIA,
  DATABASE_IMPLEMENTATION_STEPS,
  DOCUMENT_IMPLEMENTATION_STEPS,
  FAQ_ITEMS,
  FOOTER_GROUPS,
  HERO_ENTITIES,
  NAV_MENUS,
  PLAN_TIERS,
  SECTOR_SOLUTIONS,
} from './data.js';

/**
 * Escapa texto para prevenir injeção HTML.
 * @param {string} value
 * @returns {string}
 */
export function esc(value) {
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
export function renderHeader(mobileOpen, openMenu = null, activeLang = 'pt') {
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
export function renderHero(simState) {
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
export function renderConceptLgpd() {
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
export function renderComparison(view) {
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
export function renderTechniques(techState) {
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
export function renderDocumentRedaction(inspectLayer) {
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
export function renderLgpdPracticeLai() {
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
export function renderImplementationGuide(track) {
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
export function renderPlans(annual) {
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
export function renderFaq(faqState) {
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
export function renderInstitutionalCta() {
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
export function renderFooter() {
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
export function renderWhatsAppButton(lang = 'pt') {
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
