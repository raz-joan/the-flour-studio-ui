import React from 'react';
import ReactDOM from 'react-dom';
import './SassStyles/index.scss';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
