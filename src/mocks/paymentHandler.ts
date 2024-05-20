import { HttpResponse, PathParams, delay, http } from 'msw';

import { PaginationResponse } from 'types/PaginationResponse';
import {
  RequestPaymentPreview,
  RequestFundingReady,
  ResponsePaymentPreview,
  ResponsePaymentReady,
  ResponseFundingSuccess,
  RequestOrderPreview,
  GiftPaymentCard,
  RequestGiftReady,
} from 'types/payment';

let fundingAmount = 0;

export const paymentHandlers = [
  // 구매할 상품 정보 조회
  http.post<
    PathParams,
    RequestOrderPreview,
    PaginationResponse<GiftPaymentCard>
  >('/orders/preview', async ({ request }) => {
    const data = await request.json();

    const items: GiftPaymentCard[] = data.map(({ productId, quantity }) => ({
      product: {
        productId,
        name: '디핀다트 구슬아이스크림 기프트팩(50ml* 12개)',
        photo:
          'https://st.kakaocdn.net/product/gift/product/20220422165729_0119e39ca8a14084a3504b85ca4eaf30.jpeg',
        price: 15900,
        brandName: '디핀다트',
      },
      optionNames: ['01) 레인보우3+딸기3+쿠키3+초바3 (12개)'],
      quantity,
    }));

    return HttpResponse.json({
      hasNext: false,
      items,
      pageNumber: 0,
      pageSize: 2,
      totalPages: 1,
      totalElements: 1,
      last: true,
    });
  }),

  // 선물 결제 예상 금액 조회
  http.post<PathParams, RequestPaymentPreview, ResponsePaymentPreview>(
    '/payments/preview',
    async ({ request }) => {
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
    },
  ),

  // 선물 결제 준비
  http.post<PathParams, RequestGiftReady, ResponsePaymentReady>(
    '/payments/ready',
    async ({ request }) => {
      const data = await request.json();

      const pgToken = `pgToken_${data.receiver.providerId}`;
      await delay(1000);

      return HttpResponse.json({
        tid: '123',
        redirectUrl: `http://localhost:5173/payments/success?pg_token=${pgToken}`,
        orderNumber: '123',
      });
    },
  ),

  // 펀딩 결제 준비
  http.post<PathParams, RequestFundingReady, ResponsePaymentReady>(
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
