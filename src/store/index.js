import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import users from "./modules/users";
import settings from "./modules/settings";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    users,
    settings
  }
});
