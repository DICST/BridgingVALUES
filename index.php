<?php
/**
 * BridgingVALUES Atlas do Boqueirão da Onça — INPE
 * Ponto de entrada principal. Carrega configuração, dados e renderiza as seções.
 */
define('ATLAS_APP', true);
require_once __DIR__ . '/config/app.php';

// Carrega dados dos datasets
$data         = load_datasets();
$datasets     = $data['datasets'];
$datasetCount = $data['count'];
$totalFiles   = $data['totalFiles'];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<?php require __DIR__ . '/includes/head.php'; ?>
<body>

<?php require __DIR__ . '/includes/nav.php'; ?>
<?php require __DIR__ . '/includes/hero.php'; ?>
<?php require __DIR__ . '/includes/sobre.php'; ?>
<?php require __DIR__ . '/includes/mapas.php'; ?>
<?php require __DIR__ . '/includes/section-download.php'; ?>
<?php require __DIR__ . '/includes/como-usar.php'; ?>
<?php require __DIR__ . '/includes/filme.php'; ?>
<?php require __DIR__ . '/includes/publicacoes.php'; ?>
<?php require __DIR__ . '/includes/equipe.php'; ?>
<?php require __DIR__ . '/includes/feedback.php'; ?>
<?php require __DIR__ . '/includes/footer.php'; ?>

<script src="assets/js/main.js?v=<?= filemtime(__DIR__ . '/assets/js/main.js') ?>"></script>
</body>
</html>
