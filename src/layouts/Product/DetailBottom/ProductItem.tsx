import clsx from 'clsx';
import { Link } from 'react-router-dom';

import CartButton from 'components/feature/ProductItem/CartButton';
import Price from 'components/feature/ProductItem/Price';
import Thumbnail from 'components/feature/ProductItem/Thumbnail';

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
      <Link to={`/product/${product.id}`} className={styles.wrapper_main_info}>
        <Thumbnail src={product.thumbSrc} alt={product.name} size="small" />
        <strong className={styles.txt_prod_name}>{product.name}</strong>
        <Price price={product.price} />
      </Link>
      <div className={styles.wrapper_util_info}>
        <CartButton />
      </div>
    </article>
  );
};

export default ProductItem;
