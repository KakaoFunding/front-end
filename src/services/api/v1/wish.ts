import { MyWishResponse } from 'types/wish';

import { apiV1 } from '.';

export const getMyWishItems = async () => {
  const myWishItems = await apiV1.get(`/wishes/me`);

  return myWishItems.data as MyWishResponse;
};
