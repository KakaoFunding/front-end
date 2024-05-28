import { useQuery } from '@tanstack/react-query';

import { useEffect, useState } from 'react';

import EmptyItem from 'components/feature/EmptyItem';
import Spinner from 'components/ui/Spinner';

import { useInfinityScroll } from 'hooks/useInfinityScroll';
import { getMyFundingItems } from 'services/api/v1/funding';

import { MyFundingItemType } from 'types/funding';

import MyFundingItem from '../MyFundingItem';

import styles from './index.module.scss';

type FundingTabProps = {
  status: 'USABLE' | 'USED';
};

const FundingTab = ({ status }: FundingTabProps) => {
  const [fundingItems, setFundingItems] = useState<MyFundingItemType[]>([]);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['fundingItem', status],
    queryFn: () => getMyFundingItems(status),
  });

  const observingTarget = useInfinityScroll(() => {
    if (data) setPage(data.pageNumber + 1);
  }, hasNext);

  useEffect(() => {
    refetch();
  }, [page]);

  useEffect(() => {
    if (data) {
      setFundingItems((prev) => [...prev, ...data.items]);
      setHasNext(data.hasNext);
    }
  }, [data]);

  if (!hasNext && fundingItems.length === 0) {
    const emptyType = status === 'USABLE' ? 'funding_usable' : 'funding_used';

    return <EmptyItem type={emptyType} />;
  }

  return (
    <>
      <ul className={styles.list_funding}>
        {fundingItems.map((fundingItem) => (
          <li key={fundingItem.id}>
            <MyFundingItem fundingItem={fundingItem} />
          </li>
        ))}
      </ul>
      {isLoading && <Spinner />}
      {hasNext && <div ref={observingTarget} />}
    </>
  );
};

export default FundingTab;
