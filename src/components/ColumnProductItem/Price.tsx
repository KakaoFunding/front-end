import { ProductItem } from 'types/productItem';
import styles from './Price.module.scss';

interface PriceProps {
  price: ProductItem['price'];
}

const Price = ({ price }: PriceProps) => {
  return (
    <em className={styles.area_price}>
      {price}
      <span className={styles.unit}>원</span>
    </em>
  );
};

export default Price;
