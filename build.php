<?php
/**
 * Build estático para GitHub Pages.
 *
 *   php build.php zips   -> gera downloads/<dataset>.zip a partir de dados_espaciais/
 *   php build.php html   -> gera index.html a partir de index.php + includes/
 *   php build.php        -> faz os dois
 *
 * Requer a extensão zip do PHP (php -d extension=zip build.php).
 */
if (PHP_SAPI !== 'cli') { http_response_code(403); exit; }

define('ATLAS_APP', true);
define('STATIC_BUILD', true);
require_once __DIR__ . '/config/app.php';

$task = $argv[1] ?? 'all';
$outDir = __DIR__ . '/downloads';

function build_zips(string $outDir): void
{
    if (!class_exists('ZipArchive')) { fwrite(STDERR, "Extensão zip ausente.\n"); exit(1); }
    if (!is_dir($outDir)) mkdir($outDir, 0775, true);
    $data = load_datasets();
    foreach ($data['datasets'] as $base => $ds) {
        $target = $outDir . '/' . $base . '.zip';
        $newest = 0;
        foreach ($ds['files'] as $f) $newest = max($newest, filemtime(DATA_DIR . $f['name']));
        if (is_file($target) && filemtime($target) >= $newest) { echo "= $base (atual)\n"; continue; }
        @unlink($target);
        $zip = new ZipArchive();
        $zip->open($target, ZipArchive::CREATE | ZipArchive::OVERWRITE);
        foreach ($ds['files'] as $f) {
            $zip->addFile(DATA_DIR . $f['name'], $f['name']);
            $zip->setCompressionName($f['name'], ZipArchive::CM_DEFLATE, 9);
        }
        $zip->close();
        printf("+ %s -> %s\n", $base, format_size(filesize($target)));
    }
}

/** Renderiza a página (PT). $lang só controla o botão de idioma e o <link rel=alternate>. */
function render_page(string $lang, array $datasets, int $datasetCount, int $totalFiles): string
{
    global $MAPS;
    $LANG = $lang;
    ob_start();
    ?>
<!DOCTYPE html>
<html lang="pt-BR">
<?php require __DIR__ . '/includes/head.php'; ?>
<body>
<?php foreach (['nav','hero','sobre','mapas','section-download','como-usar','filme','publicacoes','equipe','feedback','footer'] as $part) require __DIR__ . "/includes/$part.php"; ?>
<script src="assets/js/main.js?v=<?= filemtime(__DIR__ . '/assets/js/main.js') ?>"></script>
</body>
</html>
<?php
    return ob_get_clean();
}

