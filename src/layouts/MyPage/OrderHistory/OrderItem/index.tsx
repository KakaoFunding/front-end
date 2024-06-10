import { Link } from 'react-router-dom';

import { formatNumberWithComma, formatDateAndTime } from 'utils/format';

import { OrderItemType } from 'types/order';

import styles from './index.module.scss';

type OrderItemProps = { item: OrderItemType };

const OrderItem = ({ item }: OrderItemProps) => {
  return (
    <Link to={`/product/${item.product.productId}`}>
      <p className={styles.txt_date}>
        등록한 날짜
        <span className={styles.num_data}>
          {formatDateAndTime(item.orderDate)}
        </span>
      </p>

      <div className={styles.wrapper_order}>
        <div className={styles.section_receiver}>
          <span className={styles.ico_receiver} />
          {item.receiverName}
          <span className={styles.txt_detail}>
            상세보기
            <span className={styles.ico_detail} />
          </span>
        </div>
        <div className={styles.section_product}>
          <img
            src={item.product.photo}
            alt={`${item.product.name}상품이미지`}
            className={styles.thumb_product}
          />
          <div className={styles.info_product}>
            <p className={styles.txt_brand}>{item.product.brandName}</p>
            <strong className={styles.txt_title}>{item.product.name}</strong>
            <div>
              <em className={styles.txt_price}>
                {formatNumberWithComma(item.product.price)}
              </em>
              원
              <span
                className={styles.txt_quantity}
              >{`수량${item.quantity}개`}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderItem;
