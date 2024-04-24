import PaymentItem from 'components/feature/PaymentItem';

import useRemainingFunding from 'hooks/useFundingInput';
import { formatNumberWithComma } from 'utils/format';

import styles from './index.module.scss';

const data = {
  fundingGoalPrice: 519000,
};

const FundingDetail = () => {
  const { input, change, handleChange } = useRemainingFunding(
    data.fundingGoalPrice,
  );

  return (
    <section className={styles.area_funding_detail}>
      <strong className={styles.txt_title}>펀딩내역</strong>
      <div className={styles.wrapper_funding_item}>
        <PaymentItem />
        <p className={styles.wrapper_desc}>
          <span className={styles.txt_price}>펀딩 목표 금액</span>
          <span className={styles.num_price}>
            {formatNumberWithComma(data.fundingGoalPrice)}
          </span>
          원
        </p>
        <p className={styles.wrapper_desc}>
          <span className={styles.txt_price}>잔여 금액</span>
          <span className={styles.num_price}>
            {formatNumberWithComma(change)}
          </span>
          원
        </p>
        <p className={styles.wrapper_desc}>
          <span className={styles.txt_price}>기여할 금액</span>
          <input
            className={styles.input}
            onChange={handleChange}
            value={input}
            placeholder="0"
          />
          원
        </p>
      </div>
    </section>
  );
};

export default FundingDetail;
