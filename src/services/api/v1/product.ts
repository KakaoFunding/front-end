import { PaginationResponse } from 'types/PaginationResponse';
import {
  ProductDescriptionResponse,
  ProductDetailResponse,
} from 'types/product';
import { RecommendProductItemsResponse } from 'types/productItem';

import { apiV1 } from '.';

export const getProductDescription = async (productId: string) => {
  const productDescription = await apiV1.get(
    `/products/${productId}?tab=description`,
  );
  return productDescription.data as ProductDescriptionResponse;
};

export const getProductDetail = async (productId: string) => {
  const productDetail = await apiV1.get(`/products/${productId}?tab=detail`);

  return productDetail.data as ProductDetailResponse;
};

export const getRecommendProductItems = async (brandId: number) => {
  const recommendProductItems = await apiV1.get(
    `/products/brands/${brandId}?size=4&page=0&sort=PRICE%2Cdesc`,
  );

  return recommendProductItems.data as PaginationResponse<RecommendProductItemsResponse>;
};
