import clsx from 'clsx';
import { useReducer } from 'react';

import PaymentItem from 'components/feature/PaymentItem';

import { formatNumberWithComma, formatNumberWithUnit } from 'utils/format';

import styles from './index.module.scss';

const data = {
  price: 18000,
  count: 1,
  headCount: 1,
};

const previewData = {
  productId: 222,
  photo:
    'https://img1.kakaocdn.net/thumb/C86x86@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20231120093525_68d33ddb2c0e426786589e6d47319a7d.jpg',
  brandName: '탬버린즈',
  name: '"NEW 펌키니" [단독/선물포장] 미니 퍼퓸 핸드크림',
  optionNames: ['[NEW] PUMKINI #크리미 #제니PICK #카카오단독', 'THANK YOU'],
};

const GiftItem = () => {
  const [isToggled, handleToggle] = useReducer((prev) => !prev, false);

  return (
    <div className={styles.wrapper_item}>
      <PaymentItem
        productId={previewData.productId}
        name={previewData.name}
        brandName={previewData.brandName}
        photo={previewData.photo}
        optionNames={previewData.optionNames}
      />
      <button
        className={styles.btn_payment}
        type="button"
        onClick={handleToggle}
      >
        <span className={styles.txt_price}>결제금액</span>
        <span className={styles.num_price}>
          {formatNumberWithComma(data.price)}
        </span>
        원
        <span className={clsx(styles.ico_toggle, { [styles.on]: isToggled })}>
          금액 상세정보
        </span>
      </button>
      {isToggled && (
        <div className={styles.wrapper_payment}>
          <p className={styles.txt_desc}>
            상품금액
            <span className={styles.num_desc}>
              {formatNumberWithUnit(data.price)}
            </span>
          </p>
          <p className={styles.txt_desc}>
            선택수량
            <span className={styles.num_desc}>{`X ${data.count}개`}</span>
          </p>
          <p className={styles.txt_desc}>
            수신인원
            <span className={styles.num_desc}>{`X ${data.headCount}명`}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default GiftItem;
