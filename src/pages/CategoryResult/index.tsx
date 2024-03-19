import { useParams } from 'react-router-dom';

import MainWrapper from 'components/MainWrapper';
import SearchResult from 'components/SearchResult';

import CategoryList from './CategoryList';

const CategoryResult = () => {
  const { parentId: parentIdParam, subId: subIdParam } = useParams();
  const parentId = Number(parentIdParam);
  const subId = subIdParam ? Number(subIdParam) : undefined;

  return (
    <MainWrapper>
      <CategoryList parentId={parentId} subId={subId} />
    </MainWrapper>
  );
};

export default CategoryResult;
