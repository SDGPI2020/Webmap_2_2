var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_HispanicorLatino_1 = new ol.format.GeoJSON();
var features_HispanicorLatino_1 = format_HispanicorLatino_1.readFeatures(json_HispanicorLatino_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HispanicorLatino_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HispanicorLatino_1.addFeatures(features_HispanicorLatino_1);
var lyr_HispanicorLatino_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HispanicorLatino_1, 
                style: style_HispanicorLatino_1,
                interactive: true,
    title: 'Hispanic or Latino<br />\
    <img src="styles/legend/HispanicorLatino_1_0.png" /> No Data<br />\
    <img src="styles/legend/HispanicorLatino_1_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/HispanicorLatino_1_2.png" /> 7.25% - 15% <br />\
    <img src="styles/legend/HispanicorLatino_1_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/HispanicorLatino_1_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/HispanicorLatino_1_5.png" /> >35%<br />'
        });
var format_TwoorMoreRaces_2 = new ol.format.GeoJSON();
var features_TwoorMoreRaces_2 = format_TwoorMoreRaces_2.readFeatures(json_TwoorMoreRaces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TwoorMoreRaces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TwoorMoreRaces_2.addFeatures(features_TwoorMoreRaces_2);
var lyr_TwoorMoreRaces_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TwoorMoreRaces_2, 
                style: style_TwoorMoreRaces_2,
                interactive: true,
    title: 'Two or More Races<br />\
    <img src="styles/legend/TwoorMoreRaces_2_0.png" /> No Data<br />\
    <img src="styles/legend/TwoorMoreRaces_2_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/TwoorMoreRaces_2_2.png" /> 7.25% - 15% <br />\
    <img src="styles/legend/TwoorMoreRaces_2_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/TwoorMoreRaces_2_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/TwoorMoreRaces_2_5.png" /> >35%<br />'
        });
var format_Otherrace_3 = new ol.format.GeoJSON();
var features_Otherrace_3 = format_Otherrace_3.readFeatures(json_Otherrace_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Otherrace_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Otherrace_3.addFeatures(features_Otherrace_3);
var lyr_Otherrace_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Otherrace_3, 
                style: style_Otherrace_3,
                interactive: true,
    title: 'Other race<br />\
    <img src="styles/legend/Otherrace_3_0.png" /> No Data<br />\
    <img src="styles/legend/Otherrace_3_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Otherrace_3_2.png" /> 7.25% - 15% <br />\
    <img src="styles/legend/Otherrace_3_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/Otherrace_3_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/Otherrace_3_5.png" /> >35%<br />'
        });
var format_NativeHawaiianandOtherPacificIslander_4 = new ol.format.GeoJSON();
var features_NativeHawaiianandOtherPacificIslander_4 = format_NativeHawaiianandOtherPacificIslander_4.readFeatures(json_NativeHawaiianandOtherPacificIslander_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NativeHawaiianandOtherPacificIslander_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NativeHawaiianandOtherPacificIslander_4.addFeatures(features_NativeHawaiianandOtherPacificIslander_4);
var lyr_NativeHawaiianandOtherPacificIslander_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NativeHawaiianandOtherPacificIslander_4, 
                style: style_NativeHawaiianandOtherPacificIslander_4,
                interactive: true,
    title: 'Native Hawaiian and Other Pacific Islander<br />\
    <img src="styles/legend/NativeHawaiianandOtherPacificIslander_4_0.png" /> No Data<br />\
    <img src="styles/legend/NativeHawaiianandOtherPacificIslander_4_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/NativeHawaiianandOtherPacificIslander_4_2.png" /> 7.25% - 15% <br />\
    <img src="styles/legend/NativeHawaiianandOtherPacificIslander_4_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/NativeHawaiianandOtherPacificIslander_4_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/NativeHawaiianandOtherPacificIslander_4_5.png" /> >35%<br />'
        });
var format_Asian_5 = new ol.format.GeoJSON();
var features_Asian_5 = format_Asian_5.readFeatures(json_Asian_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asian_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asian_5.addFeatures(features_Asian_5);
var lyr_Asian_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Asian_5, 
                style: style_Asian_5,
                interactive: true,
    title: 'Asian<br />\
    <img src="styles/legend/Asian_5_0.png" /> No Data<br />\
    <img src="styles/legend/Asian_5_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Asian_5_2.png" /> 7.25% - 15% <br />\
    <img src="styles/legend/Asian_5_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/Asian_5_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/Asian_5_5.png" /> >35%<br />'
        });
var format_AmericanIndianAlaskaNative_6 = new ol.format.GeoJSON();
var features_AmericanIndianAlaskaNative_6 = format_AmericanIndianAlaskaNative_6.readFeatures(json_AmericanIndianAlaskaNative_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmericanIndianAlaskaNative_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmericanIndianAlaskaNative_6.addFeatures(features_AmericanIndianAlaskaNative_6);
var lyr_AmericanIndianAlaskaNative_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AmericanIndianAlaskaNative_6, 
                style: style_AmericanIndianAlaskaNative_6,
                interactive: true,
    title: 'American Indian & Alaska Native<br />\
    <img src="styles/legend/AmericanIndianAlaskaNative_6_0.png" /> No Data<br />\
    <img src="styles/legend/AmericanIndianAlaskaNative_6_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/AmericanIndianAlaskaNative_6_2.png" /> 7.25% - 15% <br />\
    <img src="styles/legend/AmericanIndianAlaskaNative_6_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/AmericanIndianAlaskaNative_6_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/AmericanIndianAlaskaNative_6_5.png" /> >35%<br />'
        });
