import { HttpResponse, http } from 'msw';

import { Gift } from 'types/Gift';
import { PaginationResponse } from 'types/PaginationResponse';

const gifts: Gift[] = Array.from({ length: 50 }).map((_, i) => ({
  giftId: i,
  brandName: `브랜드${i}`,
  productName: `상품${i}`,
  productThumbnail:
    'https://img1.kakaocdn.net/thumb/C300x300@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20201230180133_cd30cb29560f4f1f8c7f380eb94e3cf1.png',
  senderName: '홍길동',
  receivedAt: '2022-05-23T23:59:59',
  expiredAt: '2024-12-31T23:59:59',
}));

export const giftHandlers = [
  http.get('/giftBox', ({ request }) => {
    const { searchParams } = new URL(request.url);

    // const status = searchParams.get('status');
    const page = Number(searchParams.get('page'));
    const size = Number(searchParams.get('size'));

    const totalElements = gifts.length;
    const totalPages = Math.ceil(totalElements / size);

    return HttpResponse.json<PaginationResponse<Gift>>({
      items: gifts.slice(page * size, (page + 1) * size),
      hasNext: totalPages > page + 1,
      last: totalPages <= page + 1,
      pageNumber: page,
      pageSize: size,
      totalElements,
      totalPages,
    });
  }),
];
