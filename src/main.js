import Vue from 'vue'
import App from './App.vue'

//  引入ElementUI组件
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

//  引入ECharts插件
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

// 引入mock.js
require('./mock/mock')

// 引入axios,并且在全局定义
import axios from "axios"
Vue.prototype.$axios= axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')