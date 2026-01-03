import axios from "axios";

const API = axios.create({
    // baseURL: "https://love-backend-7yko.onrender.com/api", // ✅ matches your backend
  //  baseURL:"http://localhost:5000/api",
  baseURL:"https://love2-backend.onrender.com",
  withCredentials: true, 
});

export default API;
