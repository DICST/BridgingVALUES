var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Desmatamentoacumuladoat2000_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://terrabrasilis.dpi.inpe.br/geoserver/prodes-caatinga-nb/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "accumulated_deforestation_2000",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Desmatamento acumulado até 2000',
                            popuplayertitle: 'Desmatamento acumulado até 2000',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Desmatamentoacumuladoat2000_1, 0]);
var format_Nmerodefocosdequeimadas_2 = new ol.format.GeoJSON();
var features_Nmerodefocosdequeimadas_2 = format_Nmerodefocosdequeimadas_2.readFeatures(json_Nmerodefocosdequeimadas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nmerodefocosdequeimadas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nmerodefocosdequeimadas_2.addFeatures(features_Nmerodefocosdequeimadas_2);
var lyr_Nmerodefocosdequeimadas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nmerodefocosdequeimadas_2, 
                style: style_Nmerodefocosdequeimadas_2,
                popuplayertitle: 'Número de focos de queimadas',
                interactive: true,
    title: 'Número de focos de queimadas<br />\
    <img src="styles/legend/Nmerodefocosdequeimadas_2_0.png" /> 0 - 3<br />\
    <img src="styles/legend/Nmerodefocosdequeimadas_2_1.png" /> > 3 - 6<br />\
    <img src="styles/legend/Nmerodefocosdequeimadas_2_2.png" /> > 6 - 9<br />\
    <img src="styles/legend/Nmerodefocosdequeimadas_2_3.png" /> > 9 - 12<br />\
    <img src="styles/legend/Nmerodefocosdequeimadas_2_4.png" /> > 12 - 14<br />' });
var format_Potencialidadeaodesenvolvimentoagrcola_3 = new ol.format.GeoJSON();
var features_Potencialidadeaodesenvolvimentoagrcola_3 = format_Potencialidadeaodesenvolvimentoagrcola_3.readFeatures(json_Potencialidadeaodesenvolvimentoagrcola_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potencialidadeaodesenvolvimentoagrcola_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potencialidadeaodesenvolvimentoagrcola_3.addFeatures(features_Potencialidadeaodesenvolvimentoagrcola_3);
var lyr_Potencialidadeaodesenvolvimentoagrcola_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potencialidadeaodesenvolvimentoagrcola_3, 
                style: style_Potencialidadeaodesenvolvimentoagrcola_3,
                popuplayertitle: 'Potencialidade ao desenvolvimento agrícola',
                interactive: true,
    title: 'Potencialidade ao desenvolvimento agrícola<br />\
    <img src="styles/legend/Potencialidadeaodesenvolvimentoagrcola_3_0.png" /> Muito boa potencialidade<br />\
    <img src="styles/legend/Potencialidadeaodesenvolvimentoagrcola_3_1.png" /> Boa potencialidade<br />\
    <img src="styles/legend/Potencialidadeaodesenvolvimentoagrcola_3_2.png" /> Moderada potencialidade<br />\
    <img src="styles/legend/Potencialidadeaodesenvolvimentoagrcola_3_3.png" /> Restrições fortes ao desenvolvimento agrícola<br />\
    <img src="styles/legend/Potencialidadeaodesenvolvimentoagrcola_3_4.png" /> Restrições muito fortes desenvolvimento uso agrícola<br />\
    <img src="styles/legend/Potencialidadeaodesenvolvimentoagrcola_3_5.png" /> Área Urbana<br />\
    <img src="styles/legend/Potencialidadeaodesenvolvimentoagrcola_3_6.png" /> Água<br />' });
var format_Qualidadedapastagem_4 = new ol.format.GeoJSON();
var features_Qualidadedapastagem_4 = format_Qualidadedapastagem_4.readFeatures(json_Qualidadedapastagem_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Qualidadedapastagem_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qualidadedapastagem_4.addFeatures(features_Qualidadedapastagem_4);
var lyr_Qualidadedapastagem_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Qualidadedapastagem_4, 
                style: style_Qualidadedapastagem_4,
                popuplayertitle: 'Qualidade da pastagem',
                interactive: true,
    title: 'Qualidade da pastagem<br />\
    <img src="styles/legend/Qualidadedapastagem_4_0.png" /> 1 - Baixa<br />\
    <img src="styles/legend/Qualidadedapastagem_4_1.png" /> 2 - Média<br />\
    <img src="styles/legend/Qualidadedapastagem_4_2.png" /> 3 - Alta<br />' });
