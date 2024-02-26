import clsx from 'clsx';
import React from 'react';

import styles from './Price.module.scss';

interface PriceProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const Price = ({ children, size = 'medium' }: PriceProps) => {
  const price = children;
  return (
    <em className={clsx(styles.price_wrapper, styles[size])}>
      {price}
      <span className={styles.unit}>원</span>
    </em>
  );
};

export default Price;
