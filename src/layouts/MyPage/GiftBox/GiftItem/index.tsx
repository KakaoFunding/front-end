import clsx from 'clsx';

import { getDDay } from 'utils/generate';

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
        <span className={styles.d_day}>D-{getDDay(expiredAt)}</span>
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
