import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {store, persistor} from '../store/store';
import App from "./App";
import "./styles.css";
import "./styles.scss";

ReactDOM.render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Route path="/:productId" exact component={App} />
        <Route path="/" exact component={App} />
      </Router>
    </PersistGate>
  </Provider>, document.getElementById('app')

);




/*

ReactDOM.render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, document.getElementById('app')

);

*/