import styles from './index.module.scss';

const CartBoxFooter = () => {
  return (
    <footer className={styles.area_cartbox_footer}>
      <div className={styles.bottom_box}>박스하단</div>
      <div className={styles.bottom_parts}>
        <span className={styles.parts_left}>왼쪽</span>
        <span className={styles.parts_right}>오른쪽</span>
      </div>
    </footer>
  );
};

export default CartBoxFooter;
