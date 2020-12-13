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
