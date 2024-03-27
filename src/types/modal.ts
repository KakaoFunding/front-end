import { ReactNode } from 'react';

export type ModalComponentProps = {
  children: ReactNode;
  className: string;
};

export type ModalProps = ModalComponentProps & {
  onClose: () => void;
};
