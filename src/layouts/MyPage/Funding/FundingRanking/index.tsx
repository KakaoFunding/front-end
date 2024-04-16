import MoreButton from 'components/ui/Button/MoreButton';

import { formatNumberToPercent } from 'utils/format';

import Ranker from './Ranker';

import styles from './index.module.scss';

const data = {
  productPrice: 987000,
  ranker: [
    {
      id: 1,
      name: '철수',
      amount: 200000,
    },
    {
      id: 2,
      name: '짱구',
      amount: 100000,
    },
    {
      id: 3,
      name: '유리',
      amount: 50000,
    },
    {
      id: 4,
      name: '맹구',
      amount: 10000,
    },
    {
      id: 5,
      name: '훈이',
      amount: 5000,
    },
    {
      id: 1,
      name: '철수',
      amount: 200000,
    },
    {
      id: 2,
      name: '짱구',
      amount: 100000,
    },
    {
      id: 3,
      name: '유리',
      amount: 50000,
    },
    {
      id: 4,
      name: '맹구',
      amount: 10000,
    },
    {
      id: 5,
      name: '훈이',
      amount: 5000,
    },
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
