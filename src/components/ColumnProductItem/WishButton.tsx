import clsx from 'clsx';

import styles from './WishButton.module.scss';
import { ProductItem } from 'types/productItem';

interface WishButtonProps {
  id: ProductItem['id'];
  isWished: ProductItem['isWished'];
  wishCount: ProductItem['wishCount'];
}

const WishButton = ({ isWished, wishCount }: WishButtonProps) => {
  const DIVIDER = 10000;
  const REMAINS = '만+';
  const LOCALE = 'ko-KR';

  const formattedWishCount =
    wishCount >= DIVIDER
      ? `${Math.floor(wishCount / DIVIDER)}${REMAINS}`
      : wishCount.toLocaleString(LOCALE);

  return (
    <button type="button">
      <span
        className={clsx(styles.wish_icon, {
          [styles.on]: isWished,
        })}
      >
        위시리스트 추가
      </span>
      <span className={styles.wish_cnt}>{formattedWishCount}</span>
    </button>
  );
};

export default WishButton;
