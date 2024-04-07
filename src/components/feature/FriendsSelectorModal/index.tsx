import { Button } from 'components/ui/Button';
import Modal from 'components/ui/Modal';

import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';

import { FriendsSelectorModalProps } from 'types/modal';

import styles from './index.module.scss';

const FriendsSelectorModal = ({
  close,
  isOpen,
  scrollPos,
}: FriendsSelectorModalProps) => {
  const { selectedHeadCount, setSelectedFriends } = useSelectedFriendsStore();

  // 임시 친구 선택
  const handleSelectedFriends = () => {
    setSelectedFriends([...prompt()!.toString()]);
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
        <header className={styles.wrapper_header}>
          친구 선택
          <span className={styles.txt_head}>{selectedHeadCount}</span>
        </header>
        <section>바디</section>
        <footer className={styles.wrapper_footer}>
          <Button color="gray" onClick={close}>
            취소
          </Button>
          <Button color="yellow" onClick={handleSelectedFriends}>
            확인
          </Button>
        </footer>
      </Modal>
    )
  );
};

export default FriendsSelectorModal;
