import clsx from 'clsx';
import { useState, ChangeEvent } from 'react';

import ProfileImg from 'components/feature/ProfileImg';

import { useSelectedFriendsStore } from 'store/useSelectedFriendsStore';

import { UserWithUserId } from 'types/user';

import styles from './index.module.scss';

const mockData = {
  user: { id: 0, name: '보경', profileUrl: '' },
  friends: [
    { id: 1, name: '친구 1', profileUrl: '' },
    { id: 2, name: '친구 2', profileUrl: '' },
    { id: 3, name: '친구 3', profileUrl: '' },
    { id: 4, name: '친구 4', profileUrl: '' },
    { id: 5, name: '친구 5', profileUrl: '' },
    { id: 6, name: '친구 6', profileUrl: '' },
    { id: 7, name: '친구 7', profileUrl: '' },
    { id: 8, name: '친구 8', profileUrl: '' },
    { id: 9, name: '친구 9', profileUrl: '' },
    { id: 10, name: '친구 10', profileUrl: '' },
    { id: 11, name: '친구 11', profileUrl: '' },
    { id: 12, name: '친구 12', profileUrl: '' },
    { id: 13, name: '친구 13', profileUrl: '' },
    { id: 14, name: '친구 14', profileUrl: '' },
    { id: 15, name: '친구 15', profileUrl: '' },
    { id: 16, name: '친구 16', profileUrl: '' },
    { id: 17, name: '친구 17', profileUrl: '' },
    { id: 18, name: '친구 18', profileUrl: '' },
    { id: 19, name: '친구 19', profileUrl: '' },
    { id: 20, name: '친구 20', profileUrl: '' },
  ],
};
const Body = () => {
  const [input, setInput] = useState<string>('');
  const [friends, setFriends] = useState(mockData.friends);

  const { currentSelectedFriends, setCurrentSelectedFriends } =
    useSelectedFriendsStore();

  const isSelected = (targetFriend: UserWithUserId) =>
    currentSelectedFriends.some(
      (friend) =>
        friend.id === targetFriend.id &&
        friend.name === targetFriend.name &&
        friend.profileUrl === targetFriend.profileUrl,
    );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;
    setInput(searchText);
    const filteredFriends = mockData.friends.filter((friend) =>
      friend.name.includes(searchText),
    );
    setFriends(filteredFriends);
  };

  const handleInputReset = () => {
    setInput('');
    setFriends(mockData.friends);
  };

  const handleDeselect = (selectedId: number) => {
    setCurrentSelectedFriends(
      currentSelectedFriends.filter((friend) => friend.id !== selectedId),
    );
  };

  const handleSelect = (selectedId: number) => {
    if (selectedId === 0) {
      if (!isSelected(mockData.user)) {
        setCurrentSelectedFriends([...currentSelectedFriends, mockData.user]);
        return;
      }
      handleDeselect(mockData.user.id);
      return;
    }

    const [filteredFriend] = mockData.friends.filter(
      (friend) => friend.id === selectedId,
    );
    if (isSelected(filteredFriend)) {
      handleDeselect(filteredFriend.id);
    } else {
      setCurrentSelectedFriends([...currentSelectedFriends, filteredFriend]);
    }
  };

  return (
    <>
      <ul className={clsx(styles.area_selected, styles.scroll_hori)}>
        {currentSelectedFriends.length === 0 && (
          <div className={styles.wrapper_selected}>
            <span className={styles.ico_selected} />
            선물할 친구를 선택하세요.
          </div>
        )}
        {currentSelectedFriends.map((seletedFriend) => (
          <li key={seletedFriend.id} className={styles.list_selected}>
            <ProfileImg
              size="xs"
              hasIcon="cancel"
              onClick={() => handleDeselect(seletedFriend.id)}
            />
            <div className={styles.txt_selected}>{seletedFriend.name}</div>
          </li>
        ))}
      </ul>
      <div className={styles.area_search}>
        <form className={styles.wrapper_search}>
          <input
            placeholder="이름, 닉네임 검색"
            type="search"
            className={styles.input_search}
            value={input}
            onChange={handleInputChange}
          />
          {input && (
            <button
              aria-label="reset"
              className={clsx(styles.btn_default, styles.btn_reset)}
              type="button"
              onClick={handleInputReset}
            >
              <span className={styles.ico_reset} />
            </button>
          )}
          <button
            aria-label="search"
            className={clsx(styles.btn_default, styles.btn_submit)}
            type="button"
          >
            <span className={styles.ico_submit} />
          </button>
        </form>
      </div>
      <section className={styles.area_friends}>
        <strong className={styles.txt_title}>나</strong>
        <ul>
          <li
            key="나"
            className={clsx(styles.item_friend, styles.me)}
            onClick={() => handleSelect(0)}
          >
            <input type="checkbox" className={styles.btn_input} />
            <span
              className={clsx(styles.ico_input, {
                [styles.on]: isSelected(mockData.user),
              })}
            />
            <ProfileImg size="xs" cursor />
            <p className={styles.txt_name}>{mockData.user.name}</p>
          </li>
        </ul>
        <strong className={styles.txt_title}>
          친구목록
          <span className={styles.txt_head}>{mockData.friends.length}</span>
        </strong>
        <ul>
          {friends.map((friend) => {
            return (
              <li
                key={friend.id}
                className={clsx(styles.item_friend)}
                onClick={() => handleSelect(friend.id)}
              >
                <input type="checkbox" className={styles.btn_input} />
                <span
                  className={clsx(styles.ico_input, {
                    [styles.on]: isSelected(friend),
                  })}
                />
                <ProfileImg size="xs" imgUrl={friend.profileUrl} cursor />
                <p className={styles.txt_name}>{friend.name}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Body;
