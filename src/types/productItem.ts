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
