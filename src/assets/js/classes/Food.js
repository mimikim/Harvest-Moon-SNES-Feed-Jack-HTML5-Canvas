class Food {

  'use strict';

  constructor() {
    this.setVars();
  }

  setVars() {
    this.food = new Image();
    this.food.xpos = 160;
    this.food.ypos = 240;

    this.selector = document.getElementById( 'food-select' );
  }

  // method: gets selected food URL and x/y position
  getData() {
    let selected_option = this.selector.options[ this.selector.selectedIndex ];

    // new "food" image object src is selected value
    this.food.src = selected_option.value;

    // redefine food_position_x and y
    this.food.xpos = selected_option.getAttribute('data-x-value') || 160;
    this.food.ypos = selected_option.getAttribute('data-y-value') || 240;
  }

  // method: draws food sprite
  draw() {
    window.hmcanvas.ctx.drawImage( this.food, this.food.xpos, this.food.ypos );
  }

}
