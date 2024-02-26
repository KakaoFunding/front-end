import clsx from 'clsx';

import Price from './Price';
import Thumbnail from './Thumbnail';

import styles from './index.module.scss';

interface ColumnProductItemProps {
  size: 'small' | 'medium';
  product: ProductItem;
}

type ProductItem = {
  id: number;
  thumbnailSrc: string;
  brandName: string;
  name: string;
  price: number;
  isWished: boolean;
  wishCount: number;
};

const ColumnProductItem = ({ product, size }: ColumnProductItemProps) => {
  return (
    <article className={clsx(styles.area_prod_item, styles[size])}>
      <a href={`/product/${product.id}`}>
        <Thumbnail src={product.thumbnailSrc} alt={product.name} size={size} />
        <div className={clsx(styles.area_main_info, styles[size])}>
          <span className={styles.prod_brand_name}>{product.brandName}</span>
          <strong className={styles.prod_name}>{product.name}</strong>
          <Price price={product.price} />
        </div>
      </a>
    </article>
  );
};

export default ColumnProductItem;
