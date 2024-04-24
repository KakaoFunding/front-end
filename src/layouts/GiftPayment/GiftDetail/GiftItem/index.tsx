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

const GiftItem = () => {
  const [isToggled, handleToggle] = useReducer((prev) => !prev, false);

  return (
    <div className={styles.wrapper_item}>
      <PaymentItem />
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
