<!--
 * @Author: yuta
 * @Date: 2022-02-23 14:50:30
 * @LastEditTime: 2022-02-23 15:10:04
 * @LastEditors: yuta
-->
# react-ts-template
React project template with TypeScript and more

# 目录结构
react-ts-template
├── yarn.lock # 锁定 npm 包依赖版本文件
├── package.json
├── public # 存放html模板
├── README.md
├── src
│ ├── assets # 存放会被 Webpack 处理的静态资源文件：一般是自己写的 js、css 或者图片等静态资源
│ │ ├── fonts # iconfont 目录
│ │ ├── images # 图片资源目录
│ │ ├── css # 全局样式目录
│ │ └── js # 全局js
│ ├── common # 存放项目通用文件
│ ├── components # 项目中通用的业务组件目录
│ ├── config # 项目配置文件
│ ├── pages # 项目页面目录
│ ├── typings # 项目中d.ts 声明文件目录
│ ├── types # 项目中声明文件
│ ├── uiLibrary # 组件库
│ ├── routes # 路由目录
│ ├── services # 和后端相关的文件目录
│ ├── store # redux 仓库
│ ├── utils # 全局通用工具函数目录
│ ├── App.tsx # App全局
│ ├── index.tsx # 项目入口文件
│ ├── index.scss # 项目入口引入的scss
└── tsconfig.json # TS 配置文件
