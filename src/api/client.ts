import axios from 'axios';

const client = axios.create();
//API 주소
client.defaults.baseURL = `http://localhost/`;
//헤더 설정
axios.defaults.headers.common['Authorization'] = `Bearer a1b2c3d4`;

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default client;