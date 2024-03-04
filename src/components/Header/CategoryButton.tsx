import { useState } from 'react';

import CategoryDropdown from 'components/CategoryDropdown';

import styles from './CategoryButton.module.scss';

const CategoryButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={styles.wrapper_category}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.btn}>
        <span className={styles.ico}>카테고리 아이콘</span>
        카테고리
        {isHovered && <CategoryDropdown />}
      </div>
    </section>
  );
};

export default CategoryButton;
