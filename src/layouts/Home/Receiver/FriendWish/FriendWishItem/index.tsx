import { Link } from 'react-router-dom';

import CartButton from 'components/feature/ProductItem/CartButton';
import Thumbnail from 'components/feature/ProductItem/Thumbnail';
import WishButton from 'components/feature/ProductItem/WishButton';

import { formatNumberWithComma } from 'utils/format';

import { ProductItem } from 'types/productItem';

import styles from './index.module.scss';

const FriendWishItem = ({ product }: { product: ProductItem }) => {
  return (
    <div className={styles.wrapper_wish_item}>
      <Link to={`/product/${product.productId}`}>
        <div className={styles.item_prod}>
          <Thumbnail alt={product.name} src={product.photo} size="small" />
          <div className={styles.info_prod}>
            <p className={styles.txt_brand}>{product.brandName}</p>
            <strong className={styles.txt_title}>{product.name}</strong>
            <p className={styles.txt_price}>
              {formatNumberWithComma(product.price)}
              <span className={styles.txt_unit}>원</span>
            </p>
            <div className={styles.wrapper_btn}>
              <CartButton id={product.productId} />
              <WishButton
                id={product.productId}
                isWished={product.wished}
                wishCount={product.wishCount}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FriendWishItem;
