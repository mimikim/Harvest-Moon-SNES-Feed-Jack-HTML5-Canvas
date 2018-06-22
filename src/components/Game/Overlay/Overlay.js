// overlay on top of canvas
// displays food selection, bg image selection, and info

import React, {Component} from 'react';

import Food from './Food/Food';
import Background from './Background/Background';
import Info from './Info/Info';

import './Overlay.css';

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay = () => {
    this.setState( (prevState) => ( {
      isActive: ( ! prevState.isActive )
    } ) );
  };

  render() {
    const isToggled = this.state.isActive;
    let classList = ( this.state.isActive ) ? 'overlay active' : 'overlay';

    return(
      <div istoggled={ isToggled.toString() } className={classList} id="js-overlay">
        <button className="button" id="js-overlay-button" onClick={this.toggleOverlay}>Show Overlay</button>
        <div className="content">
          <Food />
          <Background />
          <Info />
        </div>
      </div>
    );
  }
}

export default Overlay;
