import ProfileImg from 'components/feature/ProfileImg';
import MainWrapper from 'components/ui/MainWrapper';

import styles from './index.module.scss';

const Receiver = () => {
  return (
    <section>
      <div className={styles.wrapper_selector}>
        <ProfileImg
          size="l"
          hasIcon="plus"
          onClick={() => console.log('친구 선택')}
        />
        나를 위한 선물하기
      </div>
      <MainWrapper>
        <div>판딩</div>
        <div>위시</div>
      </MainWrapper>
    </section>
  );
};

export default Receiver;
