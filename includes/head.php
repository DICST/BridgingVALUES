<?php if (!defined('ATLAS_APP')) { http_response_code(403); exit; } ?>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="<?= htmlspecialchars(SITE_DESC, ENT_QUOTES, 'UTF-8') ?>">
  <meta name="robots" content="index, follow">
  <?php if (defined('STATIC_BUILD')): ?>
  <!-- GitHub Pages não permite headers HTTP: CSP e referrer via <meta> -->
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; frame-src https://docs.google.com https://player.vimeo.com; form-action https://docs.google.com; base-uri 'self'; object-src 'none'">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <?php endif; ?>
  <?php if (defined('STATIC_BUILD')): $isEn = (isset($LANG) && $LANG === 'en'); ?>
  <link rel="alternate" hreflang="pt-BR" href="<?= $isEn ? '../' : './' ?>">
  <link rel="alternate" hreflang="en" href="<?= $isEn ? './' : 'en/' ?>">
  <?php endif; ?>
  <title><?= htmlspecialchars(SITE_NAME, ENT_QUOTES, 'UTF-8') ?> — INPE</title>

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="assets/images/logo_inpe.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/images/logo_inpe.png">
  <link rel="apple-touch-icon" href="assets/images/logo_inpe.png">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="assets/css/style.css?v=<?= filemtime(__DIR__ . '/../assets/css/style.css') ?>">
</head>
