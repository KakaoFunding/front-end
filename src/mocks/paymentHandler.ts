import { HttpResponse, PathParams, delay, http } from 'msw';

import {
  RequestExpectedPaymentAmount,
  RequestFundingReady,
  ResponseExpectedPaymentAmount,
  ResponseFundingReady,
  ResponseFundingSuccess,
} from 'types/payment';

let fundingAmount = 0;

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

  // 펀딩 결제 준비
  http.post<PathParams, RequestFundingReady, ResponseFundingReady>(
    '/funding/payments/ready',
    async ({ request }) => {
      const data = await request.json();

      const pgToken = `${data.fundingId}_${data.amount}`;
      fundingAmount = data.amount;

      await delay(1000);

      return HttpResponse.json({
        tid: '1',
        redirectUrl: `http://localhost:5173/payments/success?pg_token=${pgToken}`,
        orderNumber: '1',
      });
    },
  ),

  // 펀딩 결제 승인 - 성공
  http.post('/funding/payments/success', async () => {
    await delay(1000);

    return HttpResponse.json<ResponseFundingSuccess>({
      receiver: {
        name: '김민우',
        photoUrl:
          'https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png',
      },
      product: {
        brandName: '남성향수',
        photo:
          'https://st.kakaocdn.net/product/gift/product/20240220155008_b20dcecc7a484754ad1e75854794e192.png',
        name: '[선물포장] 베르사체 에로스 30ML + 에로스 미니어처 5ML',
      },
      attributeAmount: fundingAmount,
    });
  }),
];
