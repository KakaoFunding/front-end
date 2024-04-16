import { Navigate, useParams } from 'react-router-dom';

import MainWrapper from 'components/ui/MainWrapper';
import FundingDetail from 'layouts/Bill/FundingDetail';
import GiftDetail from 'layouts/Bill/GiftDetail';
import MessageCard from 'layouts/Bill/MessageCard';
import PaymentDetail from 'layouts/Bill/PaymentDetail';

import styles from './index.module.scss';

const Bill = () => {
  const { type } = useParams();

  if (type !== 'gift' && type !== 'funding') {
    return <Navigate to="/NotFound" />;
  }

  return (
    <MainWrapper>
      <form className={styles.wrapper_form}>
        <div className={styles.area_field}>
          <MessageCard />
          {type === 'gift' && <GiftDetail />}
          {type === 'funding' && <FundingDetail />}
        </div>
        <PaymentDetail />
      </form>
    </MainWrapper>
  );
};

export default Bill;
