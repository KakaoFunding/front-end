import { Link } from 'react-router-dom';

import CartButton from 'components/feature/ProductItem/CartButton';
import WishButton from 'components/feature/ProductItem/WishButton';

import { formatNumberWithComma } from 'utils/format';

import { FriendWishItemType } from 'types/wish';

import styles from './index.module.scss';

type FriendWishItemProps = {
  item: FriendWishItemType['wishDetail'];
  wished: FriendWishItemType['wished'];
};

const FriendWishItem = ({ item, wished }: FriendWishItemProps) => {
  return (
    <div className={styles.wrapper_wish_item}>
      <Link to={`/product/${item.productId}`}>
        <div className={styles.item_prod}>
          <img
            alt={item.productName}
            src={item.productPhoto}
            className={styles.item_thumb}
          />

          <div className={styles.info_prod}>
            <p className={styles.txt_brand}>{item.brandName}</p>
            <strong className={styles.txt_title}>{item.productName}</strong>
            <p className={styles.txt_price}>
              {formatNumberWithComma(item.productPrice)}
              <span className={styles.txt_unit}>원</span>
            </p>
            <div className={styles.wrapper_btn}>
              <CartButton productId={item.productId} />
              <WishButton
                productId={item.productId}
                isWished={wished}
                wishCount={item.wishCount}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FriendWishItem;
