import { useEffect } from 'react';

import EmptyItem from 'components/feature/EmptyItem';
import Spinner from 'components/ui/Spinner';
import WishItem from 'layouts/MyPage/Wish/WishItem';

import { useUserStore } from 'store/useUserStore';

import { useAxios } from 'hooks/useAxios';

import { WishResponse } from 'types/wish';

import styles from './index.module.scss';

const Wish = () => {
  const { name } = useUserStore();
  const {
    data: wishItems,
    sendRequest,
    isLoading,
  } = useAxios<WishResponse>({
    method: 'get',
    url: '/wishes/me',
  });

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <div className={styles.title}>{`${name}님의 \n위시리스트`}</div>
      {wishItems && (
        <ul>
          {wishItems.map((wishItem) => (
            <li key={wishItem.productId}>
              <WishItem wishItem={wishItem} />
            </li>
          ))}
        </ul>
      )}
      {wishItems ?? <EmptyItem type="wish" />}
    </>
  );
};

export default Wish;