var format_BlackorAfricanAmerican_7 = new ol.format.GeoJSON();
var features_BlackorAfricanAmerican_7 = format_BlackorAfricanAmerican_7.readFeatures(json_BlackorAfricanAmerican_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlackorAfricanAmerican_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlackorAfricanAmerican_7.addFeatures(features_BlackorAfricanAmerican_7);
var lyr_BlackorAfricanAmerican_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BlackorAfricanAmerican_7, 
                style: style_BlackorAfricanAmerican_7,
                interactive: true,
    title: 'Black or African American<br />\
    <img src="styles/legend/BlackorAfricanAmerican_7_0.png" /> No Data<br />\
    <img src="styles/legend/BlackorAfricanAmerican_7_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/BlackorAfricanAmerican_7_2.png" /> 7.25% - 15% <br />\
    <img src="styles/legend/BlackorAfricanAmerican_7_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/BlackorAfricanAmerican_7_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/BlackorAfricanAmerican_7_5.png" /> >35%<br />'
        });
var format_White_8 = new ol.format.GeoJSON();
var features_White_8 = format_White_8.readFeatures(json_White_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_White_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_White_8.addFeatures(features_White_8);
var lyr_White_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_White_8, 
                style: style_White_8,
                interactive: true,
    title: 'White<br />\
    <img src="styles/legend/White_8_0.png" /> No Data<br />\
    <img src="styles/legend/White_8_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/White_8_2.png" /> 7.25% - 15% <br />\
    <img src="styles/legend/White_8_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/White_8_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/White_8_5.png" /> >35%<br />'
        });
var format_Female_9 = new ol.format.GeoJSON();
var features_Female_9 = format_Female_9.readFeatures(json_Female_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Female_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Female_9.addFeatures(features_Female_9);
var lyr_Female_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Female_9, 
                style: style_Female_9,
                interactive: true,
    title: 'Female<br />\
    <img src="styles/legend/Female_9_0.png" /> No Data<br />\
    <img src="styles/legend/Female_9_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Female_9_2.png" /> 7.25% - 15% <br />\
    <img src="styles/legend/Female_9_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/Female_9_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/Female_9_5.png" /> >35%<br />'
        });
var format_Male_10 = new ol.format.GeoJSON();
var features_Male_10 = format_Male_10.readFeatures(json_Male_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Male_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Male_10.addFeatures(features_Male_10);
var lyr_Male_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Male_10, 
                style: style_Male_10,
                interactive: true,
    title: 'Male<br />\
    <img src="styles/legend/Male_10_0.png" /> No Data<br />\
    <img src="styles/legend/Male_10_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/Male_10_2.png" /> 7.25% - 15% <br />\
    <img src="styles/legend/Male_10_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/Male_10_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/Male_10_5.png" /> >35%<br />'
        });
