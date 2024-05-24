import Tabs from 'components/ui/Tabs';
import ContributedFunding from 'layouts/MyPage/FundingHistory/ContributedFunding';
import RegisteredFunding from 'layouts/MyPage/FundingHistory/RegisteredFunding';

import { Tab } from 'types/tab';

import styles from './index.module.scss';

const userName = '보경';
const FundingHistory = () => {
  const tabs: Tab[] = [
    {
      id: 0,
      name: '내가 등록한 펀딩',
      content: <RegisteredFunding />,
    },
    {
      id: 1,
      name: '내가 기여한 펀딩',
      content: <ContributedFunding />,
    },
  ];

  return (
    <>
      <div className={styles.title}>{`${userName}님의 \n펀딩내역`}</div>
      <Tabs initialTabId={0} mode="funding_history" tabs={tabs} />
    </>
  );
};

export default FundingHistory;
