// @ts-check
import { ANONYMIZATION_TECHNIQUES, FAQ_ITEMS } from './data.js';
import { PAGE_META, translateElement } from './i18n.js';
import {
  renderComparison,
  renderConceptLgpd,
  renderDocumentRedaction,
  renderFaq,
  renderFooter,
  renderHeader,
  renderHero,
  renderImplementationGuide,
  renderInstitutionalCta,
  renderLgpdPracticeLai,
  renderPlans,
  renderTechniques,
  renderWhatsAppButton,
} from './sections.js';
import {
  renderCostAndRoi,
  renderIntegrationsAndRegex,
  renderMultiformatAndSuite,
  renderPortalProxy,
} from './areas.js';
import { renderModal } from './modals.js';

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
    /** @type {string | null} */
    submittedMessage: null,
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
        state.modal.submittedMessage = null;
        renderModalOnly();
      }
      return;
    }

    // Close modal
    if (target.closest('[data-close-modal]') || target.matches('[data-modal-backdrop]')) {
      state.modal.activeModal = null;
      state.modal.submittedMessage = null;
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

  // Modal form submissions
  document.addEventListener('submit', (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    const kind = form.getAttribute('data-modal-form');
    if (!kind) return;

    event.preventDefault();
    const data = new FormData(form);
    const email = String(data.get('email') || '');
    const name = String(data.get('name') || '');

    if (kind === 'signup') {
      state.modal.submittedMessage = `Ambiente gratuito reservado para ${name} (${email}). Você já pode carregar seu primeiro PDF para testar o OCR neural e a remoção irreversível da camada de texto.`;
    } else if (kind === 'login') {
      state.modal.submittedMessage = `Credenciais validadas em modo demonstração para ${email}. Em produção, você será direcionado ao painel com SSO e trilha de auditoria SHA-256.`;
    } else if (kind === 'demo') {
      state.modal.submittedMessage = `Recebemos o pedido de demonstração para ${name} (${email}). Nossa equipe técnica de conformidade LGPD/LAI entrará em contato em até 1 dia útil.`;
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
