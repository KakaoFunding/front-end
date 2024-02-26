import React from 'react';

import styles from './BrandName.module.scss';

interface BrandNameProps {
  children: React.ReactNode;
}

const BrandName = ({ children }: BrandNameProps) => {
  return <span className={styles.brand_name}>{children}</span>;
};

export default BrandName;
