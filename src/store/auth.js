import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL;
export default {
  namespaced: true,
  state: {
    accessToken: localStorage.getItem("token") || null,
    refreshToken: localStorage.getItem("refresh") || null,
    currentUser: localStorage.getItem("user") || null,
    error: null
  },
  getters: {
    isLoggedIn: state => {
      return state.accessToken !== null;
    },
    getCurrentUser: state => {
      return JSON.parse(state.currentUser) || { name: "" };
    }
  },
  mutations: {
    // SET_ERROR(state, errorMessage) {
    //   state.error = errorMessage;
    // },
    SET_TOKEN: (state, payload) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    SET_USER(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    registerUser: ({ commit }, formInfo) => {
      return new Promise((resolve, reject) => {
        axios
          .post(`${BASE_URL}/auth/register/`, formInfo)
          .then(response => {
            localStorage.setItem("token", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);
            commit("SET_TOKEN", response.data);
            resolve(response);
          })
          .catch(error => {
            console.log(error);
            localStorage.removeItem("token");
            localStorage.removeItem("refresh");
            commit("SET_TOKEN", { access: null, refresh: null });
            reject(error);
          });
      });
    },
    loginUser: ({ commit }, credentials) => {
      return new Promise((resolve, reject) => {
        axios
          .post(`${BASE_URL}/auth/token/`, credentials)
          .then(response => {
            localStorage.setItem("token", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);
            commit("SET_TOKEN", response.data);
            resolve(response);
          })
          .catch(error => {
            console.log(error);
            localStorage.removeItem("token");
            localStorage.removeItem("refresh");
            commit("SET_TOKEN", { access: null, refresh: null });
            reject(error);
          });
      });
    },
    logoutUser: () => {
      return new Promise((resolve, reject) => {
        let accessToken = localStorage.getItem("token");
        let refreshToken = localStorage.getItem("refresh");
        axios
          .post(
            `${BASE_URL}/auth/logout/`,
            { refresh: refreshToken },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
              }
            }
          )
          .then(response => {
            localStorage.removeItem("token");
            localStorage.removeItem("refresh");
            localStorage.removeItem("user");
            resolve(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    },
    getAuthUser: ({ commit }, token) => {
      axios
        .get(`${BASE_URL}/auth/user/`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          localStorage.setItem("user", JSON.stringify(response.data));
          commit("SET_USER", JSON.stringify(response.data));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
