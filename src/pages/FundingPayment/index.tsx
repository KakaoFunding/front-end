import { useState } from 'react';

import MessageCard from 'components/feature/MessageCard';
import PaymentDetail from 'components/feature/PaymentDetail';
import MainWrapper from 'components/ui/MainWrapper';
import FundingDetail from 'layouts/FundingPayment/FundingDetail';

import styles from './index.module.scss';

const data = {
  fundingId: 1,
};

const FundingPayment = () => {
  const [fundingAmount, setFundingAmount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <MainWrapper>
      <form className={styles.wrapper_form} onSubmit={handleSubmit}>
        <div className={styles.area_field}>
          <MessageCard />
          <FundingDetail
            fundingId={data.fundingId}
            setFundingAmount={setFundingAmount}
          />
        </div>
        <PaymentDetail totalPrice={fundingAmount} />
      </form>
    </MainWrapper>
  );
};

export default FundingPayment;
