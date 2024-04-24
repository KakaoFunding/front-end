import GiftItem from './GiftItem';

import styles from './index.module.scss';

const data = {
  items: [1, 2],
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
          {/* TODO : key 값 올바르게 넘겨주기 */}
          {data.items.map((item) => (
            <li key={item}>
              <GiftItem />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GiftDetail;
