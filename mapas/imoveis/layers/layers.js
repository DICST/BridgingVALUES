var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_ImveisdoCARCadastroAmbientalRuralatual_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserver.car.gov.br/geoserver/sicar/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "sicar_imoveis_ba",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Imóveis do CAR (Cadastro Ambiental Rural) - atual',
                            popuplayertitle: 'Imóveis do CAR (Cadastro Ambiental Rural) - atual',
                            opacity: 0.800000,
                            
                            
                          });
              wms_layers.push([lyr_ImveisdoCARCadastroAmbientalRuralatual_1, 0]);
var format_UnidadesdeConservaonaregio_2 = new ol.format.GeoJSON();
var features_UnidadesdeConservaonaregio_2 = format_UnidadesdeConservaonaregio_2.readFeatures(json_UnidadesdeConservaonaregio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesdeConservaonaregio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservaonaregio_2.addFeatures(features_UnidadesdeConservaonaregio_2);
var lyr_UnidadesdeConservaonaregio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservaonaregio_2, 
                style: style_UnidadesdeConservaonaregio_2,
                popuplayertitle: 'Unidades de Conservação na região',
                interactive: true,
    title: 'Unidades de Conservação na região<br />\
    <img src="styles/legend/UnidadesdeConservaonaregio_2_0.png" /> APA do Boqueirão da Onça<br />\
    <img src="styles/legend/UnidadesdeConservaonaregio_2_1.png" /> Parque Nacional do Boqueirão da Onça<br />' });
var format_Limitesdebaciashidrogrficas_3 = new ol.format.GeoJSON();
var features_Limitesdebaciashidrogrficas_3 = format_Limitesdebaciashidrogrficas_3.readFeatures(json_Limitesdebaciashidrogrficas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdebaciashidrogrficas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdebaciashidrogrficas_3.addFeatures(features_Limitesdebaciashidrogrficas_3);
var lyr_Limitesdebaciashidrogrficas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdebaciashidrogrficas_3, 
                style: style_Limitesdebaciashidrogrficas_3,
                popuplayertitle: 'Limites de bacias hidrográficas',
                interactive: true,
                title: '<img src="styles/legend/Limitesdebaciashidrogrficas_3.png" /> Limites de bacias hidrográficas'
            });
var format_Corposdgua_4 = new ol.format.GeoJSON();
var features_Corposdgua_4 = format_Corposdgua_4.readFeatures(json_Corposdgua_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corposdgua_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corposdgua_4.addFeatures(features_Corposdgua_4);
var lyr_Corposdgua_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corposdgua_4, 
                style: style_Corposdgua_4,
                popuplayertitle: 'Corpos d\'água',
                interactive: true,
                title: '<img src="styles/legend/Corposdgua_4.png" /> Corpos d\'água'
            });
var format_reascomsobreposiesdoCAR092025_5 = new ol.format.GeoJSON();
var features_reascomsobreposiesdoCAR092025_5 = format_reascomsobreposiesdoCAR092025_5.readFeatures(json_reascomsobreposiesdoCAR092025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reascomsobreposiesdoCAR092025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reascomsobreposiesdoCAR092025_5.addFeatures(features_reascomsobreposiesdoCAR092025_5);
var lyr_reascomsobreposiesdoCAR092025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reascomsobreposiesdoCAR092025_5, 
                style: style_reascomsobreposiesdoCAR092025_5,
                popuplayertitle: 'Áreas com sobreposições do CAR (09/2025)',
                interactive: true,
                title: '<img src="styles/legend/reascomsobreposiesdoCAR092025_5.png" /> Áreas com sobreposições do CAR (09/2025)'
            });
