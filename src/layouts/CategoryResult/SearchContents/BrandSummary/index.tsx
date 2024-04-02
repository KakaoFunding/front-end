import { Link } from 'react-router-dom';

import SearchResultTitle from 'components/ui/SearchResultTitle';
import Spinner from 'components/ui/Spinner';

import { Brand } from 'types/Brand';

import styles from './index.module.scss';

type BrandSummaryProps = {
  tabName: string;
  brands: Brand[];
  isLoading: boolean;
};

const BrandSummary = ({ tabName, brands, isLoading }: BrandSummaryProps) => {
  return (
    <section>
      <SearchResultTitle tabName={tabName}>
        <div>전체보기</div>
      </SearchResultTitle>

      {isLoading && <Spinner />}
      <ul className={styles.list_brand}>
        {brands.map((brand) => (
          <li key={brand.brandId} className={styles.item_brand}>
            <Link to={`/brand/${brand.brandId}`}>
              <img
                src={brand.iconPhoto}
                alt={brand.name}
                className={styles.img_logo}
              />
              <span className={styles.txt_name}>{brand.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BrandSummary;
