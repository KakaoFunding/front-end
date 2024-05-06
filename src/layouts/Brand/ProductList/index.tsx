import { useEffect, useState } from 'react';

import Spinner from 'components/ui/Spinner';

import { useAxios } from 'hooks/useAxios';
import { useInfinityScroll } from 'hooks/useInfinityScroll';

import { PaginationResponse } from 'types/PaginationResponse';
import { ProductItem as ProductItemType } from 'types/productItem';

import ProductItem from '../ProductItem';

import styles from './index.module.scss';

type ProductListProps = {
  brandId: number;
};

const ProductList = ({ brandId }: ProductListProps) => {
  const [products, setProducts] = useState<ProductItemType[]>([]);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const { data, isLoading, sendRequest } = useAxios<
    PaginationResponse<ProductItemType>
  >({
    method: 'get',
    url: '/products/brands',
    params: {
      brandId,
      page,
      size: 20,
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
      setHasNext(data.hasNext);
      setProducts((prev) => [...prev, ...data.items]);
    }
  }, [data]);

  return (
    <section>
      <div>{/* 정렬 및 가격 필터링 */}</div>
      <ul className={styles.area_list}>
        {products.map((item) => (
          <li key={item.productId}>
            <ProductItem
              productId={item.productId}
              name={item.name}
              photo={item.photo}
              price={item.price}
            />
          </li>
        ))}
      </ul>
      {isLoading && <Spinner />}
      {!isLoading && hasNext && <div ref={observingTarget} />}
    </section>
  );
};

export default ProductList;
