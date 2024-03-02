import { Category } from 'types/category';

import styles from './index.module.scss';

const CategoryDropdown = () => {
  const categories: Category[] = [
    {
      categoryId: 2,
      categoryName: '뷰티',
      parentId: -1,
      subCategories: [
        {
          categoryId: 7,
          categoryName: '뷰티 - SUBCATEGORY 1',
          parentId: 2,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 8,
          categoryName: '뷰티 - SUBCATEGORY 2',
          parentId: 2,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 9,
          categoryName: '뷰티 - SUBCATEGORY 3',
          parentId: 2,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 10,
          categoryName: '뷰티 - SUBCATEGORY 4',
          parentId: 2,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 11,
          categoryName: '뷰티 - SUBCATEGORY 5',
          parentId: 2,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
      ],
      defaultTab: 'BRAND',
      level: 1,
    },
    {
      categoryId: 3,
      categoryName: '레저/스포츠',
      parentId: -1,
      subCategories: [
        {
          categoryId: 12,
          categoryName: '레저/스포츠 - SUBCATEGORY 1',
          parentId: 3,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 13,
          categoryName: '레저/스포츠 - SUBCATEGORY 2',
          parentId: 3,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 14,
          categoryName: '레저/스포츠 - SUBCATEGORY 3',
          parentId: 3,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 15,
          categoryName: '레저/스포츠 - SUBCATEGORY 4',
          parentId: 3,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 16,
          categoryName: '레저/스포츠 - SUBCATEGORY 5',
          parentId: 3,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
      ],
      defaultTab: 'BRAND',
      level: 1,
    },
    {
      categoryId: 4,
      categoryName: '리빙/도서',
      parentId: -1,
      subCategories: [
        {
          categoryId: 17,
          categoryName: '리빙/도서 - SUBCATEGORY 1',
          parentId: 4,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 18,
          categoryName: '리빙/도서 - SUBCATEGORY 2',
          parentId: 4,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 19,
          categoryName: '리빙/도서 - SUBCATEGORY 3',
          parentId: 4,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 20,
          categoryName: '리빙/도서 - SUBCATEGORY 4',
          parentId: 4,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 21,
          categoryName: '리빙/도서 - SUBCATEGORY 5',
          parentId: 4,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
      ],
      defaultTab: 'BRAND',
      level: 1,
    },
    {
      categoryId: 5,
      categoryName: '식품',
      parentId: -1,
      subCategories: [
        {
          categoryId: 22,
          categoryName: '식품 - SUBCATEGORY 1',
          parentId: 5,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 23,
          categoryName: '식품 - SUBCATEGORY 2',
          parentId: 5,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 24,
          categoryName: '식품 - SUBCATEGORY 3',
          parentId: 5,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 25,
          categoryName: '식품 - SUBCATEGORY 4',
          parentId: 5,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 26,
          categoryName: '식품 - SUBCATEGORY 5',
          parentId: 5,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
      ],
      defaultTab: 'BRAND',
      level: 1,
    },
    {
      categoryId: 6,
      categoryName: '패션',
      parentId: -1,
      subCategories: [
        {
          categoryId: 27,
          categoryName: '패션 - SUBCATEGORY 1',
          parentId: 6,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 28,
          categoryName: '패션 - SUBCATEGORY 2',
          parentId: 6,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 29,
          categoryName: '패션 - SUBCATEGORY 3',
          parentId: 6,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 30,
          categoryName: '패션 - SUBCATEGORY 4',
          parentId: 6,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 31,
          categoryName: '패션 - SUBCATEGORY 5',
          parentId: 6,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 32,
          categoryName: '패션 - SUBCATEGORY 6',
          parentId: 6,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 33,
          categoryName: '패션 - SUBCATEGORY 7',
          parentId: 6,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 34,
          categoryName: '패션 - SUBCATEGORY 8',
          parentId: 6,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 35,
          categoryName: '패션 - SUBCATEGORY 9',
          parentId: 6,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
        {
          categoryId: 36,
          categoryName: '패션 - SUBCATEGORY 10',
          parentId: 6,
          subCategories: [],
          defaultTab: 'BRAND',
          level: 2,
        },
      ],
      defaultTab: 'BRAND',
      level: 1,
    },
  ];

  return (
    <ul className={styles.list_parent}>
      {categories.map((parent) => (
        <li key={parent.categoryId} className={styles.item_parent}>
          {parent.categoryName}
          <ul className={styles.list_sub}>
            {parent.subCategories.map((sub: Category) => (
              <li key={sub.categoryId} className={styles.item_sub}>
                {sub.categoryName}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default CategoryDropdown;
