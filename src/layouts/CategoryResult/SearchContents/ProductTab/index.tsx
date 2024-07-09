import { useEffect, useState } from 'react';

import ProductList from 'components/feature/ProductList';
import ResultTabTitle from 'components/ui/ResultTabTitle';
import Spinner from 'components/ui/Spinner';

import { useAxios } from 'hooks/useAxios';
import { useInfinityScroll } from 'hooks/useInfinityScroll';

import { PaginationResponse } from 'types/PaginationResponse';
import { Category } from 'types/category';
import { ProductItem } from 'types/productItem';

import styles from './index.module.scss';

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
    if (data) setPage(data.pageNumber + 1);
  }, hasNext);

  useEffect(() => {
    sendRequest();
  }, [page]);

  useEffect(() => {
    if (data) {
      setProducts((prev) => [...prev, ...data.items]);
      setHasNext(data.hasNext);
      setCount(data.totalElements); // 추후 삭제하고, 필터링 했을 때만 setCount하도록 변경
    }
  }, [data]);

  return (
    <section className={styles.area_prod_tab}>
      <ResultTabTitle tabName={tabName} count={count}>
        {/* <div>정렬 드롭다운</div> */}
      </ResultTabTitle>

      {/* 가격 필터링 */}
      <ProductList products={products} />
      {isLoading && <Spinner />}
      {!isLoading && hasNext && <div ref={observingTarget} />}
    </section>
  );
};

export default ProductTab;
