import { useState, useEffect } from 'react';

import { Button } from 'components/ui/Button';
import Modal from 'components/ui/Modal';

import { useAddWish } from 'hooks/useWish';

import { WishModalProps } from 'types/modal';

import styles from './index.module.scss';

const WISH_RADIO_STATUS = { OTHERS: 'OTHERS', ME: 'ME' } as const;

const WISH_RADIO_INFO = [
  {
    type: WISH_RADIO_STATUS.OTHERS,
    title: '친구공개! 내 취향은 이거야♡',
    subTitle: '내 선물을 고민하는 친구를 위해 힌트 주기',
  },
  {
    type: WISH_RADIO_STATUS.ME,
    title: '비밀! 나만 볼 수 있어요',
    subTitle: '나만 알고 싶은 상품, 몰래 찜해두기',
  },
];

type WishRadioType = (typeof WISH_RADIO_STATUS)[keyof typeof WISH_RADIO_STATUS];

const WishModal = ({
  close,
  isOpen,
  scrollPos,
  productId,
  onWishAdded = () => null,
}: WishModalProps) => {
  const [radioStatus, setRadioStatus] = useState<WishRadioType>(
    WISH_RADIO_STATUS.OTHERS as WishRadioType,
  );
  const { addWishData, addWish } = useAddWish(productId, radioStatus);

  const handleRadioChange = (selectedRadio: WishRadioType) => {
    setRadioStatus(selectedRadio);
  };

  const handleAddWish = async () => {
    await addWish();
    close();
  };

  useEffect(() => {
    if (addWishData) onWishAdded(addWishData);
  }, [addWishData]);

  useEffect(() => {
    setRadioStatus(WISH_RADIO_STATUS.OTHERS as WishRadioType);
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
          위시의 공개범위를 선택해주세요
        </strong>
        <ul className={styles.wrapper_radio}>
          {WISH_RADIO_INFO.map((radio) => (
            <li className={styles.default_radio} key={radio.type}>
              <label
                className={styles.label_radio}
                htmlFor="WISH_RADIO"
                onClick={() => handleRadioChange(radio.type)}
              >
                <input
                  type="radio"
                  name="WISH_RADIO"
                  value={radio.type}
                  className={styles.btn_radio}
                  checked={radioStatus === radio.type}
                />
                <div className={styles.wrapper_txt}>
                  <strong className={styles.txt_title}>{radio.title}</strong>
                  <p className={styles.txt_subtitle}>{radio.subTitle}</p>
                </div>
              </label>
            </li>
          ))}
        </ul>
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
