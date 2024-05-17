export type ProductItem = {
  productId: number;
  photo: string;
  brandName: string;
  name: string;
  price: number;
  wished: boolean;
  wishCount: number;
};

export type ProductItemSize = {
  size: 'small' | 'medium';
};

export type RecommendProductItemsResponse = Pick<
  ProductItem,
  'productId' | 'photo' | 'name' | 'price'
>;
