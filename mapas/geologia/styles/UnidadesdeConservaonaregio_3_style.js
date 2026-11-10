var size = 0;
var placement = 'point';
function categories_UnidadesdeConservaonaregio_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'ÁREA DE PROTEÇÃO AMBIENTAL DO BOQUEIRÃO DA ONÇA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(212,39,30,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(227,26,28,0.2)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PARQUE NACIONAL DO BOQUEIRÃO DA ONÇA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,160,44,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(51,160,44,0.21568627450980393)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_UnidadesdeConservaonaregio_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("nome_uc");
    var labelFont = "15.600000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#33a02c";
    var bufferColor = "#fafafa";
    var bufferWidth = 2.0999999999999996;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("nome_uc") !== null) {
        labelText = String(feature.get("nome_uc"));
    }
    
    var style = categories_UnidadesdeConservaonaregio_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
