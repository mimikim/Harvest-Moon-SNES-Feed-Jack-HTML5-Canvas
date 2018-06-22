import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import './App.css';

// components
import Header from './components/Header/Header';
import Canvas from './components/Canvas/Canvas';
import Overlay from './components/Overlay/Overlay';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Overlay />
        <Canvas />
      </div>
    );
  }
}

export default hot(module)(App);
