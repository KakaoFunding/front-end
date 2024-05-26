import clsx from 'clsx';
import { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './ProductCarousel.module.scss';
import './ProductCarousel.css';

type ProductCarouselProps = {
  thumbnails: string[];
  className: string;
};

const ProductCarousel = ({ thumbnails, className }: ProductCarouselProps) => {
  const [target, setTarget] = useState(0);

  const handlePaging = (idx: number) => {
    return (
      <img
        src={thumbnails[idx]}
        className={clsx(styles.dots, { [styles.none_target]: target === idx })}
        alt={`${idx}번 상품 이미지`}
      />
    );
  };

  const handleTarget = (_: number, next: number) => setTarget(() => next);

  return (
    thumbnails.length && (
      <Slider
        customPaging={handlePaging}
        beforeChange={handleTarget}
        dots
        arrows={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        dotsClass="slider_dots"
        className={className}
      >
        {thumbnails.map((img) => (
          <img key={img} src={img} alt="상품 대표 이미지" />
        ))}
      </Slider>
    )
  );
};

export default ProductCarousel;
