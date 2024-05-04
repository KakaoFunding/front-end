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
  photo: string;
  optionNames: string[] | null;
  amount: {
    totalAmount: number;
    goalAmount: number;
    remainAmount: number;
  };
};
