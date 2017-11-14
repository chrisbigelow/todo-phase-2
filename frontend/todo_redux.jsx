import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root';

const store = configureStore();

window.store = store; // TO BE REMOVED

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Root store={ store } />, document.getElementById("root"));
});
