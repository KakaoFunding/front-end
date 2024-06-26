import { HttpResponse, delay, http } from 'msw';

import { isPositiveInteger } from 'utils/validate';

import { Brand } from 'types/Brand';

const brands = Array.from({ length: 325 }).map((_, i) => {
  return {
    brandId: i,
    name: `노티드 ${i}`,
    iconPhoto:
      'https://img1.kakaocdn.net/thumb/C50x50@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20221227151552_fd140c712b8c4a9bb73427651c1c5424.jpeg',
  };
});

export const brandHandlers = [
  // 카테고리 id를 통한 브랜드 목록 조회
  http.get('/brands', async () => {
    await delay();

    // 실제 응답 시에는 categoryId에 따라 다른 데이터를 보내지만, 모킹 API이므로 brands로 통일함
    return HttpResponse.json<Brand[]>(brands);
  }),

  // 검색을 통한 브랜드 목록 조회
  http.get('/search/brands', async () => {
    await delay();

    // 실제 응답 시에는 검색 키워드 따라 다른 데이터를 보내지만, 모킹 API이므로 brands로 통일함
    return HttpResponse.json(brands.slice(0, 4));
  }),

  // 브랜드 id를 통한 브랜드 정보 조회
  http.get('/brands/:brandId', async ({ params }) => {
    const { brandId } = params;

    if (!isPositiveInteger(brandId as string)) {
      return new HttpResponse('Unsupported type of parameter included', {
        status: 400,
      });
    }

    return HttpResponse.json({
      name: `노티드 ${brandId}`,
      iconPhoto:
        'https://img1.kakaocdn.net/thumb/C50x50@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20221227151552_fd140c712b8c4a9bb73427651c1c5424.jpeg',
    });
  }),
];
