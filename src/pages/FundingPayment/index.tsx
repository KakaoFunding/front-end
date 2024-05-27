import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MessageCard from 'components/feature/MessageCard';
import PaymentDetail from 'components/feature/PaymentDetail';
import MainWrapper from 'components/ui/MainWrapper';
import Spinner from 'components/ui/Spinner';
import FundingDetail from 'layouts/FundingPayment/FundingDetail';

import { useAxios } from 'hooks/useAxios';
import { usePaymentWindow } from 'hooks/usePaymentWindow';

import { ResponsePaymentReady, ResponseFundingSuccess } from 'types/payment';

import styles from './index.module.scss';

const FundingPayment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { fundingId }: { fundingId: number } = state;

  const [fundingAmount, setFundingAmount] = useState<number>(0);
  const [isPaying, setIsPaying] = useState<boolean>(false);

  const { pgToken, openPaymentWindow, checkPaymentStatus } = usePaymentWindow();

  // 결제 준비용 API
  const { data: readyData, sendRequest: sendReady } =
    useAxios<ResponsePaymentReady>({
      method: 'post',
      url: '/funding/payments/ready',
      data: {
        fundingId,
        amount: fundingAmount,
      },
    });

  // 결제 준비 성공 시 결제 승인용 API
  const { data: approveData, sendRequest: sendApprove } =
    useAxios<ResponseFundingSuccess>({
      method: 'post',
      url: '/funding/payments/success',
      data: {
        tid: readyData?.tid,
        pgToken,
        orderNumber: readyData?.orderNumber,
      },
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPaying(true);
    await sendReady();
  };

  // handle ready response
  useEffect(() => {
    if (!readyData) return;

    const { redirectUrl } = readyData;
    const paymentWindow = openPaymentWindow(redirectUrl);

    if (paymentWindow) {
      const onWindowClosed = () => setIsPaying(false);
      checkPaymentStatus(paymentWindow, onWindowClosed, 'funding', state);
    }
  }, [readyData]);

  // if pgToken is set, then send payment approve request
  useEffect(() => {
    if (pgToken === '') return;

    sendApprove();
  }, [pgToken]);

  // handle approve success response
  useEffect(() => {
    if (!approveData) return;

    setIsPaying(false);
    navigate('/funding/complete', { state: approveData });
  }, [approveData]);

  return (
    <MainWrapper>
      {isPaying && <Spinner />}
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
