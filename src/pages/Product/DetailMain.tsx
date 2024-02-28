import styles from './index.module.scss';

const DetailMain = () => {
  return (
    <section className={styles.area_detail_main}>
      <section className={styles.area_thumb}>
        <img
          src="/img/defaultProductImg.png"
          alt="상품이미지"
          className={styles.prod_img}
        />
        <div className={styles.prod_carousel}>캐러셀</div>
      </section>
      <section className={styles.area_info}>
        <div>타이틀</div>
        <div>별점</div>
        <div>가격</div>
        <div>공유</div>
        <div>브랜드</div>
        <div>상품요약정보</div>
      </section>
    </section>
  );
};

export default DetailMain;
