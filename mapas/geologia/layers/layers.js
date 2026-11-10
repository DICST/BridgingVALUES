var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Geologiatiposderochas_1 = new ol.format.GeoJSON();
var features_Geologiatiposderochas_1 = format_Geologiatiposderochas_1.readFeatures(json_Geologiatiposderochas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geologiatiposderochas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geologiatiposderochas_1.addFeatures(features_Geologiatiposderochas_1);
var lyr_Geologiatiposderochas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geologiatiposderochas_1, 
                style: style_Geologiatiposderochas_1,
                popuplayertitle: 'Geologia - tipos de rochas',
                interactive: true,
    title: 'Geologia - tipos de rochas<br />\
    <img src="styles/legend/Geologiatiposderochas_1_0.png" /> Ígnea<br />\
    <img src="styles/legend/Geologiatiposderochas_1_1.png" /> Ígnea, Metamórfica<br />\
    <img src="styles/legend/Geologiatiposderochas_1_2.png" /> Metamórfica<br />\
    <img src="styles/legend/Geologiatiposderochas_1_3.png" /> Metamórfica, Sedimentar (ou Sedimentos)<br />\
    <img src="styles/legend/Geologiatiposderochas_1_4.png" /> Sedimentar (ou Sedimentos)<br />\
    <img src="styles/legend/Geologiatiposderochas_1_5.png" /> Sedimentar (ou Sedimentos), Metamórfica<br />' });
var format_Declividadeeclassesderelevo_2 = new ol.format.GeoJSON();
var features_Declividadeeclassesderelevo_2 = format_Declividadeeclassesderelevo_2.readFeatures(json_Declividadeeclassesderelevo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Declividadeeclassesderelevo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Declividadeeclassesderelevo_2.addFeatures(features_Declividadeeclassesderelevo_2);
var lyr_Declividadeeclassesderelevo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Declividadeeclassesderelevo_2, 
                style: style_Declividadeeclassesderelevo_2,
                popuplayertitle: 'Declividade e classes de relevo',
                interactive: true,
    title: 'Declividade e classes de relevo<br />\
    <img src="styles/legend/Declividadeeclassesderelevo_2_0.png" /> 0 a 3% - Plano<br />\
    <img src="styles/legend/Declividadeeclassesderelevo_2_1.png" /> 3 a 8% - Suave ondulado<br />\
    <img src="styles/legend/Declividadeeclassesderelevo_2_2.png" /> 8 a 20% - Ondulado<br />\
    <img src="styles/legend/Declividadeeclassesderelevo_2_3.png" /> 20 a 45% - Forte ondulado<br />\
    <img src="styles/legend/Declividadeeclassesderelevo_2_4.png" /> 45 a 75% - Montanhoso<br />\
    <img src="styles/legend/Declividadeeclassesderelevo_2_5.png" /> > 75% - Escarpado<br />' });
var format_UnidadesdeConservaonaregio_3 = new ol.format.GeoJSON();
var features_UnidadesdeConservaonaregio_3 = format_UnidadesdeConservaonaregio_3.readFeatures(json_UnidadesdeConservaonaregio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesdeConservaonaregio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservaonaregio_3.addFeatures(features_UnidadesdeConservaonaregio_3);
var lyr_UnidadesdeConservaonaregio_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservaonaregio_3, 
                style: style_UnidadesdeConservaonaregio_3,
                popuplayertitle: 'Unidades de Conservação na região',
                interactive: true,
    title: 'Unidades de Conservação na região<br />\
    <img src="styles/legend/UnidadesdeConservaonaregio_3_0.png" /> APA do Boqueirão da Onça<br />\
    <img src="styles/legend/UnidadesdeConservaonaregio_3_1.png" /> Parque Nacional do Boqueirão da Onça<br />' });
var format_Limitesdebaciashidrogrficas_4 = new ol.format.GeoJSON();
var features_Limitesdebaciashidrogrficas_4 = format_Limitesdebaciashidrogrficas_4.readFeatures(json_Limitesdebaciashidrogrficas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdebaciashidrogrficas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdebaciashidrogrficas_4.addFeatures(features_Limitesdebaciashidrogrficas_4);
var lyr_Limitesdebaciashidrogrficas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdebaciashidrogrficas_4, 
                style: style_Limitesdebaciashidrogrficas_4,
                popuplayertitle: 'Limites de bacias hidrográficas',
                interactive: true,
                title: '<img src="styles/legend/Limitesdebaciashidrogrficas_4.png" /> Limites de bacias hidrográficas'
            });
