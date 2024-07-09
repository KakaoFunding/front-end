import { useParams } from 'react-router-dom';

import MainWrapper from 'components/ui/MainWrapper';
import Banner from 'layouts/Brand/Banner';
import ProductList from 'layouts/Brand/ProductList';

const Brand = () => {
  const { brandId: brandIdParam } = useParams() as { brandId: string };
  const brandId = Number(brandIdParam);

  return (
    <>
      <Banner brandId={brandId} />
      <MainWrapper>
        <ProductList brandId={brandId} />
      </MainWrapper>
    </>
  );
};

export default Brand;
