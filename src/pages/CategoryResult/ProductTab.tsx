import { useEffect, useState } from 'react';

import ProductList from 'components/ProductList';

import { useAxios } from 'hooks/useAxios';
import { useInfinityScroll } from 'hooks/useInfinityScroll';

import { PaginationResponse } from 'types/PaginationResponse';
import { Category } from 'types/category';
import { ProductItem } from 'types/productItem';

type ProductTabProps = {
  categoryId: Category['categoryId'];
};

const ProductTab = ({ categoryId }: ProductTabProps) => {
  const [page, setPage] = useState<number>(0);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductItem[]>([]);

  const { data, isLoading, sendRequest } = useAxios<
    PaginationResponse<ProductItem>
  >({
    method: 'get',
    url: '/products',
    params: {
      page,
      size: 20,
      categoryId,
    },
  });

  const observingTarget = useInfinityScroll(
    () => setPage((prev) => prev + 1),
    hasNext,
    isLoading,
  );

  useEffect(() => {
    sendRequest();
  }, [page]);

  useEffect(() => {
    if (data) {
      setProducts((prev) => [...prev, ...data.content]);
      setHasNext(!data.last);
    }
  }, [data]);

  return (
    <>
      {/* 탭 이름(제목) + 아이템 개수(필터링에 따라 달라질 수 있음) + 정렬 드롭다운 */}
      {/* 가격 필터링 */}
      <ProductList products={products} />
      {isLoading && (
        <div style={{ backgroundColor: 'red', height: 500 }}>로딩중...</div>
      )}
      <div ref={observingTarget} />
    </>
  );
};

export default ProductTab;
