// @ts-check
import { icon } from './icons.js';
import { esc } from './sections.js';
import {
  CLOUD_INTEGRATIONS,
  INACTION_COSTS,
  MULTIFORMAT_CAPABILITIES,
  PRODUCT_SUITE,
  PROXY_PILLARS,
  PROXY_PLATFORMS,
  REGEX_PATTERNS,
} from './data.js';

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
export function renderCostAndRoi(roiState) {
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
export function renderMultiformatAndSuite() {
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
export function renderIntegrationsAndRegex(regexFilter) {
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
export function renderPortalProxy() {
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
