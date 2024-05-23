import { ProductItem } from 'types/productItem';

export type OrderItemType = {
  id: number;
  orderNumber: string;
  receiverName: string;
  product: Pick<
    ProductItem,
    'productId' | 'name' | 'photo' | 'price' | 'brandName'
  >;
  quantity: number;
  orderDate: string;
  status: string;
};
