import { WishResponse } from 'types/wish';

import { apiV1 } from '.';

export const getWishItems = async () => {
  const orderHistory = await apiV1.get(`/wishes/me`);

  return orderHistory.data as WishResponse;
};
