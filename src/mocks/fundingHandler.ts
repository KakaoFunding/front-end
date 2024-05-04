import { HttpResponse, PathParams, http } from 'msw';

type RequestAddFunding = {
  goalAmount: number;
};

export const fundingHandlers = [
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
