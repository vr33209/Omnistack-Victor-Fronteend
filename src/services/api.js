import axios from "axios";

const api = axios.create({
  baseURL: "https://victor-omnistack.herokuapp.com/"
});

export default api;