var format_CombinedPopulation_11 = new ol.format.GeoJSON();
var features_CombinedPopulation_11 = format_CombinedPopulation_11.readFeatures(json_CombinedPopulation_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CombinedPopulation_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CombinedPopulation_11.addFeatures(features_CombinedPopulation_11);
var lyr_CombinedPopulation_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CombinedPopulation_11, 
                style: style_CombinedPopulation_11,
                interactive: true,
    title: 'Combined Population<br />\
    <img src="styles/legend/CombinedPopulation_11_0.png" /> No Data<br />\
    <img src="styles/legend/CombinedPopulation_11_1.png" /> Achieved Goal <br />\
    <img src="styles/legend/CombinedPopulation_11_2.png" /> 7.25% - 15% <br />\
    <img src="styles/legend/CombinedPopulation_11_3.png" /> 15% - 25%<br />\
    <img src="styles/legend/CombinedPopulation_11_4.png" /> 25% - 35%<br />\
    <img src="styles/legend/CombinedPopulation_11_5.png" /> >35%<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_HispanicorLatino_1.setVisible(true);lyr_TwoorMoreRaces_2.setVisible(true);lyr_Otherrace_3.setVisible(true);lyr_NativeHawaiianandOtherPacificIslander_4.setVisible(true);lyr_Asian_5.setVisible(true);lyr_AmericanIndianAlaskaNative_6.setVisible(true);lyr_BlackorAfricanAmerican_7.setVisible(true);lyr_White_8.setVisible(true);lyr_Female_9.setVisible(true);lyr_Male_10.setVisible(true);lyr_CombinedPopulation_11.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_HispanicorLatino_1,lyr_TwoorMoreRaces_2,lyr_Otherrace_3,lyr_NativeHawaiianandOtherPacificIslander_4,lyr_Asian_5,lyr_AmericanIndianAlaskaNative_6,lyr_BlackorAfricanAmerican_7,lyr_White_8,lyr_Female_9,lyr_Male_10,lyr_CombinedPopulation_11];
lyr_HispanicorLatino_1.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'FID_2': 'FID_2', 'GEO_ID': 'GEO_ID', 'Total_Poverty': 'Total_Poverty', 'Male_Poverty': 'Male_Poverty', 'Female_Poverty': 'Female_Poverty', 'White_Alone_Poverty': 'White_Alone_Poverty', 'Black_Alone_Poverty': 'Black_Alone_Poverty', 'American_Indian_Poverty': 'American_Indian_Poverty', 'Asian_Poverty': 'Asian_Poverty', 'Pacific_Islander_Poverty': 'Pacific_Islander_Poverty', 'Other_Race_Poverty': 'Other_Race_Poverty', 'Two_Or_More_Races_Poverty': 'Two_Or_More_Races_Poverty', 'Hispanic_Or_Latino_Poverty': 'Hispanic_Or_Latino_Poverty', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Total Poverty': 'Total Poverty', 'Male Poverty': 'Male Poverty', 'Female Poverty': 'Female Poverty', 'White Alone Poverty': 'White Alone Poverty', 'Black Alone Poverty': 'Black Alone Poverty', 'American Indian Poverty': 'American Indian Poverty', 'Asian Poverty': 'Asian Poverty', 'Pacific Islander Poverty': 'Pacific Islander Poverty', 'Other Race Poverty': 'Other Race Poverty', 'Hispanic Or Latino Poverty': 'Hispanic Or Latino Poverty', });
lyr_TwoorMoreRaces_2.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'FID_2': 'FID_2', 'GEO_ID': 'GEO_ID', 'Total_Poverty': 'Total_Poverty', 'Male_Poverty': 'Male_Poverty', 'Female_Poverty': 'Female_Poverty', 'White_Alone_Poverty': 'White_Alone_Poverty', 'Black_Alone_Poverty': 'Black_Alone_Poverty', 'American_Indian_Poverty': 'American_Indian_Poverty', 'Asian_Poverty': 'Asian_Poverty', 'Pacific_Islander_Poverty': 'Pacific_Islander_Poverty', 'Other_Race_Poverty': 'Other_Race_Poverty', 'Two_Or_More_Races_Poverty': 'Two_Or_More_Races_Poverty', 'Hispanic_Or_Latino_Poverty': 'Hispanic_Or_Latino_Poverty', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Total Poverty': 'Total Poverty', 'Male Poverty': 'Male Poverty', 'Female Poverty': 'Female Poverty', 'White Alone Poverty': 'White Alone Poverty', 'Black Alone Poverty': 'Black Alone Poverty', 'American Indian Poverty': 'American Indian Poverty', 'Asian Poverty': 'Asian Poverty', 'Pacific Islander Poverty': 'Pacific Islander Poverty', 'Other Race Poverty': 'Other Race Poverty', 'Hispanic Or Latino Poverty': 'Hispanic Or Latino Poverty', 'Two or More ': 'Two or More ', });
lyr_Otherrace_3.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'FID_2': 'FID_2', 'GEO_ID': 'GEO_ID', 'Total_Poverty': 'Total_Poverty', 'Male_Poverty': 'Male_Poverty', 'Female_Poverty': 'Female_Poverty', 'White_Alone_Poverty': 'White_Alone_Poverty', 'Black_Alone_Poverty': 'Black_Alone_Poverty', 'American_Indian_Poverty': 'American_Indian_Poverty', 'Asian_Poverty': 'Asian_Poverty', 'Pacific_Islander_Poverty': 'Pacific_Islander_Poverty', 'Other_Race_Poverty': 'Other_Race_Poverty', 'Two_Or_More_Races_Poverty': 'Two_Or_More_Races_Poverty', 'Hispanic_Or_Latino_Poverty': 'Hispanic_Or_Latino_Poverty', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Total Poverty': 'Total Poverty', 'Male Poverty': 'Male Poverty', 'Female Poverty': 'Female Poverty', 'White Alone Poverty': 'White Alone Poverty', 'Black Alone Poverty': 'Black Alone Poverty', 'American Indian Poverty': 'American Indian Poverty', 'Asian Poverty': 'Asian Poverty', 'Pacific Islander Poverty': 'Pacific Islander Poverty', 'Other Race Poverty': 'Other Race Poverty', 'Hispanic Or Latino Poverty': 'Hispanic Or Latino Poverty', });
lyr_NativeHawaiianandOtherPacificIslander_4.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'FID_2': 'FID_2', 'GEO_ID': 'GEO_ID', 'Total_Poverty': 'Total_Poverty', 'Male_Poverty': 'Male_Poverty', 'Female_Poverty': 'Female_Poverty', 'White_Alone_Poverty': 'White_Alone_Poverty', 'Black_Alone_Poverty': 'Black_Alone_Poverty', 'American_Indian_Poverty': 'American_Indian_Poverty', 'Asian_Poverty': 'Asian_Poverty', 'Pacific_Islander_Poverty': 'Pacific_Islander_Poverty', 'Other_Race_Poverty': 'Other_Race_Poverty', 'Two_Or_More_Races_Poverty': 'Two_Or_More_Races_Poverty', 'Hispanic_Or_Latino_Poverty': 'Hispanic_Or_Latino_Poverty', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Total Poverty': 'Total Poverty', 'Male Poverty': 'Male Poverty', 'Female Poverty': 'Female Poverty', 'White Alone Poverty': 'White Alone Poverty', 'Black Alone Poverty': 'Black Alone Poverty', 'American Indian Poverty': 'American Indian Poverty', 'Asian Poverty': 'Asian Poverty', 'Pacific Islander Poverty': 'Pacific Islander Poverty', 'Other Race Poverty': 'Other Race Poverty', 'Hispanic Or Latino Poverty': 'Hispanic Or Latino Poverty', });
lyr_Asian_5.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'FID_2': 'FID_2', 'GEO_ID': 'GEO_ID', 'Total_Poverty': 'Total_Poverty', 'Male_Poverty': 'Male_Poverty', 'Female_Poverty': 'Female_Poverty', 'White_Alone_Poverty': 'White_Alone_Poverty', 'Black_Alone_Poverty': 'Black_Alone_Poverty', 'American_Indian_Poverty': 'American_Indian_Poverty', 'Asian_Poverty': 'Asian_Poverty', 'Pacific_Islander_Poverty': 'Pacific_Islander_Poverty', 'Other_Race_Poverty': 'Other_Race_Poverty', 'Two_Or_More_Races_Poverty': 'Two_Or_More_Races_Poverty', 'Hispanic_Or_Latino_Poverty': 'Hispanic_Or_Latino_Poverty', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Total Poverty': 'Total Poverty', 'Male Poverty': 'Male Poverty', 'Female Poverty': 'Female Poverty', 'White Alone Poverty': 'White Alone Poverty', 'Black Alone Poverty': 'Black Alone Poverty', 'American Indian Poverty': 'American Indian Poverty', 'Asian Poverty': 'Asian Poverty', 'Pacific Islander Poverty': 'Pacific Islander Poverty', 'Other Race Poverty': 'Other Race Poverty', 'Hispanic Or Latino Poverty': 'Hispanic Or Latino Poverty', });
lyr_AmericanIndianAlaskaNative_6.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'FID_2': 'FID_2', 'GEO_ID': 'GEO_ID', 'Total_Poverty': 'Total_Poverty', 'Male_Poverty': 'Male_Poverty', 'Female_Poverty': 'Female_Poverty', 'White_Alone_Poverty': 'White_Alone_Poverty', 'Black_Alone_Poverty': 'Black_Alone_Poverty', 'American_Indian_Poverty': 'American_Indian_Poverty', 'Asian_Poverty': 'Asian_Poverty', 'Pacific_Islander_Poverty': 'Pacific_Islander_Poverty', 'Other_Race_Poverty': 'Other_Race_Poverty', 'Two_Or_More_Races_Poverty': 'Two_Or_More_Races_Poverty', 'Hispanic_Or_Latino_Poverty': 'Hispanic_Or_Latino_Poverty', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Total Poverty': 'Total Poverty', 'Male Poverty': 'Male Poverty', 'Female Poverty': 'Female Poverty', 'White Alone Poverty': 'White Alone Poverty', 'Black Alone Poverty': 'Black Alone Poverty', 'American Indian Poverty': 'American Indian Poverty', 'Asian Poverty': 'Asian Poverty', 'Pacific Islander Poverty': 'Pacific Islander Poverty', 'Other Race Poverty': 'Other Race Poverty', 'Hispanic Or Latino Poverty': 'Hispanic Or Latino Poverty', });
lyr_BlackorAfricanAmerican_7.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'FID_2': 'FID_2', 'GEO_ID': 'GEO_ID', 'Total_Poverty': 'Total_Poverty', 'Male_Poverty': 'Male_Poverty', 'Female_Poverty': 'Female_Poverty', 'White_Alone_Poverty': 'White_Alone_Poverty', 'Black_Alone_Poverty': 'Black_Alone_Poverty', 'American_Indian_Poverty': 'American_Indian_Poverty', 'Asian_Poverty': 'Asian_Poverty', 'Pacific_Islander_Poverty': 'Pacific_Islander_Poverty', 'Other_Race_Poverty': 'Other_Race_Poverty', 'Two_Or_More_Races_Poverty': 'Two_Or_More_Races_Poverty', 'Hispanic_Or_Latino_Poverty': 'Hispanic_Or_Latino_Poverty', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Total Poverty': 'Total Poverty', 'Male Poverty': 'Male Poverty', 'Female Poverty': 'Female Poverty', 'White Alone Poverty': 'White Alone Poverty', 'Black Alone Poverty': 'Black Alone Poverty', 'American Indian Poverty': 'American Indian Poverty', 'Asian Poverty': 'Asian Poverty', 'Pacific Islander Poverty': 'Pacific Islander Poverty', 'Other Race Poverty': 'Other Race Poverty', 'Hispanic Or Latino Poverty': 'Hispanic Or Latino Poverty', });
lyr_White_8.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'FID_2': 'FID_2', 'GEO_ID': 'GEO_ID', 'Total_Poverty': 'Total_Poverty', 'Male_Poverty': 'Male_Poverty', 'Female_Poverty': 'Female_Poverty', 'White_Alone_Poverty': 'White_Alone_Poverty', 'Black_Alone_Poverty': 'Black_Alone_Poverty', 'American_Indian_Poverty': 'American_Indian_Poverty', 'Asian_Poverty': 'Asian_Poverty', 'Pacific_Islander_Poverty': 'Pacific_Islander_Poverty', 'Other_Race_Poverty': 'Other_Race_Poverty', 'Two_Or_More_Races_Poverty': 'Two_Or_More_Races_Poverty', 'Hispanic_Or_Latino_Poverty': 'Hispanic_Or_Latino_Poverty', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Total Poverty': 'Total Poverty', 'Male Poverty': 'Male Poverty', 'Female Poverty': 'Female Poverty', 'White Alone Poverty': 'White Alone Poverty', 'Black Alone Poverty': 'Black Alone Poverty', 'American Indian Poverty': 'American Indian Poverty', 'Asian Poverty': 'Asian Poverty', 'Pacific Islander Poverty': 'Pacific Islander Poverty', 'Other Race Poverty': 'Other Race Poverty', 'Hispanic Or Latino Poverty': 'Hispanic Or Latino Poverty', });
lyr_Female_9.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'FID_2': 'FID_2', 'GEO_ID': 'GEO_ID', 'Total_Poverty': 'Total_Poverty', 'Male_Poverty': 'Male_Poverty', 'Female_Poverty': 'Female_Poverty', 'White_Alone_Poverty': 'White_Alone_Poverty', 'Black_Alone_Poverty': 'Black_Alone_Poverty', 'American_Indian_Poverty': 'American_Indian_Poverty', 'Asian_Poverty': 'Asian_Poverty', 'Pacific_Islander_Poverty': 'Pacific_Islander_Poverty', 'Other_Race_Poverty': 'Other_Race_Poverty', 'Two_Or_More_Races_Poverty': 'Two_Or_More_Races_Poverty', 'Hispanic_Or_Latino_Poverty': 'Hispanic_Or_Latino_Poverty', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Total Poverty': 'Total Poverty', 'Male Poverty': 'Male Poverty', 'Female Poverty': 'Female Poverty', 'White Alone Poverty': 'White Alone Poverty', 'Black Alone Poverty': 'Black Alone Poverty', 'American Indian Poverty': 'American Indian Poverty', 'Asian Poverty': 'Asian Poverty', 'Pacific Islander Poverty': 'Pacific Islander Poverty', 'Other Race Poverty': 'Other Race Poverty', 'Hispanic Or Latino Poverty': 'Hispanic Or Latino Poverty', });
lyr_Male_10.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'FID_2': 'FID_2', 'GEO_ID': 'GEO_ID', 'Total_Poverty': 'Total_Poverty', 'Male_Poverty': 'Male_Poverty', 'Female_Poverty': 'Female_Poverty', 'White_Alone_Poverty': 'White_Alone_Poverty', 'Black_Alone_Poverty': 'Black_Alone_Poverty', 'American_Indian_Poverty': 'American_Indian_Poverty', 'Asian_Poverty': 'Asian_Poverty', 'Pacific_Islander_Poverty': 'Pacific_Islander_Poverty', 'Other_Race_Poverty': 'Other_Race_Poverty', 'Two_Or_More_Races_Poverty': 'Two_Or_More_Races_Poverty', 'Hispanic_Or_Latino_Poverty': 'Hispanic_Or_Latino_Poverty', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Total Poverty': 'Total Poverty', 'Male Poverty': 'Male Poverty', 'Female Poverty': 'Female Poverty', 'White Alone Poverty': 'White Alone Poverty', 'Black Alone Poverty': 'Black Alone Poverty', 'American Indian Poverty': 'American Indian Poverty', 'Asian Poverty': 'Asian Poverty', 'Pacific Islander Poverty': 'Pacific Islander Poverty', 'Other Race Poverty': 'Other Race Poverty', 'Hispanic Or Latino Poverty': 'Hispanic Or Latino Poverty', });
lyr_CombinedPopulation_11.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'FID_2': 'FID_2', 'GEO_ID': 'GEO_ID', 'Total_Poverty': 'Total_Poverty', 'Male_Poverty': 'Male_Poverty', 'Female_Poverty': 'Female_Poverty', 'White_Alone_Poverty': 'White_Alone_Poverty', 'Black_Alone_Poverty': 'Black_Alone_Poverty', 'American_Indian_Poverty': 'American_Indian_Poverty', 'Asian_Poverty': 'Asian_Poverty', 'Pacific_Islander_Poverty': 'Pacific_Islander_Poverty', 'Other_Race_Poverty': 'Other_Race_Poverty', 'Two_Or_More_Races_Poverty': 'Two_Or_More_Races_Poverty', 'Hispanic_Or_Latino_Poverty': 'Hispanic_Or_Latino_Poverty', 'state': 'state', 'county': 'county', 'tract': 'tract', 'Total Poverty': 'Total Poverty', 'Male Poverty': 'Male Poverty', 'Female Poverty': 'Female Poverty', 'White Alone Poverty': 'White Alone Poverty', 'Black Alone Poverty': 'Black Alone Poverty', 'American Indian Poverty': 'American Indian Poverty', 'Asian Poverty': 'Asian Poverty', 'Pacific Islander Poverty': 'Pacific Islander Poverty', 'Other Race Poverty': 'Other Race Poverty', 'Hispanic Or Latino Poverty': 'Hispanic Or Latino Poverty', });
lyr_HispanicorLatino_1.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'FID_2': 'Hidden', 'GEO_ID': 'Hidden', 'Total_Poverty': 'Hidden', 'Male_Poverty': 'Hidden', 'Female_Poverty': 'Hidden', 'White_Alone_Poverty': 'Hidden', 'Black_Alone_Poverty': 'Hidden', 'American_Indian_Poverty': 'Hidden', 'Asian_Poverty': 'Hidden', 'Pacific_Islander_Poverty': 'Hidden', 'Other_Race_Poverty': 'Hidden', 'Two_Or_More_Races_Poverty': 'Hidden', 'Hispanic_Or_Latino_Poverty': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Total Poverty': 'TextEdit', 'Male Poverty': 'TextEdit', 'Female Poverty': 'TextEdit', 'White Alone Poverty': 'TextEdit', 'Black Alone Poverty': 'TextEdit', 'American Indian Poverty': 'TextEdit', 'Asian Poverty': 'TextEdit', 'Pacific Islander Poverty': 'TextEdit', 'Other Race Poverty': 'TextEdit', 'Hispanic Or Latino Poverty': 'TextEdit', });
lyr_TwoorMoreRaces_2.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'FID_2': 'Hidden', 'GEO_ID': 'Hidden', 'Total_Poverty': 'Hidden', 'Male_Poverty': 'Hidden', 'Female_Poverty': 'Hidden', 'White_Alone_Poverty': 'Hidden', 'Black_Alone_Poverty': 'Hidden', 'American_Indian_Poverty': 'Hidden', 'Asian_Poverty': 'Hidden', 'Pacific_Islander_Poverty': 'Hidden', 'Other_Race_Poverty': 'Hidden', 'Two_Or_More_Races_Poverty': 'Hidden', 'Hispanic_Or_Latino_Poverty': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Total Poverty': 'TextEdit', 'Male Poverty': 'TextEdit', 'Female Poverty': 'TextEdit', 'White Alone Poverty': 'TextEdit', 'Black Alone Poverty': 'TextEdit', 'American Indian Poverty': 'TextEdit', 'Asian Poverty': 'TextEdit', 'Pacific Islander Poverty': 'TextEdit', 'Other Race Poverty': 'TextEdit', 'Hispanic Or Latino Poverty': 'TextEdit', 'Two or More ': 'TextEdit', });
lyr_Otherrace_3.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'FID_2': 'Hidden', 'GEO_ID': 'Hidden', 'Total_Poverty': 'Hidden', 'Male_Poverty': 'Hidden', 'Female_Poverty': 'Hidden', 'White_Alone_Poverty': 'Hidden', 'Black_Alone_Poverty': 'Hidden', 'American_Indian_Poverty': 'Hidden', 'Asian_Poverty': 'Hidden', 'Pacific_Islander_Poverty': 'Hidden', 'Other_Race_Poverty': 'Hidden', 'Two_Or_More_Races_Poverty': 'Hidden', 'Hispanic_Or_Latino_Poverty': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Total Poverty': 'TextEdit', 'Male Poverty': 'TextEdit', 'Female Poverty': 'TextEdit', 'White Alone Poverty': 'TextEdit', 'Black Alone Poverty': 'TextEdit', 'American Indian Poverty': 'TextEdit', 'Asian Poverty': 'TextEdit', 'Pacific Islander Poverty': 'TextEdit', 'Other Race Poverty': 'TextEdit', 'Hispanic Or Latino Poverty': 'TextEdit', });
lyr_NativeHawaiianandOtherPacificIslander_4.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'FID_2': 'Hidden', 'GEO_ID': 'Hidden', 'Total_Poverty': 'Hidden', 'Male_Poverty': 'Hidden', 'Female_Poverty': 'Hidden', 'White_Alone_Poverty': 'Hidden', 'Black_Alone_Poverty': 'Hidden', 'American_Indian_Poverty': 'Hidden', 'Asian_Poverty': 'Hidden', 'Pacific_Islander_Poverty': 'Hidden', 'Other_Race_Poverty': 'Hidden', 'Two_Or_More_Races_Poverty': 'Hidden', 'Hispanic_Or_Latino_Poverty': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Total Poverty': 'TextEdit', 'Male Poverty': 'TextEdit', 'Female Poverty': 'TextEdit', 'White Alone Poverty': 'TextEdit', 'Black Alone Poverty': 'TextEdit', 'American Indian Poverty': 'TextEdit', 'Asian Poverty': 'TextEdit', 'Pacific Islander Poverty': 'TextEdit', 'Other Race Poverty': 'TextEdit', 'Hispanic Or Latino Poverty': 'TextEdit', });
lyr_Asian_5.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'FID_2': 'Hidden', 'GEO_ID': 'Hidden', 'Total_Poverty': 'Hidden', 'Male_Poverty': 'Hidden', 'Female_Poverty': 'Hidden', 'White_Alone_Poverty': 'Hidden', 'Black_Alone_Poverty': 'Hidden', 'American_Indian_Poverty': 'Hidden', 'Asian_Poverty': 'Hidden', 'Pacific_Islander_Poverty': 'Hidden', 'Other_Race_Poverty': 'Hidden', 'Two_Or_More_Races_Poverty': 'Hidden', 'Hispanic_Or_Latino_Poverty': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Total Poverty': 'TextEdit', 'Male Poverty': 'TextEdit', 'Female Poverty': 'TextEdit', 'White Alone Poverty': 'TextEdit', 'Black Alone Poverty': 'TextEdit', 'American Indian Poverty': 'TextEdit', 'Asian Poverty': 'TextEdit', 'Pacific Islander Poverty': 'TextEdit', 'Other Race Poverty': 'TextEdit', 'Hispanic Or Latino Poverty': 'TextEdit', });
lyr_AmericanIndianAlaskaNative_6.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'FID_2': 'Hidden', 'GEO_ID': 'Hidden', 'Total_Poverty': 'Hidden', 'Male_Poverty': 'Hidden', 'Female_Poverty': 'Hidden', 'White_Alone_Poverty': 'Hidden', 'Black_Alone_Poverty': 'Hidden', 'American_Indian_Poverty': 'Hidden', 'Asian_Poverty': 'Hidden', 'Pacific_Islander_Poverty': 'Hidden', 'Other_Race_Poverty': 'Hidden', 'Two_Or_More_Races_Poverty': 'Hidden', 'Hispanic_Or_Latino_Poverty': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Total Poverty': 'TextEdit', 'Male Poverty': 'TextEdit', 'Female Poverty': 'TextEdit', 'White Alone Poverty': 'TextEdit', 'Black Alone Poverty': 'TextEdit', 'American Indian Poverty': 'TextEdit', 'Asian Poverty': 'TextEdit', 'Pacific Islander Poverty': 'TextEdit', 'Other Race Poverty': 'TextEdit', 'Hispanic Or Latino Poverty': 'TextEdit', });
lyr_BlackorAfricanAmerican_7.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'FID_2': 'Hidden', 'GEO_ID': 'Hidden', 'Total_Poverty': 'Hidden', 'Male_Poverty': 'Hidden', 'Female_Poverty': 'Hidden', 'White_Alone_Poverty': 'Hidden', 'Black_Alone_Poverty': 'Hidden', 'American_Indian_Poverty': 'Hidden', 'Asian_Poverty': 'Hidden', 'Pacific_Islander_Poverty': 'Hidden', 'Other_Race_Poverty': 'Hidden', 'Two_Or_More_Races_Poverty': 'Hidden', 'Hispanic_Or_Latino_Poverty': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Total Poverty': 'TextEdit', 'Male Poverty': 'TextEdit', 'Female Poverty': 'TextEdit', 'White Alone Poverty': 'TextEdit', 'Black Alone Poverty': 'TextEdit', 'American Indian Poverty': 'TextEdit', 'Asian Poverty': 'TextEdit', 'Pacific Islander Poverty': 'TextEdit', 'Other Race Poverty': 'TextEdit', 'Hispanic Or Latino Poverty': 'TextEdit', });
lyr_White_8.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'FID_2': 'Hidden', 'GEO_ID': 'Hidden', 'Total_Poverty': 'Hidden', 'Male_Poverty': 'Hidden', 'Female_Poverty': 'Hidden', 'White_Alone_Poverty': 'Hidden', 'Black_Alone_Poverty': 'Hidden', 'American_Indian_Poverty': 'Hidden', 'Asian_Poverty': 'Hidden', 'Pacific_Islander_Poverty': 'Hidden', 'Other_Race_Poverty': 'Hidden', 'Two_Or_More_Races_Poverty': 'Hidden', 'Hispanic_Or_Latino_Poverty': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Total Poverty': 'TextEdit', 'Male Poverty': 'TextEdit', 'Female Poverty': 'TextEdit', 'White Alone Poverty': 'TextEdit', 'Black Alone Poverty': 'TextEdit', 'American Indian Poverty': 'TextEdit', 'Asian Poverty': 'TextEdit', 'Pacific Islander Poverty': 'TextEdit', 'Other Race Poverty': 'TextEdit', 'Hispanic Or Latino Poverty': 'TextEdit', });
lyr_Female_9.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'FID_2': 'Hidden', 'GEO_ID': 'Hidden', 'Total_Poverty': 'Hidden', 'Male_Poverty': 'Hidden', 'Female_Poverty': 'Hidden', 'White_Alone_Poverty': 'Hidden', 'Black_Alone_Poverty': 'Hidden', 'American_Indian_Poverty': 'Hidden', 'Asian_Poverty': 'Hidden', 'Pacific_Islander_Poverty': 'Hidden', 'Other_Race_Poverty': 'Hidden', 'Two_Or_More_Races_Poverty': 'Hidden', 'Hispanic_Or_Latino_Poverty': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Total Poverty': 'TextEdit', 'Male Poverty': 'TextEdit', 'Female Poverty': 'TextEdit', 'White Alone Poverty': 'TextEdit', 'Black Alone Poverty': 'TextEdit', 'American Indian Poverty': 'TextEdit', 'Asian Poverty': 'TextEdit', 'Pacific Islander Poverty': 'TextEdit', 'Other Race Poverty': 'TextEdit', 'Hispanic Or Latino Poverty': 'TextEdit', });
lyr_Male_10.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'FID_2': 'Hidden', 'GEO_ID': 'Hidden', 'Total_Poverty': 'Hidden', 'Male_Poverty': 'Hidden', 'Female_Poverty': 'Hidden', 'White_Alone_Poverty': 'Hidden', 'Black_Alone_Poverty': 'Hidden', 'American_Indian_Poverty': 'Hidden', 'Asian_Poverty': 'Hidden', 'Pacific_Islander_Poverty': 'Hidden', 'Other_Race_Poverty': 'Hidden', 'Two_Or_More_Races_Poverty': 'Hidden', 'Hispanic_Or_Latino_Poverty': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Total Poverty': 'TextEdit', 'Male Poverty': 'TextEdit', 'Female Poverty': 'TextEdit', 'White Alone Poverty': 'TextEdit', 'Black Alone Poverty': 'TextEdit', 'American Indian Poverty': 'TextEdit', 'Asian Poverty': 'TextEdit', 'Pacific Islander Poverty': 'TextEdit', 'Other Race Poverty': 'TextEdit', 'Hispanic Or Latino Poverty': 'TextEdit', });
lyr_CombinedPopulation_11.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'FID_2': 'Hidden', 'GEO_ID': 'Hidden', 'Total_Poverty': 'Hidden', 'Male_Poverty': 'Hidden', 'Female_Poverty': 'Hidden', 'White_Alone_Poverty': 'Hidden', 'Black_Alone_Poverty': 'Hidden', 'American_Indian_Poverty': 'Hidden', 'Asian_Poverty': 'Hidden', 'Pacific_Islander_Poverty': 'Hidden', 'Other_Race_Poverty': 'Hidden', 'Two_Or_More_Races_Poverty': 'Hidden', 'Hispanic_Or_Latino_Poverty': 'Hidden', 'state': 'Hidden', 'county': 'Hidden', 'tract': 'Hidden', 'Total Poverty': 'TextEdit', 'Male Poverty': 'TextEdit', 'Female Poverty': 'TextEdit', 'White Alone Poverty': 'TextEdit', 'Black Alone Poverty': 'TextEdit', 'American Indian Poverty': 'TextEdit', 'Asian Poverty': 'TextEdit', 'Pacific Islander Poverty': 'TextEdit', 'Other Race Poverty': 'TextEdit', 'Hispanic Or Latino Poverty': 'TextEdit', });
lyr_HispanicorLatino_1.set('fieldLabels', {'AFFGEOID': 'no label', 'Total Poverty': 'no label', 'Male Poverty': 'no label', 'Female Poverty': 'no label', 'White Alone Poverty': 'no label', 'Black Alone Poverty': 'no label', 'American Indian Poverty': 'no label', 'Asian Poverty': 'no label', 'Pacific Islander Poverty': 'no label', 'Other Race Poverty': 'no label', 'Hispanic Or Latino Poverty': 'header label', });
lyr_TwoorMoreRaces_2.set('fieldLabels', {'AFFGEOID': 'no label', 'Total Poverty': 'no label', 'Male Poverty': 'no label', 'Female Poverty': 'no label', 'White Alone Poverty': 'no label', 'Black Alone Poverty': 'no label', 'American Indian Poverty': 'no label', 'Asian Poverty': 'no label', 'Pacific Islander Poverty': 'no label', 'Other Race Poverty': 'no label', 'Hispanic Or Latino Poverty': 'no label', 'Two or More ': 'header label', });
lyr_Otherrace_3.set('fieldLabels', {'AFFGEOID': 'no label', 'Total Poverty': 'no label', 'Male Poverty': 'no label', 'Female Poverty': 'no label', 'White Alone Poverty': 'no label', 'Black Alone Poverty': 'no label', 'American Indian Poverty': 'no label', 'Asian Poverty': 'no label', 'Pacific Islander Poverty': 'no label', 'Other Race Poverty': 'header label', 'Hispanic Or Latino Poverty': 'no label', });
lyr_NativeHawaiianandOtherPacificIslander_4.set('fieldLabels', {'AFFGEOID': 'no label', 'Total Poverty': 'no label', 'Male Poverty': 'no label', 'Female Poverty': 'no label', 'White Alone Poverty': 'no label', 'Black Alone Poverty': 'no label', 'American Indian Poverty': 'header label', 'Asian Poverty': 'no label', 'Pacific Islander Poverty': 'no label', 'Other Race Poverty': 'no label', 'Hispanic Or Latino Poverty': 'no label', });
lyr_Asian_5.set('fieldLabels', {'AFFGEOID': 'no label', 'Total Poverty': 'no label', 'Male Poverty': 'no label', 'Female Poverty': 'no label', 'White Alone Poverty': 'no label', 'Black Alone Poverty': 'no label', 'American Indian Poverty': 'no label', 'Asian Poverty': 'header label', 'Pacific Islander Poverty': 'no label', 'Other Race Poverty': 'no label', 'Hispanic Or Latino Poverty': 'no label', });
lyr_AmericanIndianAlaskaNative_6.set('fieldLabels', {'AFFGEOID': 'no label', 'Total Poverty': 'no label', 'Male Poverty': 'no label', 'Female Poverty': 'no label', 'White Alone Poverty': 'no label', 'Black Alone Poverty': 'no label', 'American Indian Poverty': 'header label', 'Asian Poverty': 'no label', 'Pacific Islander Poverty': 'no label', 'Other Race Poverty': 'no label', 'Hispanic Or Latino Poverty': 'no label', });
lyr_BlackorAfricanAmerican_7.set('fieldLabels', {'AFFGEOID': 'no label', 'Total Poverty': 'no label', 'Male Poverty': 'no label', 'Female Poverty': 'no label', 'White Alone Poverty': 'no label', 'Black Alone Poverty': 'header label', 'American Indian Poverty': 'no label', 'Asian Poverty': 'no label', 'Pacific Islander Poverty': 'no label', 'Other Race Poverty': 'no label', 'Hispanic Or Latino Poverty': 'no label', });
lyr_White_8.set('fieldLabels', {'AFFGEOID': 'no label', 'Total Poverty': 'no label', 'Male Poverty': 'no label', 'Female Poverty': 'no label', 'White Alone Poverty': 'header label', 'Black Alone Poverty': 'no label', 'American Indian Poverty': 'no label', 'Asian Poverty': 'no label', 'Pacific Islander Poverty': 'no label', 'Other Race Poverty': 'no label', 'Hispanic Or Latino Poverty': 'no label', });
lyr_Female_9.set('fieldLabels', {'AFFGEOID': 'no label', 'Total Poverty': 'no label', 'Male Poverty': 'no label', 'Female Poverty': 'header label', 'White Alone Poverty': 'no label', 'Black Alone Poverty': 'no label', 'American Indian Poverty': 'no label', 'Asian Poverty': 'no label', 'Pacific Islander Poverty': 'no label', 'Other Race Poverty': 'no label', 'Hispanic Or Latino Poverty': 'no label', });
lyr_Male_10.set('fieldLabels', {'AFFGEOID': 'no label', 'Total Poverty': 'no label', 'Male Poverty': 'header label', 'Female Poverty': 'no label', 'White Alone Poverty': 'no label', 'Black Alone Poverty': 'no label', 'American Indian Poverty': 'no label', 'Asian Poverty': 'no label', 'Pacific Islander Poverty': 'no label', 'Other Race Poverty': 'no label', 'Hispanic Or Latino Poverty': 'no label', });
lyr_CombinedPopulation_11.set('fieldLabels', {'AFFGEOID': 'no label', 'Total Poverty': 'header label', 'Male Poverty': 'no label', 'Female Poverty': 'no label', 'White Alone Poverty': 'no label', 'Black Alone Poverty': 'no label', 'American Indian Poverty': 'no label', 'Asian Poverty': 'no label', 'Pacific Islander Poverty': 'no label', 'Other Race Poverty': 'no label', 'Hispanic Or Latino Poverty': 'no label', });
lyr_CombinedPopulation_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});