import clsx from 'clsx';

import { ProductItem, ProductItemSize } from 'types/productItem';

import CartButton from '../CartButton';
import Price from '../Price';
import Thumbnail from '../Thumbnail';
import WishButton from '../WishButton';

import styles from './index.module.scss';

type ColumnProductItemProps = {
  product: ProductItem;
  size: ProductItemSize['size'];
};

const ColumnProductItem = ({ product, size }: ColumnProductItemProps) => {
  return (
    <article className={clsx(styles.wrapper_prod_item, styles[size])}>
      <a href={`/product/${product.id}`}>
        <Thumbnail src={product.thumbSrc} alt={product.name} size={size} />
        <div className={clsx(styles.wrapper_main_info, styles[size])}>
          <span className={styles.txt_brand_name}>{product.brandName}</span>
          <strong className={styles.txt_prod_name}>{product.name}</strong>
          <Price price={product.price} />
        </div>
      </a>
      <div className={styles.wrapper_util_info}>
        <WishButton
          id={product.id}
          isWished={product.isWished}
          wishCount={product.wishCount}
        />
        <CartButton />
      </div>
    </article>
  );
};

export default ColumnProductItem;
