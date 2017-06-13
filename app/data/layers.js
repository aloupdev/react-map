var ol = require('openlayers');

var url_dls_cadastral = 'http://eservices.dls.moi.gov.cy/arcgis/rest/services/National/CadastralMap_EN/MapServer';

var dls_parcels = new ol.layer.Image({
  id: 0,
  title: 'Parcels',
  type: 'overlay',
  visible: true,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 0',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_indxcas_5000 = new ol.layer.Image({
  id: 2,
  title: 'Cassini 1:5000',
  type: 'overlay',
  visible: true,
  opacity: 1,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 2',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_indxcas_2500 = new ol.layer.Image({
  id: 3,
  title: 'Cassini 1:2500',
  type: 'overlay',
  visible: true,
  opacity: 1,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 3',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_indxcas_1250 = new ol.layer.Image({
  id: 4,
  title: 'Cassini 1:1250',
  type: 'overlay',
  visible: true,
  opacity: 1,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 5',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_indxcas_1000 = new ol.layer.Image({
  id: 5,
  title: 'Cassini 1:1000',
  type: 'overlay',
  visible: true,
  opacity: 1,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 4',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_indxcas_500 = new ol.layer.Image({
  id: 6,
  title: 'Cassini 1:500',
  type: 'overlay',
  visible: true,
  opacity: 1,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 6',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_indxltm_2000 = new ol.layer.Image({
  id: 7,
  title: 'LTM 1:2000',
  type: 'overlay',
  visible: true,
  opacity: 1,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 7',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_indxltm_1000 = new ol.layer.Image({
  id: 8,
  title: 'LTM 1:1000',
  type: 'overlay',
  visible: true,
  opacity: 1,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 8',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_development_plans = new ol.layer.Image({
  id: 10,
  title: 'Development Plans',
  type: 'overlay',
  visible: true,
  opacity: 1,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 10',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_planning_zones = new ol.layer.Image({
  id: 10,
  title: 'Planning Zones',
  type: 'overlay',
  visible: true,
  opacity: 1,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 11',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_postal_code_areas = new ol.layer.Image({
  id: 12,
  title: 'Postal Code Areas',
  type: 'overlay',
  visible: true,
  opacity: 1,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 12',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_admin_dist = new ol.layer.Image({
  id: 14,
  title: 'Districts',
  type: 'overlay',
  visible: true,
  opacity: 0.5,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 14',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_admin_vil = new ol.layer.Image({
  id: 15,
  title: 'Villages',
  type: 'overlay',
  visible: true,
  opacity: 0.5,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 15',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_admin_qrtr = new ol.layer.Image({
  id: 16,
  title: 'Quarters',
  type: 'overlay',
  visible: true,
  opacity: 0.5,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 16',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_admin_blck = new ol.layer.Image({
  id: 17,
  title: 'Blocks',
  type: 'overlay',
  visible: true,
  opacity: 0.5,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 17',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_buildings = new ol.layer.Image({
  id: 28,
  title: 'Buildings',
  type: 'overlay',
  visible: true,
  opacity: 0.7,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 28, 29',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_contours = new ol.layer.Image({
  id: 30,
  title: 'Contour Lines',
  type: 'overlay',
  visible: true,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: {
      layers: 'show: 30',
      format: 'png8'
    },
    url: url_dls_cadastral
  })
});

var dls_hillshade_1993 = new ol.layer.Image({
  id: 51,
  title: 'Hillshade 1993',
  type: 'base',
  visible: false,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: { format: 'jpg' },
    url: 'http://eservices.dls.moi.gov.cy/arcgis/rest/services/BASEMAPS/Imagery_HillShade_1993/MapServer'
  })
});

var dls_orthophoto_1963 = new ol.layer.Image({
  id: 52,
  title: 'Orthophoto 1963',
  type: 'base',
  visible: false,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: { format: 'jpg' },
    url: 'http://eservices.dls.moi.gov.cy/arcgis/rest/services/BASEMAPS/Imagery_Orthophoto_1963/MapServer'
  })
});

var dls_orthophoto_1993 = new ol.layer.Image({
  id: 53,
  title: 'Orthophoto 1993',
  type: 'base',
  visible: false,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: { format: 'jpg' },
    url: 'http://eservices.dls.moi.gov.cy/arcgis/rest/services/BASEMAPS/Imagery_Orthophoto_1993/MapServer'
  })
});

var dls_orthophoto_2014 = new ol.layer.Image({
  id: 54,
  title: 'Orthophoto 2014',
  type: 'base',
  visible: false,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: { format: 'jpg' },
    url: 'http://eservices.dls.moi.gov.cy/arcgis/rest/services/BASEMAPS/Imagery_Orthophoto_2014/MapServer'
  })
});

var dls_satellite_2009_2013 = new ol.layer.Image({
  id: 55,
  title: 'Satellite 2009-2013',
  type: 'base',
  visible: false,
  source: new ol.source.ImageArcGISRest({
    crossOrigin: 'anonymous',
    ratio: 1,
    params: { format: 'jpg' },
    url: 'http://eservices.dls.moi.gov.cy/arcgis/rest/services/BASEMAPS/Imagery_Satellite_2009_2013/MapServer'
  })
});

