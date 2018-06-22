// draws any "draw object" passed
/*
{
  jack: {
    img url
    jack x pos
    jack y pos
  }

  food: {
    url
    x pos
    y pos
  }

  current frame index

  control: {
    option: stop/pause/play/nextFrame/lastFrame
  }

  stop: true/false: clears frame & redraws default
  pause: stops animation loop
  play: starts loop
  nextFrame: true/false
  lastFrame: true/false

}
 */

import React, {Component} from 'react';

import './Canvas.css';

class Canvas extends Component {
  constructor(prop) {
    super(prop);

    // initialize canvas
    this.requestID = undefined;
    this.frameIndex = 0;

    // frame ticks
    this.tickCount = 0;
    this.ticksPerFrame = 15;
    this.numberOfFrames = 11;

    // jack image
    this.jackImage = new Image();
    this.jackImage.src = this.props.options.jack.url;
    this.jackImage.xpos = this.props.options.jack.xpos;
    this.jackImage.ypos = this.props.options.jack.ypos;

    // if food is not undefined
    if ( this.props.options.food !== undefined ) {

    }

    this.clearCanvas = this.clearCanvas.bind(this);
    this.renderFrame = this.renderFrame.bind(this);
    this.reset = this.reset.bind(this);
  }

  // loads after component is inserted into dom tree
  componentDidMount() {
    this.canvas = this.refs.canvas;
    this.ctx = this.canvas.getContext( '2d' );

    this.reset();
  }

  renderFrame( frameIndex ) {
    this.ctx.drawImage (
      this.jackImage,
      (frameIndex * 1045) / 11,
      0,
      95,
      120,
      this.jackImage.xpos,
      this.jackImage.ypos,
      95,
      120
    );
  }

  clearCanvas() {
    this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
  }

  reset() {
    const jackObj = this.props.options.jack;
    const xpos = jackObj.xpos + 5;
    const ypos = jackObj.ypos + 5;

    let jackStanding = new Image();
    jackStanding.src = "./images/jack-standing.png";

    jackStanding.onload = () => {
      this.ctx.drawImage( jackStanding, xpos, ypos );
    };
  }

  render() {

    return (
      <div className="canvas-container" id="js-canvas-container">
        <canvas ref="canvas" className="canvas" id="js-canvas" height="500" width="500">Canvas is not supported by your browser</canvas>
      </div>
    );
  }
}

export default Canvas;
