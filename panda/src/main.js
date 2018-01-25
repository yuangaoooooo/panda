// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueRouter from 'vue-router'
import App from './App'

import './assets/font-awesome/css/font-awesome.css'

import axios from 'axios'

Vue.prototype.http = axios;


Vue.use(VueRouter)
// 默认在点击和click事件之间有300ms的延迟
// fastClick 可以避免移动端浏览器页面点击延迟
import FastClick from 'fastclick'
// 设置作用范围
FastClick.attach(document.body)

import {Actionsheet,AlertPlugin} from 'vux'
// 插件使用弹窗
Vue.use(AlertPlugin)
// 注册全局组件使用
Vue.component('Actionsheet',Actionsheet)


import Index from './components/Index.vue'
import Youxi from './components/Youxi.vue'
import Yule from './components/Yule.vue'
import Sort from './components/Sort.vue'
import Roomlist from './components/Roomlist.vue'
import Wzry from './components/Wzry.vue'
import Download from './components/Download.vue'


const routes = [
  {path: '/index',component: Index },
  {path: '/youxi',component: Youxi },
  {path: '/yule',component: Yule },
  {path: '/games/:ename/:cname',component: Roomlist },
  {path: '/youxi/sort',component: Sort },
  {path: 'wzry',component: Wzry },
  {path: '/index/download',component: Download },

 
  // 二级界面
  // {path: '/wechat/second',component:Second },

]

const router = new VueRouter({
  routes
})
router.push('/index')



// 创建vue 实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
