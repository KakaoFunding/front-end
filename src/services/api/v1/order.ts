import { formatDate } from 'utils/format';

import { PaginationResponse } from 'types/PaginationResponse';
import { OrderItemType } from 'types/order';

import { apiV1 } from '.';

export const getOrderHistory = async (startDate: Date, endDate: Date) => {
  const orderHistory = await apiV1.get('/orders', {
    params: {
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      sort: 'createdAt,desc',
    },
  });
  return orderHistory.data as PaginationResponse<OrderItemType>;
};
