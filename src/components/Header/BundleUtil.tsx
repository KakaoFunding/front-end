import styles from './index.module.scss';

const BundleUtil = () => {
  return (
    <section className={styles.area_bundleutil}>
      <a className={styles.link_search} href="/search">
        <div className={styles.ico_container} aria-hidden="true">
          <span className={styles.ico_search}>검색</span>
        </div>
      </a>
      <a className={styles.link_cart} href="/cart">
        <div className={styles.ico_container} aria-hidden="true">
          <span className={styles.ico_cart}>장바구니</span>
        </div>
      </a>
      <div className={styles.login_container}>
        <a className={styles.link_login} href="/login">
          로그인
        </a>
      </div>
    </section>
  );
};

export default BundleUtil;
