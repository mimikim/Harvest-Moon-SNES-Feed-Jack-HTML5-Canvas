import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Canvas from './Canvas/Canvas';
import Food from './Food/Food';
import Background from './Background/Background';
import { setBackground, setFood } from "./actions";
import './Game.css';
import './Overlay.css';
import './icon-font.css';

class Game extends Component {
  constructor(props) {
    super(props);
    const { store } = this.props;

    this.state = {
      isActive: false
    };

    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.setBackgroundSelection = this.setBackgroundSelection.bind(this);
    this.setFoodSelection = this.setFoodSelection.bind(this);
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
  }

  render() {
    console.log('game component loaded');
    console.log(this.props.store);
    const { store } = this.props;
    const background = store.background;
    const isToggled = this.state.isActive;

    let activeClass = ( isToggled ) ? ' active' : '';
    let foodClass = 'button icon-food';
    let bgClass = 'button icon-picture';
    let content;

    switch ( this.state.selection ) {
      case 'food':
        content =  <Food store={store} onSelectionChange={this.setFoodSelection} />;
        foodClass += activeClass;
        break;
      case 'background':
        content = <Background store={store} onSelectionChange={this.setBackgroundSelection} />;
        bgClass += activeClass;
        break;
      default:
        break;
    }

    return (
      <div className="app">

        <div id="js-game" className="game-container">

          <div className={`overlay${activeClass}`} istoggled={ isToggled.toString() } >
            <div className="options">
              <button className={foodClass} id="food" onClick={this.toggleOverlay}><span>Change Food</span></button>
              <button className={bgClass} id="background" onClick={this.toggleOverlay}><span>Change Background</span></button>
            </div>
            <div className="content">
              {content}
            </div>
          </div>

          <div className="game-canvas" style={{ backgroundImage: `url(${background})`}}>
            {/*<Canvas options={store} />*/}
          </div>

          <div className="controller">
            <button className="button icon-play">Play/Pause</button>
            <button className="button icon-pause">Pause</button>
            <button className="button icon-stop">Stop</button>
            <button className="button icon-fast-fw">Next Frame</button>
            <button className="button icon-fast-bw">Previous Frame</button>
          </div>
          <div>

          </div>

          <div className="game-information">
            <h1>Feed Jack! React Application</h1>
            <p>Click the <span className="icon-food">Food icon</span> in the top right corner to select different food items!</p>
            <p>You can change his setting by selecting the <span className="icon-picture">Background icon</span></p>
            <p>Use the animation controls to play, pause, stop, and increment through each frame.</p>
          </div>

        </div>

      </div>
    );
  }
}

export default hot(module)(Game);
