/*
 * @Author: yuta
 * @Date: 2022-02-23 15:32:20
 * @LastEditTime: 2022-02-25 16:37:39
 * @LastEditors: yuta
 */
const webpack = require("webpack");
const path = require("path");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const variable = require("./webpackUtils/variable");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin"); // 模块热更新

const { DIST_PATH } = variable;

const config = {
  mode: "development",
  cache: { type: "memory" }, //开发环境使用内存缓存
  devtool: "eval-cheap-module-source-map",
  stats: "eval",
  devServer: { // 这里注意webpack-dev-server的配置，与webpack 5之前的版本有很大区别
    open: {
      target: ["index.html"],
      app: {
        name: "chrome",
      },
    },
    static: {
      directory: DIST_PATH,
    },
    compress: true, //是否启用gzip压缩
    host: "0.0.0.0", // 默认是localhost，但如果你想让你的服务器可以被外部访问，像这样指定0.0.0.0
    port: 3001,
    hot: true, // Tell the dev-server we're using Hot Module Replacement.
    // This option allows us to navigate by typing the url directly when using react-route-v4.
    historyApiFallback: true,
  },
  watchOptions: {
    aggregateTimeout: 300,
    // If watching does not work for you, try out this option. Watching does not work with NFS
    // and machines in VirtualBox.
    // poll: 1000,
    ignored: /node_modules/,
  },
  plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
  module: {
    // 打包静态资源
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext][query]",
        },
      },
    ],
  },
};

const mergedConfig = webpackMerge.merge(baseConfig, config);

module.exports = mergedConfig;
