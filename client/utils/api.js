// api.js : axios �� config �� �����ϰ�
import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.0.5:8000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default API;
