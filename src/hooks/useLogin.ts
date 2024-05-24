import { useLocation } from 'react-router-dom';

import { useUserExists } from './useUserExists';

export const useLogin = () => {
  const isLoggedIn = useUserExists(); // 로그인 여부

  const login = () => {
    if (!isLoggedIn) return;

    const { pathname, search } = useLocation();
    const currentUrl = pathname + search;
    const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URL;
    const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&state=${currentUrl}&scope=friends`;

    window.location.href = KAKAO_URL;
  };

  const confirmLogin = () => {
    const message = '로그인 후 이용하실 수 있습니다.\n로그인하시겠습니까?';
    const result = window.confirm(message);

    return result;
  };

  return { isLoggedIn, login, confirmLogin };
};
