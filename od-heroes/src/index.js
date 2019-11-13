import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

  
const store = createStore(voting, JSON.parse(localStorage.getItem('state')) || []);
store.subscribe(() => localStorage.setItem('state', JSON.stringify(store.getState())));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

function voting(state = [], action) {
    switch (action.type) {
        case 'ADD_NOMINATION':
            return state.concat([action.votesData])
        default:
            return state
    }
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
