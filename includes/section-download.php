<?php if (!defined('ATLAS_APP')) { http_response_code(403); exit; } ?>
<section class="section section--alt" id="download" aria-labelledby="download-title">
  <div class="container">
    <p class="section-label">Dados Espaciais</p>
    <h2 class="section-title" id="download-title">Download dos dados espaciais</h2>
    <p class="section-subtitle" style="margin-bottom: 1.5rem;">
      Baixe os shapefiles e arquivos de projeto do QGIS, organizados pelo BridgingVALUES, para uso em softwares de SIG, como QGIS e ArcGIS.
      Os dados espaciais estão disponíveis além da área de estudo representada nos mapas interativos, compreendendo as bacias hidrográficas e respectivos comitês dos rios Verde-Jacaré, do rio Salitre e dos rios Baianos do Entorno do Lago de Sobradinho, que englobam o Mosaico de Unidades de Conservação do Boqueirão da Onça.
      Os metadados, envolvendo uma descrição e as fontes dos dados espaciais utilizados no projeto, estão disponíveis para download no ícone abaixo.
    </p>

    <!-- Bloco de download dos Metadados -->
    <div class="download__metadata-card fade-in">
      <div class="metadata-card__content">
        <span class="metadata-card__icon" aria-hidden="true">📊</span>
        <div class="metadata-card__info">
          <h3 class="metadata-card__title">Planilha de Metadados</h3>
          <p class="metadata-card__desc">Contém a descrição detalhada e as fontes de todos os dados espaciais do projeto.</p>
        </div>
      </div>
      <a href="assets/metadados/Atlas%20Bridging%20Values%20BR%20-%20Fontes%20dos%20dados%20espaciais.xlsx" class="btn btn--primary metadata-card__btn" download>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        BAIXAR METADADOS (.xlsx)
      </a>
    </div>

    <div class="download__header">
      <div class="download__search-wrap">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <label for="file-search" class="sr-only">Buscar dataset</label>
        <input
          type="search"
          id="file-search"
          class="download__search"
          placeholder="Buscar dataset… ex: geologia, drenagem, estradas"
          autocomplete="off"
          spellcheck="false"
        >
      </div>
      <p class="download__count" id="dataset-count" aria-live="polite">
        <strong><?= (int) $datasetCount ?></strong> datasets encontrados
      </p>
    </div>

    <div class="download__info" role="note">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <span>
        <strong>Como usar os arquivos:</strong> Um shapefile é composto por múltiplos arquivos
        com o mesmo nome base. Você pode usar o botão <strong>BAIXAR TUDO</strong> para obter 
        todos os arquivos de um dataset compactados em um único arquivo <code>.zip</code>, ou clicar 
        na extensão desejada para baixar arquivos individualmente.
      </span>
    </div>

    <?php if ($datasetCount > 0): ?>
    <div class="download__table-wrap">
      <table class="download__table" aria-label="Lista de datasets disponíveis para download">
        <thead>
          <tr>
            <th scope="col">Dataset</th>
            <th scope="col">Arquivos disponíveis</th>
            <th scope="col">Tamanho total</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($datasets as $base => $dataset): ?>
          <tr class="dataset-row" data-name="<?= htmlspecialchars(strtolower($base), ENT_QUOTES, 'UTF-8') ?>">
            <td>
              <div class="dataset-name"><?= htmlspecialchars(human_name($base), ENT_QUOTES, 'UTF-8') ?></div>
              <div class="dataset-raw"><?= htmlspecialchars($base, ENT_QUOTES, 'UTF-8') ?></div>
            </td>
            <td>
              <div class="ext-badges">
                <?php
                ksort($dataset['files']);
                ?>
                <a
                  href="<?= defined('STATIC_BUILD') ? 'downloads/' . rawurlencode($base) . '.zip' : 'download-zip.php?dataset=' . urlencode($base) ?>"
                  class="ext-badge ext-zip-all"
                  title="Baixar todos os arquivos de <?= htmlspecialchars(human_name($base), ENT_QUOTES, 'UTF-8') ?> (.zip)"
                  aria-label="Baixar todos (.zip) — <?= htmlspecialchars(human_name($base), ENT_QUOTES, 'UTF-8') ?>"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin-right: 2px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  BAIXAR TUDO
                </a>
                <?php
                foreach ($dataset['files'] as $ext => $file):
                ?>
                <?php if (defined('STATIC_BUILD')): ?>
                <span class="ext-badge <?= ext_class($ext) ?>" title="Incluído no .zip">.<?= htmlspecialchars($ext, ENT_QUOTES, 'UTF-8') ?></span>
                <?php else: ?>
                <a
                  href="download.php?file=<?= urlencode($file['path']) ?>"
                  class="ext-badge <?= ext_class($ext) ?>"
                  title="Baixar <?= htmlspecialchars($file['name'], ENT_QUOTES, 'UTF-8') ?> (<?= format_size($file['size']) ?>)"
                  aria-label="Baixar .<?= htmlspecialchars($ext, ENT_QUOTES, 'UTF-8') ?> — <?= htmlspecialchars(human_name($base), ENT_QUOTES, 'UTF-8') ?>"
                >.<?= htmlspecialchars($ext, ENT_QUOTES, 'UTF-8') ?></a>
                <?php endif; ?>
                <?php endforeach; ?>
              </div>
            </td>
            <td>
              <span class="dataset-size"><?= format_size((defined('STATIC_BUILD') && !empty($dataset['zip_size'])) ? $dataset['zip_size'] : $dataset['total_size']) ?></span>
            </td>
          </tr>
          <?php endforeach; ?>
        </tbody>
      </table>

      <div class="no-results" id="no-results" role="status">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M8 11h6M11 8v6"/></svg>
        <p>Nenhum dataset encontrado para "<span id="no-results-query"></span>".</p>
      </div>
    </div>
    <?php else: ?>
    <div class="download__empty">
      <p>Nenhum arquivo encontrado em <code>dados_espaciais/<?= DATA_SUBDIR ?>/</code>.</p>
      <p>Verifique se o diretório existe e contém arquivos.</p>
    </div>
    <?php endif; ?>

  </div>
</section>
