var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadesdeConservaonaregio_1 = new ol.format.GeoJSON();
var features_UnidadesdeConservaonaregio_1 = format_UnidadesdeConservaonaregio_1.readFeatures(json_UnidadesdeConservaonaregio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesdeConservaonaregio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservaonaregio_1.addFeatures(features_UnidadesdeConservaonaregio_1);
var lyr_UnidadesdeConservaonaregio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservaonaregio_1, 
                style: style_UnidadesdeConservaonaregio_1,
                popuplayertitle: 'Unidades de Conservação na região',
                interactive: true,
    title: 'Unidades de Conservação na região<br />\
    <img src="styles/legend/UnidadesdeConservaonaregio_1_0.png" /> APA do Boqueirão da Onça<br />\
    <img src="styles/legend/UnidadesdeConservaonaregio_1_1.png" /> Parque Nacional do Boqueirão da Onça<br />' });
var format_Limitesdebaciashidrogrficas_2 = new ol.format.GeoJSON();
var features_Limitesdebaciashidrogrficas_2 = format_Limitesdebaciashidrogrficas_2.readFeatures(json_Limitesdebaciashidrogrficas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdebaciashidrogrficas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdebaciashidrogrficas_2.addFeatures(features_Limitesdebaciashidrogrficas_2);
var lyr_Limitesdebaciashidrogrficas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdebaciashidrogrficas_2, 
                style: style_Limitesdebaciashidrogrficas_2,
                popuplayertitle: 'Limites de bacias hidrográficas',
                interactive: true,
                title: '<img src="styles/legend/Limitesdebaciashidrogrficas_2.png" /> Limites de bacias hidrográficas'
            });
var format_Corposdgua_3 = new ol.format.GeoJSON();
var features_Corposdgua_3 = format_Corposdgua_3.readFeatures(json_Corposdgua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corposdgua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corposdgua_3.addFeatures(features_Corposdgua_3);
var lyr_Corposdgua_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corposdgua_3, 
                style: style_Corposdgua_3,
                popuplayertitle: 'Corpos d\'água',
                interactive: true,
                title: '<img src="styles/legend/Corposdgua_3.png" /> Corpos d\'água'
            });
var format_RodoviaEstadual_4 = new ol.format.GeoJSON();
var features_RodoviaEstadual_4 = format_RodoviaEstadual_4.readFeatures(json_RodoviaEstadual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviaEstadual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviaEstadual_4.addFeatures(features_RodoviaEstadual_4);
var lyr_RodoviaEstadual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviaEstadual_4, 
                style: style_RodoviaEstadual_4,
                popuplayertitle: 'Rodovia Estadual',
                interactive: true,
                title: '<img src="styles/legend/RodoviaEstadual_4.png" /> Rodovia Estadual'
            });
var format_RodoviaFederal_5 = new ol.format.GeoJSON();
var features_RodoviaFederal_5 = format_RodoviaFederal_5.readFeatures(json_RodoviaFederal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviaFederal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviaFederal_5.addFeatures(features_RodoviaFederal_5);
var lyr_RodoviaFederal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviaFederal_5, 
                style: style_RodoviaFederal_5,
                popuplayertitle: 'Rodovia Federal',
                interactive: true,
                title: '<img src="styles/legend/RodoviaFederal_5.png" /> Rodovia Federal'
            });
var format_Estradasecaminhos_6 = new ol.format.GeoJSON();
var features_Estradasecaminhos_6 = format_Estradasecaminhos_6.readFeatures(json_Estradasecaminhos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradasecaminhos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradasecaminhos_6.addFeatures(features_Estradasecaminhos_6);
var lyr_Estradasecaminhos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estradasecaminhos_6, 
                style: style_Estradasecaminhos_6,
                popuplayertitle: 'Estradas e caminhos',
                interactive: true,
                title: '<img src="styles/legend/Estradasecaminhos_6.png" /> Estradas e caminhos'
            });
var format_MunicpiosprximossUCs_7 = new ol.format.GeoJSON();
var features_MunicpiosprximossUCs_7 = format_MunicpiosprximossUCs_7.readFeatures(json_MunicpiosprximossUCs_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicpiosprximossUCs_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosprximossUCs_7.addFeatures(features_MunicpiosprximossUCs_7);
var lyr_MunicpiosprximossUCs_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosprximossUCs_7, 
                style: style_MunicpiosprximossUCs_7,
                popuplayertitle: 'Municípios próximos às UCs',
                interactive: true,
                title: '<img src="styles/legend/MunicpiosprximossUCs_7.png" /> Municípios próximos às UCs'
            });
var format_Processosminerrios_8 = new ol.format.GeoJSON();
var features_Processosminerrios_8 = format_Processosminerrios_8.readFeatures(json_Processosminerrios_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Processosminerrios_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Processosminerrios_8.addFeatures(features_Processosminerrios_8);
var lyr_Processosminerrios_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Processosminerrios_8, 
                style: style_Processosminerrios_8,
                popuplayertitle: 'Processos minerários',
                interactive: true,
    title: 'Processos minerários<br />\
    <img src="styles/legend/Processosminerrios_8_0.png" /> Concessão de Lavra<br />\
    <img src="styles/legend/Processosminerrios_8_1.png" /> Lavra Garimpeira<br />\
    <img src="styles/legend/Processosminerrios_8_2.png" /> Outras fases do processo minerário<br />' });
