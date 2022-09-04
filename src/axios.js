import axios from "axios";

let instance = axios.create({
  baseURL: "https://62c171f12af60be89ec757d8.mockapi.io",
  headers: { domain: "hi" },
});
export default instance;

instance.interceptors.request.use((config) => {
  config.headers.auth = "new token";
  return config;
});
instance.interceptors.response.use((response) => {
  return response;
});
