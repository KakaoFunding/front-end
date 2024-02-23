import React from 'react';

import ProductBuyInfo from './ProductBuyInfo';
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