var format_GarimpodaQuixaba_9 = new ol.format.GeoJSON();
var features_GarimpodaQuixaba_9 = format_GarimpodaQuixaba_9.readFeatures(json_GarimpodaQuixaba_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GarimpodaQuixaba_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarimpodaQuixaba_9.addFeatures(features_GarimpodaQuixaba_9);
var lyr_GarimpodaQuixaba_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GarimpodaQuixaba_9, 
                style: style_GarimpodaQuixaba_9,
                popuplayertitle: 'Garimpo da Quixaba',
                interactive: true,
                title: '<img src="styles/legend/GarimpodaQuixaba_9.png" /> Garimpo da Quixaba'
            });
var format_Linhasdetransmisso_10 = new ol.format.GeoJSON();
var features_Linhasdetransmisso_10 = format_Linhasdetransmisso_10.readFeatures(json_Linhasdetransmisso_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linhasdetransmisso_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linhasdetransmisso_10.addFeatures(features_Linhasdetransmisso_10);
var lyr_Linhasdetransmisso_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linhasdetransmisso_10, 
                style: style_Linhasdetransmisso_10,
                popuplayertitle: 'Linhas de transmissão',
                interactive: true,
                title: '<img src="styles/legend/Linhasdetransmisso_10.png" /> Linhas de transmissão'
            });
var format_ParquesElicos_11 = new ol.format.GeoJSON();
var features_ParquesElicos_11 = format_ParquesElicos_11.readFeatures(json_ParquesElicos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquesElicos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquesElicos_11.addFeatures(features_ParquesElicos_11);
var lyr_ParquesElicos_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquesElicos_11, 
                style: style_ParquesElicos_11,
                popuplayertitle: 'Parques Eólicos',
                interactive: true,
    title: 'Parques Eólicos<br />\
    <img src="styles/legend/ParquesElicos_11_0.png" /> Operação<br />\
    <img src="styles/legend/ParquesElicos_11_1.png" /> Não implantado<br />' });
var format_Aerogeradores_12 = new ol.format.GeoJSON();
var features_Aerogeradores_12 = format_Aerogeradores_12.readFeatures(json_Aerogeradores_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aerogeradores_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aerogeradores_12.addFeatures(features_Aerogeradores_12);
var lyr_Aerogeradores_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aerogeradores_12, 
                style: style_Aerogeradores_12,
                popuplayertitle: 'Aerogeradores',
                interactive: true,
    title: 'Aerogeradores<br />\
    <img src="styles/legend/Aerogeradores_12_0.png" /> Operação<br />\
    <img src="styles/legend/Aerogeradores_12_1.png" /> Não implantado<br />' });
var format_CentraisGeradorasElicas_13 = new ol.format.GeoJSON();
var features_CentraisGeradorasElicas_13 = format_CentraisGeradorasElicas_13.readFeatures(json_CentraisGeradorasElicas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentraisGeradorasElicas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentraisGeradorasElicas_13.addFeatures(features_CentraisGeradorasElicas_13);
var lyr_CentraisGeradorasElicas_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentraisGeradorasElicas_13, 
                style: style_CentraisGeradorasElicas_13,
                popuplayertitle: 'Centrais Geradoras Eólicas',
                interactive: true,
    title: 'Centrais Geradoras Eólicas<br />\
    <img src="styles/legend/CentraisGeradorasElicas_13_0.png" /> Operação<br />\
    <img src="styles/legend/CentraisGeradorasElicas_13_1.png" /> Não implantada<br />' });
var format_CentraisGeradorasSolaresFotovolticas_14 = new ol.format.GeoJSON();
var features_CentraisGeradorasSolaresFotovolticas_14 = format_CentraisGeradorasSolaresFotovolticas_14.readFeatures(json_CentraisGeradorasSolaresFotovolticas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentraisGeradorasSolaresFotovolticas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentraisGeradorasSolaresFotovolticas_14.addFeatures(features_CentraisGeradorasSolaresFotovolticas_14);
var lyr_CentraisGeradorasSolaresFotovolticas_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentraisGeradorasSolaresFotovolticas_14, 
                style: style_CentraisGeradorasSolaresFotovolticas_14,
                popuplayertitle: 'Centrais Geradoras Solares Fotovoltáicas',
                interactive: true,
    title: 'Centrais Geradoras Solares Fotovoltáicas<br />\
    <img src="styles/legend/CentraisGeradorasSolaresFotovolticas_14_0.png" /> Operação<br />\
    <img src="styles/legend/CentraisGeradorasSolaresFotovolticas_14_1.png" /> Não implantada<br />' });
var format_UsinaHidreltrica_15 = new ol.format.GeoJSON();
var features_UsinaHidreltrica_15 = format_UsinaHidreltrica_15.readFeatures(json_UsinaHidreltrica_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsinaHidreltrica_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsinaHidreltrica_15.addFeatures(features_UsinaHidreltrica_15);
var lyr_UsinaHidreltrica_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsinaHidreltrica_15, 
                style: style_UsinaHidreltrica_15,
                popuplayertitle: 'Usina Hidrelétrica',
                interactive: true,
                title: '<img src="styles/legend/UsinaHidreltrica_15.png" /> Usina Hidrelétrica'
            });
var format_Cidades_16 = new ol.format.GeoJSON();
var features_Cidades_16 = format_Cidades_16.readFeatures(json_Cidades_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cidades_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cidades_16.addFeatures(features_Cidades_16);
var lyr_Cidades_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cidades_16, 
                style: style_Cidades_16,
                popuplayertitle: 'Cidades',
                interactive: true,
                title: '<img src="styles/legend/Cidades_16.png" /> Cidades'
            });
