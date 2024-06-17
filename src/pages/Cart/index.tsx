import { useQuery } from '@tanstack/react-query';

import { useEffect, useState } from 'react';

import MainWrapper from 'components/ui/MainWrapper';
import Spinner from 'components/ui/Spinner';
import Header from 'layouts/App/Header';
import CartBoxFooter from 'layouts/Cart/CartBoxFooter';
import CartBoxHeader from 'layouts/Cart/CartBoxHeader';
import CartBoxItem from 'layouts/Cart/CartBoxItem';
import CartPay from 'layouts/Cart/CartPay';
import EmptyCartBoxBody from 'layouts/Cart/EmptyCartBoxBody';

import { getCartItems } from 'services/api/v1/cart';

import { CartItem } from 'types/cart';

import styles from './index.module.scss';

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState<CartItem[]>([]);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  const {
    data: cartItems,
    isFetched,
    isLoading,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCartItems(),
  });

  const isItemInCart = cartItems ? cartItems.length > 0 : false;

  useEffect(() => {
    if (cartItems) {
      setSelectedItems([...cartItems]);

      const totalPrice = cartItems.reduce(
        (acc, cartItem) => acc + cartItem.totalPrice,
        0,
      );
      setTotalPayment(totalPrice);
    }
  }, [cartItems]);

  return (
    <>
      {isFetched && (
        <>
          <Header />
          <section className={styles.area_cart}>
            <MainWrapper>
              <div className={styles.wrapper_cart}>
                <div className={styles.wrapper_cart_box}>
                  <CartBoxHeader isItemInCart={isItemInCart} />
                  {isItemInCart ? (
                    <ul className={styles.wrapper_item}>
                      {cartItems!.map((item) => (
                        <li key={item.cartId}>
                          <CartBoxItem item={item} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <EmptyCartBoxBody />
                  )}
                  <CartBoxFooter isItemInCart={isItemInCart} />
                </div>
                <CartPay
                  selectedItems={selectedItems}
                  totalPayment={totalPayment}
                />
              </div>
            </MainWrapper>
          </section>
        </>
      )}
      {isLoading && <Spinner />}
    </>
  );
};

export default Cart;
