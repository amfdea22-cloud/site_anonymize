// @ts-check
import { icon } from './icons.js';
import { esc } from './sections.js';

export const TARGET_EMAIL = 'empresa.hubup@gmail.com';
export const TARGET_WHATSAPP = '5581997579346';
export const WEB3FORMS_ACCESS_KEY = 'c48a615a-6e70-49f9-9ead-c2be3a0c92e2';

/**
 * Monta link mailto: completo com assunto e corpo formatados.
 * @param {string} subject
 * @param {string} body
 * @returns {string}
 */
export function buildMailtoHref(subject, body) {
  return `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Monta link wa.me com o resumo do orçamento.
 * @param {string} text
 * @returns {string}
 */
export function buildWhatsappHref(text) {
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
export function renderModal(modalState) {
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
