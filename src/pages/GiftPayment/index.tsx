import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import MessageCard from 'components/feature/MessageCard';
import PaymentDetail from 'components/feature/PaymentDetail';
import MainWrapper from 'components/ui/MainWrapper';
import GiftDetail from 'layouts/GiftPayment/GiftDetail';

import { useAxios } from 'hooks/useAxios';

import { ResponseExpectedPaymentAmount } from 'types/payment';

import styles from './index.module.scss';

const GiftPayment = () => {
  const { state } = useLocation();
  const { productId, name, totalAmount, discountAmount, stockQuantity } = state;
  const { data, sendRequest } = useAxios<ResponseExpectedPaymentAmount>({
    method: 'post',
    url: '/payments/preview',
    data: [
      // 임시 데이터
      {
        productId: 386515,
        quantity: 1,
      },
      {
        productId: 2274,
        quantity: 3,
      },
    ],
  });

  useEffect(() => {
    sendRequest();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <MainWrapper>
      <form className={styles.wrapper_form} onSubmit={handleSubmit}>
        <div className={styles.area_field}>
          <MessageCard />
          <GiftDetail />
        </div>
        <PaymentDetail totalPrice={data?.totalProductAmount ?? 0} />
      </form>
    </MainWrapper>
  );
};

export default GiftPayment;
