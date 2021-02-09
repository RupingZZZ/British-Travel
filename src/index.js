import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";


const user =storageUtils.getUser();
memoryUtils.user=user;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



