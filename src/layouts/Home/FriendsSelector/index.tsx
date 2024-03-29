import MainWrapper from 'components/ui/MainWrapper';

import styles from './index.module.scss';

const FriendsSelector = () => {
  return (
    <section>
      <div className={styles.wrapper_selector}>
        <div>프로필</div>
        나를 위한 선물하기
      </div>
      <MainWrapper>
        <div>판딩</div>
        <div>위시</div>
      </MainWrapper>
    </section>
  );
};

export default FriendsSelector;
