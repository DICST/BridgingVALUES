var size = 0;
var placement = 'point';
function categories_Declividadeeclassesderelevo_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '0 a 3% - Plano':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,113,68,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '3 a 8% - Suave ondulado':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,217,162,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '8 a 20% - Ondulado':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,242,147,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '20 a 45% - Forte ondulado':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,212,119,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '45 a 75% - Montanhoso':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(249,118,39,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '> 75% - Escarpado':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(172,43,45,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Declividadeeclassesderelevo_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Legenda");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Declividadeeclassesderelevo_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
