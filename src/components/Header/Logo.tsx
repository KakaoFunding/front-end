import styles from './index.module.scss';

const Logo = () => {
  return (
    <a className={styles.header_link} href="/home">
      <h1 className={styles.header_title}>펀딩하기</h1>
    </a>
  );
};

export default Logo;
