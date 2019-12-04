var wms_layers = [];

var format_usoActualsuelo_copy_0 = new ol.format.GeoJSON();
var features_usoActualsuelo_copy_0 = format_usoActualsuelo_copy_0.readFeatures(json_usoActualsuelo_copy_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_usoActualsuelo_copy_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_usoActualsuelo_copy_0.addFeatures(features_usoActualsuelo_copy_0);
var lyr_usoActualsuelo_copy_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_usoActualsuelo_copy_0, 
                style: style_usoActualsuelo_copy_0,
                interactive: true,
    title: 'usoActualsuelo_copy<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_0.png" /> 111,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_1.png" /> 112,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_2.png" /> 121,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_3.png" /> 131,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_4.png" /> 141,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_5.png" /> 142,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_6.png" /> 231,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_7.png" /> 232,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_8.png" /> 233,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_9.png" /> 242,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_10.png" /> 243,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_11.png" /> 244,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_12.png" /> 314,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_13.png" /> 315,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_14.png" /> 511,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_15.png" /> 512,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_16.png" /> 1221,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_17.png" /> 1241,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_18.png" /> 2217,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_19.png" /> 3131,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_20.png" /> 3221,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_21.png" /> 3222,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_22.png" /> 3231,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_23.png" /> 3232,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_24.png" /> 5141,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_25.png" /> 31111,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_26.png" /> 31121,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_27.png" /> 32111,00000000000<br />\
    <img src="styles/legend/usoActualsuelo_copy_0_28.png" /> <br />'
        });

lyr_usoActualsuelo_copy_0.setVisible(true);
var layersList = [lyr_usoActualsuelo_copy_0];
lyr_usoActualsuelo_copy_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'N1_COBERT': 'N1_COBERT', 'N2_COBERT': 'N2_COBERT', 'N3_COBERT': 'N3_COBERT', 'N4_COBERT': 'N4_COBERT', 'N5_COBERT': 'N5_COBERT', 'N6_COBERT': 'N6_COBERT', 'NOMENCLAT': 'NOMENCLAT', 'OBSERV': 'OBSERV', 'AREA_ha': 'AREA_ha', 'SHAPE_Leng': 'SHAPE_Leng', 'GRUPO_USO': 'GRUPO_USO', 'USO_ACT': 'USO_ACT', 'USO_PRINC': 'USO_PRINC', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_usoActualsuelo_copy_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'N1_COBERT': 'TextEdit', 'N2_COBERT': 'TextEdit', 'N3_COBERT': 'TextEdit', 'N4_COBERT': 'TextEdit', 'N5_COBERT': 'TextEdit', 'N6_COBERT': 'TextEdit', 'NOMENCLAT': 'TextEdit', 'OBSERV': 'TextEdit', 'AREA_ha': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'GRUPO_USO': 'TextEdit', 'USO_ACT': 'TextEdit', 'USO_PRINC': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_usoActualsuelo_copy_0.set('fieldLabels', {'OBJECTID': 'no label', 'N1_COBERT': 'no label', 'N2_COBERT': 'no label', 'N3_COBERT': 'no label', 'N4_COBERT': 'no label', 'N5_COBERT': 'no label', 'N6_COBERT': 'no label', 'NOMENCLAT': 'no label', 'OBSERV': 'no label', 'AREA_ha': 'no label', 'SHAPE_Leng': 'no label', 'GRUPO_USO': 'no label', 'USO_ACT': 'no label', 'USO_PRINC': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_usoActualsuelo_copy_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});