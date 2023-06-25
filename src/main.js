import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.config.errorHandler = function (error, vm, info) {
  console.log('=============error, vm, info: ', error, vm, info);
}
Vue.config.warnHandler = function (msg, vm, trace) {
  console.log('=============msg, vm, trace: ', msg, vm, trace);
}

new Vue({
  render: h => h(App),
}).$mount('#app');

