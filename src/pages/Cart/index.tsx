import MainWrapper from 'components/ui/MainWrapper';

import EmptyCart from './EmptyCart';

import styles from './index.module.scss';

const Cart = () => {
  return (
    <div className={styles.wrapper_cart}>
      <MainWrapper>
        <div className={styles.area_cart}>
          <EmptyCart />
        </div>
      </MainWrapper>
    </div>
  );
};

export default Cart;
