export type Category = {
  categoryId: number;
  categoryName: string;
  parentId: number;
  subCategories: Category[];
  defaultTab: string;
  level: number;
};
