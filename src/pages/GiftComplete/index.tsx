import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from 'components/ui/Button';
import MainWrapper from 'components/ui/MainWrapper';
import PaymentReceiver from 'components/ui/PaymentReceiver';

import { formatNumberWithComma } from 'utils/format';

import { ResponseGiftSuccess } from 'types/payment';

import styles from './index.module.scss';

const GiftComplete = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const paymentApproveData: ResponseGiftSuccess = state;
  const { receiver, orders } = paymentApproveData;

  const handleClickOrderHistory = () => {
    navigate('/mypage/orderHistory');
  };

  const handleClickMyGift = () => {
    navigate('/mypage/giftbox');
  };

  return (
    <MainWrapper>
      <section className={styles.wrapper_content}>
        <PaymentReceiver receivers={[receiver]} paymentType="gift" />

        <div className={styles.area_item}>
          <div className={styles.txt_title}>보낸 선물</div>
          <ul>
            {orders.map(({ product, quantity, options }) => (
              <li
                key={`${product.brandName}_${product.name}`}
                className={styles.wrapper_item}
              >
                <div className={styles.wrapper_thumb}>
                  <img src={product.photo} alt={product.name} />
                </div>
                <div className={styles.wrapper_info}>
                  <div className={styles.txt_brand}>{product.brandName}</div>
                  <strong className={styles.txt_name}>{product.name}</strong>
                  {options.length !== 0 && (
                    <div className={styles.wrapper_opt}>
                      <span className={styles.ico_opt}>옵션</span>
                      {options
                        .map((option) => option.optionDetailName)
                        .join(', ')}
                    </div>
                  )}
                  <div className={styles.wrapper_quantity}>
                    수량 :{' '}
                    <span className={styles.txt_quantity}>
                      {formatNumberWithComma(quantity)}
                    </span>
                    개
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.wrapper_btn}>
          <Button
            color="white"
            className={styles.btn}
            onClick={handleClickOrderHistory}
          >
            주문내역
          </Button>
          <Button
            color="yellow"
            className={styles.btn}
            onClick={handleClickMyGift}
          >
            선물함 가기
          </Button>
        </div>
      </section>
    </MainWrapper>
  );
};

export default GiftComplete;
