import SearchBox from 'components/feature/SearchBox';

import styles from './index.module.scss';

const Search = () => {
  return (
    <div className={styles.area_search}>
      <SearchBox />
      <article className={styles.area_info}>
        <div className={styles.img_logo}>춘식이 이미지</div>
        <div className={styles.txt_title}>원하시는 상품을 검색해보세요.</div>
        <p className={styles.txt_desc}>
          받고 싶은 선물, 주고 싶은 선물을 검색할 수 있어요!
        </p>
      </article>
    </div>
  );
};

export default Search;
