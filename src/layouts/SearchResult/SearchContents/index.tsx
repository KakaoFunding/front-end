import Tabs from 'components/ui/Tabs';

import { Tab } from 'types/tab';

const SearchContents = () => {
  const tabs: Tab[] = [
    { id: 0, name: '전체', content: '' },
    { id: 1, name: '상품', content: '' },
    { id: 2, name: '브랜드', content: '' },
  ];

  return <Tabs initialTabId={0} tabs={tabs} mode="product_list" />;
};

export default SearchContents;
