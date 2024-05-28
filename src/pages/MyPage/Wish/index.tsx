import { useInfiniteQuery } from '@tanstack/react-query';

import EmptyItem from 'components/feature/EmptyItem';
import Spinner from 'components/ui/Spinner';
import MyWishItem from 'layouts/MyPage/Wish/MyWishItem';

import { useUserStore } from 'store/useUserStore';

import { getMyWishItems } from 'services/api/v1/wish';

import styles from './index.module.scss';

const Wish = () => {
  const { name } = useUserStore();

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['wishItem'],
    queryFn: ({ pageParam }) => getMyWishItems(pageParam),
    initialPageParam: 0,
    getNextPageParam: ({ last, pageNumber }) => {
      if (last) return null;
      return pageNumber + 1;
    },
  });

  return (
    <>
      {isLoading && <Spinner />}
      <div className={styles.title}>{`${name}님의 \n위시리스트`}</div>
      {data?.pages.length === 0 ? (
        <EmptyItem type="wish" />
      ) : (
        <ul>
          {data?.pages.map(({ items }) =>
            items.map((wishItem) => (
              <li key={wishItem.wishDetail.wishId}>
                <MyWishItem myWishItem={wishItem} />
              </li>
            )),
          )}
        </ul>
      )}
      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          className={styles.btn_more}
        >
          <span className={styles.ico_more}>더보기 아이콘</span>
          더보기
        </button>
      )}
    </>
  );
};

export default Wish;
