import MainWrapper from 'components/ui/MainWrapper';
import Receiver from 'layouts/Home/Receiver';
import Thema from 'layouts/Home/Thema';
// import MainBrands from 'layouts/Home/MainBrands';
// import MainProducts from 'layouts/Home/MainProducts';
// import NowTrending from 'layouts/Home/NowTrending';

import styles from './index.module.scss';

const Home = () => {
  return (
    <section className={styles.area_home}>
      <Receiver />
      <MainWrapper>
        <Thema />
        {/* <NowTrending />
        <MainBrands />
        <MainProducts /> */}
      </MainWrapper>
    </section>
  );
};

export default Home;
