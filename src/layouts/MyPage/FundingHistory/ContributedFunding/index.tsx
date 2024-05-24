import FilterBar from 'components/ui/FilterBar';

import styles from './index.module.scss';

const ContributedFunding = () => {
  return (
    <section className={styles.area_funding}>
      <FilterBar />
      기여한 펀딩 내역
    </section>
  );
};

export default ContributedFunding;
