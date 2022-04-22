/*
 * @Author: yuta
 * @Date: 2022-02-24 11:43:19
 * @LastEditTime: 2022-04-22 14:26:18
 * @LastEditors: yuta
 */
module.exports = {
  plugins: [
    require("autoprefixer")({
      browsers: [
        "defaults",
        "not ie < 11",
        "last 2 versions",
        "> 1%",
        "iOS 7",
        "last 3 iOS versions",
      ],
    }),
  ],
};
