import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Brand } from 'types/Brand';

import styles from './index.module.scss';

type BrandCardProps = Brand & {
  category: string;
  size: 'medium' | 'large';
};

const BrandCard = ({
  brandId,
  name,
  iconPhoto,
  category = '',
  size,
}: BrandCardProps) => {
  return (
    <Link to={`/brand/${brandId}`}>
      <span className={clsx(styles.wrapper_logo, styles[size])}>
        <img src={iconPhoto} alt={name} />
      </span>
      <div className={clsx(styles.wrapper_info, styles[size])}>
        <strong className={clsx(styles.txt_name, styles[size])}>{name}</strong>
        <span className={clsx(styles.txt_category, styles[size])}>
          {category}
        </span>
      </div>
    </Link>
  );
};

export default BrandCard;
