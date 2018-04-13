import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './App/Main.js';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

ReactDOM.render(
  <AlertProvider template={AlertTemplate}>
    <Main />
  </AlertProvider>, document.getElementById('root'));
