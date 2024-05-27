import { AxiosResponse } from 'axios';

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
  refreshToken: string,
): Promise<AxiosResponse<RefreshAccessTokenResponseProps>> => {
  const response = await apiV1.post('/oauth/reissue', { refreshToken });
  return response;
};
