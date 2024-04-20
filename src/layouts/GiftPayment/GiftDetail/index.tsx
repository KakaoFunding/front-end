import styles from './index.module.scss';

const data = {
  item: [1, 2],
  count: 2,
};

const GiftDetail = () => {
  return (
    <section className={styles.area_detail}>
      <strong className={styles.txt_title}>선물내역</strong>
      <div className={styles.wrapper_gift}>
        {data.count > 1 && (
          <div className={styles.wrapper_notice}>
            <span className={styles.ico_gift} />
            <span className={styles.cnt_item}>{data.count}개</span>의 선물을
            선물상자에 담아 전달합니다.
          </div>
        )}
        <ul>
          {data.item.map((it) => (
            <li key={it} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GiftDetail;
