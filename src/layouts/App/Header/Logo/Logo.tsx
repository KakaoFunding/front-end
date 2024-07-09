import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to="/home">
      <h1 className={styles.txt_logo}>펀딩하기</h1>
    </Link>
  );
};

export default Logo;
