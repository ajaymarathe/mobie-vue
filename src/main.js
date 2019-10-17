import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@/assets/css/common.css";
import "@/assets/css/animate.css";

import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css';

// material icons
import 'material-icons/iconfont/material-icons.scss';

//defined as global component
Vue.component('V-MaterialIcon', require('vue-materials-icon/src/components/MaterialIcon').default);

Vue.component('M-Button', require('./components/buttons/MobieButtons.vue').default);
Vue.component('M-Badge', require('./components/badge/MobieBadge.vue').default);





Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");