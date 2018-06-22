// pause, play animation

import React, {Component} from 'react';

import './Controls.css';

class Controls extends Component {
  render() {
    return(
      <div className="controller">
        <button className="icon-play">Play/Pause</button>
        <button className="icon-pause">Pause</button>
        <button className="icon-stop">Stop</button>
        <button className="icon-fast-fw">Next Frame</button>
        <button className="icon-fast-bw">Previous Frame</button>
      </div>
    );
  }
}

export default Controls;