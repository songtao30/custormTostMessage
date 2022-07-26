import Vue from 'vue'
import App from './App.vue'
//公共	弹框组件
import theConfirm from './components/confirm'

Vue.prototype.$confirm = theConfirm;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
