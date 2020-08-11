import axios from 'axios';

const $http = axios.create({
  baseURL: 'https://vapor-invoice.herokuapp.com',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  axiosInstance: $http,
};
