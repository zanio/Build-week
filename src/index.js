import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import {
//  createStore, applyMiddleware, compose, combineReducers,
// } from 'redux';
// import thunk from 'redux-thunk';

import App from './app/App';
// import AppReducer from './store/reducers';


// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null || compose;

// const rootReducer = combineReducers(AppReducer);

// const store = createStore(rootReducer, composeEnhancers(
//   applyMiddleware(thunk),
// ));

const app = (
      <BrowserRouter>
      <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

