import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lumiere-api.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkYTlhYWJlMi1iZWI3LTRhMDYtYTY4OC03MWQ0OTVjMDQ3MjEiLCJpYXQiOjE2OTc3NjMzMzAsImV4cCI6MTY5ODM2ODEzMH0.bvWUgLiHjbDO8p_Uq9Hojh2dmCZMDzvvy9hOPx0VXiM'; //localStorage.getItem('token'); 
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default axiosInstance;
