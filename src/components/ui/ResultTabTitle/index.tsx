import React from 'react';

import { formatNumberWithComma } from 'utils/format';

import styles from './index.module.scss';

type ResultTabTitleProps = {
  tabName: string;
  count?: number;
  children?: React.ReactNode;
};

const ResultTabTitle = ({ tabName, count, children }: ResultTabTitleProps) => {
  return (
    <div className={styles.wrapper_header}>
      <div>
        <h3 className={styles.txt_title}>{tabName}</h3>
        {count && (
          <span className={styles.txt_count}>
            {formatNumberWithComma(count)}
          </span>
        )}
      </div>
      {children}
    </div>
  );
};

export default ResultTabTitle;
