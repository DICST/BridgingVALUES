var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_reasprioritriasparaconservao_1 = new ol.format.GeoJSON();
var features_reasprioritriasparaconservao_1 = format_reasprioritriasparaconservao_1.readFeatures(json_reasprioritriasparaconservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasprioritriasparaconservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasprioritriasparaconservao_1.addFeatures(features_reasprioritriasparaconservao_1);
var lyr_reasprioritriasparaconservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasprioritriasparaconservao_1, 
                style: style_reasprioritriasparaconservao_1,
                popuplayertitle: 'Áreas prioritárias para conservação',
                interactive: true,
    title: 'Áreas prioritárias para conservação<br />\
    <img src="styles/legend/reasprioritriasparaconservao_1_0.png" /> Proposta inicial para o PARNA Boqueirão da Onça<br />\
    <img src="styles/legend/reasprioritriasparaconservao_1_1.png" /> Recuperação de Áreas Degradadas<br />' });
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
    <img src="styles/legend/UnidadesdeConservaonaregio_2_1.png" /> APA Lago de Sobradinho<br />\
    <img src="styles/legend/UnidadesdeConservaonaregio_2_2.png" /> Parque Nacional do Boqueirão da Onça<br />' });
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
var format_Assentamentos_5 = new ol.format.GeoJSON();
var features_Assentamentos_5 = format_Assentamentos_5.readFeatures(json_Assentamentos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Assentamentos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Assentamentos_5.addFeatures(features_Assentamentos_5);
var lyr_Assentamentos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Assentamentos_5, 
                style: style_Assentamentos_5,
                popuplayertitle: 'Assentamentos',
                interactive: true,
                title: '<img src="styles/legend/Assentamentos_5.png" /> Assentamentos'
            });
var format_RodoviaEstadual_6 = new ol.format.GeoJSON();
var features_RodoviaEstadual_6 = format_RodoviaEstadual_6.readFeatures(json_RodoviaEstadual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviaEstadual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviaEstadual_6.addFeatures(features_RodoviaEstadual_6);
var lyr_RodoviaEstadual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviaEstadual_6, 
                style: style_RodoviaEstadual_6,
                popuplayertitle: 'Rodovia Estadual',
                interactive: true,
                title: '<img src="styles/legend/RodoviaEstadual_6.png" /> Rodovia Estadual'
            });
var format_RodoviaFederal_7 = new ol.format.GeoJSON();
var features_RodoviaFederal_7 = format_RodoviaFederal_7.readFeatures(json_RodoviaFederal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodoviaFederal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodoviaFederal_7.addFeatures(features_RodoviaFederal_7);
var lyr_RodoviaFederal_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodoviaFederal_7, 
                style: style_RodoviaFederal_7,
                popuplayertitle: 'Rodovia Federal',
                interactive: true,
                title: '<img src="styles/legend/RodoviaFederal_7.png" /> Rodovia Federal'
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
var format_Localidades_10 = new ol.format.GeoJSON();
var features_Localidades_10 = format_Localidades_10.readFeatures(json_Localidades_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_10.addFeatures(features_Localidades_10);
var lyr_Localidades_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidades_10, 
                style: style_Localidades_10,
                popuplayertitle: 'Localidades',
                interactive: true,
    title: 'Localidades<br />\
    <img src="styles/legend/Localidades_10_0.png" /> Localidade Indígena<br />\
    <img src="styles/legend/Localidades_10_1.png" /> Localidade Quilombola<br />' });
