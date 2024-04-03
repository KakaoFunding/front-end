import SearchBox from 'components/feature/SearchBox';
import MainWrapper from 'components/ui/MainWrapper';

import styles from './index.module.scss';

const Search = () => {
  return (
    <div className={styles.area_search}>
      <SearchBox />
      <MainWrapper>
        <div>추천 검색어</div>
      </MainWrapper>
    </div>
  );
};

export default Search;
