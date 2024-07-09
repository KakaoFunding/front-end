import { formatNumberToPercent, formatNumberWithComma } from 'utils/format';

import styles from './index.module.scss';

type ProgressBarProps = {
  denominator: number;
  numerator: number;
};

const ProgressBar = ({ denominator, numerator }: ProgressBarProps) => {
  const percent = formatNumberToPercent(numerator, denominator);
  return (
    <div className={styles.area_progressbar}>
      <div
        className={styles.progressbar_fill}
        style={{ width: `${percent}` }}
      />
      <span className={styles.txt_progressbar}>
        {`${formatNumberWithComma(numerator)} / ${formatNumberWithComma(denominator)}`}
      </span>
    </div>
  );
};

export default ProgressBar;
