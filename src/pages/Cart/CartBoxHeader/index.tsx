import styles from './index.module.scss';

const CartBoxHeader = () => {
  return (
    <header className={styles.header_cart}>
      <div className={styles.area_cart_cover}>
        <strong className={styles.ico_cart_cover}>선물상자</strong>
      </div>
      <div className={styles.area_cover_parts}>
        <span className={styles.parts_left}>박스 왼쪽</span>
        <span className={styles.parts_right}>박스 오른쪽</span>
      </div>
    </header>
  );
};

export default CartBoxHeader;
