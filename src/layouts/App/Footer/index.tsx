import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.area_footer}>
      <div className={styles.wrapper_footer}>
        <span className={styles.logo}>펀딩하기</span>
      </div>
    </footer>
  );
};

export default Footer;
