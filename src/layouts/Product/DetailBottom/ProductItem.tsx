import CartButton from 'components/feature/ProductItem/CartButton';
import Price from 'components/feature/ProductItem/Price';

import { RecommendProductItemsResponse } from 'types/productItem';

import styles from './ProductItem.module.scss';

type ProductItemProps = {
  product: RecommendProductItemsResponse;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <article className={styles.wrapper_prod_item}>
      <img
        src={product.photo}
        alt={product.name}
        className={styles.thumb_prod}
      />
      <strong className={styles.txt_prod_name}>{product.name}</strong>
      <Price price={product.price} />
      <div className={styles.wrapper_util_info}>
        <CartButton productId={product.productId} />
      </div>
    </article>
  );
};

export default ProductItem;
