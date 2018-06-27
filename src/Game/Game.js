import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import { setBackground, setFood } from "./actions";

import Canvas from './Canvas/Canvas';
import Food from './Food/Food';
import Background from './Background/Background';

import './Game.css';
import './Overlay.css';
import './icon-font.css';

class Game extends Component {
  constructor(props) {
    super(props);

    // properties
    this.state = { isActive: false };
    this.canvas = undefined;
    this.ctx = undefined;

    this.jack = new Image();
    this.jack.src =  this.props.store.jack.url;
    this.jack.xpos = this.props.store.jack.xpos;
    this.jack.ypos = this.props.store.jack.ypos;

    this.frameIndex = 0;
    this.numberOfFrames = 11;
    this.requestID = undefined;
    this.tickCount = 0;
    this.ticksPerFrame = 15;

    // methods
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.setBackgroundSelection = this.setBackgroundSelection.bind(this);
    this.setFoodSelection = this.setFoodSelection.bind(this);

    this.loadCanvas = this.loadCanvas.bind(this);
    this._renderFrame = this._renderFrame.bind(this);
    this._loop = this._loop.bind(this);
    this._clearCanvas = this._clearCanvas.bind(this);
    this._reset = this._reset.bind(this);
    this._setFoodObj = this._setFoodObj.bind(this);

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.stop = this.stop.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  toggleOverlay(e) {
    let id = e.target.id;

    // if current button is not active, display content
    if ( ! e.target.classList.contains('active') ) {
      this.setState( () => ( {
        isActive: true,
        selection: id
      }));
    } else {
      // else, if button is active, hide overlay
      this.setState( () => ( {
        isActive: false
      }));
    }
  }

  setBackgroundSelection(e) {
    let target;
    let newBG;

    // determine correct target
    if ( e.target.dataset.url !== undefined ) {
      target = e.target;
      newBG = e.target.dataset.url;
    } else {
      target = e.target.parentNode;
      newBG = e.target.parentNode.dataset.url;
    }

    // remove selected class from all siblings
    target.parentNode.childNodes.forEach( function( elm ) {
      elm.classList.remove('selected');
    });

    target.classList.add('selected');

    // update store with new bg url
    let bgAction = setBackground( newBG );
    this.props.dispatchAction( bgAction );

    // close overlay
    this.setState( () => ( {
      isActive: false
    }));
  }

  setFoodSelection(e) {
    let target;
    let food = {};

    // determine correct target
    if ( e.target.dataset.url !== undefined ) {
      target = e.target;
      food = {
        url  : e.target.dataset.url,
        xpos : e.target.dataset.xvalue,
        ypos : e.target.dataset.yvalue
      };
    } else {
      target = e.target.parentNode;
      food = {
        url  : e.target.parentNode.dataset.url,
        xpos : e.target.parentNode.dataset.xvalue,
        ypos : e.target.parentNode.dataset.yvalue
      };
    }

    // remove selected class from all siblings
    target.parentNode.childNodes.forEach( function( elm ) {
      elm.classList.remove('selected');
    });
    target.classList.add('selected');

    // update active food sprite in store
    let bgAction = setFood( food );
    this.props.dispatchAction( bgAction );

    // close overlay, stop animation
    this.setState( () => ( {
      isActive: false
    }));

    this._setFoodObj();
    this.stop();
    this.play();
  }

  loadCanvas( canvasElm ) {
    this.canvas = canvasElm;
    this.ctx = canvasElm.getContext( '2d' );
    this._setFoodObj();
    this._reset();
  }

  // starts canvas animation loop
  play() {
    this.frameIndex = 0;
    if ( ! this.requestID ) {
      this._loop();
    }
  }

  // pauses frame
  pause() {
    if ( this.requestID ) {
      window.cancelAnimationFrame( this.requestID );
      this.requestID = undefined;
    }
  }

  // stops and completely resets jack
  stop() {
    if ( this.requestID ) {
      window.cancelAnimationFrame( this.requestID );
      this.requestID = undefined;
    }

    this.frameIndex = 0;
    this._clearCanvas();
    this._reset();
  }

  // pauses, increment frame, render jack
  increment() {
    this.pause();
    this._clearCanvas();
    this.frameIndex = ( this.frameIndex ===  (this.numberOfFrames - 1) ) ? 0 : this.frameIndex + 1;
    this._renderFrame( this.frameIndex );
  }

  // decrement frame, render jack
  decrement() {
    this.pause();
    this._clearCanvas();
    this.frameIndex = ( this.frameIndex === 0 ) ? (this.numberOfFrames - 1) : this.frameIndex - 1;
    this._renderFrame( this.frameIndex );
  }

  // updates food image from store
  _setFoodObj() {
    this.food = new Image();
    this.food.src =  this.props.store.food.url;
    this.food.xpos = this.props.store.food.xpos;
    this.food.ypos = this.props.store.food.ypos;
  }

  // renders frameIndex frame
  _renderFrame( frameIndex ) {
    let viewHeight = 120;
    let viewWidth = 95;
    let clipX = (frameIndex * 1045) / 11;

    this.ctx.drawImage (
      this.jack, clipX, 0, viewWidth, viewHeight, this.jack.xpos, this.jack.ypos, viewWidth, viewHeight
    );

    // only draw food for the first 3 frames
    if( this.frameIndex < 3 ) {
      this.ctx.drawImage( this.food, this.food.xpos, this.food.ypos );
    }
  }

  // loop animation
  _loop() {
    this.tickCount += 1;

    // once tickcount > ticksperframe, we can update to the next frame
    if ( this.tickCount > this.ticksPerFrame ) {

      // set wait counter back to 0
      this.tickCount = 0;

      // increment frameIndex until one before the last frame
      let isInRange = this.frameIndex < ( this.numberOfFrames - 1 );
      this.frameIndex = isInRange ? this.frameIndex += 1 : 0;

      this._clearCanvas();
      this._renderFrame( this.frameIndex );
    }

    // remember to use either this.loop.bind(this), or use arrow function to ensure correct "this"
    this.requestID = window.requestAnimationFrame( this._loop );
  }

  _clearCanvas() {
    this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
  }

  _reset() {
    const jackStanding = new Image();
    jackStanding.src =  this.props.store.jackStanding.url;
    jackStanding.xpos = this.props.store.jackStanding.xpos;
    jackStanding.ypos = this.props.store.jackStanding.ypos;

    jackStanding.onload = function() {
      this.ctx.drawImage( jackStanding, jackStanding.xpos, jackStanding.ypos );
    }.bind(this);
  }

  render() {
    const background = this.props.store.background;
    const isToggled = this.state.isActive;

    let activeClass = ( isToggled ) ? ' active' : '';
    let foodClass = 'button icon-food';
    let bgClass = 'button icon-picture';
    let content;

    switch ( this.state.selection ) {
      case 'food':
        content =  <Food onSelectionChange={this.setFoodSelection} />;
        foodClass += activeClass;
        break;
      case 'background':
        content = <Background onSelectionChange={this.setBackgroundSelection} />;
        bgClass += activeClass;
        break;
      default:
        break;
    }

    return (
      <div className="app">
        <div id="js-game" className="game-container">

          <div className="game-canvas" style={{ backgroundImage: `url(${background})`}}>

            <div className={`overlay${activeClass}`} istoggled={ isToggled.toString() } >
              <div className="options">
                <button className={foodClass} id="food" onClick={this.toggleOverlay}><span>Change Food</span></button>
                <button className={bgClass} id="background" onClick={this.toggleOverlay}><span>Change Background</span></button>
              </div>
              <div className="content">
                {content}
              </div>
            </div>

            <Canvas onCanvasLoad={this.loadCanvas} />
          </div>

          <div className="controller">
            <button className="button icon-play" onClick={this.play}>Play</button>
            <button className="button icon-pause" onClick={this.pause}>Pause</button>
            <button className="button icon-stop" onClick={this.stop}>Stop</button>
            <button className="button icon-fast-fw" onClick={this.increment}>Next Frame</button>
            <button className="button icon-fast-bw" onClick={this.decrement}>Previous Frame</button>
          </div>

          <div className="game-information">
            <h1>Feed Jack!</h1>
            <p>Click the <span className="icon-food">Food icon</span> in the top right corner to select different food items!</p>
            <p>You can change his setting by selecting the <span className="icon-picture">Background icon</span></p>
            <p>Use the animation controls to play, pause, stop, and increment through each frame.</p>
            <p><a href="https://github.com/mimikim/Harvest-Moon-SNES-Feed-Jack-HTML5-Canvas" target="_blank">View Source on Github</a></p>
          </div>

        </div>
      </div>
    );
  }
}

export default hot(module)(Game);
