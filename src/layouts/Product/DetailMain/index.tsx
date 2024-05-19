import { Link } from 'react-router-dom';

import { formatNumberWithUnit } from 'utils/format';

import { ProductDescriptionResponse } from 'types/product';

import ProductCarousel from './ProductCarousel';

import styles from './index.module.scss';

type DetailMainProps = {
  productDescription: ProductDescriptionResponse;
};

const DetailMain = ({ productDescription }: DetailMainProps) => {
  const {
    productThumbnails,
    productName,
    price,
    brandId,
    brandThumbnail,
    brandName,
  } = productDescription;
  return (
    <section className={styles.area_main}>
      <ProductCarousel
        thumbnails={productThumbnails}
        className={styles.carousel}
      />
      <section className={styles.wrapper_info}>
        <section className={styles.desc_prod}>
          <div className={styles.title}>{productName}</div>
          <div>{formatNumberWithUnit(price)}</div>
        </section>
        <section className={styles.desc_brand}>
          <Link to={`/brand/${brandId}`} className={styles.wrapper_brand}>
            <img
              src={brandThumbnail}
              alt={`${brandName}브랜드 이미지`}
              className={styles.img_brand}
            />
            <span className={styles.txt_name}>{brandName}</span>
            <span className={styles.ico} />
          </Link>
        </section>
      </section>
    </section>
  );
};

export default DetailMain;
