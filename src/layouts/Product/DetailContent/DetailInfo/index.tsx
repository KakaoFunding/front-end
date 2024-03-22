import DetailContentAccordion from './DetailContentAccordion';

import styles from './index.module.scss';

// TODO : 목데이터
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

const DetailInfo = () => {
  return (
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
};

export default DetailInfo;
