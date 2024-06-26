import clsx from 'clsx';
import { useEffect, useState } from 'react';

import Thumbnail from 'components/feature/ProductItem/Thumbnail';
import { Button } from 'components/ui/Button';
import Modal from 'components/ui/Modal';

import { useAxios } from 'hooks/useAxios';
import useFundingInput from 'hooks/useFundingInput';
import {
  formatCommaToNumber,
  formatDate,
  formatNumberWithUnit,
} from 'utils/format';
import { getOneYearLaterDate } from 'utils/generate';

import { FundingModalProps } from 'types/modal';

import styles from './index.module.scss';

const FundingModal = ({
  close,
  isOpen,
  scrollPos,
  name,
  price,
  productId,
  selectedOption,
  productThumbnail,
}: FundingModalProps) => {
  const [isFundingAllowed, setIsFundingAllowed] = useState<boolean>(false);
  const {
    input: goalAmount,
    remainingAmount,
    clearInput,
    handleChange,
  } = useFundingInput(price);

  const { sendRequest } = useAxios<{ id: number }>({
    method: 'post',
    url: `/funding/${productId}`,
    data: {
      goalAmount: formatCommaToNumber(goalAmount),
      expiredAt: formatDate(getOneYearLaterDate()),
    },
  });

  const handleAddFunding = async () => {
    const numericGoalAmount = formatCommaToNumber(goalAmount);

    if (price - numericGoalAmount < 100 && price !== numericGoalAmount) {
      alert('잔여 금액은 100원 이상이어야 합니다.');

      return;
    }
    if (numericGoalAmount < 100) {
      alert('목표 금액은 100원 이상이어야 합니다.');

      return;
    }

    await sendRequest();
    close();
  };

  useEffect(() => {
    const numericGoalAmount = formatCommaToNumber(goalAmount);

    if (price - numericGoalAmount < 100 && price !== numericGoalAmount) {
      setIsFundingAllowed(false);
    } else if (numericGoalAmount < 100) {
      setIsFundingAllowed(false);
    } else {
      setIsFundingAllowed(true);
    }
  }, [goalAmount]);

  useEffect(() => {
    clearInput();
  }, [isOpen]);

  return (
    isOpen && (
      <Modal
        scrollPos={scrollPos}
        onClose={close}
        isOpen={isOpen}
        className={styles.modal}
      >
        <strong className={styles.modal_title}>
          펀딩 목표 금액을 설정해주세요
        </strong>
        <section className={styles.wrapper_info}>
          <div className={styles.prod_title}>{name}</div>
          {selectedOption && (
            <div className={styles.prod_option}>
              <span className={styles.ico_option}>옵션</span>
              {selectedOption.name}
            </div>
          )}
        </section>
        <div className={styles.wrapper_thumb}>
          <Thumbnail
            src={productThumbnail}
            alt={`${name}상품대표이미지`}
            size="small"
          />
        </div>
        <section className={styles.wrapper_price}>
          <div className={styles.txt_price}>상품 금액</div>
          {formatNumberWithUnit(price)}
        </section>
        <section className={styles.wrapper_price}>
          <div className={clsx(styles.txt_price, styles.wrapper_tooltip)}>
            잔여 금액
            <span className={styles.ico_price}>
              <div className={clsx(styles.tooltip, styles.tooltip_hover)}>
                <p className={styles.title}>잔여 금액 </p>
                상품 금액에서 펀딩 목표 금액을 차감한 금액입니다. 목표 금액 달성
                시 본인이 결제해야 합니다.
              </div>
            </span>
          </div>
          {formatNumberWithUnit(remainingAmount)}
        </section>
        <section className={styles.wrapper_price}>
          <div className={styles.txt_price}>펀딩 목표 금액</div>
          <div className={styles.wrapper_input}>
            <input
              className={styles.input}
              onChange={handleChange}
              value={goalAmount}
              placeholder="0"
            />
            원
          </div>
        </section>
        <Button
          color={isFundingAllowed ? 'yellow' : 'gray'}
          onClick={handleAddFunding}
          className={clsx(styles.btn_add, { [styles.on]: isFundingAllowed })}
        >
          등록하기
        </Button>
      </Modal>
    )
  );
};

export default FundingModal;
