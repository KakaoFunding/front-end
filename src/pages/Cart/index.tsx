import MainWrapper from 'components/ui/MainWrapper';

import CartBoxFooter from './CartBoxFooter';
import CartBoxHeader from './CartBoxHeader';
import EmptyCartBoxBody from './EmptyCartBoxBody';

import styles from './index.module.scss';

const Cart = () => {
  return (
    <div className={styles.wrapper_cart}>
      <MainWrapper>
        <div className={styles.area_cart}>
          <div className={styles.wrapper_cartbox}>
            <CartBoxHeader />
            <EmptyCartBoxBody />
            <CartBoxFooter />
          </div>
        </div>
      </MainWrapper>
    </div>
  );
};

export default Cart;
