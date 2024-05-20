import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import MessageCard from 'components/feature/MessageCard';
import PaymentDetail from 'components/feature/PaymentDetail';
import MainWrapper from 'components/ui/MainWrapper';
import GiftDetail from 'layouts/GiftPayment/GiftDetail';

import { useAxios } from 'hooks/useAxios';
import { getSessionStorageItem } from 'services/api/v1/sessionStorage';

import { PaginationResponse } from 'types/PaginationResponse';
import {
  GiftPaymentCard,
  RequestOrderPreview,
  ResponsePaymentPreview,
  ResponsePaymentReady,
} from 'types/payment';

import styles from './index.module.scss';

const GiftPayment = () => {
  const { state } = useLocation();
  const { orderInfos }: { orderInfos: RequestOrderPreview } = state;

  const navigate = useNavigate();
  const [pgToken, setPgToken] = useState<string>('');

  const providerId = '333'; // TODO: 카카오 피커 응답의 id를 적어야 함
  const socialAccessToken = getSessionStorageItem('socialToken');

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

  // 선물 결제 준비 API
  const { data: readyData, sendRequest: sendReady } =
    useAxios<ResponsePaymentReady>({
      method: 'post',
      url: '/payments/ready',
      data: {
        receiver: { providerId, socialAccessToken },
        items: orderData?.items.map(({ product, quantity }, idx) => ({
          productId: product.productId,
          totalAmount: product.price * quantity,
          discountAmount: 0,
          quantity,
          optionDetailIds: orderInfos[idx].options.map((opt) => opt.detailId),
        })),
      },
    });

  useEffect(() => {
    sendOrderRequest();
    sendPaymentRequest();
  }, []);

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
      navigate('/payment/cancel', {
        state: { paymentType: 'gift', ...state },
      });
    }
  }, [readyData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendReady();
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
