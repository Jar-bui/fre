import React from 'react';
import {render} from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {a,c as CC} from './a'

console.log(a)
console.log(CC())

render(
    <App />,
  document.getElementById('root')
);
//default require
//引入方式 