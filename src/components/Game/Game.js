import React, {Component} from 'react';

import Canvas from './Canvas/Canvas';
import Overlay from './Overlay/Overlay';
import Controls from './Controls/Controls';

import './Game.css';
import './icon-font.css';

class Game extends Component {
  render() {
    return (
      <div id="js-game" className="game-container">
        <Overlay />
        <Canvas />
        <Controls />

        <div className="game-information">
          <h1>Feed Jack!</h1>
          <p>Use the dropdowns below to select a food item or change the background.</p>
          <p>You can change to a different item during the animation or stop the animation altogether.</p>
        </div>
      </div>
    );
  }
}

export default Game;
