import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const HeaderNav = () => {
  return (
    <nav className={styles.wrapper_nav}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <Link className={styles.link} to="/home">
            홈
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link className={styles.link} to="/mypage/wish">
            위시
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link className={styles.link} to="/mypage/funding">
            펀딩
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link className={styles.link} to="/mypage/giftbox">
            선물함
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
