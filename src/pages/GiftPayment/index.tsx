import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import MessageCard from 'components/feature/MessageCard';
import PaymentDetail from 'components/feature/PaymentDetail';
import MainWrapper from 'components/ui/MainWrapper';
import GiftDetail from 'layouts/GiftPayment/GiftDetail';

import { useAxios } from 'hooks/useAxios';

import { PaginationResponse } from 'types/PaginationResponse';
import {
  GiftPaymentCard,
  RequestOrderPreview,
  ResponsePaymentPreview,
} from 'types/payment';

import styles from './index.module.scss';

const GiftPayment = () => {
  const { state } = useLocation();
  const { orderInfos }: { orderInfos: RequestOrderPreview } = state;

  // 구매할 상품 조회 API
  const { data: orderData, sendRequest: sendOrderRequest } = useAxios<
    PaginationResponse<GiftPaymentCard>
  >({
    method: 'post',
    url: '/orders/preview',
    data: orderInfos,
  });

  // 예상 결제 정보 조회 API
  const { data: paymentData, sendRequest: sendPaymentRequest } =
    useAxios<ResponsePaymentPreview>({
      method: 'post',
      url: '/payments/preview',
      data: orderInfos.filter((order) => ({
        productId: order.productId,
        quantity: order.quantity,
      })),
    });

  useEffect(() => {
    sendOrderRequest();
    sendPaymentRequest();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <MainWrapper>
      <form className={styles.wrapper_form} onSubmit={handleSubmit}>
        <div className={styles.area_field}>
          <MessageCard />
          <GiftDetail items={orderData?.items ?? []} />
        </div>
        <PaymentDetail totalPrice={paymentData?.totalProductAmount ?? 0} />
      </form>
    </MainWrapper>
  );
};

export default GiftPayment;
