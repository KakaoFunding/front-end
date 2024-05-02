import { Link } from 'react-router-dom';

import Price from 'components/feature/ProductItem/Price';
import Thumbnail from 'components/feature/ProductItem/Thumbnail';

import styles from './index.module.scss';

type ProductItemProps = {
  productId: number;
  photo: string;
  name: string;
  price: number;
};

const ProductItem = ({ productId, photo, name, price }: ProductItemProps) => {
  return (
    <article className={styles.wrapper_item}>
      <Link to={`/product/${productId}`}>
        <Thumbnail src={photo} alt={name} size="medium" />
        <strong className={styles.txt_name}>{name}</strong>
        <Price price={price} />
      </Link>
    </article>
  );
};

export default ProductItem;
