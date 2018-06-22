// overlay on top of canvas
// displays food selection, bg image selection, and info

import React, {Component} from 'react';

import Info from '../info';

class Overlay extends Component {
  render() {
    return(
      <div className="overlay" id="js-overlay">
        <Info />
      </div>
    );
  }
}

export default Overlay;
