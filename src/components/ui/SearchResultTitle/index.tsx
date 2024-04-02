import React from 'react';

import { formatNumberWithComma } from 'utils/format';

import styles from './index.module.scss';

type SearchResultTitleProps = {
  tabName: string;
  count?: number;
  children?: React.ReactNode;
};

const SearchResultTitle = ({
  tabName,
  count,
  children,
}: SearchResultTitleProps) => {
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

export default SearchResultTitle;
