import React from 'react';

import styles from './BrandName.module.scss';

interface BrandNameProps {
  children: React.ReactNode;
}

const BrandName: React.FC<BrandNameProps> = ({ children }) => {
  return <span className={styles.brand_name}>{children}</span>;
};

export default BrandName;
