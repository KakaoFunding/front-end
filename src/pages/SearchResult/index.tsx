import SearchBox from 'components/feature/SearchBox';
import MainWrapper from 'components/ui/MainWrapper';
import SearchContents from 'layouts/SearchResult/SearchContents';

import styles from './index.module.scss';

const SearchResult = () => {
  return (
    <>
      <SearchBox />
      <div className={styles.divider} />
      <MainWrapper>
        <SearchContents />
      </MainWrapper>
    </>
  );
};

export default SearchResult;
