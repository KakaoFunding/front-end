import Tabs from 'components/ui/Tabs';

import { Tab } from 'types/tab';

import styles from './index.module.scss';

const userName = '보경';
const FundingHistory = () => {
  const tabs: Tab[] = [
    {
      id: 0,
      name: '내가 등록한 펀딩',
      content: <>내가 등록한 펀딩</>,
    },
    {
      id: 1,
      name: '내가 기여한 펀딩',
      content: <>내가 기여한 펀딩</>,
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
