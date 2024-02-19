// apiService.js or apiService.ts

import axios from 'axios';
import API_CONFIG from '../Config/config.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiService = axios.create({
  baseURL: API_CONFIG.baseURL,
});

apiService.interceptors.request.use(
  (config) => {
    const token = AsyncStorage.getItem('token');
    if (token !== null) {
      config.headers["Authorization"] = `bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Set up response interceptor
apiService.interceptors.response.use(
  (response) => {
    // Do something with response data
    // console.log(response);
    return response;
  },
  (error) => {
    // Do something with response error
    // console.log(error);
    if (!error.response) {
      // handle error
    } else if (error.response.status === 403) {
      // handle error
    } else if (error.response.status === 401) {
      // handle error
    } else {
      // handle error
    }
    return Promise.reject(error);
  }
);


export default apiService;
