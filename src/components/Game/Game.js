import React, {Component} from 'react';

import Canvas from './Canvas/Canvas';
import Overlay from './Overlay/Overlay';
import Controls from './Controls/Controls';

import './Game-init.js';
import './Game.css';

class Game extends Component {
  render() {
    return (
      <div id="js-game" className="game-container">
        <Overlay />
        <Canvas />
        <Controls />
      </div>
    );
  }
}

export default Game;
