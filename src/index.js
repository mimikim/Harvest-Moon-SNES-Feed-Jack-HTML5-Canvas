import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

// tells react what to render, and where to render it
// rendering a component "App"
// and it is being rendered at the DOM elm w/ id Root
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
