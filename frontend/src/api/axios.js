import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

// // Add a request interceptor to automatically set the CSRF token
axiosClient.interceptors.request.use(function (config) {
  // Get the CSRF token from the cookie
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('XSRF-TOKEN='))
    ?.split('=')[1];

  if (token) {
    config.headers['X-XSRF-TOKEN'] = decodeURIComponent(token);
  }

  return config;
});
