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
      isActive: false,
      selection: ''
    };

    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay(e) {
    let id = e.target.id;

    // if current button is not active, display content
    if ( ! e.target.classList.contains('active') ) {
      this.setState( (prevState) => ( {
        isActive: true,
        selection: id
      }));

    } else {
      // else, if button is active, hide overlay
      this.setState( (prevState) => ( {
        isActive: false
      }));
    }
  };



  render() {
    const isToggled = this.state.isActive;
    let activeClass = ( isToggled ) ? ' active' : '';
    let foodClass = 'button icon-food';
    let bgClass = 'button icon-picture';
    let content;
    let selection;

    switch ( this.state.selection ) {
      case 'food':
        content =  <Food />;
        foodClass += activeClass;
        break;
      case 'background':
        content = <Background />;
        bgClass += activeClass;
        break;
      default:
        break;
    }

    return(
      <div className={`overlay${activeClass}`} istoggled={ isToggled.toString() }>
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
