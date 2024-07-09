import { useLocation } from 'react-router-dom';

import { useUserExists } from './useUserExists';

export const useLogin = () => {
  const isLoggedIn = useUserExists(); // 로그인 여부
  const { pathname, search } = useLocation();

  const navigateToLoginPage = () => {
    if (isLoggedIn) return;

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

  /**
   * If a user is not logged in pop up the confirmation window, else do action.
   * @param action callback function to execute when a user is logged in
   */
  const checkLoginBeforeAction = (action: () => void) => {
    if (isLoggedIn) action();
    else {
      const result = confirmLogin();
      if (result) navigateToLoginPage();
    }
  };

  return {
    isLoggedIn,
    navigateToLoginPage,
    confirmLogin,
    checkLoginBeforeAction,
  };
};
