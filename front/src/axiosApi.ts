import axios from 'axios';
import { apiUrl } from './GlobalConstant';

const axiosApi = axios.create({
  baseURL: apiUrl,
});

axiosApi.defaults.withCredentials = true;

export default axiosApi;
