<?php if (!defined('ATLAS_APP')) { http_response_code(403); exit; } ?>
<section class="section mapas" id="mapas" aria-labelledby="mapas-title">
  <div class="container">
    <p class="section-label">Mapas Interativos</p>
    <h2 class="section-title" id="mapas-title">Explore o território por tema</h2>
    <p class="section-subtitle">
      Navegue e explore os dados espacialmente clicando sobre um dos mapas interativos, separados por tema. Em caso de dúvidas sobre como utilizar os mapas, navegue para a seção <a href="#como-usar" class="mapas__link-guia"><strong>Guia Rápido</strong></a>.
    </p>

    <div class="mapas__grid">
      <?php foreach ($MAPS as $map): ?>
      <article
        class="map-card <?= htmlspecialchars($map['class'], ENT_QUOTES, 'UTF-8') ?> fade-in"
        aria-label="Mapa de <?= htmlspecialchars($map['title'], ENT_QUOTES, 'UTF-8') ?>"
      >
        <div class="map-card__header">
          <div class="map-card__icon" aria-hidden="true"><?= $map['icon'] ?></div>
          <p class="map-card__theme"><?= htmlspecialchars($map['theme'], ENT_QUOTES, 'UTF-8') ?></p>
          <h3 class="map-card__title"><?= htmlspecialchars($map['title'], ENT_QUOTES, 'UTF-8') ?></h3>
        </div>
        <div class="map-card__body">
          <p class="map-card__desc"><?= htmlspecialchars($map['desc'], ENT_QUOTES, 'UTF-8') ?></p>
          <a
            href="mapas/<?= htmlspecialchars($map['folder'], ENT_QUOTES, 'UTF-8') ?>/"
            target="_blank"
            rel="noopener noreferrer"
            class="map-card__btn"
            aria-label="Abrir mapa de <?= htmlspecialchars($map['title'], ENT_QUOTES, 'UTF-8') ?> em nova aba"
          >
            Abrir Mapa
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>
