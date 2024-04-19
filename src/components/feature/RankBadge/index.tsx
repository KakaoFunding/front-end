import clsx from 'clsx';

import styles from './index.module.scss';

type RankBadgeProps = {
  rank: number;
};

const TOP_RANK_THRESHOLD = 3;

const RankBadge = ({ rank }: RankBadgeProps) => {
  return (
    <span
      className={clsx(styles.wrapper_rank, {
        [styles.on]: rank <= TOP_RANK_THRESHOLD,
      })}
    >
      {rank}
    </span>
  );
};

export default RankBadge;