var format_Corposdgua_5 = new ol.format.GeoJSON();
var features_Corposdgua_5 = format_Corposdgua_5.readFeatures(json_Corposdgua_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corposdgua_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corposdgua_5.addFeatures(features_Corposdgua_5);
var lyr_Corposdgua_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corposdgua_5, 
                style: style_Corposdgua_5,
                popuplayertitle: 'Corpos d\'água',
                interactive: true,
                title: '<img src="styles/legend/Corposdgua_5.png" /> Corpos d\'água'
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
var format_Processosminerrios_11 = new ol.format.GeoJSON();
var features_Processosminerrios_11 = format_Processosminerrios_11.readFeatures(json_Processosminerrios_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Processosminerrios_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Processosminerrios_11.addFeatures(features_Processosminerrios_11);
var lyr_Processosminerrios_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Processosminerrios_11, 
                style: style_Processosminerrios_11,
                popuplayertitle: 'Processos minerários',
                interactive: true,
    title: 'Processos minerários<br />\
    <img src="styles/legend/Processosminerrios_11_0.png" /> Concessão de Lavra<br />\
    <img src="styles/legend/Processosminerrios_11_1.png" /> Lavra Garimpeira<br />\
    <img src="styles/legend/Processosminerrios_11_2.png" /> Outras fases do processo minerário<br />' });
var format_GarimpodaQuixaba_12 = new ol.format.GeoJSON();
var features_GarimpodaQuixaba_12 = format_GarimpodaQuixaba_12.readFeatures(json_GarimpodaQuixaba_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GarimpodaQuixaba_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarimpodaQuixaba_12.addFeatures(features_GarimpodaQuixaba_12);
var lyr_GarimpodaQuixaba_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GarimpodaQuixaba_12, 
                style: style_GarimpodaQuixaba_12,
                popuplayertitle: 'Garimpo da Quixaba',
                interactive: true,
                title: '<img src="styles/legend/GarimpodaQuixaba_12.png" /> Garimpo da Quixaba'
            });
var format_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13 = new ol.format.GeoJSON();
var features_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13 = format_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13.readFeatures(json_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13.addFeatures(features_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13);
var lyr_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13, 
                style: style_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13,
                popuplayertitle: 'Vestígio Arqueológico - Projeto TEIAS - Coordenadora Mariluce (Ciência cidadã)',
                interactive: true,
    title: 'Vestígio Arqueológico - Projeto TEIAS - Coordenadora Mariluce (Ciência cidadã)<br />\
    <img src="styles/legend/VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13_0.png" /> Lítico<br />\
    <img src="styles/legend/VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13_1.png" /> Líto-cerâmico<br />\
    <img src="styles/legend/VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13_2.png" /> Mineração<br />\
    <img src="styles/legend/VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13_3.png" /> Pintura rupestre<br />\
    <img src="styles/legend/VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13_4.png" /> Pintura rupestre/cerâmico<br />\
    <img src="styles/legend/VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13_5.png" /> Ruína de casa<br />\
    <img src="styles/legend/VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13_6.png" /> Sem classificação<br />' });
var format_PerodohistricoculturalIPHANoficial_14 = new ol.format.GeoJSON();
var features_PerodohistricoculturalIPHANoficial_14 = format_PerodohistricoculturalIPHANoficial_14.readFeatures(json_PerodohistricoculturalIPHANoficial_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerodohistricoculturalIPHANoficial_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerodohistricoculturalIPHANoficial_14.addFeatures(features_PerodohistricoculturalIPHANoficial_14);
var lyr_PerodohistricoculturalIPHANoficial_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerodohistricoculturalIPHANoficial_14, 
                style: style_PerodohistricoculturalIPHANoficial_14,
                popuplayertitle: 'Período histórico-cultural - IPHAN (oficial)',
                interactive: true,
    title: 'Período histórico-cultural - IPHAN (oficial)<br />\
    <img src="styles/legend/PerodohistricoculturalIPHANoficial_14_0.png" /> Histórico<br />\
    <img src="styles/legend/PerodohistricoculturalIPHANoficial_14_1.png" /> Pré-colonial<br />\
    <img src="styles/legend/PerodohistricoculturalIPHANoficial_14_2.png" /> Pré-colonial e Histórico<br />\
    <img src="styles/legend/PerodohistricoculturalIPHANoficial_14_3.png" /> Pré-contato<br />\
    <img src="styles/legend/PerodohistricoculturalIPHANoficial_14_4.png" /> Sem classificação<br />' });
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
var group_Stiosarqueolgicos = new ol.layer.Group({
                                layers: [lyr_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13,lyr_PerodohistricoculturalIPHANoficial_14,],
                                fold: 'open',
                                title: 'Sítios arqueológicos'});