var format_Comunidades_17 = new ol.format.GeoJSON();
var features_Comunidades_17 = format_Comunidades_17.readFeatures(json_Comunidades_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunidades_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidades_17.addFeatures(features_Comunidades_17);
var lyr_Comunidades_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunidades_17, 
                style: style_Comunidades_17,
                popuplayertitle: 'Comunidades',
                interactive: true,
                title: '<img src="styles/legend/Comunidades_17.png" /> Comunidades'
            });
var group_EnergiaHidreltrica = new ol.layer.Group({
                                layers: [lyr_UsinaHidreltrica_15,],
                                fold: 'open',
                                title: 'Energia Hidrelétrica'});
var group_EnergiaSolar = new ol.layer.Group({
                                layers: [lyr_CentraisGeradorasSolaresFotovolticas_14,],
                                fold: 'open',
                                title: 'Energia Solar'});
var group_EnergiaElica = new ol.layer.Group({
                                layers: [lyr_Linhasdetransmisso_10,lyr_ParquesElicos_11,lyr_Aerogeradores_12,lyr_CentraisGeradorasElicas_13,],
                                fold: 'open',
                                title: 'Energia Eólica'});
var group_Minerao = new ol.layer.Group({
                                layers: [lyr_Processosminerrios_8,lyr_GarimpodaQuixaba_9,],
                                fold: 'open',
                                title: 'Mineração'});

