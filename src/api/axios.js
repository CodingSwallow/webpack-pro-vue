import axios from 'axios';

axios.defaults.baseURL = '';
axios.defaults.timeout = 30000;

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

// HTTPrequest拦截
axios.interceptors.request.use(config => {
  return config;
})

// HTTPresponse拦截
axios.interceptors.response.use(res => {
  return res.data;
}, error => {
  return Promise.reject(new Error(error));
})

export default axios;