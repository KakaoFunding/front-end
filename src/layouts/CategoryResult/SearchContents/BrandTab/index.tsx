import { formatNumberWithComma } from 'utils/format';

import { Category } from 'types/category';

import styles from './index.module.scss';

type BrandTabProps = {
  tabName: string;
  categoryId: Category['categoryId'];
};

const BrandTab = ({ tabName, categoryId }: BrandTabProps) => {
  const count = 119; // 임시

  return (
    <>
      <div className={styles.wrapper_title}>
        <div>
          <h3 className={styles.text_title}>{tabName}</h3>
          <span className={styles.text_count}>
            {formatNumberWithComma(count)}
          </span>
        </div>
        <div>정렬 드롭다운</div>
      </div>
    </>
  );
};

export default BrandTab;
