import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const lakeList = [
  {id: 1, name: "Lake 1", trailhead: "TH1"},
  {id: 2, name: "Lake 2", trailhead: "TH2"},
  {id: 3, name: "Lake 3", trailhead: "TH3"},
];

ReactDOM.render(
  <React.StrictMode>
    <App lakes={lakeList} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
