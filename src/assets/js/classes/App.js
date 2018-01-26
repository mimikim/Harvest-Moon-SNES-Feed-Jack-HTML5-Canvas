class App {

  'use strict';

  constructor() {
    new View;

    this.setVars();
    this.setBackgroundImg();
    this.startAnimation();
    this.stopAnimation();
  }

  // method: set Vars
  setVars() {
    // selectors
    this.bgSelector = document.getElementById( 'background-selector' );
    this.foodSelector = document.getElementById( 'food-selector' );

    // buttons
    this.btnStart = document.getElementById( 'start-animation' );
    this.btnStop = document.getElementById( 'stop-animation' );

    // global var
    window.hmcanvas = {};
    window.hmcanvas.requestID = undefined;
    window.hmcanvas.frameIndex = 0;

    // add canvas
    window.hmcanvas.canvas = document.getElementById( 'eating' );
    window.hmcanvas.ctx = window.hmcanvas.canvas.getContext( '2d' );

    // init class instances
    window.hmcanvas.food = new Food;
    window.hmcanvas.jack = new Jack;
  }

  // method: set Background image
  setBackgroundImg() {

    this.bgSelector.addEventListener( 'submit', e => {
      e.preventDefault();

      let select = document.getElementById( 'background-select' );
      let canvas_container = document.getElementById( 'canvas-container' );

      // selected background url
      const background_url = select.options[ select.selectedIndex ].value;

      // change css for "canvas-container"
      canvas_container.style.backgroundImage = 'url(' + background_url + ')';
    } );
  }

  // method: start Animation event listener
  startAnimation() {

    this.foodSelector.addEventListener( 'submit', e => {
      e.preventDefault();

      this.btnStart.value = 'Change Food Item';

      window.hmcanvas.frameIndex = 0;

      // get selected food img
      window.hmcanvas.food.getData();

      if ( ! window.hmcanvas.requestID ) {
        window.hmcanvas.jack.loop();
      }

    } );

  }

  // method: stop Animation event listener
  stopAnimation() {

    this.btnStop.addEventListener( 'click', () => {

      if ( window.hmcanvas.requestID ) {
        window.cancelAnimationFrame( window.hmcanvas.requestID );
        window.hmcanvas.requestID = undefined;
      }

      this.btnStart.value = 'Start Animation';

      window.hmcanvas.frameIndex = 0;

      Jack.clearCanvas();
      window.hmcanvas.jack.reset();

    } );
  }
}