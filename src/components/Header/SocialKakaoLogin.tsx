import styles from './SocialKakaoLogin.module.scss';

const SocialKakaoLogin = () => {
  const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URL;
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_URL;
  };

  return (
    <button className={styles.btn_login} type="button" onClick={handleLogin}>
      로그인
    </button>
  );
};

export default SocialKakaoLogin;
