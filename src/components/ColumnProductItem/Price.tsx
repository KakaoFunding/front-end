import { formatNumberWithComma } from 'utils/format';

import { ProductItem } from 'types/productItem';

import styles from './Price.module.scss';

type PriceProps = {
  price: ProductItem['price'];
};

const Price = ({ price }: PriceProps) => {
  const formattedPrice = formatNumberWithComma(price);
  return (
    <em className={styles.wrapper_price}>
      {formattedPrice}
      <span className={styles.txt_unit}>원</span>
    </em>
  );
};

export default Price;
