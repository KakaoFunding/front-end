type WishDetail = {
  wishId: number;
  productId: number;
  productName: string;
  productPrice: number;
  productPhoto: string;
  brandName: string;
  wishCount: number;
};

export type MyWishItemType = {
  wishDetail: WishDetail;
  public: boolean;
};

export type MyWishResponse = MyWishItemType[];

export type FriendWishItemType = {
  wishDetail: WishDetail;
  wished: boolean;
};

export type ResponseWishAddOrDelete = {
  productId: number;
  wishCount: number;
};
