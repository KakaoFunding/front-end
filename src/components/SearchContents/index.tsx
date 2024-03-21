import Tabs from 'components/ui/Tabs';
import ProductTab from 'pages/CategoryResult/ProductTab';

import { Category } from 'types/category';
import { Tab } from 'types/tab';

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
    { id: 2, name: '브랜드', content: '브랜드~' },
  ];

  return (
    <section>
      <Tabs key={categoryId} initialTabId={2} tabs={tabs} mode="product_list" />
    </section>
  );
};

export default SearchContents;
