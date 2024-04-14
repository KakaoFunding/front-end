import { Link } from 'react-router-dom';

import Header from 'layouts/App/Header';

import ErrorImage from 'assets/notFound.png';

import styles from './index.module.scss';

const NotFound = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <article className={styles.area_error}>
          <img src={ErrorImage} alt="error" className={styles.img_error} />
          <strong className={styles.txt_title}>잘못된 접근입니다.</strong>
          <p className={styles.txt_desc}>
            찾으시는 페이지가 존재하지 않습니다.
          </p>
          <Link to="/" className={styles.btn_home}>
            홈으로 이동
          </Link>
        </article>
      </main>
    </>
  );
};

export default NotFound;
