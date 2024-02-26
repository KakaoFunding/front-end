import clsx from 'clsx';
import React from 'react';

import styles from './Name.module.scss';

interface NameProps {
  children: React.ReactNode;
  size?: 'small' | 'large';
}

const Name = ({ children, size = 'small' }: NameProps) => {
  return (
    <strong className={clsx(styles.name, styles[size])}>{children}</strong>
  );
};

export default Name;
