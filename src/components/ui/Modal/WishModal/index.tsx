import { useState, ChangeEvent } from 'react';

import { Button } from 'components/ui/Button';
import Modal from 'components/ui/Modal';

import { FriendsSelectorModalProps } from 'types/modal';

import styles from './index.module.scss';

type RadioType = 'friend' | 'me';

const WishModal = ({ close, isOpen, scrollPos }: FriendsSelectorModalProps) => {
  const [radioStatus, setRadioStatus] = useState<RadioType>('friend');

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedRadio = e.target.value as RadioType;
    setRadioStatus(selectedRadio);
  };

  // TODO : 위시로직추가
  const handleAddWish = () => {
    // TODO : radioStatus 사용해서 위시 등록
    close();
  };

  return (
    isOpen && (
      <Modal
        scrollPos={scrollPos}
        onClose={close}
        isOpen={isOpen}
        className={styles.modal}
      >
        <strong className={styles.modal_title}>
          위시의 공개범위를 선택해주세요
        </strong>
        <section className={styles.wrapper_radio}>
          <div className={styles.radio_default}>
            <input
              type="radio"
              name="wishRadio"
              value="friend"
              className={styles.btn_radio}
              onChange={handleRadioChange}
              checked={radioStatus === 'friend'}
            />
            <div className={styles.wrapper_txt}>
              <strong className={styles.txt_title}>
                친구공개! 내 취향은 이거야♡
              </strong>
              <p className={styles.txt_subtitle}>
                내 선물을 고민하는 친구를 위해 힌트 주기
              </p>
            </div>
          </div>
          <hr className={styles.line} />
          <div className={styles.radio_default}>
            <input
              type="radio"
              name="wishRadio"
              value="me"
              className={styles.btn_radio}
              onChange={handleRadioChange}
              checked={radioStatus === 'me'}
            />
            <div className={styles.wrapper_txt}>
              <strong className={styles.txt_title}>
                비밀! 나만 볼 수 있어요
              </strong>
              <p className={styles.txt_subtitle}>
                나만 알고 싶은 상품, 몰래 찜해두기
              </p>
            </div>
          </div>
        </section>
        <Button
          color="yellow"
          onClick={handleAddWish}
          className={styles.btn_add}
        >
          담기
        </Button>
      </Modal>
    )
  );
};

export default WishModal;
