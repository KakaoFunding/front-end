import clsx from 'clsx';

import { ProductItem, ProductItemSize } from 'types/productItem';

import CartButton from './CartButton';
import Price from './Price';
import Thumbnail from './Thumbnail';
import WishButton from './WishButton';

import styles from './index.module.scss';

interface ColumnProductItemProps {
  product: ProductItem;
  size: ProductItemSize['size'];
}

const ColumnProductItem = ({ product, size }: ColumnProductItemProps) => {
  return (
    <article className={clsx(styles.area_prod_item, styles[size])}>
      <a href={`/product/${product.id}`}>
        <Thumbnail src={product.thumbSrc} alt={product.name} size={size} />
        <div className={clsx(styles.area_main_info, styles[size])}>
          <span className={styles.prod_brand_name}>{product.brandName}</span>
          <strong className={styles.prod_name}>{product.name}</strong>
          <Price price={product.price} />
        </div>
      </a>
      <div className={styles.area_util_info}>
        <CartButton id={product.id} />
        <WishButton
          id={product.id}
          isWished={product.isWished}
          wishCount={product.wishCount}
        />
      </div>
    </article>
  );
};

export default ColumnProductItem;
