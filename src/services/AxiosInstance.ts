import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import TokenStorage, { TokenKey } from '../utils/TokenStorage';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const { getToken } = new TokenStorage();

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  config => {
    const token = getToken(TokenKey);
    if (token) config.headers!.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default instance;
