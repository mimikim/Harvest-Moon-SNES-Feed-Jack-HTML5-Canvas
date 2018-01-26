class View {

  constructor() {
    this.foodSelector = document.getElementById( 'food-select' );
    this.options = '';

    // create new Promise
    let promise = new Promise( ( resolve ) => {

      let xhttp = new XMLHttpRequest();

      xhttp.onload = function() {
        if ( this.readyState === 4 && this.status === 200 ) {
          resolve( xhttp.responseText );
        }
      };

      xhttp.open( 'GET', '../sprites.json', true );
      xhttp.send( null );
    } );

    // then, create resolve callback
    promise.then( response => {
      this.setHTML( JSON.parse(response) );
      this.foodSelector.innerHTML = this.options;
    } );
  }

  // generate html
  setHTML( array ) {

    // for each object in passed array, destructure properties and create html
    array.forEach( ( object ) => {

      const { name, url, 'x-pos': xpos, 'y-pos': ypos } = object;

      this.options += `<option value="${url}" data-x-value="${xpos}" data-y-value="${ypos}">${name}</option>\n`;

    } );
  }

}