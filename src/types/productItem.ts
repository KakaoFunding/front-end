export type ProductItem = {
  id: number;
  thumbSrc: string;
  brandName: string;
  name: string;
  price: number;
  isWished: boolean;
  wishCount: number;
};

export type ProductItemSize = {
  size: 'small' | 'medium';
};
