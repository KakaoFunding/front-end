import clsx from 'clsx';
import { MouseEvent } from 'react';

import { formatNumberWithComma } from 'utils/format';

import { ProductItem } from 'types/productItem';

import styles from './index.module.scss';

type WishButtonProps = {
  isWished: ProductItem['wished'];
  wishCount: ProductItem['wishCount'];
};

const WishButton = ({ isWished, wishCount }: WishButtonProps) => {
  const DIVIDER = 10000;
  const REMAINS = '만+';

  // TODO : API 요청
  const handleAddWish = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const formattedWishCount =
    wishCount >= DIVIDER
      ? Math.floor(wishCount / DIVIDER).toString() + REMAINS
      : formatNumberWithComma(wishCount);

  return (
    <button type="button" onClick={handleAddWish}>
      <span
        className={clsx(styles.ico_wish, {
          [styles.on]: isWished,
        })}
      >
        {isWished ? '위시 해제' : '위시리스트 추가'}
      </span>
      <span className={styles.txt_wish_cnt}>{formattedWishCount}</span>
    </button>
  );
};

export default WishButton;
