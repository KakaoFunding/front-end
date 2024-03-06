import { Link } from 'react-router-dom';

import styles from './DetailBottom.module.scss';

type DetailBottomProps = {
  brandId: number;
};

const DetailBottom = ({ brandId }: DetailBottomProps) => {
  return (
    <section className={styles.section_detail_bottom}>
      <div className={styles.wrapper_title}>
        <div className={styles.txt}>이 브랜드의 인기선물</div>
        <Link to={`../brand/${brandId}`} className={styles.button}>
          더보기<span className={styles.ico}>아이콘</span>
        </Link>
      </div>
      <div>리스트</div>
    </section>
  );
};

export default DetailBottom;
