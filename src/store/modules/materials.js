import http from "../http";

export default {
  namespaced: true,
  state: {
    materialList: [],
    materialDescriptionList: []
  },
  getters: {
    getMaterialList: state => {
      return state.materialList;
    },
    materialDescriptionList: state => {
      return state.materialDescriptionList;
    }
  },
  mutations: {
    SET_MATERIAL_LIST: (state, payload) => {
      state.materialList = payload;
    },
    SET_MATERIAL_DESCRIPTION_LIST: (state, payload) => {
      state.materialDescriptionList = payload;
    }
  },
  actions: {
    fetchMaterial: async ({ commit }) => {
      try {
        let response = await http.get("material-profiles/");
        commit("SET_MATERIAL_LIST", response.data);
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
