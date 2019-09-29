import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import './assets/css/bootstrap.min.css'
// import "./assets/css/paper-kit.css";
// import "./assets/demo/demo.css";

import { Provider } from 'react-redux';
import {
 createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import App from './app/App';
import AppReducer from './store/reducers';


const composeEnhancers = process.env.NODE_ENV === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null|| compose;

const rootReducer = combineReducers(AppReducer);

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}> 
    <BrowserRouter>
   <App />
    </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

