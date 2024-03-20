import InnerHeader from './InnerHeader';

import styles from './index.module.scss';

const Header = () => {
  return (
    <header className={styles.area_header}>
      <InnerHeader />
    </header>
  );
};

export default Header;
