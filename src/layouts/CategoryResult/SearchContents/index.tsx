import Tabs from 'components/ui/Tabs';

import { Category } from 'types/category';
import { Tab } from 'types/tab';

import BrandTab from './BrandTab';
import ProductTab from './ProductTab';

type SearchResultProps = {
  categoryId: Category['categoryId'];
};

const SearchContents = ({ categoryId }: SearchResultProps) => {
  const tabs: Tab[] = [
    { id: 0, name: '전체', content: '전체~' },
    {
      id: 1,
      name: '상품',
      content: <ProductTab tabName="상품" categoryId={categoryId} />,
    },
    {
      id: 2,
      name: '브랜드',
      content: <BrandTab tabName="브랜드" categoryId={categoryId} />,
    },
  ];

  return (
    <section>
      <Tabs key={categoryId} initialTabId={2} tabs={tabs} mode="product_list" />
    </section>
  );
};

export default SearchContents;
