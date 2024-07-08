import { useQuery } from '@tanstack/react-query';

import { Link } from 'react-router-dom';

import Spinner from 'components/ui/Spinner';

import { useUserExists } from 'hooks/useUserExists';
import { getCartCount } from 'services/api/v1/cart';

import SocialKakaoLogin from '../SocialKakaoLogin';

import styles from './index.module.scss';

const BundleUtil = () => {
  const isLoggedIn = useUserExists();
  const { data: cartCount, isLoading } = useQuery({
    queryKey: ['cartCount'],
    queryFn: () => getCartCount(),
    enabled: isLoggedIn,
  });

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
        {isLoggedIn && !isLoading && cartCount! > 0 && (
          <span className={styles.num_cart}>{cartCount}</span>
        )}
        {isLoading && <Spinner />}
      </Link>
      <div className={styles.wrapper_login}>
        <SocialKakaoLogin />
      </div>
    </section>
  );
};

export default BundleUtil;