var group_Minerao = new ol.layer.Group({
                                layers: [lyr_Processosminerrios_11,lyr_GarimpodaQuixaba_12,],
                                fold: 'open',
                                title: 'Mineração'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Geologiatiposderochas_1.setVisible(false);lyr_Declividadeeclassesderelevo_2.setVisible(false);lyr_UnidadesdeConservaonaregio_3.setVisible(true);lyr_Limitesdebaciashidrogrficas_4.setVisible(true);lyr_Corposdgua_5.setVisible(true);lyr_Curvasdenvel150m_6.setVisible(true);lyr_RodoviaEstadual_7.setVisible(true);lyr_RodoviaFederal_8.setVisible(true);lyr_Estradasecaminhos_9.setVisible(true);lyr_MunicpiosprximossUCs_10.setVisible(true);lyr_Processosminerrios_11.setVisible(true);lyr_GarimpodaQuixaba_12.setVisible(true);lyr_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13.setVisible(true);lyr_PerodohistricoculturalIPHANoficial_14.setVisible(true);lyr_Cidades_15.setVisible(true);lyr_Comunidades_16.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Geologiatiposderochas_1,lyr_Declividadeeclassesderelevo_2,lyr_UnidadesdeConservaonaregio_3,lyr_Limitesdebaciashidrogrficas_4,lyr_Corposdgua_5,lyr_Curvasdenvel150m_6,lyr_RodoviaEstadual_7,lyr_RodoviaFederal_8,lyr_Estradasecaminhos_9,lyr_MunicpiosprximossUCs_10,group_Minerao,group_Stiosarqueolgicos,lyr_Cidades_15,lyr_Comunidades_16];
lyr_Geologiatiposderochas_1.set('fieldAliases', {'fid': 'fid', 'GLO_CD': 'GLO_CD', 'GLO_DS_CLA': 'GLO_DS_CLA', });
lyr_Declividadeeclassesderelevo_2.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'value': 'value', 'Relevo': 'Relevo', 'Declividad': 'Declividad', 'Legenda': 'Legenda', });
lyr_UnidadesdeConservaonaregio_3.set('fieldAliases', {'uc_id': 'uc_id', 'cd_cnuc': 'cd_cnuc', 'wdpa_pid': 'wdpa_pid', 'nome_uc': 'nome_uc', 'cria_ano': 'cria_ano', 'cria_ato': 'cria_ato', 'outro_ato': 'outro_ato', 'pl_manejo': 'pl_manejo', 'co_gestor': 'co_gestor', 'quali_pol': 'quali_pol', 'ppgr': 'ppgr', 'ha_total': 'ha_total', 'ha_ato': 'ha_ato', 'esfera': 'esfera', 'uf': 'uf', 'municipio': 'municipio', 'org_gestor': 'org_gestor', 'grupo': 'grupo', 'categoria': 'categoria', 'cat_iucn': 'cat_iucn', 'amazonia': 'amazonia', 'caatinga': 'caatinga', 'cerrado': 'cerrado', 'matlantica': 'matlantica', 'pampa': 'pampa', 'pantanal': 'pantanal', 'marinho': 'marinho', 'situacao': 'situacao', 'limite': 'limite', 'rbiosfera': 'rbiosfera', 'NomeAbrev': 'NomeAbrev', });
lyr_Limitesdebaciashidrogrficas_4.set('fieldAliases', {'id': 'id', 'nmcbe': 'nmcbe', });
lyr_Corposdgua_5.set('fieldAliases', {'nome': 'nome', 'tipomassad': 'tipomassad', 'ID': 'ID', });
lyr_Curvasdenvel150m_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV_30': 'ELEV_30', });
lyr_RodoviaEstadual_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UF_SIGLA': 'UF_SIGLA', 'ROD_ADM_NO': 'ROD_ADM_NO', 'ROD_CODIGO': 'ROD_CODIGO', 'SNV_ROD_SU': 'SNV_ROD_SU', 'ROD_CON_DE': 'ROD_CON_DE', 'ROD_FON_DE': 'ROD_FON_DE', 'br': 'br', });
lyr_RodoviaFederal_8.set('fieldAliases', {'id_trecho_': 'id_trecho_', 'nm_tipo_tr': 'nm_tipo_tr', 'sg_tipo_tr': 'sg_tipo_tr', 'desc_coinc': 'desc_coinc', 'vl_codigo': 'vl_codigo', 'ds_local_i': 'ds_local_i', 'ds_local_f': 'ds_local_f', 'vl_km_inic': 'vl_km_inic', 'vl_km_fina': 'vl_km_fina', 'vl_extensa': 'vl_extensa', 'ds_sup_fed': 'ds_sup_fed', 'ds_tipo_ad': 'ds_tipo_ad', 'sup_est_co': 'sup_est_co', 'ds_jurisdi': 'ds_jurisdi', 'ds_legenda': 'ds_legenda', 'leg_multim': 'leg_multim', 'versao_snv': 'versao_snv', 'Rotulo': 'Rotulo', });
lyr_Estradasecaminhos_9.set('fieldAliases', {'fid': 'fid', 'highway': 'highway', 'ref': 'ref', 'name': 'name', });
lyr_MunicpiosprximossUCs_10.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_Processosminerrios_11.set('fieldAliases', {'fid': 'fid', 'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GarimpodaQuixaba_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Nome', });
lyr_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13.set('fieldAliases', {'fid': 'fid', 'Nome': 'Nome', 'Tipo': 'Tipo', 'Vest_arque': 'Vest_arque', 'Des_projet': 'Des_projet', });
lyr_PerodohistricoculturalIPHANoficial_14.set('fieldAliases', {'fid': 'fid', 'id_bem': 'id_bem', 'identifica': 'identifica', 'co_iphan': 'co_iphan', 'no_logrado': 'no_logrado', 'nu_logrado': 'nu_logrado', 'id_naturez': 'id_naturez', 'ds_naturez': 'ds_naturez', 'codigo_iph': 'codigo_iph', 'id_classif': 'id_classif', 'ds_classif': 'ds_classif', 'id_tipo_be': 'id_tipo_be', 'ds_tipo_be': 'ds_tipo_be', 'sg_tipo_be': 'sg_tipo_be', 'sintese_be': 'sintese_be', 'dt_cadastr': 'dt_cadastr', });
lyr_Cidades_15.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', });
lyr_Comunidades_16.set('fieldAliases', {'Nome': 'Nome', });
lyr_Geologiatiposderochas_1.set('fieldImages', {'fid': 'TextEdit', 'GLO_CD': 'Range', 'GLO_DS_CLA': 'TextEdit', });
lyr_Declividadeeclassesderelevo_2.set('fieldImages', {'fid': 'TextEdit', 'cat': 'Range', 'value': 'Range', 'Relevo': 'TextEdit', 'Declividad': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_UnidadesdeConservaonaregio_3.set('fieldImages', {'uc_id': 'TextEdit', 'cd_cnuc': 'TextEdit', 'wdpa_pid': 'TextEdit', 'nome_uc': 'TextEdit', 'cria_ano': 'TextEdit', 'cria_ato': 'TextEdit', 'outro_ato': 'TextEdit', 'pl_manejo': 'TextEdit', 'co_gestor': 'TextEdit', 'quali_pol': 'TextEdit', 'ppgr': 'TextEdit', 'ha_total': 'TextEdit', 'ha_ato': 'TextEdit', 'esfera': 'TextEdit', 'uf': 'TextEdit', 'municipio': 'TextEdit', 'org_gestor': 'TextEdit', 'grupo': 'TextEdit', 'categoria': 'TextEdit', 'cat_iucn': 'TextEdit', 'amazonia': 'TextEdit', 'caatinga': 'TextEdit', 'cerrado': 'TextEdit', 'matlantica': 'TextEdit', 'pampa': 'TextEdit', 'pantanal': 'TextEdit', 'marinho': 'TextEdit', 'situacao': 'TextEdit', 'limite': 'TextEdit', 'rbiosfera': 'TextEdit', 'NomeAbrev': 'TextEdit', });
lyr_Limitesdebaciashidrogrficas_4.set('fieldImages', {'id': 'TextEdit', 'nmcbe': 'TextEdit', });
lyr_Corposdgua_5.set('fieldImages', {'nome': 'TextEdit', 'tipomassad': 'TextEdit', 'ID': 'TextEdit', });
lyr_Curvasdenvel150m_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV_30': 'TextEdit', });
lyr_RodoviaEstadual_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'UF_SIGLA': 'TextEdit', 'ROD_ADM_NO': 'TextEdit', 'ROD_CODIGO': 'TextEdit', 'SNV_ROD_SU': 'TextEdit', 'ROD_CON_DE': 'TextEdit', 'ROD_FON_DE': 'TextEdit', 'br': 'TextEdit', });
lyr_RodoviaFederal_8.set('fieldImages', {'id_trecho_': 'TextEdit', 'nm_tipo_tr': 'TextEdit', 'sg_tipo_tr': 'TextEdit', 'desc_coinc': 'TextEdit', 'vl_codigo': 'TextEdit', 'ds_local_i': 'TextEdit', 'ds_local_f': 'TextEdit', 'vl_km_inic': 'TextEdit', 'vl_km_fina': 'TextEdit', 'vl_extensa': 'TextEdit', 'ds_sup_fed': 'TextEdit', 'ds_tipo_ad': 'TextEdit', 'sup_est_co': 'TextEdit', 'ds_jurisdi': 'TextEdit', 'ds_legenda': 'TextEdit', 'leg_multim': 'TextEdit', 'versao_snv': 'TextEdit', 'Rotulo': 'TextEdit', });
lyr_Estradasecaminhos_9.set('fieldImages', {'fid': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', });
lyr_MunicpiosprximossUCs_10.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Processosminerrios_11.set('fieldImages', {'fid': 'TextEdit', 'PROCESSO': 'TextEdit', 'NUMERO': 'Range', 'ANO': 'Range', 'AREA_HA': 'TextEdit', 'ID': 'TextEdit', 'FASE': 'TextEdit', 'ULT_EVENTO': 'TextEdit', 'NOME': 'TextEdit', 'SUBS': 'TextEdit', 'USO': 'TextEdit', 'UF': 'TextEdit', 'DSProcesso': 'TextEdit', });
lyr_GarimpodaQuixaba_12.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13.set('fieldImages', {'fid': 'TextEdit', 'Nome': 'TextEdit', 'Tipo': 'TextEdit', 'Vest_arque': 'TextEdit', 'Des_projet': 'TextEdit', });
lyr_PerodohistricoculturalIPHANoficial_14.set('fieldImages', {'fid': 'TextEdit', 'id_bem': 'Range', 'identifica': 'TextEdit', 'co_iphan': 'TextEdit', 'no_logrado': 'TextEdit', 'nu_logrado': 'TextEdit', 'id_naturez': 'Range', 'ds_naturez': 'TextEdit', 'codigo_iph': 'TextEdit', 'id_classif': 'Range', 'ds_classif': 'TextEdit', 'id_tipo_be': 'Range', 'ds_tipo_be': 'TextEdit', 'sg_tipo_be': 'TextEdit', 'sintese_be': 'TextEdit', 'dt_cadastr': 'DateTime', });
lyr_Cidades_15.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', });
lyr_Comunidades_16.set('fieldImages', {'Nome': 'TextEdit', });
lyr_Geologiatiposderochas_1.set('fieldLabels', {'fid': 'no label', 'GLO_CD': 'no label', 'GLO_DS_CLA': 'no label', });
lyr_Declividadeeclassesderelevo_2.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'value': 'no label', 'Relevo': 'no label', 'Declividad': 'no label', 'Legenda': 'no label', });
lyr_UnidadesdeConservaonaregio_3.set('fieldLabels', {'uc_id': 'no label', 'cd_cnuc': 'no label', 'wdpa_pid': 'no label', 'nome_uc': 'no label', 'cria_ano': 'no label', 'cria_ato': 'no label', 'outro_ato': 'no label', 'pl_manejo': 'no label', 'co_gestor': 'no label', 'quali_pol': 'no label', 'ppgr': 'no label', 'ha_total': 'no label', 'ha_ato': 'no label', 'esfera': 'no label', 'uf': 'no label', 'municipio': 'no label', 'org_gestor': 'no label', 'grupo': 'no label', 'categoria': 'no label', 'cat_iucn': 'no label', 'amazonia': 'no label', 'caatinga': 'no label', 'cerrado': 'no label', 'matlantica': 'no label', 'pampa': 'no label', 'pantanal': 'no label', 'marinho': 'no label', 'situacao': 'no label', 'limite': 'no label', 'rbiosfera': 'no label', 'NomeAbrev': 'no label', });
lyr_Limitesdebaciashidrogrficas_4.set('fieldLabels', {'id': 'no label', 'nmcbe': 'no label', });
lyr_Corposdgua_5.set('fieldLabels', {'nome': 'no label', 'tipomassad': 'no label', 'ID': 'no label', });
lyr_Curvasdenvel150m_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV_30': 'no label', });
lyr_RodoviaEstadual_7.set('fieldLabels', {'OBJECTID': 'no label', 'UF_SIGLA': 'no label', 'ROD_ADM_NO': 'no label', 'ROD_CODIGO': 'header label - always visible', 'SNV_ROD_SU': 'no label', 'ROD_CON_DE': 'no label', 'ROD_FON_DE': 'no label', 'br': 'no label', });
lyr_RodoviaFederal_8.set('fieldLabels', {'id_trecho_': 'no label', 'nm_tipo_tr': 'no label', 'sg_tipo_tr': 'no label', 'desc_coinc': 'no label', 'vl_codigo': 'no label', 'ds_local_i': 'no label', 'ds_local_f': 'no label', 'vl_km_inic': 'no label', 'vl_km_fina': 'no label', 'vl_extensa': 'no label', 'ds_sup_fed': 'no label', 'ds_tipo_ad': 'no label', 'sup_est_co': 'no label', 'ds_jurisdi': 'no label', 'ds_legenda': 'no label', 'leg_multim': 'no label', 'versao_snv': 'no label', 'Rotulo': 'header label - always visible', });
lyr_Estradasecaminhos_9.set('fieldLabels', {'fid': 'no label', 'highway': 'no label', 'ref': 'no label', 'name': 'no label', });
lyr_MunicpiosprximossUCs_10.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_Processosminerrios_11.set('fieldLabels', {'fid': 'no label', 'PROCESSO': 'no label', 'NUMERO': 'no label', 'ANO': 'no label', 'AREA_HA': 'no label', 'ID': 'no label', 'FASE': 'no label', 'ULT_EVENTO': 'no label', 'NOME': 'no label', 'SUBS': 'no label', 'USO': 'no label', 'UF': 'no label', 'DSProcesso': 'no label', });
lyr_GarimpodaQuixaba_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nome': 'header label - always visible', });
lyr_VestgioArqueolgicoProjetoTEIASCoordenadoraMariluceCinciacidad_13.set('fieldLabels', {'fid': 'no label', 'Nome': 'no label', 'Tipo': 'no label', 'Vest_arque': 'no label', 'Des_projet': 'no label', });
lyr_PerodohistricoculturalIPHANoficial_14.set('fieldLabels', {'fid': 'no label', 'id_bem': 'no label', 'identifica': 'no label', 'co_iphan': 'no label', 'no_logrado': 'no label', 'nu_logrado': 'no label', 'id_naturez': 'no label', 'ds_naturez': 'no label', 'codigo_iph': 'no label', 'id_classif': 'no label', 'ds_classif': 'no label', 'id_tipo_be': 'no label', 'ds_tipo_be': 'no label', 'sg_tipo_be': 'no label', 'sintese_be': 'no label', 'dt_cadastr': 'no label', });
lyr_Cidades_15.set('fieldLabels', {'nome': 'header label - always visible', 'geocodigo': 'no label', });
lyr_Comunidades_16.set('fieldLabels', {'Nome': 'header label - always visible', });
lyr_Comunidades_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});