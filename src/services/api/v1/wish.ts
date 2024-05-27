import { WishResponse } from 'types/wish';

import { apiV1 } from '.';

export const getWishItems = async () => {
  const wishItems = await apiV1.get(`/wishes/me`);

  return wishItems.data as WishResponse;
};
