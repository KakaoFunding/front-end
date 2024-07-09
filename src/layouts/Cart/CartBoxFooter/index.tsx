import clsx from 'clsx';

import styles from './index.module.scss';

type CartBoxFooterProps = {
  isItemInCart: boolean;
};

const CartBoxFooter = ({ isItemInCart }: CartBoxFooterProps) => {
  return (
    <>
      <div
        className={clsx(styles.cover_front, {
          [styles.filled]: isItemInCart,
        })}
      />
      <div
        className={clsx(styles.cover_back, {
          [styles.filled]: isItemInCart,
        })}
      >
        <span
          className={clsx(styles.cover_left, {
            [styles.filled]: isItemInCart,
          })}
        />
        <span
          className={clsx(styles.cover_right, {
            [styles.filled]: isItemInCart,
          })}
        />
      </div>
    </>
  );
};

export default CartBoxFooter;
