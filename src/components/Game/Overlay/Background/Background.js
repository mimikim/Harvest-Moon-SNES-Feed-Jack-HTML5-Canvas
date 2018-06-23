// loads background
import React, {Component} from 'React';

import backgrounds from './background.json';
import './Background.css';

// individual child item
class Item extends Component {
  constructor(props) {
    super(props);
    this.bg = props.bg;

    this.setActive = this.setActive.bind(this);
  }

  setActive(e) {
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

    this.props.changeBg( newBG );
  }

  render() {
    const bg = this.bg;

    return (
      <button className="button" data-url={bg.url} onClick={this.setActive}>
        <img className="bg" src={bg.url} />
        <span className="name">{bg.name}</span>
      </button>
    );
  }
}

// parent container
class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: './images/home_winter.png'
    };

    this.changeBg = this.changeBg.bind(this);
  }

  changeBg( newBG ) {
    this.setState({
      background: newBG
    });
  }

  render() {
    const { background } = this.state;
    let allBG = backgrounds;

    return(
      <div className="bg-images" id="js-bg-images" data-bg={background}>
        { allBG.map( ( bg, i ) =>
          <Item bg={bg} key={i} changeBg={this.changeBg} />
        ) }
      </div>
    );
  }
}

export default Background;
