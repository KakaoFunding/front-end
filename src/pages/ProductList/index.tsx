import SearchResult from '@components/SearchResult';
import React from 'react';

import CategoryList from './CategoryList';

const ProductList: React.FC = () => (
  <div>
    <CategoryList />
    <SearchResult />
  </div>
);

export default ProductList;
