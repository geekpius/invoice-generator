import http from "../http";
export default {
  namespaced: true,
  state: {
    accessToken: localStorage.getItem("token") || null,
    refreshToken: localStorage.getItem("refresh") || null,
    currentUser: localStorage.getItem("user") || null
  },
  getters: {
    isLoggedIn: state => {
      return state.accessToken !== null;
    },
    getCurrentUser: state => {
      return JSON.parse(state.currentUser) || { name: "Fiifi Pius" };
    }
  },
  mutations: {
    SET_TOKEN: (state, payload) => {
      state.accessToken = payload.access;
      state.refreshToken = payload.resfresh;
    },
    SET_USER(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    registerUser: async ({ commit }, formInfo) => {
      try {
        let response = http.post("auth/register/", formInfo);
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        commit("SET_TOKEN", response.data);
        return response;
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        commit("SET_TOKEN", { access: null, refresh: null });
        return error;
      }
    },
    loginUser: async ({ commit }, credentials) => {
      try {
        let response = await http.post("auth/token/", credentials);
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        commit("SET_TOKEN", response.data);
        return response;
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        commit("SET_TOKEN", { access: null, refresh: null });
        return error;
      }
    },
    logoutUser: async ({ commit }) => {
      let refreshToken = localStorage.getItem("refresh");
      try {
        let response = await http.post("/auth/logout/", {
          refresh: refreshToken
        });
        commit("SET_TOKEN", { access: null, refresh: null });
        commit("SET_USER", null);
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
        delete http.defaults.headers.common["Authorization"];
        return response;
      } catch (error) {
        return error;
      }
    },
    getAuthUser: async ({ commit }) => {
      try {
        let response = await http.get("auth/user/");
        localStorage.setItem("user", JSON.stringify(response.data));
        commit("SET_USER", JSON.stringify(response.data));
        return response;
      } catch (error) {
        return error;
      }
    },
    clearLogin: async ({ commit }) => {
      commit("SET_TOKEN", { access: null, refresh: null });
      commit("SET_USER", null);
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      localStorage.removeItem("user");
      delete http.defaults.headers.common["Authorization"];
    }
  }
};
