import React, {Component} from 'react';
import Sprite from './Sprite';

import './Food.css';
import spriteSheet from './sprites.json';

class Food extends Component {

  constructor(props) {
    super(props);
    this.returnSprite = this.returnSprite.bind(this);
  }

  returnSprite(e) {
    console.log(e);
    console.log(e.target);
  }

  render() {
    let allSprites = spriteSheet;

    return(
      <div className="food-sprites" id="js-foodsprites">
        { allSprites.map( ( sprite, i ) =>
          <Sprite sprite={sprite} key={i} onClick={this.returnSprite} />
        ) }
      </div>
    );
  }
}

export default Food;
