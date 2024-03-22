type Pageable = {
  pageNumber: number;
  pageSize: number;
};

export type PaginationResponse<T> = {
  content: T[];
  pageable: Pageable;
  totalElements: number;
  first: boolean;
  last: boolean;
};
