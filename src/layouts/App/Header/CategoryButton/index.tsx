import { useEffect, useState } from 'react';

import CategoryDropdown from 'components/feature/CategoryDropdown';

import { useAxios } from 'hooks/useAxios';

import { Category } from 'types/category';

import styles from './index.module.scss';

const CategoryButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { data, sendRequest } = useAxios<Category[]>({
    method: 'get',
    url: '/categories',
  });

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <section
      className={styles.wrapper_category}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.btn}>
        <span className={styles.ico}>카테고리 아이콘</span>
        카테고리
        {isHovered && data && <CategoryDropdown categories={data} />}
      </div>
    </section>
  );
};

export default CategoryButton;
