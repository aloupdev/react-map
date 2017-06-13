import React from 'react';
var ol = require('openlayers');

import LayerListItem from './LayerListItem';

class LayerList extends React.Component {

  render () {
    var {olmap, onToggle} = this.props;

    var groups = [];
    var items = olmap.getLayers().getArray().slice(0).reverse();

    items.forEach((item) => {
      if (item instanceof ol.layer.Group) {
        groups.push(item);
      }
    });

    var renderGroups = () => {

      return groups.map((group) => {
        var groupId = group.get('id');
        var groupTitle = group.get('title');

        return (
          <li key={groupId}>
            <a href="#" className='group'>{groupTitle}</a>
            <ul className="menu vertical nested">
              {renderLayers(group)}
            </ul>
          </li>
        )
      })
    }

    var renderLayers = (group) => {
      var layers = group.getLayers().getArray().slice(0).reverse();

      return layers.map((layer) => {
        var layerId = layer.get('id');
        var layerTitle = layer.get('title');

        return (
          <li key={layerId}>
            <LayerListItem layer={layer} onToggle={onToggle}/>
          </li>
        )
      })
    }

    return (
      <div className='layer-list'>
        <ul className="vertical menu" data-accordion-menu>
          {renderGroups()}
        </ul>
      </div>
    )
  };
};

export default LayerList;
