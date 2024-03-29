import { Outlet } from 'react-router-dom';

import MainWrapper from 'components/ui/MainWrapper';
import Profile from 'layouts/GiftBox/Profile';
import Sidebar from 'layouts/GiftBox/Sidebar';

import styles from './index.module.scss';

const MyPage = () => {
  return (
    <MainWrapper>
      <section className={styles.area_giftbox}>
        <section className={styles.area_side}>
          <Profile />
          <Sidebar />
        </section>
        <section className={styles.area_main}>
          <Outlet />
        </section>
      </section>
    </MainWrapper>
  );
};

export default MyPage;
