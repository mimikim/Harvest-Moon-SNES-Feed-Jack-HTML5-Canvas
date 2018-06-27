import React, {Component} from 'react';
import './Canvas.css';

class Canvas extends Component {

  // loads after component is inserted into dom tree
  componentDidMount() {
    const { onCanvasLoad } = this.props;
    onCanvasLoad( this.refs.canvas );
  }

  render() {
    const { onCanvasLoad } = this.props;
    return (
      <canvas ref="canvas" className="canvas" height="500" width="500">Canvas is not supported by your browser</canvas>
    );
  }

}

export default Canvas;
