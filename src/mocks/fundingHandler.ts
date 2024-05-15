import { HttpResponse, PathParams, delay, http } from 'msw';

import { ResponseFundingPreview } from 'types/payment';

type RequestAddFunding = {
  goalAmount: number;
};

export const fundingHandlers = [
  // 펀딩 결제 내역 프리뷰
  http.post('/funding/preview', async () => {
    await delay();

    return HttpResponse.json<ResponseFundingPreview>({
      productId: 2274,
      name: '[선물포장] 베르사체 에로스 30ML + 에로스 미니어처 5ML',
      brandName: '베르사체',
      photo:
        'https://st.kakaocdn.net/product/gift/product/20240220155008_b20dcecc7a484754ad1e75854794e192.png',
      optionNames: null,
      amount: {
        totalAmount: 41700,
        goalAmount: 41700,
        remainAmount: 31700,
      },
    });
  }),

  // 펀딩 아이템 등록(펀딩 개설)
  http.post<PathParams, RequestAddFunding>(
    '/funding/:productId',
    async ({ request }) => {
      const data = await request.json();

      if (data?.goalAmount <= 0) {
        return new HttpResponse(null, {
          status: 400,
        });
      }

      return HttpResponse.json({ id: 1 });
    },
  ),

  // 개설한 펀딩 취소
  http.post('/funding/payments/cancel', async () => {
    return new HttpResponse(null, {
      status: 200,
    });
  }),
];
