import React from 'react';

class LayerListItem extends React.Component {

  render () {
    var {layer} = this.props;
    var layerId = layer.get('id');
    var layerTitle = layer.get('title');
    var layerVisible = layer.getVisible();

    return (
        <a className="layer-list-item" onClick={() => {this.props.onToggle(layerId)}}>
            <input className='checkbox' type='checkbox' checked={layerVisible}/>
            {layerTitle}
        </a>
    )
  };
};

export default LayerListItem;
