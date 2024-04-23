export type RequestExpectedPaymentAmount = {
  productId: number;
  quantity: number;
}[];

export type ResponseExpectedPaymentAmount = {
  shoppingPoint: number;
  methods: string[];
  totalProductAmount: number;
};
