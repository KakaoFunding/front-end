import { HttpResponse, http } from 'msw';

import { Gift } from 'types/Gift';
import { PaginationResponse } from 'types/PaginationResponse';

const unusedGifts: Gift[] = Array.from({ length: 50 }).map((_, i) => ({
  giftId: i,
  productId: 1,
  name: `상품${i}`,
  brandName: `브랜드${i}`,
  photo:
    'https://img1.kakaocdn.net/thumb/C300x300@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20201230180133_cd30cb29560f4f1f8c7f380eb94e3cf1.png',
  senderName: '홍길동',
  receivedDate: '2021.07.01 오전 10:00',
  expiredDate: '2022.07.01 오전 10:00',
  status: 'unused',
}));

const usedGifts: Gift[] = unusedGifts.map((gift) => ({
  ...gift,
  status: 'finish',
}));

export const giftHandlers = [
  http.get('/gifts/finish', ({ request }) => {
    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get('page'));
    const size = Number(searchParams.get('size'));

    const totalElements = usedGifts.length;
    const totalPages = Math.ceil(totalElements / size);

    // httpResponse 반환
    return HttpResponse.json<PaginationResponse<Gift>>({
      items: usedGifts.slice(page * size, (page + 1) * size),
      hasNext: totalPages > page + 1,
      last: totalPages <= page + 1,
      pageNumber: page,
      pageSize: size,
      totalElements,
      totalPages,
    });
  }),
];