var format_AssociaesFundoeFechodePastolocalizaoaproximada_11 = new ol.format.GeoJSON();
var features_AssociaesFundoeFechodePastolocalizaoaproximada_11 = format_AssociaesFundoeFechodePastolocalizaoaproximada_11.readFeatures(json_AssociaesFundoeFechodePastolocalizaoaproximada_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssociaesFundoeFechodePastolocalizaoaproximada_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssociaesFundoeFechodePastolocalizaoaproximada_11.addFeatures(features_AssociaesFundoeFechodePastolocalizaoaproximada_11);
var lyr_AssociaesFundoeFechodePastolocalizaoaproximada_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AssociaesFundoeFechodePastolocalizaoaproximada_11, 
                style: style_AssociaesFundoeFechodePastolocalizaoaproximada_11,
                popuplayertitle: 'Associações - Fundo e Fecho de Pasto (localização aproximada)',
                interactive: true,
                title: '<img src="styles/legend/AssociaesFundoeFechodePastolocalizaoaproximada_11.png" /> Associações - Fundo e Fecho de Pasto (localização aproximada)'
            });
var format_Cidades_12 = new ol.format.GeoJSON();
var features_Cidades_12 = format_Cidades_12.readFeatures(json_Cidades_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cidades_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cidades_12.addFeatures(features_Cidades_12);
var lyr_Cidades_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cidades_12, 
                style: style_Cidades_12,
                popuplayertitle: 'Cidades',
                interactive: true,
                title: '<img src="styles/legend/Cidades_12.png" /> Cidades'
            });
var format_Comunidades_13 = new ol.format.GeoJSON();
var features_Comunidades_13 = format_Comunidades_13.readFeatures(json_Comunidades_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunidades_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidades_13.addFeatures(features_Comunidades_13);
var lyr_Comunidades_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunidades_13, 
                style: style_Comunidades_13,
                popuplayertitle: 'Comunidades',
                interactive: true,
                title: '<img src="styles/legend/Comunidades_13.png" /> Comunidades'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_reasprioritriasparaconservao_1.setVisible(true);lyr_UnidadesdeConservaonaregio_2.setVisible(true);lyr_Limitesdebaciashidrogrficas_3.setVisible(true);lyr_Corposdgua_4.setVisible(true);lyr_Assentamentos_5.setVisible(true);lyr_RodoviaEstadual_6.setVisible(true);lyr_RodoviaFederal_7.setVisible(true);lyr_Estradasecaminhos_8.setVisible(true);lyr_MunicpiosprximossUCs_9.setVisible(true);lyr_Localidades_10.setVisible(true);lyr_AssociaesFundoeFechodePastolocalizaoaproximada_11.setVisible(true);lyr_Cidades_12.setVisible(true);lyr_Comunidades_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_reasprioritriasparaconservao_1,lyr_UnidadesdeConservaonaregio_2,lyr_Limitesdebaciashidrogrficas_3,lyr_Corposdgua_4,lyr_Assentamentos_5,lyr_RodoviaEstadual_6,lyr_RodoviaFederal_7,lyr_Estradasecaminhos_8,lyr_MunicpiosprximossUCs_9,lyr_Localidades_10,lyr_AssociaesFundoeFechodePastolocalizaoaproximada_11,lyr_Cidades_12,lyr_Comunidades_13];
