import { ReactNode } from 'react';

import styles from './index.module.scss';

type MainContentProps = {
  children: ReactNode;
};

const MainWrapper = ({ children }: MainContentProps) => {
  return <main className={styles.wrapper_main}>{children}</main>;
};

export default MainWrapper;
