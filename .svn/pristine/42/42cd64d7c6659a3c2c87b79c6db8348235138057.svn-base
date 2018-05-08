import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Common from 'utils/util';
import jquery from 'jquery';
import axiosMetonds from 'utils/axiosMetonds'
import VueClipboard from 'vue-clipboard2'
import './mock/index.js';  // 该项目所有请求使用mockjs模拟
import './login.js'
import './ui.js' 
import * as API from 'api/axiosMetonds';
Vue.use(VueClipboard);
// Vue.use(jquery);
Vue.config.productionTip = false;
// Vue.prototype.$post = axiosMetonds.post;
// Vue.prototype.$get = axiosMetonds.get;

//自定义全局方法
Vue.use(Common,{someOption:true});
Vue.use(axiosMetonds,{someOption:true});
var vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


