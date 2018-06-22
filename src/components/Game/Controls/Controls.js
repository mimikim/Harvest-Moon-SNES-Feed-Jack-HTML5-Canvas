// pause, play animation

import React, {Component} from 'react';

import './Controls.css';

class Controls extends Component {
  render() {
    return(
      <div className="controller">
        <div>Play/Pause</div>
        <div>Stop</div>
        <div>Next Frame</div>
        <div>Previous Frame</div>
      </div>
    );
  }
}

export default Controls;