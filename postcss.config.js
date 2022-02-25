/*
 * @Author: yuta
 * @Date: 2022-02-24 11:43:19
 * @LastEditTime: 2022-02-25 14:21:17
 * @LastEditors: yuta
 */
module.exports = {
  plugins: [
    require("precss"),
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
