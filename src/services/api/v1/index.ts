import axios from 'axios';

import {
  getSessionStorageItem,
  setSessionStorageItem,
} from 'utils/sessionStorage';

import { getLocalStorageItem, setLocalStorageItem } from './localStorage';
// members.ts와 현재 파일이 서로 import를 하고 있어서 린트 에러가 발생 중
// eslint-disable-next-line import/no-cycle
import { refreshAccessToken, refreshSocialAccessToken } from './members';

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
    const originRequest = config;

    if (status === 401) {
      if (error.response.data.code === 'KF003') {
        apiV1.defaults.headers.common.Authorization = null;
        const response = await refreshAccessToken();

        if (response.status === 200) {
          const { accessToken } = response.data;

          setSessionStorageItem('accessToken', accessToken);

          axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
          originRequest.headers.Authorization = `Bearer ${accessToken}`;

          let parsedOriginData;

          if (originRequest.data) {
            parsedOriginData = JSON.parse(originRequest.data);

            if (Array.isArray(parsedOriginData)) {
              originRequest.data = [...parsedOriginData];
            } else if (typeof parsedOriginData === 'object') {
              originRequest.data = { ...parsedOriginData };
            }
          }

          return axios(originRequest);
        }
      }
    } else if (status === 400) {
      if (error.response.data.code === 'KF008') {
        const socialAccessToken = getSessionStorageItem('socialToken');
        const socialRefreshToken = getLocalStorageItem('socialRefreshToken');
        const response = await refreshSocialAccessToken(
          socialAccessToken,
          socialRefreshToken,
        );
        const { accessToken, refreshToken } = response.data;
        const parsedOriginData = JSON.parse(originRequest.data);

        if (refreshToken.value && refreshToken.expiration) {
          setLocalStorageItem(
            'socialRefreshToken',
            refreshToken.value,
            refreshToken.expiration,
          );
        }

        setSessionStorageItem('socialAccessToken', accessToken);
        window.Kakao?.Auth.setAccessToken(accessToken);
        parsedOriginData.receiver.socialAccessToken = accessToken;
        originRequest.data = { ...parsedOriginData };

        return axios(originRequest);
      }
    }

    return Promise.reject(error);
  },
);
