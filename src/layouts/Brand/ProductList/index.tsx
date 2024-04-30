import { useEffect, useState } from 'react';

import { useAxios } from 'hooks/useAxios';

import { PaginationResponse } from 'types/PaginationResponse';
import { ProductItem as ProductItemType } from 'types/productItem';

import ProductItem from '../ProductItem';

import styles from './index.module.scss';

type ProductListProps = {
  brandId: number;
};

const ProductList = ({ brandId }: ProductListProps) => {
  const [page, setPage] = useState<number>(0);

  const { data, sendRequest } = useAxios<PaginationResponse<ProductItemType>>({
    method: 'get',
    url: '/products/brands',
    params: {
      brandId,
      page,
      size: 20,
    },
  });

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <section>
      <div>{/* 정렬 및 가격 필터링 */}</div>
      <ul className={styles.area_list}>
        {data?.items.map((item) => (
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
    </section>
  );
};

export default ProductList;
