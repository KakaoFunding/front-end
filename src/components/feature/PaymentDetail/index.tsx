import { formatNumberWithUnit } from 'utils/format';

import styles from './index.module.scss';

type PaymentDetailProps = {
  totalPrice: number;
};

const PaymentDetail = ({ totalPrice }: PaymentDetailProps) => {
  const PAY_METHOD = 'pay_method';
  const PAY_ID = {
    KAKAO_MONEY: 'kakao_pay_money',
    KAKAO_CARD: 'kakao_pay_card',
  };

  return (
    <section className={styles.area_payment}>
      <h3 className={styles.txt_title}>결제 정보</h3>
      <fieldset>
        <legend className={styles.txt_legend}>결제 수단 선택 필드</legend>

        <div className={styles.wrapper_box}>
          <h4 className={styles.txt_subtitle}>카카오페이 결제</h4>
          <label htmlFor={PAY_ID.KAKAO_MONEY}>
            <input type="radio" id={PAY_ID.KAKAO_MONEY} name={PAY_METHOD} />
            카카오페이머니
          </label>
          <label htmlFor={PAY_ID.KAKAO_CARD}>
            <input type="radio" id={PAY_ID.KAKAO_CARD} name={PAY_METHOD} />
            카카오페이카드
          </label>
        </div>

        <div className={styles.wrapper_box}>
          <h4 className={styles.txt_subtitle}>결제정보</h4>
          <div className={styles.wrapper_final_price}>
            <strong className={styles.txt_price_title}>최종 결제금액</strong>
            <span>{formatNumberWithUnit(totalPrice)}</span>
          </div>
        </div>

        <div className={styles.wrapper_box}>
          <span className={styles.txt_agree}>
            주문내용 및 결제조건을 확인했으며, 결제진행에 동의합니다.
          </span>
        </div>

        <button type="submit" className={styles.btn_pay}>
          {formatNumberWithUnit(totalPrice)} 결제하기
        </button>
      </fieldset>
    </section>
  );
};

export default PaymentDetail;
