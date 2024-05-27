import clsx from 'clsx';
import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { useAxios } from 'hooks/useAxios';
import { useAddWish, useDeleteWish } from 'hooks/useWish';
import { formatNumberWithUnit } from 'utils/format';

import { WishItemType } from 'types/wish';

import styles from './index.module.scss';

type WishItemProp = { wishItem: WishItemType };

const WishItem = ({ wishItem }: WishItemProp) => {
  const {
    wishId,
    productId,
    productName,
    productPhoto,
    productPrice,
    isPublic: isPublicProps,
  } = wishItem;

  const [isWish, setIsWish] = useState<boolean>(true);
  const [isPublic, setIsPublic] = useState<boolean>(isPublicProps);

  const { addWish } = useAddWish(productId, isPublic ? 'ME' : 'OTHERS');
  const { deleteWish } = useDeleteWish(productId);

  const { sendRequest } = useAxios({
    method: 'post',
    url: `wishes/${wishId}/change-type`,
  });

  const handleWishClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isWish) {
      deleteWish();
    } else {
      addWish();
    }
    setIsWish(!isWish);
  };

  const handleChangeVisibility = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendRequest();
    setIsPublic(!isPublic);
  };

  return (
    <Link to={`/product/${productId}`}>
      <div className={styles.wrapper_wish}>
        <img
          src={productPhoto}
          alt={`${productName}상품이미지`}
          className={styles.thumb_item}
        />
        <div>
          {productName}
          <button type="button" onClick={handleWishClick}>
            <span className={clsx(styles.ico_heart, { [styles.on]: !isWish })}>
              위시
            </span>
          </button>
          <p className={styles.txt_price}>
            {formatNumberWithUnit(productPrice)}
          </p>
          <button type="button" onClick={handleChangeVisibility}>
            <span
              className={clsx(styles.ico_public, {
                [styles.ico_private]: !isPublic,
              })}
            >
              비밀/나만공개
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default WishItem;
