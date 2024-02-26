import clsx from 'clsx';

import styles from './Thumbnail.module.scss';

interface ThumbnailProps {
  src: string;
  alt: string;
  size: 'small' | 'medium';
}

const Thumbnail = ({ src, alt, size }: ThumbnailProps) => {
  return (
    <div className={clsx(styles.thumb_wrapper, styles[size])}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Thumbnail;
