// overlay on top of canvas
// displays food selection, bg image selection, and info

import React, {Component} from 'react';

import Food from './Food/Food';
import Background from './Background/Background';

import './Overlay.css';

class Overlay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    this.toggleOverlay = this.toggleOverlay.bind(this);
  }



  render() {


    return(
      <div className={`overlay${activeClass}`} istoggled={ isToggled.toString() } >
        <div className="options">
          <button className={foodClass} id="food" onClick={this.toggleOverlay}><span>Change Food</span></button>
          <button className={bgClass} id="background" onClick={this.toggleOverlay}><span>Change Background</span></button>
        </div>
        <div className="content">
          {content}
        </div>
      </div>
    );
  }

}

export default Overlay;
