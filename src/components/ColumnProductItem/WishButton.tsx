import clsx from 'clsx';

import { formatNumberWithComma } from 'utils/format';

import { ProductItem } from 'types/productItem';

import styles from './WishButton.module.scss';

type WishButtonProps = {
  id: ProductItem['id'];
  isWished: ProductItem['isWished'];
  wishCount: ProductItem['wishCount'];
};

const WishButton = ({ id, isWished, wishCount }: WishButtonProps) => {
  const DIVIDER = 10000;
  const REMAINS = '만+';

  const formattedWishCount =
    wishCount >= DIVIDER
      ? Math.floor(wishCount / DIVIDER).toString() + REMAINS
      : formatNumberWithComma(wishCount);

  return (
    <button type="button">
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
