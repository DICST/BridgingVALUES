<?php if (!defined('ATLAS_APP')) { http_response_code(403); exit; } ?>
<footer class="footer" aria-label="Rodapé">
  <div class="container">
    <div class="footer__grid">

      <div>
        <p class="footer__brand-name"><?= htmlspecialchars(SITE_NAME, ENT_QUOTES, 'UTF-8') ?></p>
        <p class="footer__brand-sub">
          Plataforma desenvolvida pela Divisão de Impactos, Adaptação e Vulnerabilidade (DIIAV) do Instituto Nacional de Pesquisas Espaciais (INPE) para acesso a publicações, relatórios, mapas e dados geoespaciais gerados no âmbito do projeto BridgingVALUES, com foco no Mosaico de Unidades de Conservação do Boqueirão da Onça.
        </p>
      </div>

      <div>
        <p class="footer__heading">Navegação</p>
        <ul class="footer__links" role="list">
          <li><a href="#sobre">Sobre o Projeto</a></li>
          <li><a href="#mapas">Mapas Interativos</a></li>
          <li><a href="#download">Dados Espaciais</a></li>
          <li><a href="#como-usar">Como Usar</a></li>
        </ul>
      </div>

      <div>
        <p class="footer__heading">Parceiros</p>
        <div class="footer__partners">
          <a href="https://www.gov.br/inpe/" target="_blank" rel="noopener noreferrer"
             class="footer__partner-logo-link" aria-label="INPE">
            <img src="assets/images/logo_inpe.png"
                 alt="INPE — Instituto Nacional de Pesquisas Espaciais"
                 class="footer__partner-logo">
          </a>
          <a href="https://www.gov.br/cnpq/" target="_blank" rel="noopener noreferrer"
             class="footer__partner-logo-link" aria-label="CNPq">
            <img src="assets/images/logo_cnpq.png"
                 alt="CNPq — Conselho Nacional de Desenvolvimento Científico e Tecnológico"
                 class="footer__partner-logo">
          </a>
          <span class="footer__partner-badge">Biodiversa+</span>
        </div>
        <div class="footer__project">
          <p class="footer__heading">Projeto</p>
          <ul class="footer__links" role="list">
            <li>
              <a href="https://www.bridgingvalues.ch/" target="_blank" rel="noopener noreferrer">
                BridgingVALUES ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div class="footer__bottom">
      <p>© <?= date('Y') ?> INPE — Instituto Nacional de Pesquisas Espaciais. Todos os direitos reservados.</p>
      <p>Dados disponibilizados para uso científico e educacional. Crédito fotográfico: Eda Elif Tibet, 2025.</p>
    </div>
  </div>
</footer>
