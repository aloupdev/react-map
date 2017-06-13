import React from 'react';
var ol = require('openlayers');

import LayerListItem from './LayerListItem';

class LayerList extends React.Component {

  render () {
    var {olmap, onToggle} = this.props;

    var renderLayers = () => {
      var items = olmap.getLayers().getArray().slice(0).reverse();

      return items.map((item, i) => {

        if (item instanceof ol.layer.Group) {
          var group = item;
          var groupId = group.get('id');
          var groupTitle = group.get('title');

          // console.log('->Group: ', i, groupId, groupTitle);

          var layers = group.getLayers().getArray().slice(0).reverse();

          return layers.map((layer, j) => {
            var layerId = layer.get('id');
            var layerTitle = layer.get('title');

            // console.log('  ->Layer: ', j, layerId, layerTitle);

            return (
              <div>
                {j == 0 &&
                  <div className="group">
                    <LayerListItem key={groupId} layer={group} onToggle={onToggle}/>
                  </div>
                }
                <LayerListItem key={layerId} layer={layer} onToggle={onToggle}/>
              </div>
            )

          })
        }
      });
    }

    return (
      <div className='map-toc'>
        {renderLayers()}
      </div>
    )
  };
};

export default LayerList;
