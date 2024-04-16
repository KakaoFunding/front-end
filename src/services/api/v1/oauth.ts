import axios, {
  AxiosRequestHeaders,
  AxiosResponse,
  // RawAxiosResponseHeaders,
} from 'axios';

import { User } from 'types/user';

import { Data } from './service';

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

// 로그인: 토큰 발급
// eslint-disable-next-line consistent-return
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

    Data.set('socialToken', res.data.access_token);
    const token = res.data.access_token;
    return token;
  } catch (error) {
    console.warn(error);
  }
};

// 서버에 소셜토큰을 담아서 로그인 요청
export const login = async ({
  socialAccessToken,
}: LoginRequestProps): Promise<AxiosResponse<LoginResponseProps>> => {
  return apiV1.post('/oauth/login', null, {
    params: { provider: 'kakao', socialAccessToken },
  });
};

export const logout = async (): Promise<AxiosResponse<LoginResponseProps>> => {
  return new Promise((res) => {
    const fakeApiResponse: AxiosResponse<LoginResponseProps> = {
      data: {
        accessToken: 'fakeAccessToken',
        member: {
          name: 'fake guy',
          profileUrl: 'fakeUrl',
        },
      },
      status: 200,
      statusText: 'OK',
      headers: {} as Record<string, string>,
      config: { headers: {} as AxiosRequestHeaders },
    };

    setTimeout(() => res(fakeApiResponse), 200);
  });
  // const response = await apiV1.get('/oauth/logout');
  // return response;
};
