import { useState } from 'react';

import { Button } from 'components/ui/Button';
import Modal from 'components/ui/Modal';

import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';

import { FriendsSelectorModalProps } from 'types/modal';
import { UserWithUserId } from 'types/user';

import Body from './Body';

import styles from './index.module.scss';

const FriendsSelectorModal = ({
  close,
  isOpen,
  scrollPos,
}: FriendsSelectorModalProps) => {
  const { selectedFriends, setSelectedFriends } = useSelectedFriendsStore();
  const [currentSelectedFriends, setCurrentSelectedFriends] =
    useState<UserWithUserId[]>(selectedFriends);

  // useSelectedFriendsStore.persist.clearStorage();
  const handleSelectedFriends = () => {
    setSelectedFriends(currentSelectedFriends);
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
        <header className={styles.area_header}>
          친구 선택
          <span className={styles.txt_head}>
            {currentSelectedFriends.length}
          </span>
        </header>
        <Body
          currentSelectedFriends={currentSelectedFriends}
          setCurrentSelectedFriends={setCurrentSelectedFriends}
        />
        <footer className={styles.area_footer}>
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