/** Traduz o HTML renderizado em PT para EN usando i18n/en.php. Devolve [html, chavesNaoUsadas]. */
function translate_en(string $html, array $datasets): array
{
    global $MAPS;
    $dict = require __DIR__ . '/i18n/en.php';
    $esc  = fn(string $t): string => htmlspecialchars($t, ENT_QUOTES, 'UTF-8');
    $text = [];
    $attr = [];
    foreach ($dict['text'] as $k => $v) $text[str_replace('{Y}', date('Y'), $k)] = str_replace('{Y}', date('Y'), $v);
    foreach ($dict['attr'] as $k => $v) $attr[$k] = $v;

    foreach ($MAPS as $m) {
        $en = $dict['maps'][$m['slug']] ?? null;
        if (!$en) { fwrite(STDERR, "Sem tradução para o mapa {$m['slug']}\n"); continue; }
        $text[$esc($m['theme'])] = $en['theme'];
        $text[$esc($m['title'])] = $esc(html_entity_decode($en['title'], ENT_QUOTES, 'UTF-8'));
        $text[$esc($m['desc'])]  = $esc(html_entity_decode($en['desc'], ENT_QUOTES, 'UTF-8'));
        $attr['Mapa de ' . $esc($m['title'])] = 'Map: ' . $esc($en['title']);
        $attr['Abrir mapa de ' . $esc($m['title']) . ' em nova aba'] = 'Open ' . $esc($en['title']) . ' map in a new tab';
    }
    $enNames = [];
    $titles  = [];
    foreach ($datasets as $base => $_) {
        $en = $dict['datasets'][$base] ?? null;
        if ($en === null) { fwrite(STDERR, "Sem tradução para o dataset $base\n"); continue; }
        $enNames[strtolower($base)] = $en;
        $h = human_name($base);
        $titles[$esc($h)] = $esc($en);   // só o título (div.dataset-name); o nome do arquivo (dataset-raw) não muda
        $attr["Baixar todos os arquivos de $h (.zip)"] = "Download all files of $en (.zip)";
        $attr["Baixar todos (.zip) — $h"]              = "Download all (.zip) — $en";
    }

    // Chaves longas primeiro: evita que um nó interno (ex.: <strong>Mapas Interativos</strong>) seja traduzido antes do parágrafo que o contém.
    uksort($text, fn($a, $b) => strlen($b) <=> strlen($a));
    uksort($attr, fn($a, $b) => strlen($b) <=> strlen($a));

    $unused = [];
    $flex = fn(string $k): string => implode('\s+', array_map(fn($w) => preg_quote($w, '/'), preg_split('/\s+/u', trim($k))));
    foreach ($text as $k => $v) {
        $n = 0;
        $html = preg_replace_callback('/(?<=>)(\s*)' . $flex($k) . '(\s*)(?=<)/u',
            fn($m) => $m[1] . $v . $m[2], $html, -1, $n);
        if ($n === 0 && !(VIMEO_ID !== '' && $k === 'O vídeo estará disponível em breve.')) $unused[] = 'text: ' . substr($k, 0, 70);
    }
    foreach ($titles as $k => $v) {
        $n = 0;
        $html = preg_replace_callback('/(<div class="dataset-name">)(\s*)' . $flex($k) . '(\s*)(<\/div>)/u',
            fn($m) => $m[1] . $m[2] . $v . $m[3] . $m[4], $html, -1, $n);
        if ($n === 0) $unused[] = 'dataset: ' . $k;
    }
    foreach ($attr as $k => $v) {
        $n = 0;
        $html = preg_replace_callback('/(?<=")' . $flex($k) . '(?=")/u', fn($m) => $v, $html, -1, $n);
        if ($n === 0 && !(VIMEO_ID === '' && $k === 'Documentário Vozes da Caatinga')) $unused[] = 'attr: ' . substr($k, 0, 70);
    }

    // Busca: inclui o nome em inglês em data-name
    $html = preg_replace_callback('/data-name="([^"]*)"/', function ($m) use ($enNames) {
        $en = $enNames[$m[1]] ?? null;
        return 'data-name="' . $m[1] . ($en ? ' ' . strtolower(htmlspecialchars($en, ENT_QUOTES, 'UTF-8')) : '') . '"';
    }, $html);
    // Tamanhos: vírgula decimal -> ponto
    $html = preg_replace_callback('/(class="dataset-size">)([^<]+)/', fn($m) => $m[1] . str_replace(',', '.', $m[2]), $html);
    // Idioma e caminhos relativos (a página fica em en/)
    $html = str_replace('<html lang="pt-BR">', '<html lang="en">', $html);
    $html = preg_replace('/\b(href|src)="(assets|mapas|downloads)\//', '$1="../$2/', $html);

    return [$html, $unused];
}

function build_html(string $outDir): void
{
    $data = load_datasets();
    $datasets = $data['datasets'];
    // Em modo estático, o que o usuário baixa é o ZIP: usa o tamanho dele.
    foreach ($datasets as $base => &$ds) {
        $z = $outDir . '/' . $base . '.zip';
        $ds['zip_size'] = is_file($z) ? filesize($z) : null;
    }
    unset($ds);

    file_put_contents(__DIR__ . '/index.html', render_page('pt', $datasets, $data['count'], $data['totalFiles']));
    echo "index.html gerado\n";

    [$en, $unused] = translate_en(render_page('en', $datasets, $data['count'], $data['totalFiles']), $datasets);
    if (!is_dir(__DIR__ . '/en')) mkdir(__DIR__ . '/en', 0775, true);
    file_put_contents(__DIR__ . '/en/index.html', $en);
    echo "en/index.html gerado\n";
    foreach ($unused as $u) echo "  [aviso] entrada de tradução sem correspondência -> $u\n";
}

if (in_array($task, ['zips', 'all'], true)) build_zips($outDir);
if (in_array($task, ['html', 'all'], true)) build_html($outDir);
