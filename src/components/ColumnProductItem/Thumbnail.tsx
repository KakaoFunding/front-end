import clsx from 'clsx';

import { ProductItem, ProductItemSize } from 'types/productItem';

import styles from './Thumbnail.module.scss';

interface ThumbnailProps {
  src: ProductItem['thumbSrc'];
  alt: ProductItem['name'];
  size: ProductItemSize['size'];
}

const Thumbnail = ({ src, alt, size }: ThumbnailProps) => {
  return (
    <div className={clsx(styles.thumb_wrapper, styles[size])}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Thumbnail;
