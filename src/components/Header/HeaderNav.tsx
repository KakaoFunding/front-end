import styles from './index.module.scss';

const HeaderNav = () => {
  return (
    <nav className={styles.area_nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list_item}>
          <a className={styles.nav_link} href="/home">
            홈
          </a>
        </li>
        <li className={styles.nav_list_item}>
          <a className={styles.nav_link} href="/giftbox/wish">
            위시
          </a>
        </li>
        <li className={styles.nav_list_item}>
          <a className={styles.nav_link} href="/giftbox/funding">
            펀딩
          </a>
        </li>
        <li className={styles.nav_list_item}>
          <a className={styles.nav_link} href="/giftbox">
            선물함
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
