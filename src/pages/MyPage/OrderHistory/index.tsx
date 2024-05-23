import FilterBar from 'components/ui/FilterBar';
import OrderItem from 'layouts/MyPage/OrderHistory/OrderItem';

import styles from './index.module.scss';

const userName = '보경';
const data = {
  hasNext: false,
  items: [
    {
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
    },
    {
      id: 2,
      orderNumber: '351978000',
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
      orderDate: '2024-04-27T15:33:25.436535',
      status: 'COMPLETE_PAYMENT',
    },
    {
      id: 3,
      orderNumber: '506134000',
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
      orderDate: '2024-04-27T15:34:04.33536',
      status: 'CANCELLATION_RETURN_EXCHANGE',
    },
    {
      id: 4,
      orderNumber: '122508000',
      receiverName: '한지윤',
      product: {
        productId: 386515,
        name: '디핀다트 구슬아이스크림 기프트팩(50ml* 12개)',
        photo:
          'https://st.kakaocdn.net/product/gift/product/20220422165729_0119e39ca8a14084a3504b85ca4eaf30.jpeg',
        price: 15900,
        brandName: '디핀다트',
      },
      quantity: 1,
      orderDate: '2024-04-29T09:07:30.937075',
      status: 'COMPLETE_PAYMENT',
    },
  ],
  pageNumber: 0,
  pageSize: 10,
  totalPages: 1,
  totalElements: 4,
  last: true,
};
const OrderHistory = () => {
  return (
    <>
      <div className={styles.title}>{`${userName}님의 \n주문내역`}</div>
      <FilterBar />
      <ul className={styles.wrapper_item}>
        {data.items.map((item) => (
          <li key={item.id}>
            <OrderItem />
          </li>
        ))}
      </ul>
    </>
  );
};

export default OrderHistory;
