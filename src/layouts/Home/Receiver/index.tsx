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

type PickerResponseProps = {
  users: [];
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
      .then((response: PickerResponseProps) => {
        setSelectedFriends(response.users, userName);
      })
      .catch((error: object) => {
        console.error(error);
      })
      .finally(() => {
        Kakao.Picker.cleanup();
      });
  };

  return (
    <section>
      <div className={styles.area_selector}>
        <MainWrapper>
          <div className={styles.wrapper_selector}>
            <ProfileImg
              size="l"
              imgUrl={
                mockdata.login && isSelfSelected
                  ? mockdata.myProfileImgUrl
                  : getImgUrl()
              }
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
