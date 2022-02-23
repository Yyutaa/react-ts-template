/*
 * @Author: yuta
 * @Date: 2022-02-23 15:03:10
 * @LastEditTime: 2022-02-23 15:04:52
 * @LastEditors: yuta
 */
import React from "react";
import { render } from "react-dom";

try {
  const rootElement = document.getElementById("root");
  console.log("运行");
  const App = () => {
    return <div className="hello">Hello</div>;
  };
  render(<App />, rootElement);
} catch (e) {
  console.log("e", e);
}
