import styles from './index.module.scss';

const Logo = () => {
  return (
    <a href="/home">
      <h1 className={styles.txt_logo}>펀딩하기</h1>
    </a>
  );
};

export default Logo;
