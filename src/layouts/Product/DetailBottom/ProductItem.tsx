import clsx from 'clsx';

import CartButton from 'components/feature/ColumnProductItem/CartButton';
import Price from 'components/feature/ColumnProductItem/Price';
import Thumbnail from 'components/feature/ColumnProductItem/Thumbnail';

import styles from './ProductItem.module.scss';

type ProductItemType = {
  product: {
    id: number;
    thumbSrc: string;
    brandName: string;
    name: string;
    price: number;
    isWished: boolean;
    wishCount: number;
  };
};

const ProductItem = ({ product }: ProductItemType) => {
  return (
    <article className={clsx(styles.wrapper_prod_item)}>
      <a href={`/product/${product.id}`} className={styles.wrapper_main_info}>
        <Thumbnail src={product.thumbSrc} alt={product.name} size="small" />
        <strong className={styles.txt_prod_name}>{product.name}</strong>
        <Price price={product.price} />
      </a>
      <div className={styles.wrapper_util_info}>
        <CartButton id={product.id} />
      </div>
    </article>
  );
};

export default ProductItem;
