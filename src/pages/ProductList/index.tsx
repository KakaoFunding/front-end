import SearchResult from '@components/SearchResult';
import React from 'react';

import CategoryList from './CategoryList';

const ProductList: React.FC = () => {
  return (
    <>
      <CategoryList />
      <SearchResult />
    </>
  );
};

export default ProductList;
