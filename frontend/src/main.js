import Vue from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')