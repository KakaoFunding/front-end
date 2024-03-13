import { Link } from 'react-router-dom';

import { Category } from 'types/category';

import styles from './index.module.scss';

type CategoryDropdownProps = {
  categories: Category[];
};

const CategoryDropdown = ({ categories }: CategoryDropdownProps) => {
  return (
    // 상위 카테고리 목록
    <ul className={styles.list_parent}>
      {categories.map((parent) => (
        <li key={parent.categoryId} className={styles.item_parent}>
          <Link
            to={`/categories/${parent.categoryId}`}
            className={styles.link_parent}
          >
            {parent.categoryName}
          </Link>

          {/* 하위 카테고리 목록 */}
          <ul className={styles.list_sub}>
            {parent.subCategories.map((sub) => (
              <li key={sub.categoryId} className={styles.item_sub}>
                <Link
                  to={`/categories/${parent.categoryId}/subcategories/${sub.categoryId}`}
                  className={styles.link_sub}
                >
                  {sub.categoryName}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default CategoryDropdown;
