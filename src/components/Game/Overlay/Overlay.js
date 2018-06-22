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
    this.state = {
      isActive: false,
      selection: ''
    };

    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay(e) {
    let id = e.target.id;

    this.setState( (prevState) => ( {
      isActive: ( ! prevState.isActive ),
      selection: id
    }));
  };

  render() {
    const isToggled = this.state.isActive;
    const selection = this.state.selection;

    let classList = ( this.state.isActive ) ? 'overlay active' : 'overlay';
    let content;

    switch ( selection ) {
      case 'food':
        content =  <Food />;
        break;
      case 'background':
        content = <Background />;
        break;
      case 'overlay':
        content = <Info />;
        break;
      default:
        break;
    }

    return(
      <div istoggled={ isToggled.toString() } className={classList}>
        <div className="options">
          <button className="button icon-food" id="food" onClick={this.toggleOverlay}><span>Change Food</span></button>
          <button className="button icon-picture" id="background" onClick={this.toggleOverlay}><span>Change Background</span></button>
          <button className="button icon-overlay" id="overlay" onClick={this.toggleOverlay}><span>Overlay</span></button>
        </div>
        <div className="content">
          {content}
        </div>
      </div>
    );
  }

}

export default Overlay;
