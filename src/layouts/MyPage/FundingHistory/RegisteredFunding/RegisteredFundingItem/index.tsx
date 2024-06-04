import { Link } from 'react-router-dom';

import { formatNumberWithComma } from 'utils/format';

import { RegisteredFundingItemType } from 'types/fundingHistory';

import styles from './index.module.scss';

const FUNDING_STATUS = {
  PROGRESS: '진행중',
  COMPLETED: '완료됨',
  CANCEL_REFUND: '취소됨',
};

type RegisteredFundingItemProps = {
  item: RegisteredFundingItemType;
};

const RegisteredFundingItem = ({ item }: RegisteredFundingItemProps) => {
  return (
    <Link to={`/product/${item.productId}`}>
      <p className={styles.txt_date}>
        등록한 날짜
        <span className={styles.num_data}>{item.expiredAt}</span>
      </p>

      <div className={styles.wrapper_history}>
        <div className={styles.section_status}>
          {FUNDING_STATUS.PROGRESS}
          <span className={styles.txt_detail}>
            상세보기
            <span className={styles.ico_detail} />
          </span>
        </div>

        <div className={styles.section_product}>
          <img
            src={item.productImage}
            alt={`${item.productName}상품이미지`}
            className={styles.thumb_product}
          />
          <div className={styles.info_product}>
            <p className={styles.txt_brand}>{item.brandName}</p>
            <strong className={styles.txt_title}>{item.productName}</strong>
            <p className={styles.txt_price}>
              목표 금액 |
              <em className={styles.num_price}>
                {formatNumberWithComma(item.goalAmount)}
              </em>
              <span className={styles.txt_unit}>원</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RegisteredFundingItem;
