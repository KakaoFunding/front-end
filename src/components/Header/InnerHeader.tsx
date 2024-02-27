import BundleUtil from './BundleUtil';
import CategoryButton from './CategoryButton';
import HeaderNav from './HeaderNav';
import Logo from './Logo';

import styles from './index.module.scss';

const InnerHeader = () => {
  return (
    <section className={styles.inner_header}>
      <Logo />
      <HeaderNav />
      <CategoryButton />
      <BundleUtil />
    </section>
  );
};

export default InnerHeader;
