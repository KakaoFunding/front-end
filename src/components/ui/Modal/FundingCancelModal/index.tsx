import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { Button } from 'components/ui/Button';
import Modal from 'components/ui/Modal';

import { FriendsSelectorModalProps } from 'types/modal';

import styles from './index.module.scss';

const FundingCancelModal = ({
  close,
  isOpen,
  scrollPos,
}: FriendsSelectorModalProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => setChecked(!checked);
  const handleCancel = () => {
    if (!checked) return;
    // 펀딩 취소 로직
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
          {`등록한 펀딩을 취소하면 펀딩한 친구들에게 환불돼요. 취소한 펀딩은
          복구할 수 없어요. \n\n정말로 펀딩을 취소하시겠어요?`}
        </p>
        <span className={styles.wrapper_cancel}>
          <span
            className={clsx({
              [styles.ico_cancel_active]: checked,
              [styles.ico_cancel]: !checked,
            })}
            onClick={handleCheck}
          />
          펀딩을 취소합니다.
        </span>
        <Button
          onClick={handleCancel}
          className={clsx(styles.btn_cancel, { [styles.on]: checked })}
        >
          펀딩 취소하기
        </Button>
      </Modal>
    )
  );
};

export default FundingCancelModal;
