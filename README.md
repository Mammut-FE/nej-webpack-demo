# 使用 webpack 运行 nej 应用

> 本文展示了如何将以 nej + regualrjs 为技术栈的项目, 通过 webpack 进行开发
>
> 对于纯粹的 nej 项目支持较差


## 运行示例

1. clone 本项目至本地 `git clone git@github.com:Mammut-FE/nej-webpack-demo.git`

2. 运行 `nej` 项目
   
   在 `master` 分支下, 运行一个静态服务器, 访问 `http://your-server-host/#/m/module/container`
   
3. 使用 `webpack` 运行项目

   1. 切换到 `webpack` 分支
   2. `npm i` 安装依赖
   3. `npm start` 启动 `webpack`, 访问 `http://localhost:8080/#/m/module/container`


## 如何使用 `webpack` 运行 `nej` 项目 ?

回答这个问题, 我们需要了解 `nej` 在项目中起到了什么样的作用

首先, `define` 函数提供了 **依赖管理** 的功能; 其次 `util/dispatcher/dispatcher` 提供了 **路由(模块调度)** 功能

其中 `define` 函数的功能可以通过 `webpack` 来完成, 而 `nej` 的 **路由(模块调度)** 与业务中的代码耦合在一起, 这里并不好去掉, 需要继续使用 `nej` 来完成

这样我们的就只需要解决下面的问题, 就可以使用 `webpack` 来运行 `nej` 的项目

1. 如何使用 `webpack` 运行 `nej` 的代码 ?
    
   [nejm - commonjs 规范的 nej](https://github.com/Mammut-FE/nejm)
    
2. 如何使用 `webpack` 运行已有的业务代码 ?

   使用 `babel` 和 [babel-plugin-transform-nej-modules-es2015](https://github.com/Mammut-FE/babel-plugin-transform-nej-modules-es2015) 插件将已有的代码进行转换


## Tips

1. 转换脚本和 `webpack` 配置文件可以在 `webpack` 分支中找到

2. 转换代码前最好将 `nej` 中通过 `template.html` 导入的组件转换成使用 `define` 函数导入

   TODO: 待补充
   
3. 其他的最佳实践

   TODO: 待补充
