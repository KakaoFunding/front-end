import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAxios } from 'hooks/useAxios';

import { Brand } from 'types/Brand';

import styles from './index.module.scss';

type BannerProps = {
  brandId: number;
};

const Banner = ({ brandId }: BannerProps) => {
  const {
    data: brand,
    error,
    sendRequest,
  } = useAxios<Brand>({
    method: 'get',
    url: `/brands/${brandId}`,
  });

  useEffect(() => {
    sendRequest();
  }, []);

  if (error) {
    Navigate({ to: 'NotFound' });
  }

  return (
    <section className={styles.area_banner}>
      <div className={styles.wrapper_content}>
        <span className={styles.wrapper_logo}>
          <img src={brand?.iconPhoto} alt={brand?.name} />
        </span>
        <span>
          <strong className={styles.txt_name}>{brand?.name}</strong>
        </span>
      </div>
    </section>
  );
};

export default Banner;
