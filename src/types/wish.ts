export type WishItemType = {
  productId: number;
  productName: string;
  productPrice: number;
  productPhoto: string;
  isPublic: boolean;
};

export type WishResponse = WishItemType[];

export type ResponseWishAddOrDelete = {
  productId: number;
  wishCount: number;
};
