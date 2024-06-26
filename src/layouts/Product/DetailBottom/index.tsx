import { useQuery } from '@tanstack/react-query';

import { Link } from 'react-router-dom';

import Spinner from 'components/ui/Spinner';

import { getRecommendProductItems } from 'services/api/v1/product';

import ProductItem from './ProductItem';

import styles from './index.module.scss';

type DetailBottomProps = {
  brandId: number;
};

const DetailBottom = ({ brandId }: DetailBottomProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['recommendProductItems', brandId],
    queryFn: () => getRecommendProductItems(brandId),
  });

  return (
    <>
      <div className={styles.wrapper_title}>
        <div className={styles.txt}>이 브랜드의 인기선물</div>
        <Link to={`/brand/${brandId}`} className={styles.button}>
          더보기<span className={styles.ico}>아이콘</span>
        </Link>
      </div>
      {data && (
        <ul className={styles.wrapper_items}>
          {data.items.map((product) => (
            <li key={product.productId}>
              <Link to={`/product/${product.productId}`} reloadDocument>
                <ProductItem product={product} />
              </Link>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <Spinner />}
    </>
  );
};

export default DetailBottom;
