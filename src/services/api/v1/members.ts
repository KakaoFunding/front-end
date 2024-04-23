import {
  // AxiosError,
  // AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';

// eslint-disable-next-line import/no-cycle
import { apiV1 } from '.';

type RefreshAccessTokenProps = {
  accessToken: string;
};

export const refreshAccessToken = async ({
  accessToken,
}: RefreshAccessTokenProps): Promise<
  AxiosResponse<RefreshAccessTokenProps>
> => {
  // return new Promise((res, rej) => {
  //   const fakeApiResponse: AxiosResponse<RefreshAccessTokenProps> = {
  //     data: {
  //       accessToken: 'fakeToken',
  //     },
  //     status: 200,
  //     statusText: 'OK',
  //     headers: {} as Record<string, string>,
  //     config: { headers: {} as AxiosRequestHeaders },
  //   };

  //   // 토큰 만료 api
  //   // const fakeApiError: AxiosError<RefreshAccessTokenProps> = {
  //   //   name: 'AxiosError',
  //   //   message: 'Unauthorized',
  //   //   response: {
  //   //     data: { accessToken: 'wrongToken' }, // 에러 응답의 형태에 맞게 데이터를 설정
  //   //     status: 401,
  //   //     statusText: 'Unauthorized',
  //   //     headers: {},
  //   //     config: { headers: {} as AxiosRequestHeaders },
  //   //   },
  //   //   isAxiosError: true,
  //   //   toJSON: () => ({ message: 'Unauthorized', name: 'AxiosError' }),
  //   // };

  //   setTimeout(() => res(fakeApiResponse), 200);
  // });
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await apiV1.post('/oauth/reissue', {
    headers,
  });
  return response;
};
