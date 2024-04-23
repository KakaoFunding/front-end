export type PaginationResponse<T> = {
  hasNext: boolean;
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalElements: number;
  last: boolean;
};
