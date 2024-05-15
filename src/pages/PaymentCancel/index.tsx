import { Button } from 'components/ui/Button';

import ErrorImage from 'assets/img_advice.png';

import styles from './index.module.scss';

const PaymentCancel = () => {
  return (
    <article className={styles.wrapper_page}>
      <img src={ErrorImage} alt="error" className={styles.img_error} />
      <div className={styles.wrapper_txt}>
        <strong className={styles.txt_title}>결제가 중단되었습니다.</strong>
        <p className={styles.txt_desc}>
          주문을 다시 하시려면 &apos;다시주문&apos;을 눌러주세요.
        </p>
      </div>

      <div>
        <Button color="yellow" className={styles.btn}>
          다시 주문하기
        </Button>
        <Button color="yellow" className={styles.btn}>
          홈으로
        </Button>
      </div>
    </article>
  );
};

export default PaymentCancel;
