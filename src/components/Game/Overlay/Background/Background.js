// loads background
import React, {Component} from 'React';

import backgrounds from './background.json';
import './Background.css';

// individual background item
class Item extends Component {
  constructor(props) {
    super(props);
    this.bg = props.bg;
  }

  render() {
    let bg = this.bg;

    return (
      <button className="button" data-url={bg.url}>
        <img className="bg" src={bg.url} />
        <span className="name">{bg.name}</span>
      </button>
    );
  }
}

class Background extends Component {
  render() {
    let allBG = backgrounds;

    return(
      <div className="bg-images" id="js-bg-images">
        { allBG.map( ( bg, i ) =>
          <Item bg={bg} key={i} />
        ) }
      </div>
    );
  }
}

export default Background;