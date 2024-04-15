import axios, {
  AxiosRequestHeaders,
  AxiosResponse,
  // RawAxiosResponseHeaders,
} from 'axios';

import { useAuthStore } from 'store/useAuthStore';

import { User } from 'types/user';

import { Data } from './service';

// import { apiV1 } from '.';

type LoginRequestProps = {
  code: string;
};

type LoginResponseProps = {
  accessToken: string;
  member: NonNullable<User>;
};

// export const login = async ({
//   code,
// }: LoginRequestProps): Promise<AxiosResponse<LoginResponseProps>> => {
//   return new Promise((res) => {
//     const fakeApiResponse: AxiosResponse<LoginResponseProps> = {
//       data: {
//         accessToken: 'fakeAccessToken',
//         member: {
//           name: 'fake guy',
//           profileUrl: 'fakeUrl',
//         },
//       },
//       status: 200,
//       statusText: 'OK',
//       headers: {} as RawAxiosResponseHeaders,
//       config: { headers: {} as AxiosRequestHeaders },
//     };

//     setTimeout(() => res(fakeApiResponse), 200);
//   });
//   // apiV1.post('/oauth/login', null, {
//   //   params: { provider: 'kakao', code },
//   // });
// };

// 로그인: 토큰 발급
export const getKakaoOauthToken = async ({ code }: LoginRequestProps) => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const makeFormData = (params: { [key: string]: string }) => {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      searchParams.append(key, params[key]);
    });

    return searchParams;
  };

  try {
    const res = await axios({
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      url: 'https://kauth.kakao.com/oauth/token',
      data: makeFormData({
        grant_type: 'authorization_code',
        client_id: import.meta.env.VITE_REST_API_KEY,
        // redirect_uri는 배포가 완료되면 수정되어야함
        redirect_uri: import.meta.env.VITE_REDIRECT_URL,
        code,
      }),
    });

    Data.set('kakaoLogin', res.data.access_token);
    setAccessToken(res.data.access_token);
  } catch (error) {
    console.warn(error);
  }
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