var format_ImveisruraisdoSIGEF032026_6 = new ol.format.GeoJSON();
var features_ImveisruraisdoSIGEF032026_6 = format_ImveisruraisdoSIGEF032026_6.readFeatures(json_ImveisruraisdoSIGEF032026_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImveisruraisdoSIGEF032026_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImveisruraisdoSIGEF032026_6.addFeatures(features_ImveisruraisdoSIGEF032026_6);
var lyr_ImveisruraisdoSIGEF032026_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImveisruraisdoSIGEF032026_6, 
                style: style_ImveisruraisdoSIGEF032026_6,
                popuplayertitle: 'Imóveis rurais do SIGEF (03/2026)',
                interactive: true,
                title: '<img src="styles/legend/ImveisruraisdoSIGEF032026_6.png" /> Imóveis rurais do SIGEF (03/2026)'
            });
var format_RodoviaEstadual_7 = new ol.format.GeoJSON();
var features_RodoviaEstadual_7 = format_RodoviaEstadual_7.readFeatures(json_RodoviaEstadual_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviaEstadual_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviaEstadual_7.addFeatures(features_RodoviaEstadual_7);
var lyr_RodoviaEstadual_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviaEstadual_7, 
                style: style_RodoviaEstadual_7,
                popuplayertitle: 'Rodovia Estadual',
                interactive: true,
                title: '<img src="styles/legend/RodoviaEstadual_7.png" /> Rodovia Estadual'
            });
var format_RodoviaFederal_8 = new ol.format.GeoJSON();
var features_RodoviaFederal_8 = format_RodoviaFederal_8.readFeatures(json_RodoviaFederal_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviaFederal_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviaFederal_8.addFeatures(features_RodoviaFederal_8);
var lyr_RodoviaFederal_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviaFederal_8, 
                style: style_RodoviaFederal_8,
                popuplayertitle: 'Rodovia Federal',
                interactive: true,
                title: '<img src="styles/legend/RodoviaFederal_8.png" /> Rodovia Federal'
            });
var format_Estradasecaminhos_9 = new ol.format.GeoJSON();
var features_Estradasecaminhos_9 = format_Estradasecaminhos_9.readFeatures(json_Estradasecaminhos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradasecaminhos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradasecaminhos_9.addFeatures(features_Estradasecaminhos_9);
var lyr_Estradasecaminhos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estradasecaminhos_9, 
                style: style_Estradasecaminhos_9,
                popuplayertitle: 'Estradas e caminhos',
                interactive: true,
                title: '<img src="styles/legend/Estradasecaminhos_9.png" /> Estradas e caminhos'
            });
var format_MunicpiosprximossUCs_10 = new ol.format.GeoJSON();
var features_MunicpiosprximossUCs_10 = format_MunicpiosprximossUCs_10.readFeatures(json_MunicpiosprximossUCs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicpiosprximossUCs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosprximossUCs_10.addFeatures(features_MunicpiosprximossUCs_10);
var lyr_MunicpiosprximossUCs_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosprximossUCs_10, 
                style: style_MunicpiosprximossUCs_10,
                popuplayertitle: 'Municípios próximos às UCs',
                interactive: true,
                title: '<img src="styles/legend/MunicpiosprximossUCs_10.png" /> Municípios próximos às UCs'
            });
var format_Cidades_11 = new ol.format.GeoJSON();
var features_Cidades_11 = format_Cidades_11.readFeatures(json_Cidades_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cidades_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cidades_11.addFeatures(features_Cidades_11);
var lyr_Cidades_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cidades_11, 
                style: style_Cidades_11,
                popuplayertitle: 'Cidades',
                interactive: true,
                title: '<img src="styles/legend/Cidades_11.png" /> Cidades'
            });
