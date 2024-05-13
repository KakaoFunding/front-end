import clsx from 'clsx';
import { useEffect } from 'react';

import Thumbnail from 'components/feature/ProductItem/Thumbnail';
import { Button } from 'components/ui/Button';
import Modal from 'components/ui/Modal';

import { useAxios } from 'hooks/useAxios';
import useFundingInput from 'hooks/useFundingInput';
import { formatDate, formatNumberWithUnit } from 'utils/format';
import { getOneYearLaterDate } from 'utils/generate';

import { FriendsSelectorModalProps } from 'types/modal';

import styles from './index.module.scss';

const mockData = {
  productId: 1,
  title: '[각인+포장] 리브르 헤어 미스트 30ml 세트(+향수 미니어처 7.5ml)',
  option: '940 코쿤 [New & Limited]',
  thumbImgUrl:
    'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20220111185052_b92447cb764d470ead70b2d0fe75fe5c.jpg',
  price: 3940000,
};

const FundingModal = ({
  close,
  isOpen,
  scrollPos,
}: FriendsSelectorModalProps) => {
  const {
    input: goalAmount,
    remainingAmount,
    clearInput,
    handleChange,
  } = useFundingInput(mockData.price);

  const { sendRequest } = useAxios<{ id: number }>({
    method: 'post',
    url: `/funding/${mockData.productId}`,
    data: {
      goalAmount,
      expiredAt: formatDate(getOneYearLaterDate()),
    },
  });

  const handleAddFunding = async () => {
    await sendRequest();
    close();
  };

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
          <div className={styles.prod_title}>{mockData.title}</div>
          {mockData.option && (
            <div className={styles.prod_option}>
              <span className={styles.ico_option}>옵션</span>
              {mockData.option}
            </div>
          )}
        </section>
        <div className={styles.wrapper_thumb}>
          <Thumbnail
            src={mockData.thumbImgUrl}
            alt={`${mockData.title}상품대표이미지`}
            size="small"
          />
        </div>
        <section className={styles.wrapper_price}>
          <div className={styles.txt_price}>상품 금액</div>
          {formatNumberWithUnit(mockData.price)}
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
          color="yellow"
          onClick={handleAddFunding}
          className={styles.btn_add}
        >
          등록하기
        </Button>
      </Modal>
    )
  );
};

export default FundingModal;
