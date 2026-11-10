<?php
/**
 * BridgingVALUES Atlas do Boqueirão da Onça — Configuração central da aplicação.
 * Acesso direto via HTTP é bloqueado pelo .htaccess e pela guarda abaixo.
 */
if (!defined('ATLAS_APP')) {
    http_response_code(403);
    exit;
}

// ---------- Caminhos ----------

define('BASE_PATH',    dirname(__DIR__));
define('DATA_SUBDIR',  'Dados_espaciais_e_projetos');
define('DATA_DIR',     rtrim(getenv('ATLAS_DATA_DIR') ?: (BASE_PATH . '/dados_espaciais/' . DATA_SUBDIR), '/\\') . '/');
define('DATA_URL_REL', 'dados_espaciais/' . DATA_SUBDIR . '/');

// ---------- Metadados do site ----------

define('SITE_NAME', 'BridgingVALUES - Mosaico de UCs Boqueirão da Onça');
define('SITE_ORG',  'INPE · BridgingVALUES');
define('SITE_DESC', 'Atlas territorial do Parque Nacional do Boqueirão da Onça, desenvolvido pelo INPE '
                  . 'no âmbito do projeto BridgingVALUES. Acesse mapas interativos e dados espaciais.');

// ---------- Extensões permitidas para download ----------

function get_allowed_extensions(): array
{
    $default = ['shp', 'dbf', 'shx', 'prj', 'cpg', 'qmd', 'xml', 'sbn', 'sbx', 'zip', 'qgz', 'qix', 'qpj'];
    if (defined('DATA_DIR') && is_dir(DATA_DIR)) {
        foreach (new DirectoryIterator(DATA_DIR) as $entry) {
            if (!$entry->isFile()) continue;
            if (strpos($entry->getFilename(), '.') === 0) continue;
            $ext = strtolower($entry->getExtension());
            if ($ext !== '' && !in_array($ext, $default, true)) {
                $default[] = $ext;
            }
        }
    }
    return $default;
}

define('ALLOWED_EXTS', get_allowed_extensions());

// ---------- Funções auxiliares ----------

function format_size(int $bytes): string
{
    if ($bytes >= 1_073_741_824) return number_format($bytes / 1_073_741_824, 1, ',', '.') . ' GB';
    if ($bytes >= 1_048_576)     return number_format($bytes / 1_048_576,     1, ',', '.') . ' MB';
    if ($bytes >= 1_024)         return number_format($bytes / 1_024,          0, ',', '.') . ' KB';
    return $bytes . ' B';
}

function human_name(string $raw): string
{
    static $acronyms = ['CAR', 'MDT', 'SIGEF', 'GIS', 'BA', 'SP'];
    $parts = [];
    foreach (explode('_', $raw) as $word) {
        $parts[] = (in_array(strtoupper($word), $acronyms) || (strlen($word) <= 2 && ctype_alpha($word)))
            ? strtoupper($word)
            : ucfirst(strtolower($word));
    }
    return implode(' ', $parts);
}

function ext_class(string $ext): string
{
    $known = ['shp', 'dbf', 'prj', 'qpj', 'shx', 'cpg', 'qmd', 'xml', 'sbn', 'sbx'];
    return in_array($ext, $known, true) ? 'ext-' . $ext : 'ext-other';
}

// ---------- Carregamento dos datasets ----------

function load_datasets(): array
{
    if (!is_dir(DATA_DIR)) {
        return ['datasets' => [], 'count' => 0, 'totalFiles' => 0];
    }

    $datasets   = [];
    $totalFiles = 0;

    foreach (new DirectoryIterator(DATA_DIR) as $entry) {
        if (!$entry->isFile()) continue;

        $ext  = strtolower($entry->getExtension());
        
        if (!in_array($ext, ALLOWED_EXTS, true)) {
            continue;
        }
        
        $base = $entry->getBasename('.' . $ext);
        
        $datasets[$base]['files'][$ext] = [
            'name' => $entry->getFilename(),
            'size' => $entry->getSize(),
            'path' => DATA_SUBDIR . '/' . $entry->getFilename(),
        ];
        $datasets[$base]['total_size'] = ($datasets[$base]['total_size'] ?? 0) + $entry->getSize();
        $totalFiles++;
    }
    
    ksort($datasets, SORT_NATURAL | SORT_FLAG_CASE);
    
    return [
        'datasets'   => $datasets,
        'count'      => count($datasets),
        'totalFiles' => $totalFiles,
    ];
}

