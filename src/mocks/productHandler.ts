import { http, delay, HttpResponse } from 'msw';

import { PaginationResponse } from 'types/PaginationResponse';
import { ProductItem } from 'types/productItem';

const products = Array.from({ length: 201 }).map(
  (_, i): ProductItem => ({
    id: i,
    name: `뚱냥이 캣 쿠션 ${i}`,
    thumbSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20231129220126_89630bdb59ea4ce885cd0fea7b043df7.png',
    price: 14800,
    brandName: '미뇽맨션',
    isWished: false,
    wishCount: 0,
  }),
);

export const productHandlers = [
  // 카테고리 id를 통한 상품 목록 조회
  http.get('/products', async ({ request }) => {
    await delay();

    const { searchParams } = new URL(request.url);

    const size = Number(searchParams.get('size'));
    const page = Number(searchParams.get('page'));
    const totalElements = products.length;
    const totalPages = Math.ceil(totalElements / size);

    // 실제 응답 시에는 쿼리에 따라 다른 데이터를 보내지만,
    // 모킹 API이므로 products로 통일함
    return HttpResponse.json<PaginationResponse<ProductItem>>({
      content: products.slice(page * size, (page + 1) * size),
      pageable: {
        pageNumber: page,
        pageSize: size,
      },
      totalElements,
      first: page === 0,
      last: totalPages <= page + 1,
    });
  }),

  // 검색을 통한 상품 목록 조회
  http.get('/search/products', async ({ request }) => {
    await delay();

    const { searchParams } = new URL(request.url);

    const keyword = searchParams.get('keyword');
    const searchResults = keyword
      ? products.filter(
          (product) =>
            product.name.includes(keyword) ||
            product.brandName.includes(keyword),
        )
      : [];

    const size = Number(searchParams.get('size'));
    const page = Number(searchParams.get('page'));
    const totalElements = searchResults.length;
    const totalPages = Math.ceil(totalElements / size);

    return HttpResponse.json<PaginationResponse<ProductItem>>({
      content: searchResults.slice(page * size, (page + 1) * size),
      pageable: {
        pageNumber: page,
        pageSize: size,
      },
      totalElements,
      first: page === 0,
      last: totalPages <= page + 1,
    });
  }),
];
