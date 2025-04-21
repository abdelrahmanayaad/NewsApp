import axios from 'axios';
import {API_KEY, BASE_URL} from '@env';

const apiRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  params: {
    apiKey: API_KEY,
  },
});

export default apiRequest;
