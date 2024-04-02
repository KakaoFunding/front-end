import styles from './index.module.scss';

const SearchBox = () => {
  return (
    <div className={styles.area_search}>
      <div className={styles.wrapper_input}>
        <form role="search">
          <input
            type="search"
            aria-label="검색어 입력"
            placeholder="검색어를 입력해주세요."
            autoComplete="off"
            className={styles.input}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
