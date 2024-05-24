import ProfileImg from 'components/feature/ProfileImg';
import MainWrapper from 'components/ui/MainWrapper';

import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';
import { useUserStore } from 'store/useUserStore';

import { useUserExists } from 'hooks/useUserExists';
import { getSessionStorageItem } from 'utils/sessionStorage';

import FriendFunding from './FriendFunding';
import FriendWish from './FriendWish';

import styles from './index.module.scss';

type PickerResponseTypes = {
  users: [];
};

type PickerErrorTypes = {
  msg: string;
  code: string;
};

const FriendsData = {
  hasWish: true,
  hasFunding: true,
};
const Receiver = () => {
  const {
    isSelected,
    isSelfSelected,
    selectedHeadCount,
    selectedFriends,
    setSelectedFriends,
    getImgUrl,
  } = useSelectedFriendsStore();
  const socialAccessToken = getSessionStorageItem('socialToken');
  const { name, providerId, profileUrl } = useUserStore();
  const clearFriendsList = useSelectedFriendsStore(
    (state) => state.clearSelectedFriends,
  );
  const isLogin = useUserExists();
  const PROFILE_IMAGE = isLogin && isSelfSelected ? profileUrl : getImgUrl();
  const isKakaoConnected = window.Kakao?.isInitialized();

  // 서버 복구되면 테스트 해봐야함
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
    window.Kakao?.Picker.selectFriends({
      title: '친구 선택',
      enableSearch: true,
      showMyProfile: true,
      showFavorite: true,
      showPickedFriend: true,
      maxPickableCount: 10,
      minPickableCount: 1,
    })
      .then((response: PickerResponseTypes) => {
        setSelectedFriends(response.users, name, providerId);
      })
      .catch((error: PickerErrorTypes) => {
        const pickerError = error as PickerErrorTypes;
        console.error(pickerError);
      })
      .finally(() => {
        window.Kakao?.Picker.cleanup();
      });
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
              {isLogin && !isSelected && (
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
        {FriendsData.hasFunding && <FriendFunding />}
        {FriendsData.hasWish && <FriendWish />}
      </MainWrapper>
    </section>
  );
};

export default Receiver;
