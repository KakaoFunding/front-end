import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MessageCard from 'components/feature/MessageCard';
import PaymentDetail from 'components/feature/PaymentDetail';
import MainWrapper from 'components/ui/MainWrapper';
import FundingDetail from 'layouts/FundingPayment/FundingDetail';

import { useAxios } from 'hooks/useAxios';

import { ResponseFundingReady, ResponseFundingSuccess } from 'types/payment';

import styles from './index.module.scss';

const FundingPayment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { fundingId }: { fundingId: number } = state;

  const [fundingAmount, setFundingAmount] = useState<number>(0);
  const [pgToken, setPgToken] = useState<string>('');

  // 결제 준비용 API
  const { data: readyData, sendRequest: sendReady } =
    useAxios<ResponseFundingReady>({
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
    await sendReady();
  };

  // handle ready response
  useEffect(() => {
    if (!readyData) return;

    const { redirectUrl } = readyData;

    if (redirectUrl.includes('/payments/success')) {
      const url = new URL(redirectUrl);
      const urlParams = new URLSearchParams(url.search);
      setPgToken(urlParams.get('pg_token') as string);
    } else if (redirectUrl.includes('/payments/fail')) {
      navigate('/payment/fail');
    } else if (redirectUrl.includes('/payments/cancel')) {
      navigate('/payment/cancel');
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

    navigate('/funding/complete', { state: approveData });
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
