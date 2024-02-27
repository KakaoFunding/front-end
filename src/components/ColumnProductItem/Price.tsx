import { formatNumberWithComma } from 'utils/format';

import { ProductItem } from 'types/productItem';

import styles from './Price.module.scss';

interface PriceProps {
  price: ProductItem['price'];
}

const Price = ({ price }: PriceProps) => {
  const formattedPrice = formatNumberWithComma(price);
  return (
    <em className={styles.area_price}>
      {formattedPrice}
      <span className={styles.unit}>원</span>
    </em>
  );
};

export default Price;
