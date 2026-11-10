var size = 0;
var placement = 'point';

var style_Curvasdenvel150m_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "15.600000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#ffb621";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_Curvasdenvel150m_6_eval_expression(context) !== null) {
        labelText = String(exp_label_Curvasdenvel150m_6_eval_expression(context));
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,182,33,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
