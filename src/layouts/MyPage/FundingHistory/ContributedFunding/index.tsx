import { useQuery } from '@tanstack/react-query';

import { useEffect, useState } from 'react';

import EmptyItem from 'components/feature/EmptyItem';
import FilterBar from 'components/ui/FilterBar';
import Spinner from 'components/ui/Spinner';

import { useDateFilter } from 'hooks/useDateFilter';
import { useInfinityScroll } from 'hooks/useInfinityScroll';
import { getContributedFundingHistory } from 'services/api/v1/fundingHistory';

import { ContributedFundingItemType } from 'types/fundingHistory';

import ContributedFundingItem from './ContributedFundingItem';

import styles from './index.module.scss';

const ContributedFunding = () => {
  const [fundingItems, setFundingItems] = useState<
    ContributedFundingItemType[]
  >([]);
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const { startDate, endDate } = useDateFilter();

  const { data, isLoading, refetch, isFetched } = useQuery({
    queryKey: ['contributedFundingHistory', startDate, endDate],
    queryFn: () => getContributedFundingHistory(startDate, endDate),
  });

  const observingTarget = useInfinityScroll(() => {
    if (data) setPage(data.pageNumber + 1);
  }, hasNext);

  useEffect(() => {
    refetch();
  }, [page]);

  useEffect(() => {
    if (data) {
      setFundingItems(data.items);
      setHasNext(data.hasNext);
    }
  }, [data]);

  return (
    <>
      <section className={styles.area_funding}>
        <FilterBar />
        {isFetched &&
          (fundingItems.length === 0 ? (
            <EmptyItem type="funding_contributed" />
          ) : (
            <ul>
              {fundingItems.map((item) => (
                <li key={item.fundingId}>
                  <ContributedFundingItem item={item} />
                </li>
              ))}
            </ul>
          ))}
      </section>
      {isLoading && <Spinner />}
      {!isLoading && hasNext && <div ref={observingTarget} />}
    </>
  );
};

export default ContributedFunding;
