import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import titleMixin from "./mixins/titleMixin";
import VeeValidate from "vee-validate";
// import axios from "axios";

Vue.config.productionTip = false;

Vue.mixin(titleMixin);
Vue.use(VeeValidate);

// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     return new Promise(function(resolve, reject) {
//       if (error.response.status == 401) {
//         this.store.dispatch("auth/clearLogin");
//       }
//       // return Promise.reject(error);
//       return reject(error);
//     });
//   }
// );

router.beforeEach((to, from, next) => {
  let isLoggedIn = store.getters["auth/isLoggedIn"];
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn) {
      next({
        name: "Signin"
        // query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn) {
      next({
        name: "Dashboard"
        // query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
