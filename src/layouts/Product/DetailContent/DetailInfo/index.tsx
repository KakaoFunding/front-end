import DetailContentAccordion from './DetailContentAccordion';

import styles from './index.module.scss';

type DetailInfoProps = {
  origin: string;
  manufacturer: string;
  tel: string;
};

const DetailInfo = ({ origin, manufacturer, tel }: DetailInfoProps) => {
  const detailInfos = [
    ['원산지', origin],
    ['제조국', manufacturer],
    ['소비자 상담 관련 전화번호', tel],
  ];
  return (
    <section className={styles.wrapper_detail_info}>
      <div className={styles.title}>상품고시정보</div>
      <div className={styles.description}>
        <tbody className={styles.table}>
          {detailInfos.map(([title, content]) => (
            <tr key={title} className={styles.wrapper_tr}>
              <td className={styles.table_title}>{title}</td>
              <td className={styles.table_contents}>{content}</td>
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
