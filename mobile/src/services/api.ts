import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.106:3333",
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
