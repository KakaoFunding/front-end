import {
  // AxiosError,
  // AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';

// eslint-disable-next-line import/no-cycle
import { apiV1 } from '.';

type RefreshAccessTokenResponseProps = {
  accessToken: string;
  refreshToken: {
    value: string;
    expiration: number;
  };
};

export const refreshAccessToken = async (
  accessToken: string | null,
  refreshToken: string,
): Promise<AxiosResponse<RefreshAccessTokenResponseProps>> => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await apiV1.post(
    '/oauth/reissue',
    { refreshToken },
    { headers },
  );
  return response;
};
