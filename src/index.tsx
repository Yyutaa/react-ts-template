/*
 * @Author: yuta
 * @Date: 2022-02-23 15:03:10
 * @LastEditTime: 2022-02-25 16:49:46
 * @LastEditors: yuta
 */
import React from 'react';

import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

const App = () => {
  return <div style={{ color: 'red', fontSize: 20, backgroundColor: '#000' }}>Hello</div>;
};

ReactDOM.render(<App />, rootElement);