var format_Desmatamento2004a2024_5 = new ol.format.GeoJSON();
var features_Desmatamento2004a2024_5 = format_Desmatamento2004a2024_5.readFeatures(json_Desmatamento2004a2024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desmatamento2004a2024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desmatamento2004a2024_5.addFeatures(features_Desmatamento2004a2024_5);
var lyr_Desmatamento2004a2024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desmatamento2004a2024_5, 
                style: style_Desmatamento2004a2024_5,
                popuplayertitle: 'Desmatamento (2004 a 2024)',
                interactive: true,
    title: 'Desmatamento (2004 a 2024)<br />\
    <img src="styles/legend/Desmatamento2004a2024_5_0.png" /> 2004 - 2008<br />\
    <img src="styles/legend/Desmatamento2004a2024_5_1.png" /> 2008 - 2012<br />\
    <img src="styles/legend/Desmatamento2004a2024_5_2.png" /> 2012 - 2016<br />\
    <img src="styles/legend/Desmatamento2004a2024_5_3.png" /> 2016 - 2020<br />\
    <img src="styles/legend/Desmatamento2004a2024_5_4.png" /> 2020 - 2024<br />' });
var format_Trajetriasdedegradao_6 = new ol.format.GeoJSON();
var features_Trajetriasdedegradao_6 = format_Trajetriasdedegradao_6.readFeatures(json_Trajetriasdedegradao_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trajetriasdedegradao_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trajetriasdedegradao_6.addFeatures(features_Trajetriasdedegradao_6);
var lyr_Trajetriasdedegradao_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trajetriasdedegradao_6, 
                style: style_Trajetriasdedegradao_6,
                popuplayertitle: 'Trajetórias de degradação',
                interactive: true,
    title: 'Trajetórias de degradação<br />\
    <img src="styles/legend/Trajetriasdedegradao_6_0.png" /> Trajetória de degradação baixa<br />\
    <img src="styles/legend/Trajetriasdedegradao_6_1.png" /> Trajetória de degradação moderada<br />\
    <img src="styles/legend/Trajetriasdedegradao_6_2.png" /> Trajetória de degradação alta<br />\
    <img src="styles/legend/Trajetriasdedegradao_6_3.png" /> Trajetória de degradação muito alta<br />\
    <img src="styles/legend/Trajetriasdedegradao_6_4.png" /> Trajetória de degradação mista<br />' });
var format_Usoecoberturadaterra_7 = new ol.format.GeoJSON();
var features_Usoecoberturadaterra_7 = format_Usoecoberturadaterra_7.readFeatures(json_Usoecoberturadaterra_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Usoecoberturadaterra_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Usoecoberturadaterra_7.addFeatures(features_Usoecoberturadaterra_7);
var lyr_Usoecoberturadaterra_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Usoecoberturadaterra_7, 
                style: style_Usoecoberturadaterra_7,
                popuplayertitle: 'Uso e cobertura da terra',
                interactive: true,
    title: 'Uso e cobertura da terra<br />\
    <img src="styles/legend/Usoecoberturadaterra_7_0.png" /> Área agrícola<br />\
    <img src="styles/legend/Usoecoberturadaterra_7_1.png" /> Área artificial<br />\
    <img src="styles/legend/Usoecoberturadaterra_7_2.png" /> Área úmida<br />\
    <img src="styles/legend/Usoecoberturadaterra_7_3.png" /> Corpo dágua continental<br />\
    <img src="styles/legend/Usoecoberturadaterra_7_4.png" /> Mosaico de ocupações em área campestre<br />\
    <img src="styles/legend/Usoecoberturadaterra_7_5.png" /> Mosaico de ocupações em área florestal<br />\
    <img src="styles/legend/Usoecoberturadaterra_7_6.png" /> Pastagem com manejo<br />\
    <img src="styles/legend/Usoecoberturadaterra_7_7.png" /> Vegetação campestre<br />\
    <img src="styles/legend/Usoecoberturadaterra_7_8.png" /> Vegetação florestal<br />' });
