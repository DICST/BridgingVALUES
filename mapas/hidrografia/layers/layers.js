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
var format_Curvasdenvel150m_6 = new ol.format.GeoJSON();
var features_Curvasdenvel150m_6 = format_Curvasdenvel150m_6.readFeatures(json_Curvasdenvel150m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvasdenvel150m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvasdenvel150m_6.addFeatures(features_Curvasdenvel150m_6);
var lyr_Curvasdenvel150m_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvasdenvel150m_6, 
                style: style_Curvasdenvel150m_6,
                popuplayertitle: 'Curvas de nível (150 m)',
                interactive: true,
                title: '<img src="styles/legend/Curvasdenvel150m_6.png" /> Curvas de nível (150 m)'
            });
var format_Drenagem_7 = new ol.format.GeoJSON();
var features_Drenagem_7 = format_Drenagem_7.readFeatures(json_Drenagem_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drenagem_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenagem_7.addFeatures(features_Drenagem_7);
var lyr_Drenagem_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenagem_7, 
                style: style_Drenagem_7,
                popuplayertitle: 'Drenagem',
                interactive: true,
                title: '<img src="styles/legend/Drenagem_7.png" /> Drenagem'
            });
var format_Estradasecaminhos_8 = new ol.format.GeoJSON();
var features_Estradasecaminhos_8 = format_Estradasecaminhos_8.readFeatures(json_Estradasecaminhos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradasecaminhos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradasecaminhos_8.addFeatures(features_Estradasecaminhos_8);
var lyr_Estradasecaminhos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estradasecaminhos_8, 
                style: style_Estradasecaminhos_8,
                popuplayertitle: 'Estradas e caminhos',
                interactive: true,
                title: '<img src="styles/legend/Estradasecaminhos_8.png" /> Estradas e caminhos'
            });
var format_MunicpiosprximossUCs_9 = new ol.format.GeoJSON();
var features_MunicpiosprximossUCs_9 = format_MunicpiosprximossUCs_9.readFeatures(json_MunicpiosprximossUCs_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicpiosprximossUCs_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosprximossUCs_9.addFeatures(features_MunicpiosprximossUCs_9);
var lyr_MunicpiosprximossUCs_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosprximossUCs_9, 
                style: style_MunicpiosprximossUCs_9,
                popuplayertitle: 'Municípios próximos às UCs',
                interactive: true,
                title: '<img src="styles/legend/MunicpiosprximossUCs_9.png" /> Municípios próximos às UCs'
            });
var format_UsoDomniodosestadosoutorgassubterrneas_10 = new ol.format.GeoJSON();
var features_UsoDomniodosestadosoutorgassubterrneas_10 = format_UsoDomniodosestadosoutorgassubterrneas_10.readFeatures(json_UsoDomniodosestadosoutorgassubterrneas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsoDomniodosestadosoutorgassubterrneas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsoDomniodosestadosoutorgassubterrneas_10.addFeatures(features_UsoDomniodosestadosoutorgassubterrneas_10);
var lyr_UsoDomniodosestadosoutorgassubterrneas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsoDomniodosestadosoutorgassubterrneas_10, 
                style: style_UsoDomniodosestadosoutorgassubterrneas_10,
                popuplayertitle: 'Uso - Domínio dos estados (outorgas subterrâneas)',
                interactive: true,
    title: 'Uso - Domínio dos estados (outorgas subterrâneas)<br />\
    <img src="styles/legend/UsoDomniodosestadosoutorgassubterrneas_10_0.png" /> Abastecimento Público<br />\
    <img src="styles/legend/UsoDomniodosestadosoutorgassubterrneas_10_1.png" /> Consumo Humano<br />\
    <img src="styles/legend/UsoDomniodosestadosoutorgassubterrneas_10_2.png" /> Criação Animal<br />\
    <img src="styles/legend/UsoDomniodosestadosoutorgassubterrneas_10_3.png" /> Indústria<br />\
    <img src="styles/legend/UsoDomniodosestadosoutorgassubterrneas_10_4.png" /> Irrigação<br />\
    <img src="styles/legend/UsoDomniodosestadosoutorgassubterrneas_10_5.png" /> Mineração - Outros Processos Extrativos<br />\
    <img src="styles/legend/UsoDomniodosestadosoutorgassubterrneas_10_6.png" /> Outras<br />' });
