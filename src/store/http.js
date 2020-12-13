import axios from "axios";
import store from "../store";
import router from "../router";

const BASE_URL = process.env.VUE_APP_BASE_URL;
const http = axios.create({
  baseURL: BASE_URL
});

const AUTH_TOKEN = localStorage.getItem("token");
if (AUTH_TOKEN) {
  http.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
}

http.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return new Promise(function(resolve, reject) {
      if (
        error.response.status === 401 &&
        error.config &&
        !error.config.__isRetryRequest
      ) {
        store.dispatch("auth/clearLogin").then(() => {
          router.push({ name: "Signin" });
        });
      }
      // return Promise.reject(error);
      return reject(error);
    });
  }
);

export default http;
