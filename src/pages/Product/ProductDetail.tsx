import React from 'react';

import styles from './ProductDetail.module.scss';

const ProductDetail: React.FC = () => {
  return (
    <article>
      <div className={styles.area_main}>{/* 상품 썸네일 */}</div>
      <div className={styles.area_content}>{/* 상품 디테일 */}</div>
      <div className={styles.area_bottom}>{/* 이브랜드의 인기 선물 */}</div>
    </article>
  );
};

export default ProductDetail;