var format_UsoDomniodosestadosoutorgassuperficiais_11 = new ol.format.GeoJSON();
var features_UsoDomniodosestadosoutorgassuperficiais_11 = format_UsoDomniodosestadosoutorgassuperficiais_11.readFeatures(json_UsoDomniodosestadosoutorgassuperficiais_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsoDomniodosestadosoutorgassuperficiais_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsoDomniodosestadosoutorgassuperficiais_11.addFeatures(features_UsoDomniodosestadosoutorgassuperficiais_11);
var lyr_UsoDomniodosestadosoutorgassuperficiais_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsoDomniodosestadosoutorgassuperficiais_11, 
                style: style_UsoDomniodosestadosoutorgassuperficiais_11,
                popuplayertitle: 'Uso - Domínio dos estados (outorgas superficiais)',
                interactive: true,
    title: 'Uso - Domínio dos estados (outorgas superficiais)<br />\
    <img src="styles/legend/UsoDomniodosestadosoutorgassuperficiais_11_0.png" /> Consumo Humano<br />\
    <img src="styles/legend/UsoDomniodosestadosoutorgassuperficiais_11_1.png" /> Irrigação<br />\
    <img src="styles/legend/UsoDomniodosestadosoutorgassuperficiais_11_2.png" /> Obras Hidráulicas<br />\
    <img src="styles/legend/UsoDomniodosestadosoutorgassuperficiais_11_3.png" /> Outras<br />\
    <img src="styles/legend/UsoDomniodosestadosoutorgassuperficiais_11_4.png" /> Serviços<br />' });
var format_UsoDomnioFederal_12 = new ol.format.GeoJSON();
var features_UsoDomnioFederal_12 = format_UsoDomnioFederal_12.readFeatures(json_UsoDomnioFederal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsoDomnioFederal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsoDomnioFederal_12.addFeatures(features_UsoDomnioFederal_12);
var lyr_UsoDomnioFederal_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsoDomnioFederal_12, 
                style: style_UsoDomnioFederal_12,
                popuplayertitle: 'Uso - Domínio Federal',
                interactive: true,
    title: 'Uso - Domínio Federal<br />\
    <img src="styles/legend/UsoDomnioFederal_12_0.png" /> Abastecimento Público<br />\
    <img src="styles/legend/UsoDomnioFederal_12_1.png" /> Aproveitamento Hidroelétrico<br />\
    <img src="styles/legend/UsoDomnioFederal_12_2.png" /> Aquicultura em Tanque Escavado<br />\
    <img src="styles/legend/UsoDomnioFederal_12_3.png" /> Aquicultura em Tanque Rede<br />\
    <img src="styles/legend/UsoDomnioFederal_12_4.png" /> Consumo Humano<br />\
    <img src="styles/legend/UsoDomnioFederal_12_5.png" /> Criação Animal<br />\
    <img src="styles/legend/UsoDomnioFederal_12_6.png" /> Esgotamento Sanitário<br />\
    <img src="styles/legend/UsoDomnioFederal_12_7.png" /> Irrigação<br />\
    <img src="styles/legend/UsoDomnioFederal_12_8.png" /> Mineração - Outros Processos Extrativos<br />\
    <img src="styles/legend/UsoDomnioFederal_12_9.png" /> Obras Hidráulicas<br />\
    <img src="styles/legend/UsoDomnioFederal_12_10.png" /> Outras<br />' });
var format_Cidades_13 = new ol.format.GeoJSON();
var features_Cidades_13 = format_Cidades_13.readFeatures(json_Cidades_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cidades_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cidades_13.addFeatures(features_Cidades_13);
var lyr_Cidades_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cidades_13, 
                style: style_Cidades_13,
                popuplayertitle: 'Cidades',
                interactive: true,
                title: '<img src="styles/legend/Cidades_13.png" /> Cidades'
            });
var format_Comunidades_14 = new ol.format.GeoJSON();
var features_Comunidades_14 = format_Comunidades_14.readFeatures(json_Comunidades_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunidades_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidades_14.addFeatures(features_Comunidades_14);
var lyr_Comunidades_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunidades_14, 
                style: style_Comunidades_14,
                popuplayertitle: 'Comunidades',
                interactive: true,
                title: '<img src="styles/legend/Comunidades_14.png" /> Comunidades'
            });
