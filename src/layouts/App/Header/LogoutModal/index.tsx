import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';
import { useUserStore } from 'store/useUserStore';

import {
  clearLocalStorageItem,
  getLocalStorageItem,
} from 'services/api/v1/localStorage';
import { logout, socialLogout } from 'services/api/v1/oauth';
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
  const navigate = useNavigate();

  const clearUser = useUserStore((state) => state.clearUserInfo);
  const clearSelectedFiends = useSelectedFriendsStore(
    (state) => state.clearSelectedFriends,
  );
  const refreshToken = getLocalStorageItem('refreshToken');
  const socialAccessToken = getSessionStorageItem('socialToken');
  const { providerId } = useUserStore();

  const handleLogout = async () => {
    await logout({ refreshToken });
    await socialLogout({ providerId, socialAccessToken });

    clearUser();
    clearSelectedFiends();
    clearSessionStorageItem();
    clearLocalStorageItem('refreshToken');

    navigate('/');
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
