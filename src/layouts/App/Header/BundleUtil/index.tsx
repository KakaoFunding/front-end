import { Link } from 'react-router-dom';

import SocialKakaoLogin from '../SocialKakaoLogin';

import styles from './index.module.scss';

const BundleUtil = () => {
  return (
    <section className={styles.wrapper_bundle_util}>
      <Link className={styles.link_search} to="/search">
        <div className={styles.wrapper_ico} aria-hidden="true">
          <span className={styles.ico_search}>검색</span>
        </div>
      </Link>
      <Link className={styles.link_cart} to="/cart">
        <div className={styles.wrapper_ico} aria-hidden="true">
          <span className={styles.ico_cart}>장바구니</span>
        </div>
        <span className={styles.num_cart}>2</span>
      </Link>
      <div className={styles.wrapper_login}>
        <SocialKakaoLogin />
      </div>
    </section>
  );
};

export default BundleUtil;
