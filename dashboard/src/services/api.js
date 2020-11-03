import axios from 'axios';
import { createAlert } from 'slices/alerts';
import { config } from 'constants/config';

const http = axios.create({
  baseURL: config.API_URL,
});

http.defaults.headers.post['Content-Type'] = 'application/json';

export const interceptor = store => {
  http.interceptors.response.use(
    async response => {
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
    },
    error => {
      const { response, request } = error;
      if (response) {
        if (response.status >= 400 && response.status < 500) {
          store.dispatch(
            createAlert({ message: response.data.error.message, type: 'error' })
          );
          return Promise.reject(error);
        }
      } else if (request) {
        store.dispatch(
          createAlert({
            message: 'Request failed. Please try again.',
            type: 'error',
          })
        );
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );
};

export default http;
