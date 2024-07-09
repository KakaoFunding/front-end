import { useEffect, useState } from 'react';

import PaymentItem from 'components/feature/PaymentItem';
import Spinner from 'components/ui/Spinner';

import { useAxios } from 'hooks/useAxios';
import { formatNumberWithComma } from 'utils/format';
import { isValidPrice } from 'utils/validate';

import { ResponseFundingPreview } from 'types/payment';

import styles from './index.module.scss';

type FundingDetailProps = {
  fundingId: number;
  setFundingAmount: React.Dispatch<React.SetStateAction<number>>;
};

const FundingDetail = ({ fundingId, setFundingAmount }: FundingDetailProps) => {
  const [input, setInput] = useState<string>('0'); // 입력한 펀딩 기여금을 포맷팅한 값
  const [remainingAmount, setRemainingAmount] = useState<number>(0);

  const { data, sendRequest } = useAxios<ResponseFundingPreview>({
    method: 'post',
    url: '/funding/preview',
    data: {
      fundingId,
    },
  });

  useEffect(() => {
    sendRequest();
  }, []);

  useEffect(() => {
    if (!data) return;
    setRemainingAmount(data.amount.remainAmount);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.split(',').join('');
    if (!isValidPrice(inputValue)) return;

    let newFundingAmount = Number(inputValue);
    const maxFundingAmount = data ? data.amount.remainAmount : 0;
    if (newFundingAmount > maxFundingAmount) {
      newFundingAmount = maxFundingAmount;
    }

    setFundingAmount(newFundingAmount);
    setRemainingAmount(maxFundingAmount - newFundingAmount);
    setInput(formatNumberWithComma(newFundingAmount));
  };

  if (!data) return <Spinner />;

  return (
    <section className={styles.area_funding_detail}>
      <strong className={styles.txt_title}>펀딩내역</strong>
      <div className={styles.wrapper_funding_item}>
        <PaymentItem
          productId={data.productId}
          name={data.name}
          brandName={data.brandName}
          photo={data.photo}
          optionNames={data.optionNames}
        />
        <p className={styles.wrapper_desc}>
          <span className={styles.txt_price}>펀딩 목표 금액</span>
          <span className={styles.num_price}>
            {formatNumberWithComma(data.amount.goalAmount ?? 0)}
          </span>
          원
        </p>
        <p className={styles.wrapper_desc}>
          <span className={styles.txt_price}>잔여 금액</span>
          <span className={styles.num_price}>
            {formatNumberWithComma(remainingAmount)}
          </span>
          원
        </p>
        <p className={styles.wrapper_desc}>
          <span className={styles.txt_price}>기여할 금액</span>
          <input
            className={styles.input}
            onChange={handleChange}
            value={input}
            placeholder="0"
          />
          원
        </p>
      </div>
    </section>
  );
};

export default FundingDetail;
