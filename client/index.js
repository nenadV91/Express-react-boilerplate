import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import {BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/scss/main.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.querySelector('#root')
);