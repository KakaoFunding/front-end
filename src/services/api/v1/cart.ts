import { CartResponse } from 'types/cart';

import { apiV1 } from '.';

export const getCartItems = async () => {
  const cartItems = await apiV1.get(`/cart`);

  return cartItems.data as CartResponse;
};
