// axiosInstance.ts
import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://real-estate-leadtracking-landingpage-2.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default axiosInstance;
