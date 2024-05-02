import clsx from 'clsx';

import { ProductItem, ProductItemSize } from 'types/productItem';

import styles from './index.module.scss';

type ThumbnailProps = {
  src: ProductItem['photo'];
  alt: ProductItem['name'];
  size: ProductItemSize['size'];
};

const Thumbnail = ({ src, alt, size }: ThumbnailProps) => {
  return (
    <div className={clsx(styles.wrapper_thumb, styles[size])}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Thumbnail;
