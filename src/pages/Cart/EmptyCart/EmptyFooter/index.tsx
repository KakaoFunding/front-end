import styles from './index.module.scss';

const EmptyFooter = () => {
  return (
    <footer className={styles.area_cart_footer}>
      <div className={styles.footer_box}>박스하단</div>
      <div className={styles.footer_parts}>
        <span className={styles.parts_left}>왼쪽</span>
        <span className={styles.parts_right}>오른쪽</span>
      </div>
    </footer>
  );
};

export default EmptyFooter;
