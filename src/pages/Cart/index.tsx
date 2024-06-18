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
    refetch,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCartItems(),
  });

  const isItemInCart = cartItems ? cartItems.length > 0 : false;

  const handleSelect = (productId: number) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.some((item) => item.productId === productId)) {
        return prevSelectedItems.filter((item) => item.productId !== productId);
      }

      const selectedItem = cartItems!.find(
        (item) => item.productId === productId,
      );

      return selectedItem
        ? [...prevSelectedItems, selectedItem]
        : prevSelectedItems;
    });
  };

  useEffect(() => {
    if (cartItems) {
      setSelectedItems([...cartItems]);
    }
  }, [cartItems]);

  useEffect(() => {
    if (selectedItems) {
      const totalPrice = selectedItems.reduce(
        (acc, cartItem) => acc + cartItem.totalPrice,
        0,
      );
      setTotalPayment(totalPrice);
    } else {
      setTotalPayment(0);
    }
  }, [selectedItems]);

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
                          <CartBoxItem
                            refetch={refetch}
                            item={item}
                            handleSelect={handleSelect}
                            isSelected={selectedItems.some(
                              (selectedItem) =>
                                selectedItem.productId === item.productId,
                            )}
                          />
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