lyr_GoogleSatellite_0.setVisible(true);lyr_UnidadesdeConservaonaregio_1.setVisible(true);lyr_Limitesdebaciashidrogrficas_2.setVisible(true);lyr_Corposdgua_3.setVisible(true);lyr_RodoviaEstadual_4.setVisible(true);lyr_RodoviaFederal_5.setVisible(true);lyr_Estradasecaminhos_6.setVisible(true);lyr_MunicpiosprximossUCs_7.setVisible(true);lyr_Processosminerrios_8.setVisible(true);lyr_GarimpodaQuixaba_9.setVisible(true);lyr_Linhasdetransmisso_10.setVisible(true);lyr_ParquesElicos_11.setVisible(true);lyr_Aerogeradores_12.setVisible(true);lyr_CentraisGeradorasElicas_13.setVisible(true);lyr_CentraisGeradorasSolaresFotovolticas_14.setVisible(true);lyr_UsinaHidreltrica_15.setVisible(true);lyr_Cidades_16.setVisible(true);lyr_Comunidades_17.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_UnidadesdeConservaonaregio_1,lyr_Limitesdebaciashidrogrficas_2,lyr_Corposdgua_3,lyr_RodoviaEstadual_4,lyr_RodoviaFederal_5,lyr_Estradasecaminhos_6,lyr_MunicpiosprximossUCs_7,group_Minerao,group_EnergiaElica,group_EnergiaSolar,group_EnergiaHidreltrica,lyr_Cidades_16,lyr_Comunidades_17];
lyr_UnidadesdeConservaonaregio_1.set('fieldAliases', {'uc_id': 'uc_id', 'cd_cnuc': 'cd_cnuc', 'wdpa_pid': 'wdpa_pid', 'nome_uc': 'nome_uc', 'cria_ano': 'cria_ano', 'cria_ato': 'cria_ato', 'outro_ato': 'outro_ato', 'pl_manejo': 'pl_manejo', 'co_gestor': 'co_gestor', 'quali_pol': 'quali_pol', 'ppgr': 'ppgr', 'ha_total': 'ha_total', 'ha_ato': 'ha_ato', 'esfera': 'esfera', 'uf': 'uf', 'municipio': 'municipio', 'org_gestor': 'org_gestor', 'grupo': 'grupo', 'categoria': 'categoria', 'cat_iucn': 'cat_iucn', 'amazonia': 'amazonia', 'caatinga': 'caatinga', 'cerrado': 'cerrado', 'matlantica': 'matlantica', 'pampa': 'pampa', 'pantanal': 'pantanal', 'marinho': 'marinho', 'situacao': 'situacao', 'limite': 'limite', 'rbiosfera': 'rbiosfera', 'NomeAbrev': 'NomeAbrev', });
lyr_Limitesdebaciashidrogrficas_2.set('fieldAliases', {'id': 'id', 'nmcbe': 'nmcbe', });
lyr_Corposdgua_3.set('fieldAliases', {'nome': 'nome', 'tipomassad': 'tipomassad', 'ID': 'ID', });
lyr_RodoviaEstadual_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UF_SIGLA': 'UF_SIGLA', 'ROD_ADM_NO': 'ROD_ADM_NO', 'ROD_CODIGO': 'ROD_CODIGO', 'SNV_ROD_SU': 'SNV_ROD_SU', 'ROD_CON_DE': 'ROD_CON_DE', 'ROD_FON_DE': 'ROD_FON_DE', 'br': 'br', });
lyr_RodoviaFederal_5.set('fieldAliases', {'id_trecho_': 'id_trecho_', 'nm_tipo_tr': 'nm_tipo_tr', 'sg_tipo_tr': 'sg_tipo_tr', 'desc_coinc': 'desc_coinc', 'vl_codigo': 'vl_codigo', 'ds_local_i': 'ds_local_i', 'ds_local_f': 'ds_local_f', 'vl_km_inic': 'vl_km_inic', 'vl_km_fina': 'vl_km_fina', 'vl_extensa': 'vl_extensa', 'ds_sup_fed': 'ds_sup_fed', 'ds_tipo_ad': 'ds_tipo_ad', 'sup_est_co': 'sup_est_co', 'ds_jurisdi': 'ds_jurisdi', 'ds_legenda': 'ds_legenda', 'leg_multim': 'leg_multim', 'versao_snv': 'versao_snv', 'Rotulo': 'Rotulo', });
lyr_Estradasecaminhos_6.set('fieldAliases', {'fid': 'fid', 'highway': 'highway', 'ref': 'ref', 'name': 'name', });
lyr_MunicpiosprximossUCs_7.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_Processosminerrios_8.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GarimpodaQuixaba_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Nome', });
lyr_Linhasdetransmisso_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ParquesElicos_11.set('fieldAliases', {'fid': 'fid', 'NOME_EOL': 'NOME_EOL', 'POT_MW': 'POT_MW', 'AREA_M2': 'AREA_M2', 'EOL_VERSAO': 'EOL_VERSAO', 'DATA_ATUAL': 'DATA_ATUAL', 'FASE': 'FASE', 'ORIGEM': 'ORIGEM', 'SHAPE_STAr': 'SHAPE_STAr', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_Aerogeradores_12.set('fieldAliases', {'fid': 'fid', 'POT_MW': 'POT_MW', 'ALT_TOTAL': 'ALT_TOTAL', 'ALT_TORRE': 'ALT_TORRE', 'DIAM_ROTOR': 'DIAM_ROTOR', 'DATA_ATUAL': 'DATA_ATUAL', 'EOL_VERSAO': 'EOL_VERSAO', 'NOME_EOL': 'NOME_EOL', 'DEN_AEG': 'DEN_AEG', 'X': 'X', 'Y': 'Y', 'DATUM_EMP': 'DATUM_EMP', 'OPERACAO': 'OPERACAO', 'UF': 'UF', 'FUSO_AG': 'FUSO_AG', 'PROPRIETAR': 'PROPRIETAR', 'CEG': 'CEG', 'ORIGEM': 'ORIGEM', });
lyr_CentraisGeradorasElicas_13.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'CODMUN': 'CODMUN', 'MUNIC1': 'MUNIC1', 'UF1': 'UF1', 'PROC_ANEEL': 'PROC_ANEEL', 'ATO_LEGAL': 'ATO_LEGAL', 'P_OUT_KW': 'P_OUT_KW', 'P_FISC_KW': 'P_FISC_KW', 'PROPRIETAR': 'PROPRIETAR', 'CaminhoFot': 'CaminhoFot', 'CaminhoCon': 'CaminhoCon', 'DATA_ATUAL': 'DATA_ATUAL', 'EOL_VERSAO': 'EOL_VERSAO', 'DRO_ID_SCG': 'DRO_ID_SCG', 'LONG_GMS': 'LONG_GMS', 'LAT_GMS': 'LAT_GMS', 'NOMES_EOL_': 'NOMES_EOL_', 'DRO_DATA': 'DRO_DATA', 'ID_LT': 'ID_LT', 'ID_SE': 'ID_SE', 'ID_EST': 'ID_EST', 'DRO_DT_VIG': 'DRO_DT_VIG', 'CEG': 'CEG', 'ID_EMPREEN': 'ID_EMPREEN', 'LAT_DEC': 'LAT_DEC', 'LONG_DEC': 'LONG_DEC', 'QTD_AEG': 'QTD_AEG', 'INICIO_OPE': 'INICIO_OPE', 'FASE': 'FASE', 'VALIDACAO': 'VALIDACAO', 'FUSO': 'FUSO', 'DATUM_EMP': 'DATUM_EMP', 'TIPO_EXP': 'TIPO_EXP', 'OBS': 'OBS', });
lyr_CentraisGeradorasSolaresFotovolticas_14.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'PROPRIETAR': 'PROPRIETAR', 'CNPJ': 'CNPJ', 'CEG': 'CEG', 'MUNIC': 'MUNIC', 'UF': 'UF', 'ATO_LEGAL': 'ATO_LEGAL', 'PROC_ANEEL': 'PROC_ANEEL', 'POT_KW': 'POT_KW', 'OBS': 'OBS', 'DATA_ATUAL': 'DATA_ATUAL', 'INIC_OPER': 'INIC_OPER', 'POT_FISC_K': 'POT_FISC_K', 'CODMUN': 'CODMUN', 'LAT_GMS': 'LAT_GMS', 'LONG_GMS': 'LONG_GMS', 'ID_EMPREEN': 'ID_EMPREEN', 'LAT_DEC': 'LAT_DEC', 'LONG_DEC': 'LONG_DEC', 'ESTAGIO_GE': 'ESTAGIO_GE', 'COMBUSTIVE': 'COMBUSTIVE', 'DATUM': 'DATUM', 'TIPO_EXPLO': 'TIPO_EXPLO', 'FASE_USINA': 'FASE_USINA', 'CLASSE_COM': 'CLASSE_COM', 'FONTE_COMB': 'FONTE_COMB', 'OPER_COM': 'OPER_COM', });
lyr_UsinaHidreltrica_15.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'PROPRIETAR': 'PROPRIETAR', 'CNPJ': 'CNPJ', 'CEG': 'CEG', 'MUNIC_CF': 'MUNIC_CF', 'UF_CF': 'UF_CF', 'MUNIC_1': 'MUNIC_1', 'UF_1': 'UF_1', 'MUNIC_2': 'MUNIC_2', 'UF_2': 'UF_2', 'RIO': 'RIO', 'COD_BAC': 'COD_BAC', 'COD_SBAC': 'COD_SBAC', 'DSP_INV': 'DSP_INV', 'ATO_LEGAL': 'ATO_LEGAL', 'PROC_ANEEL': 'PROC_ANEEL', 'LAT_EIXO_G': 'LAT_EIXO_G', 'LONG_EIXO_': 'LONG_EIXO_', 'LAT_CF_GMS': 'LAT_CF_GMS', 'LONG_CF_GM': 'LONG_CF_GM', 'POT_KW': 'POT_KW', 'N_UNID_GER': 'N_UNID_GER', 'POT_UNI_GE': 'POT_UNI_GE', 'FATOR_POT': 'FATOR_POT', 'POT_POR_TU': 'POT_POR_TU', 'ENG_MIN': 'ENG_MIN', 'TIPO_TURB': 'TIPO_TURB', 'REND_NOM_T': 'REND_NOM_T', 'REND_NOM_G': 'REND_NOM_G', 'TX_EQ_INDS': 'TX_EQ_INDS', 'INDS_PROG': 'INDS_PROG', 'PERD_HID_N': 'PERD_HID_N', 'NA_MAX_MAX': 'NA_MAX_MAX', 'NA_MAX_MON': 'NA_MAX_MON', 'NA_MIN_MON': 'NA_MIN_MON', 'NA_NOR_JUS': 'NA_NOR_JUS', 'AREA_NA_MA': 'AREA_NA_MA', 'AREA_NA_MI': 'AREA_NA_MI', 'AREA_DREN': 'AREA_DREN', 'VOL_NA_MAX': 'VOL_NA_MAX', 'VOL_NA_MIN': 'VOL_NA_MIN', 'QD_BRUTA_N': 'QD_BRUTA_N', 'PERDAS_ELE': 'PERDAS_ELE', 'CONS_INTER': 'CONS_INTER', 'VAZAO_REM': 'VAZAO_REM', 'VAZAO_USO_': 'VAZAO_USO_', 'VAZAO_PROJ': 'VAZAO_PROJ', 'SERIE_VAZA': 'SERIE_VAZA', 'TABELA_SER': 'TABELA_SER', 'OBS': 'OBS', 'DATA_ATUAL': 'DATA_ATUAL', 'INIC_OPER': 'INIC_OPER', 'POT_FISC_K': 'POT_FISC_K', 'COD_UPH': 'COD_UPH', 'ID_EMPREEN': 'ID_EMPREEN', 'LAT_EIXO_D': 'LAT_EIXO_D', 'LONG_EIXO1': 'LONG_EIXO1', 'TIPO_AHE': 'TIPO_AHE', 'REG_MENS': 'REG_MENS', 'RN_696_15': 'RN_696_15', 'FASE': 'FASE', 'VERSAO_ATU': 'VERSAO_ATU', });
lyr_Cidades_16.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', });
lyr_Comunidades_17.set('fieldAliases', {'Nome': 'Nome', });
lyr_UnidadesdeConservaonaregio_1.set('fieldImages', {'uc_id': 'TextEdit', 'cd_cnuc': 'TextEdit', 'wdpa_pid': 'TextEdit', 'nome_uc': 'TextEdit', 'cria_ano': 'TextEdit', 'cria_ato': 'TextEdit', 'outro_ato': 'TextEdit', 'pl_manejo': 'TextEdit', 'co_gestor': 'TextEdit', 'quali_pol': 'TextEdit', 'ppgr': 'TextEdit', 'ha_total': 'TextEdit', 'ha_ato': 'TextEdit', 'esfera': 'TextEdit', 'uf': 'TextEdit', 'municipio': 'TextEdit', 'org_gestor': 'TextEdit', 'grupo': 'TextEdit', 'categoria': 'TextEdit', 'cat_iucn': 'TextEdit', 'amazonia': 'TextEdit', 'caatinga': 'TextEdit', 'cerrado': 'TextEdit', 'matlantica': 'TextEdit', 'pampa': 'TextEdit', 'pantanal': 'TextEdit', 'marinho': 'TextEdit', 'situacao': 'TextEdit', 'limite': 'TextEdit', 'rbiosfera': 'TextEdit', 'NomeAbrev': 'TextEdit', });
lyr_Limitesdebaciashidrogrficas_2.set('fieldImages', {'id': 'TextEdit', 'nmcbe': 'TextEdit', });
lyr_Corposdgua_3.set('fieldImages', {'nome': 'TextEdit', 'tipomassad': 'TextEdit', 'ID': 'TextEdit', });
lyr_RodoviaEstadual_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'UF_SIGLA': 'TextEdit', 'ROD_ADM_NO': 'TextEdit', 'ROD_CODIGO': 'TextEdit', 'SNV_ROD_SU': 'TextEdit', 'ROD_CON_DE': 'TextEdit', 'ROD_FON_DE': 'TextEdit', 'br': 'TextEdit', });
lyr_RodoviaFederal_5.set('fieldImages', {'id_trecho_': 'TextEdit', 'nm_tipo_tr': 'TextEdit', 'sg_tipo_tr': 'TextEdit', 'desc_coinc': 'TextEdit', 'vl_codigo': 'TextEdit', 'ds_local_i': 'TextEdit', 'ds_local_f': 'TextEdit', 'vl_km_inic': 'TextEdit', 'vl_km_fina': 'TextEdit', 'vl_extensa': 'TextEdit', 'ds_sup_fed': 'TextEdit', 'ds_tipo_ad': 'TextEdit', 'sup_est_co': 'TextEdit', 'ds_jurisdi': 'TextEdit', 'ds_legenda': 'TextEdit', 'leg_multim': 'TextEdit', 'versao_snv': 'TextEdit', 'Rotulo': 'TextEdit', });
lyr_Estradasecaminhos_6.set('fieldImages', {'fid': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', });
lyr_MunicpiosprximossUCs_7.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Processosminerrios_8.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': 'TextEdit', 'NUMERO': 'Range', 'ANO': 'Range', 'AREA_HA': 'TextEdit', 'ID': 'TextEdit', 'FASE': 'TextEdit', 'ULT_EVENTO': 'TextEdit', 'NOME': 'TextEdit', 'SUBS': 'TextEdit', 'USO': 'TextEdit', 'UF': 'TextEdit', 'DSProcesso': 'TextEdit', });
lyr_GarimpodaQuixaba_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Linhasdetransmisso_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_ParquesElicos_11.set('fieldImages', {'fid': 'TextEdit', 'NOME_EOL': 'TextEdit', 'POT_MW': 'TextEdit', 'AREA_M2': 'TextEdit', 'EOL_VERSAO': 'TextEdit', 'DATA_ATUAL': 'DateTime', 'FASE': 'TextEdit', 'ORIGEM': 'TextEdit', 'SHAPE_STAr': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_Aerogeradores_12.set('fieldImages', {'fid': 'TextEdit', 'POT_MW': 'TextEdit', 'ALT_TOTAL': 'TextEdit', 'ALT_TORRE': 'TextEdit', 'DIAM_ROTOR': 'TextEdit', 'DATA_ATUAL': 'DateTime', 'EOL_VERSAO': 'TextEdit', 'NOME_EOL': 'TextEdit', 'DEN_AEG': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'DATUM_EMP': 'TextEdit', 'OPERACAO': 'TextEdit', 'UF': 'TextEdit', 'FUSO_AG': 'TextEdit', 'PROPRIETAR': 'TextEdit', 'CEG': 'TextEdit', 'ORIGEM': 'TextEdit', });
lyr_CentraisGeradorasElicas_13.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'CODMUN': 'TextEdit', 'MUNIC1': 'TextEdit', 'UF1': 'TextEdit', 'PROC_ANEEL': 'TextEdit', 'ATO_LEGAL': 'TextEdit', 'P_OUT_KW': 'TextEdit', 'P_FISC_KW': 'TextEdit', 'PROPRIETAR': 'TextEdit', 'CaminhoFot': 'TextEdit', 'CaminhoCon': 'TextEdit', 'DATA_ATUAL': 'DateTime', 'EOL_VERSAO': 'TextEdit', 'DRO_ID_SCG': 'TextEdit', 'LONG_GMS': 'TextEdit', 'LAT_GMS': 'TextEdit', 'NOMES_EOL_': 'TextEdit', 'DRO_DATA': 'DateTime', 'ID_LT': 'TextEdit', 'ID_SE': 'TextEdit', 'ID_EST': 'TextEdit', 'DRO_DT_VIG': 'DateTime', 'CEG': 'TextEdit', 'ID_EMPREEN': 'TextEdit', 'LAT_DEC': 'TextEdit', 'LONG_DEC': 'TextEdit', 'QTD_AEG': 'TextEdit', 'INICIO_OPE': 'DateTime', 'FASE': 'TextEdit', 'VALIDACAO': 'TextEdit', 'FUSO': 'TextEdit', 'DATUM_EMP': 'TextEdit', 'TIPO_EXP': 'TextEdit', 'OBS': 'TextEdit', });
lyr_CentraisGeradorasSolaresFotovolticas_14.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', 'PROPRIETAR': 'TextEdit', 'CNPJ': 'TextEdit', 'CEG': 'TextEdit', 'MUNIC': 'TextEdit', 'UF': 'TextEdit', 'ATO_LEGAL': 'TextEdit', 'PROC_ANEEL': 'TextEdit', 'POT_KW': 'TextEdit', 'OBS': 'TextEdit', 'DATA_ATUAL': 'DateTime', 'INIC_OPER': 'DateTime', 'POT_FISC_K': 'TextEdit', 'CODMUN': 'TextEdit', 'LAT_GMS': 'TextEdit', 'LONG_GMS': 'TextEdit', 'ID_EMPREEN': 'TextEdit', 'LAT_DEC': 'TextEdit', 'LONG_DEC': 'TextEdit', 'ESTAGIO_GE': 'TextEdit', 'COMBUSTIVE': 'TextEdit', 'DATUM': 'TextEdit', 'TIPO_EXPLO': 'TextEdit', 'FASE_USINA': 'TextEdit', 'CLASSE_COM': 'TextEdit', 'FONTE_COMB': 'TextEdit', 'OPER_COM': 'TextEdit', });
lyr_UsinaHidreltrica_15.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', 'PROPRIETAR': 'TextEdit', 'CNPJ': 'TextEdit', 'CEG': 'TextEdit', 'MUNIC_CF': 'TextEdit', 'UF_CF': 'TextEdit', 'MUNIC_1': 'TextEdit', 'UF_1': 'TextEdit', 'MUNIC_2': 'TextEdit', 'UF_2': 'TextEdit', 'RIO': 'TextEdit', 'COD_BAC': 'TextEdit', 'COD_SBAC': 'TextEdit', 'DSP_INV': 'TextEdit', 'ATO_LEGAL': 'TextEdit', 'PROC_ANEEL': 'TextEdit', 'LAT_EIXO_G': 'TextEdit', 'LONG_EIXO_': 'TextEdit', 'LAT_CF_GMS': 'TextEdit', 'LONG_CF_GM': 'TextEdit', 'POT_KW': 'TextEdit', 'N_UNID_GER': 'Range', 'POT_UNI_GE': 'TextEdit', 'FATOR_POT': 'TextEdit', 'POT_POR_TU': 'TextEdit', 'ENG_MIN': 'TextEdit', 'TIPO_TURB': 'TextEdit', 'REND_NOM_T': 'TextEdit', 'REND_NOM_G': 'TextEdit', 'TX_EQ_INDS': 'TextEdit', 'INDS_PROG': 'TextEdit', 'PERD_HID_N': 'TextEdit', 'NA_MAX_MAX': 'TextEdit', 'NA_MAX_MON': 'TextEdit', 'NA_MIN_MON': 'TextEdit', 'NA_NOR_JUS': 'TextEdit', 'AREA_NA_MA': 'TextEdit', 'AREA_NA_MI': 'TextEdit', 'AREA_DREN': 'TextEdit', 'VOL_NA_MAX': 'TextEdit', 'VOL_NA_MIN': 'TextEdit', 'QD_BRUTA_N': 'TextEdit', 'PERDAS_ELE': 'TextEdit', 'CONS_INTER': 'TextEdit', 'VAZAO_REM': 'TextEdit', 'VAZAO_USO_': 'TextEdit', 'VAZAO_PROJ': 'TextEdit', 'SERIE_VAZA': 'TextEdit', 'TABELA_SER': 'TextEdit', 'OBS': 'TextEdit', 'DATA_ATUAL': 'DateTime', 'INIC_OPER': 'DateTime', 'POT_FISC_K': 'TextEdit', 'COD_UPH': 'TextEdit', 'ID_EMPREEN': 'TextEdit', 'LAT_EIXO_D': 'TextEdit', 'LONG_EIXO1': 'TextEdit', 'TIPO_AHE': 'TextEdit', 'REG_MENS': 'TextEdit', 'RN_696_15': 'TextEdit', 'FASE': 'TextEdit', 'VERSAO_ATU': 'TextEdit', });
lyr_Cidades_16.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', });
lyr_Comunidades_17.set('fieldImages', {'Nome': 'TextEdit', });
lyr_UnidadesdeConservaonaregio_1.set('fieldLabels', {'uc_id': 'no label', 'cd_cnuc': 'no label', 'wdpa_pid': 'no label', 'nome_uc': 'no label', 'cria_ano': 'no label', 'cria_ato': 'no label', 'outro_ato': 'no label', 'pl_manejo': 'no label', 'co_gestor': 'no label', 'quali_pol': 'no label', 'ppgr': 'no label', 'ha_total': 'no label', 'ha_ato': 'no label', 'esfera': 'no label', 'uf': 'no label', 'municipio': 'no label', 'org_gestor': 'no label', 'grupo': 'no label', 'categoria': 'no label', 'cat_iucn': 'no label', 'amazonia': 'no label', 'caatinga': 'no label', 'cerrado': 'no label', 'matlantica': 'no label', 'pampa': 'no label', 'pantanal': 'no label', 'marinho': 'no label', 'situacao': 'no label', 'limite': 'no label', 'rbiosfera': 'no label', 'NomeAbrev': 'no label', });
lyr_Limitesdebaciashidrogrficas_2.set('fieldLabels', {'id': 'no label', 'nmcbe': 'no label', });
lyr_Corposdgua_3.set('fieldLabels', {'nome': 'no label', 'tipomassad': 'no label', 'ID': 'no label', });
lyr_RodoviaEstadual_4.set('fieldLabels', {'OBJECTID': 'no label', 'UF_SIGLA': 'no label', 'ROD_ADM_NO': 'no label', 'ROD_CODIGO': 'header label - always visible', 'SNV_ROD_SU': 'no label', 'ROD_CON_DE': 'no label', 'ROD_FON_DE': 'no label', 'br': 'no label', });
lyr_RodoviaFederal_5.set('fieldLabels', {'id_trecho_': 'no label', 'nm_tipo_tr': 'no label', 'sg_tipo_tr': 'no label', 'desc_coinc': 'no label', 'vl_codigo': 'no label', 'ds_local_i': 'no label', 'ds_local_f': 'no label', 'vl_km_inic': 'no label', 'vl_km_fina': 'no label', 'vl_extensa': 'no label', 'ds_sup_fed': 'no label', 'ds_tipo_ad': 'no label', 'sup_est_co': 'no label', 'ds_jurisdi': 'no label', 'ds_legenda': 'no label', 'leg_multim': 'no label', 'versao_snv': 'no label', 'Rotulo': 'header label - always visible', });
lyr_Estradasecaminhos_6.set('fieldLabels', {'fid': 'no label', 'highway': 'no label', 'ref': 'no label', 'name': 'no label', });
lyr_MunicpiosprximossUCs_7.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_Processosminerrios_8.set('fieldLabels', {'fid': 'no label', 'PROCESSO': 'no label', 'NUMERO': 'no label', 'ANO': 'no label', 'AREA_HA': 'no label', 'ID': 'no label', 'FASE': 'no label', 'ULT_EVENTO': 'no label', 'NOME': 'no label', 'SUBS': 'no label', 'USO': 'no label', 'UF': 'no label', 'DSProcesso': 'no label', });
lyr_GarimpodaQuixaba_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nome': 'header label - always visible', });
lyr_Linhasdetransmisso_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ParquesElicos_11.set('fieldLabels', {'fid': 'no label', 'NOME_EOL': 'no label', 'POT_MW': 'no label', 'AREA_M2': 'no label', 'EOL_VERSAO': 'no label', 'DATA_ATUAL': 'no label', 'FASE': 'no label', 'ORIGEM': 'no label', 'SHAPE_STAr': 'no label', 'SHAPE_STLe': 'no label', });
lyr_Aerogeradores_12.set('fieldLabels', {'fid': 'no label', 'POT_MW': 'no label', 'ALT_TOTAL': 'no label', 'ALT_TORRE': 'no label', 'DIAM_ROTOR': 'no label', 'DATA_ATUAL': 'no label', 'EOL_VERSAO': 'no label', 'NOME_EOL': 'no label', 'DEN_AEG': 'no label', 'X': 'no label', 'Y': 'no label', 'DATUM_EMP': 'no label', 'OPERACAO': 'no label', 'UF': 'no label', 'FUSO_AG': 'no label', 'PROPRIETAR': 'no label', 'CEG': 'no label', 'ORIGEM': 'no label', });
lyr_CentraisGeradorasElicas_13.set('fieldLabels', {'fid': 'no label', 'Nome': 'no label', 'CODMUN': 'no label', 'MUNIC1': 'no label', 'UF1': 'no label', 'PROC_ANEEL': 'no label', 'ATO_LEGAL': 'no label', 'P_OUT_KW': 'no label', 'P_FISC_KW': 'no label', 'PROPRIETAR': 'no label', 'CaminhoFot': 'no label', 'CaminhoCon': 'no label', 'DATA_ATUAL': 'no label', 'EOL_VERSAO': 'no label', 'DRO_ID_SCG': 'no label', 'LONG_GMS': 'no label', 'LAT_GMS': 'no label', 'NOMES_EOL_': 'no label', 'DRO_DATA': 'no label', 'ID_LT': 'no label', 'ID_SE': 'no label', 'ID_EST': 'no label', 'DRO_DT_VIG': 'no label', 'CEG': 'no label', 'ID_EMPREEN': 'no label', 'LAT_DEC': 'no label', 'LONG_DEC': 'no label', 'QTD_AEG': 'no label', 'INICIO_OPE': 'no label', 'FASE': 'no label', 'VALIDACAO': 'no label', 'FUSO': 'no label', 'DATUM_EMP': 'no label', 'TIPO_EXP': 'no label', 'OBS': 'no label', });
lyr_CentraisGeradorasSolaresFotovolticas_14.set('fieldLabels', {'fid': 'no label', 'NOME': 'no label', 'PROPRIETAR': 'no label', 'CNPJ': 'no label', 'CEG': 'no label', 'MUNIC': 'no label', 'UF': 'no label', 'ATO_LEGAL': 'no label', 'PROC_ANEEL': 'no label', 'POT_KW': 'no label', 'OBS': 'no label', 'DATA_ATUAL': 'no label', 'INIC_OPER': 'no label', 'POT_FISC_K': 'no label', 'CODMUN': 'no label', 'LAT_GMS': 'no label', 'LONG_GMS': 'no label', 'ID_EMPREEN': 'no label', 'LAT_DEC': 'no label', 'LONG_DEC': 'no label', 'ESTAGIO_GE': 'no label', 'COMBUSTIVE': 'no label', 'DATUM': 'no label', 'TIPO_EXPLO': 'no label', 'FASE_USINA': 'no label', 'CLASSE_COM': 'no label', 'FONTE_COMB': 'no label', 'OPER_COM': 'no label', });
lyr_UsinaHidreltrica_15.set('fieldLabels', {'fid': 'no label', 'NOME': 'no label', 'PROPRIETAR': 'no label', 'CNPJ': 'no label', 'CEG': 'no label', 'MUNIC_CF': 'no label', 'UF_CF': 'no label', 'MUNIC_1': 'no label', 'UF_1': 'no label', 'MUNIC_2': 'no label', 'UF_2': 'no label', 'RIO': 'no label', 'COD_BAC': 'no label', 'COD_SBAC': 'no label', 'DSP_INV': 'no label', 'ATO_LEGAL': 'no label', 'PROC_ANEEL': 'no label', 'LAT_EIXO_G': 'no label', 'LONG_EIXO_': 'no label', 'LAT_CF_GMS': 'no label', 'LONG_CF_GM': 'no label', 'POT_KW': 'no label', 'N_UNID_GER': 'no label', 'POT_UNI_GE': 'no label', 'FATOR_POT': 'no label', 'POT_POR_TU': 'no label', 'ENG_MIN': 'no label', 'TIPO_TURB': 'no label', 'REND_NOM_T': 'no label', 'REND_NOM_G': 'no label', 'TX_EQ_INDS': 'no label', 'INDS_PROG': 'no label', 'PERD_HID_N': 'no label', 'NA_MAX_MAX': 'no label', 'NA_MAX_MON': 'no label', 'NA_MIN_MON': 'no label', 'NA_NOR_JUS': 'no label', 'AREA_NA_MA': 'no label', 'AREA_NA_MI': 'no label', 'AREA_DREN': 'no label', 'VOL_NA_MAX': 'no label', 'VOL_NA_MIN': 'no label', 'QD_BRUTA_N': 'no label', 'PERDAS_ELE': 'no label', 'CONS_INTER': 'no label', 'VAZAO_REM': 'no label', 'VAZAO_USO_': 'no label', 'VAZAO_PROJ': 'no label', 'SERIE_VAZA': 'no label', 'TABELA_SER': 'no label', 'OBS': 'no label', 'DATA_ATUAL': 'no label', 'INIC_OPER': 'no label', 'POT_FISC_K': 'no label', 'COD_UPH': 'no label', 'ID_EMPREEN': 'no label', 'LAT_EIXO_D': 'no label', 'LONG_EIXO1': 'no label', 'TIPO_AHE': 'no label', 'REG_MENS': 'no label', 'RN_696_15': 'no label', 'FASE': 'no label', 'VERSAO_ATU': 'no label', });
lyr_Cidades_16.set('fieldLabels', {'nome': 'header label - always visible', 'geocodigo': 'no label', });
lyr_Comunidades_17.set('fieldLabels', {'Nome': 'header label - always visible', });
lyr_Comunidades_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});