import FriendsSelectorModal from 'components/feature/FriendsSelectorModal';
import ProfileImg from 'components/feature/ProfileImg';
import MainWrapper from 'components/ui/MainWrapper';

import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';

import { useModal } from 'hooks/useModal';

import FriendsFunding from './FriendsFunding';

import styles from './index.module.scss';

const mockdata = {
  login: false,
  name: '보경',
  myProfileImgUrl: '',
};

const Receiver = () => {
  const { isOpen, open, close, scrollPos } = useModal();

  const { isSelected, isSelfSelected, getImgUrl, getTitle } =
    useSelectedFriendsStore();

  return (
    <section>
      <FriendsSelectorModal
        close={close}
        isOpen={isOpen}
        scrollPos={scrollPos}
      />
      <div className={styles.wrapper_selector}>
        <ProfileImg
          size="l"
          imgUrl={
            mockdata.login && isSelfSelected
              ? mockdata.myProfileImgUrl
              : getImgUrl()
          }
          hasIcon="plus"
          onClick={open}
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
