<?php if (!defined('ATLAS_APP')) { http_response_code(403); exit; } ?>
<nav class="nav" id="nav" role="navigation" aria-label="Navegação principal">
  <div class="container">
    <div class="nav__inner">

      <a href="#hero" class="nav__brand" aria-label="Início — <?= htmlspecialchars(SITE_NAME, ENT_QUOTES, 'UTF-8') ?>">
        <span class="nav__brand-name"><?= htmlspecialchars(SITE_NAME, ENT_QUOTES, 'UTF-8') ?></span>
        <span class="nav__brand-sub"><?= htmlspecialchars(SITE_ORG, ENT_QUOTES, 'UTF-8') ?></span>
      </a>

      <ul class="nav__links" role="list">
        <li><a class="nav__link" href="#sobre">Sobre</a></li>
        <li><a class="nav__link" href="#mapas">Mapas</a></li>
        <li class="nav__dropdown">
          <a class="nav__link nav__dropdown-toggle" href="#download">
            Dados Espaciais
            <svg class="nav__dropdown-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1 1l4 4 4-4"/></svg>
          </a>
          <div class="nav__dropdown-menu">
            <a href="#download">Baixar Dados</a>
            <a href="#como-usar">Como Usar</a>
          </div>
        </li>
        <li><a class="nav__link" href="#filme">Filme</a></li>
        <li><a class="nav__link" href="#publicacoes">Publicações</a></li>
      </ul>

      <?php $isEn = (isset($LANG) && $LANG === 'en'); ?>
      <a
        class="nav__lang"
        id="lang-switch"
        href="<?= $isEn ? '../' : 'en/' ?>"
        hreflang="<?= $isEn ? 'pt-BR' : 'en' ?>"
        lang="<?= $isEn ? 'pt-BR' : 'en' ?>"
        aria-label="<?= $isEn ? 'Ver este site em português' : 'View this site in English' ?>"
        title="<?= $isEn ? 'Português' : 'English' ?>"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        <?= $isEn ? 'PT' : 'EN' ?>
      </a>

      <button
        class="nav__hamburger"
        id="hamburger"
        aria-label="Abrir menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <span></span><span></span><span></span>
      </button>

    </div>
  </div>
</nav>

<div class="nav__mobile" id="mobile-menu" role="dialog" aria-label="Menu de navegação">
  <a href="#sobre">Sobre o Projeto</a>
  <a href="#mapas">Mapas Interativos</a>
  <a href="#download">Dados Espaciais</a>
  <a href="#como-usar">Como Usar</a>
  <a href="#filme">Filme</a>
  <a href="#publicacoes">Publicações</a>
</div>
