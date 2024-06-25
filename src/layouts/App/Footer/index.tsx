import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.area_footer}>
      <div className={styles.wrapper_footer}>
        <span className={styles.logo}>펀딩하기</span>
        <span className={styles.txt_desc}>
          본 서비스는{' '}
          <a href="https://gift.kakao.com/" className={styles.txt_link}>
            카카오톡 선물하기
          </a>
          를 모방하여 제작한 것으로, 실제로 상품을 판매하는 서비스가 아님을
          밝힙니다.
        </span>
        <div className={styles.wrapper_link}>
          <a href="https://github.com/KakaoFunding" className={styles.txt_link}>
            GitHub 바로가기
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
