import Vue from 'vue'
import App from './App.vue';
import ButtonCounter from './common/ButtonCounter.vue';
import BlogPost from './common/BlogPost.vue';
import InputBox from './common/InputBox.vue';
import AlertBox from './common/AlertBox.vue';

Vue.config.productionTip = false;
Vue.config.errorHandler = function (error, vm, info) {
  console.log('=============error, vm, info: ', error, vm, info);
}
Vue.config.warnHandler = function (msg, vm, trace) {
  console.log('=============msg, vm, trace: ', msg, vm, trace);
}
Vue.config.keyCodes = {
  ['page-down']: 40,
}

Vue.component('button-counter', ButtonCounter);
Vue.component('blog-post', BlogPost);
Vue.component('input-box', InputBox);
Vue.component('alert-box', AlertBox);

new Vue({
  render: h => h(App),
}).$mount('#app');
