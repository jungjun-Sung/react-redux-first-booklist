import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { combineReducers, createStore } from 'redux';
import reducer from './reducer/reducer-books';
import reducer2 from './reducer/reducer-active-book';

// let store = createStore(combineReducers({ reducer, reducer2 }));
let store = createStore(combineReducers({ reducer, reducer2 }));
// let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
