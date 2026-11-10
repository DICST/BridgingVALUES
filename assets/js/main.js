/* Atlas do Boqueirão da Onça — Main JS */

(function () {
  'use strict';

  // --- Idioma (a página EN é gerada no build com <html lang="en">) ---
  const isEn = document.documentElement.lang === 'en';
  const T = isEn
    ? { dataset: 'dataset', datasets: 'datasets', found: 'found', sending: 'Sending...', send: 'Send Message' }
    : { dataset: 'dataset', datasets: 'datasets', found: 'encontrado', sending: 'Enviando...', send: 'Enviar Mensagem' };

  // Botão PT/EN: mantém a seção atual (#hash) ao trocar de idioma
  const langSwitch = document.getElementById('lang-switch');
  if (langSwitch) {
    langSwitch.addEventListener('click', function () {
      const base = langSwitch.getAttribute('href');
      langSwitch.setAttribute('href', base.split('#')[0] + window.location.hash);
    });
  }

  // --- Sticky Nav ---
  const nav = document.getElementById('nav');

  function updateNav() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // --- Hamburger Menu ---
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- File Browser Search / Filter ---
  const searchInput    = document.getElementById('file-search');
  const countEl        = document.getElementById('dataset-count');
  const noResults      = document.getElementById('no-results');
  const noResultsQuery = document.getElementById('no-results-query');
  const rows           = document.querySelectorAll('.dataset-row');

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function filterFiles() {
    const query = removeAccents(searchInput.value.trim().toLowerCase());
    let visible = 0;

    rows.forEach(function (row) {
      const name = removeAccents(row.getAttribute('data-name') || '');
      const match = !query || name.includes(query);
      row.classList.toggle('hidden', !match);
      if (match) visible++;
    });

    if (countEl) {
      countEl.innerHTML = isEn
        ? '<strong>' + visible + '</strong> dataset' + (visible !== 1 ? 's' : '') + ' found'
        : '<strong>' + visible + '</strong> dataset' + (visible !== 1 ? 's' : '') + ' encontrado' + (visible !== 1 ? 's' : '');
    }

    if (noResults) {
      noResults.style.display = visible === 0 ? 'block' : 'none';
    }

    // Atualiza o termo exibido na mensagem de "sem resultados"
    if (noResultsQuery) {
      noResultsQuery.textContent = searchInput.value;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterFiles);

    // Contagem inicial
    if (countEl) {
      countEl.innerHTML = '<strong>' + rows.length + '</strong> datasets ' + (isEn ? 'found' : 'encontrados');
    }
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // --- Intersection Observer: fade-in sections ---
  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeEls.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // --- Feedback Form Submission & Modal ---
  const feedbackForm = document.getElementById('feedback-form');
  const hiddenIframe = document.getElementById('hidden_iframe');
  const feedbackModal = document.getElementById('feedback-modal');
  const btnSubmitFeedback = document.getElementById('btn-submit-feedback');
  let isSubmitting = false;

  if (feedbackForm && hiddenIframe && feedbackModal) {
    feedbackForm.addEventListener('submit', function () {
      isSubmitting = true;
      setTimeout(function () {
        if (btnSubmitFeedback) {
          btnSubmitFeedback.disabled = true;
          const btnSpan = btnSubmitFeedback.querySelector('span');
          if (btnSpan) btnSpan.textContent = T.sending;
        }
      }, 0);
    });

    hiddenIframe.addEventListener('load', function () {
      if (isSubmitting) {
        // Exibe o modal de sucesso
        feedbackModal.classList.add('modal--active');
        feedbackModal.setAttribute('aria-hidden', 'false');

        // Restaura o botão de submit
        if (btnSubmitFeedback) {
          btnSubmitFeedback.disabled = false;
          const btnSpan = btnSubmitFeedback.querySelector('span');
          if (btnSpan) btnSpan.textContent = T.send;
        }

        // Reseta os campos do formulário
        feedbackForm.reset();
        isSubmitting = false;

        // Fecha o modal automaticamente após 4 segundos (4000ms)
        setTimeout(function () {
          feedbackModal.classList.remove('modal--active');
          feedbackModal.setAttribute('aria-hidden', 'true');
        }, 4000);
      }
    });

    // Fecha o modal ao clicar no fundo (backdrop)
    feedbackModal.addEventListener('click', function (e) {
      if (e.target === feedbackModal) {
        feedbackModal.classList.remove('modal--active');
        feedbackModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

})();

