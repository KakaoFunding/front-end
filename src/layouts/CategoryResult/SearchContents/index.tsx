import { useEffect } from 'react';

import Tabs from 'components/ui/Tabs';

import { useAxios } from 'hooks/useAxios';

import { Brand } from 'types/Brand';
import { Category } from 'types/category';
import { Tab } from 'types/tab';

import BrandSummary from './BrandSummary';
import BrandTab from './BrandTab';
import ProductTab from './ProductTab';

type SearchResultProps = {
  categoryId: Category['categoryId'];
};

const SearchContents = ({ categoryId }: SearchResultProps) => {
  const {
    data: brands,
    isLoading: isBrandsFetching,
    sendRequest: fetchBrands,
  } = useAxios<Brand[]>({
    method: 'get',
    url: '/brands',
    params: {
      categoryId,
    },
  });

  useEffect(() => {
    fetchBrands();
  }, [categoryId]);

  const tabs: Tab[] = [
    {
      id: 0,
      name: '전체',
      content: (
        <>
          <BrandSummary
            tabName="브랜드"
            brands={brands?.slice(0, 9) ?? []}
            isLoading={isBrandsFetching}
          />
          <ProductTab tabName="상품" categoryId={categoryId} />
        </>
      ),
    },
    {
      id: 1,
      name: '상품',
      content: <ProductTab tabName="상품" categoryId={categoryId} />,
    },
    {
      id: 2,
      name: '브랜드',
      description: brands?.length.toString(),
      content: (
        <BrandTab
          tabName="브랜드"
          brands={brands ?? []}
          isLoading={isBrandsFetching}
        />
      ),
    },
  ];

  return (
    <section>
      <Tabs key={categoryId} initialTabId={2} tabs={tabs} mode="product_list" />
    </section>
  );
};

export default SearchContents;
