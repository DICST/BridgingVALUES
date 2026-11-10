var size = 0;
var placement = 'point';
function categories_Usoecoberturadaterra_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Área agrícola':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(228,49,180,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Área artificial':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(132,0,2,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Área úmida':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(126,91,208,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corpo dágua continental':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(44,170,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mosaico de ocupações em área campestre':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,223,182,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mosaico de ocupações em área florestal':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,173,68,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pastagem com manejo':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,246,23,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vegetação campestre':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(162,201,100,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vegetação florestal':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(44,122,53,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Usoecoberturadaterra_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Classes");
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
    
    var style = categories_Usoecoberturadaterra_7(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
