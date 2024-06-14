import { useQuery } from '@tanstack/react-query';

import EmptyItem from 'components/feature/EmptyItem';
import Spinner from 'components/ui/Spinner';
import FundingItem from 'layouts/MyPage/Funding/FundingItem';
import FundingProgress from 'layouts/MyPage/Funding/FundingProgress';

import { useUserStore } from 'store/useUserStore';

import { getMyFundingItem } from 'services/api/v1/funding';

import styles from './index.module.scss';

const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};

const Funding = () => {
  const { name } = useUserStore();
  const { data, isFetched, isLoading } = useQuery({
    queryKey: ['myFundingItem'],
    queryFn: () => getMyFundingItem(),
  });

  return (
    <>
      <div className={styles.title}>{`${name}님의 \n펀딩아이템`}</div>
      {isFetched && data && !isEmptyObject(data) ? (
        <>
          <FundingItem
            fundingId={data.fundingId}
            productPhoto={data.productPhoto}
            goalAmount={data.goalAmount}
            productName={data.productName}
            productId={data.productId}
            brandName={data.brandName}
            brandPhoto={data.brandPhoto}
            brandId={data.brandId}
          />
          <FundingProgress
            remainAmount={data.remainAmount}
            goalAmount={data.goalAmount}
            accumulateAmount={data.accumulateAmount}
          />
        </>
      ) : (
        <EmptyItem type="funding" />
      )}
      {isLoading && <Spinner />}
    </>
  );
};

export default Funding;
