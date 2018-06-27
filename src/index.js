import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Game from './components/Game/Game';
import reducer from './redux-reducer';
import defaultOptions from './config';

// create store, load default state
const store = createStore( reducer, defaultOptions );

// tells react what to render, and where to render it
const render = () => ReactDOM.render(
  <Game store={ store.getState() } dispatchAction={ ( action ) => store.dispatch( action ) } />,
  document.getElementById('root')
);

render();
store.subscribe(render);
