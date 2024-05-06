import CartPay from 'pages/Cart/CartPay';

import styles from './index.module.scss';

const EmptyBody = () => {
  return (
    <>
      <div className={styles.area_cart_body}>
        <div className={styles.cart_list}>
          <div className={styles.cart_item}>
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

export default EmptyBody;
