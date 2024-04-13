import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import ColumnProductItem from 'components/feature/ProductItem/ColumnProductItem';
import ResultTabTitle from 'components/ui/ResultTabTitle';
import SliderArrowButton from 'components/ui/SliderArrowButton';
import Spinner from 'components/ui/Spinner';

import { useAxios } from 'hooks/useAxios';
import { useInfinityScroll } from 'hooks/useInfinityScroll';

import { Brand } from 'types/Brand';
import { PaginationResponse } from 'types/PaginationResponse';
import { ProductItem } from 'types/productItem';

import BrandCard from '../BrandCard';

import BrandMoreSlot from './BrandMoreSlot';

import styles from './index.module.scss';

type BrandTabProps = {
  tabName: string;
  keyword: string;
};

type Item = {
  brand: Brand;
  products: ProductItem[];
};

const BrandTab = ({ tabName, keyword }: BrandTabProps) => {
  const SLOTS_PER_SLIDE = 4;
  const MAX_SLOTS = 9;

  const [hasNext, setHasNext] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [items, setItems] = useState<Item[]>([]);

  const { data, isLoading, sendRequest } = useAxios<PaginationResponse<Item>>({
    method: 'get',
    url: '/search/products/all',
    params: {
      page,
      size: 20,
      keyword,
    },
  });

  const observingTarget = useInfinityScroll(() => {
    if (data) setPage(data.pageNumber + 1);
  }, hasNext);

  useEffect(() => {
    sendRequest();
  }, [page]);

  useEffect(() => {
    if (data) {
      setItems((prev) => [...prev, ...data.items]);
      setHasNext(data.hasNext);
    }
  }, [data]);

  return (
    <section>
      <ResultTabTitle tabName={tabName} count={data?.totalElements}>
        {/* 정렬 */}
      </ResultTabTitle>

      {items.map(({ brand, products }) => (
        <article key={brand.brandId} className={styles.area_card}>
          <BrandCard
            brandId={brand.brandId}
            name={brand.name}
            iconPhoto={brand.iconPhoto}
            category=""
            size="large"
          />
          <Slider
            arrows={products.length > SLOTS_PER_SLIDE}
            slidesToShow={SLOTS_PER_SLIDE}
            slidesToScroll={SLOTS_PER_SLIDE}
            slide="ul"
            infinite={false}
            prevArrow={<SliderArrowButton arrowType="prev" />}
            nextArrow={<SliderArrowButton arrowType="next" />}
            className={styles.wrapper_slider}
          >
            {
              // 브랜드 별 상품 목록 생성
              products.map((product) => (
                <li key={product.id}>
                  <ColumnProductItem size="medium" product={product} />
                </li>
              ))
            }
            {
              // 한 슬라이드를 다 채우지 못하면, 그만큼 빈 슬롯 생성
              products.length < SLOTS_PER_SLIDE &&
                Array.from({ length: SLOTS_PER_SLIDE - products.length }).map(
                  (_, i) => <li key={`empty_slot_${i + 1}`} aria-hidden />,
                )
            }
            {
              // 상품이 더 있으면, 브랜드 더보기 슬롯 생성
              products.length === MAX_SLOTS && (
                <BrandMoreSlot size="medium" brandId={brand.brandId} />
              )
            }
          </Slider>
        </article>
      ))}
      {isLoading && <Spinner />}
      <div ref={observingTarget} />
    </section>
  );
};

export default BrandTab;
