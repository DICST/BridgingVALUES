<?php if (!defined('ATLAS_APP')) { http_response_code(403); exit; } ?>
<section class="section" id="como-usar" aria-labelledby="como-usar-title">
  <div class="container">
    <p class="section-label">Guia Rápido</p>
    <h2 class="section-title" id="como-usar-title">Como usar o Atlas</h2>
    <p class="section-subtitle">Instruções para consulta dos mapas e download dos dados espaciais.</p>

    <div class="como-usar__grid">

      <div class="fade-in">
        <h3 class="como-usar__block-title">
          <span class="como-usar__block-icon" aria-hidden="true">🗺️</span>
          Consultando os Mapas Interativos
        </h3>
        <ol class="steps">
          <li class="step">
            <span class="step__num" aria-hidden="true">1</span>
            <p class="step__text">Na seção <strong>Mapas Interativos</strong>, clique no botão <strong>"Abrir Mapa"</strong> do tema desejado;</p>
          </li>
          <li class="step">
            <span class="step__num" aria-hidden="true">2</span>
            <p class="step__text">O mapa abrirá em <strong>uma nova aba</strong> do navegador com todas as camadas disponíveis;</p>
          </li>
          <li class="step">
            <span class="step__num" aria-hidden="true">3</span>
            <p class="step__text">Clique no <strong>ícone de informação à direita (i)</strong> para ler a descrição sobre o mapa;</p>
          </li>
          <li class="step">
            <span class="step__num" aria-hidden="true">4</span>
            <p class="step__text">Clique no <strong>ícone de camadas à direita (em azul)</strong> para ativar ou desativar as camadas sobre o tema;</p>
          </li>
          <li class="step">
            <span class="step__num" aria-hidden="true">5</span>
            <p class="step__text">Dê zoom e clique sobre os elementos do mapa para ver <strong>informações detalhadas</strong> sobre os atributos das camadas na área selecionada;</p>
          </li>
          <li class="step">
            <span class="step__num" aria-hidden="true">6</span>
            <p class="step__text">Utilize a <strong>legenda</strong> para interpretar as cores e símbolos de cada camada.</p>
          </li>
        </ol>
      </div>

      <div class="fade-in">
        <h3 class="como-usar__block-title">
          <span class="como-usar__block-icon" aria-hidden="true">⬇️</span>
          Baixando os Dados Espaciais
        </h3>
        <ol class="steps">
          <li class="step">
            <span class="step__num" aria-hidden="true">1</span>
            <p class="step__text">Na seção <strong>Dados Espaciais</strong>, use a <strong>barra de busca</strong> para encontrar o dado de interesse;</p>
          </li>
          <li class="step">
            <span class="step__num" aria-hidden="true">2</span>
            <p class="step__text">Cada linha corresponde a uma <strong>camada (shapefile)</strong> ou projeto do QGIS (<code>.qgz</code>);</p>
          </li>
          <li class="step">
            <span class="step__num" aria-hidden="true">3</span>
            <p class="step__text">Baixe todos os arquivos do mesmo nome ou o <strong>arquivo zip (clicando em "Baixar tudo")</strong>. No caso do shapefile, as extensões <code>.shp</code>, <code>.dbf</code>, <code>.shx</code> e <code>.prj</code> são indispensáveis;</p>
          </li>
          <li class="step">
            <span class="step__num" aria-hidden="true">4</span>
            <p class="step__text">Para abrir os projetos do QGIS corretamente, coloque todos os arquivos (shapefiles e projetos) em uma <strong>mesma pasta</strong>;</p>
          </li>
          <li class="step">
            <span class="step__num" aria-hidden="true">5</span>
            <p class="step__text">Os <strong>projetos do QGIS</strong> permitem visualizar as camadas por tema com a simbologia organizada pela equipe do projeto;</p>
          </li>
          <li class="step">
            <span class="step__num" aria-hidden="true">6</span>
            <p class="step__text">Você também pode abrir os shapefiles em outro <strong>software de SIG</strong> de sua preferência, mas as simbologias não serão preservadas.</p>
          </li>
        </ol>
      </div>

    </div>
  </div>
</section>
