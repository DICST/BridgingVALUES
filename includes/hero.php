<?php if (!defined('ATLAS_APP')) { http_response_code(403); exit; } ?>
<section class="hero" id="hero" aria-label="Cabeçalho principal">
  <div class="hero__bg" aria-hidden="true"></div>
  <div class="hero__dots" aria-hidden="true"></div>

  <div class="container">
    <div class="hero__content">

      <div class="hero__badges">
        <span class="hero__badge hero__badge--amber">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><circle cx="5" cy="5" r="5"/></svg>
          INPE
        </span>
        <span class="hero__badge">BridgingVALUES</span>
        <span class="hero__badge">Parque Nacional · Bahia</span>
      </div>

      <p class="hero__kicker">Projeto BridgingVALUES</p>

      <h1 class="hero__title">
        Mosaico de Unidades de Conservação do<br>
        Boqueirão da <span>Onça</span>
      </h1>

      <p class="hero__text">
        Acesse os relatórios e publicações vinculados ao Projeto BridgingVALUES no Brasil, 
        além dos mapas interativos e dados espaciais gerados para a região do Mosaico 
        de Unidades de Conservação do Boqueirão da Onça.
      </p>

      <div class="hero__ctas" style="flex-wrap: wrap;">
        <a href="#mapas" class="btn btn--primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
          Explorar Mapas
        </a>
        <a href="#download" class="btn btn--outline">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          Baixar Dados Espaciais
        </a>
        <a href="#filme" class="btn btn--outline">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
          Assista ao Filme
        </a>
        <a href="#publicacoes" class="btn btn--outline">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          Publicações
        </a>
      </div>

      <div class="hero__stats">
        <div>
          <div class="hero__stat-num">7</div>
          <div class="hero__stat-label">Mapas interativos</div>
        </div>
        <div>
          <div class="hero__stat-num"><?= (int) $datasetCount ?></div>
          <div class="hero__stat-label">Datasets disponíveis</div>
        </div>
        <div>
          <div class="hero__stat-num"><?= (int) $totalFiles ?></div>
          <div class="hero__stat-label">Arquivos para download</div>
        </div>
        <div>
          <div class="hero__stat-num">6</div>
          <div class="hero__stat-label">Países no projeto</div>
        </div>
      </div>

    </div>
  </div>

  <div class="hero__scroll" aria-hidden="true">
    <span>Role para baixo</span>
    <div class="hero__scroll-line"></div>
  </div>
</section>
