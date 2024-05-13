import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MessageCard from 'components/feature/MessageCard';
import PaymentDetail from 'components/feature/PaymentDetail';
import MainWrapper from 'components/ui/MainWrapper';
import FundingDetail from 'layouts/FundingPayment/FundingDetail';

import { useAxios } from 'hooks/useAxios';

import { ResponseFundingReady, ResponseFundingSuccess } from 'types/payment';

import styles from './index.module.scss';

const FundingPayment = () => {
  const { state } = useLocation();
  const { fundingId }: { fundingId: number } = state;

  const [fundingAmount, setFundingAmount] = useState<number>(0);

  const { data: readyData, sendRequest: sendReady } =
    useAxios<ResponseFundingReady>({
      method: 'post',
      url: '/funding/payments/ready',
      data: {
        fundingId,
        amount: fundingAmount,
      },
    });

  const { data: approveData, sendRequest: sendApprove } =
    useAxios<ResponseFundingSuccess>({
      method: 'post',
      url: '/funding/payments/success',
      data: {
        tid: readyData?.tid,
        pgToken: '47aa61cf839cac18f669',
        orderNumber: readyData?.orderNumber,
      },
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendReady();
  };

  // handle ready
  useEffect(() => {
    if (!readyData) return;

    console.log(readyData);
    sendApprove();
  }, [readyData]);

  // handle success
  useEffect(() => {
    if (!approveData) return;

    console.log(approveData);
    // approveData 들고 결제완료 페이지로 이동
  }, [approveData]);

  return (
    <MainWrapper>
      <form className={styles.wrapper_form} onSubmit={handleSubmit}>
        <div className={styles.area_field}>
          <MessageCard />
          <FundingDetail
            fundingId={fundingId}
            setFundingAmount={setFundingAmount}
          />
        </div>
        <PaymentDetail totalPrice={fundingAmount} />
      </form>
    </MainWrapper>
  );
};

export default FundingPayment;
