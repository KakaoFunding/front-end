import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { formatNumberWithComma, formatDateAndTime } from 'utils/format';

import { ContributedFundingItemType } from 'types/fundingHistory';

import styles from './index.module.scss';

type ContributedFundingItemProps = { item: ContributedFundingItemType };

const ContributedFundingItem = ({ item }: ContributedFundingItemProps) => {
  const { product, ...fundingDetail } = item;
  const { productId, name, photo, brandName } = product;
  const { contributedAt, creatorName, contributedAmount, status, self } =
    fundingDetail;

  return (
    <Link to={`/product/${productId}`}>
      <p
        className={clsx(styles.txt_date, {
          [styles.cancel]: status === 'CANCEL_REFUND',
        })}
      >
        기여한 날짜
        <span className={styles.num_data}>
          {formatDateAndTime(contributedAt)}
        </span>
      </p>

      <div className={styles.wrapper_history}>
        <div className={styles.section_status}>
          <span className={styles.ico_receiver} />
          {self ? '나' : creatorName}
          <span className={styles.txt_detail}>
            상세보기
            <span className={styles.ico_detail} />
          </span>
        </div>

        <div
          className={clsx(styles.section_product, {
            [styles.cancel]: status === 'CANCEL_REFUND',
          })}
        >
          <img
            src={photo}
            alt={`${name}상품이미지`}
            className={styles.thumb_product}
          />
          <div className={styles.info_product}>
            <p className={styles.txt_brand}>{brandName}</p>
            <strong className={styles.txt_title}>{name}</strong>
            <em className={styles.num_price}>
              {formatNumberWithComma(contributedAmount)}
              <span className={styles.txt_unit}>원</span>
            </em>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContributedFundingItem;
