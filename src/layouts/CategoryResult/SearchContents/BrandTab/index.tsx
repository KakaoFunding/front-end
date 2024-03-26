import Slider from 'react-slick';

import SliderArrowButton from 'components/ui/SliderArrowButton';

import { formatNumberWithComma } from 'utils/format';

import { Category } from 'types/category';

import styles from './index.module.scss';

type BrandTabProps = {
  tabName: string;
  categoryId: Category['categoryId'];
};

const BrandTab = ({ tabName, categoryId }: BrandTabProps) => {
  const count = 119; // 임시

  return (
    <>
      <div className={styles.wrapper_title}>
        <div>
          <h3 className={styles.text_title}>{tabName}</h3>
          <span className={styles.text_count}>
            {formatNumberWithComma(count)}
          </span>
        </div>
        <div>정렬 드롭다운</div>
      </div>
      <Slider
        arrows
        draggable={false}
        infinite={false}
        slidesToShow={1}
        prevArrow={<SliderArrowButton arrowType="prev" />}
        nextArrow={<SliderArrowButton arrowType="next" />}
      >
        <ul>
          <li>브랜드1</li>
          <li>브랜드2</li>
          <li>브랜드3</li>
        </ul>
        <ul>
          <li>브랜드4</li>
          <li>브랜드5</li>
          <li>브랜드6</li>
        </ul>
        <ul>
          <li>브랜드4</li>
          <li>브랜드5</li>
          <li>브랜드6</li>
        </ul>
      </Slider>
    </>
  );
};

export default BrandTab;
