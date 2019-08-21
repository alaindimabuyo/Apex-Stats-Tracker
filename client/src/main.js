import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueToast from "vue-toasted";

Vue.config.productionTip = false;
// load toast
Vue.use(VueToast, { iconPack: "fontawesome" });
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
