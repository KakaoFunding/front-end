import CartPay from 'pages/Cart/CartPay';

import styles from './index.module.scss';

const CartBoxBody = () => {
  return (
    <>
      <div className={styles.area_cartbox_body}>
        <div className={styles.list_cart}>
          <div className={styles.item_cart}>
            <span className={styles.ico_empty_cart}>빈상자</span>
            <strong className={styles.txt_empty_cart}>
              선물상자가 비어있어요.
            </strong>
          </div>
        </div>
      </div>
      <CartPay />
    </>
  );
};

export default CartBoxBody;
