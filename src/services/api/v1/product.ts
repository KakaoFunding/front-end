import axios from 'axios';

import {
  ProductDescriptionResponse,
  ProductDetailResponse,
} from 'types/product';
import { RecommendProductItemsResponse } from 'types/productItem';

const productApi = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export const getProductDescription = async (productId: string) => {
  const productDescription = await productApi.get(
    `/products/${productId}?tab=description`,
  );
  return productDescription.data as ProductDescriptionResponse;
};

export const getProductDetail = async (productId: string) => {
  const productDetail = await productApi.get(
    `/products/${productId}?tab=detail`,
  );

  return productDetail.data as ProductDetailResponse;
};

export const getRecommendProductItems = async (brandId: string) => {
  const recommendProductItems = await productApi.get(
    `/products/brands/${brandId}?size=4&page=1&sort=PRICE%2Cdesc`,
  );

  return recommendProductItems.data.content as RecommendProductItemsResponse[];
};
