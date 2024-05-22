import clsx from 'clsx';

import { useUserStore } from 'store/useUserStore';

import {
  clearLocalStorageItem,
  getLocalStorageItem,
} from 'services/api/v1/localStorage';
import { logout } from 'services/api/v1/oauth';
import {
  clearSessionStorageItem,
  getSessionStorageItem,
} from 'utils/sessionStorage';

import styles from './index.module.scss';

type LogoutModalProps = {
  modalState: boolean;
  userState: boolean;
};

const LogoutModal = ({ modalState, userState }: LogoutModalProps) => {
  const clearUser = useUserStore((state) => state.clearUserInfo);
  const accessToken = getSessionStorageItem('accessToken');
  const refreshToken = getLocalStorageItem('refreshToken');

  const handleLogout = async () => {
    await logout({ accessToken, refreshToken });

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
