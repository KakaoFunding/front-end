import { useQuery } from '@tanstack/react-query';

import EmptyItem from 'components/feature/EmptyItem';
import Spinner from 'components/ui/Spinner';
import MyWishItem from 'layouts/MyPage/Wish/MyWishItem';

import { useUserStore } from 'store/useUserStore';

import { getMyWishItems } from 'services/api/v1/wish';

import styles from './index.module.scss';

const Wish = () => {
  const { name } = useUserStore();

  const { data: wishItems, isLoading } = useQuery({
    queryKey: ['wishItem'],
    queryFn: () => getMyWishItems(),
  });

  return (
    <>
      {isLoading && <Spinner />}
      <div className={styles.title}>{`${name}님의 \n위시리스트`}</div>
      {wishItems && wishItems.length === 0 && <EmptyItem type="wish" />}
      {wishItems && wishItems.length !== 0 && (
        <ul className={styles.wrapper_items}>
          {wishItems.map((wishItem) => (
            <li key={wishItem.wishDetail.wishId}>
              <MyWishItem myWishItem={wishItem} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Wish;
