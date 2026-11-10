<?php if (!defined('ATLAS_APP')) { http_response_code(403); exit; } ?>
<section class="section" id="contato" aria-labelledby="feedback-title">
  <div class="container">
    <div class="feedback-wrap fade-in">
      <span class="section-label">Contato</span>
      <h3 class="section-title" id="feedback-title">Queremos te ouvir</h3>
      <p class="section-subtitle">
        Envie sua experiência ou opinião sobre o projeto.
      </p>

      <form action="<?= htmlspecialchars(FEEDBACK_FORM_ACTION, ENT_QUOTES, 'UTF-8') ?>" method="POST" target="hidden_iframe" id="feedback-form" class="feedback-form">
        <div class="form-row">
          <div class="form-group">
            <label for="feedback-name" class="form-label">Nome completo e comunidade/instituição</label>
            <input type="text" id="feedback-name" name="<?= htmlspecialchars(FEEDBACK_FIELD_NAME, ENT_QUOTES, 'UTF-8') ?>" class="form-control" placeholder="Seu nome e onde atua (opcional)">
          </div>

          <div class="form-group">
            <label for="feedback-email" class="form-label">E-mail *</label>
            <input type="email" id="feedback-email" name="<?= htmlspecialchars(FEEDBACK_FIELD_EMAIL, ENT_QUOTES, 'UTF-8') ?>" class="form-control" required placeholder="seu.email@exemplo.com">
          </div>
        </div>

        <div class="form-group">
          <label for="feedback-message" class="form-label">Escreva aqui suas impressões, sugestões, críticas ou outra mensagem que desejar *</label>
          <textarea id="feedback-message" name="<?= htmlspecialchars(FEEDBACK_FIELD_TEXT, ENT_QUOTES, 'UTF-8') ?>" class="form-control" rows="5" required placeholder="Digite sua mensagem aqui..."></textarea>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn--primary" id="btn-submit-feedback">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            <span>Enviar Mensagem</span>
          </button>
        </div>
      </form>

      <!-- Iframe oculto com propriedades robustas via CSS (evitando bloqueios de inline style por CSP) -->
      <iframe name="hidden_iframe" id="hidden_iframe" class="hidden-iframe" tabindex="-1" aria-hidden="true"></iframe>
    </div>
  </div>
</section>

<!-- Modal de Sucesso -->
<div id="feedback-modal" class="modal-backdrop" aria-hidden="true" role="dialog" aria-labelledby="modal-title">
  <div class="modal-content">
    <div class="modal-icon" aria-hidden="true">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    </div>
    <h4 class="modal-title" id="modal-title">Sucesso!</h4>
    <p class="modal-text">Sua mensagem foi enviada com sucesso. Agradecemos o seu feedback!</p>
  </div>
</div>
