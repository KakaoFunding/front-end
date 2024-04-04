import { useSearchParams } from 'react-router-dom';

import Tabs from 'components/ui/Tabs';

import { Tab } from 'types/tab';

import ProductTab from './ProductTab';

const SearchContents = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';

  const tabs: Tab[] = [
    { id: 0, name: '전체', content: '' },
    {
      id: 1,
      name: '상품',
      content: <ProductTab tabName="상품" keyword={keyword} />,
    },
    { id: 2, name: '브랜드', content: '' },
  ];

  return (
    <Tabs key={keyword} initialTabId={0} tabs={tabs} mode="product_list" />
  );
};

export default SearchContents;
