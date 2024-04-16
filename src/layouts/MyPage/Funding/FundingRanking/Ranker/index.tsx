import ProfileImg from 'components/feature/ProfileImg';

import styles from './index.module.scss';

type RankerProps = {
  key: number;
  name: string;
  percent: string;
};

const Ranker = ({ name, percent, key }: RankerProps) => {
  return (
    <li className={styles.item_ranker} key={key}>
      <ProfileImg size="l" />
      <p className={styles.txt_default}>{name}</p>
      <p className={styles.txt_default}>
        <span className={styles.txt_point}>{percent}</span>기여
      </p>
    </li>
  );
};

export default Ranker;
