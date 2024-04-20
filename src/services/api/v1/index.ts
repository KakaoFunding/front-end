import axios from 'axios';

import { useAuthStore, useUserStore } from 'store/useAuthStore';

import { refreshAccessToken } from './members';

export const apiV1 = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/v1`,
});

apiV1.interceptors.response.use(
  (res) => {
    return res;
  },

  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      if (error.response.data.message === 'Unauthorized') {
        const originRequest = config;
        const response = await refreshAccessToken();

        if (response.status === 200) {
          const newAccessToken = response.data.accessToken;
          useAuthStore.setState({ accessToken: newAccessToken });
          // axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;

          // originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originRequest);
        }

        if (response.status === 404) {
          useUserStore.getState().clearUserInfo();
          window.location.replace('/');
        }
      }
    }
    return Promise.reject(error);
  },
);
