import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import MainWrapper from 'components/ui/MainWrapper';
import ProductBuyInfo from 'layouts/Product/Buyinfo';
import DetailBottom from 'layouts/Product/DetailBottom';
import DetailContents from 'layouts/Product/DetailContent';
import DetailMain from 'layouts/Product/DetailMain';

import styles from './index.module.scss';

// 상품 데이터 fetch 해오기
const mockBrandId = 1;

const Product = () => {
  const [isVisibleSelector, setIsVisibleSelector] = useState(false);
  const target = useRef<HTMLDivElement>(null);

  const handleObserver: IntersectionObserverCallback = (entries) => {
    if (entries[0].intersectionRatio === 1) {
      setIsVisibleSelector(true);
    } else {
      setIsVisibleSelector(false);
    }
  };

  const observer = new IntersectionObserver(handleObserver, {
    threshold: 1,
  });

  useEffect(() => {
    observer.observe(target.current!);
  }, []);

  return (
    <MainWrapper>
      <article className={styles.area_product}>
        <section className={styles.area_detail}>
          <DetailMain />
          <DetailContents />
          <DetailBottom brandId={mockBrandId} />
          <div ref={target} className={styles.observer} />
        </section>
        <section
          className={clsx(styles.area_buy, { [styles.on]: isVisibleSelector })}
        >
          <ProductBuyInfo isVisibleSelector={isVisibleSelector} />
        </section>
      </article>
    </MainWrapper>
  );
};

export default Product;
