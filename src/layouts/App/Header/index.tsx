import BundleUtil from './BundleUtil';
import CategoryButton from './CategoryButton';
import HeaderNav from './HeaderNav';
import Logo from './Logo/Logo';

import styles from './index.module.scss';

const Header = () => {
  return (
    <header className={styles.area_header}>
      <section className={styles.wrapper_header}>
        <Logo />
        <HeaderNav />
        <CategoryButton />
        <BundleUtil />
      </section>
    </header>
  );
};

export default Header;
