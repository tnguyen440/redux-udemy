import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
