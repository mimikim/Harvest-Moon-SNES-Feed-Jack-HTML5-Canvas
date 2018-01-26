class Food {

  'use strict';

  constructor() {
    this.food = new Image();
    this.food.xpos = 160;
    this.food.ypos = 240;
  }

  // method: gets selected food URL and x/y position
  getData( selector ) {
    let selectedOption = selector.options[ selector.selectedIndex ];

    // new "food" image object src is selected value
    this.food.src = selectedOption.value;

    // redefine food_position_x and y
    this.food.xpos = selectedOption.getAttribute( 'data-x-value' ) || 160;
    this.food.ypos = selectedOption.getAttribute( 'data-y-value' ) || 240;
  }

  // method: draws food sprite
  draw() {
    window.hmcanvas.ctx.drawImage( this.food, this.food.xpos, this.food.ypos );
  }
}
