import { HttpResponse, PathParams, http } from 'msw';

import {
  RequestExpectedPaymentAmount,
  ResponseExpectedPaymentAmount,
} from 'types/payment';

export const paymentHandlers = [
  http.post<
    PathParams,
    RequestExpectedPaymentAmount,
    ResponseExpectedPaymentAmount
  >('/payments/preview', async ({ request }) => {
    const data = await request.json();

    const totalStock = data?.reduce((sum, product) => {
      const { quantity } = product;
      return sum + quantity;
    }, 0);

    return HttpResponse.json({
      shoppingPoint: 0,
      methods: ['KAKAO_PAY'],
      totalProductAmount: totalStock * 10000,
    });
  }),
];
