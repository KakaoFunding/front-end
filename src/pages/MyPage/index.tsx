import { Outlet } from 'react-router-dom';

import Profile from 'components/feature/Profile';
import MainWrapper from 'components/ui/MainWrapper';
import Sidebar from 'components/ui/Sidebar';

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
