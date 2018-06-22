// overlay on top of canvas
// displays food selection, bg image selection, and info

import React, {Component} from 'react';

import Food from './Food/Food';
import Background from './Background/Background';
import Info from './Info/Info';

class Overlay extends Component {
  render() {
    return(
      <div className="overlay" id="js-overlay">
        <Food />
        <Background />
        <Info />
      </div>
    );
  }
}

export default Overlay;
