import { ProductItem } from './productItem';

export type Receiver = {
  name: string;
  photoUrl: string;
};

type OrderPreview = {
  productId: number;
  quantity: number;
  options: {
    id: number;
    detailId: number;
  }[];
};
export type RequestOrderPreview = OrderPreview[];

type PaymentPreview = Omit<OrderPreview, 'options'>;
export type RequestExpectedPaymentAmount = PaymentPreview[];

export type ResponseExpectedPaymentAmount = {
  shoppingPoint: number;
  methods: string[];
  totalProductAmount: number;
};

export type ResponseFundingPreview = {
  productId: number;
  name: string;
  brandName: string;
  photo: string;
  optionNames: string[] | null;
  amount: {
    productAmount: number;
    goalAmount: number;
    remainAmount: number;
  };
};

export type RequestFundingReady = {
  fundingId: number;
  amount: number;
};

export type ResponseFundingReady = {
  tid: string;
  redirectUrl: string;
  orderNumber: string;
};

export type ResponseFundingSuccess = {
  receiver: Receiver;
  product: Pick<ProductItem, 'brandName' | 'name' | 'photo'>;
  attributeAmount: number;
};

type Order = {
  product: Pick<ProductItem, 'brandName' | 'name' | 'photo' | 'price'>;
  quantity: number;
  options: {
    optionName: string;
    optionDetailName: string;
  }[];
};

export type ResponseGiftSuccess = {
  receiver: Receiver;
  orders: Order[];
};
