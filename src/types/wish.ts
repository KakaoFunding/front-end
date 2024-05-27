export type MyWishItemType = {
  wishId: number;
  productId: number;
  productName: string;
  productPrice: number;
  productPhoto: string;
  isPublic: boolean;
};

export type MyWishResponse = MyWishItemType[];

export type ResponseWishAddOrDelete = {
  productId: number;
  wishCount: number;
};
