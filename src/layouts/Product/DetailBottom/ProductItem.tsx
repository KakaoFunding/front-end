import clsx from 'clsx';
import { Link } from 'react-router-dom';

import CartButton from 'components/feature/ProductItem/CartButton';
import Price from 'components/feature/ProductItem/Price';
import Thumbnail from 'components/feature/ProductItem/Thumbnail';

import { ProductItem as ProductItemType } from 'types/productItem';

import styles from './ProductItem.module.scss';

type ProductItemProps = Pick<
  ProductItemType,
  'productId' | 'photo' | 'name' | 'price'
>;

const ProductItem = ({ productId, photo, name, price }: ProductItemProps) => {
  return (
    <article className={clsx(styles.wrapper_prod_item)}>
      <Link to={`/product/${productId}`} className={styles.wrapper_main_info}>
        <Thumbnail src={photo} alt={name} size="small" />
        <strong className={styles.txt_prod_name}>{name}</strong>
        <Price price={price} />
      </Link>
      <div className={styles.wrapper_util_info}>
        <CartButton />
      </div>
    </article>
  );
};

export default ProductItem;
