import clsx from 'clsx';
import { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './ProductDetailsCarousel.module.scss';
import './ProductDetailsCarousel.css';

type ProductDetailsCarouselProps = {
  // TODO : 타입
  // imgs : [{id : number; url : 'string'}]
  imgs: string[];
};

// TODO : 타입
const ProductDetailsCarousel = ({ imgs }: ProductDetailsCarouselProps) => {
  const [target, setTarget] = useState(0);

  const handlePaging = (idx: number) => {
    return (
      <img
        src={imgs[idx]}
        className={clsx(styles.dots, { [styles.none_target]: target === idx })}
        alt={`${idx}번 상품 이미지`}
      />
    );
  };

  const handleTarget = (_: number, next: number) => setTarget(() => next);

  return (
    <div className="slider_container">
      <Slider
        customPaging={handlePaging}
        beforeChange={handleTarget}
        dots
        arrows={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        dotsClass="slider_dots"
      >
        {imgs.map((img) => (
          <img
            // TODO : 타입
            // key : img.id
            key={img}
            // key : img.url
            src={img}
            alt="상품 대표 이미지"
            className={styles.thumb}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductDetailsCarousel;
