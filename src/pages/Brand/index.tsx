import { useParams } from 'react-router-dom';

import MainWrapper from 'components/ui/MainWrapper';
import Banner from 'layouts/Brand/Banner';

const Brand = () => {
  const { brandId: brandIdParam } = useParams() as { brandId: string };
  const brandId = Number(brandIdParam); // 넘버인지 체킹한 다음 변환할 것

  return (
    <>
      <Banner brandId={brandId} />
      <MainWrapper>Brand</MainWrapper>
    </>
  );
};

export default Brand;