lyr_reasprioritriasparaconservao_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'IMPORT_BIO': 'IMPORT_BIO', 'NOME_AREA': 'NOME_AREA', 'ACAO_PRINC': 'ACAO_PRINC', 'PRIOR_ACAO': 'PRIOR_ACAO', 'NM_ACAO_PR': 'NM_ACAO_PR', 'Ac2': 'Ac2', 'Ac3': 'Ac3', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA_HA': 'AREA_HA', 'COD_AREA': 'COD_AREA', 'Legenda': 'Legenda', });
lyr_UnidadesdeConservaonaregio_2.set('fieldAliases', {'uc_id': 'uc_id', 'cd_cnuc': 'cd_cnuc', 'wdpa_pid': 'wdpa_pid', 'nome_uc': 'nome_uc', 'cria_ano': 'cria_ano', 'cria_ato': 'cria_ato', 'outro_ato': 'outro_ato', 'pl_manejo': 'pl_manejo', 'co_gestor': 'co_gestor', 'quali_pol': 'quali_pol', 'ppgr': 'ppgr', 'ha_total': 'ha_total', 'ha_ato': 'ha_ato', 'esfera': 'esfera', 'uf': 'uf', 'municipio': 'municipio', 'org_gestor': 'org_gestor', 'grupo': 'grupo', 'categoria': 'categoria', 'cat_iucn': 'cat_iucn', 'amazonia': 'amazonia', 'caatinga': 'caatinga', 'cerrado': 'cerrado', 'matlantica': 'matlantica', 'pampa': 'pampa', 'pantanal': 'pantanal', 'marinho': 'marinho', 'situacao': 'situacao', 'limite': 'limite', 'rbiosfera': 'rbiosfera', 'NomeAbrev': 'NomeAbrev', });
lyr_Limitesdebaciashidrogrficas_3.set('fieldAliases', {'id': 'id', 'nmcbe': 'nmcbe', });
lyr_Corposdgua_4.set('fieldAliases', {'nome': 'nome', 'tipomassad': 'tipomassad', 'ID': 'ID', });
lyr_Assentamentos_5.set('fieldAliases', {'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', });
lyr_RodoviaEstadual_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UF_SIGLA': 'UF_SIGLA', 'ROD_ADM_NO': 'ROD_ADM_NO', 'ROD_CODIGO': 'ROD_CODIGO', 'SNV_ROD_SU': 'SNV_ROD_SU', 'ROD_CON_DE': 'ROD_CON_DE', 'ROD_FON_DE': 'ROD_FON_DE', 'br': 'br', });
lyr_RodoviaFederal_7.set('fieldAliases', {'id_trecho_': 'id_trecho_', 'nm_tipo_tr': 'nm_tipo_tr', 'sg_tipo_tr': 'sg_tipo_tr', 'desc_coinc': 'desc_coinc', 'vl_codigo': 'vl_codigo', 'ds_local_i': 'ds_local_i', 'ds_local_f': 'ds_local_f', 'vl_km_inic': 'vl_km_inic', 'vl_km_fina': 'vl_km_fina', 'vl_extensa': 'vl_extensa', 'ds_sup_fed': 'ds_sup_fed', 'ds_tipo_ad': 'ds_tipo_ad', 'sup_est_co': 'sup_est_co', 'ds_jurisdi': 'ds_jurisdi', 'ds_legenda': 'ds_legenda', 'leg_multim': 'leg_multim', 'versao_snv': 'versao_snv', 'Rotulo': 'Rotulo', });
lyr_Estradasecaminhos_8.set('fieldAliases', {'fid': 'fid', 'highway': 'highway', 'ref': 'ref', 'name': 'name', });
lyr_MunicpiosprximossUCs_9.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_Localidades_10.set('fieldAliases', {'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CT_LOCALID': 'CT_LOCALID', 'SCT_LOCALI': 'SCT_LOCALI', 'CD_LOCALID': 'CD_LOCALID', 'NM_LOCALID': 'NM_LOCALID', 'LAT_LOCALI': 'LAT_LOCALI', 'LONG_LOCAL': 'LONG_LOCAL', });
lyr_AssociaesFundoeFechodePastolocalizaoaproximada_11.set('fieldAliases', {'id': 'id', 'Mun_origin': 'Mun_origin', 'Mun_atual': 'Mun_atual', });
lyr_Cidades_12.set('fieldAliases', {'nome': 'nome', 'geocodigo': 'geocodigo', });
lyr_Comunidades_13.set('fieldAliases', {'Nome': 'Nome', });
lyr_reasprioritriasparaconservao_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'IMPORT_BIO': 'TextEdit', 'NOME_AREA': 'TextEdit', 'ACAO_PRINC': 'TextEdit', 'PRIOR_ACAO': 'TextEdit', 'NM_ACAO_PR': 'TextEdit', 'Ac2': 'TextEdit', 'Ac3': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA_HA': 'TextEdit', 'COD_AREA': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_UnidadesdeConservaonaregio_2.set('fieldImages', {'uc_id': 'TextEdit', 'cd_cnuc': 'TextEdit', 'wdpa_pid': 'TextEdit', 'nome_uc': 'TextEdit', 'cria_ano': 'TextEdit', 'cria_ato': 'TextEdit', 'outro_ato': 'TextEdit', 'pl_manejo': 'TextEdit', 'co_gestor': 'TextEdit', 'quali_pol': 'TextEdit', 'ppgr': 'TextEdit', 'ha_total': 'TextEdit', 'ha_ato': 'TextEdit', 'esfera': 'TextEdit', 'uf': 'TextEdit', 'municipio': 'TextEdit', 'org_gestor': 'TextEdit', 'grupo': 'TextEdit', 'categoria': 'TextEdit', 'cat_iucn': 'TextEdit', 'amazonia': 'TextEdit', 'caatinga': 'TextEdit', 'cerrado': 'TextEdit', 'matlantica': 'TextEdit', 'pampa': 'TextEdit', 'pantanal': 'TextEdit', 'marinho': 'TextEdit', 'situacao': 'TextEdit', 'limite': 'TextEdit', 'rbiosfera': 'TextEdit', 'NomeAbrev': 'TextEdit', });
lyr_Limitesdebaciashidrogrficas_3.set('fieldImages', {'id': 'TextEdit', 'nmcbe': 'TextEdit', });
lyr_Corposdgua_4.set('fieldImages', {'nome': 'TextEdit', 'tipomassad': 'TextEdit', 'ID': 'TextEdit', });
lyr_Assentamentos_5.set('fieldImages', {'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', });
lyr_RodoviaEstadual_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'UF_SIGLA': 'TextEdit', 'ROD_ADM_NO': 'TextEdit', 'ROD_CODIGO': 'TextEdit', 'SNV_ROD_SU': 'TextEdit', 'ROD_CON_DE': 'TextEdit', 'ROD_FON_DE': 'TextEdit', 'br': 'TextEdit', });
lyr_RodoviaFederal_7.set('fieldImages', {'id_trecho_': 'TextEdit', 'nm_tipo_tr': 'TextEdit', 'sg_tipo_tr': 'TextEdit', 'desc_coinc': 'TextEdit', 'vl_codigo': 'TextEdit', 'ds_local_i': 'TextEdit', 'ds_local_f': 'TextEdit', 'vl_km_inic': 'TextEdit', 'vl_km_fina': 'TextEdit', 'vl_extensa': 'TextEdit', 'ds_sup_fed': 'TextEdit', 'ds_tipo_ad': 'TextEdit', 'sup_est_co': 'TextEdit', 'ds_jurisdi': 'TextEdit', 'ds_legenda': 'TextEdit', 'leg_multim': 'TextEdit', 'versao_snv': 'TextEdit', 'Rotulo': 'TextEdit', });
lyr_Estradasecaminhos_8.set('fieldImages', {'fid': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', });
lyr_MunicpiosprximossUCs_9.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Localidades_10.set('fieldImages', {'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CT_LOCALID': 'TextEdit', 'SCT_LOCALI': 'TextEdit', 'CD_LOCALID': 'TextEdit', 'NM_LOCALID': 'TextEdit', 'LAT_LOCALI': 'TextEdit', 'LONG_LOCAL': 'TextEdit', });
lyr_AssociaesFundoeFechodePastolocalizaoaproximada_11.set('fieldImages', {'id': 'TextEdit', 'Mun_origin': 'TextEdit', 'Mun_atual': 'TextEdit', });
lyr_Cidades_12.set('fieldImages', {'nome': 'TextEdit', 'geocodigo': 'TextEdit', });
lyr_Comunidades_13.set('fieldImages', {'Nome': 'TextEdit', });
lyr_reasprioritriasparaconservao_1.set('fieldLabels', {'OBJECTID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'IMPORT_BIO': 'no label', 'NOME_AREA': 'no label', 'ACAO_PRINC': 'no label', 'PRIOR_ACAO': 'no label', 'NM_ACAO_PR': 'no label', 'Ac2': 'no label', 'Ac3': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'AREA_HA': 'no label', 'COD_AREA': 'no label', 'Legenda': 'no label', });
lyr_UnidadesdeConservaonaregio_2.set('fieldLabels', {'uc_id': 'no label', 'cd_cnuc': 'no label', 'wdpa_pid': 'no label', 'nome_uc': 'no label', 'cria_ano': 'no label', 'cria_ato': 'no label', 'outro_ato': 'no label', 'pl_manejo': 'no label', 'co_gestor': 'no label', 'quali_pol': 'no label', 'ppgr': 'no label', 'ha_total': 'no label', 'ha_ato': 'no label', 'esfera': 'no label', 'uf': 'no label', 'municipio': 'no label', 'org_gestor': 'no label', 'grupo': 'no label', 'categoria': 'no label', 'cat_iucn': 'no label', 'amazonia': 'no label', 'caatinga': 'no label', 'cerrado': 'no label', 'matlantica': 'no label', 'pampa': 'no label', 'pantanal': 'no label', 'marinho': 'no label', 'situacao': 'no label', 'limite': 'no label', 'rbiosfera': 'no label', 'NomeAbrev': 'no label', });
lyr_Limitesdebaciashidrogrficas_3.set('fieldLabels', {'id': 'no label', 'nmcbe': 'no label', });
lyr_Corposdgua_4.set('fieldLabels', {'nome': 'no label', 'tipomassad': 'no label', 'ID': 'no label', });
lyr_Assentamentos_5.set('fieldLabels', {'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', });
lyr_RodoviaEstadual_6.set('fieldLabels', {'OBJECTID': 'no label', 'UF_SIGLA': 'no label', 'ROD_ADM_NO': 'no label', 'ROD_CODIGO': 'header label - always visible', 'SNV_ROD_SU': 'no label', 'ROD_CON_DE': 'no label', 'ROD_FON_DE': 'no label', 'br': 'no label', });
lyr_RodoviaFederal_7.set('fieldLabels', {'id_trecho_': 'no label', 'nm_tipo_tr': 'no label', 'sg_tipo_tr': 'no label', 'desc_coinc': 'no label', 'vl_codigo': 'no label', 'ds_local_i': 'no label', 'ds_local_f': 'no label', 'vl_km_inic': 'no label', 'vl_km_fina': 'no label', 'vl_extensa': 'no label', 'ds_sup_fed': 'no label', 'ds_tipo_ad': 'no label', 'sup_est_co': 'no label', 'ds_jurisdi': 'no label', 'ds_legenda': 'no label', 'leg_multim': 'no label', 'versao_snv': 'no label', 'Rotulo': 'header label - always visible', });
lyr_Estradasecaminhos_8.set('fieldLabels', {'fid': 'no label', 'highway': 'no label', 'ref': 'no label', 'name': 'no label', });
lyr_MunicpiosprximossUCs_9.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_Localidades_10.set('fieldLabels', {'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CT_LOCALID': 'no label', 'SCT_LOCALI': 'no label', 'CD_LOCALID': 'no label', 'NM_LOCALID': 'no label', 'LAT_LOCALI': 'no label', 'LONG_LOCAL': 'no label', });
lyr_AssociaesFundoeFechodePastolocalizaoaproximada_11.set('fieldLabels', {'id': 'no label', 'Mun_origin': 'no label', 'Mun_atual': 'no label', });
lyr_Cidades_12.set('fieldLabels', {'nome': 'header label - always visible', 'geocodigo': 'no label', });
lyr_Comunidades_13.set('fieldLabels', {'Nome': 'header label - always visible', });
lyr_Comunidades_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});