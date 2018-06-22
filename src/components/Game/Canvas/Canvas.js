import React, {Component} from 'react';

import './Canvas.css';

class Canvas extends Component {
  render() {
    return (
      <div className="canvas-container" id="js-canvas-container">
        <canvas className="canvas" id="js-canvas" height="500" width="500">Canvas is not supported by your browser</canvas>
      </div>
    );
  }
}

export default Canvas;
