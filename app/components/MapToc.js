import React from 'react';
import LayerList from './LayerList';

class MapToc extends React.Component {

  render () {
    var {olmap} = this.props;

    return (
      <div className='map-toc'>
        <ul className="tabs" data-tabs id="example-tabs">
          <li className="tabs-title is-active"><a href="#panel1" aria-selected="true">TOC</a></li>
          <li className="tabs-title"><a href="#panel2">Search</a></li>
          <li className="tabs-title"><a href="#panel3">Results</a></li>
        </ul>

        <div className="tabs-content" data-tabs-content="example-tabs">
          <div className="tabs-panel is-active" id="panel1">
            <p className='header'>Table of Contents</p>
            <LayerList olmap={olmap} onToggle={this.props.onToggle}/>
          </div>
          <div className="tabs-panel" id="panel2">
            <p>Search</p>
          </div>
          <div className="tabs-panel" id="panel3">
            <p>Reuslts</p>
          </div>
        </div>

      </div>
    )
  }
}

export default MapToc;
