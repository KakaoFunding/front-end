import axios from 'axios';

// import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';
// import { useUserStore } from 'store/useUserStore';

import {
  getSessionStorageItem,
  // clearSessionStorageItem,
  setSessionStorageItem,
} from 'utils/sessionStorage';

import {
  // clearLocalStorageItem,
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
    const reissueUrlPattern = /\/oauth\/reissue/;

    if (accessToken && !reissueUrlPattern.test(newConfig.url || '')) {
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

    if (status === 401) {
      if (error.response.data.code === 'KF003') {
        const originRequest = config;
        const usersRefreshToken = getLocalStorageItem('refreshToken');
        apiV1.defaults.headers.common.Authorization = null;
        const response = await refreshAccessToken(usersRefreshToken);

        if (response.status === 200) {
          const { accessToken, refreshToken } = response.data;
          const { value, expiration } = refreshToken;

          setSessionStorageItem('accessToken', accessToken);
          setLocalStorageItem('refreshToken', value, expiration);

          axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
          originRequest.headers.Authorization = `Bearer ${accessToken}`;

          let parsedOriginData;

          if (originRequest.data) {
            parsedOriginData = JSON.parse(originRequest.data);

            if (Array.isArray(parsedOriginData)) {
              originRequest.data = [...parsedOriginData];
            } else if (typeof parsedOriginData === 'object') {
              originRequest.data = { ...parsedOriginData };

              if (parsedOriginData.refreshToken) {
                originRequest.data = {
                  ...parsedOriginData,
                  refreshToken: value,
                };
              }
            }
          }

          return axios(originRequest);
        }
      }
      // 추후 에러 코드가 세분화 되면 다시 리팩토링 예정
      // if (response.status === 404) {
      //   useUserStore.getState().clearUserInfo();
      //   useSelectedFriendsStore.getState().clearSelectedFriends();
      //   clearSessionStorageItem();
      //   clearLocalStorageItem('refreshToken');
      //   window.location.replace('/');
      // }
    }

    return Promise.reject(error);
  },
);
