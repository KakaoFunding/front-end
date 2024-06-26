import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import PaymentDetail from 'components/feature/PaymentDetail';
import MainWrapper from 'components/ui/MainWrapper';
import Spinner from 'components/ui/Spinner';
import GiftDetail from 'layouts/GiftPayment/GiftDetail';

import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';
import { useUserStore } from 'store/useUserStore';

import { useAxios } from 'hooks/useAxios';
import { usePaymentWindow } from 'hooks/usePaymentWindow';
import { getSessionStorageItem } from 'utils/sessionStorage';

import { PaginationResponse } from 'types/PaginationResponse';
import {
  GiftPaymentCard,
  RequestOrderPreview,
  ResponseGiftSuccess,
  ResponsePaymentPreview,
  ResponsePaymentReady,
} from 'types/payment';

import styles from './index.module.scss';

/**
 * 이 페이지는 다음 state를 요구함
 * - orderInfos: 주문할 상품 (type: RequestOrderPreview)
 * - giftFor: 선물 대상 (type: 'me' | 'friends')
 */
const GiftPayment = () => {
  const { state } = useLocation();
  const { orderInfos }: { orderInfos: RequestOrderPreview } = state;
  const { giftFor }: { giftFor: 'me' | 'friends' } = state;

  const navigate = useNavigate();
  const [isPaying, setIsPaying] = useState<boolean>(false);

  const { providerId: myId } = useUserStore();
  const { selectedFriends } = useSelectedFriendsStore();
  const providerId = giftFor === 'me' ? myId : selectedFriends[0].id;
  const socialAccessToken = getSessionStorageItem('socialToken');

  const { pgToken, openPaymentWindow, checkPaymentStatus } = usePaymentWindow();

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

  // 결제 준비 API
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

  // 결제 준비 성공 시 결제 승인 API
  const { data: approveData, sendRequest: sendApprove } =
    useAxios<ResponseGiftSuccess>({
      method: 'post',
      url: '/payments/success',
      data: {
        tid: readyData?.tid,
        pgToken,
        orderNumber: readyData?.orderNumber,
      },
    });

  useEffect(() => {
    sendOrderRequest();
    sendPaymentRequest();
  }, []);

  // 결제 버튼 클릭 핸들러
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
      checkPaymentStatus(paymentWindow, onWindowClosed, 'gift', state);
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
    navigate('/gift/complete', { state: approveData });
  }, [approveData]);

  return (
    <MainWrapper>
      {isPaying && <Spinner />}
      <form className={styles.wrapper_form} onSubmit={handleSubmit}>
        <div className={styles.area_field}>
          <GiftDetail items={orderData?.items ?? []} />
        </div>
        <PaymentDetail totalPrice={paymentData?.totalProductAmount ?? 0} />
      </form>
    </MainWrapper>
  );
};

export default GiftPayment;
