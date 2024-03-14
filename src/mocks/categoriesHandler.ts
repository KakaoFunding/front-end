import { http, HttpResponse } from 'msw';

import { Category } from 'types/category';

const categories: Category[] = [
  {
    categoryId: 1,
    categoryName: 'Parent Category 1',
    subCategories: [
      {
        categoryId: 2,
        categoryName: 'Child Category 1',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 3,
        categoryName: 'Child Category 2',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 4,
        categoryName: 'Child Category 3',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 5,
        categoryName: 'Child Category 4',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 6,
        categoryName: 'Child Category 5',
        parentId: 1,
        defaultTab: 'BRAND',
        level: 2,
      },
    ],
    defaultTab: 'BRAND',
    level: 1,
  },
  {
    categoryId: 7,
    categoryName: 'Parent Category 2',
    subCategories: [
      {
        categoryId: 8,
        categoryName: 'Child Category 1',
        parentId: 7,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 9,
        categoryName: 'Child Category 2',
        parentId: 7,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 10,
        categoryName: 'Child Category 3',
        parentId: 7,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 11,
        categoryName: 'Child Category 4',
        parentId: 7,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 12,
        categoryName: 'Child Category 5',
        parentId: 7,
        defaultTab: 'BRAND',
        level: 2,
      },
    ],
    defaultTab: 'BRAND',
    level: 1,
  },
  {
    categoryId: 13,
    categoryName: 'Parent Category 3',
    subCategories: [
      {
        categoryId: 14,
        categoryName: 'Child Category 1',
        parentId: 13,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 15,
        categoryName: 'Child Category 2',
        parentId: 13,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 16,
        categoryName: 'Child Category 3',
        parentId: 13,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 17,
        categoryName: 'Child Category 4',
        parentId: 13,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 18,
        categoryName: 'Child Category 5',
        parentId: 13,
        defaultTab: 'BRAND',
        level: 2,
      },
    ],
    defaultTab: 'BRAND',
    level: 1,
  },
  {
    categoryId: 19,
    categoryName: 'Parent Category 4',
    subCategories: [
      {
        categoryId: 20,
        categoryName: 'Child Category 1',
        parentId: 19,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 21,
        categoryName: 'Child Category 2',
        parentId: 19,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 22,
        categoryName: 'Child Category 3',
        parentId: 19,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 23,
        categoryName: 'Child Category 4',
        parentId: 19,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 24,
        categoryName: 'Child Category 5',
        parentId: 19,
        defaultTab: 'BRAND',
        level: 2,
      },
    ],
    defaultTab: 'BRAND',
    level: 1,
  },
  {
    categoryId: 25,
    categoryName: 'Parent Category 5',
    subCategories: [
      {
        categoryId: 26,
        categoryName: 'Child Category 1',
        parentId: 25,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 27,
        categoryName: 'Child Category 2',
        parentId: 25,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 28,
        categoryName: 'Child Category 3',
        parentId: 25,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 29,
        categoryName: 'Child Category 4',
        parentId: 25,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 30,
        categoryName: 'Child Category 5',
        parentId: 25,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 31,
        categoryName: 'Child Category 6',
        parentId: 25,
        defaultTab: 'BRAND',
        level: 2,
      },
      {
        categoryId: 32,
        categoryName: 'Child Category 7',
        parentId: 25,
        defaultTab: 'BRAND',
        level: 2,
      },
    ],
    defaultTab: 'BRAND',
    level: 1,
  },
];

export const categoriesHandlers = [
  // 카테고리 목록 조회
  http.get('/categories', () => {
    return HttpResponse.json(categories);
  }),

  // 부모 카테고리 조회
  http.get('/categories/:parentId', ({ params }) => {
    const { parentId } = params;

    if (Number.isNaN(Number(parentId))) {
      return new HttpResponse('Unsupported type of parameter included', {
        status: 400,
      });
    }

    const data = categories.find(
      (parent) => parent.categoryId === Number(parentId),
    );

    if (data) {
      return HttpResponse.json(data);
    }

    return new HttpResponse('cannot find category of requested id', {
      status: 404,
    });
  }),
];
