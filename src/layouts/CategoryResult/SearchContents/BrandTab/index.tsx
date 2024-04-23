import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import ResultTabTitle from 'components/ui/ResultTabTitle';
import SliderArrowButton from 'components/ui/SliderArrowButton';
import Spinner from 'components/ui/Spinner';

import { Brand } from 'types/Brand';

import styles from './index.module.scss';

type BrandTabProps = {
  tabName: string;
  brands: Brand[];
  isLoading: boolean;
};

const BrandTab = ({ tabName, brands, isLoading }: BrandTabProps) => {
  return (
    <section className={styles.area_brand_tab}>
      <ResultTabTitle tabName={tabName} count={brands.length}>
        <div>정렬 드롭다운</div>
      </ResultTabTitle>

      {isLoading && <Spinner />}
      <Slider
        arrows={brands.length > 40}
        draggable
        speed={300}
        infinite={false}
        slidesToShow={1}
        slide="ul"
        rows={4}
        slidesPerRow={10}
        lazyLoad="progressive"
        prevArrow={<SliderArrowButton arrowType="prev" />}
        nextArrow={<SliderArrowButton arrowType="next" />}
        className={styles.wrapper_slider}
      >
        {brands.map((brand: Brand) => (
          <li key={brand.brandId} className={styles.item_brand}>
            <Link to={`/brand/${brand.brandId}`}>
              <img
                src={brand.iconPhoto}
                alt={brand.name}
                className={styles.img_logo}
              />
              <span className={styles.txt_name}>{brand.name}</span>
            </Link>
          </li>
        ))}
      </Slider>
    </section>
  );
};

export default BrandTab;
