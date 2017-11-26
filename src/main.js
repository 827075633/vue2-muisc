import 'babel-polyfill' // 对es6的一些api做一些转义，如pormise
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
/* Vue.config.productionTip = false */
import 'common/stylus/index.styl'
/* eslint-disable no-new */

fastclick.attach(document.body)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