var format_UnidadesdeConservaonaregio_8 = new ol.format.GeoJSON();
var features_UnidadesdeConservaonaregio_8 = format_UnidadesdeConservaonaregio_8.readFeatures(json_UnidadesdeConservaonaregio_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesdeConservaonaregio_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservaonaregio_8.addFeatures(features_UnidadesdeConservaonaregio_8);
var lyr_UnidadesdeConservaonaregio_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservaonaregio_8, 
                style: style_UnidadesdeConservaonaregio_8,
                popuplayertitle: 'Unidades de Conservação na região',
                interactive: true,
    title: 'Unidades de Conservação na região<br />\
    <img src="styles/legend/UnidadesdeConservaonaregio_8_0.png" /> APA do Boqueirão da Onça<br />\
    <img src="styles/legend/UnidadesdeConservaonaregio_8_1.png" /> Parque Nacional do Boqueirão da Onça<br />' });
var format_Limitesdebaciashidrogrficas_9 = new ol.format.GeoJSON();
var features_Limitesdebaciashidrogrficas_9 = format_Limitesdebaciashidrogrficas_9.readFeatures(json_Limitesdebaciashidrogrficas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdebaciashidrogrficas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdebaciashidrogrficas_9.addFeatures(features_Limitesdebaciashidrogrficas_9);
var lyr_Limitesdebaciashidrogrficas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdebaciashidrogrficas_9, 
                style: style_Limitesdebaciashidrogrficas_9,
                popuplayertitle: 'Limites de bacias hidrográficas',
                interactive: true,
                title: '<img src="styles/legend/Limitesdebaciashidrogrficas_9.png" /> Limites de bacias hidrográficas'
            });
var format_Corposdgua_10 = new ol.format.GeoJSON();
var features_Corposdgua_10 = format_Corposdgua_10.readFeatures(json_Corposdgua_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corposdgua_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corposdgua_10.addFeatures(features_Corposdgua_10);
var lyr_Corposdgua_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corposdgua_10, 
                style: style_Corposdgua_10,
                popuplayertitle: 'Corpos d\'água',
                interactive: true,
                title: '<img src="styles/legend/Corposdgua_10.png" /> Corpos d\'água'
            });
var format_RodoviaEstadual_11 = new ol.format.GeoJSON();
var features_RodoviaEstadual_11 = format_RodoviaEstadual_11.readFeatures(json_RodoviaEstadual_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviaEstadual_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviaEstadual_11.addFeatures(features_RodoviaEstadual_11);
var lyr_RodoviaEstadual_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviaEstadual_11, 
                style: style_RodoviaEstadual_11,
                popuplayertitle: 'Rodovia Estadual',
                interactive: true,
                title: '<img src="styles/legend/RodoviaEstadual_11.png" /> Rodovia Estadual'
            });
var format_RodoviaFederal_12 = new ol.format.GeoJSON();
var features_RodoviaFederal_12 = format_RodoviaFederal_12.readFeatures(json_RodoviaFederal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviaFederal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviaFederal_12.addFeatures(features_RodoviaFederal_12);
var lyr_RodoviaFederal_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviaFederal_12, 
                style: style_RodoviaFederal_12,
                popuplayertitle: 'Rodovia Federal',
                interactive: true,
                title: '<img src="styles/legend/RodoviaFederal_12.png" /> Rodovia Federal'
            });
var format_Estradasecaminhos_13 = new ol.format.GeoJSON();
var features_Estradasecaminhos_13 = format_Estradasecaminhos_13.readFeatures(json_Estradasecaminhos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradasecaminhos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradasecaminhos_13.addFeatures(features_Estradasecaminhos_13);
var lyr_Estradasecaminhos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estradasecaminhos_13, 
                style: style_Estradasecaminhos_13,
                popuplayertitle: 'Estradas e caminhos',
                interactive: true,
                title: '<img src="styles/legend/Estradasecaminhos_13.png" /> Estradas e caminhos'
            });
var format_MunicpiosprximossUCs_14 = new ol.format.GeoJSON();
var features_MunicpiosprximossUCs_14 = format_MunicpiosprximossUCs_14.readFeatures(json_MunicpiosprximossUCs_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicpiosprximossUCs_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosprximossUCs_14.addFeatures(features_MunicpiosprximossUCs_14);
var lyr_MunicpiosprximossUCs_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosprximossUCs_14, 
                style: style_MunicpiosprximossUCs_14,
                popuplayertitle: 'Municípios próximos às UCs',
                interactive: true,
                title: '<img src="styles/legend/MunicpiosprximossUCs_14.png" /> Municípios próximos às UCs'
            });
