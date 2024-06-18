import { formatNumberWithUnit } from 'utils/format';

import { CartItem } from 'types/cart';

import styles from './index.module.scss';

type BillItemProps = { item: CartItem };

const BillItem = ({ item }: BillItemProps) => {
  const { productName, quantity, totalPrice } = item;
  return (
    <div className={styles.wrapper_item}>
      <strong className={styles.txt_title}>{productName}</strong>
      <div className={styles.wrapper_pay_info}>
        <p className={styles.txt_info}>
          상품금액
          <span>{formatNumberWithUnit(totalPrice)}</span>
        </p>
        <p className={styles.txt_info}>
          수량
          <span>x {quantity}개</span>
        </p>
        <p className={styles.txt_info}>
          수신인원
          <span>x 1명</span>
        </p>
      </div>
      <p className={styles.txt_info}>
        상품 결제 금액
        <span>{formatNumberWithUnit(totalPrice)}</span>
      </p>
    </div>
  );
};

export default BillItem;