var format_Comunidades_12 = new ol.format.GeoJSON();
var features_Comunidades_12 = format_Comunidades_12.readFeatures(json_Comunidades_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunidades_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidades_12.addFeatures(features_Comunidades_12);
var lyr_Comunidades_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunidades_12, 
                style: style_Comunidades_12,
                popuplayertitle: 'Comunidades',
                interactive: true,
                title: '<img src="styles/legend/Comunidades_12.png" /> Comunidades'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ImveisdoCARCadastroAmbientalRuralatual_1.setVisible(false);lyr_UnidadesdeConservaonaregio_2.setVisible(true);lyr_Limitesdebaciashidrogrficas_3.setVisible(true);lyr_Corposdgua_4.setVisible(true);lyr_reascomsobreposiesdoCAR092025_5.setVisible(true);lyr_ImveisruraisdoSIGEF032026_6.setVisible(true);lyr_RodoviaEstadual_7.setVisible(true);lyr_RodoviaFederal_8.setVisible(true);lyr_Estradasecaminhos_9.setVisible(true);lyr_MunicpiosprximossUCs_10.setVisible(true);lyr_Cidades_11.setVisible(true);lyr_Comunidades_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ImveisdoCARCadastroAmbientalRuralatual_1,lyr_UnidadesdeConservaonaregio_2,lyr_Limitesdebaciashidrogrficas_3,lyr_Corposdgua_4,lyr_reascomsobreposiesdoCAR092025_5,lyr_ImveisruraisdoSIGEF032026_6,lyr_RodoviaEstadual_7,lyr_RodoviaFederal_8,lyr_Estradasecaminhos_9,lyr_MunicpiosprximossUCs_10,lyr_Cidades_11,lyr_Comunidades_12];
