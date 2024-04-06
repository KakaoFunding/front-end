import React, { useEffect } from 'react';

import ResultTabTitle from 'components/ui/ResultTabTitle';
import Spinner from 'components/ui/Spinner';

import { useAxios } from 'hooks/useAxios';

import { Brand } from 'types/Brand';

import BrandCard from '../BrandCard';

import styles from './index.module.scss';

type BrandSummaryProps = {
  tabName: string;
  keyword: string;
};

const BrandSummary = ({ tabName, keyword }: BrandSummaryProps) => {
  const { data, isLoading, sendRequest } = useAxios<Brand[]>({
    method: 'get',
    url: `/search/brands?keyword=${keyword}`,
  });

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <section className={styles.area_brand_summary}>
      <ResultTabTitle tabName={tabName}>{/* 정렬 */}</ResultTabTitle>

      {isLoading && <Spinner />}
      {data && (
        <ul className={styles.list_brand}>
          {data.map((brand) => (
            <li key={brand.brandId} className={styles.item_brand}>
              <BrandCard
                brandId={brand.brandId}
                name={brand.name}
                iconPhoto={brand.iconPhoto}
                category=""
                size="medium"
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default BrandSummary;
