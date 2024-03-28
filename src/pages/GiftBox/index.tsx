import { Outlet } from 'react-router-dom';

import MainWrapper from 'components/ui/MainWrapper';

import styles from './index.module.scss';

const GiftBox = () => {
  return (
    <MainWrapper>
      <section className={styles.area_giftbox}>
        <section className={styles.area_side}>
          <div>프로필</div>
          <div>사이드바</div>
        </section>
        <section className={styles.area_main}>
          <Outlet />
        </section>
      </section>
    </MainWrapper>
  );
};

export default GiftBox;
