import ProfileImg from 'components/feature/ProfileImg';
import MainWrapper from 'components/ui/MainWrapper';

import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';
import { useUserStore } from 'store/useUserStore';

import { useKakaoPicker } from 'hooks/useKakaoPicker';
import { useLogin } from 'hooks/useLogin';
import { getSessionStorageItem } from 'utils/sessionStorage';

import DefaultImgUrl from 'assets/bg_profile_default.png';

import FriendFunding from './FriendFunding';
import FriendWish from './FriendWish';

import styles from './index.module.scss';

const Receiver = () => {
  const {
    isSelected,
    isSelfSelected,
    selectedHeadCount,
    selectedFriends,
    getImgUrl,
  } = useSelectedFriendsStore();
  const socialAccessToken = getSessionStorageItem('socialToken');
  const { name, profileUrl } = useUserStore();
  const { openKakaoPicker } = useKakaoPicker();
  const clearFriendsList = useSelectedFriendsStore(
    (state) => state.clearSelectedFriends,
  );
  const { isLoggedIn, checkLoginBeforeAction } = useLogin();
  const PROFILE_IMAGE =
    isLoggedIn && isSelfSelected ? profileUrl : getImgUrl(DefaultImgUrl);
  const isKakaoConnected = window.Kakao?.isInitialized();

  const getTitle = () => {
    let title = '';

    if (!isSelected) {
      title = '선물 받을 친구를 선택해주세요.';
    } else if (selectedHeadCount > 1) {
      title = `${selectedHeadCount}명의 친구에게 선물하기`;
    } else if (isSelfSelected) {
      title = '나를 위한 선물하기';
    } else {
      title = `${selectedFriends[0].profile_nickname}에게 선물하기`;
    }
    return title;
  };

  if (isKakaoConnected) {
    window.Kakao?.Auth.setAccessToken(socialAccessToken);
  }

  const handleClick = () => {
    checkLoginBeforeAction(openKakaoPicker);
  };

  const handleCancel = () => {
    clearFriendsList();
  };

  return (
    <section>
      <div className={styles.area_selector}>
        <MainWrapper>
          <div className={styles.wrapper_selector}>
            <ProfileImg
              size="l"
              imgUrl={PROFILE_IMAGE}
              hasIcon="plus"
              onClick={handleClick}
            />
            <strong className={styles.title_selector}>
              {isLoggedIn && !isSelected && (
                <>
                  {`${name}님`}
                  <br />
                </>
              )}
              {getTitle()}
            </strong>
            {isSelected && (
              <button
                className={styles.btn_cancel}
                type="button"
                onClick={handleCancel}
              >
                <span className={styles.ico_cancel}>선택 취소</span>
              </button>
            )}
          </div>
        </MainWrapper>
      </div>
      <MainWrapper>
        {selectedHeadCount === 1 && !isSelfSelected && (
          <>
            <FriendFunding friendId={selectedFriends[0].id} />
            <FriendWish
              friendId={selectedFriends[0].id}
              socialAccessToken={socialAccessToken}
            />
          </>
        )}
      </MainWrapper>
    </section>
  );
};

export default Receiver;
