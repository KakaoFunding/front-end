import Tabs from 'components/ui/Tabs';

import {
  ProductDescriptionResponse,
  ProductDetailResponse,
} from 'types/product';
import { Tab } from 'types/tab';

import DetailInfo from './DetailInfo';
import GiftReview from './GiftReview';
import ProductDescription from './ProductDescription';

import styles from './index.module.scss';

const DetailContents = ({
  productDescription,
  productDetail,
}: {
  productDescription: ProductDescriptionResponse;
  productDetail: ProductDetailResponse;
}) => {
  const { descriptionPhotos } = productDescription;
  const { origin, manufacturer, tel } = productDetail;

  const tabProps: Tab[] = [
    {
      id: 0,
      name: '상품설명',
      content: <ProductDescription descriptionPhotos={descriptionPhotos} />,
    },
    {
      id: 1,
      name: '선물후기',
      content: <GiftReview />,
    },
    {
      id: 2,
      name: '상세정보',
      content: (
        <DetailInfo origin={origin} manufacturer={manufacturer} tel={tel} />
      ),
    },
  ];

  return (
    <section className={styles.area_detail_contents}>
      <Tabs initialTabId={0} tabs={tabProps} mode="product_detail" />
    </section>
  );
};

export default DetailContents;
