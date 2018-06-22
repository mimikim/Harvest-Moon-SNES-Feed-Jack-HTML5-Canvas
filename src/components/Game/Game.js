import React, {Component} from 'react';

import Canvas from './Canvas/Canvas';
import Overlay from './Overlay/Overlay';

import './Game.css';

class Game extends Component {
  render() {
    return (
      <div id="js-game" className="game-container">
        <Overlay />
        <Canvas />
      </div>
    );
  }
}

export default Game;
