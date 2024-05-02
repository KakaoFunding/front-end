import MessageCard from 'components/feature/MessageCard';
import PaymentDetail from 'components/feature/PaymentDetail';
import MainWrapper from 'components/ui/MainWrapper';
import FundingDetail from 'layouts/FundingPayment/FundingDetail';

import { useInput } from 'hooks/useInput';

import styles from './index.module.scss';

const FundingPayment = () => {
  const { value } = useInput('0');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <MainWrapper>
      <form className={styles.wrapper_form} onSubmit={handleSubmit}>
        <div className={styles.area_field}>
          <MessageCard />
          <FundingDetail />
        </div>
        <PaymentDetail totalPrice={Number(value)} />
      </form>
    </MainWrapper>
  );
};

export default FundingPayment;
