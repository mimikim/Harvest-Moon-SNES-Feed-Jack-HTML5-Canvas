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
    // button
    this.btnStart = document.getElementById( 'js-start' );
    this.bg = document.getElementById( 'js-background-select' );

    // global var
    window.hmcanvas = window.hmcanvas || {};
    window.hmcanvas.requestID = undefined;
    window.hmcanvas.frameIndex = 0;

    // add canvas
    window.hmcanvas.canvas = document.getElementById( 'js-canvas' );
    window.hmcanvas.ctx = window.hmcanvas.canvas.getContext( '2d' );

    // init class instances
    window.hmcanvas.food = new Food;
    window.hmcanvas.jack = new Jack;
  }

  // method: change Background image
  setBackgroundImg() {
    this.bg.addEventListener( 'change', () => {
      const background_url = this.bg.options[ this.bg.selectedIndex ].value;
      document.getElementById( 'js-canvas-container' ).style.backgroundImage = `url('${background_url}')`;
    });
  }

  // method: start Animation event listener
  startAnimation() {
    document.getElementById( 'js-food-form' ).addEventListener( 'submit', e => {
      e.preventDefault();

      this.btnStart.value = 'Change Food Item';
      window.hmcanvas.frameIndex = 0;

      let selector = document.getElementById( 'js-food-select' );
      window.hmcanvas.food.getData( selector );

      if ( ! window.hmcanvas.requestID ) {
        window.hmcanvas.jack.loop();
      }

    } );
  }

  // method: stop Animation event listener
  stopAnimation() {
    document.getElementById( 'js-stop' ).addEventListener( 'click', () => {

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