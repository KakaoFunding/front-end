import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import SliderArrowButton from 'components/ui/SliderArrowButton';

import { useAxios } from 'hooks/useAxios';
import { formatNumberWithComma } from 'utils/format';

import { Brand } from 'types/Brand';
import { Category } from 'types/category';

import styles from './index.module.scss';

type BrandTabProps = {
  tabName: string;
  categoryId: Category['categoryId'];
};

const BrandTab = ({ tabName, categoryId }: BrandTabProps) => {
  const { data, sendRequest } = useAxios<Brand[]>({
    method: 'get',
    url: '/brands',
    params: {
      categoryId,
    },
  });

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <>
      <div className={styles.wrapper_title}>
        <div>
          <h3 className={styles.text_title}>{tabName}</h3>
          <span className={styles.text_count}>
            {formatNumberWithComma(data?.length ?? 0)}
          </span>
        </div>
        <div>정렬 드롭다운</div>
      </div>
      <Slider
        arrows
        draggable={false}
        infinite={false}
        slidesToShow={1}
        slide="ul"
        rows={4}
        slidesPerRow={10}
        prevArrow={<SliderArrowButton arrowType="prev" />}
        nextArrow={<SliderArrowButton arrowType="next" />}
      >
        {data?.map((brand: Brand) => (
          <li key={brand.brandId} className={styles.item_brand}>
            <Link to={`/products/brands?brandId=${brand.brandId}`}>
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
    </>
  );
};

export default BrandTab;
