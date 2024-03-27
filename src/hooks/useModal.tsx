import { useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import Modal from 'components/ui/Modal';

type ModalComponentProps = {
  children: ReactNode;
  className: string;
};

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 배경 스크롤링 방지
  // 필요시 훅으로 분리
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const ModalComponent = ({ children, className }: ModalComponentProps) =>
    createPortal(
      isOpen && (
        <Modal className={className} onClose={close}>
          {children}
        </Modal>
      ),
      document.getElementById('modal') as HTMLElement,
    );

  return { Modal: ModalComponent, open, close };
};
