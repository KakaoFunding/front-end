import { useParams } from 'react-router-dom';

import MainWrapper from 'components/MainWrapper';
import SearchContents from 'components/SearchContents';

import CategoryList from './CategoryList';

const CategoryResult = () => {
  const { parentId: parentIdParam, subId: subIdParam } = useParams();
  const parentId = Number(parentIdParam);
  const subId = subIdParam ? Number(subIdParam) : undefined;

  return (
    <MainWrapper>
      <CategoryList parentId={parentId} subId={subId} />
      <SearchContents categoryId={subId ?? parentId} />
    </MainWrapper>
  );
};

export default CategoryResult;
