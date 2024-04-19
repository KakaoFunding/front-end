import ProfileImg from 'components/feature/ProfileImg';
import RankBadge from 'components/feature/RankBadge';

import styles from './index.module.scss';

type RankerProps = {
  rank: number;
  key: number;
  name: string;
  percent: string;
};

const Ranker = ({ rank, name, percent, key }: RankerProps) => {
  return (
    <li className={styles.item_ranker} key={key}>
      <ProfileImg size="l" />
      <RankBadge rank={rank} />
      <p className={styles.txt_default}>{name}</p>
      <p className={styles.txt_default}>
        <span className={styles.txt_point}>{percent}</span> 기여
      </p>
    </li>
  );
};

export default Ranker;
