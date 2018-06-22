import React, {Component} from 'react';

import './Food.css';

import sprites from './sprites.json';

class Food extends Component {
  getSprites() {
    // for each object in passed array, destructure properties and create html
    array.forEach( ( object ) => {
      const { name, url, 'x-pos': xpos, 'y-pos': ypos } = object;

      document.getElementById( 'js-food-select' ).innerHTML += `<option value="${url}" data-x-value="${xpos}" data-y-value="${ypos}">${name}</option>\n`;

    } );
  }

  render() {


    return(
      <div className="food-sprites" id="js-foodsprites">
        food sprites lazy loaded here
      </div>
    );
  }
}

export default Food;
