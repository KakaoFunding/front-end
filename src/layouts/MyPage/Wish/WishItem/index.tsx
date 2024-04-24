import clsx from 'clsx';
import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { formatNumberWithUnit } from 'utils/format';

import styles from './index.module.scss';

// TODO : 필요 데이터
const data = {
  src: 'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240325111042_0f205969299a4645af4ea873a7400f69.jpg',
  title: '로지텍코리아 LIFT 컴팩트 인체공학 무선 블루투스 버티컬 마우스',
  price: 79000,
  productId: 4603825,
  wishForMe: true,
};

const WishItem = () => {
  const [isWish, setIsWish] = useState(true);
  const [isSecret, setIsSecret] = useState(true);

  // TODO : API 요청
  const handleWishClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsWish(!isWish);
  };

  const handleSecretClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSecret(!isSecret);
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
          <button type="button" onClick={handleSecretClick}>
            <span
              className={clsx(styles.ico_secret, { [styles.on]: !isSecret })}
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
