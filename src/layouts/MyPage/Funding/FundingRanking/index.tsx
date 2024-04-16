import MoreButton from 'components/ui/Button/MoreButton';

import styles from './index.module.scss';

const FundingRanking = () => {
  const handleClick = () => {
    // 더보기로직
  };
  return (
    <section className={styles.area_ranking}>
      <strong className={styles.txt_title}>펀딩 랭킹</strong>
      <MoreButton onClick={handleClick} size="small" />
    </section>
  );
};

export default FundingRanking;
