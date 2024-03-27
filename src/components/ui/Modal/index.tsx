import clsx from 'clsx';

import { ModalProps } from 'types/modal';

import styles from './index.module.scss';

const Modal = ({ onClose, children, className }: ModalProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={styles.wrapper_modal} onClick={onClose}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={clsx(styles.modal, className)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button type="button" className={styles.btn_close} onClick={onClose}>
          <span className={styles.ico_close}>닫기</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
