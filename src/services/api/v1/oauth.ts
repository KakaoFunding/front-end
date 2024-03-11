import {
  AxiosRequestHeaders,
  AxiosResponse,
  RawAxiosResponseHeaders,
} from 'axios';

import { apiV1 } from '.';

interface LoginRequestProps {
  code: string;
}

interface LoginResponseProps {
  accessToken: string;
  member: {
    name: string;
    profileUrl: string;
  };
}

export const login = async ({
  code,
}: LoginRequestProps): Promise<AxiosResponse<LoginResponseProps>> => {
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
      headers: {} as RawAxiosResponseHeaders,
      config: { headers: {} as AxiosRequestHeaders },
    };

    setTimeout(() => res(fakeApiResponse), 200);
  });
  // apiV1.post('/oauth/login', null, {
  //   params: { provider: 'kakao', code },
  // });
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
