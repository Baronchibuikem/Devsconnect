import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import vueToasted from "vue-toasted"
import "bootstrap/dist/css/bootstrap.min.css";
import Popper from "popper.js";
import jQuery from "jquery";
import "bootstrap";
global.Popper = Popper;
global.jQuery = jQuery;

Vue.config.productionTip = false

// load toast plugin
Vue.use(vueToasted, {
  iconPack: "fontawesome"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
