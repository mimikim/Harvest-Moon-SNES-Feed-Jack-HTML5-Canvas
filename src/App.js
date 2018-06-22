import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

// components
import Header from './components/Header/Header';
import Game from './components/Game/Game';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Game />
      </div>
    );
  }
}

export default hot(module)(App);
