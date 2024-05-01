import clsx from 'clsx';
import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { formatNumberWithUnit } from 'utils/format';

import styles from './index.module.scss';

// TODO : 필요 데이터
const data = {
  productId: 4603825,
  title: '로지텍코리아 LIFT 컴팩트 인체공학 무선 블루투스 버티컬 마우스',
  price: 79000,
  src: 'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240325111042_0f205969299a4645af4ea873a7400f69.jpg',
  wishForMe: true,
};

const WishItem = () => {
  const [isWish, setIsWish] = useState<boolean>(true);
  const [isPrivate, setIsPrivate] = useState<boolean>(true);

  // TODO : API 요청
  const handleWishClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsWish(!isWish);
  };

  const handleChangeVisibility = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsPrivate(!isPrivate);
  };

  return (
    <Link to={`/product/${data.productId}`}>
      <div className={styles.wrapper_wish}>
        <img
          src={data.src}
          alt={`${data.title}상품이미지`}
          className={styles.thumb_item}
        />
        <div>
          {data.title}
          <button type="button" onClick={handleWishClick}>
            <span className={clsx(styles.ico_heart, { [styles.on]: !isWish })}>
              위시
            </span>
          </button>
          <p className={styles.txt_price}>{formatNumberWithUnit(data.price)}</p>
          <button type="button" onClick={handleChangeVisibility}>
            <span
              className={clsx(styles.ico_public, {
                [styles.ico_private]: isPrivate,
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
