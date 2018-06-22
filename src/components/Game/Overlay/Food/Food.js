import React, {Component} from 'react';
import Sprite from './Sprite';

import './Food.css';
import spriteSheet from './sprites.json';

class Food extends Component {
  render() {
    let allSprites = spriteSheet;

    return(
      <div className="food-sprites" id="js-foodsprites">
        { allSprites.map( ( sprite, i ) =>
          <Sprite sprite={sprite} key={i} />
        ) }
      </div>
    );
  }
}

export default Food;
