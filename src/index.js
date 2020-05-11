import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Modal} from 'react-bootstrap'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Modal show={true}>
      <Modal.Header>This is Brenda's Portfolio</Modal.Header>
      <Modal.Body>This site is being built
        It will be ready for you to enjoy it on 
        05/15/2020
      </Modal.Body>
    </Modal>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
