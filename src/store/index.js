import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   isLogin: false
  // },
  // mutations: {},
  // actions: {},
  modules: {
    auth
  }
});
