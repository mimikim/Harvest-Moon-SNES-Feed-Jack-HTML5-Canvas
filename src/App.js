import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import './App.css';

// components
import Header from './components/header';
import Canvas from './components/canvas';
import Overlay from './components/overlay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Overlay />
        <Canvas />
      </div>
    );
  }
}

export default hot(module)(App);
