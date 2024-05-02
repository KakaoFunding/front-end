import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

type BrandMoreSlotProps = {
  brandId: number;
  size: 'small' | 'medium';
};

const BrandMoreSlot = ({ brandId, size }: BrandMoreSlotProps) => {
  return (
    <Link
      to={`/brand/${brandId}`}
      className={clsx(styles.wrapper_thumb, styles[size])}
    >
      <span className={styles.ico_more} />
      <span className={styles.txt_more}>브랜드 더보기</span>
    </Link>
  );
};

export default BrandMoreSlot;
