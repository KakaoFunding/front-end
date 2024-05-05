import MainWrapper from 'components/ui/MainWrapper';

import EmptyCart from './EmptyCart';

import styles from './index.module.scss';

const Cart = () => {
  return (
    <MainWrapper>
      <div className={styles.area_cart}>
        <EmptyCart />
      </div>
    </MainWrapper>
  );
};

export default Cart;
