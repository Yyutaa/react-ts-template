/*
 * @Author: yuta
 * @Date: 2022-02-23 15:26:35
 * @LastEditTime: 2022-04-11 11:32:32
 * @LastEditors: yuta
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const variable = require("./variable");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { PUBLIC_PATH, DIST_PATH, ENV_CONFIG_PATH, IS_DEV, SRC_PATH } = variable;
// html插件
function getHTMLPlugins() {
  const indexHtmlPlugin = new HtmlWebpackPlugin({
    template: path.join(PUBLIC_PATH, "index.html"),
    // filename: path.join(DIST_PATH, 'index.html'),
    filename: "index.html",
    inject: true, //true 插入body底部，head:插入head标签，false:不生成js文件
    // hash: true, // 会在打包好的bundle.js后面加上hash串
    title: "",
    minify: {
      removeComments: true, // 删除注释
      collapseWhitespace: true,
      minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
      minifyJS: true, // 压缩 HTML 中出现的 JS 代码
    },
  });

  return [indexHtmlPlugin];
}

function getPlugins() {
  // css代码压缩
  const miniCssPlugin = new MiniCssExtractPlugin({
    filename: IS_DEV ? "css/[name].css" : "css/[name].[contenthash:8].css",
    chunkFilename: IS_DEV
      ? "css/[name].chunk.css"
      : "css/[name].[contenthash:8].chunk.css",
    // 常遇到如下警告，Conflicting order. Following module has been added:…。
    // 此警告意思为在不同的js中引用相同的css时，先后顺序不一致。也就是说，在1.js中先后引入a.css和b.css，而在2.js中引入的却是b.css和a.css，此时会有这个warning。
    ignoreOrder: true,
  });

  return [...getHTMLPlugins(), miniCssPlugin,];
}

module.exports = {
  getPlugins,
};
