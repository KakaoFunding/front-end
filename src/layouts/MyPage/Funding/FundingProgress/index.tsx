import ProgressBar from 'components/ui/ProgressBar';

import { formatNumberToPercent, formatNumberWithUnit } from 'utils/format';

import { MyInProgressFunding } from 'types/funding';

import styles from './index.module.scss';

type FundingProgressProps = Pick<
  MyInProgressFunding,
  'remainAmount' | 'goalAmount' | 'accumulateAmount'
>;

const FundingProgress = ({
  remainAmount,
  goalAmount,
  accumulateAmount,
}: FundingProgressProps) => {
  return (
    <section className={styles.area_progress}>
      <p className={styles.txt_title}>
        펀딩{' '}
        <span className={styles.txt_point}>
          {formatNumberToPercent(accumulateAmount, goalAmount)}
        </span>{' '}
        완료
      </p>
      <p className={styles.txt_sub_title}>
        목표 달성까지{' '}
        <span className={styles.txt_point}>
          {formatNumberWithUnit(remainAmount)}
        </span>{' '}
        남았어요
      </p>
      <div>
        <ProgressBar denominator={goalAmount} numerator={accumulateAmount} />
      </div>
      <p className={styles.txt_dec}>
        목표 금액
        <span className={styles.txt_price}>
          {formatNumberWithUnit(goalAmount)}
        </span>
      </p>
      <p className={styles.txt_dec}>
        모인 금액
        <span className={styles.txt_price}>
          {formatNumberWithUnit(accumulateAmount)}
        </span>
      </p>
      <p className={styles.txt_dec}>
        잔여 금액
        <span className={styles.txt_price}>
          {formatNumberWithUnit(remainAmount)}
        </span>
      </p>
    </section>
  );
};

export default FundingProgress;
