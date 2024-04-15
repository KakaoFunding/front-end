import ProfileImg from 'components/feature/ProfileImg';
import MainWrapper from 'components/ui/MainWrapper';

import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';

import FriendsFunding from './FriendsFunding';

import styles from './index.module.scss';

const mockdata = {
  login: false,
  name: '보경',
  myProfileImgUrl: '',
};

const Receiver = () => {
  const {
    isSelected,
    isSelfSelected,
    getImgUrl,
    getTitle,
    setSelectedFriends,
  } = useSelectedFriendsStore();

  // TODO : 개발용, 배포시 삭제
  // useSelectedFriendsStore.persist.clearStorage();

  // 임시 친구 선택
  const handleSelectedFriends = () =>
    setSelectedFriends([...prompt()!.toString()]);

  return (
    <section>
      <div className={styles.wrapper_selector}>
        <ProfileImg
          size="l"
          imgUrl={
            mockdata.login && isSelfSelected
              ? mockdata.myProfileImgUrl
              : getImgUrl()
          }
          hasIcon="plus"
          onClick={handleSelectedFriends}
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
      <MainWrapper>
        <FriendsFunding />
        <div>위시</div>
      </MainWrapper>
    </section>
  );
};

export default Receiver;
