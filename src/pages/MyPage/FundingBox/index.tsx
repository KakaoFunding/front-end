import Tabs from 'components/ui/Tabs';
import AvailableFundingTab from 'layouts/MyPage/FundingBox/AvailableFundingTab';
import UnavailableFundingTab from 'layouts/MyPage/FundingBox/UnavailableFundingTab';

import { Tab } from 'types/tab';

import styles from './index.module.scss';

const FundingBox = () => {
  const tabs: Tab[] = [
    {
      id: 0,
      name: `${'n'}개의 사용 가능한 펀딩아이템`,
      content: <AvailableFundingTab />,
    },
    {
      id: 1,
      name: `사용 완료한 펀딩아이템 ${'n'} `,
      content: <UnavailableFundingTab />,
    },
  ];

  return (
    <>
      <h1 className={styles.txt_title}>
        총 n개의
        <br />
        펀딩을 달성했습니다. 🎉
      </h1>
      <Tabs initialTabId={0} mode="product_list" tabs={tabs} />
    </>
  );
};

export default FundingBox;
