import axios from 'axios';

import { useAuthStore, useUserStore } from 'store/useAuthStore';

import {
  getSessionStorageItem,
  clearSessionStorageItem,
} from 'utils/sessionStorage';

import {
  clearLocalStorageItem,
  getLocalStorageItem,
  setLocalStorageItem,
} from './localStorage';
// members.ts와 현재 파일이 서로 import를 하고 있어서 린트 에러가 발생 중
// eslint-disable-next-line import/no-cycle
import { refreshAccessToken } from './members';

export const apiV1 = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/v1`,
});

apiV1.interceptors.request.use(
  (config) => {
    const newConfig = config;
    const accessToken = getSessionStorageItem('accessToken');
    if (accessToken) {
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
    }
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  },
);

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
      console.log(error.response.data.message);
      // if (error.response.data.message === 'Unauthorized') {
      const originRequest = config;
      // const usersAuthState = useAuthStore.getState();
      // const usersAccessToken = usersAuthState.accessToken;
      const usersRefreshToken = getLocalStorageItem('refreshToken');
      // console.log(usersAccessToken);
      console.log(usersRefreshToken);
      const response = await refreshAccessToken(
        // usersAccessToken,
        usersRefreshToken,
      );

      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data;
        const { value, expiration } = refreshToken;

        useAuthStore.setState({ accessToken });
        setLocalStorageItem('refreshToken', value, expiration);
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        originRequest.headers.Authorization = `Bearer ${accessToken}`;

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
