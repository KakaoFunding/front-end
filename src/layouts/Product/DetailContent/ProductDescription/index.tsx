import { DescriptionPhotosType } from 'types/product';

import styles from './index.module.scss';

type ProductDescriptionProps = {
  descriptionPhotos: DescriptionPhotosType;
};

const ProductDescription = ({ descriptionPhotos }: ProductDescriptionProps) => {
  return (
    <section className={styles.wrapper_product_description}>
      {descriptionPhotos.map((imgUrl, idx) => (
        <img
          // eslint-disable-next-line react/no-array-index-key
          key={`${idx}번 상품이미지`}
          src={imgUrl}
          alt="상품상세이미지"
          className={styles.img}
        />
      ))}
    </section>
  );
};

export default ProductDescription;
