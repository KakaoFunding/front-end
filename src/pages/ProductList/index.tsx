import React from 'react';

import SearchResult from 'components/SearchResult';

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
