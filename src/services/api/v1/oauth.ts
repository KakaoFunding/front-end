import axios, { AxiosResponse } from 'axios';

import { setSessionStorageItem } from 'utils/sessionStorage';

import { User } from 'types/user';

import { setLocalStorageItem } from './localStorage';

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

type SocialLogoutRequestProps = {
  socialAccessToken: string;
  providerId: string;
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

    const socialToken = res.data.access_token;
    const socialRefreshToken = res.data.refresh_token;
    const socialRefreshTokenExpiresIn = res.data.refresh_token_expires_in;
    setSessionStorageItem('socialToken', socialToken);
    setLocalStorageItem(
      'socialRefreshToken',
      socialRefreshToken,
      socialRefreshTokenExpiresIn,
    );
    return socialToken;
  } catch (error) {
    console.warn(error);
    return undefined;
  }
};

// 서버에 소셜토큰을 담아서 로그인 요청
export const login = async ({
  socialAccessToken,
}: LoginRequestProps): Promise<AxiosResponse<LoginResponseProps>> => {
  return apiV1.post(
    '/oauth/login',
    {
      provider: 'kakao',
      socialAccessToken,
    },
    {
      withCredentials: true,
    },
  );
};

// 로그아웃 요청
export const logout = async (): Promise<AxiosResponse> => {
  const response = await apiV1.post(
    '/oauth/logout',
    {},
    { withCredentials: true },
  );
  return response;
};

// 소셜 로그아웃
export const socialLogout = async ({
  providerId,
  socialAccessToken,
}: SocialLogoutRequestProps): Promise<AxiosResponse> => {
  const response = await apiV1.post('/oauth/social/logout', {
    provider: 'KAKAO',
    providerId,
    socialAccessToken,
  });

  return response;
};
