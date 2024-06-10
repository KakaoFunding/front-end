import clsx from 'clsx';

import styles from './index.module.scss';

type CartBoxHeaderProps = {
  isItemInCart: boolean;
};

const CartBoxHeader = ({ isItemInCart }: CartBoxHeaderProps) => {
  return (
    <>
      <div
        className={clsx(styles.cover_front, {
          [styles.filled]: isItemInCart,
        })}
      >
        <span
          className={clsx(styles.ico_cover, {
            [styles.filled]: isItemInCart,
          })}
        />
      </div>
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

export default CartBoxHeader;
