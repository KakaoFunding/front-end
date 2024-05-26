import { useQuery } from '@tanstack/react-query';

import EmptyItem from 'components/feature/EmptyItem';
import Spinner from 'components/ui/Spinner';
import WishItem from 'layouts/MyPage/Wish/WishItem';

import { useUserStore } from 'store/useUserStore';

import { getWishItems } from 'services/api/v1/wish';

import styles from './index.module.scss';

const Wish = () => {
  const { data: wishItems, isLoading } = useQuery({
    queryKey: ['wishItem'],
    queryFn: () => getWishItems(),
  });

  return (
    <>
      {isLoading && <Spinner />}
      <div className={styles.title}>{`${userName}님의 \n위시리스트`}</div>
      {wishItems && wishItems.length === 0 && <EmptyItem type="wish" />}
      {wishItems && wishItems.length && (
        <ul>
          {wishItems.map((wishItem) => (
            <li key={wishItem.productId}>
              <WishItem wishItem={wishItem} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Wish;
