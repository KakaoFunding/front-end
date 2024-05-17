import clsx from 'clsx';

import { useAuthStore, useUserStore } from 'store/useAuthStore';

import {
  clearLocalStorageItem,
  getLocalStorageItem,
} from 'services/api/v1/localStorage';
import { logout } from 'services/api/v1/oauth';
import { clearSessionStorageItem } from 'services/api/v1/sessionStorage';

import styles from './index.module.scss';

type LogoutModalProps = {
  modalState: boolean;
  userState: boolean;
};

const LogoutModal = ({ modalState, userState }: LogoutModalProps) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const clearUser = useUserStore((state) => state.clearUserInfo);
  const clearAccessToken = useAuthStore((state) => state.clearAccessToken);
  const clearSocialToken = useAuthStore((state) => state.clearSocialToken);
  const refreshToken = getLocalStorageItem('refreshToken');

  const handleLogout = async () => {
    await logout({ accessToken, refreshToken });

    clearAccessToken();
    clearSocialToken();
    clearUser();
    clearSessionStorageItem();
    clearLocalStorageItem('refreshToken');
  };

  return (
    <button
      type="button"
      className={clsx(styles.btn_logout, {
        [styles.btn_logout_close]: !modalState || !userState,
      })}
      onClick={handleLogout}
    >
      로그아웃
    </button>
  );
};

export default LogoutModal;
