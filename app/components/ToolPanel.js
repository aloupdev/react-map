import React from 'react';
require("foundation-icons/foundation-icons.css");
import Tool from './Tool';

class ToolPanel extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (tool) {

    switch (tool.id) {
      case "5":
        console.log(tool.id);
        break;
      default:
        alert('Tool: ' + tool.id + ' ' + 'Not implemeted yet!')
    }
  }

  render () {

    return (
      <ul className='tool-panel'>
        <li className='tool'>
          <Tool icon='fi-zoom-in' id='1' onClick={this.handleClick}/>
        </li>
        <li className='tool'>
          <Tool icon='fi-zoom-out' id='2' onClick={this.handleClick}/>
        </li>
        <li className='tool'>
          <Tool icon='fi-magnifying-glass' id='3' onClick={this.handleClick}/>
        </li>
        <li className='tool'>
          <Tool icon='fi-info' id='4' onClick={this.handleClick}/>
        </li>
        <li className='tool'>
          <Tool icon='fi-home' id='5' onClick={this.handleClick}/>
        </li>
      </ul>
    )
  }
}

export default ToolPanel;
