import { formatNumberToPercent, formatNumberWithComma } from 'utils/format';

import styles from './index.module.scss';

type ProgressProps = {
  fundingGoal: number;
  raisedAmount: number;
};

const WHITE_SPACE = `\u00A0`;

const ProgressBar = ({ fundingGoal, raisedAmount }: ProgressProps) => {
  const percent = formatNumberToPercent(raisedAmount, fundingGoal);
  return (
    <div className={styles.area_progressbar}>
      <div
        className={styles.progressbar_fill}
        style={{ width: `${percent}` }}
      />
      <span className={styles.txt_progressbar}>
        {formatNumberWithComma(raisedAmount)} /{WHITE_SPACE}
        {formatNumberWithComma(fundingGoal)}
      </span>
    </div>
  );
};

export default ProgressBar;
