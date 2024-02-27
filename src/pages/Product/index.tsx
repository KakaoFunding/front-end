import DetailBottom from './DetailBottom';
import DetailContents from './DetailContents';
import DetailMain from './DetailMain';
import ProductBuyInfo from './ProductBuyInfo';

import styles from './index.module.scss';

const Product = () => {
  return (
    <article className={styles.area_product}>
      <section className={styles.area_detail_info}>
        <DetailMain />
        <DetailContents />
        <DetailBottom />
      </section>
      <section className={styles.area_buy_info}>
        <ProductBuyInfo />
      </section>
    </article>
  );
};

export default Product;
