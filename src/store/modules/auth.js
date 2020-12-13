import http from "../http";

export default {
  namespaced: true,
  state: {
    accessToken: localStorage.getItem("token") || null,
    refreshToken: localStorage.getItem("refresh") || null,
    currentUser: localStorage.getItem("user") || JSON.stringify({}),
    responseText: null
  },
  getters: {
    getTesponseText: state => {
      return state.responseText;
    },
    isLoggedIn: state => {
      return state.accessToken !== null;
    },
    getCurrentUser: state => {
      return JSON.parse(state.currentUser);
    }
  },
  mutations: {
    SET_RESPONSETEXT: (state, payload) => {
      state.responseText = payload;
    },
    SET_TOKEN: (state, payload) => {
      state.accessToken = payload.access;
      state.refreshToken = payload.refresh;
    },
    SET_USER(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    registerUser: async ({ commit }, payload) => {
      try {
        let response = await http.post("auth/register/", payload);
        commit("SET_RESPONSETEXT", {
          success: "Signed up successful. You can now sign in."
        });
        return response;
      } catch (error) {
        if (error.response.data.email) {
          commit("SET_RESPONSETEXT", {
            error: error.response.data.email[0]
          });
        }
        return error;
      }
    },
    loginUser: async ({ commit, dispatch }, credentials) => {
      try {
        let response = await http.post("auth/token/", credentials);
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        commit("SET_TOKEN", response.data);
        http.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.access}`;
        dispatch("getAuthUser", response.data.access);
        return response;
      } catch (error) {
        if (error.response.data.detail) {
          commit("SET_RESPONSETEXT", {
            error: "Invalid credentials were given."
          });
        }
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
        commit("SET_TOKEN", { access: null, refresh: null });
        commit("SET_USER", null);
        return error;
      }
    },
    logoutUser: async ({ commit }) => {
      let refreshToken = localStorage.getItem("refresh");
      try {
        let response = await http.post("auth/logout/", {
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
    },
    //UPDATE USER
    updateUser: async ({ commit }, payload) => {
      try {
        let response = await http.put("auth/user/", payload);
        commit("SET_USER", response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        return response;
      } catch (error) {
        return error;
      }
    }
  }
};
