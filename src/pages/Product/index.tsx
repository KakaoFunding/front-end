import MainWrapper from 'components/MainWrapper';

import DetailBottom from './DetailBottom';
import DetailContents from './DetailContents';
import DetailMain from './DetailMain';
import ProductBuyInfo from './ProductBuyInfo';

import styles from './index.module.scss';

// 상품 데이터 fetch 해오기
const Product = () => {
  return (
    <MainWrapper>
      <article className={styles.area_product}>
        <section className={styles.area_detail_info}>
          <DetailMain />
          <DetailContents />
          <DetailBottom />
        </section>
        <ProductBuyInfo />
      </article>
    </MainWrapper>
  );
};

export default Product;
