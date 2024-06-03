import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const usePaymentWindow = () => {
  const navigate = useNavigate();
  const [pgToken, setPgToken] = useState<string>('');

  // 결제 모듈 팝업창 열기
  const openPaymentWindow = (
    redirectUrl: string,
    width = 520,
    height = 700,
  ) => {
    const left = window.outerWidth / 2 - width / 2;
    const top = window.outerHeight / 2 - height / 2;
    const features = [
      `width=${width}`,
      `height=${height}`,
      `left=${left}`,
      `top=${top}`,
    ];

    const paymentWindow = window.open(
      redirectUrl,
      '_blank',
      features.join(','),
    );
    return paymentWindow;
  };

  // 결제 모듈 팝업창의 결제 상태(성공/실패/취소) 체크
  const checkPaymentStatus = (
    paymentWindow: Window,
    onWindowClosed: () => void,
    paymentType: 'gift' | 'funding',
    state: object,
  ) => {
    // polling 방식으로 결제창 url 체크
    const checkPaymentUrl = setInterval(() => {
      if (paymentWindow.closed) {
        onWindowClosed();
        clearInterval(checkPaymentUrl);
        return;
      }

      const paymentUrl = paymentWindow.location.href;

      if (paymentUrl.includes('/payments')) {
        paymentWindow.close();

        if (paymentUrl.includes('/success')) {
          const url = new URL(paymentUrl);
          const urlParams = new URLSearchParams(url.search);
          setPgToken(urlParams.get('pg_token')!);
        } else if (paymentUrl.includes('/fail')) {
          navigate('/payment/error', {
            state: { errorType: 'fail', paymentType, ...state },
          });
        } else if (paymentUrl.includes('/cancel')) {
          navigate('/payment/error', {
            state: { errorType: 'cancel', paymentType, ...state },
          });
        }
      }
    }, 1000);
  };

  return { pgToken, openPaymentWindow, checkPaymentStatus };
};
