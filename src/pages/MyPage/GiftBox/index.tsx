import Tabs from 'components/ui/Tabs';
import UnavailableGiftTab from 'layouts/MyPage/GiftBox/UnavailableGiftTab';

import { Tab } from 'types/tab';

const GiftBox = () => {
  const tabs: Tab[] = [
    {
      id: 0,
      name: '사용가능',
      content: <p>사용가능</p>,
    },
    {
      id: 1,
      name: '사용완료',
      content: <UnavailableGiftTab />,
    },
  ];

  return (
    <>
      <h1>사용가능한 선물이 n개 남아있어요.</h1>
      <Tabs initialTabId={0} mode="product_list" tabs={tabs} />
    </>
  );
};

export default GiftBox;
