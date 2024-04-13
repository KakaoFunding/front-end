import Slider from 'react-slick';

import ColumnProductItem from 'components/feature/ProductItem/ColumnProductItem';
import SliderArrowButton from 'components/ui/SliderArrowButton';

import { ProductItem } from 'types/productItem';

import BrandMoreSlot from '../BrandMoreSlot';

import styles from './index.module.scss';

type ProductCarouselProps = {
  brandId: number;
  products: ProductItem[];
};

const ProductCarousel = ({ brandId, products }: ProductCarouselProps) => {
  const SLOTS_PER_SLIDE = 4;
  const MAX_SLOTS = 9;

  return (
    <Slider
      arrows={products.length > SLOTS_PER_SLIDE}
      draggable={false}
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
          <BrandMoreSlot size="medium" brandId={brandId} />
        )
      }
    </Slider>
  );
};

export default ProductCarousel;
