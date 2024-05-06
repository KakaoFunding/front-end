import EmptyBody from './EmptyBody';
import EmptyFooter from './EmptyFooter';
import EmptyHeader from './EmptyHeader';

import styles from './index.module.scss';

const EmptyCart = () => {
  return (
    <div className={styles.area_empty_cart}>
      <EmptyHeader />
      <EmptyBody />
      <EmptyFooter />
    </div>
  );
};

export default EmptyCart;
