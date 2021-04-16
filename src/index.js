import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import "./styles.scss";

import store from '../store/store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')

);