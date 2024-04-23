import styles from './index.module.scss';

const HeaderNav = () => {
  return (
    <nav className={styles.wrapper_nav}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <a className={styles.link} href="/home">
            홈
          </a>
        </li>
        <li className={styles.list_item}>
          <a className={styles.link} href="/mypage/wish">
            위시
          </a>
        </li>
        <li className={styles.list_item}>
          <a className={styles.link} href="/mypage/funding">
            펀딩
          </a>
        </li>
        <li className={styles.list_item}>
          <a className={styles.link} href="/mypage/giftbox">
            선물함
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
