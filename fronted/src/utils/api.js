import axios from "axios";

const API = axios.create({
  baseURL: "https://love-backend-7yko.onrender.com/api", // ✅ matches your backend
  withCredentials: true, 
});

export default API;
