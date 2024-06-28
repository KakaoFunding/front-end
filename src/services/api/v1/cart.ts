import { CartResponse, CartCountResponse } from 'types/cart';

import { apiV1 } from '.';

export const getCartItems = async () => {
  const cartItems = await apiV1.get(`/cart`);

  return cartItems.data as CartResponse;
};

export const getCartCount = async () => {
  const cartCount = await apiV1.get(`/cart/itemCount`);

  return cartCount.data as CartCountResponse;
};
