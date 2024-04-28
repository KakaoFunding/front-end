import styles from './index.module.scss';

type BannerProps = {
  brandId: number;
};

const brand = {
  name: '브랜드명',
  photo:
    'https://img1.kakaocdn.net/thumb/C50x50@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20230206190514_443b0fd3f81445da9feffd65febc8b55.jpg',
};

const Banner = (brandId: BannerProps) => {
  // 브랜드 로고, 브랜드명 fetch

  return (
    <section className={styles.area_banner}>
      <div className={styles.wrapper_content}>
        <span className={styles.wrapper_logo}>
          <img src={brand.photo} alt={brand.name} />
        </span>
        <span>
          <strong className={styles.txt_name}>{brand.name}</strong>
        </span>
      </div>
    </section>
  );
};

export default Banner;
