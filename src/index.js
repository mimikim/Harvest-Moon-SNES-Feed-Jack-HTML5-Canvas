import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Game from './components/Game/Game';
import reducer from './redux-reducer';
import { Provider } from 'react-redux';
import { setBackground } from './components/Game/actions';

const defaultOptions = {
  background: './images/home_winter.png',
  canvas: {
    canvas: undefined,
    ctx: undefined,
    frameIndex: 0,
    numberOfFrames: 11,
    requestID: undefined,
    tickCount: 0,
    ticksPerFrame: 15
  },
  control: {
    action: ''
  },
  food: {
    url: '',
    xpos: 0,
    ypos: 0
  },
  jack: {
    url: './images/jack-eating.png',
    xpos: 200,
    ypos: 240
  }
};

// create store, load default state
const store = createStore( reducer, defaultOptions );

// tells react what to render, and where to render it
// rendering a component "App"
// and it is being rendered at the DOM elm w/ id Root
const render = () => ReactDOM.render(
  <Provider store={store}>
    <Game store={ store.getState() }
          dispatchAction={ ( action ) => store.dispatch( action ) }
    />
  </Provider>,
  document.getElementById('root')
);

render();
store.subscribe(render);


{/*<Game store={ store.getState() }*/}
      {/*incrementFrame={ () => store.dispatch( { type: 'INCREMENT_FRAME' } ) }*/}
      {/*decrementFrame={ () => store.dispatch( { type: 'DECREMENT_FRAME' } ) }*/}
{/*/>*/}