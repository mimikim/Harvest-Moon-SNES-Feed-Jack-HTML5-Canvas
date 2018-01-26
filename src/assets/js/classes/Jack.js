class Jack {

  'use strict';

  constructor() {
    this.setVars();
    this.reset();
  }

  setVars() {
    // jack obj
    this.jackImage = new Image();
    this.jackImage.src = "./assets/images/jack-eating.png";
    this.jackImage.xpos = 200;
    this.jackImage.ypos = 240;

    // frame ticks
    this.tickCount = 0;
    this.ticksPerFrame = 15;
    this.numberOfFrames = 11;
  }

  // static method: clears canvas
  static clearCanvas() {
    window.hmcanvas.ctx.clearRect( 0, 0,  window.hmcanvas.canvas.width,  window.hmcanvas.canvas.height );
  }

  // method: animation loop. runs repeatedly, updating tickCount until its time to redraw the next frame
  loop() {

    this.tickCount += 1;

    // once tickcount > ticksperframe, we can update to the next frame
    if ( this.tickCount > this.ticksPerFrame ) {

      // set wait counter back to 0
      this.tickCount = 0;

      // increment frameIndex until one before the last frame
      let isInRange = window.hmcanvas.frameIndex < ( this.numberOfFrames - 1 );
      window.hmcanvas.frameIndex = isInRange ? window.hmcanvas.frameIndex += 1 : 0;

      Jack.clearCanvas();
      this.renderFrame( window.hmcanvas.frameIndex );

      // only draw food for the first 3 frames
      if( window.hmcanvas.frameIndex < 3 ) {
        window.hmcanvas.food.draw();
      }
    }

    // remember to use either this.loop.bind(this), or use arrow function to ensure correct "this"
    window.hmcanvas.requestID = window.requestAnimationFrame( () => this.loop() );
  }

  // method: renders frame
  /**
   * Parameters:
   *  image
   *  x coordinates where to start clipping
   *  y coordinate where to start clipping
   *  width of clipped portion
   *  height of clipped portion
   *  x coordinate to place the image
   *  y coordinate to place the image
   *  width of image
   *  height of image
   */
  renderFrame( frameIndex ) {
    window.hmcanvas.ctx.drawImage(
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

  // method: resets Jack sprite
  reset() {
    let jackStanding = new Image();
    jackStanding.src = "./assets/images/jack-standing.png";

    jackStanding.onload = () => {
      window.hmcanvas.ctx.drawImage( jackStanding, this.jackImage.xpos+5, this.jackImage.ypos+5 );
    };
  }

}
