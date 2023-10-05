import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lumiere-api.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkYTlhYWJlMi1iZWI3LTRhMDYtYTY4OC03MWQ0OTVjMDQ3MjEiLCJpYXQiOjE2OTY1MTE1MzgsImV4cCI6MTY5NzExNjMzOH0.x5aqB97zA6NMizKRbwuvV7SovaOTFKi31hsAi8Yqko4'; //localStorage.getItem('token'); 
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default axiosInstance;
