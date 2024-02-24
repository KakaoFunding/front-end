import clsx from 'clsx';
import React from 'react';

import styles from './Thumbnail.module.scss';

interface ThumbnailProps {
  src: string;
  alt: string;
  size: 'small' | 'medium' | 'large';
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src, alt, size }) => {
  return (
    <div className={clsx(styles.thumb_wrapper, styles[size])}>
      <img className={styles.thumb_img} src={src} alt={alt} />
    </div>
  );
};

export default Thumbnail;
