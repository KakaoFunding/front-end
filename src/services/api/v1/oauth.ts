import axios, { AxiosResponse } from 'axios';

import { setSessionStorageItem } from 'utils/sessionStorage';

import { User } from 'types/user';

import { apiV1 } from '.';

type TokenRequestProps = {
  code: string;
};

type LoginRequestProps = {
  socialAccessToken: string;
};

type LoginResponseProps = {
  accessToken: string;
  member: NonNullable<User>;
};

type LogoutRequestProps = {
  accessToken: string | null;
};

// 로그인: 토큰 발급
export const getKakaoOauthToken = async ({ code }: TokenRequestProps) => {
  const API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URL;
  const CLIENT_SECRET_KEY = import.meta.env.VITE_CLIENT_SECRET_KEY;

  try {
    const res = await axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      url: 'https://kauth.kakao.com/oauth/token',
      data: {
        grant_type: 'authorization_code',
        client_id: API_KEY,
        redirect_uri: REDIRECT_URI,
        code,
        client_secret: CLIENT_SECRET_KEY,
      },
    });

    setSessionStorageItem('socialToken', res.data.access_token);
    const token = res.data.access_token;
    return token;
  } catch (error) {
    console.warn(error);
    return undefined;
  }
};

// 서버에 소셜토큰을 담아서 로그인 요청
export const login = async ({
  socialAccessToken,
}: LoginRequestProps): Promise<AxiosResponse<LoginResponseProps>> => {
  return apiV1.post('/oauth/login', null, {
    params: { provider: 'kakao', socialAccessToken },
    withCredentials: true,
  });
};

// 로그아웃 요청
export const logout = async ({
  accessToken,
}: LogoutRequestProps): Promise<AxiosResponse<LogoutRequestProps>> => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const response = await apiV1.get('/oauth/logout', {
    headers,
  });
  return response;
};
