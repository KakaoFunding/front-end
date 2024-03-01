import clsx from 'clsx';
import { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './ProductDetailsCarousel.module.scss';
import './ProductDetailsCarousel.css';

type ImgsProps = {
  imgs: string[];
};

const ProductDetailsCarousel = ({ imgs }: ImgsProps) => {
  const [target, setTarget] = useState(0);

  const handlePaging = (idx: number) => {
    return (
      <img
        src={imgs[idx]}
        className={clsx(
          styles.img,
          styles[target !== idx ? target : 'none_target'],
        )}
        alt={`${idx}번째 상품 캐러셀`}
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
          <div key={img}>
            <img src={img} alt="상품설명" className={styles.thumb} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductDetailsCarousel;
