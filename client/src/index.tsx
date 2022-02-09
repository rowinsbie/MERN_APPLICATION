import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter} from 'react-router-dom';
import Routing from './routing/Routing';

ReactDOM.render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>,
  document.getElementById('root')
);


