import { useParams } from 'react-router-dom';

import MainWrapper from 'components/MainWrapper';
import SearchResult from 'components/SearchResult';

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
