import { useEffect, useState } from 'react';

import ResultTabTitle from 'components/ui/ResultTabTitle';
import Spinner from 'components/ui/Spinner';

import { useAxios } from 'hooks/useAxios';
import { useInfinityScroll } from 'hooks/useInfinityScroll';

import { Brand } from 'types/Brand';
import { PaginationResponse } from 'types/PaginationResponse';
import { ProductItem } from 'types/productItem';

import BrandCard from '../BrandCard';

import styles from './index.module.scss';

type BrandTabProps = {
  tabName: string;
  keyword: string;
};

type Item = {
  brand: Brand;
  products: ProductItem[];
};

const BrandTab = ({ tabName, keyword }: BrandTabProps) => {
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [items, setItems] = useState<Item[]>([]);

  const { data, isLoading, sendRequest } = useAxios<PaginationResponse<Item>>({
    method: 'get',
    url: '/search/products/all',
    params: {
      page,
      size: 20,
      keyword,
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
      setItems((prev) => [...prev, ...data.items]);
      setHasNext(data.hasNext);
    }
  }, [data]);

  return (
    <section>
      <ResultTabTitle tabName={tabName} count={data?.totalElements}>
        {/* 정렬 */}
      </ResultTabTitle>

      <ul>
        {items.map(({ brand, products }) => (
          <li key={brand.brandId} className={styles.item_card}>
            <BrandCard
              brandId={brand.brandId}
              name={brand.name}
              iconPhoto={brand.iconPhoto}
              category=""
              size="large"
            />
          </li>
        ))}
        {isLoading && <Spinner />}
      </ul>
      <div ref={observingTarget} />
    </section>
  );
};

export default BrandTab;
