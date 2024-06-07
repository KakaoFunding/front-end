import MainWrapper from 'components/ui/MainWrapper';
import Header from 'layouts/App/Header';
import CartBoxFooter from 'layouts/Cart/CartBoxFooter';
import CartBoxHeader from 'layouts/Cart/CartBoxHeader';
import CartBoxItem from 'layouts/Cart/CartBoxItem';
import CartPay from 'layouts/Cart/CartPay';
import EmptyCartBoxBody from 'layouts/Cart/EmptyCartBoxBody';

import styles from './index.module.scss';

const items = [1, 2, 3];

const Cart = () => {
  const isItemInCart = true;

  return (
    <>
      <Header />
      <section className={styles.area_cart}>
        <MainWrapper>
          <div className={styles.wrapper_cart}>
            <div className={styles.wrapper_cart_box}>
              <CartBoxHeader isItemInCart={isItemInCart} />
              {isItemInCart ? (
                <ul className={styles.wrapper_item}>
                  {items.map((it) => (
                    <li key={it}>
                      <CartBoxItem />
                    </li>
                  ))}
                </ul>
              ) : (
                <EmptyCartBoxBody />
              )}
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
