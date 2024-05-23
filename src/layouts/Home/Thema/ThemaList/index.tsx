import { useQuery } from '@tanstack/react-query';

import ColumnProductItem from 'components/feature/ProductItem/ColumnProductItem';
import Spinner from 'components/ui/Spinner';

import { getThemaItems } from 'services/api/v1/thema';

import styles from './index.module.scss';

type ThemaListProps = { categoryId: number; title: string };

const ThemaList = ({ categoryId, title }: ThemaListProps) => {
  const { data: themaItems, isLoading } = useQuery({
    queryKey: ['themaItems', categoryId],
    queryFn: () => getThemaItems(categoryId),
  });

  if (isLoading) return <Spinner />;
  return (
    themaItems && (
      <section className={styles.area_thema}>
        <strong className={styles.txt_title}>{title}</strong>
        <ul className={styles.wrapper_item}>
          {themaItems.map((item) => (
            <li key={item.productId}>
              <ColumnProductItem product={item} size="medium" />
            </li>
          ))}
        </ul>
      </section>
    )
  );
};

export default ThemaList;
