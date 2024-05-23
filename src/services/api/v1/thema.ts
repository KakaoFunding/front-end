import { ProductItem } from 'types/productItem';

import { apiV1 } from '.';

export const getThemaItems = async (categoryId: number) => {
  const themaItem = await apiV1.get(
    `/products?size=4&categoryId=${categoryId}`,
  );

  return themaItem.data.content as ProductItem[];
};
