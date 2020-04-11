import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactGA from "react-ga";

const trackingId = "UA-163305268-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();