lyr_UnidadesdeConservaonaregio_2.set('fieldAliases', {'uc_id': 'uc_id', 'cd_cnuc': 'cd_cnuc', 'wdpa_pid': 'wdpa_pid', 'nome_uc': 'nome_uc', 'cria_ano': 'cria_ano', 'cria_ato': 'cria_ato', 'outro_ato': 'outro_ato', 'pl_manejo': 'pl_manejo', 'co_gestor': 'co_gestor', 'quali_pol': 'quali_pol', 'ppgr': 'ppgr', 'ha_total': 'ha_total', 'ha_ato': 'ha_ato', 'esfera': 'esfera', 'uf': 'uf', 'municipio': 'municipio', 'org_gestor': 'org_gestor', 'grupo': 'grupo', 'categoria': 'categoria', 'cat_iucn': 'cat_iucn', 'amazonia': 'amazonia', 'caatinga': 'caatinga', 'cerrado': 'cerrado', 'matlantica': 'matlantica', 'pampa': 'pampa', 'pantanal': 'pantanal', 'marinho': 'marinho', 'situacao': 'situacao', 'limite': 'limite', 'rbiosfera': 'rbiosfera', 'NomeAbrev': 'NomeAbrev', });
lyr_Limitesdebaciashidrogrficas_3.set('fieldAliases', {'id': 'id', 'nmcbe': 'nmcbe', });
lyr_Corposdgua_4.set('fieldAliases', {'nome': 'nome', 'tipomassad': 'tipomassad', 'ID': 'ID', });
lyr_reascomsobreposiesdoCAR092025_5.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'a_cat': 'a_cat', 'a_cod_tema': 'a_cod_tema', 'a_nom_tema': 'a_nom_tema', 'a_cod_imov': 'a_cod_imov', 'a_mod_fisc': 'a_mod_fisc', 'a_num_area': 'a_num_area', 'a_ind_stat': 'a_ind_stat', 'a_ind_tipo': 'a_ind_tipo', 'a_des_cond': 'a_des_cond', 'a_municipi': 'a_municipi', 'a_cod_esta': 'a_cod_esta', 'a_dat_cria': 'a_dat_cria', 'a_dat_atua': 'a_dat_atua', 'a_id': 'a_id', 'b_cat': 'b_cat', 'b_cod_tema': 'b_cod_tema', 'b_nom_tema': 'b_nom_tema', 'b_cod_imov': 'b_cod_imov', 'b_mod_fisc': 'b_mod_fisc', 'b_num_area': 'b_num_area', 'b_ind_stat': 'b_ind_stat', 'b_ind_tipo': 'b_ind_tipo', 'b_des_cond': 'b_des_cond', 'b_municipi': 'b_municipi', 'b_cod_esta': 'b_cod_esta', 'b_dat_cria': 'b_dat_cria', 'b_dat_atua': 'b_dat_atua', 'b_id': 'b_id', });
lyr_ImveisruraisdoSIGEF032026_6.set('fieldAliases', {'fid': 'fid', 'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'municipio_': 'municipio_', 'uf_id': 'uf_id', });
lyr_RodoviaEstadual_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UF_SIGLA': 'UF_SIGLA', 'ROD_ADM_NO': 'ROD_ADM_NO', 'ROD_CODIGO': 'ROD_CODIGO', 'SNV_ROD_SU': 'SNV_ROD_SU', 'ROD_CON_DE': 'ROD_CON_DE', 'ROD_FON_DE': 'ROD_FON_DE', 'br': 'br', });
lyr_RodoviaFederal_8.set('fieldAliases', {'id_trecho_': 'id_trecho_', 'nm_tipo_tr': 'nm_tipo_tr', 'sg_tipo_tr': 'sg_tipo_tr', 'desc_coinc': 'desc_coinc', 'vl_codigo': 'vl_codigo', 'ds_local_i': 'ds_local_i', 'ds_local_f': 'ds_local_f', 'vl_km_inic': 'vl_km_inic', 'vl_km_fina': 'vl_km_fina', 'vl_extensa': 'vl_extensa', 'ds_sup_fed': 'ds_sup_fed', 'ds_tipo_ad': 'ds_tipo_ad', 'sup_est_co': 'sup_est_co', 'ds_jurisdi': 'ds_jurisdi', 'ds_legenda': 'ds_legenda', 'leg_multim': 'leg_multim', 'versao_snv': 'versao_snv', 'Rotulo': 'Rotulo', });
lyr_Estradasecaminhos_9.set('fieldAliases', {'fid': 'fid', 'highway': 'highway', 'ref': 'ref', 'name': 'name', });
lyr_MunicpiosprximossUCs_10.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_Cidades_11.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', });
lyr_Comunidades_12.set('fieldAliases', {'Nome': 'Nome', });
lyr_UnidadesdeConservaonaregio_2.set('fieldImages', {'uc_id': 'TextEdit', 'cd_cnuc': 'TextEdit', 'wdpa_pid': 'TextEdit', 'nome_uc': 'TextEdit', 'cria_ano': 'TextEdit', 'cria_ato': 'TextEdit', 'outro_ato': 'TextEdit', 'pl_manejo': 'TextEdit', 'co_gestor': 'TextEdit', 'quali_pol': 'TextEdit', 'ppgr': 'TextEdit', 'ha_total': 'TextEdit', 'ha_ato': 'TextEdit', 'esfera': 'TextEdit', 'uf': 'TextEdit', 'municipio': 'TextEdit', 'org_gestor': 'TextEdit', 'grupo': 'TextEdit', 'categoria': 'TextEdit', 'cat_iucn': 'TextEdit', 'amazonia': 'TextEdit', 'caatinga': 'TextEdit', 'cerrado': 'TextEdit', 'matlantica': 'TextEdit', 'pampa': 'TextEdit', 'pantanal': 'TextEdit', 'marinho': 'TextEdit', 'situacao': 'TextEdit', 'limite': 'TextEdit', 'rbiosfera': 'TextEdit', 'NomeAbrev': 'TextEdit', });
lyr_Limitesdebaciashidrogrficas_3.set('fieldImages', {'id': 'TextEdit', 'nmcbe': 'TextEdit', });
lyr_Corposdgua_4.set('fieldImages', {'nome': 'TextEdit', 'tipomassad': 'TextEdit', 'ID': 'TextEdit', });
lyr_reascomsobreposiesdoCAR092025_5.set('fieldImages', {'fid': 'TextEdit', 'cat': 'TextEdit', 'a_cat': 'TextEdit', 'a_cod_tema': 'TextEdit', 'a_nom_tema': 'TextEdit', 'a_cod_imov': 'TextEdit', 'a_mod_fisc': 'TextEdit', 'a_num_area': 'TextEdit', 'a_ind_stat': 'TextEdit', 'a_ind_tipo': 'TextEdit', 'a_des_cond': 'TextEdit', 'a_municipi': 'TextEdit', 'a_cod_esta': 'TextEdit', 'a_dat_cria': 'TextEdit', 'a_dat_atua': 'TextEdit', 'a_id': 'TextEdit', 'b_cat': 'TextEdit', 'b_cod_tema': 'TextEdit', 'b_nom_tema': 'TextEdit', 'b_cod_imov': 'TextEdit', 'b_mod_fisc': 'TextEdit', 'b_num_area': 'TextEdit', 'b_ind_stat': 'TextEdit', 'b_ind_tipo': 'TextEdit', 'b_des_cond': 'TextEdit', 'b_municipi': 'TextEdit', 'b_cod_esta': 'TextEdit', 'b_dat_cria': 'TextEdit', 'b_dat_atua': 'TextEdit', 'b_id': 'TextEdit', });
lyr_ImveisruraisdoSIGEF032026_6.set('fieldImages', {'fid': 'TextEdit', 'parcela_co': 'TextEdit', 'rt': 'TextEdit', 'art': 'TextEdit', 'situacao_i': 'TextEdit', 'codigo_imo': 'TextEdit', 'data_submi': 'DateTime', 'data_aprov': 'DateTime', 'status': 'TextEdit', 'nome_area': 'TextEdit', 'registro_m': 'TextEdit', 'registro_d': 'DateTime', 'municipio_': 'Range', 'uf_id': 'Range', });
lyr_RodoviaEstadual_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'UF_SIGLA': 'TextEdit', 'ROD_ADM_NO': 'TextEdit', 'ROD_CODIGO': 'TextEdit', 'SNV_ROD_SU': 'TextEdit', 'ROD_CON_DE': 'TextEdit', 'ROD_FON_DE': 'TextEdit', 'br': 'TextEdit', });
lyr_RodoviaFederal_8.set('fieldImages', {'id_trecho_': 'TextEdit', 'nm_tipo_tr': 'TextEdit', 'sg_tipo_tr': 'TextEdit', 'desc_coinc': 'TextEdit', 'vl_codigo': 'TextEdit', 'ds_local_i': 'TextEdit', 'ds_local_f': 'TextEdit', 'vl_km_inic': 'TextEdit', 'vl_km_fina': 'TextEdit', 'vl_extensa': 'TextEdit', 'ds_sup_fed': 'TextEdit', 'ds_tipo_ad': 'TextEdit', 'sup_est_co': 'TextEdit', 'ds_jurisdi': 'TextEdit', 'ds_legenda': 'TextEdit', 'leg_multim': 'TextEdit', 'versao_snv': 'TextEdit', 'Rotulo': 'TextEdit', });
lyr_Estradasecaminhos_9.set('fieldImages', {'fid': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', });
lyr_MunicpiosprximossUCs_10.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Cidades_11.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', });
lyr_Comunidades_12.set('fieldImages', {'Nome': 'TextEdit', });
lyr_UnidadesdeConservaonaregio_2.set('fieldLabels', {'uc_id': 'no label', 'cd_cnuc': 'no label', 'wdpa_pid': 'no label', 'nome_uc': 'no label', 'cria_ano': 'no label', 'cria_ato': 'no label', 'outro_ato': 'no label', 'pl_manejo': 'no label', 'co_gestor': 'no label', 'quali_pol': 'no label', 'ppgr': 'no label', 'ha_total': 'no label', 'ha_ato': 'no label', 'esfera': 'no label', 'uf': 'no label', 'municipio': 'no label', 'org_gestor': 'no label', 'grupo': 'no label', 'categoria': 'no label', 'cat_iucn': 'no label', 'amazonia': 'no label', 'caatinga': 'no label', 'cerrado': 'no label', 'matlantica': 'no label', 'pampa': 'no label', 'pantanal': 'no label', 'marinho': 'no label', 'situacao': 'no label', 'limite': 'no label', 'rbiosfera': 'no label', 'NomeAbrev': 'no label', });
lyr_Limitesdebaciashidrogrficas_3.set('fieldLabels', {'id': 'no label', 'nmcbe': 'no label', });
lyr_Corposdgua_4.set('fieldLabels', {'nome': 'no label', 'tipomassad': 'no label', 'ID': 'no label', });
lyr_reascomsobreposiesdoCAR092025_5.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'a_cat': 'no label', 'a_cod_tema': 'no label', 'a_nom_tema': 'no label', 'a_cod_imov': 'no label', 'a_mod_fisc': 'no label', 'a_num_area': 'no label', 'a_ind_stat': 'no label', 'a_ind_tipo': 'no label', 'a_des_cond': 'no label', 'a_municipi': 'no label', 'a_cod_esta': 'no label', 'a_dat_cria': 'no label', 'a_dat_atua': 'no label', 'a_id': 'no label', 'b_cat': 'no label', 'b_cod_tema': 'no label', 'b_nom_tema': 'no label', 'b_cod_imov': 'no label', 'b_mod_fisc': 'no label', 'b_num_area': 'no label', 'b_ind_stat': 'no label', 'b_ind_tipo': 'no label', 'b_des_cond': 'no label', 'b_municipi': 'no label', 'b_cod_esta': 'no label', 'b_dat_cria': 'no label', 'b_dat_atua': 'no label', 'b_id': 'no label', });
lyr_ImveisruraisdoSIGEF032026_6.set('fieldLabels', {'fid': 'no label', 'parcela_co': 'no label', 'rt': 'no label', 'art': 'no label', 'situacao_i': 'no label', 'codigo_imo': 'no label', 'data_submi': 'no label', 'data_aprov': 'no label', 'status': 'no label', 'nome_area': 'no label', 'registro_m': 'no label', 'registro_d': 'no label', 'municipio_': 'no label', 'uf_id': 'no label', });
lyr_RodoviaEstadual_7.set('fieldLabels', {'OBJECTID': 'no label', 'UF_SIGLA': 'no label', 'ROD_ADM_NO': 'no label', 'ROD_CODIGO': 'header label - always visible', 'SNV_ROD_SU': 'no label', 'ROD_CON_DE': 'no label', 'ROD_FON_DE': 'no label', 'br': 'no label', });
lyr_RodoviaFederal_8.set('fieldLabels', {'id_trecho_': 'no label', 'nm_tipo_tr': 'no label', 'sg_tipo_tr': 'no label', 'desc_coinc': 'no label', 'vl_codigo': 'no label', 'ds_local_i': 'no label', 'ds_local_f': 'no label', 'vl_km_inic': 'no label', 'vl_km_fina': 'no label', 'vl_extensa': 'no label', 'ds_sup_fed': 'no label', 'ds_tipo_ad': 'no label', 'sup_est_co': 'no label', 'ds_jurisdi': 'no label', 'ds_legenda': 'no label', 'leg_multim': 'no label', 'versao_snv': 'no label', 'Rotulo': 'header label - always visible', });
lyr_Estradasecaminhos_9.set('fieldLabels', {'fid': 'no label', 'highway': 'no label', 'ref': 'no label', 'name': 'no label', });
lyr_MunicpiosprximossUCs_10.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_Cidades_11.set('fieldLabels', {'nome': 'header label - always visible', 'geocodigo': 'no label', });
lyr_Comunidades_12.set('fieldLabels', {'Nome': 'header label - always visible', });
lyr_Comunidades_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});