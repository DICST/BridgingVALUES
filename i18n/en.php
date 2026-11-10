<?php
/**
 * Dicionário PT → EN usado pelo build (php build.php html).
 *
 *  'text'     : conteúdo COMPLETO de um nó de texto (pode conter tags inline). A chave é o
 *               HTML renderizado em PT, com espaços colapsados; casa só com o nó inteiro.
 *  'attr'     : valor COMPLETO de um atributo (aria-label, title, alt, placeholder, content).
 *  'datasets' : nome-base do arquivo => título em inglês (exibido na tabela e usado na busca).
 *  'maps'     : slug => [theme, title, desc] em inglês.
 *
 * "{Y}" nas chaves vira o ano corrente.
 */
$SITE_PT = 'BridgingVALUES - Mosaico de UCs Boqueirão da Onça';
$SITE_EN = 'BridgingVALUES - Boqueirão da Onça Conservation Units Mosaic';

return [

'text' => [
  // ---- Site / nav ----
  $SITE_PT                         => $SITE_EN,
  $SITE_PT . ' — INPE'             => $SITE_EN . ' — INPE',
  'Sobre'                          => 'About',
  'Mapas'                          => 'Maps',
  'Dados Espaciais'                => 'Spatial Data',
  'Baixar Dados'                   => 'Download Data',
  'Como Usar'                      => 'How to Use',
  'Filme'                          => 'Film',
  'Publicações'                    => 'Publications',
  'Sobre o Projeto'                => 'About the Project',
  'Mapas Interativos'              => 'Interactive Maps',

  // ---- Hero ----
  'Parque Nacional · Bahia'        => 'National Park · Bahia',
  'Projeto BridgingVALUES'         => 'BridgingVALUES Project',
  'Mosaico de Unidades de Conservação do<br> Boqueirão da <span>Onça</span>'
                                   => 'Conservation Units Mosaic of<br> Boqueirão da <span>Onça</span>',
  'Acesse os relatórios e publicações vinculados ao Projeto BridgingVALUES no Brasil, além dos mapas interativos e dados espaciais gerados para a região do Mosaico de Unidades de Conservação do Boqueirão da Onça.'
                                   => 'Access the reports and publications linked to the BridgingVALUES Project in Brazil, as well as the interactive maps and spatial data produced for the region of the Boqueirão da Onça Conservation Units Mosaic.',
  'Explorar Mapas'                 => 'Explore Maps',
  'Baixar Dados Espaciais'         => 'Download Spatial Data',
  'Assista ao Filme'               => 'Watch the Film',
  'Datasets disponíveis'           => 'Available datasets',
  'Arquivos para download'         => 'Files for download',
  'Países no projeto'              => 'Countries in the project',
  'Role para baixo'                => 'Scroll down',

  // ---- Sobre ----
  'Apresentação'                   => 'Introduction',
  'Dados territoriais para comunidades e gestores' => 'Territorial data for communities and managers',
  'Esta página disponibiliza para as instituições e comunidades locais os relatórios e publicações vinculados ao Projeto BridgingVALUES no Brasil, além dos mapas interativos e dados espaciais gerados para a região do Mosaico de Unidades de Conservação do Boqueirão da Onça.'
                                   => 'This page makes available to institutions and local communities the reports and publications linked to the BridgingVALUES Project in Brazil, as well as the interactive maps and spatial data produced for the region of the Boqueirão da Onça Conservation Units Mosaic.',
  'O atlas digital (mapas interativos e dados espaciais) foi desenvolvido pelo INPE em resposta a uma demanda das próprias comunidades, definida de forma participativa em oficinas realizadas na região. A iniciativa busca fortalecer atores locais por meio do acesso ao conhecimento e da organização de informações sobre o território.'
                                   => 'The digital atlas (interactive maps and spatial data) was developed by INPE in response to a demand from the communities themselves, defined in a participatory way in workshops held in the region. The initiative seeks to strengthen local actors through access to knowledge and the organization of information about the territory.',
  'O conteúdo está organizado em diferentes camadas de informação e temas, permitindo a visualização dos dados espaciais de forma simples e integrada. Além disso, é possível aplicar filtros e realizar o download dos dados espaciais para uso em ferramentas de geoprocessamento (SIG).'
                                   => 'The content is organized into different information layers and themes, allowing the spatial data to be viewed in a simple and integrated way. It is also possible to apply filters and download the spatial data for use in geoprocessing (GIS) tools.',
  '"O projeto envolveu oficinas, mapeamento de atores e construção coletiva de soluções, buscando compreender conflitos, identificar caminhos futuros e propor ações que conciliem a conservação da biodiversidade com a equidade social."'
                                   => '"The project involved workshops, stakeholder mapping and the collective construction of solutions, seeking to understand conflicts, identify future pathways and propose actions that reconcile biodiversity conservation with social equity."',
  '— Equipe do projeto'            => '— Project team',
  'Conheça a equipe responsável pelo projeto' => 'Meet the team responsible for the project',
  'O Atlas foi desenvolvido no contexto do projeto internacional <strong class="text-amber">BridgingVALUES</strong>, que investiga como as políticas e estratégias globais de conservação da biodiversidade impactam os territórios locais — considerando que esses efeitos variam entre diferentes regiões do mundo.'
                                   => 'The Atlas was developed in the context of the international <strong class="text-amber">BridgingVALUES</strong> project, which investigates how global biodiversity conservation policies and strategies impact local territories — considering that these effects vary across different regions of the world.',
  'O projeto adotou uma abordagem participativa e interdisciplinar, com estudos de caso em seis países, incluindo o Brasil. A pesquisa brasileira foi conduzida no mosaico de áreas protegidas do Boqueirão da Onça (BA).'
                                   => 'The project adopted a participatory and interdisciplinary approach, with case studies in six countries, including Brazil. The Brazilian research was carried out in the Boqueirão da Onça mosaic of protected areas (Bahia).',
  'Acesse o site do projeto'       => 'Visit the project website',

  // ---- Mapas (seção) ----
  'Explore o território por tema'  => 'Explore the territory by theme',
  'Navegue e explore os dados espacialmente clicando sobre um dos mapas interativos, separados por tema. Em caso de dúvidas sobre como utilizar os mapas, navegue para a seção <a href="#como-usar" class="mapas__link-guia"><strong>Guia Rápido</strong></a>.'
                                   => 'Browse and explore the data spatially by clicking on one of the interactive maps, organized by theme. If you have questions about how to use the maps, go to the <a href="#como-usar" class="mapas__link-guia"><strong>Quick Guide</strong></a> section.',
  'Abrir Mapa'                     => 'Open Map',

  // ---- Download ----
  'Download dos dados espaciais'   => 'Spatial data download',
  'Baixe os shapefiles e arquivos de projeto do QGIS, organizados pelo BridgingVALUES, para uso em softwares de SIG, como QGIS e ArcGIS. Os dados espaciais estão disponíveis além da área de estudo representada nos mapas interativos, compreendendo as bacias hidrográficas e respectivos comitês dos rios Verde-Jacaré, do rio Salitre e dos rios Baianos do Entorno do Lago de Sobradinho, que englobam o Mosaico de Unidades de Conservação do Boqueirão da Onça. Os metadados, envolvendo uma descrição e as fontes dos dados espaciais utilizados no projeto, estão disponíveis para download no ícone abaixo.'
                                   => 'Download the shapefiles and QGIS project files, organized by BridgingVALUES, for use in GIS software such as QGIS and ArcGIS. The spatial data extend beyond the study area shown in the interactive maps, covering the river basins and respective committees of the Verde-Jacaré rivers, the Salitre river and the Bahian rivers around Lake Sobradinho, which encompass the Boqueirão da Onça Conservation Units Mosaic. The metadata, comprising a description and the sources of the spatial data used in the project, are available for download using the button below.',
  'Planilha de Metadados'          => 'Metadata Spreadsheet',
  'Contém a descrição detalhada e as fontes de todos os dados espaciais do projeto.'
                                   => 'Contains the detailed description and sources of all spatial data in the project.',
  'BAIXAR METADADOS (.xlsx)'       => 'DOWNLOAD METADATA (.xlsx)',
  'Buscar dataset'                 => 'Search dataset',
  '<strong>Como usar os arquivos:</strong> Um shapefile é composto por múltiplos arquivos com o mesmo nome base. Você pode usar o botão <strong>BAIXAR TUDO</strong> para obter todos os arquivos de um dataset compactados em um único arquivo <code>.zip</code>, ou clicar na extensão desejada para baixar arquivos individualmente.'
                                   => '<strong>How to use the files:</strong> A shapefile is made up of multiple files with the same base name. You can use the <strong>DOWNLOAD ALL</strong> button to get all the files of a dataset packed into a single <code>.zip</code> file, or click on the desired extension to download files individually.',
  'Dataset'                        => 'Dataset',
  'Arquivos disponíveis'           => 'Available files',
  'Tamanho total'                  => 'Total size',
  'BAIXAR TUDO'                    => 'DOWNLOAD ALL',
  'Nenhum dataset encontrado para "<span id="no-results-query"></span>".'
                                   => 'No dataset found for "<span id="no-results-query"></span>".',

  // ---- Como usar ----
  'Guia Rápido'                    => 'Quick Guide',
  'Como usar o Atlas'              => 'How to use the Atlas',
  'Instruções para consulta dos mapas e download dos dados espaciais.'
                                   => 'Instructions for browsing the maps and downloading the spatial data.',
  'Consultando os Mapas Interativos' => 'Browsing the Interactive Maps',
  'Na seção <strong>Mapas Interativos</strong>, clique no botão <strong>"Abrir Mapa"</strong> do tema desejado;'
                                   => 'In the <strong>Interactive Maps</strong> section, click the <strong>"Open Map"</strong> button of the desired theme;',
  'O mapa abrirá em <strong>uma nova aba</strong> do navegador com todas as camadas disponíveis;'
                                   => 'The map will open in <strong>a new browser tab</strong> with all available layers;',
  'Clique no <strong>ícone de informação à direita (i)</strong> para ler a descrição sobre o mapa;'
                                   => 'Click the <strong>information icon on the right (i)</strong> to read the description of the map;',
  'Clique no <strong>ícone de camadas à direita (em azul)</strong> para ativar ou desativar as camadas sobre o tema;'
                                   => 'Click the <strong>layers icon on the right (in blue)</strong> to turn the layers of the theme on or off;',
  'Dê zoom e clique sobre os elementos do mapa para ver <strong>informações detalhadas</strong> sobre os atributos das camadas na área selecionada;'
                                   => 'Zoom in and click on the map elements to see <strong>detailed information</strong> about the layer attributes in the selected area;',
  'Utilize a <strong>legenda</strong> para interpretar as cores e símbolos de cada camada.'
                                   => 'Use the <strong>legend</strong> to interpret the colors and symbols of each layer.',
  'Baixando os Dados Espaciais'    => 'Downloading the Spatial Data',
  'Na seção <strong>Dados Espaciais</strong>, use a <strong>barra de busca</strong> para encontrar o dado de interesse;'
                                   => 'In the <strong>Spatial Data</strong> section, use the <strong>search bar</strong> to find the data you are interested in;',
  'Cada linha corresponde a uma <strong>camada (shapefile)</strong> ou projeto do QGIS (<code>.qgz</code>);'
                                   => 'Each row corresponds to a <strong>layer (shapefile)</strong> or a QGIS project (<code>.qgz</code>);',
  'Baixe todos os arquivos do mesmo nome ou o <strong>arquivo zip (clicando em "Baixar tudo")</strong>. No caso do shapefile, as extensões <code>.shp</code>, <code>.dbf</code>, <code>.shx</code> e <code>.prj</code> são indispensáveis;'
                                   => 'Download all files with the same name or the <strong>zip file (by clicking "Download all")</strong>. For a shapefile, the <code>.shp</code>, <code>.dbf</code>, <code>.shx</code> and <code>.prj</code> extensions are indispensable;',
  'Para abrir os projetos do QGIS corretamente, coloque todos os arquivos (shapefiles e projetos) em uma <strong>mesma pasta</strong>;'
                                   => 'To open the QGIS projects correctly, place all files (shapefiles and projects) in the <strong>same folder</strong>;',
  'Os <strong>projetos do QGIS</strong> permitem visualizar as camadas por tema com a simbologia organizada pela equipe do projeto;'
                                   => 'The <strong>QGIS projects</strong> let you view the layers by theme with the symbology organized by the project team;',
  'Você também pode abrir os shapefiles em outro <strong>software de SIG</strong> de sua preferência, mas as simbologias não serão preservadas.'
                                   => 'You can also open the shapefiles in another <strong>GIS software</strong> of your choice, but the symbology will not be preserved.',

  // ---- Filme ----
  'Vozes da Caatinga'              => 'Voices of the Caatinga',
  'Assista ao documentário produzido pelo Projeto BridgingVALUES retratando a realidade, os desafios e as percepções das comunidades do Boqueirão da Onça.'
                                   => 'Watch the documentary produced by the BridgingVALUES Project portraying the reality, challenges and perceptions of the Boqueirão da Onça communities.',
  'O vídeo estará disponível em breve.' => 'The video will be available soon.',

  // ---- Publicações ----
  'Relatórios, cartilha e materiais do projeto' => 'Reports, booklet and project materials',
  'Acesse as produções científicas, cartilhas e relatórios técnicos elaborados no âmbito do Projeto BridgingVALUES no Brasil.'
                                   => 'Access the scientific publications, booklets and technical reports produced within the BridgingVALUES Project in Brazil.',
  'Cartilha Didática'              => 'Educational Booklet',
  'Cartilha'                       => 'Booklet',
  'Caminhos para futuros desejados: Um guia para co-construção de planos de ação e cenários utilizando a abordagem 3H-CLD'
                                   => 'Pathways to desired futures: A guide for co-constructing action plans and scenarios using the 3H-CLD approach',
  'Versão em Português (PDF)'      => 'Portuguese Version (PDF)',
  'Relatórios do Projeto'          => 'Project Reports',
  'Relatórios elaborados pela equipe do Projeto BridgingVALUES Brasil'
                                   => 'Reports produced by the BridgingVALUES Brazil Project team',
  'Sumário Executivo'              => 'Executive Summary',
  'Sumário executivo'              => 'Executive summary',
  'Sumário executivo do Projeto BridgingVALUES Brasil' => 'Executive summary of the BridgingVALUES Brazil Project',
  'Baixar Relatório (PDF)'         => 'Download Report (PDF)',
  'Relatório Científico'           => 'Scientific Report',
  'Relatório científico geral'     => 'General scientific report',
  'Relatório Científico Final do Projeto Bridging Values Brasil: Caso de Estudo Mosaico de Unidades de Conservação do Boqueirão da Onça, Bahia'
                                   => 'Final Scientific Report of the Bridging Values Brazil Project: Case Study of the Boqueirão da Onça Conservation Units Mosaic, Bahia',
  'Etapa 1'                        => 'Stage 1',
  'Relatório da Etapa de Campo Exploratório' => 'Exploratory Fieldwork Stage Report',
  'Relatório da Etapa de Campo Exploratório do Projeto Bridging Values Brasil: Caso de Estudo Mosaico de Unidades de Conservação do Boqueirão da Onça, Bahia'
                                   => 'Exploratory Fieldwork Stage Report of the Bridging Values Brazil Project: Case Study of the Boqueirão da Onça Conservation Units Mosaic, Bahia',
  'Etapa 2'                        => 'Stage 2',
  'Relatório da Etapa de Mapeamento de Atores' => 'Stakeholder Mapping Stage Report',
  'Relatório da Etapa de Mapeamento de Atores do Projeto Bridging Values Brasil: Caso de Estudo Mosaico de Unidades de Conservação do Boqueirão da Onça, Bahia'
                                   => 'Stakeholder Mapping Stage Report of the Bridging Values Brazil Project: Case Study of the Boqueirão da Onça Conservation Units Mosaic, Bahia',
  'Etapa 3'                        => 'Stage 3',
  'Relatório da Oficina 3H-CLD com valores da natureza' => '3H-CLD Workshop Report on the values of nature',
  'Relatório da Oficina 3H-CLD com valores da natureza do Projeto Bridging Values Brasil: Caso de Estudo Mosaico de Unidades de Conservação do Boqueirão da Onça, Bahia'
                                   => '3H-CLD Workshop Report on the values of nature of the Bridging Values Brazil Project: Case Study of the Boqueirão da Onça Conservation Units Mosaic, Bahia',
  'Artigos Científicos'            => 'Scientific Articles',
  'Artigo Científico'              => 'Scientific Article',
  'Percepções locais sobre conservação e empreendimentos econômicos no sertão do São Francisco'
                                   => 'Local perceptions of conservation and economic enterprises in the São Francisco backlands',
  'Trabalho apresentado no Encontro Nacional da ANPPAS (2025) analisando a relação entre a conservação e projetos locais.'
                                   => 'Paper presented at the ANPPAS National Meeting (2025) analyzing the relationship between conservation and local projects.',
  'Ler artigo completo'            => 'Read full article',

  // ---- Equipe ----
  'Equipe do Projeto'              => 'Project Team',
  'Coordenação do projeto'         => 'Project coordination',
  'Processos participativos nas comunidades' => 'Participatory processes in the communities',
  'Pesquisadores associados'       => 'Associated researchers',
  'Organização dos mapas e dados espaciais' => 'Organization of maps and spatial data',
  'Elaboração do site'             => 'Website development',

  // ---- Feedback ----
  'Contato'                        => 'Contact',
  'Queremos te ouvir'              => 'We want to hear from you',
  'Envie sua experiência ou opinião sobre o projeto.' => 'Share your experience or opinion about the project.',
  'Nome completo e comunidade/instituição' => 'Full name and community/institution',
  'E-mail *'                       => 'E-mail *',
  'Escreva aqui suas impressões, sugestões, críticas ou outra mensagem que desejar *'
                                   => 'Write here your impressions, suggestions, criticism or any other message you wish *',
  'Enviar Mensagem'                => 'Send Message',
  'Sucesso!'                       => 'Success!',
  'Sua mensagem foi enviada com sucesso. Agradecemos o seu feedback!'
                                   => 'Your message was sent successfully. Thank you for your feedback!',

  // ---- Footer ----
  'Plataforma desenvolvida pela Divisão de Impactos, Adaptação e Vulnerabilidade (DIIAV) do Instituto Nacional de Pesquisas Espaciais (INPE) para acesso a publicações, relatórios, mapas e dados geoespaciais gerados no âmbito do projeto BridgingVALUES, com foco no Mosaico de Unidades de Conservação do Boqueirão da Onça.'
                                   => 'Platform developed by the Impacts, Adaptation and Vulnerability Division (DIIAV) of the National Institute for Space Research (INPE) to provide access to publications, reports, maps and geospatial data produced within the BridgingVALUES project, focusing on the Boqueirão da Onça Conservation Units Mosaic.',
  'Navegação'                      => 'Navigation',
  'Parceiros'                      => 'Partners',
  'Projeto'                        => 'Project',
  '© {Y} INPE — Instituto Nacional de Pesquisas Espaciais. Todos os direitos reservados.'
                                   => '© {Y} INPE — National Institute for Space Research. All rights reserved.',
  'Dados disponibilizados para uso científico e educacional. Crédito fotográfico: Eda Elif Tibet, 2025.'
                                   => 'Data made available for scientific and educational use. Photo credit: Eda Elif Tibet, 2025.',
],

'attr' => [
  // head / geral
  'Atlas territorial do Parque Nacional do Boqueirão da Onça, desenvolvido pelo INPE no âmbito do projeto BridgingVALUES. Acesse mapas interativos e dados espaciais.'
                                   => 'Territorial atlas of the Boqueirão da Onça National Park, developed by INPE within the BridgingVALUES project. Access interactive maps and spatial data.',
  // nav
  'Navegação principal'            => 'Main navigation',
  'Início — BridgingVALUES - Mosaico de UCs Boqueirão da Onça' => 'Home — BridgingVALUES - Boqueirão da Onça Conservation Units Mosaic',
  'Abrir menu'                     => 'Open menu',
  'Menu de navegação'              => 'Navigation menu',
  // hero
  'Cabeçalho principal'            => 'Main header',
  // sobre
  'Acesse o site do projeto BridgingVALUES (abre em nova aba)' => 'Visit the BridgingVALUES project website (opens in a new tab)',
  // download
  'Buscar dataset… ex: geologia, drenagem, estradas' => 'Search dataset… e.g. geology, drainage, roads',
  'Lista de datasets disponíveis para download' => 'List of datasets available for download',
  'Incluído no .zip'               => 'Included in the .zip',
  // filme
  'Documentário Vozes da Caatinga' => 'Documentary Voices of the Caatinga',
  // publicações
  'Baixar Cartilha em PDF - Versão em Português (abre em nova aba)' => 'Download Booklet as PDF - Portuguese Version (opens in a new tab)',
  'Baixar Cartilha em PDF - English Version (abre em nova aba)'     => 'Download Booklet as PDF - English Version (opens in a new tab)',
  'Baixar Sumário executivo em PDF (abre em nova aba)'              => 'Download Executive summary as PDF (opens in a new tab)',
  'Baixar Relatório científico geral em PDF (abre em nova aba)'     => 'Download General scientific report as PDF (opens in a new tab)',
  'Baixar Relatório da Etapa de Campo Exploratório em PDF (abre em nova aba)' => 'Download Exploratory Fieldwork Stage Report as PDF (opens in a new tab)',
  'Baixar Relatório da Etapa de Mapeamento de Atores em PDF (abre em nova aba)' => 'Download Stakeholder Mapping Stage Report as PDF (opens in a new tab)',
  'Baixar Relatório da Oficina 3H-CLD em PDF (abre em nova aba)'    => 'Download 3H-CLD Workshop Report as PDF (opens in a new tab)',
  'Ler o artigo completo (abre em nova aba)'                        => 'Read the full article (opens in a new tab)',
  // feedback
  'Seu nome e onde atua (opcional)' => 'Your name and where you work (optional)',
  'seu.email@exemplo.com'          => 'your.email@example.com',
  'Digite sua mensagem aqui...'    => 'Type your message here...',
  // footer
  'Rodapé'                         => 'Footer',
  'INPE — Instituto Nacional de Pesquisas Espaciais' => 'INPE — National Institute for Space Research',
  'CNPq — Conselho Nacional de Desenvolvimento Científico e Tecnológico' => 'CNPq — National Council for Scientific and Technological Development',
],

'datasets' => [
  'Aerogeradores'                          => 'Wind Turbines',
  'Areas_prioritarias_conservacao'         => 'Priority Areas for Conservation',
  'Assentamentos'                          => 'Settlements',
  'Associacoes_de_comunidades_FFP'         => 'Fundo e Fecho de Pasto Community Associations',
  'CAR_imoveis_areas_sobreposicoes'        => 'CAR Rural Properties - Overlap Areas',
  'Centrais_Geradoras_Eolicas'             => 'Wind Power Plants',
  'Centrais_Geradoras_Solares_Fotovoltaicas' => 'Photovoltaic Solar Power Plants',
  'Cidades'                                => 'Cities',
  'Comunidades_entrevistas'                => 'Interviewed Communities',
  'Curvas_nivel_poligono_MDT_150_m'        => 'Contour Lines Polygons DTM 150 m',
  'Declividade_e_classes_de_relevo'        => 'Slope and Relief Classes',
  'Desmatamento'                           => 'Deforestation',
  'Drenagem'                               => 'Drainage',
  'Estradas_e_caminhos'                    => 'Roads and Trails',
  'Garimpo_da_Quixaba'                     => 'Quixaba Mining Site',
  'Geologia_tipos_de_rochas'               => 'Geology - Rock Types',
  'Imoveis_rurais_SIGEF'                   => 'Rural Properties SIGEF',
  'Limites_bacias_hidrograficas'           => 'River Basin Boundaries',
  'Linhas_de_transmissao'                  => 'Transmission Lines',
  'Localidades'                            => 'Localities',
  'Mapa_internet_area_estudo'              => 'QGIS Project - Study Area',
  'Mapa_internet_empreendimentos'          => 'QGIS Project - Enterprises',
  'Mapa_internet_geologia'                 => 'QGIS Project - Geology',
  'Mapa_internet_hidrografia'              => 'QGIS Project - Hydrography',
  'Mapa_internet_imoveis_rurais'           => 'QGIS Project - Rural Properties',
  'Mapa_internet_protecao_ambiental_comunidades' => 'QGIS Project - Environmental Protection and Communities',
  'Mapa_internet_uso_cobertura'            => 'QGIS Project - Land Use and Cover',
  'Massas_dagua'                           => 'Water Bodies',
  'Municipios_proximos_UCs'                => 'Municipalities Near Conservation Units',
  'Numero_focos_queimadas'                 => 'Number of Fire Hotspots',
  'Outorgas_Estados_Subterraneas'          => 'State Groundwater Water Rights',
  'Outorgas_Estados_Superficiais'          => 'State Surface Water Rights',
  'Outorgas_Federais'                      => 'Federal Water Rights',
  'Parques_Eolicos'                        => 'Wind Farms',
  'Potencialidade_agricola_natural'        => 'Natural Agricultural Potential',
  'Processos_minerarios'                   => 'Mining Processes',
  'Qualidade_da_pastagem'                  => 'Pasture Quality',
  'Sitios_arqueologicos'                   => 'Archaeological Sites',
  'Sitios_arqueologicos_mapeamento_Mariluce' => 'Archaeological Sites - Mariluce Mapping',
  'Trajetorias_de_degradacao'              => 'Degradation Trajectories',
  'Trecho_Rodoviario_Estadual'             => 'State Highway Sections',
  'Trecho_Rodoviario_Federal'              => 'Federal Highway Sections',
  'Unidades_Conservacao'                   => 'Conservation Units',
  'Unidades_Conservacao_nas_bacias'        => 'Conservation Units in the Basins',
  'Usina_Hidreletrica'                     => 'Hydroelectric Power Plant',
  'Uso_e_cobertura_da_terra'               => 'Land Use and Land Cover',
],

'maps' => [
  'area-estudo' => [
    'theme' => 'General / Context',
    'title' => 'Study Area',
    'desc'  => 'Delimitation of the study area, encompassing the communities, the mosaic of protected areas and nearby municipalities.',
  ],
  'comunidades-protecao' => [
    'theme' => 'Society &amp; Conservation',
    'title' => 'Traditional Communities and Protected Areas',
    'desc'  => 'Fundo e fecho de pasto associations, quilombola and indigenous communities, and protected areas.',
  ],
  'empreendimentos' => [
    'theme' => 'Energy &amp; Infrastructure',
    'title' => 'Enterprises',
    'desc'  => 'Wind farms, solar plants, hydroelectric plants and mining.',
  ],
  'geologia' => [
    'theme' => 'Geosciences',
    'title' => 'Geology',
    'desc'  => 'Archaeological sites, mining, rock types, slope and contour lines.',
  ],
  'hidrografia' => [
    'theme' => 'Water Resources',
    'title' => 'Hydrography',
    'desc'  => 'Drainage network, water bodies, river basin boundaries, and federal and state water use permits.',
  ],
  'imoveis' => [
    'theme' => 'Land Tenure',
    'title' => 'Rural Properties',
    'desc'  => 'Certified rural properties, settlements, overlaps with the Rural Environmental Registry (CAR) and CAR properties.',
  ],
  'uso' => [
    'theme' => 'Environment',
    'title' => 'Land Use and Land Cover',
    'desc'  => 'Land use and cover classes, land degradation, deforestation, fires, pasture quality and potential for agricultural development.',
  ],
],

];
