import axios from 'axios';

import { useUserStore } from 'store/useUserStore';

import {
  clearLocalStorageItem,
  getLocalStorageItem,
  setLocalStorageItem,
} from './localStorage';
// members.ts와 현재 파일이 서로 import를 하고 있어서 린트 에러가 발생 중
// eslint-disable-next-line import/no-cycle
import { refreshAccessToken } from './members';
import {
  clearSessionStorageItem,
  setSessionStorageItem,
} from './sessionStorage';

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

    if (status === 403) {
      // if (error.response.data.message === 'Unauthorized') {
      const originRequest = config;
      const usersRefreshToken = getLocalStorageItem('refreshToken');
      const response = await refreshAccessToken(usersRefreshToken);

      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data;
        const { value, expiration } = refreshToken;

        setSessionStorageItem('accessToken', accessToken);
        setLocalStorageItem('refreshToken', value, expiration);

        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        originRequest.headers.Authorization = `Bearer ${accessToken}`;
        originRequest.data = { refreshToken: value };

        return axios(originRequest);
      }

      if (response.status === 404) {
        useUserStore.getState().clearUserInfo();
        clearSessionStorageItem();
        clearLocalStorageItem('refreshToken');
        window.location.replace('/');
      }
      // }
    }
    return Promise.reject(error);
  },
);
