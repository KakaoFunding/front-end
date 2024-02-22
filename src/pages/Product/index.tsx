import React from 'react';

import ProductBuyInfo from '@pages/Product/ProductBuyInfo';

import ProductDetail from './ProductDetail';

const Product: React.FC = () => {
  return (
    <section>
      <ProductDetail />
      <ProductBuyInfo />
    </section>
  );
};

export default Product;
