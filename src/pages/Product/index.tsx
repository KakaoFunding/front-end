import ProductBuyInfo from 'layouts/Product/Buyinfo';
import DetailBottom from 'layouts/Product/DetailBottom';
import DetailContents from 'layouts/Product/DetailContent';
import DetailMain from 'layouts/Product/DetailMain';

import MainWrapper from 'components/ui/MainWrapper';

import styles from './index.module.scss';

const Product = () => {
  return (
    <MainWrapper>
      <article className={styles.area_product}>
        <section className={styles.area_detail}>
          <DetailMain />
          <DetailContents />
          <DetailBottom />
        </section>
        <section className={styles.area_buy}>
          <ProductBuyInfo />
        </section>
      </article>
    </MainWrapper>
  );
};

export default Product;
