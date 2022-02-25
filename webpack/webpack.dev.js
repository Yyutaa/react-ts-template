/*
 * @Author: yuta
 * @Date: 2022-02-23 15:32:20
 * @LastEditTime: 2022-02-25 14:47:39
 * @LastEditors: yuta
 */
const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const variable = require('./webpackUtils/variable');

const { DIST_PATH } = variable;


const config = {
  mode: 'development',
  cache: { type: 'memory' },//开发环境使用内存缓存
  devtool: 'eval-cheap-module-source-map',
  stats: 'eval', 
  devServer: {
    open: 'chrome',
    // contentBase: DIST_PATH,
    // contentBase: path.resolve(__dirname, 'dist'),
    compress: true, //是否启用gzip压缩
    // publicPath: '/',
    host: '0.0.0.0',  // The default value is localhost, which does not allow remote access from dynamic dns.
    port: 3001,
    hot: true, // Tell the dev-server we're using Hot Module Replacement.
    // disableHostCheck: true,
    // inline: true, // A script will be inserted in your bundle to take care of live reloading.
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

const mergedConfig = webpackMerge.merge(baseConfig, config);

module.exports = mergedConfig;

