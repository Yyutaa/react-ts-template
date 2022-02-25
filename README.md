<!--
 * @Author: yuta
 * @Date: 2022-02-23 14:50:30
 * @LastEditTime: 2022-02-25 17:27:19
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
│ ├── index.less # 项目入口引入的scss
└── tsconfig.json # TS 配置文件

# 代码检查和校验
有两种方案，1是vscode安装Eslint和Prettier插件，2是在项目内创建.prettierrc和.eslintrc.js文件搭配eslint-config-airbnb 配置来校验

# 管理git提交
我们在项目提交的时候需要主动做一个eslint校验和Git commit消息校验。

需要做这些事情，我们需要安装husky,lint-staged,@commitlint/cli,@commitlint/config-conventional

1.husky 继承了git下的所有钩子，允许我们在提交之前做操作
2.@commitlint/config-conventional @commitlint/cli   制定了git 3.commit提交规范，团队可以更清晰的查看每一次代码的提交记录
4.lint-staged 能够让lint只检测git缓存区的文件，提交速度。

# git commit 规范
git commit -m 'feat: 增加 xxx 功能'
git commit -m 'bug: 修复 xxx 功能'
# 主要type
feat:     增加新功能
fix:      修复bug
build:     主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci:         主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
docs:       文档更新
perf:      性能，体验优化
refactor:  代码重构时使用
style:    不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
refactor: 代码重构时使用
revert:   执行git revert打印的message
chore：      不属于以上类型的其他类型
test:     添加测试或者修改现有测试