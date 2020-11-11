import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Icon from 'vue2-svg-icon/Icon';
import http from "./api/request"
Vue.component('icon', Icon);
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.use(require('vue-cookies'))
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')