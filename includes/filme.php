<?php if (!defined('ATLAS_APP')) { http_response_code(403); exit; } ?>
<section class="section filme" id="filme" aria-labelledby="filme-title">
  <div class="container">
    <p class="section-label">Filme</p>
    <h2 class="section-title" id="filme-title">
      Vozes da Caatinga
    </h2>
    <p class="section-subtitle">
      Assista ao documentário produzido pelo Projeto BridgingVALUES retratando a realidade, os desafios e as percepções das comunidades do Boqueirão da Onça.
    </p>

    <div class="filme__video-container fade-in">
      <?php if (defined('STATIC_BUILD')): ?>
        <?php if (VIMEO_ID !== ''): ?>
      <iframe
        class="filme__video"
        src="https://player.vimeo.com/video/<?= htmlspecialchars(VIMEO_ID, ENT_QUOTES, 'UTF-8') ?>?dnt=1"
        title="Documentário Vozes da Caatinga"
        allow="fullscreen; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loading="lazy"
      ></iframe>
        <?php else: ?>
      <p class="filme__placeholder">O vídeo estará disponível em breve.</p>
        <?php endif; ?>
      <?php else: ?>
      <video 
        class="filme__video" 
        src="assets/videos/community voices Caatinga_June.m4v" 
        controls 
        preload="none"
        aria-label="Documentário Vozes da Caatinga"
      >
        Seu navegador não suporta a reprodução de vídeos em HTML5. Você pode baixar o vídeo 
        <a href="assets/videos/community voices Caatinga_June.m4v" download>clicando aqui</a>.
      </video>
      <?php endif; ?>
    </div>
  </div>
</section>
