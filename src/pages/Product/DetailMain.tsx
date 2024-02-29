import styles from './DetailMain.module.scss';

const mockData = {
  img: [
    'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20221126161239_5038b9a02a4545918505695f3aa5061d.jpg',
    'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220111185048_bb1322bf174446aa90ebb1d1d7899483.jpg',
    'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220111185043_ff1399dbd788457882ff5e3c42e018e9.jpg',
    'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20221126161243_61f7ee78cb87485f8af55f5683222dee.jpg',
  ],
  title: 'NEW 루쥬 코코 밤(+샤넬 기프트 카드)',
  origin: '원산지 : 상품상세참조' && '',
  price: '51,000원',
  brandName: '샤넬',
  brandImg:
    'https://img1.kakaocdn.net/thumb/C200x200@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fgift_brand%2F20200612122729_0c5dad5805cb4aa4855ac7ee831d2e3f.jpg',
};

const DetailMain = () => {
  return (
    <section className={styles.section_detail_main}>
      <section className={styles.wrapper_thumb}>
        <img
          src={mockData.img[0]}
          alt={`${mockData.title} 상품이미지`}
          className={styles.img}
        />
        <div className={styles.wrapper_carousel}>캐러셀</div>
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
