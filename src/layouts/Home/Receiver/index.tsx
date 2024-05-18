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

// Kakao 타입을 any로 지정해야 하는데 린트에서 any 타입 지정을 막고있음
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Kakao = window as any;

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
    selectedHeadCount,
    selectedFriends,
    setSelectedFriends,
    getImgUrl,
  } = useSelectedFriendsStore();
  const socialAccessToken = useAuthStore((state) => state.socialToken);
  const userName = useUserStore((state) => state.name);
  const clearFriendsList = useSelectedFriendsStore(
    (state) => state.clearSelectedFriends,
  );
  const PROFILE_IMAGE =
    mockdata.login && isSelfSelected ? mockdata.myProfileImgUrl : getImgUrl();

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

  Kakao.Auth.setAccessToken(socialAccessToken);

  const handleClick = () => {
    Kakao.Picker.selectFriends({
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
