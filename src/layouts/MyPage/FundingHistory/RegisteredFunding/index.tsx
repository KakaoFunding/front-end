import FilterBar from 'components/ui/FilterBar';

import styles from './index.module.scss';

const RegisteredFunding = () => {
  return (
    <section className={styles.area_funding}>
      <FilterBar />
      등록한 펀딩 내역
    </section>
  );
};

export default RegisteredFunding;
