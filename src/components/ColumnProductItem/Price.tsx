import styles from './Price.module.scss';

interface PriceProps {
  price: number;
}

const Price = ({ price }: PriceProps) => {
  return (
    <em className={styles.price_wrapper}>
      {price}
      <span className={styles.unit}>원</span>
    </em>
  );
};

export default Price;
