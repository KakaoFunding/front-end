import clsx from 'clsx';
import { useReducer } from 'react';

import PaymentItem from 'components/feature/PaymentItem';

import { formatNumberWithComma, formatNumberWithUnit } from 'utils/format';

import { GiftPaymentCard } from 'types/payment';

import styles from './index.module.scss';

type GiftItemProps = {
  gift: GiftPaymentCard;
};

const pickedFriends = 1; // 선택한 친구 수

const GiftItem = ({ gift }: GiftItemProps) => {
  const [isToggled, handleToggle] = useReducer((prev) => !prev, false);
  const { product, quantity, optionNames } = gift;

  return (
    <div className={styles.wrapper_item}>
      <PaymentItem
        productId={product.productId}
        name={product.name}
        brandName={product.brandName}
        photo={product.photo}
        optionNames={optionNames}
      />

      <button
        className={styles.btn_payment}
        type="button"
        onClick={handleToggle}
      >
        <span className={styles.txt_price}>결제금액</span>
        <span className={styles.num_price}>
          {formatNumberWithComma(product.price * quantity)}
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
              {formatNumberWithUnit(product.price)}
            </span>
          </p>
          <p className={styles.txt_desc}>
            선택수량
            <span className={styles.num_desc}>{`X ${quantity}개`}</span>
          </p>
          <p className={styles.txt_desc}>
            수신인원
            <span className={styles.num_desc}>{`X ${pickedFriends}명`}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default GiftItem;
