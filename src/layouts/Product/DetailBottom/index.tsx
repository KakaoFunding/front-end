import { Link } from 'react-router-dom';

import ProductItem from './ProductItem';

import styles from './index.module.scss';

type DetailBottomProps = {
  brandId: number;
};

const mockProducts = [
  {
    id: 218884,
    thumbSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20221126161646_d6181e333dd043069de813e0e2525f8d.jpg',
    brandName: '샤넬',
    name: '레 베쥬 립 밤',
    price: 51000,
    isWished: true,
    wishCount: 3,
  },
  {
    id: 218884,
    thumbSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20221126161646_d6181e333dd043069de813e0e2525f8d.jpg',
    brandName: '샤넬',
    name: '레 베쥬 립 밤',
    price: 51000,
    isWished: true,
    wishCount: 3,
  },
  {
    id: 218884,
    thumbSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20221126161646_d6181e333dd043069de813e0e2525f8d.jpg',
    brandName: '샤넬',
    name: '레 베쥬 립 밤',
    price: 51000,
    isWished: true,
    wishCount: 3,
  },
  {
    id: 218884,
    thumbSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20221126161646_d6181e333dd043069de813e0e2525f8d.jpg',
    brandName: '샤넬',
    name: '레 베쥬 립 밤',
    price: 51000,
    isWished: true,
    wishCount: 3,
  },
];

const DetailBottom = ({ brandId }: DetailBottomProps) => {
  return (
    <section className={styles.area_detail_bottom}>
      <div className={styles.wrapper_title}>
        <div className={styles.txt}>이 브랜드의 인기선물</div>
        <Link to={`../brand/${brandId}`} className={styles.button}>
          더보기<span className={styles.ico}>아이콘</span>
        </Link>
      </div>
      {/* 추후 컴포넌트 분리 예정 */}
      <div className={styles.wrapper_contents}>
        <ul className={styles.area_products}>
          {mockProducts.map((product) => (
            <li key={product.id} className={styles.wrapper_item}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DetailBottom;
