import MainWrapper from 'components/ui/MainWrapper';
import Header from 'layouts/App/Header';
import CartBoxFooter from 'layouts/Cart/CartBoxFooter';
import CartBoxHeader from 'layouts/Cart/CartBoxHeader';
import CartPay from 'layouts/Cart/CartPay';

import EmptyCartBoxBody from './EmptyCartBoxBody';

import styles from './index.module.scss';

const Cart = () => {
  const isItemInCart = true;

  return (
    <>
      <Header />
      <section className={styles.area_cart}>
        <MainWrapper>
          <div className={styles.wrapper_cart}>
            <div>
              <CartBoxHeader isItemInCart={isItemInCart} />
              {isItemInCart ? <div>아이템목록</div> : <EmptyCartBoxBody />}
              <CartBoxFooter isItemInCart={isItemInCart} />
            </div>
            <CartPay />
          </div>
        </MainWrapper>
      </section>
    </>
  );
};

export default Cart;
