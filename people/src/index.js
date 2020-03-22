import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import {reducer} from './redux/reducer';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
     reducer
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger),
  
);
const store = createStore(reducer, enhancer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
