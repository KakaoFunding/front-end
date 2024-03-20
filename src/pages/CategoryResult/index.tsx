import { useParams } from 'react-router-dom';

import SearchResult from 'components/feature/SearchResult';
import MainWrapper from 'components/ui/MainWrapper';

import CategoryList from './CategoryList';

const CategoryResult = () => {
  const { parentId, subId } = useParams();

  return (
    <MainWrapper>
      <CategoryList
        parentId={Number(parentId)}
        subId={subId ? Number(subId) : undefined}
      />
      <SearchResult />
    </MainWrapper>
  );
};

export default CategoryResult;
