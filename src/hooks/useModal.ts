import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollPos, setScrollPos] = useState<number>(0);

  const open = () => {
    setScrollPos(window.scrollY);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  return { isOpen, open, close, scrollPos };
};
