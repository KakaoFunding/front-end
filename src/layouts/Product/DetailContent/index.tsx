import Tabs from 'components/ui/Tabs';

import { Tab } from 'types/tab';

import DetailContentAccordion from './DetailContentAccordion';

import styles from './index.module.scss';

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

const mockTableData = [
  {
    idx: 1,
    title: '내용물의 용량 또는 중량',
    contents: '3.0g',
  },
  { idx: 2, title: '제품 주요 사양', contents: '모든 피부 타입' },
  {
    idx: 3,
    title: '사용기한 또는 개봉 후 사용기간',
    contents:
      '배송되는 제품은 대부분 상품 발송일로부터 12개월 이상 남아있는 제품부터 순차적으로 배송됩니다.',
  },
];
const SectionDetailInfo = (
  <section className={styles.wrapper_detail_info}>
    <div className={styles.title}>상품고시정보</div>
    <div className={styles.description}>
      <tbody className={styles.table}>
        {mockTableData.map((tr) => (
          <tr key={tr.idx} className={styles.wrapper_tr}>
            <td className={styles.table_title}>{tr.title}</td>
            <td className={styles.table_contents}>{tr.contents}</td>
          </tr>
        ))}
      </tbody>
    </div>

    <DetailContentAccordion
      title="교환/반품/환불 안내"
      description="교환/반품/환불/안내 본문"
      className={{ title: styles.title, description: styles.description }}
    />
    <DetailContentAccordion
      title="구매 시 주의 사항"
      description="구매 시 주의 사항 본문"
      className={{ title: styles.title, description: styles.description }}
    />
  </section>
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
    <section className={styles.area_detail_contents}>
      <Tabs initialTabId={0} tabs={tabProps} mode="product_detail" />
    </section>
  );
};

export default DetailContents;
