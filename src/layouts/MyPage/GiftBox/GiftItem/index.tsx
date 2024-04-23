import { Link } from 'react-router-dom';

import styles from './index.module.scss';

type GiftItemProps = {
  productId: number;
  name: string;
  brandName: string;
  photo: string;
  senderName: string;
  receivedDate: string;
};

const GiftItem = ({
  brandName,
  name,
  photo,
  productId,
  receivedDate,
  senderName,
}: GiftItemProps) => {
  return (
    <div className={styles.wrapper_gift}>
      <Link to={`/product/${productId}`}>
        <div className={styles.wrapper_thumb}>
          <img src={photo} alt={name} />
        </div>
        <span className={styles.txt_brand}>{brandName}</span>
        <strong className={styles.txt_prod}>{name}</strong>
      </Link>
      <div className={styles.wrapper_receive_info}>
        <span className={styles.txt_sender}>
          <span className={styles.txt_from}>from. </span>
          {senderName}
        </span>
        <span className={styles.txt_date}>{receivedDate}</span>
      </div>
    </div>
  );
};

export default GiftItem;
