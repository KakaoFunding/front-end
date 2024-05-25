import clsx from 'clsx';
import { MouseEvent, useEffect, useState } from 'react';

import WishModal from 'components/ui/Modal/WishModal';

import { useLogin } from 'hooks/useLogin';
import { useModal } from 'hooks/useModal';
import { useDeleteWish } from 'hooks/useWish';
import { formatNumberWithComma } from 'utils/format';

import { ProductItem } from 'types/productItem';
import { ResponseWishAddOrDelete } from 'types/wish';

import styles from './index.module.scss';

type WishButtonProps = {
  productId: ProductItem['productId'];
  isWished: ProductItem['wished'];
  wishCount: ProductItem['wishCount'];
};

const WishButton = ({
  productId,
  isWished: isWishedProp,
  wishCount: wishCountProp,
}: WishButtonProps) => {
  const { isLoggedIn, login, confirmLogin } = useLogin();
  const { isOpen, open, close, scrollPos } = useModal();
  const { deleteWishData, deleteWish } = useDeleteWish(productId);
  const [wishCount, setWishCount] = useState<number>(wishCountProp);
  const [wished, setWished] = useState<boolean>(isWishedProp);

  useEffect(() => {
    if (deleteWishData) {
      setWishCount(deleteWishData.wishCount);
      setWished(false);
    }
  }, [deleteWishData]);

  const handleClickWish = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLoggedIn) {
      if (wished) deleteWish();
      else open();
    } else {
      const result = confirmLogin();
      if (result) login();
    }
  };

  const handleWishAdded = (wishData: ResponseWishAddOrDelete) => {
    setWished(true);
    setWishCount(wishData.wishCount);
  };

  const formatWishCount = (num: number) => {
    const DIVIDER = 10000;
    const REMAINS = '만+';

    return num >= DIVIDER
      ? Math.floor(num / DIVIDER).toString() + REMAINS
      : formatNumberWithComma(num);
  };

  return (
    <>
      <WishModal
        productId={productId}
        isOpen={isOpen}
        close={close}
        scrollPos={scrollPos}
        onWishAdded={handleWishAdded}
      />
      <button type="button" onClick={handleClickWish}>
        <span
          className={clsx(styles.ico_wish, {
            [styles.on]: wished,
          })}
        >
          {wished ? '위시 해제' : '위시리스트 추가'}
        </span>
        <span className={styles.txt_wish_cnt}>
          {formatWishCount(wishCount)}
        </span>
      </button>
    </>
  );
};

export default WishButton;
