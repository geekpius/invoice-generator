import axios from "axios";
// import router from "../router";
const BASE_URL = process.env.VUE_APP_BASE_URL;
export default {
  namespaced: true,
  state: {
    profile: {}
  },
  mutations: {
    SET_PROFILE(state, payload) {
      state.profile = payload;
    }
  },
  actions: {
    fetchProfile: async ({ commit }) => {
      try {
        let accessToken = localStorage.getItem("token");
        let response = await axios.get(`${BASE_URL}/auth/profile/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json"
          }
        });
        commit("SET_PROFILE", response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
