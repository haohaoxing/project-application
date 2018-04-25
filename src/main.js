// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 根组件
import router from './router'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

//状态管理

Vue.config.productionTip = false

/* eslint-disable no-new */
// 针对App.vue创建
new Vue({
  el: '#app',

  router,

  components: {
    App
  },
  template: '<App/>',
  render:(h)=>{
    return h(App)
  },

})
