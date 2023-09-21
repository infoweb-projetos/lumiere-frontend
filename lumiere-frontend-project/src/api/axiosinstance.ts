import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lumiere-api.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkYTlhYWJlMi1iZWI3LTRhMDYtYTY4OC03MWQ0OTVjMDQ3MjEiLCJpYXQiOjE2OTUzMDA4MDMsImV4cCI6MTY5NTkwNTYwM30.ajb8TMNDVfBUtfFeTIj6T5MJXEdnXn0yHuCaKD2DanQ'; //localStorage.getItem('token'); 
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default axiosInstance;
