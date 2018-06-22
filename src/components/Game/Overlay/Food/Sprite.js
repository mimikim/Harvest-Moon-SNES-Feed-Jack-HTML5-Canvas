// return sprite
import React, {Component} from 'react';

import './Sprite.css';

class Sprite extends Component {
  constructor(props) {
    super(props);
    this.sprite = props.sprite;
  }

  render() {
    let sprite = this.sprite;

    return (
      <button className="button" data-url={sprite.url} data-x-value={sprite.xpos} data-y-value={sprite.ypos}>
        <img className="sprite" src={sprite.url} />
        <span className="name">{sprite.name}</span>
      </button>
    );
  }
}

export default Sprite;
