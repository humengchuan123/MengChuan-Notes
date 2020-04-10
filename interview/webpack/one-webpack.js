/**
 * 1.前端代码为何要构建和打包
 * es6代码浏览器无法识别 合并js代码，压缩代码体积 代码丑化，行业保密性
 * 
 * 2.前端打包构建工具用过或者听过哪些
 * grunt gulp fis webpack rollup 
 * 
 * 3.module chunk bundle分别是什么意思 有什么区别
 * module是指任意的文件模块，等价于commonjs中的模块
   chunks是webpack处理过程中被分组了的modules，如代码分割时一个异步加载的chunk可能包含多个module
   Bunldes是指打包出来的

 * 4.loader和plugin的区别
 * loader文件加载器 处理非js模块，依赖引入，对文件处理编译、压缩等 plugin解决loader无法解决的问题，插件安装扩展功能
 * 
 * 5.webpack如何实现懒加载
 * 路由resolve的形式
 * 
 * 6.webpack常用性能优化
 * 优化构建速度（缩小文件的搜索范围、使用DllPlugin减少基础模块编译次数、ParallelUglifyPlugin开启多进程压缩JS文件）
 * 优化开发体验（使用自动刷新、开启模块热替换HMR）
 * 优化输出质量-压缩文件体积（区分环境--减小生产环境代码体积、使用Tree Shaking剔除JS死代码、压缩代码-JS、ES、CSS）
 * 加速网络请求（用CDN加速静态资源加载、多页面应用提取页面间公共代码，以利用缓存、分割代码以按需加载）
 * 使用输出分析工具
 * 
 * 7.babel-rutime和babel-polyfill的区别
 * 
 */