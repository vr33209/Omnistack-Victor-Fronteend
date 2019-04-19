import axios from "axios";

const api = axios.create({
  baseURL: "https://victor-backeend-omnistack.herokuapp.com"
});

export default api;
