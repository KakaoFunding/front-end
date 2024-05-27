import styles from './index.module.scss';

const CartBoxBody = () => {
  return (
    <div className={styles.area_cart_body}>
      <div className={styles.wrapper_cart_body}>
        <div className={styles.title_billcard}>
          <div className={styles.wrapper_checkbox_all}>
            <label htmlFor="check-all">
              <input
                type="checkbox"
                id="check-all"
                className={styles.check_all}
              />
              <span className={styles.ico_checkbox_all}>체크 아이콘</span>
              <strong className={styles.txt_checkbox_all}>배송상품</strong>
            </label>
          </div>
          <span className={styles.txt_check_count}>(3/3)</span>
          <button className={styles.btn_delete_all} type="button">
            전체삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartBoxBody;
