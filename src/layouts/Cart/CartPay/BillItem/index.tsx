import { formatNumberWithUnit } from 'utils/format';

import styles from './index.module.scss';

const prod = {
  title:
    '"선물제격" 보르딘 콜드브루 더치커피 알록달록 앰플 12종 커피 선물세트 (25ml*12개)',
  quantity: 1,
  price: 19900,
  receiver: 1,
};

const BillItem = () => {
  return (
    <div className={styles.wrapper_item}>
      <strong className={styles.txt_title}>{prod.title}</strong>
      <div className={styles.wrapper_pay_info}>
        <p className={styles.txt_info}>
          상품금액
          <span>{formatNumberWithUnit(prod.price)}</span>
        </p>
        <p className={styles.txt_info}>
          수량
          <span>x {prod.quantity}개</span>
        </p>
        <p className={styles.txt_info}>
          수신인원
          <span>x 1명</span>
        </p>
      </div>
      <p className={styles.txt_info}>
        상품 결제 금액
        <span>{formatNumberWithUnit(prod.price * prod.quantity)}</span>
      </p>
    </div>
  );
};

export default BillItem;
