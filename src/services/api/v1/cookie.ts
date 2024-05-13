// 린트 논의 필요
// eslint-disable-next-line import/no-extraneous-dependencies
import { useCookies } from 'react-cookie';

export const getCookie = (key: string) => {
  const [cookies] = useCookies([key]);
  const { refreshToken } = cookies;
  return refreshToken;
};
