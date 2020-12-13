import http from "../http";

export default {
  namespaced: true,
  state: {
    materialList: [],
    materialDescriptionList: []
  },
  getters: {
    getMaterialNames: state => {
      return state.materialList.map(material => material.name);
    },
    getMaterialList: state => {
      return state.materialList;
    },
    getMaterialDescriptionList: state => {
      return state.materialDescriptionList;
    }
  },
  mutations: {
    SET_MATERIAL_LIST: (state, payload) => {
      state.materialList.push(...payload);
    },
    SET_MATERIAL: (state, payload) => {
      state.materialList.push(payload);
    },
    SET_MATERIAL_DESCRIPTION_LIST: (state, payload) => {
      state.materialDescriptionList.push(...payload);
    },
    SET_MATERIAL_DESCRIPTION: (state, payload) => {
      state.materialDescriptionList.push(payload);
    },
    DELETE_MATERIAL_DESCRIPTION: (state, payload) => {
      let index = state.materialDescriptionList.findIndex(
        description => description.id == payload
      );
      state.materialDescriptionList.splice(index, 1);
    }
  },
  actions: {
    //Material profile
    fetchMaterial: async ({ commit }) => {
      try {
        let response = await http.get("material-profiles/");
        commit("SET_MATERIAL_LIST", response.data);
      } catch (error) {
        return error;
      }
    },
    saveMaterial: async ({ commit }, payload) => {
      try {
        let response = await http.post("material-profiles/", payload);
        commit("SET_MATERIAL", response.data);
        return response;
      } catch (error) {
        return error;
      }
    },

    //Material profile descriptions
    fetchMaterialDescription: async ({ commit }) => {
      try {
        let response = await http.get("material-profiles/descriptions/");
        commit("SET_MATERIAL_DESCRIPTION_LIST", response.data);
      } catch (error) {
        return error;
      }
    },
    saveMaterialDescription: async ({ commit }, payload) => {
      try {
        let response = await http.post(
          "material-profiles/descriptions/",
          payload
        );
        commit("SET_MATERIAL_DESCRIPTION", response.data);
        return response;
      } catch (error) {
        return error;
      }
    },
    deleteMaterialDescription: async ({ commit }, payload) => {
      try {
        let response = await http.delete(
          `material-profiles/descriptions/${payload.id}/`
        );
        commit("DELETE_MATERIAL_DESCRIPTION", payload.id);
        return response;
      } catch (error) {
        return error;
      }
    }
  }
};
