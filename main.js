import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import {$http} from'@escook/request-miniprogram' 
uni.$http=$http
// 以前你http挂在uni上，记得config。host吗，现在http和他一样 不挂载了，直接放文件里import，你把文件看成一个{}对象就行
//请求的根路径
// $http.baseUrl = 'https://www.uinav.com'
// uni.$http = $http

 //请求拦截器
 $http.beforeRequest = function(options) {
    uni.showLoading({
      title: '数据加载中...'
    })
    if(options.data.setMyHeaderxxx){
     options.header = options.data.setMyHeaderxxx
     // options.header.token = 'sfsdfsd'
    }
}

 //响应拦截器
 $http.afterRequest = function(res) {
   //console.log(res, 111111111111);
   // if(res.data.code='更新token'){
   //   uni.setStorageSync('token','res.token')
   //   return 
   // }
   // if (res.data.code !== 200) {
   //   uni.showToast({
   //     title: res.data.message,
   //     duration: 2000,
   //     icon: 'none'
   //   })
   // }
   uni.hideLoading()
 }
 
 //封装弹框的方法
 uni.$showMessage = function(title='数据请求失败',duration = 1500){
   uni.showToast({
     title,
     duration,
     icon: 'none' 
   })
}
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif