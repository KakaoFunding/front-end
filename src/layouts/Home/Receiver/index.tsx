import ProfileImg from 'components/feature/ProfileImg';
import MainWrapper from 'components/ui/MainWrapper';

import { useAuthStore, useUserStore } from 'store/useAuthStore';
import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';

import FriendsFunding from './FriendsFunding';

import styles from './index.module.scss';

const mockdata = {
  login: false,
  name: '보경',
  myProfileImgUrl: '',
};

type PickerResponseTypes = {
  users: [];
};

type PickerErrorTypes = {
  msg: string;
  code: string;
};

const Receiver = () => {
  const {
    isSelected,
    isSelfSelected,
    setSelectedFriends,
    getImgUrl,
    getTitle,
  } = useSelectedFriendsStore();
  const socialAccessToken = useAuthStore((state) => state.socialToken);
  const userName = useUserStore((state) => state.name);
  const clearFriendsList = useSelectedFriendsStore(
    (state) => state.clearSelectedFriends,
  );
  const PROFILE_IMAGE =
    mockdata.login && isSelfSelected ? mockdata.myProfileImgUrl : getImgUrl();

  window.Kakao.Auth.setAccessToken(socialAccessToken);

  const handleClick = () => {
    window.Kakao.Picker.selectFriends({
      title: '친구 선택',
      enableSearch: true,
      showMyProfile: true,
      showFavorite: true,
      showPickedFriend: true,
      maxPickableCount: 10,
      minPickableCount: 1,
    })
      .then((response: PickerResponseTypes) => {
        setSelectedFriends(response.users, userName);
      })
      .catch((error: PickerErrorTypes) => {
        const pickerError = error as PickerErrorTypes;
        console.error(pickerError);
      })
      .finally(() => {
        Kakao.Picker.cleanup();
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
              {mockdata.login && !isSelected && (
                <>
                  {`${mockdata.name}님`}
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
        <FriendsFunding />
        <div>위시</div>
      </MainWrapper>
    </section>
  );
};

export default Receiver;
