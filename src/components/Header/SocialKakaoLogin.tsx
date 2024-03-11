import { useLocation } from 'react-router-dom';

import { useAuthStore, useUserExists, useUserStore } from 'store/index';

import { logout } from 'services/api/v1/oauth';

import styles from './SocialKakaoLogin.module.scss';

const SocialKakaoLogin = () => {
  const { pathname, search } = useLocation();
  const userExists = useUserExists();
  const currentUrl = pathname + search;
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URL;
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&state=${currentUrl}`;

  const clearUser = useUserStore((state) => state.clearUserInfo);
  const clearAuth = useAuthStore((state) => state.clearAccessToken);

  const handleLogin = () => {
    window.location.href = KAKAO_URL;
  };

  const handleLogout = async () => {
    await logout();

    clearAuth();
    clearUser();
  };

  const handleAuthAction = userExists ? handleLogout : handleLogin;

  const buttonText = userExists ? '로그아웃' : '로그인';

  return (
    <button
      className={styles.btn_login}
      type="button"
      onClick={handleAuthAction}
    >
      {buttonText}
    </button>
  );
};

export default SocialKakaoLogin;
