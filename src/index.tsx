/*
 * @Author: yuta
 * @Date: 2022-02-23 15:03:10
 * @LastEditTime: 2022-04-22 14:54:31
 * @LastEditors: yuta
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');

const render = AppComponent => {
  ReactDOM.render(<AppComponent />, rootElement);
};

render(App);

if (module.hot) {
  console.log('update');
  
  module.hot.accept('./App.tsx', () => {
    render(App);
  });
}
