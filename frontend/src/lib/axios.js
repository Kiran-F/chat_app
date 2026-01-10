// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
//   withCredentials: true,
// });

import axios from "axios"; // code for deploy

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true
});