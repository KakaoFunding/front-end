import { useQuery } from '@tanstack/react-query';

import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import MainWrapper from 'components/ui/MainWrapper';
import Spinner from 'components/ui/Spinner';
import ProductBuyInfo from 'layouts/Product/BuyInfo';
import DetailBottom from 'layouts/Product/DetailBottom';
import DetailContents from 'layouts/Product/DetailContent';
import DetailMain from 'layouts/Product/DetailMain';

import {
  getProductDescription,
  getProductDetail,
} from 'services/api/v1/product';

import styles from './index.module.scss';

const Product = () => {
  const [isVisibleSelector, setIsVisibleSelector] = useState(false);
  const target = useRef<HTMLDivElement>(null);
  const { productId } = useParams();

  const { data: productDescription, isLoading: productDescriptionIsLoading } =
    useQuery({
      queryKey: ['productDescription', productId],
      queryFn: () => getProductDescription(productId!),
    });

  const { data: productDetail, isLoading: productDetailIsLoading } = useQuery({
    queryKey: ['productDetail', productId],
    queryFn: () => getProductDetail(productId!),
  });

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
    if (productDescription) {
      observer.observe(target.current!);
    }
  }, [productDescription]);

  return (
    <>
      {(productDescriptionIsLoading || productDetailIsLoading) && <Spinner />}
      {productDescription && productDetail && (
        <MainWrapper>
          <article className={styles.area_product}>
            <section className={styles.area_detail}>
              <DetailMain productDescription={productDescription} />
              <DetailContents
                productDescription={productDescription}
                productDetail={productDetail}
              />
              <DetailBottom brandId={productDescription.brandId} />
              <div ref={target} className={styles.observer} />
            </section>
            <section
              className={clsx(styles.area_buy, {
                [styles.on]: isVisibleSelector,
              })}
            >
              <ProductBuyInfo
                isVisibleSelector={isVisibleSelector}
                productDescription={productDescription}
              />
            </section>
          </article>
        </MainWrapper>
      )}
    </>
  );
};

export default Product;
