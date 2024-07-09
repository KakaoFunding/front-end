import { ProductItem } from 'types/productItem';
import { ResponseWishAddOrDelete } from 'types/wish';

import { useAxios } from './useAxios';

export const useAddWish = (
  productId: ProductItem['productId'],
  type: string,
) => {
  const { data: addWishData, sendRequest: addWish } =
    useAxios<ResponseWishAddOrDelete>({
      method: 'post',
      url: `/products/${productId}/wishes`,
      params: {
        type,
      },
    });

  return { addWishData, addWish };
};

export const useDeleteWish = (productId: ProductItem['productId']) => {
  const { data: deleteWishData, sendRequest: deleteWish } =
    useAxios<ResponseWishAddOrDelete>({
      method: 'delete',
      url: `/products/${productId}/wishes`,
    });

  return { deleteWishData, deleteWish };
};
