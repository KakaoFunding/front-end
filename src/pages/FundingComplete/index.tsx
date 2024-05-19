import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from 'components/ui/Button';
import MainWrapper from 'components/ui/MainWrapper';
import PaymentReceiver from 'components/ui/PaymentReceiver';

import { formatNumberWithComma } from 'utils/format';

import { ResponseFundingSuccess } from 'types/payment';

import styles from './index.module.scss';

const FundingComplete = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const paymentApproveData: ResponseFundingSuccess = state;
  const { receiver, product, attributeAmount } = paymentApproveData;

  const handleClickFundingHistory = () => {
    navigate('/mypage/fundingHistory');
  };

  const handleClickMyFunding = () => {
    navigate('/mypage/funding');
  };

  return (
    <MainWrapper>
      <section className={styles.wrapper_content}>
        <PaymentReceiver receivers={[receiver]} paymentType="funding" />

        <div className={styles.area_item}>
          <div className={styles.txt_title}>기여한 펀딩</div>
          <div className={styles.wrapper_item}>
            <div className={styles.wrapper_thumb}>
              <img src={product.photo} alt={product.name} />
            </div>
            <div className={styles.wrapper_info}>
              <div className={styles.txt_brand}>{product.brandName}</div>
              <div className={styles.txt_name}>{product.name}</div>
              <div>
                기여금액 :{' '}
                <strong className={styles.txt_amount}>
                  {formatNumberWithComma(attributeAmount)}
                </strong>
                원
              </div>
            </div>
          </div>
        </div>

        <div className={styles.wrapper_btn}>
          <Button
            color="white"
            className={styles.btn}
            onClick={handleClickFundingHistory}
          >
            펀딩내역
          </Button>
          <Button
            color="yellow"
            className={styles.btn}
            onClick={handleClickMyFunding}
          >
            펀딩함 가기
          </Button>
        </div>
      </section>
    </MainWrapper>
  );
};

export default FundingComplete;
