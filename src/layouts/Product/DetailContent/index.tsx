import Tabs from 'components/ui/Tabs';

import { Tab } from 'types/tab';

import DetailInfo from './DetailInfo';
import GiftReview from './GiftReview';
import ProductDescription from './ProductDescription';

import styles from './index.module.scss';

const tabProps: Tab[] = [
  {
    id: 0,
    name: '상품설명',
    content: <ProductDescription />,
  },
  {
    id: 1,
    name: '선물후기',
    content: <GiftReview />,
  },
  {
    id: 2,
    name: '상세정보',
    content: <DetailInfo />,
  },
];

const DetailContents = () => {
  return (
    <section className={styles.area_detail_contents}>
      <Tabs initialTabId={0} tabs={tabProps} mode="product_detail" />
    </section>
  );
};

export default DetailContents;
