import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

type ButtonProps = {
  color?: 'white' | 'gray' | 'black' | 'yellow';
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
};

export const Button = ({
  color,
  onClick,
  className,
  disabled,
  children,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(styles.btn_default, color && styles[color], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
