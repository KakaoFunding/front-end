import clsx from 'clsx';

import { Gift, STATUS_TEXT, StatusType } from 'types/Gift';

import styles from './index.module.scss';

type GiftItemProps = { gift: Gift; status: StatusType };

const GiftItem = ({ gift, status }: GiftItemProps) => {
  const {
    brandName,
    productName,
    productThumbnail,
    senderName,
    expiredAt,
    receivedAt,
  } = gift;

  const getDDay = () => {
    const diffTime = new Date(expiredAt).getTime() - new Date().getTime(); // 시간 차이, 단위: ms
    const DDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 밀리초 / 1일
    return DDay;
  };

  return (
    <div className={styles.wrapper_gift}>
      <div className={styles.wrapper_thumb}>
        <img
          src={productThumbnail}
          alt={productName}
          className={clsx({ [styles.img_unavailable]: status !== 'NOT_USED' })}
        />
      </div>
      <span className={styles.txt_brand}>{brandName}</span>
      <strong className={styles.txt_prod}>{productName}</strong>

      {status === 'NOT_USED' ? (
        <span className={styles.d_day}>D-{getDDay()}</span>
      ) : (
        <span className={clsx(styles.badge, styles[status.toLowerCase()])}>
          {STATUS_TEXT[status]}
        </span>
      )}

      <div className={styles.wrapper_receive_info}>
        <span className={styles.txt_sender}>
          <span className={styles.txt_from}>from. </span>
          {senderName}
        </span>
        <span className={styles.txt_date}>
          {new Date(receivedAt).toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default GiftItem;
