import { useEffect, useState } from 'react';

import { Button } from 'components/ui/Button';
import Modal from 'components/ui/Modal';

import { useAxios } from 'hooks/useAxios';

import { FriendsSelectorModalProps } from 'types/modal';

import styles from './index.module.scss';

const FundingCancelModal = ({
  fundingId,
  close,
  isOpen,
  scrollPos,
}: { fundingId: number } & FriendsSelectorModalProps) => {
  const [checked, setChecked] = useState(false);
  const { sendRequest } = useAxios({
    method: 'post',
    url: '/funding/payments/cancel',
    data: {
      fundingId,
    },
  });

  const handleCheck = () => setChecked(!checked);
  const handleCancel = async () => {
    await sendRequest();
    close();
  };

  useEffect(() => {
    setChecked(false);
  }, [isOpen]);
  return (
    isOpen && (
      <Modal
        scrollPos={scrollPos}
        onClose={close}
        isOpen={isOpen}
        className={styles.modal}
      >
        <strong className={styles.txt_title}>펀딩 취소</strong>
        <p className={styles.txt_desc}>
          {`펀딩을 취소하면 모든 펀딩 금액이 펀딩에 참여한 친구들에게 환불돼요. 취소한 펀딩은 복구할 수 없어요.\n\n정말로 펀딩을 취소하시겠어요?`}
        </p>
        <label
          htmlFor="cancelFundingConfirmation"
          className={styles.wrapper_cancel}
        >
          <input
            type="checkbox"
            id="cancelFundingConfirmation"
            className={styles.checkbox_cancel}
            checked={checked}
            onChange={handleCheck}
          />
          펀딩을 취소합니다.
        </label>
        <Button
          onClick={handleCancel}
          className={styles.btn_cancel}
          disabled={!checked}
        >
          펀딩 취소하기
        </Button>
      </Modal>
    )
  );
};

export default FundingCancelModal;
