# Atlas do Boqueirão da Onça — BridgingVALUES

[![Licença: MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-green.svg)](LICENSE)
[![Deploy GitHub Pages](https://github.com/DICST/BridgingVALUES/actions/workflows/pages.yml/badge.svg)](https://github.com/DICST/BridgingVALUES/actions/workflows/pages.yml)

Plataforma web para acesso a **mapas interativos, dados geoespaciais e publicações** do projeto internacional
[BridgingVALUES](https://www.bridgingvalues.ch/) no **Mosaico de Unidades de Conservação do Boqueirão da Onça (BA)**.
Desenvolvida pelo [INPE](https://www.gov.br/inpe/) (Divisão de Impactos, Adaptação e Vulnerabilidade — DIIAV).

**Site:** <https://dicst.github.io/BridgingVALUES/> · **English:** <https://dicst.github.io/BridgingVALUES/en/>

---

## Conteúdo do atlas

| Recurso | Descrição |
|---|---|
| **7 mapas interativos** | Área de estudo, comunidades e áreas protegidas, empreendimentos, geologia, hidrografia, imóveis rurais, uso e cobertura da terra (QGIS2Web / OpenLayers). |
| **46 datasets para download** | Shapefiles e projetos QGIS, cada um em um `.zip`, com busca em tempo real. |
| **Metadados** | Planilha com descrição e fontes de todos os dados espaciais. |
| **Publicações** | Cartilha (PT/EN), sumário executivo, relatórios e artigo científico. |
| **Filme** | Documentário *Vozes da Caatinga* (embed do Vimeo). |
| **Português e inglês** | Botão PT/EN no menu; versão em inglês em `/en/`. |
| **Responsivo** | Desktop, tablet e celular. |

## Como funciona

O site é **100% estático**: não usa banco de dados nem servidor de aplicação, e é hospedado no **GitHub Pages**.
O HTML é gerado localmente por um script PHP (`build.php`) a partir de `index.php` e dos componentes em `includes/`,
e versionado no repositório. A cada push na `main`, o GitHub Actions publica o site.

```
index.php + includes/ + config/ ──▶ build.php ──▶ index.html        (português)
                                                └─▶ en/index.html    (inglês, via i18n/en.php)
dados_espaciais/ (fora do repo) ──▶ build.php ──▶ downloads/*.zip
```

### Estrutura

```
.
├── index.html            # Página gerada (PT) — não editar à mão
├── en/index.html         # Página gerada (EN) — não editar à mão
├── index.php             # Fonte da página
├── includes/             # Seções (nav, hero, sobre, mapas, download, publicações, equipe, contato, rodapé)
├── config/app.php        # Metadados do site, lista de mapas, formulário, ID do Vimeo
├── i18n/en.php           # Dicionário PT → EN (textos, atributos, datasets, mapas)
├── build.php             # Gera index.html, en/index.html e downloads/*.zip
├── assets/
│   ├── css/ js/ images/
│   ├── relatorios/       # PDFs das publicações
│   └── metadados/        # Planilha de metadados
├── mapas/                # 7 mapas QGIS2Web (autocontidos)
├── downloads/            # ZIPs dos datasets (gerados por build.php)
└── .github/workflows/pages.yml
```

## Desenvolvimento

**Requisitos:** PHP 8.1+ com a extensão `zip`. Não há dependências de `npm` ou `composer`.

### Atualizar o conteúdo

1. Edite o texto em `includes/*.php` (ou `config/app.php`).
2. Se o texto mudou, atualize a chave correspondente em `i18n/en.php` — o build avisa sobre entradas sem correspondência.
3. Gere o site:

```bash
# Pasta com os shapefiles brutos (não versionada); só necessária para gerar os ZIPs
export ATLAS_DATA_DIR="/caminho/para/dados_espaciais/Dados_espaciais_e_projetos"
export VIMEO_ID="123456789"          # opcional: ID do vídeo no Vimeo (vazio = "em breve")

php -d extension=zip build.php        # ZIPs + index.html + en/index.html
php -d extension=zip build.php html   # só as páginas
php -d extension=zip build.php zips   # só os ZIPs (pula os já atualizados)
```

4. Visualize localmente com qualquer servidor estático:

```bash
python -m http.server 8000            # abra http://localhost:8000/
```

### Publicar

```bash
git add -A && git commit -m "Atualiza conteúdo" && git push origin main
```

Na primeira vez, em **Settings → Pages → Build and deployment → Source**, escolha **GitHub Actions**.
O workflow publica `index.html`, `en/`, `assets/`, `mapas/` e `downloads/`.

### Adicionar um novo dataset

1. Coloque os arquivos (`.shp`, `.dbf`, `.shx`, `.prj`…) em `dados_espaciais/Dados_espaciais_e_projetos/` com o mesmo nome-base.
2. Adicione o título em inglês em `i18n/en.php` → `datasets`.
3. Rode `php -d extension=zip build.php` e faça o commit de `downloads/`, `index.html` e `en/index.html`.

### Vídeo (Vimeo)

Defina o ID numérico do vídeo em `VIMEO_ID` (variável de ambiente no build) e gere as páginas novamente.

## Limites e decisões de projeto

- **Dados brutos e vídeo ficam fora do repositório.** O GitHub Pages limita o site a ~1 GB e cada arquivo a 100 MB.
  Por isso os shapefiles são publicados compactados (`downloads/`, ~126 MB) e o vídeo é hospedado no Vimeo.
- **Mapas em português.** São exportações do QGIS2Web; títulos, camadas e legendas não têm versão em inglês.
- **Maior arquivo versionado:** ~58 MB (camada de curvas de nível), abaixo do limite de 100 MB.

## Segurança e privacidade

- Site estático: sem back-end, sem banco de dados, sem credenciais ou chaves no repositório.
- Como o GitHub Pages não permite cabeçalhos HTTP, as páginas principais usam **Content Security Policy** e
  *referrer policy* via `<meta>`; os scripts são todos do próprio site (sem JavaScript inline).
- Links externos usam `rel="noopener noreferrer"`; o vídeo do Vimeo é carregado com `dnt=1`.
- **Formulário de contato:** envia nome (opcional), e-mail e mensagem diretamente ao **Google Forms**; o site não armazena esses dados.
- **Terceiros contatados pelo navegador:** Google Fonts (tipografia), Vimeo (vídeo, quando configurado), Google Forms (contato)
  e, nos mapas, imagens de satélite do Google (todos os 7) e serviços WMS públicos: SICAR (*Imóveis rurais*) e
  TerraBrasilis/INPE (*Uso e cobertura*). Ambos permitem acesso direto pelo navegador (CORS).
- O proxy público `allorigins.win`, que o QGIS2Web inclui por padrão, foi removido dos mapas.

> Observação: o mapa de satélite de fundo usa tiles do Google diretamente (padrão do QGIS2Web). Para uso institucional
> prolongado, avalie uma base com licença aberta (por exemplo, OpenStreetMap ou imagem própria).

Para reportar uma vulnerabilidade, abra uma *issue* privada (Security → Report a vulnerability) ou contate a equipe do projeto.

## Créditos

- **Instituição:** INPE — Instituto Nacional de Pesquisas Espaciais (DIIAV)
- **Parceiros:** CNPq · Biodiversa+ · [BridgingVALUES](https://www.bridgingvalues.ch/)
- **Coordenação:** Ana Paula Dutra Aguiar e Evandro Albiach Branco
- **Mapas e dados espaciais:** Jocilene Dantas Barros e Égon Henrique de Miranda
- **Processos participativos:** Amanda Sousa Silvino e Joaquim Laranjeira de Carvalho
- **Pesquisadores associados:** Sérgio Mantovani Paiva Pulice, Maria Paula Pires de Oliveira e Myanna Lahsen
- **Site:** Luis Henrique da Silva Campos
- **Crédito fotográfico:** Eda Elif Tibet, 2025

Bibliotecas incluídas nos mapas: [OpenLayers](https://openlayers.org/), [QGIS2Web](https://github.com/tomchadwin/qgis2web), Autolinker.

## Contribuindo

Contribuições são bem-vindas: abra uma *issue* para relatar problemas ou sugerir melhorias, ou envie um *pull request*.
Para mudanças de conteúdo, siga o fluxo de [Atualizar o conteúdo](#atualizar-o-conteúdo) e inclua no PR as páginas
geradas (`index.html`, `en/index.html`) e, se for o caso, `downloads/`.

## Licença

Distribuído sob a [Licença MIT](LICENSE). O código, os dados espaciais e as publicações deste repositório podem ser
usados, copiados, modificados e redistribuídos, mantendo o aviso de copyright e a licença.

Componentes de terceiros mantêm suas próprias licenças (OpenLayers, QGIS2Web, Autolinker, fontes do Google).
Imagens de satélite do Google e serviços externos (SICAR, TerraBrasilis, Vimeo) seguem os termos de cada provedor e
**não** estão cobertos por esta licença.
