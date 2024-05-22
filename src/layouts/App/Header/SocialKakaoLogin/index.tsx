import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useUserStore } from 'store/useUserStore';

import { useUserExists } from 'hooks/useUserExists';

import LogoutModal from '../LogoutModal';

import styles from './index.module.scss';

const SocialKakaoLogin = () => {
  const { pathname, search } = useLocation();
  const isUserExists = useUserExists();
  const currentUrl = pathname + search;
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URL;
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&state=${currentUrl}`;
  const userName = useUserStore().name;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = () => {
    window.location.href = KAKAO_URL;
  };

  const handleAuthAction = () => {
    if (isUserExists) {
      setIsModalOpen(!isModalOpen);
    } else {
      handleLogin();
    }
  };

  const buttonText = isUserExists ? (
    <>
      <span>{userName}</span>
      <span className={styles.ico_logout}>모달 버튼</span>
    </>
  ) : (
    '로그인'
  );

  return (
    <>
      <button
        className={styles.btn_login}
        type="button"
        onClick={handleAuthAction}
      >
        {buttonText}
      </button>
      <LogoutModal modalState={isModalOpen} userState={isUserExists} />
    </>
  );
};

export default SocialKakaoLogin;
