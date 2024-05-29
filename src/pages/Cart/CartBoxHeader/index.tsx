import clsx from 'clsx';

import styles from './index.module.scss';

const CartBoxHeader = () => {
  // api 연동되면 실제 데이터로 변경될 예정
  const isItemInCart = true;

  return (
    <header className={styles.header_cart}>
      <div
        className={clsx(styles.area_cart_cover, {
          [styles.area_cart_cover_filled]: isItemInCart,
        })}
      >
        <strong
          className={clsx(styles.ico_cart_cover, {
            [styles.ico_cart_cover_filled]: isItemInCart,
          })}
        >
          선물상자
        </strong>
      </div>
      <div
        className={clsx(styles.area_cover_parts, {
          [styles.area_cover_parts_filled]: isItemInCart,
        })}
      >
        <span
          className={clsx(styles.parts_left, {
            [styles.parts_left_filled]: isItemInCart,
          })}
        >
          박스 왼쪽
        </span>
        <span className={styles.parts_right}>박스 오른쪽</span>
      </div>
    </header>
  );
};

export default CartBoxHeader;
