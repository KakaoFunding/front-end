import { ProductItem } from './productItem';

export type RequestExpectedPaymentAmount = {
  productId: number;
  quantity: number;
}[];

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
  receiver: {
    name: string;
    photoUrl: string;
  };
  product: Pick<ProductItem, 'brandName' | 'name' | 'photo'>;
  attributeAmount: number;
};
