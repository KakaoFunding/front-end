import clsx from 'clsx';
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './index.module.scss';

type ModalProps = {
  children: ReactNode;
  className: string;
  onClose: () => void;
  isOpen: boolean;
  scrollPos: number;
};

const Modal = ({
  onClose,
  children,
  className,
  isOpen,
  scrollPos,
}: ModalProps) => {
  useEffect(() => {
    const modal = document.getElementById('modal');
    if (isOpen) {
      document.documentElement.style.cssText = `
      position: fixed; 
      top: -${scrollPos}px;
      width: 100%;`;

      modal!.style.cssText = `
      z-index: 5000;
      position: fixed;
      overscroll-behavior-y: contain;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      `;
    }
    return () => {
      document.documentElement.style.cssText = '';
      modal!.style.cssText = '';
      window.scrollTo(0, scrollPos);
    };
  }, []);

  return createPortal(
    <div className={clsx(styles.wrapper_modal)} onClick={onClose}>
      <div
        className={clsx(styles.modal, className)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button type="button" className={styles.btn_close} onClick={onClose}>
          <span className={styles.ico_close}>닫기</span>
        </button>
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default Modal;
