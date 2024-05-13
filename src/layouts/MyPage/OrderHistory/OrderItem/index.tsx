import { Link } from 'react-router-dom';

import { formatNumberWithComma } from 'utils/format';

import styles from './index.module.scss';

const items = {
  id: 1,
  orderNumber: '662939000',
  receiverName: '김민우',
  product: {
    productId: 386515,
    name: '디핀다트 구슬아이스크림 기프트팩(50ml* 12개)',
    photo:
      'https://st.kakaocdn.net/product/gift/product/20220422165729_0119e39ca8a14084a3504b85ca4eaf30.jpeg',
    price: 15900,
    brandName: '디핀다트',
  },
  quantity: 1,
  orderDate: '2024-04-24T14:59:42.48152',
  status: 'COMPLETE_PAYMENT',
};
const OrderItem = () => {
  return (
    <Link to={`/product/${items.product.productId}`}>
      <div className={styles.wrapper_order}>
        <div className={styles.section_receiver}>
          <span className={styles.ico_receiver} />
          {items.receiverName}
          <span className={styles.txt_detail}>
            상세보기
            <span className={styles.ico_detail} />
          </span>
        </div>
        <div className={styles.section_product}>
          <img
            src={items.product.photo}
            alt={`${items.product.name}상품이미지`}
            className={styles.thumb_product}
          />
          <div className={styles.info_product}>
            <p className={styles.txt_brand}>{items.product.brandName}</p>
            <strong className={styles.txt_title}>{items.product.name}</strong>
            <div>
              <em className={styles.txt_price}>
                {formatNumberWithComma(items.product.price)}
              </em>
              원
              <span
                className={styles.txt_quantity}
              >{`수량${items.quantity}개`}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderItem;
