import clsx from 'clsx';
import { ReactNode } from 'react';

import styles from './index.module.scss';

type MainContentProps = {
  children: ReactNode;
  className?: string;
};

const MainWrapper = ({ children, className }: MainContentProps) => {
  return (
    <main className={clsx(styles.wrapper_main, className)}>{children}</main>
  );
};

export default MainWrapper;