var format_Cidades_15 = new ol.format.GeoJSON();
var features_Cidades_15 = format_Cidades_15.readFeatures(json_Cidades_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cidades_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cidades_15.addFeatures(features_Cidades_15);
var lyr_Cidades_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cidades_15, 
                style: style_Cidades_15,
                popuplayertitle: 'Cidades',
                interactive: true,
                title: '<img src="styles/legend/Cidades_15.png" /> Cidades'
            });
var format_Comunidades_16 = new ol.format.GeoJSON();
var features_Comunidades_16 = format_Comunidades_16.readFeatures(json_Comunidades_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunidades_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidades_16.addFeatures(features_Comunidades_16);
var lyr_Comunidades_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunidades_16, 
                style: style_Comunidades_16,
                popuplayertitle: 'Comunidades',
                interactive: true,
                title: '<img src="styles/legend/Comunidades_16.png" /> Comunidades'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Desmatamentoacumuladoat2000_1.setVisible(false);lyr_Nmerodefocosdequeimadas_2.setVisible(false);lyr_Potencialidadeaodesenvolvimentoagrcola_3.setVisible(false);lyr_Qualidadedapastagem_4.setVisible(false);lyr_Desmatamento2004a2024_5.setVisible(false);lyr_Trajetriasdedegradao_6.setVisible(false);lyr_Usoecoberturadaterra_7.setVisible(true);lyr_UnidadesdeConservaonaregio_8.setVisible(true);lyr_Limitesdebaciashidrogrficas_9.setVisible(true);lyr_Corposdgua_10.setVisible(true);lyr_RodoviaEstadual_11.setVisible(true);lyr_RodoviaFederal_12.setVisible(true);lyr_Estradasecaminhos_13.setVisible(true);lyr_MunicpiosprximossUCs_14.setVisible(true);lyr_Cidades_15.setVisible(true);lyr_Comunidades_16.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Desmatamentoacumuladoat2000_1,lyr_Nmerodefocosdequeimadas_2,lyr_Potencialidadeaodesenvolvimentoagrcola_3,lyr_Qualidadedapastagem_4,lyr_Desmatamento2004a2024_5,lyr_Trajetriasdedegradao_6,lyr_Usoecoberturadaterra_7,lyr_UnidadesdeConservaonaregio_8,lyr_Limitesdebaciashidrogrficas_9,lyr_Corposdgua_10,lyr_RodoviaEstadual_11,lyr_RodoviaFederal_12,lyr_Estradasecaminhos_13,lyr_MunicpiosprximossUCs_14,lyr_Cidades_15,lyr_Comunidades_16];
