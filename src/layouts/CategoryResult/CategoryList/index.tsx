import clsx from 'clsx';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAxios } from 'hooks/useAxios';

import { Category } from 'types/category';

import styles from './index.module.scss';

type CategoryListProps = {
  parentId: Category['categoryId'];
  subId: Category['categoryId'] | undefined;
};

const CategoryList = ({ parentId, subId }: CategoryListProps) => {
  const { data, error, sendRequest } = useAxios<Category>({
    method: 'get',
    url: `/categories/${parentId}`,
  });

  useEffect(() => {
    sendRequest();
  }, [parentId]);

  // 예외 처리 추가 구현 필요 (아래는 임시)
  if (!data) {
    const ERROR_MSG = error?.message ?? '알 수 없는 에러';
    // console.log('응답 메시지:', error?.response?.data);
    return <p>{ERROR_MSG}</p>;
  }

  const { categoryId, categoryName, subCategories }: Category = data;

  // 남는 칸 수만큼 빈 li 요소 반환하는 컴포넌트
  const EmptySlots = () => {
    const length = 6 - (subCategories.length % 6);
    return Array.from({ length }).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <li key={`empty-${index}`} className={styles.item_ctg} />
    ));
  };

  return (
    <section className={styles.area_ctg}>
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
        <EmptySlots />
      </ul>
    </section>
  );
};

export default CategoryList;
