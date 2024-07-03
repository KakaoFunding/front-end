import { AxiosResponse } from 'axios';

// eslint-disable-next-line import/no-cycle
import { apiV1 } from '.';

type RefreshAccessTokenResponseProps = {
  accessToken: string;
};

type RefreshSocialAccessTokenResponseProps = {
  accessToken: string;
  refreshToken: {
    value: string | null;
    expiration: number | null;
  };
};

export const refreshAccessToken = async (): Promise<
  AxiosResponse<RefreshAccessTokenResponseProps>
> => {
  const response = await apiV1.post(
    '/oauth/reissue',
    {},
    {
      withCredentials: true,
    },
  );
  return response;
};

export const refreshSocialAccessToken = async (
  socialAccessToken: string,
  socialRefreshToken: string,
): Promise<AxiosResponse<RefreshSocialAccessTokenResponseProps>> => {
  const headers = { Authorization: `Bearer ${socialAccessToken}` };
  const response = await apiV1.post(
    '/oauth/social/reissue',
    { provider: 'kakao', refreshToken: socialRefreshToken },
    { headers },
  );
  return response;
};
