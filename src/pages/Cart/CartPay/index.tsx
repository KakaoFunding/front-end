import styles from './index.module.scss';

const CartPay = () => {
  return (
    <div className={styles.area_cartpay}>
      <div className={styles.wrapper_cartpay}>
        <p className={styles.txt_cartpay}>
          선물상자에 담은 상품은 최대 30일간 보관됩니다.
        </p>
      </div>
    </div>
  );
};

export default CartPay;
