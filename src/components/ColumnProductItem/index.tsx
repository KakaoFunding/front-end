import clsx from 'clsx';

import Price from './Price';
import Thumbnail from './Thumbnail';

import styles from './index.module.scss';

interface ColumnProductItemProps {
  size: 'tiny' | 'small' | 'medium';
  product: ProductItem;
}

type ProductItem = {
  thumbnailSrc: string;
  brandName: string;
  name: string;
  price: number;
  isWished: boolean;
  wishCount: number;
};

const ColumnProductItem = ({ product, size }: ColumnProductItemProps) => {
  return (
    <article className={clsx(styles.base, styles[size])}>
      <Thumbnail src={product.thumbnailSrc} alt={product.name} size={size} />
      <span className={styles.brand_name}>{product.brandName}</span>
      <strong className={styles.name}>{product.name}</strong>
      <Price price={product.price} />
    </article>
  );
};

export default ColumnProductItem;
