import React from 'react';

class Map extends React.Component {
  componentDidMount () {
    var {olmap} = this.props;
    olmap.setTarget('olmap');
  }

  render () {
    return (
      <div>
        <div id='olmap' className='olmap'></div>
      </div>

    )
  };
};

export default Map;
