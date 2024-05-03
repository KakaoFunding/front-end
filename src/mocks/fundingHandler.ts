import { HttpResponse, http } from 'msw';

export const fundingHandlers = [
  // 개설한 펀딩 취소
  http.post('/funding/payments/cancel', async () => {
    return new HttpResponse(null, {
      status: 200,
    });
  }),
];
