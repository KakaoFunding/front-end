import { PaginationResponse } from 'types/PaginationResponse';
import { ProductItem } from 'types/productItem';

import { apiV1 } from '.';

export const getThemaItems = async (page: number, categoryId: number) => {
  const themaItem = await apiV1.get(
    `/products?size=4&page=${page}&categoryId=${categoryId}`,
  );

  return themaItem.data as PaginationResponse<ProductItem>;
};