// ---------- Definição dos mapas ----------

$MAPS = [
    [
        'slug'   => 'area-estudo',
        'class'  => 'map-card--area-estudo',
        'icon'   => '📍',
        'theme'  => 'Geral / Contexto',
        'title'  => 'Área de Estudo',
        'desc'   => 'Delimitação da área de estudo envolvendo as comunidades, mosaico de áreas protegidas e municípios próximos.',
        'folder' => 'area-estudo',
    ],
    [
        'slug'   => 'comunidades-protecao',
        'class'  => 'map-card--comunidades',
        'icon'   => '🛡️',
        'theme'  => 'Sociedade & Conservação',
        'title'  => 'Comunidades Tradicionais e Áreas Protegidas',
        'desc'   => 'Associações de fundo e fecho de pasto, comunidades quilombolas e indígenas e áreas protegidas.',
        'folder' => 'comunidades-protecao',
    ],
    [
        'slug'   => 'empreendimentos',
        'class'  => 'map-card--empreendimentos',
        'icon'   => '⚡',
        'theme'  => 'Energia & Infraestrutura',
        'title'  => 'Empreendimentos',
        'desc'   => 'Parques eólicos, usinas solares, hidrelétricas e mineração.',
        'folder' => 'empreendimentos',
    ],
    [
        'slug'   => 'geologia',
        'class'  => 'map-card--geologia',
        'icon'   => '🪨',
        'theme'  => 'Geociências',
        'title'  => 'Geologia',
        'desc'   => 'Sítios arqueológicos, mineração, tipos de rocha, declividade e curvas de nível.',
        'folder' => 'geologia',
    ],
    [
        'slug'   => 'hidrografia',
        'class'  => 'map-card--hidrografia',
        'icon'   => '💧',
        'theme'  => 'Recursos Hídricos',
        'title'  => 'Hidrografia',
        'desc'   => 'Rede de drenagem, massas de água, limites de bacias hidrográficas e outorgas de uso da água federais e estaduais.',
        'folder' => 'hidrografia',
    ],
    [
        'slug'   => 'imoveis',
        'class'  => 'map-card--imoveis',
        'icon'   => '🗺️',
        'theme'  => 'Fundiário',
        'title'  => 'Imóveis Rurais',
        'desc'   => 'Imóveis rurais certificados, assentamentos, sobreposições com o Cadastro Ambiental Rural e imóveis do CAR.',
        'folder' => 'imoveis',
    ],
    [
        'slug'   => 'uso',
        'class'  => 'map-card--uso',
        'icon'   => '🌿',
        'theme'  => 'Meio Ambiente',
        'title'  => 'Uso e Cobertura da Terra',
        'desc'   => 'Classes de uso e cobertura, degradação da terra, desmatamento, queimadas, qualidade da pastagem e potencialidade ao desenvolvimento agrícola.',
        'folder' => 'uso',
    ],
];

// ---------- Configuração do Formulário de Feedback (Google Forms) ----------
define('FEEDBACK_FORM_ACTION', 'https://docs.google.com/forms/d/e/1FAIpQLSeQkbkULDAYo_f_ijz7iaRj5d7-rk19kpEZ6qsUYraRHDynxg/formResponse');
define('FEEDBACK_FIELD_NAME',   'entry.1358190140');
define('FEEDBACK_FIELD_EMAIL',  'emailAddress');
define('FEEDBACK_FIELD_TEXT',   'entry.2130080602');


// ---------- Vídeo (Vimeo) ----------
// Cole aqui o ID numérico do vídeo no Vimeo (ex.: '123456789'). Vazio = mostra aviso "em breve".
define('VIMEO_ID', trim((string) (getenv('VIMEO_ID') ?: '')));
