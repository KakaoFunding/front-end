import { useQuery } from '@tanstack/react-query';

import { useEffect, useState } from 'react';

import EmptyItem from 'components/feature/EmptyItem';
import FilterBar from 'components/ui/FilterBar';
import Spinner from 'components/ui/Spinner';
import OrderItem from 'layouts/MyPage/OrderHistory/OrderItem';

import { useUserStore } from 'store/useUserStore';

import { useDateFilter } from 'hooks/useDateFilter';
import { useInfinityScroll } from 'hooks/useInfinityScroll';
import { getOrderHistory } from 'services/api/v1/order';

import { OrderItemType } from 'types/order';

import styles from './index.module.scss';

const OrderHistory = () => {
  const [orderItems, setProducts] = useState<OrderItemType[]>([]);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const { name } = useUserStore();

  const { startDate, endDate } = useDateFilter();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['orderHistory', startDate, endDate],
    queryFn: () => getOrderHistory(startDate, endDate),
  });

  const observingTarget = useInfinityScroll(() => {
    if (data) setPage(data.pageNumber + 1);
  }, hasNext);

  useEffect(() => {
    refetch();
  }, [page]);

  useEffect(() => {
    if (data) {
      setHasNext(data.hasNext);
      setProducts(() => [...orderItems, ...data.items]);
    }
  }, [data]);

  return (
    <>
      <div className={styles.title}>{`${name}님의 \n주문내역`}</div>
      <FilterBar />
      <div className={styles.wrapper_item}>
        {orderItems.length === 0 && <EmptyItem type="history_order" />}
        <ul>
          {orderItems.map((item) => (
            <li key={item.id}>
              <OrderItem item={item} />
            </li>
          ))}
        </ul>
      </div>
      {isLoading && <Spinner />}
      {!isLoading && hasNext && <div ref={observingTarget} />}
    </>
  );
};

export default OrderHistory;
