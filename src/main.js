/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import navigation from "@/components/Navigation.vue";
import ImgLogo from "@/components/ImgLogo.vue";
window.$ = window.jQuery = require("jquery");

Vue.component("navigation", navigation);
Vue.component("ImgLogo", ImgLogo);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
