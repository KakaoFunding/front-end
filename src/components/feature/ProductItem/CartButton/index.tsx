import styles from './index.module.scss';

const CartButton = () => {
  return (
    <button type="button" className={styles.btn_cart}>
      <span className={styles.ico_cart}>선물상자 담기</span>
    </button>
  );
};

export default CartButton;
