import { useQuery } from '@tanstack/react-query';

import Spinner from 'components/ui/Spinner';
import Tabs from 'components/ui/Tabs';
import FundingTab from 'layouts/MyPage/FundingBox/FundingTab';

import { getMyFundingItems } from 'services/api/v1/funding';

import { Tab } from 'types/tab';

import styles from './index.module.scss';

const FundingBox = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['fundingItem'],
    queryFn: () => getMyFundingItems(),
  });

  const tabs: Tab[] = [
    {
      id: 0,
      name: `사용 가능한 펀딩아이템`,
      content: <FundingTab status="USABLE" />,
    },
    {
      id: 1,
      name: `사용 완료한 펀딩아이템 `,
      content: <FundingTab status="USED" />,
    },
  ];

  return (
    <div>
      {isLoading && <Spinner />}
      {data && (
        <>
          <h1 className={styles.txt_title}>
            총 {`${data.totalElements}`}개의
            <br />
            펀딩을 달성했습니다. 🎉
          </h1>
          <Tabs initialTabId={0} mode="product_list" tabs={tabs} />
        </>
      )}
    </div>
  );
};

export default FundingBox;
