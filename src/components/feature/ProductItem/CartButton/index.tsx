import { MouseEvent } from 'react';

import Spinner from 'components/ui/Spinner';

import { useAxios } from 'hooks/useAxios';
import { useLogin } from 'hooks/useLogin';

import styles from './index.module.scss';

type CartButtonProps = {
  productId: number;
};

const CartButton = ({ productId }: CartButtonProps) => {
  const { isLoggedIn, login, confirmLogin } = useLogin();
  const { isLoading, sendRequest } = useAxios<{ cartId: number }>({
    url: '/cart',
    method: 'post',
    data: {
      productId,
      itemCount: 1,
      optionId: null,
      optionDetailId: null,
    },
  });

  const handleAddCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLoggedIn) sendRequest();
    else {
      const result = confirmLogin();
      if (result) login();
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <button type="button" className={styles.btn_cart} onClick={handleAddCart}>
        <span className={styles.ico_cart}>선물상자 담기</span>
      </button>
    </>
  );
};

export default CartButton;
