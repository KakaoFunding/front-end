import clsx from 'clsx';

import { useAuthStore, useUserStore } from 'store/useAuthStore';

import { logout } from 'services/api/v1/oauth';
import { Data } from 'services/api/v1/service';

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

  const handleLogout = async () => {
    await logout({ accessToken });

    clearAccessToken();
    clearSocialToken();
    clearUser();
    Data.clear();
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