var group_OutorgasdeDireitodeUsodeRecursosHdricos = new ol.layer.Group({
                                layers: [lyr_UsoDomniodosestadosoutorgassubterrneas_10,lyr_UsoDomniodosestadosoutorgassuperficiais_11,lyr_UsoDomnioFederal_12,],
                                fold: 'close',
                                title: 'Outorgas de Direito de Uso de Recursos Hídricos'});

lyr_GoogleSatellite_0.setVisible(true);lyr_UnidadesdeConservaonaregio_1.setVisible(true);lyr_Limitesdebaciashidrogrficas_2.setVisible(true);lyr_Corposdgua_3.setVisible(true);lyr_RodoviaEstadual_4.setVisible(true);lyr_RodoviaFederal_5.setVisible(true);lyr_Curvasdenvel150m_6.setVisible(true);lyr_Drenagem_7.setVisible(true);lyr_Estradasecaminhos_8.setVisible(true);lyr_MunicpiosprximossUCs_9.setVisible(true);lyr_UsoDomniodosestadosoutorgassubterrneas_10.setVisible(true);lyr_UsoDomniodosestadosoutorgassuperficiais_11.setVisible(true);lyr_UsoDomnioFederal_12.setVisible(true);lyr_Cidades_13.setVisible(true);lyr_Comunidades_14.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_UnidadesdeConservaonaregio_1,lyr_Limitesdebaciashidrogrficas_2,lyr_Corposdgua_3,lyr_RodoviaEstadual_4,lyr_RodoviaFederal_5,lyr_Curvasdenvel150m_6,lyr_Drenagem_7,lyr_Estradasecaminhos_8,lyr_MunicpiosprximossUCs_9,group_OutorgasdeDireitodeUsodeRecursosHdricos,lyr_Cidades_13,lyr_Comunidades_14];
lyr_UnidadesdeConservaonaregio_1.set('fieldAliases', {'uc_id': 'uc_id', 'cd_cnuc': 'cd_cnuc', 'wdpa_pid': 'wdpa_pid', 'nome_uc': 'nome_uc', 'cria_ano': 'cria_ano', 'cria_ato': 'cria_ato', 'outro_ato': 'outro_ato', 'pl_manejo': 'pl_manejo', 'co_gestor': 'co_gestor', 'quali_pol': 'quali_pol', 'ppgr': 'ppgr', 'ha_total': 'ha_total', 'ha_ato': 'ha_ato', 'esfera': 'esfera', 'uf': 'uf', 'municipio': 'municipio', 'org_gestor': 'org_gestor', 'grupo': 'grupo', 'categoria': 'categoria', 'cat_iucn': 'cat_iucn', 'amazonia': 'amazonia', 'caatinga': 'caatinga', 'cerrado': 'cerrado', 'matlantica': 'matlantica', 'pampa': 'pampa', 'pantanal': 'pantanal', 'marinho': 'marinho', 'situacao': 'situacao', 'limite': 'limite', 'rbiosfera': 'rbiosfera', 'NomeAbrev': 'NomeAbrev', });
lyr_Limitesdebaciashidrogrficas_2.set('fieldAliases', {'id': 'id', 'nmcbe': 'nmcbe', });
lyr_Corposdgua_3.set('fieldAliases', {'nome': 'nome', 'tipomassad': 'tipomassad', 'ID': 'ID', });
lyr_RodoviaEstadual_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UF_SIGLA': 'UF_SIGLA', 'ROD_ADM_NO': 'ROD_ADM_NO', 'ROD_CODIGO': 'ROD_CODIGO', 'SNV_ROD_SU': 'SNV_ROD_SU', 'ROD_CON_DE': 'ROD_CON_DE', 'ROD_FON_DE': 'ROD_FON_DE', 'br': 'br', });
lyr_RodoviaFederal_5.set('fieldAliases', {'id_trecho_': 'id_trecho_', 'nm_tipo_tr': 'nm_tipo_tr', 'sg_tipo_tr': 'sg_tipo_tr', 'desc_coinc': 'desc_coinc', 'vl_codigo': 'vl_codigo', 'ds_local_i': 'ds_local_i', 'ds_local_f': 'ds_local_f', 'vl_km_inic': 'vl_km_inic', 'vl_km_fina': 'vl_km_fina', 'vl_extensa': 'vl_extensa', 'ds_sup_fed': 'ds_sup_fed', 'ds_tipo_ad': 'ds_tipo_ad', 'sup_est_co': 'sup_est_co', 'ds_jurisdi': 'ds_jurisdi', 'ds_legenda': 'ds_legenda', 'leg_multim': 'leg_multim', 'versao_snv': 'versao_snv', 'Rotulo': 'Rotulo', });
lyr_Curvasdenvel150m_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV_30': 'ELEV_30', });
lyr_Drenagem_7.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'ID': 'ID', });
lyr_Estradasecaminhos_8.set('fieldAliases', {'fid': 'fid', 'highway': 'highway', 'ref': 'ref', 'name': 'name', });
lyr_MunicpiosprximossUCs_9.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_UsoDomniodosestadosoutorgassubterrneas_10.set('fieldAliases', {'fid': 'fid', 'INT_CD': 'INT_CD', 'TPO_DS': 'TPO_DS', 'TIN_DS': 'TIN_DS', 'ORG_NM': 'ORG_NM', 'ORG_UF': 'ORG_UF', 'TSP_DS': 'TSP_DS', 'ING_NM_MUN': 'ING_NM_MUN', 'ING_SG_UFM': 'ING_SG_UFM', 'DT_OUTORGA': 'DT_OUTORGA', 'DT_OUTOR_1': 'DT_OUTOR_1', 'TFN_DS': 'TFN_DS', 'OUT_TP_ATO': 'OUT_TP_ATO', 'OUT_NU_ATO': 'OUT_NU_ATO', 'INT_NU_LAT': 'INT_NU_LAT', 'INT_NU_LON': 'INT_NU_LON', 'INT_NU_CNA': 'INT_NU_CNA', 'INT_NU_SIA': 'INT_NU_SIA', 'TNP_DS': 'TNP_DS', 'TAP_DS': 'TAP_DS', 'TCQ_DS': 'TCQ_DS', });
lyr_UsoDomniodosestadosoutorgassuperficiais_11.set('fieldAliases', {'fid': 'fid', 'INT_CD': 'INT_CD', 'TDM_DS': 'TDM_DS', 'TPO_DS': 'TPO_DS', 'TIN_DS': 'TIN_DS', 'TCH_DS': 'TCH_DS', 'ORG_NM': 'ORG_NM', 'TSP_DS': 'TSP_DS', 'DT_OUTORGA': 'DT_OUTORGA', 'DT_OUTOR_1': 'DT_OUTOR_1', 'ING_SG_UFM': 'ING_SG_UFM', 'TFN_DS': 'TFN_DS', 'OUT_TP_ATO': 'OUT_TP_ATO', 'OUT_NU_ATO': 'OUT_NU_ATO', 'INT_NU_LAT': 'INT_NU_LAT', 'INT_NU_LON': 'INT_NU_LON', 'INT_QT_VOL': 'INT_QT_VOL', 'ING_NM_MUN': 'ING_NM_MUN', 'INT_NM_COR': 'INT_NM_COR', 'TSF_DS': 'TSF_DS', 'ORG_UF': 'ORG_UF', 'INT_NM_C_1': 'INT_NM_C_1', 'ING_NM_REG': 'ING_NM_REG', 'ING_NM_COM': 'ING_NM_COM', 'ING_NM_C_1': 'ING_NM_C_1', });
lyr_UsoDomnioFederal_12.set('fieldAliases', {'fid': 'fid', 'INT_CD': 'INT_CD', 'CODIGO_CNA': 'CODIGO_CNA', 'DECLARACAO': 'DECLARACAO', 'NOME_DO_RE': 'NOME_DO_RE', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CORPO_HIDR': 'CORPO_HIDR', 'FINALIDADE': 'FINALIDADE', 'TIPO_INTER': 'TIPO_INTER', 'RESOLUCAO': 'RESOLUCAO', 'DATA_DE_PU': 'DATA_DE_PU', 'DATA_DE_VE': 'DATA_DE_VE', 'CATEGORIA': 'CATEGORIA', 'VOLUME_ANU': 'VOLUME_ANU', 'METODO_IRR': 'METODO_IRR', 'CULTURA_IR': 'CULTURA_IR', });
lyr_Cidades_13.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', });
lyr_Comunidades_14.set('fieldAliases', {'Nome': 'Nome', });
lyr_UnidadesdeConservaonaregio_1.set('fieldImages', {'uc_id': 'TextEdit', 'cd_cnuc': 'TextEdit', 'wdpa_pid': 'TextEdit', 'nome_uc': 'TextEdit', 'cria_ano': 'TextEdit', 'cria_ato': 'TextEdit', 'outro_ato': 'TextEdit', 'pl_manejo': 'TextEdit', 'co_gestor': 'TextEdit', 'quali_pol': 'TextEdit', 'ppgr': 'TextEdit', 'ha_total': 'TextEdit', 'ha_ato': 'TextEdit', 'esfera': 'TextEdit', 'uf': 'TextEdit', 'municipio': 'TextEdit', 'org_gestor': 'TextEdit', 'grupo': 'TextEdit', 'categoria': 'TextEdit', 'cat_iucn': 'TextEdit', 'amazonia': 'TextEdit', 'caatinga': 'TextEdit', 'cerrado': 'TextEdit', 'matlantica': 'TextEdit', 'pampa': 'TextEdit', 'pantanal': 'TextEdit', 'marinho': 'TextEdit', 'situacao': 'TextEdit', 'limite': 'TextEdit', 'rbiosfera': 'TextEdit', 'NomeAbrev': 'TextEdit', });
lyr_Limitesdebaciashidrogrficas_2.set('fieldImages', {'id': 'TextEdit', 'nmcbe': 'TextEdit', });
lyr_Corposdgua_3.set('fieldImages', {'nome': 'TextEdit', 'tipomassad': 'TextEdit', 'ID': 'TextEdit', });
lyr_RodoviaEstadual_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'UF_SIGLA': 'TextEdit', 'ROD_ADM_NO': 'TextEdit', 'ROD_CODIGO': 'TextEdit', 'SNV_ROD_SU': 'TextEdit', 'ROD_CON_DE': 'TextEdit', 'ROD_FON_DE': 'TextEdit', 'br': 'TextEdit', });
lyr_RodoviaFederal_5.set('fieldImages', {'id_trecho_': 'TextEdit', 'nm_tipo_tr': 'TextEdit', 'sg_tipo_tr': 'TextEdit', 'desc_coinc': 'TextEdit', 'vl_codigo': 'TextEdit', 'ds_local_i': 'TextEdit', 'ds_local_f': 'TextEdit', 'vl_km_inic': 'TextEdit', 'vl_km_fina': 'TextEdit', 'vl_extensa': 'TextEdit', 'ds_sup_fed': 'TextEdit', 'ds_tipo_ad': 'TextEdit', 'sup_est_co': 'TextEdit', 'ds_jurisdi': 'TextEdit', 'ds_legenda': 'TextEdit', 'leg_multim': 'TextEdit', 'versao_snv': 'TextEdit', 'Rotulo': 'TextEdit', });
lyr_Curvasdenvel150m_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV_30': 'TextEdit', });
lyr_Drenagem_7.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'ID': 'TextEdit', });
lyr_Estradasecaminhos_8.set('fieldImages', {'fid': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', });
lyr_MunicpiosprximossUCs_9.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_UsoDomniodosestadosoutorgassubterrneas_10.set('fieldImages', {'fid': 'TextEdit', 'INT_CD': 'Range', 'TPO_DS': 'TextEdit', 'TIN_DS': 'TextEdit', 'ORG_NM': 'TextEdit', 'ORG_UF': 'TextEdit', 'TSP_DS': 'TextEdit', 'ING_NM_MUN': 'TextEdit', 'ING_SG_UFM': 'TextEdit', 'DT_OUTORGA': 'TextEdit', 'DT_OUTOR_1': 'TextEdit', 'TFN_DS': 'TextEdit', 'OUT_TP_ATO': 'TextEdit', 'OUT_NU_ATO': 'TextEdit', 'INT_NU_LAT': 'TextEdit', 'INT_NU_LON': 'TextEdit', 'INT_NU_CNA': 'TextEdit', 'INT_NU_SIA': 'TextEdit', 'TNP_DS': 'TextEdit', 'TAP_DS': 'TextEdit', 'TCQ_DS': 'TextEdit', });
lyr_UsoDomniodosestadosoutorgassuperficiais_11.set('fieldImages', {'fid': 'TextEdit', 'INT_CD': 'Range', 'TDM_DS': 'TextEdit', 'TPO_DS': 'TextEdit', 'TIN_DS': 'TextEdit', 'TCH_DS': 'TextEdit', 'ORG_NM': 'TextEdit', 'TSP_DS': 'TextEdit', 'DT_OUTORGA': 'TextEdit', 'DT_OUTOR_1': 'TextEdit', 'ING_SG_UFM': 'TextEdit', 'TFN_DS': 'TextEdit', 'OUT_TP_ATO': 'TextEdit', 'OUT_NU_ATO': 'TextEdit', 'INT_NU_LAT': 'TextEdit', 'INT_NU_LON': 'TextEdit', 'INT_QT_VOL': 'TextEdit', 'ING_NM_MUN': 'TextEdit', 'INT_NM_COR': 'TextEdit', 'TSF_DS': 'TextEdit', 'ORG_UF': 'TextEdit', 'INT_NM_C_1': 'TextEdit', 'ING_NM_REG': 'TextEdit', 'ING_NM_COM': 'TextEdit', 'ING_NM_C_1': 'TextEdit', });
lyr_UsoDomnioFederal_12.set('fieldImages', {'fid': 'TextEdit', 'INT_CD': 'Range', 'CODIGO_CNA': 'TextEdit', 'DECLARACAO': 'TextEdit', 'NOME_DO_RE': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CORPO_HIDR': 'TextEdit', 'FINALIDADE': 'TextEdit', 'TIPO_INTER': 'TextEdit', 'RESOLUCAO': 'TextEdit', 'DATA_DE_PU': 'TextEdit', 'DATA_DE_VE': 'TextEdit', 'CATEGORIA': 'TextEdit', 'VOLUME_ANU': 'TextEdit', 'METODO_IRR': 'TextEdit', 'CULTURA_IR': 'TextEdit', });
lyr_Cidades_13.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', });
lyr_Comunidades_14.set('fieldImages', {'Nome': 'TextEdit', });
lyr_UnidadesdeConservaonaregio_1.set('fieldLabels', {'uc_id': 'no label', 'cd_cnuc': 'no label', 'wdpa_pid': 'no label', 'nome_uc': 'no label', 'cria_ano': 'no label', 'cria_ato': 'no label', 'outro_ato': 'no label', 'pl_manejo': 'no label', 'co_gestor': 'no label', 'quali_pol': 'no label', 'ppgr': 'no label', 'ha_total': 'no label', 'ha_ato': 'no label', 'esfera': 'no label', 'uf': 'no label', 'municipio': 'no label', 'org_gestor': 'no label', 'grupo': 'no label', 'categoria': 'no label', 'cat_iucn': 'no label', 'amazonia': 'no label', 'caatinga': 'no label', 'cerrado': 'no label', 'matlantica': 'no label', 'pampa': 'no label', 'pantanal': 'no label', 'marinho': 'no label', 'situacao': 'no label', 'limite': 'no label', 'rbiosfera': 'no label', 'NomeAbrev': 'no label', });
lyr_Limitesdebaciashidrogrficas_2.set('fieldLabels', {'id': 'no label', 'nmcbe': 'no label', });
lyr_Corposdgua_3.set('fieldLabels', {'nome': 'no label', 'tipomassad': 'no label', 'ID': 'no label', });
lyr_RodoviaEstadual_4.set('fieldLabels', {'OBJECTID': 'no label', 'UF_SIGLA': 'no label', 'ROD_ADM_NO': 'no label', 'ROD_CODIGO': 'header label - always visible', 'SNV_ROD_SU': 'no label', 'ROD_CON_DE': 'no label', 'ROD_FON_DE': 'no label', 'br': 'no label', });
lyr_RodoviaFederal_5.set('fieldLabels', {'id_trecho_': 'no label', 'nm_tipo_tr': 'no label', 'sg_tipo_tr': 'no label', 'desc_coinc': 'no label', 'vl_codigo': 'no label', 'ds_local_i': 'no label', 'ds_local_f': 'no label', 'vl_km_inic': 'no label', 'vl_km_fina': 'no label', 'vl_extensa': 'no label', 'ds_sup_fed': 'no label', 'ds_tipo_ad': 'no label', 'sup_est_co': 'no label', 'ds_jurisdi': 'no label', 'ds_legenda': 'no label', 'leg_multim': 'no label', 'versao_snv': 'no label', 'Rotulo': 'header label - always visible', });
lyr_Curvasdenvel150m_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV_30': 'no label', });
lyr_Drenagem_7.set('fieldLabels', {'fid': 'no label', 'nome': 'no label', 'ID': 'no label', });
lyr_Estradasecaminhos_8.set('fieldLabels', {'fid': 'no label', 'highway': 'no label', 'ref': 'no label', 'name': 'no label', });
lyr_MunicpiosprximossUCs_9.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_UsoDomniodosestadosoutorgassubterrneas_10.set('fieldLabels', {'fid': 'no label', 'INT_CD': 'no label', 'TPO_DS': 'no label', 'TIN_DS': 'no label', 'ORG_NM': 'no label', 'ORG_UF': 'no label', 'TSP_DS': 'no label', 'ING_NM_MUN': 'no label', 'ING_SG_UFM': 'no label', 'DT_OUTORGA': 'no label', 'DT_OUTOR_1': 'no label', 'TFN_DS': 'no label', 'OUT_TP_ATO': 'no label', 'OUT_NU_ATO': 'no label', 'INT_NU_LAT': 'no label', 'INT_NU_LON': 'no label', 'INT_NU_CNA': 'no label', 'INT_NU_SIA': 'no label', 'TNP_DS': 'no label', 'TAP_DS': 'no label', 'TCQ_DS': 'no label', });
lyr_UsoDomniodosestadosoutorgassuperficiais_11.set('fieldLabels', {'fid': 'no label', 'INT_CD': 'no label', 'TDM_DS': 'no label', 'TPO_DS': 'no label', 'TIN_DS': 'no label', 'TCH_DS': 'no label', 'ORG_NM': 'no label', 'TSP_DS': 'no label', 'DT_OUTORGA': 'no label', 'DT_OUTOR_1': 'no label', 'ING_SG_UFM': 'no label', 'TFN_DS': 'no label', 'OUT_TP_ATO': 'no label', 'OUT_NU_ATO': 'no label', 'INT_NU_LAT': 'no label', 'INT_NU_LON': 'no label', 'INT_QT_VOL': 'no label', 'ING_NM_MUN': 'no label', 'INT_NM_COR': 'no label', 'TSF_DS': 'no label', 'ORG_UF': 'no label', 'INT_NM_C_1': 'no label', 'ING_NM_REG': 'no label', 'ING_NM_COM': 'no label', 'ING_NM_C_1': 'no label', });
lyr_UsoDomnioFederal_12.set('fieldLabels', {'fid': 'no label', 'INT_CD': 'no label', 'CODIGO_CNA': 'no label', 'DECLARACAO': 'no label', 'NOME_DO_RE': 'no label', 'MUNICIPIO': 'no label', 'UF': 'no label', 'CORPO_HIDR': 'no label', 'FINALIDADE': 'no label', 'TIPO_INTER': 'no label', 'RESOLUCAO': 'no label', 'DATA_DE_PU': 'no label', 'DATA_DE_VE': 'no label', 'CATEGORIA': 'no label', 'VOLUME_ANU': 'no label', 'METODO_IRR': 'no label', 'CULTURA_IR': 'no label', });
lyr_Cidades_13.set('fieldLabels', {'nome': 'header label - always visible', 'geocodigo': 'no label', });
lyr_Comunidades_14.set('fieldLabels', {'Nome': 'header label - always visible', });
lyr_Comunidades_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});