import { useEffect, useState } from 'react';

import { useAxios } from 'hooks/useAxios';

import { Gift } from 'types/Gift';
import { PaginationResponse } from 'types/PaginationResponse';

import GiftItem from '../GiftItem';

const UnavailableGiftTab = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const { data, sendRequest } = useAxios<PaginationResponse<Gift>>({
    method: 'get',
    url: '/gifts/finish', // mock URL
    params: {
      page: 0,
      size: 20,
    },
  });

  useEffect(() => {
    sendRequest();
  }, []);

  useEffect(() => {
    if (data) {
      setGifts((prev) => [...prev, ...data.items]);
    }
  }, [data]);

  return (
    <ul>
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
  );
};

export default UnavailableGiftTab;
