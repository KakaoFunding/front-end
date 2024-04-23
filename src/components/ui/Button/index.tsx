import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

type ButtonProps = {
  color?: 'white' | 'gray' | 'black' | 'yellow';
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children: React.ReactNode;
};

export const Button = ({
  color,
  onClick,
  className,
  children,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(styles.btn_default, color && styles[color], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
