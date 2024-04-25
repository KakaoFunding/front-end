import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { BADGE_TEXT, Gift } from 'types/Gift';

import styles from './index.module.scss';

type GiftItemProps = Omit<Gift, 'giftId'>; // 선물 상세 조회 페이지 구현 시 Gift로 변경

const GiftItem = ({
  brandName,
  name,
  photo,
  productId,
  receivedDate,
  // expiredDate,
  senderName,
  status,
}: GiftItemProps) => {
  const remainingDays = '365'; // (expiredDate - now)로 계산 필요

  return (
    <div className={styles.wrapper_gift}>
      <Link to={`/product/${productId}`}>
        <div className={styles.wrapper_thumb}>
          <img src={photo} alt={name} />
        </div>
        <span className={styles.txt_brand}>{brandName}</span>
        <strong className={styles.txt_prod}>{name}</strong>

        {status === 'unused' ? (
          <span className={styles.d_day}>D-{remainingDays}</span>
        ) : (
          <span className={clsx(styles.badge, styles[status])}>
            {BADGE_TEXT[status]}
          </span>
        )}
      </Link>

      <div className={styles.wrapper_receive_info}>
        <span className={styles.txt_sender}>
          <span className={styles.txt_from}>from. </span>
          {senderName}
        </span>
        <span className={styles.txt_date}>{receivedDate}</span>
      </div>
    </div>
  );
};

export default GiftItem;
