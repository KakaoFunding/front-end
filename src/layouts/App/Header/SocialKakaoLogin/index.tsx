import { useState } from 'react';

import { useUserStore } from 'store/useUserStore';

import { useLogin } from 'hooks/useLogin';

import LogoutModal from '../LogoutModal';

import styles from './index.module.scss';

const SocialKakaoLogin = () => {
  const { isLoggedIn, login } = useLogin();
  const userName = useUserStore().name;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      setIsModalOpen(!isModalOpen);
    } else {
      login();
    }
  };

  const buttonText = isLoggedIn ? (
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
      <LogoutModal modalState={isModalOpen} userState={isLoggedIn} />
    </>
  );
};

export default SocialKakaoLogin;
