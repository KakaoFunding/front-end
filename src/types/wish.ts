export type WishItemType = {
  wishId: number;
  productId: number;
  productName: string;
  productPrice: number;
  productPhoto: string;
  isPublic: boolean;
};

export type WishResponse = WishItemType[];
