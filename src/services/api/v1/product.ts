import axios from 'axios';

import {
  ProductDescriptionResponse,
  ProductDetailResponse,
} from 'types/product';
import { RecommendProductItemsResponse } from 'types/productItem';

// TODO : baseurl 변경에 따라 값 변경
export const getProductDescription = async (productId: string) => {
  const productDescription = await axios.get(
    `https://fundina.shop/api/v1/products/${productId}?tab=description`,
  );
  return productDescription.data as ProductDescriptionResponse;
};

export const getProductDetail = async (productId: string) => {
  const productDetail = await axios.get(
    `https://fundina.shop/api/v1/products/${productId}?tab=detail`,
  );

  return productDetail.data as ProductDetailResponse;
};

export const getRecommendProductItems = async (brandId: string) => {
  const recommendProductItems = await axios.get(
    `https://fundina.shop/api/v1/products/brands/${brandId}?size=4&page=1&sort=PRICE%2Cdesc`,
  );

  return recommendProductItems.data.content as RecommendProductItemsResponse[];
};
