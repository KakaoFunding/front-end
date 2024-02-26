import BundleUtil from './BundleUtil';
import CategoryButton from './CategoryButton';
import HeaderNav from './HeaderNav';
import Title from './Title';

import styles from './index.module.scss';

const InnerHeader = () => {
  return (
    <section className={styles.inner_header}>
      <Title />
      <HeaderNav />
      <CategoryButton />
      <BundleUtil />
    </section>
  );
};

export default InnerHeader;
