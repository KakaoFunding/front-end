import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useInput } from 'hooks/useInput';

import styles from './index.module.scss';

const SearchBox = () => {
  const { value, setValue, handleInput, handleClear } = useInput('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const keyword = params.get('keyword');
    setValue(keyword ?? '');
  }, [location.search]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search/result?keyword=${value}`);
  };

  return (
    <div className={styles.area_search}>
      <div className={styles.wrapper_input}>
        <form role="search" onSubmit={handleSubmit}>
          <input
            type="search"
            aria-label="검색어 입력"
            placeholder="검색어를 입력해주세요."
            autoComplete="off"
            value={value}
            onChange={handleInput}
            className={styles.input}
          />
          {value && (
            <div className={styles.wrapper_btn}>
              <button
                type="button"
                onClick={handleClear}
                className={styles.btn_clear}
              >
                <span className={styles.ico_clear}>검색어 지우기</span>
              </button>
              <button type="submit" className={styles.btn_submit}>
                확인
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
