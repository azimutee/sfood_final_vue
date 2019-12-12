import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/';
import VueRouter from "vue-router";

Vue.config.productionTip = true

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
}).$mount('#app')
