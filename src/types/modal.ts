import { ReactNode } from 'react';

export type ModalComponentProps = {
  children: ReactNode;
  className: string;
};

export type ModalProps = ModalComponentProps & {
  onClose: () => void;
  isOpen: boolean;
  scrollPos: number;
};

export type FriendsSelectorModalProps = {
  close: () => void;
  isOpen: boolean;
  scrollPos: number;
};
