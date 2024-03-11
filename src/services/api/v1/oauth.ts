import { AxiosResponse } from 'axios';

import { apiV1 } from '.';

interface LoginRequestProps {
  code: string;
}

interface LoginResponseProps {
  accessToken: 'string';
  member: {
    profileUrl: 'string' | null;
    name: 'string' | null;
  };
}

export const login = async ({
  code,
}: LoginRequestProps): Promise<AxiosResponse<LoginResponseProps>> => {
  return apiV1.post('/oauth/login', null, {
    params: { provider: 'kakao', code },
  });
};
