import styles from './index.module.scss';

const PaymentDetail = () => {
  const PAY_METHOD = 'pay_method';

  return (
    <section className={styles.area_payment}>
      <h3 className={styles.txt_title}>결제 정보</h3>
      <fieldset>
        <legend className={styles.txt_legend}>결제 수단 선택 필드</legend>

        <div className={styles.wrapper_box}>
          <h4 className={styles.txt_subtitle}>카카오페이 결제</h4>
          <label htmlFor="kakao_pay_money">
            <input type="radio" id="kakao_pay_money" name={PAY_METHOD} />
            카카오페이머니
          </label>
          <label htmlFor="kakao_pay_card">
            <input type="radio" id="kakao_pay_card" name={PAY_METHOD} />
            카카오페이카드
          </label>
        </div>

        <div className={styles.wrapper_box}>
          <h4 className={styles.txt_subtitle}>기타결제</h4>
          <label htmlFor="samsung_pay">
            <input type="radio" id="samsung_pay" name={PAY_METHOD} />
            삼성페이
          </label>
          <label htmlFor="card">
            <input type="radio" id="card" name={PAY_METHOD} />
            신용/체크카드
          </label>
          <label htmlFor="mobile">
            <input type="radio" id="mobile" name={PAY_METHOD} />
            휴대폰
          </label>
          <label htmlFor="virtual_account">
            <input type="radio" id="virtual_account" name={PAY_METHOD} />
            무통장 입금
          </label>
        </div>

        <div className={styles.wrapper_box}>
          <h4 className={styles.txt_subtitle}>결제정보</h4>
          <div className={styles.wrapper_final_price}>
            <strong className={styles.txt_price_title}>최종 결제금액</strong>
            <span>
              19,900원
              {/* amount */}
            </span>
          </div>
        </div>

        <div className={styles.wrapper_box}>
          <span className={styles.txt_agree}>
            주문내용 및 결제조건을 확인했으며, 결제진행에 동의합니다.
          </span>
        </div>

        <button type="submit" className={styles.btn_pay}>
          {/* amount */}결제하기
        </button>
      </fieldset>
    </section>
  );
};

export default PaymentDetail;
