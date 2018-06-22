// overlay on top of canvas
// displays food selection, bg image selection, and info

import React, {Component} from 'react';

import Food from './Food/Food';
import Background from './Background/Background';
import Info from './Info/Info';

import './Overlay.css';

class Overlay extends Component {
  render() {
    return(
      <div className="overlay" id="js-overlay">
        <button className="button" id="js-overlay-button">Show Overlay</button>
        <div className="content">
          <Food />
          <Background />
          <Info />
        </div>
      </div>
    );
  }
}

export default Overlay;
