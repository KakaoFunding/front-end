import clsx from 'clsx';
import { createPortal } from 'react-dom';

import { ModalProps } from 'types/modal';

import styles from './index.module.scss';

const Modal = ({ onClose, children, className, isOpen }: ModalProps) => {
  return createPortal(
    isOpen && (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
        className={clsx(styles.wrapper_modal, { [styles.on]: isOpen })}
        onClick={onClose}
      >
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
    ),
    document.getElementById('modal') as HTMLElement,
  );
};

export default Modal;
