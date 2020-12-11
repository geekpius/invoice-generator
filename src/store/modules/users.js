import http from "../http";

export default {
  namespaced: true,
  state: {
    profile: {}
  },
  getters: {
    getProfile: state => {
      return state.profile;
    }
  },
  mutations: {
    SET_PROFILE: (state, payload) => {
      state.profile = payload;
    }
  },
  actions: {
    updateUser: async (_, payload) => {
      try {
        let response = await http.put("auth/user/", payload);
        localStorage.setItem("user", JSON.stringify(response.data));
        return response;
      } catch (error) {
        return error;
      }
    },
    fetchProfile: async ({ commit }) => {
      try {
        let response = await http.get("auth/profile/");
        commit("SET_PROFILE", response.data);
      } catch (error) {
        return error;
      }
    },
    updateProfile: async ({ commit }, payload) => {
      try {
        let response = await http.put("auth/profile/", payload);
        commit("SET_PROFILE", response.data);
        return response;
      } catch (error) {
        return error;
      }
    }
  }
};
