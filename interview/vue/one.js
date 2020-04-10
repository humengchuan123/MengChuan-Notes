/**
 * 1.如何理解MVVM原理
 * 
 * 2.响应式数据的原理
 * 
 * 3.Vue中是如何检测数组的变化
 * 
 * 4.为何Vue采用异步渲染
 * 不采用异步更新，那么每次更新数据都会对当前组件进行重新渲染.所以为了性能考虑。Vue会在本轮数据更新后，再去异步更新视图
 * 
 * 5.nextTick实现原理
 * 
 * 6.Vue组件的生命周期
 * 
 * 7.Ajax反正那个生命周期函数里面最好
 * created() ，mounted()一般放在，nuxt最好的是放在created()中
 * 
 * 8.何时需要使用beforeDestory
 * 可能在当前页面中使用了$on方法，那需要在组件销毁前解绑。清除自己定义的定时器 解除事件的绑定 scroll mousemove 
 * 9.Vue父子组件生命周期调用顺序
 * 
 * 10.Vue中Computed的特点
 * 
 * 11.watch中的deep:ture是如何实现的
 * 
 * 12.vue中事件绑定的原理
 * 
 * 13.vue中v-html会有什么缺陷
 * XSS、CSRF
 * 
 * 14.vue中v-show和v-if的区别
 * v-show底层实现是css的display：none?block;v-if是条件渲染，当未满足条件的时候，节点是不存在的
 * 
 * 15.为什么v-for和v-if不能连用
 * v-for 具有比 v-if 更高的优先级，这意味着 v-if 将分别重复运行于每个 v-for 循环中
 * 
 * 16.v-model中的实现原理以及如何自定义v-model
 * 
 * 17.组件中的data是一个什么函数
 * 构造函数
 * 
 * 18.vue的组件如何通信
 * 1.路由传值 2.v-bind绑定,props接收 3.$emit 4.bus总线 5.vuex 6.localStorge
 * 
 * 19.什么是作用域插槽
 * <slot>
 * 
 * 20.用Vnode来描述一个dom结构
 * 
 * 21.diff算法的时间杂度
 * 
 * 22.简述一下vue中diff算法原理
 * 
 * 23.v-for中为何要用key值
 * 
 * 24.描述组件更新和渲染过程
 * 
 * 25.vue中模板编译原理
 * 
 * 26.vue中常见的性能优化
 * 骨架屏，减少首页大小
 * 
 * 27.vue中相同逻辑如何抽离
 * 1.组件化  2.混入
 * 
 * 28.为什么要使用异步组件
 * 
 * 29.谈谈对keep-alive的理解
 * 1.会缓存组件的数据 2.会产生actived这个生命周期钩子函数
 * 
 * 30.实现hash路由和history路由
 * 
 * 31.vue-router中有哪些导航守卫
 * beforEnter、beforeEach、afterEach
 * beforeRouteEnter、beforeRouteUpdate 、beforeRouteLeave
 * 
 * 32.action和mutation的区别
 * Mutation：必须同步执行,修改State，理论上是修改State的唯一途径 Action：可以异步，但不能直接操作State,提交修改数据状态store.commit
 * 
 * 33.vuex工作原理
 * component中触发store.dipatch方法然后执行actions，actions执行store.commit方法提交给mutation，mutation状态更改数据
 * 
 * 34.vue3.0有哪些改进
 * 1.采用了函数式编程 2.Object.defineProperty更新为Object.Proxy 3.体积更小 4.加强了对ts的支持
 * 
 * 35.基于vue设计一个购物车(组件结构，vuex state数据结构)
 * 
 * 
 */
