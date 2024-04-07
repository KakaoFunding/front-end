import Modal from 'components/ui/Modal';

import { FriendsSelectorModalProps } from 'types/modal';

import styles from './index.module.scss';

const FriendsSelectorModal = ({
  close,
  isOpen,
  scrollPos,
}: FriendsSelectorModalProps) => {
  return (
    isOpen && (
      <Modal
        scrollPos={scrollPos}
        onClose={close}
        isOpen={isOpen}
        className={styles.modal}
      >
        <div>모달 오픈</div>
      </Modal>
    )
  );
};

export default FriendsSelectorModal;
