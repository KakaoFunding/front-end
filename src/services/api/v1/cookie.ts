// 린트 논의 필요
// eslint-disable-next-line import/no-extraneous-dependencies
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getCookie = (key: string) => {
  const foundCookie = cookies.get(key);
  console.log(foundCookie);
  return foundCookie;
};
