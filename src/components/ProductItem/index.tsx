import clsx from 'clsx';
import React from 'react';

import BrandName from './BrandName';
import Name from './Name';
import Price from './Price';
import Thumbnail from './Thumbnail';

import styles from './index.module.scss';

// 메인 컴포넌트
interface ProductItemMainProps {
  children: React.ReactNode;
  direction: 'column' | 'row';
}

const ProductItemMain: React.FC<ProductItemMainProps> = ({
  children,
  direction = 'column',
}) => {
  return <div className={clsx(styles.base, styles[direction])}>{children}</div>;
};

// 서브 & 메인 컴포넌트를 객체로 묶음
const ProductItem = Object.assign(ProductItemMain, {
  Thumbnail,
  BrandName,
  Name,
  Price,
});

export default ProductItem;
