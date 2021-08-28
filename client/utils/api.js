// api.js : axios 의 config 를 저장하고
import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.0.5:8000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default API;
