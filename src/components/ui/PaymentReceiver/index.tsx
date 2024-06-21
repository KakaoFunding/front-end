import ProfileImg from 'components/feature/ProfileImg';

import { Receiver } from 'types/payment';

import styles from './index.module.scss';

type PaymentReceiverProps = {
  paymentType: 'gift' | 'funding';
  receiver: Receiver;
};

const PaymentReceiver = ({ paymentType, receiver }: PaymentReceiverProps) => {
  const TEXT_RECEIVERS = '님에게';

  const TEXT_ACTION =
    paymentType === 'gift' ? '선물을 보냈습니다.' : '펀딩했습니다.';

  return (
    <div className={styles.wrapper_receiver}>
      <div className={styles.wrapper_profile}>
        <span className={styles.img_deco}>프로필사진 꾸밈용 컨페티</span>
        <ProfileImg size="m" imgUrl={receiver.photoUrl} />
      </div>
      <div className={styles.txt_action}>
        <strong className={styles.txt_name}>{receiver.name}</strong>
        {TEXT_RECEIVERS}
        <br />
        {TEXT_ACTION}
      </div>
    </div>
  );
};

export default PaymentReceiver;
