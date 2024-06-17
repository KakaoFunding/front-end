import { PaginationResponse } from 'types/PaginationResponse';
import { MyFundingItemType, MyInProgressFunding } from 'types/funding';

import { apiV1 } from '.';

export const getMyFundingBoxItems = async (status?: string) => {
  const baseUrl = `/funding/gift`;

  if (status) {
    const myFundingItems = await apiV1.get(`${baseUrl}?status=${status}`);

    return myFundingItems.data as PaginationResponse<MyFundingItemType>;
  }

  const myFundingItems = await apiV1.get(baseUrl);

  return myFundingItems.data as PaginationResponse<MyFundingItemType>;
};

export const getMyFundingItem = async () => {
  const myFundingItem = await apiV1.get('/funding/myItem');

  return myFundingItem.data as MyInProgressFunding;
};