// public data providers
var osm = new ol.layer.Tile({
  id: 61,
  title: 'Open Street Map',
  type: 'base',
  visible: true,
  source: new ol.source.OSM()
});

var arcgis_online_imagery = new ol.layer.Image({
  id: 62,
  title: 'ArcGIS Earth Imagery',
  type: 'base',
  visible: false,
  source: new ol.source.ImageArcGISRest({
    attributions: [new ol.Attribution({
    html: "ArcGIS online imagery"})],
    ratio: 1,
    params: { format: 'jpg' },
    url: 'http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
  })
});

var google_maps = new ol.layer.Tile({
  id: 63,
  title: 'Google Maps',
  type: 'base',
  visible: false,
  source: new ol.source.OSM({
    url: 'http://mt{0-3}.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
    attributions: [
      new ol.Attribution({ html: '© Google' }),
      new ol.Attribution({ html: '<a href="https://developers.google.com/maps/terms">Terms of Use.</a>' })
    ]
  })
});

var google_satellite = new ol.layer.Tile({
  id: 64,
  title: 'Google Satellite',
  type: 'base',
  visible: false,
  source: new ol.source.OSM({
    url: 'http://mt{0-3}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    attributions: [
      new ol.Attribution({ html: '© Google' }),
      new ol.Attribution({ html: '<a href="https://developers.google.com/maps/terms">Terms of Use.</a>' })
    ]
  })
});

var google_hybrid = new ol.layer.Tile({
  id: 65,
  title: 'Google Hybrid',
  type: 'base',
  visible: false,
  source: new ol.source.OSM({
    url: 'http://mt{0-3}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
    attributions: [
      new ol.Attribution({ html: '© Google' }),
      new ol.Attribution({ html: '<a href="https://developers.google.com/maps/terms">Terms of Use.</a>' })
    ]
  })
});

var bing_road = new ol.layer.Tile({
  id: 66,
  title: 'Bing Road Map',
  type: 'base',
  visible: false,
  preload: Infinity,
  source: new ol.source.BingMaps({
    key: 'AgUahxD62GRe1GRaB330KB4Ny1xfK_wPng6kY3szoBmopN_HspxlDinZVzYmmJ-X',
    imagerySet: 'Road',
    maxZoom: 19
  })
});

var bing_aerial = new ol.layer.Tile({
  id: 67,
  title: 'Bing Aerial Map',
  type: 'base',
  visible: false,
  preload: Infinity,
  source: new ol.source.BingMaps({
    key: 'AgUahxD62GRe1GRaB330KB4Ny1xfK_wPng6kY3szoBmopN_HspxlDinZVzYmmJ-X',
    imagerySet: 'Aerial',
    maxZoom: 19
  })
});

var bing_aerial_with_labels = new ol.layer.Tile({
  id: 68,
  title: 'Bing Aerial with Labels',
  type: 'base',
  visible: false,
  preload: Infinity,
  source: new ol.source.BingMaps({
    key: 'AgUahxD62GRe1GRaB330KB4Ny1xfK_wPng6kY3szoBmopN_HspxlDinZVzYmmJ-X',
    imagerySet: 'AerialWithLabels',
    maxZoom: 19
  })
});

export var basemap_layers = new ol.layer.Group({
  id: 101,
  title: "Basemap Layers",
  layers: [
    arcgis_online_imagery,
    bing_aerial_with_labels,
    bing_aerial,
    bing_road,
    google_hybrid,
    google_satellite,
    google_maps,
    osm
  ]
});

export var dls_cadastral_layers = new ol.layer.Group({
  id: 102,
  title: "Cadastral Layers",
  layers: [
    dls_contours,
    dls_buildings,
    dls_parcels
  ]
});

export var dls_cassini_index_layers = new ol.layer.Group({
  id: 103,
  title: "Cassini Plan Index",
  layers: [
    dls_indxcas_5000,
    dls_indxcas_2500,
    dls_indxcas_1250,
    dls_indxcas_1000,
    dls_indxcas_500
  ]
});

export var dls_ltm_index_layers = new ol.layer.Group({
  id: 104,
  title: "LTM Plan Index",
  layers: [
    dls_indxltm_2000,
    dls_indxltm_1000
  ]
})

export var dls_planning_zone_layers = new ol.layer.Group({
  id: 105,
  title: "Planning Zones",
  layers: [
    dls_development_plans,
    dls_planning_zones
  ]
})

export var dls_postal_code_areas = new ol.layer.Group({
  id: 106,
  title: "Postal Code Areas",
  layers: [
    dls_postal_code_areas
  ]
})

export var dls_admin_layers = new ol.layer.Group({
  id: 107,
  title: "Administrative Areas",
  layers: [
    dls_admin_dist,
    dls_admin_vil,
    dls_admin_qrtr,
    dls_admin_blck,
  ]
})

export var dls_basemap_layers = new ol.layer.Group({
  id: 108,
  title: "DLS Basemap Layers",
  layers: [
    dls_hillshade_1993,
    dls_orthophoto_1963,
    dls_orthophoto_1993,
    dls_orthophoto_2014,
    dls_satellite_2009_2013
  ]
});
