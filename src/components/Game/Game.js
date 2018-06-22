import React, {Component} from 'react';

import Canvas from './Canvas/Canvas';
import Overlay from './Overlay/Overlay';
import Controls from './Controls/Controls';

import './Game.css';
import './icon-font.css';

const defaultOptions = {
  frameIndex: 0,
  jack: {
    url: './images/jack-eating.png',
    xpos: 200,
    ypos: 240
  }
};

// console.log(defaultOptions);

class Game extends Component {
  render() {
    return (
      <div id="js-game" className="game-container">
        <Overlay />
        <Canvas options={defaultOptions} />
        <Controls />

        <div className="game-information">
          <h1>Feed Jack! React Application</h1>
          <p>Click the <span className="icon-food">Food icon</span> in the top right corner to select different food items!</p>
          <p>You can change his setting by selecting the <span className="icon-picture">Background icon</span></p>
          <p>Use the animation controls to play, pause, stop, and increment through each frame.</p>
        </div>
      </div>
    );
  }
}

export default Game;
