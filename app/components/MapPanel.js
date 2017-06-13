import React from 'react';
var ol = require('openlayers');
require('openlayers/css/ol.css');

import LayerList from './LayerList';
import Map from './Map';
import MapToc from './MapToc';

import ToolPanel from './ToolPanel';

var {basemap_layers,
     dls_basemap_layers,
     dls_cadastral_layers,
     dls_ltm_index_layers,
     dls_cassini_index_layers,
     dls_admin_layers} = require('../data/layers');

class MapPanel extends React.Component {
  componentDidMount () {
    $(document).foundation();
  }

  constructor (props) {
    super();

    var olmapAll = new ol.Map({
      layers: [
        basemap_layers,
        dls_basemap_layers,
        dls_cadastral_layers,
        dls_ltm_index_layers,
        dls_cassini_index_layers,
        dls_admin_layers
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([33, 35]),
        zoom: 9
      })
    });

    var olmapCadastral = new ol.Map({
      layers: [
        basemap_layers,
        dls_cadastral_layers,
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([33, 35]),
        zoom: 9
      })
    });

    this.state = {olmap: olmapAll}

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle (id) {
    var {olmap} = this.state;

    olmap.getLayers().getArray().map((item) => {
      if (item instanceof ol.layer.Group) {
        if (item.get('id') === id) {
          console.log('Group: ', id);
          item.setVisible(!item.getVisible());
        }
        item.getLayers().getArray().map((layer) => {
          if (layer.get('id') === id) {
            console.log('Layer: ', id, layer.get('title'));
            layer.setVisible(!layer.getVisible());
          }
          return layer;
        });
      }
    });

    this.setState({
      olmap: olmap
    })

  }

  render () {
    var {olmap} = this.state;

    return (
      <div className="row">
        <div className="map-panel">
          <MapToc olmap={olmap} onToggle={this.handleToggle}/>
          <Map olmap={olmap}/>
          <ToolPanel/>
        </div>
      </div>
    )
  };
};

module.exports = MapPanel;
