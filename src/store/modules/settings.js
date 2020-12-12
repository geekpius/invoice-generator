import http from "../http";

export default {
  namespaced: true,
  state: {
    percentage: {}
  },
  getters: {
    getPercentage: state => {
      return state.percentage;
    }
  },
  mutations: {
    SET_PERCENTAGE: (state, payload) => {
      state.percentage = payload;
    }
  },
  actions: {
    fetchPercentage: async ({ commit }) => {
      try {
        let response = await http.get("settings/percentages/");
        commit("SET_PERCENTAGE", response.data);
      } catch (error) {
        return error;
      }
    },
    updatePercentage: async ({ commit }, payload) => {
      try {
        let response = await http.put("settings/percentages/", payload);
        commit("SET_PERCENTAGE", response.data);
        return response;
      } catch (error) {
        return error;
      }
    }
  }
};
