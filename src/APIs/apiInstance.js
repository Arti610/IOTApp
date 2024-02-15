// apiService.js or apiService.ts

import axios from 'axios';
import API_CONFIG from '../Config/config.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiService = axios.create({
  baseURL: API_CONFIG.baseURL,
});

// Set up request interceptor
apiService.interceptors.request.use(async config => {
  try {
    const token = await AsyncStorage.getItem('token');
   
    if (token !== null) {
      config.headers['Authorization'] = `token ${token}`;
    }
    return config;
  } catch (error) {
    throw error;
  }
});

export default apiService;
