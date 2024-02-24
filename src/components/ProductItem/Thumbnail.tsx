import React from 'react';

import styles from './Thumbnail.module.scss';

interface ThumbnailProps {
  src: string;
  alt: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src, alt }) => {
  return (
    <div className={styles.thumb_wrapper}>
      <img className={styles.thumb_img} src={src} alt={alt} />
    </div>
  );
};

export default Thumbnail;
