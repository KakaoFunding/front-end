import { useState } from 'react';

import ColumnProductItem from 'components/ColumnProductItem';

import { ProductItem } from 'types/productItem';

import styles from './index.module.scss';

const ProductList = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  return (
    <ul className={styles.area_products}>
      {products.map((product) => (
        <li key={product.id} className={styles.wrapper_item}>
          <ColumnProductItem size="medium" product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
