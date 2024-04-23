import { formatNumberToPercent, formatNumberWithUnit } from 'utils/format';

import styles from './index.module.scss';

const data = {
  current: 123456,
  target: 990000,
};

const FundingProgress = () => {
  return (
    <section className={styles.area_progress}>
      <p className={styles.txt_title}>
        펀딩{' '}
        <span className={styles.txt_point}>
          {formatNumberToPercent(data.current, data.target)}
        </span>{' '}
        완료
      </p>
      <p className={styles.txt_sub_title}>
        목표 달성까지{' '}
        <span className={styles.txt_point}>
          {formatNumberWithUnit(data.target - data.current)}
        </span>{' '}
        남았어요
      </p>
      {/* TODO : 프로그레스바 삽입 예정 */}
      <div style={{ backgroundColor: `blue`, margin: '20px 0' }}>
        프로그레스바
      </div>
      <p className={styles.txt_dec}>
        목표 금액
        <span className={styles.txt_price}>
          {formatNumberWithUnit(data.target)}
        </span>
      </p>
      <p className={styles.txt_dec}>
        모인 금액
        <span className={styles.txt_price}>
          {formatNumberWithUnit(data.current)}
        </span>
      </p>
      <p className={styles.txt_dec}>
        잔여 금액
        <span className={styles.txt_price}>
          {formatNumberWithUnit(data.target - data.current)}
        </span>
      </p>
    </section>
  );
};

export default FundingProgress;
