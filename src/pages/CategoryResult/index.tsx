import { useParams } from 'react-router-dom';

import SearchContents from 'components/SearchContents';
import MainWrapper from 'components/ui/MainWrapper';
import CategoryList from 'layouts/CategoryResult/CategoryList';

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
