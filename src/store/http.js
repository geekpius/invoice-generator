import axios from "axios";

const BASE_URL = process.env.VUE_APP_BASE_URL;
const http = axios.create({
  baseURL: BASE_URL
});

const AUTH_TOKEN = localStorage.getItem("token");
if (AUTH_TOKEN) {
  http.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
}

export default http;
