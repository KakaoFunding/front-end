export type CartItem = {
  cartId: number;
  productId: number;
  optionId: number;
  optionDetailId: number;
  productName: string;
  brandName: string;
  quantity: number;
  productPrice: number;
  imageUrl: string;
  optionName: string;
  optionDetailName: string;
  totalPrice: number;
};

export type CartResponse = CartItem[];
