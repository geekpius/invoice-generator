import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import titleMixin from "./mixins/titleMixin";
import VeeValidate from "vee-validate";

Vue.config.productionTip = false;

Vue.mixin(titleMixin);
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
