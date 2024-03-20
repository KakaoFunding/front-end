import clsx from 'clsx';

import { useAuthStore, useUserStore } from 'store/authStore';

import { logout } from 'services/api/v1/oauth';

import styles from './LogoutModal.module.scss';

type LogoutModalProps = {
  modalState: boolean;
  userState: boolean;
};

const LogoutModal = ({ modalState, userState }: LogoutModalProps) => {
  const clearUser = useUserStore((state) => state.clearUserInfo);
  const clearAuth = useAuthStore((state) => state.clearAccessToken);

  const handleLogout = async () => {
    await logout();

    clearAuth();
    clearUser();
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
