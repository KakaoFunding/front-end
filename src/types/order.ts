import { ProductItem } from 'types/productItem';

export type OrderItemType = {
  id: number;
  orderNumber: string;
  self: boolean;
  receiverName: string;
  product: Pick<
    ProductItem,
    'productId' | 'name' | 'photo' | 'price' | 'brandName'
  >;
  quantity: number;
  orderDate: string;
  status: string;
};
