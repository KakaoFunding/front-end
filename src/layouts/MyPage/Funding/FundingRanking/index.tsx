import MoreButton from 'components/ui/Button/MoreButton';

import { formatNumberToPercent } from 'utils/format';

import Ranker from './Ranker';

import styles from './index.module.scss';

const data = {
  productPrice: 987000,
  ranker: [
    { rank: 1, id: 1, name: '철수', amount: 200000 },
    { rank: 2, id: 2, name: '신짱구', amount: 100000 },
    { rank: 3, id: 3, name: '유리', amount: 50000 },
    { rank: 4, id: 4, name: '맹구', amount: 10000 },
    { rank: 5, id: 5, name: '훈이', amount: 5000 },
    { rank: 6, id: 6, name: '신짱아', amount: 1000 },
    { rank: 7, id: 7, name: '흰둥이', amount: 500 },
  ],
};

const FundingRanking = () => {
  const handleClick = () => {
    // 더보기로직
  };
  return (
    <section className={styles.area_ranking}>
      <strong className={styles.txt_title}>펀딩 랭킹</strong>
      <ul className={styles.list_ranker}>
        {data.ranker.map((ranker) => (
          <Ranker
            rank={ranker.rank}
            name={ranker.name}
            percent={formatNumberToPercent(ranker.amount, data.productPrice)}
            key={ranker.id}
          />
        ))}
      </ul>
      <MoreButton onClick={handleClick} size="small" />
    </section>
  );
};

export default FundingRanking;
