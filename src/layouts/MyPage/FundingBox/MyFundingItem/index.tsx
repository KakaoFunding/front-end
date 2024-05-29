import clsx from 'clsx';

import { getDDay, getOneYearLaterDate } from 'utils/generate';

import {
  MyFundingItemType,
  STATUS_TEXT,
  FundingItemStatusType,
} from 'types/funding';

import styles from './index.module.scss';

type MyFundingItemProps = {
  fundingItem: MyFundingItemType;
  status: 'USABLE' | 'USED';
};

const MyFundingItem = ({ fundingItem, status }: MyFundingItemProps) => {
  const { product, receivedDate } = fundingItem;
  const { name, photo, brandName } = product;
  const expiredAt = getOneYearLaterDate(receivedDate).toString();

  return (
    <div className={styles.wrapper_funding}>
      <div className={styles.wrapper_thumb}>
        <img
          src={photo}
          alt={name}
          className={clsx({ [styles.img_unavailable]: status !== 'USABLE' })}
        />
      </div>
      <span className={styles.txt_brand}>{brandName}</span>
      <strong className={styles.txt_prod}>{name}</strong>

      {status === 'USABLE' ? (
        <span className={styles.d_day}>D-{getDDay(expiredAt)}</span>
      ) : (
        <span className={clsx(styles.badge, styles[status.toLowerCase()])}>
          {STATUS_TEXT[status as FundingItemStatusType]}
        </span>
      )}

      <span className={styles.txt_date}>
        {new Date(receivedDate).toLocaleString()}
      </span>
    </div>
  );
};

export default MyFundingItem;
