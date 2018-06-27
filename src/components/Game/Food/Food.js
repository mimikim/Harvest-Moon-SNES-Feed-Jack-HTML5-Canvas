import React, {Component} from 'react';
import spriteSheet from './sprites.json';
import './Food.css';

class Food extends Component {
  render() {
    let allSprites = spriteSheet;
    const { onSelectionChange } = this.props;

    return(
      <div className="food-sprites">
        { allSprites.map( ( sprite, i ) =>

          <button className="button" data-url={sprite.url} data-xvalue={sprite.xpos} data-yvalue={sprite.ypos} key={i} onClick={onSelectionChange}>
            <img className="sprite" src={sprite.url} />
            <span className="name">{sprite.name}</span>
          </button>

        ) }
      </div>
    );
  }
}

export default Food;
