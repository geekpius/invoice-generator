import axios from "axios";
import router from "../router";
const BASE_URL = process.env.VUE_APP_BASE_URL;
export default {
  namespace: true,
  state: {
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    user: localStorage.getItem("user") || null,
    error: null
  },
  mutations: {
    // SET_ERROR(state, errorMessage) {
    //   state.error = errorMessage;
    // },
    SET_TOKEN: (state, token) => {
      state.accessToken = token.accessToken;
      state.refreshToken = token.refreshToken;
    },
    SET_USER(state, userInfo) {
      state.user = userInfo;
    }
  },
  actions: {
    registerUser: async ({ dispatch }, formInfo) => {
      try {
        let response = await axios.post(`${BASE_URL}/auth/register/`, formInfo);
        let tokens = {
          accessToken: response.data.access,
          refreshToken: response.data.refresh
        };
        dispatch("getAuthUser", tokens);
      } catch (error) {
        console.log(error);
        // if (error.response.data.email) {
        //   let errorInfo = error.response.data.email[0];
        //   commit("SET_ERROR", errorInfo);
        // }
      }
    },
    async getAuthUser({ commit }, tokens) {
      commit("SET_TOKEN", tokens);
      try {
        let response = await axios.get(`${BASE_URL}/auth/user/`, {
          headers: {
            Authorization: `Bearer ${tokens.accessToken}`,
            "Content-Type": "application/json"
          }
        });
        commit("SET_USER", response.data);
        localStorage.setItem("accessToken", tokens.accessToken);
        localStorage.setItem("refreshToken", tokens.refreshToken);
        localStorage.setItem("user", JSON.stringify(response.data));
        router.push({ name: "Dashboard" });
      } catch (error) {
        console.log(error);
        commit("SET_TOKEN", { accessToken: null, refreshToken: null });
      }
    },
    loginUser: async ({ dispatch }, credentials) => {
      try {
        let response = await axios.post(`${BASE_URL}/auth/token/`, credentials);
        let tokens = {
          accessToken: response.data.access,
          refreshToken: response.data.refresh
        };
        dispatch("getAuthUser", tokens);
      } catch (error) {
        console.log(error);
        // if (error.response.data.email) {
        //   let errorInfo = error.response.data.email[0];
        //   commit("SET_ERROR", errorInfo);
        // }
      }
    },
    logoutUser: async () => {
      try {
        let accessToken = localStorage.getItem("accessToken");
        let refreshToken = localStorage.getItem("refreshToken");
        await axios.post(
          `${BASE_URL}/auth/logout/`,
          { refresh: refreshToken },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json"
            }
          }
        );
        router.push({ name: "Signin" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
