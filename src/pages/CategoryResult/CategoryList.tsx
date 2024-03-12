import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Category } from 'types/category';

import styles from './CategoryList.module.scss';

type CategoryListProps = {
  parentId: Category['categoryId'];
  subId: Category['categoryId'] | undefined;
};

const CategoryList = ({ parentId, subId }: CategoryListProps) => {
  // mock data
  // 최초 렌더링 시 /categories/${parentId}로 부모 카테고리 조회
  const { categoryId, categoryName, subCategories }: Category = {
    categoryId: 1,
    categoryName: '부모 카테고리',
    subCategories: [
      {
        categoryId: 2,
        categoryName: '자식 카테고리 1',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 3,
        categoryName: '자식 카테고리 2',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 4,
        categoryName: '자식 카테고리 3',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 5,
        categoryName: '자식 카테고리 4',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 6,
        categoryName: '자식 카테고리 5',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 7,
        categoryName: '자식 카테고리 5',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 8,
        categoryName: '자식 카테고리 5',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 9,
        categoryName: '자식 카테고리 5',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 10,
        categoryName: '자식 카테고리 5',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
    ],
    defaultTab: 'BRAND',
    level: 1,
  };

  // 남는 칸 수만큼 빈 li 요소 반환하는 컴포넌트
  const EmptyListItems = ({ length }: { length: number }) => {
    return Array.from({ length }).map((_, index) => (
      <li key={`empty-${index}`} className={styles.item_ctg} />
    ));
  };

  return (
    <section>
      <h1 className={styles.title_ctg}>{categoryName}</h1>
      <ul className={styles.list_ctg}>
        {subCategories.map((sub) => (
          <li key={sub.categoryId} className={styles.item_ctg}>
            <Link
              to={`/categories/${categoryId}/subCategories/${sub.categoryId}`}
              className={clsx(styles.link_ctg, {
                [styles.selected]: subId === sub.categoryId,
              })}
            >
              {sub.categoryName}
            </Link>
          </li>
        ))}
        <EmptyListItems length={subCategories.length % 6} />
      </ul>
    </section>
  );
};

export default CategoryList;
