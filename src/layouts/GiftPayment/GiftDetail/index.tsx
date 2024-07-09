import { GiftPaymentCard } from 'types/payment';

import GiftItem from './GiftItem';

import styles from './index.module.scss';

type GiftDetailProps = {
  items: GiftPaymentCard[];
};

const GiftDetail = ({ items }: GiftDetailProps) => {
  const count = items.reduce((sum, { quantity }) => sum + quantity, 0);

  return (
    <section className={styles.area_detail}>
      <strong className={styles.txt_title}>선물내역</strong>
      <div className={styles.wrapper_gift}>
        {count > 1 && (
          <div className={styles.wrapper_notice}>
            <span className={styles.ico_gift} />
            <span className={styles.cnt_item}>{count}개</span>의 선물을
            선물상자에 담아 전달합니다.
          </div>
        )}
        <ul>
          {items.map((item) => (
            <li key={item.product.productId}>
              <GiftItem gift={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GiftDetail;
