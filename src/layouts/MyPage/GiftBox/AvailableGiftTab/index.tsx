import { useEffect, useState } from 'react';

import EmptyItem from 'components/feature/EmptyItem';
import Spinner from 'components/ui/Spinner';

import { useAxios } from 'hooks/useAxios';
import { useInfinityScroll } from 'hooks/useInfinityScroll';

import { Gift } from 'types/Gift';
import { PaginationResponse } from 'types/PaginationResponse';

import GiftItem from '../GiftItem';

import styles from './index.module.scss';

const AvailableGiftTab = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const { data, isLoading, sendRequest } = useAxios<PaginationResponse<Gift>>({
    method: 'get',
    url: '/gifts/unused', // mock URL
    params: {
      page,
      size: 20,
    },
  });

  const observingTarget = useInfinityScroll(() => {
    if (data) setPage(data.pageNumber + 1);
  }, hasNext);

  useEffect(() => {
    sendRequest();
  }, [page]);

  useEffect(() => {
    if (data) {
      setGifts((prev) => [...prev, ...data.items]);
      setHasNext(data.hasNext);
    }
  }, [data]);

  if (!hasNext && gifts.length === 0) {
    return <EmptyItem type="available_gift" />;
  }

  return (
    <>
      <ul className={styles.list_gift}>
        {gifts.map((gift) => (
          <li key={gift.giftId}>
            <GiftItem
              productId={gift.productId}
              name={gift.name}
              brandName={gift.brandName}
              photo={gift.photo}
              senderName={gift.senderName}
              receivedDate={gift.receivedDate}
              status={gift.status}
            />
          </li>
        ))}
      </ul>
      {isLoading && <Spinner />}
      {hasNext && <div ref={observingTarget} />}
    </>
  );
};

export default AvailableGiftTab;
