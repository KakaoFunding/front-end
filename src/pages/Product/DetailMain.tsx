import styles from './DetailMain.module.scss';

const mockData = {
  img: 'https://img1.kakaocdn.net/thumb/C320x320@2x.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20200622172424_cb6115d1953d460e80d8dc95e6906afa.jpg',
  title:
    '수제 컵케이크 4종 (망고무스,오레오,블루베리,초코무스)/*제주도발송불가*',
  origin: '원산지 : 상품상세참조',
  rangking: 1,
  review: '(210건의 선물후기)',
  price: '23,900원',
  brandName: '앨리스데이',
  brandImg:
    'https://img1.kakaocdn.net/thumb/C50x50@2x.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20240129113909_7058ef11b7d74b8b9bd643f4f0b1b881.png',
};

const DetailMain = () => {
  return (
    <section className={styles.section_detail_main}>
      <section className={styles.wrapper_thumb}>
        <img
          src={mockData.img}
          alt={`${mockData.title} 상품이미지`}
          className={styles.img}
        />
        {/* <div className={styles.wrapper_carousel}>캐러셀</div> */}
      </section>
      <section className={styles.wrapper_info}>
        <section className={styles.prod_desc}>
          <div className={styles.title}>{mockData.title}</div>
          <div className={styles.origin}>{mockData.origin}</div>
          <div className={styles.price}>{mockData.price}</div>
        </section>
        <section className={styles.brand_desc}>
          <div className={styles.wrapper_brand}>
            <a href="brand/{brandId}" className={styles.link_brand}>
              <img
                className={styles.img_thmb}
                src={mockData.brandImg}
                alt={`${mockData.brandName}브랜드 이미지`}
              />
              <span className={styles.txt_name}>{mockData.brandName}</span>
              <span className={styles.ico}>ss</span>
            </a>
          </div>
        </section>
      </section>
    </section>
  );
};

export default DetailMain;
