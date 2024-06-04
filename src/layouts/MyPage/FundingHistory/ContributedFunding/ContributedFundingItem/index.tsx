import { Link } from 'react-router-dom';

import { formatNumberWithComma, formatDateAndTime } from 'utils/format';

import { ContributedFundingItemType } from 'types/fundingHistory';

import styles from './index.module.scss';

type ContributedFundingItemProps = { item: ContributedFundingItemType };

const ContributedFundingItem = ({ item }: ContributedFundingItemProps) => {
  return (
    <Link to={`/product/${item.product.productId}`}>
      <p className={styles.txt_date}>
        기여한 날짜
        <span className={styles.num_data}>
          {formatDateAndTime(item.fundingDetail.contributedAt)}
        </span>
      </p>

      <div className={styles.wrapper_history}>
        <div className={styles.section_status}>
          <span className={styles.ico_receiver} />
          {item.fundingDetail.creatorName}
          <span className={styles.txt_detail}>
            상세보기
            <span className={styles.ico_detail} />
          </span>
        </div>

        <div className={styles.section_product}>
          <img
            src={item.product.photo}
            alt={`${item.product.name}상품이미지`}
            className={styles.thumb_product}
          />
          <div className={styles.info_product}>
            <p className={styles.txt_brand}>{item.product.brandName}</p>
            <strong className={styles.txt_title}>{item.product.name}</strong>
            <em className={styles.num_price}>
              {formatNumberWithComma(item.fundingDetail.contributedAmount)}
              <span className={styles.txt_unit}>원</span>
            </em>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContributedFundingItem;
