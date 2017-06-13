import React from 'react';

class Tool extends React.Component {
  render () {
    var {id, icon} = this.props;
    var theClassName = icon + ' ' + 'tool';

    return (
      <i className={icon}
        onClick={() => {
          this.props.onClick({id})
        }}>
      </i>
    )
  }
}

export default Tool;
