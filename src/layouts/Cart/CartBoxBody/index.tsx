import CartBoxItem from './CartBoxItem';

import styles from './index.module.scss';

const items = [1, 2, 3];

const CartBoxBody = () => {
  return (
    <ul className={styles.area_cart_body}>
      {items.map((item) => (
        <li key={item}>
          <CartBoxItem />
        </li>
      ))}
    </ul>
  );
};

export default CartBoxBody;