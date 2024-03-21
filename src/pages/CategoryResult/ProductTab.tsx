import { useEffect, useState } from 'react';

import Spinner from 'components/Spinner';
import ProductList from 'components/feature/ProductList';

import { useAxios } from 'hooks/useAxios';
import { useInfinityScroll } from 'hooks/useInfinityScroll';
import { formatNumberWithComma } from 'utils/format';

import { PaginationResponse } from 'types/PaginationResponse';
import { Category } from 'types/category';
import { ProductItem } from 'types/productItem';

import styles from './ProductTab.module.scss';

type ProductTabProps = {
  categoryId: Category['categoryId'];
  tabName: string;
};

const ProductTab = ({ categoryId, tabName }: ProductTabProps) => {
  const [page, setPage] = useState<number>(0);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [count, setCount] = useState<number>(0);

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

  const observingTarget = useInfinityScroll(() => {
    if (data) setPage(data.pageable.pageNumber + 1);
  }, hasNext);

  useEffect(() => {
    sendRequest();
  }, [page]);

  useEffect(() => {
    if (data) {
      setProducts((prev) => [...prev, ...data.content]);
      setHasNext(!data.last);
      setCount(data.totalElements); // 추후 삭제하고, 필터링 했을 때만 setCount하도록 변경
    }
  }, [data]);

  return (
    <>
      {/* 탭 이름(제목) + 아이템 개수(필터링에 따라 달라질 수 있음) + 정렬 드롭다운 */}
      <div className={styles.wrapper_title}>
        <div>
          <h3 className={styles.text_title}>{tabName}</h3>
          <span className={styles.text_count}>
            {formatNumberWithComma(count)}
          </span>
        </div>
        <div>정렬 드롭다운</div>
      </div>
      {/* 가격 필터링 */}
      <ProductList products={products} />
      {isLoading && <Spinner />}
      {!isLoading && hasNext && <div ref={observingTarget} />}
    </>
  );
};

export default ProductTab;
