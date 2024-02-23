import React from 'react';

import styles from './ProductDetail.module.scss';

const ProductDetail: React.FC = () => {
  return (
    <article>
      <section className={styles.area_main}>{/* 상품 썸네일 */}</section>
      <section className={styles.area_content}>{/* 상품 디테일 */}</section>
      <section className={styles.area_bottom}>{/* 이브랜드의 인기 선물 */}</section>
    </article>
  );
};

export default ProductDetail;
