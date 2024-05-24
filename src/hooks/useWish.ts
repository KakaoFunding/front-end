import { ProductItem } from 'types/productItem';

import { useAxios } from './useAxios';

type ResponseType = {
  productId: number;
  wishCount: number;
};

export const useAddWish = (
  productId: ProductItem['productId'],
  isPublic: boolean,
) => {
  const { data: addWishData, sendRequest: addWish } = useAxios<ResponseType>({
    method: 'post',
    url: `/products/${productId}/wishes`,
    params: {
      type: isPublic ? 'OTHERS' : 'ME',
    },
  });

  return { addWishData, addWish };
};

export const useDeleteWish = (productId: ProductItem['productId']) => {
  const { data: deleteWishData, sendRequest: deleteWish } =
    useAxios<ResponseType>({
      method: 'delete',
      url: `/products/${productId}/wishes`,
    });

  return { deleteWishData, deleteWish };
};
