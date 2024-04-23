export type Category = {
  categoryId: number;
  categoryName: string;
  subCategories: SubCategory[];
  defaultTab: string;
  level: number;
};

export type SubCategory = Omit<Category, 'subCategories'> & {
  parentId: number;
};
