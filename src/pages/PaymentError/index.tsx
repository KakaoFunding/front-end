import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from 'components/ui/Button';

import ErrorImage from 'assets/img_advice.png';

import styles from './index.module.scss';

type StateType = {
  errorType: 'fail' | 'cancel';
  paymentType: 'gift' | 'funding';
  otherState: object;
};

const PaymentError = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { errorType, paymentType, ...otherState }: StateType = state;

  const TITLE =
    errorType === 'fail' ? '결제에 실패했습니다.' : '결제가 중단되었습니다.';

  const handleRetry = () => {
    const url = paymentType === 'gift' ? '/bill/gift' : '/bill/funding';
    navigate(url, { state: otherState });
  };

  const handleGoHome = () => {
    navigate('/home');
  };

  return (
    <article className={styles.wrapper_page}>
      <img src={ErrorImage} alt="error" className={styles.img_error} />
      <div className={styles.wrapper_txt}>
        <strong className={styles.txt_title}>{TITLE}</strong>
        <p className={styles.txt_desc}>
          결제를 다시 하시려면 &apos;다시 시도&apos;를 눌러주세요.
        </p>
      </div>

      <div>
        <Button color="yellow" className={styles.btn} onClick={handleRetry}>
          다시 시도
        </Button>
        <Button color="yellow" className={styles.btn} onClick={handleGoHome}>
          홈으로
        </Button>
      </div>
    </article>
  );
};

export default PaymentError;
