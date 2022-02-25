/*
 * @Author: yuta
 * @Date: 2022-02-23 16:07:04
 * @LastEditTime: 2022-02-25 15:51:52
 * @LastEditors: yuta
 */
var isDev = false;
if (process.env.NODE_ENV === "dev") {
  isDev = true;
}

module.exports = function (api) {
  api.cache(true);
  const presets = [
    [
      "@babel/preset-react",
      {
        development: isDev,
      },
    ],
    [
      "@babel/preset-env",
      // {
      //   targets: {
      //     browsers: [">0.25%", "not ie 11", "not op_mini all"],
      //   },
      // },
      {
        useBuiltIns: "usage",
        corejs: "2",
        targets: {
          chrome: "58",
          ie: "10",
        },
      },
    ],
    [
      "@babel/preset-typescript",
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ];
  const plugins = [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
        regenerator: true,
      },
    ],
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-proposal-class-properties",
  ];

  if (isDev) {
    plugins.push([
      "react-refresh/babel",
      {
        skipEnvCheck: true,
      },
    ]);
  }

  return {
    // 这个不设置的话，webpack 魔法注释会被删除，魔法注释用于分包
    comments: true,
    presets,
    plugins,
  };
};
