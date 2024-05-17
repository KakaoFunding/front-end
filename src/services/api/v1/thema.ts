import axios from 'axios';

import { ProductItem } from 'types/productItem';

const productApi = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export const getThemaItems = async (categoryId: number) => {
  const themaItem = await productApi.get(
    `/products?size=4&categoryId=${categoryId}`,
  );

  return themaItem.data.content as ProductItem[];
};
