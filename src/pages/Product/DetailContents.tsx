import Tabs from 'components/Tabs';

import { Tab } from 'types/tab';

import styles from './DetailContents.module.scss';

const productDescriptionImgs = [
  {
    idx: 1,
    url: 'https://st.kakaocdn.net/product/gift/editor/20230925221133_996c19e441fc4211b3fe037cc5da43c2.jpg',
  },

  {
    idx: 2,
    url: 'https://st.kakaocdn.net/product/gift/editor/20231220170801_cd8d0043194944ac93ecd7f18ef505e4.jpg',
  },

  {
    idx: 3,
    url: 'https://st.kakaocdn.net/product/gift/editor/20240201093726_b0480dc61e4f41019a380de11ee2cea6.jpg',
  },

  {
    idx: 4,
    url: 'https://st.kakaocdn.net/product/gift/editor/20240201093702_0d491d962dcc432f92b58373fbaf765a.jpg',
  },
  {
    idx: 5,
    url: 'https://st.kakaocdn.net/product/gift/editor/20240229180601_d06e2ffc83824d45acb31b4fdec393be.jpg',
  },
  {
    idx: 6,
    url: 'https://st.kakaocdn.net/product/gift/editor/20240229180556_74f82e573aba4196b4043ced78a8dfd6.jpg',
  },
  {
    idx: 7,
    url: 'https://st.kakaocdn.net/product/gift/editor/20240201093720_9740dcf11d294cc7bb26a5af24375863.jpg',
  },
  {
    idx: 8,
    url: 'https://st.kakaocdn.net/product/gift/editor/20240201093720_51016be1979c4e3eab1f4a2e80fcc91a.jpg',
  },
  {
    idx: 9,
    url: 'https://st.kakaocdn.net/product/gift/editor/20240228183202_c26a67bc55a04da39d17e82c99e65820.jpg',
  },
  {
    idx: 10,
    url: 'https://st.kakaocdn.net/product/gift/editor/20240201093707_9471cb70305140bd96469d106bac6fe7.jpg',
  },
  {
    idx: 11,
    url: 'https://st.kakaocdn.net/product/gift/editor/20240228183215_250705960d06443a88b1040a7b533cf0.jpg',
  },
  {
    idx: 12,
    url: 'https://st.kakaocdn.net/product/gift/editor/20240228153233_83c1db3d1c744efa9fe2da51db3b8fad.jpg',
  },
  {
    idx: 13,
    url: 'https://st.kakaocdn.net/product/gift/editor/20230302102234_ed4671d0572441e182b04fa73c93a4bd.jpg',
  },
];

const SectionProductDescription = (
  <section className={styles.wrapper_product_description}>
    {productDescriptionImgs.map((img) => (
      <img
        src={img.url}
        alt="상품상세이미지"
        key={img.idx}
        className={styles.img}
      />
    ))}
  </section>
);

const SectionGiftReview = (
  <section className={styles.wrapper_gift_review}>준비중인 기능입니다.</section>
);

const SectionDetailInfo = (
  <section className={styles.wrapper_detail_info}>준비중인 기능입니다.</section>
);

const tabProps: Tab[] = [
  {
    id: 0,
    name: '상품설명',
    content: SectionProductDescription,
  },
  {
    id: 1,
    name: '선물후기',
    content: SectionGiftReview,
  },
  {
    id: 2,
    name: '상세정보',
    content: SectionDetailInfo,
  },
];

const DetailContents = () => {
  return (
    <section className={styles.section_detail_contents}>
      <Tabs initialTabId={0} tabs={tabProps} mode="product_datail" />
    </section>
  );
};

export default DetailContents;
