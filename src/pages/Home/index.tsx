import MainWrapper from 'components/ui/MainWrapper';
import FriendsSelector from 'layouts/Home/FriendsSelector';
import MainBrands from 'layouts/Home/MainBrands';
import MainCategory from 'layouts/Home/MainCategory';
import MainProducts from 'layouts/Home/MainProducts';
import MainRanking from 'layouts/Home/MainRanking';

import styles from './index.module.scss';

const Home = () => {
  return (
    <section className={styles.area_home}>
      <FriendsSelector />
      <MainWrapper>
        <MainCategory />
        <MainRanking />
        <MainBrands />
        <MainProducts />
      </MainWrapper>
    </section>
  );
};

export default Home;
