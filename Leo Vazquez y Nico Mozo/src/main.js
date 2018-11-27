import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Auth from './packages/Auth'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Auth);

window.axios = axios;
window.URL = "http://localhost:8081/"
axios.defaults.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
