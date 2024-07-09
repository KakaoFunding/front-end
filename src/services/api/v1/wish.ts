import { PaginationResponse } from 'types/PaginationResponse';
import { MyWishItemType } from 'types/wish';

import { apiV1 } from '.';

export const getMyWishItems = async (page: number) => {
  const myWishItems = await apiV1.get(`/wishes/me`, {
    params: {
      page,
      size: 10,
    },
  });

  return myWishItems.data as PaginationResponse<MyWishItemType>;
};
