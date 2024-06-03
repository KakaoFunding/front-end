import ColumnProductItem from 'components/feature/ProductItem/ColumnProductItem';

import { ProductItem } from 'types/productItem';

import styles from './index.module.scss';

type ThemaListProps = { themaItems: ProductItem[]; title: string };

const ThemaList = ({ themaItems, title }: ThemaListProps) => {
  return (
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
  );
};

export default ThemaList;
