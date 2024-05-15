import { ResponseFundingPreview } from 'types/payment';

import styles from './index.module.scss';

type PaymentItemProps = Omit<ResponseFundingPreview, 'amount'>;

const PaymentItem = ({
  name,
  brandName,
  photo,
  optionNames,
}: PaymentItemProps) => {
  return (
    <section className={styles.wrapper_item}>
      <img
        src={photo}
        alt={`${name}상품이미지`}
        className={styles.thumb_item}
      />
      <div>
        <p className={styles.txt_brand}>{brandName}</p>
        <p className={styles.txt_title}>{name}</p>
        {optionNames && (
          <p className={styles.txt_option}>
            <span className={styles.ico_option} />
            {optionNames?.join(' | ')}
          </p>
        )}
      </div>
    </section>
  );
};

export default PaymentItem;