lyr_Nmerodefocosdequeimadas_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'F_25': 'F_25', 'F_24': 'F_24', 'F_23': 'F_23', 'F_22': 'F_22', 'F_21': 'F_21', 'F_20': 'F_20', 'Total': 'Total', });
lyr_Potencialidadeaodesenvolvimentoagrcola_3.set('fieldAliases', {'fid': 'fid', 'id1': 'id1', 'cd_fcim': 'cd_fcim', 'nom_unidad': 'nom_unidad', 'cod_simbol': 'cod_simbol', 'val_ncompo': 'val_ncompo', 'legenda': 'legenda', 'relevo': 'relevo', 'nome': 'nome', 'sigla': 'sigla', 'bioma': 'bioma', 'potenc_f': 'potenc_f', 'area_fim': 'area_fim', });
lyr_Qualidadedapastagem_4.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Desmatamento2004a2024_5.set('fieldAliases', {'fid': 'fid', 'state': 'state', 'path_row': 'path_row', 'main_class': 'main_class', 'class_name': 'class_name', 'def_cloud': 'def_cloud', 'julian_day': 'julian_day', 'image_date': 'image_date', 'year': 'year', 'area_km': 'area_km', 'scene_id': 'scene_id', 'source': 'source', 'satellite': 'satellite', 'sensor': 'sensor', 'uuid': 'uuid', 'layer': 'layer', 'path': 'path', });
lyr_Trajetriasdedegradao_6.set('fieldAliases', {'ID': 'ID', 'GRIDCODE': 'GRIDCODE', 'CLASS': 'CLASS', });
lyr_Usoecoberturadaterra_7.set('fieldAliases', {'id': 'id', 'uso2020': 'uso2020', 'classe': 'classe', 'Classes': 'Classes', });
lyr_UnidadesdeConservaonaregio_8.set('fieldAliases', {'uc_id': 'uc_id', 'cd_cnuc': 'cd_cnuc', 'wdpa_pid': 'wdpa_pid', 'nome_uc': 'nome_uc', 'cria_ano': 'cria_ano', 'cria_ato': 'cria_ato', 'outro_ato': 'outro_ato', 'pl_manejo': 'pl_manejo', 'co_gestor': 'co_gestor', 'quali_pol': 'quali_pol', 'ppgr': 'ppgr', 'ha_total': 'ha_total', 'ha_ato': 'ha_ato', 'esfera': 'esfera', 'uf': 'uf', 'municipio': 'municipio', 'org_gestor': 'org_gestor', 'grupo': 'grupo', 'categoria': 'categoria', 'cat_iucn': 'cat_iucn', 'amazonia': 'amazonia', 'caatinga': 'caatinga', 'cerrado': 'cerrado', 'matlantica': 'matlantica', 'pampa': 'pampa', 'pantanal': 'pantanal', 'marinho': 'marinho', 'situacao': 'situacao', 'limite': 'limite', 'rbiosfera': 'rbiosfera', 'NomeAbrev': 'NomeAbrev', });
lyr_Limitesdebaciashidrogrficas_9.set('fieldAliases', {'id': 'id', 'nmcbe': 'nmcbe', });
lyr_Corposdgua_10.set('fieldAliases', {'nome': 'nome', 'tipomassad': 'tipomassad', 'ID': 'ID', });
lyr_RodoviaEstadual_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UF_SIGLA': 'UF_SIGLA', 'ROD_ADM_NO': 'ROD_ADM_NO', 'ROD_CODIGO': 'ROD_CODIGO', 'SNV_ROD_SU': 'SNV_ROD_SU', 'ROD_CON_DE': 'ROD_CON_DE', 'ROD_FON_DE': 'ROD_FON_DE', 'br': 'br', });
lyr_RodoviaFederal_12.set('fieldAliases', {'id_trecho_': 'id_trecho_', 'nm_tipo_tr': 'nm_tipo_tr', 'sg_tipo_tr': 'sg_tipo_tr', 'desc_coinc': 'desc_coinc', 'vl_codigo': 'vl_codigo', 'ds_local_i': 'ds_local_i', 'ds_local_f': 'ds_local_f', 'vl_km_inic': 'vl_km_inic', 'vl_km_fina': 'vl_km_fina', 'vl_extensa': 'vl_extensa', 'ds_sup_fed': 'ds_sup_fed', 'ds_tipo_ad': 'ds_tipo_ad', 'sup_est_co': 'sup_est_co', 'ds_jurisdi': 'ds_jurisdi', 'ds_legenda': 'ds_legenda', 'leg_multim': 'leg_multim', 'versao_snv': 'versao_snv', 'Rotulo': 'Rotulo', });
lyr_Estradasecaminhos_13.set('fieldAliases', {'fid': 'fid', 'highway': 'highway', 'ref': 'ref', 'name': 'name', });
lyr_MunicpiosprximossUCs_14.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_Cidades_15.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', });
lyr_Comunidades_16.set('fieldAliases', {'Nome': 'Nome', });
lyr_Nmerodefocosdequeimadas_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'F_25': 'TextEdit', 'F_24': 'TextEdit', 'F_23': 'TextEdit', 'F_22': 'TextEdit', 'F_21': 'TextEdit', 'F_20': 'TextEdit', 'Total': 'Range', });
lyr_Potencialidadeaodesenvolvimentoagrcola_3.set('fieldImages', {'fid': 'TextEdit', 'id1': 'TextEdit', 'cd_fcim': 'TextEdit', 'nom_unidad': 'TextEdit', 'cod_simbol': 'TextEdit', 'val_ncompo': 'TextEdit', 'legenda': 'TextEdit', 'relevo': 'TextEdit', 'nome': 'TextEdit', 'sigla': 'TextEdit', 'bioma': 'TextEdit', 'potenc_f': 'TextEdit', 'area_fim': 'TextEdit', });
lyr_Qualidadedapastagem_4.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_Desmatamento2004a2024_5.set('fieldImages', {'fid': 'Range', 'state': 'TextEdit', 'path_row': 'TextEdit', 'main_class': 'TextEdit', 'class_name': 'TextEdit', 'def_cloud': 'TextEdit', 'julian_day': 'Range', 'image_date': 'DateTime', 'year': 'Range', 'area_km': 'TextEdit', 'scene_id': 'Range', 'source': 'TextEdit', 'satellite': 'TextEdit', 'sensor': 'TextEdit', 'uuid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Trajetriasdedegradao_6.set('fieldImages', {'ID': 'TextEdit', 'GRIDCODE': 'TextEdit', 'CLASS': 'TextEdit', });
lyr_Usoecoberturadaterra_7.set('fieldImages', {'id': 'Range', 'uso2020': 'Range', 'classe': 'TextEdit', 'Classes': 'TextEdit', });
lyr_UnidadesdeConservaonaregio_8.set('fieldImages', {'uc_id': 'TextEdit', 'cd_cnuc': 'TextEdit', 'wdpa_pid': 'TextEdit', 'nome_uc': 'TextEdit', 'cria_ano': 'TextEdit', 'cria_ato': 'TextEdit', 'outro_ato': 'TextEdit', 'pl_manejo': 'TextEdit', 'co_gestor': 'TextEdit', 'quali_pol': 'TextEdit', 'ppgr': 'TextEdit', 'ha_total': 'TextEdit', 'ha_ato': 'TextEdit', 'esfera': 'TextEdit', 'uf': 'TextEdit', 'municipio': 'TextEdit', 'org_gestor': 'TextEdit', 'grupo': 'TextEdit', 'categoria': 'TextEdit', 'cat_iucn': 'TextEdit', 'amazonia': 'TextEdit', 'caatinga': 'TextEdit', 'cerrado': 'TextEdit', 'matlantica': 'TextEdit', 'pampa': 'TextEdit', 'pantanal': 'TextEdit', 'marinho': 'TextEdit', 'situacao': 'TextEdit', 'limite': 'TextEdit', 'rbiosfera': 'TextEdit', 'NomeAbrev': 'TextEdit', });
lyr_Limitesdebaciashidrogrficas_9.set('fieldImages', {'id': 'TextEdit', 'nmcbe': 'TextEdit', });
lyr_Corposdgua_10.set('fieldImages', {'nome': 'TextEdit', 'tipomassad': 'TextEdit', 'ID': 'TextEdit', });
lyr_RodoviaEstadual_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'UF_SIGLA': 'TextEdit', 'ROD_ADM_NO': 'TextEdit', 'ROD_CODIGO': 'TextEdit', 'SNV_ROD_SU': 'TextEdit', 'ROD_CON_DE': 'TextEdit', 'ROD_FON_DE': 'TextEdit', 'br': 'TextEdit', });
lyr_RodoviaFederal_12.set('fieldImages', {'id_trecho_': 'TextEdit', 'nm_tipo_tr': 'TextEdit', 'sg_tipo_tr': 'TextEdit', 'desc_coinc': 'TextEdit', 'vl_codigo': 'TextEdit', 'ds_local_i': 'TextEdit', 'ds_local_f': 'TextEdit', 'vl_km_inic': 'TextEdit', 'vl_km_fina': 'TextEdit', 'vl_extensa': 'TextEdit', 'ds_sup_fed': 'TextEdit', 'ds_tipo_ad': 'TextEdit', 'sup_est_co': 'TextEdit', 'ds_jurisdi': 'TextEdit', 'ds_legenda': 'TextEdit', 'leg_multim': 'TextEdit', 'versao_snv': 'TextEdit', 'Rotulo': 'TextEdit', });
lyr_Estradasecaminhos_13.set('fieldImages', {'fid': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', });
lyr_MunicpiosprximossUCs_14.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Cidades_15.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', });
lyr_Comunidades_16.set('fieldImages', {'Nome': 'TextEdit', });
lyr_Nmerodefocosdequeimadas_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'F_25': 'no label', 'F_24': 'no label', 'F_23': 'no label', 'F_22': 'no label', 'F_21': 'no label', 'F_20': 'no label', 'Total': 'no label', });
lyr_Potencialidadeaodesenvolvimentoagrcola_3.set('fieldLabels', {'fid': 'no label', 'id1': 'no label', 'cd_fcim': 'no label', 'nom_unidad': 'no label', 'cod_simbol': 'no label', 'val_ncompo': 'no label', 'legenda': 'no label', 'relevo': 'no label', 'nome': 'no label', 'sigla': 'no label', 'bioma': 'no label', 'potenc_f': 'no label', 'area_fim': 'no label', });
lyr_Qualidadedapastagem_4.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Desmatamento2004a2024_5.set('fieldLabels', {'fid': 'no label', 'state': 'no label', 'path_row': 'no label', 'main_class': 'no label', 'class_name': 'no label', 'def_cloud': 'no label', 'julian_day': 'no label', 'image_date': 'no label', 'year': 'no label', 'area_km': 'no label', 'scene_id': 'no label', 'source': 'no label', 'satellite': 'no label', 'sensor': 'no label', 'uuid': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Trajetriasdedegradao_6.set('fieldLabels', {'ID': 'no label', 'GRIDCODE': 'no label', 'CLASS': 'no label', });
lyr_Usoecoberturadaterra_7.set('fieldLabels', {'id': 'no label', 'uso2020': 'no label', 'classe': 'no label', 'Classes': 'no label', });
lyr_UnidadesdeConservaonaregio_8.set('fieldLabels', {'uc_id': 'no label', 'cd_cnuc': 'no label', 'wdpa_pid': 'no label', 'nome_uc': 'no label', 'cria_ano': 'no label', 'cria_ato': 'no label', 'outro_ato': 'no label', 'pl_manejo': 'no label', 'co_gestor': 'no label', 'quali_pol': 'no label', 'ppgr': 'no label', 'ha_total': 'no label', 'ha_ato': 'no label', 'esfera': 'no label', 'uf': 'no label', 'municipio': 'no label', 'org_gestor': 'no label', 'grupo': 'no label', 'categoria': 'no label', 'cat_iucn': 'no label', 'amazonia': 'no label', 'caatinga': 'no label', 'cerrado': 'no label', 'matlantica': 'no label', 'pampa': 'no label', 'pantanal': 'no label', 'marinho': 'no label', 'situacao': 'no label', 'limite': 'no label', 'rbiosfera': 'no label', 'NomeAbrev': 'no label', });
lyr_Limitesdebaciashidrogrficas_9.set('fieldLabels', {'id': 'no label', 'nmcbe': 'no label', });
lyr_Corposdgua_10.set('fieldLabels', {'nome': 'no label', 'tipomassad': 'no label', 'ID': 'no label', });
lyr_RodoviaEstadual_11.set('fieldLabels', {'OBJECTID': 'no label', 'UF_SIGLA': 'no label', 'ROD_ADM_NO': 'no label', 'ROD_CODIGO': 'header label - always visible', 'SNV_ROD_SU': 'no label', 'ROD_CON_DE': 'no label', 'ROD_FON_DE': 'no label', 'br': 'no label', });
lyr_RodoviaFederal_12.set('fieldLabels', {'id_trecho_': 'no label', 'nm_tipo_tr': 'no label', 'sg_tipo_tr': 'no label', 'desc_coinc': 'no label', 'vl_codigo': 'no label', 'ds_local_i': 'no label', 'ds_local_f': 'no label', 'vl_km_inic': 'no label', 'vl_km_fina': 'no label', 'vl_extensa': 'no label', 'ds_sup_fed': 'no label', 'ds_tipo_ad': 'no label', 'sup_est_co': 'no label', 'ds_jurisdi': 'no label', 'ds_legenda': 'no label', 'leg_multim': 'no label', 'versao_snv': 'no label', 'Rotulo': 'header label - always visible', });
lyr_Estradasecaminhos_13.set('fieldLabels', {'fid': 'no label', 'highway': 'no label', 'ref': 'no label', 'name': 'no label', });
lyr_MunicpiosprximossUCs_14.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_Cidades_15.set('fieldLabels', {'nome': 'header label - always visible', 'geocodigo': 'no label', });
lyr_Comunidades_16.set('fieldLabels', {'Nome': 'header label - always visible', });
lyr_Comunidades_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});