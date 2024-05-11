import { MouseEvent } from 'react';

import styles from './index.module.scss';

const CartButton = () => {
  // TODO : API 요청
  const handleAddCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <button type="button" className={styles.btn_cart} onClick={handleAddCart}>
      <span className={styles.ico_cart}>선물상자 담기</span>
    </button>
  );
};

export default CartButton;
