import { Link } from 'react-router-dom';

import { formatNumberWithComma } from 'utils/format';

import styles from './index.module.scss';

// 목데이터
const item = {
  product: {
    productId: 2274,
    name: '[선물포장] 베르사체 에로스 30ML + 에로스 미니어처 5ML',
    photo:
      'https://st.kakaocdn.net/product/gift/product/20240220155008_b20dcecc7a484754ad1e75854794e192.png',
    price: 41700,
    brandName: '남성향수',
  },
  fundingDetail: {
    fundingId: 1,
    fundingDetailId: 7,
    attributeAmount: 10000,
    attributedAt: '2024-05-07T21:26:49',
    creatorName: '김민우',
    status: 'PROGRESS',
  },
};

type FundingHistoryItemProps = {
  mode: 'contribute' | 'register';
};

const FUNDING_STATUS = {
  PROGRESS: '진행중',
  SUCCESS: '완료됨',
  CANCEL: '취소됨',
};

const HISTORY_DATE = {
  contribute: '기여',
  register: '등록',
};

const FundingHistoryItem = ({ mode }: FundingHistoryItemProps) => {
  return (
    <Link to={`/product/${item.product.productId}`}>
      <p className={styles.txt_date}>
        {HISTORY_DATE[mode]}한 날짜
        <span className={styles.num_data}>
          {item.fundingDetail.attributedAt}
        </span>
      </p>
      <div className={styles.wrapper_history}>
        <div className={styles.section_status}>
          {mode === 'contribute' && (
            <>
              <span className={styles.ico_receiver} />
              {item.fundingDetail.creatorName}
            </>
          )}
          {mode === 'register' && FUNDING_STATUS.PROGRESS}
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
            {mode === 'contribute' && (
              <em className={styles.num_price}>
                {formatNumberWithComma(item.fundingDetail.attributeAmount)}
                <span className={styles.txt_unit}>원</span>
              </em>
            )}
            {mode === 'register' && (
              <>
                <div>
                  <span className={styles.txt_price}>상품 금액 | </span>
                  <em className={styles.num_price}>
                    {formatNumberWithComma(item.product.price)}
                  </em>
                  <span className={styles.txt_unit}>원</span>
                </div>
                <div>
                  <span className={styles.txt_price}>목표 금액 | </span>
                  <em className={styles.num_price}>
                    {formatNumberWithComma(item.product.price)}
                  </em>
                  <span className={styles.txt_unit}>원</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FundingHistoryItem;
