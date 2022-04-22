/*
 * @Author: yuta
 * @Date: 2022-02-23 15:26:05
 * @LastEditTime: 2022-04-22 11:27:47
 * @LastEditors: yuta
 */

// 这是一份基类配置，我们需要针对不同的开发环境增加不同的配置，我们可以通过 webpack-merge实现继承base配置。
const path = require("path");
//变量配置工具类
const variable = require("./webpackUtils/variable");
//别名工具类
const resolveConfig = require("./webpackUtils/resolve");
//公用插件工具类
const plugins = require("./webpackUtils/plugins");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { SRC_PATH, DIST_PATH, IS_DEV, IS_PRO, getCDNPath } = variable;

const config = {
  entry: {
    index: path.join(SRC_PATH, "index.tsx"),
  },
  output: {
    path: DIST_PATH,
    filename: IS_DEV
      ? "js/[name].bundle.js"
      : "js/[name].[contenthash:8].bundle.js",
    publicPath: getCDNPath(),
    globalObject: "this",
    chunkFilename: IS_DEV
      ? "js/[name].chunk.js"
      : "js/[name].[contenthash:8].chunk.js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  //loader的执行顺序默认从右到左，多个loader用[],字符串只用一个loader，也可以是对象的格式
  module: {
    //各种loader规则配置
    rules: [
      {
        test: /\.(tsx?|js|jsx)$/,
        include: [SRC_PATH],
        use: {
          loader: "babel-loader", // 这是一个webpack优化点，使用缓存
          options: {
            cacheDirectory: true,
            presets: ["@babel/env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
        exclude: [/node_modules/, /public/, /(.|_)min\.js$/], // 不包括解析这些文件
      },
      // A loader for css files.
      {
        test: /\.(css|less)$/,
        include: [SRC_PATH],
        exclude: /node_modules/, // 取消匹配node_modules里面的文件
        use: [
          IS_DEV ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: false,
              sourceMap: !IS_PRO,
            },
          },
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  // resolve: resolveConfig,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: plugins.getPlugins(),
};

module.exports = config;
