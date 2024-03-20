import SocialKakaoLogin from '../SocialKakaoLogin';

import styles from './index.module.scss';

const BundleUtil = () => {
  return (
    <section className={styles.wrapper_bundle_util}>
      <a className={styles.link_search} href="/search">
        <div className={styles.wrapper_ico} aria-hidden="true">
          <span className={styles.ico_search}>검색</span>
        </div>
      </a>
      <a className={styles.link_cart} href="/cart">
        <div className={styles.wrapper_ico} aria-hidden="true">
          <span className={styles.ico_cart}>장바구니</span>
        </div>
      </a>
      <div className={styles.wrapper_login}>
        <SocialKakaoLogin />
      </div>
    </section>
  );
};

export default BundleUtil;
