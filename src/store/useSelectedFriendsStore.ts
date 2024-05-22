import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { UserWithUserId } from 'types/user';

const defaultImgUrl =
  'https://github.com/KakaoFunding/front-end/blob/dev/src/assets/bg_profile_default.png?raw=true';
const peopleImgUrl = 'src/assets/profile_people.png';

type SelectedFriendsState = {
  isSelected: boolean;
  isSelfSelected: boolean;
  selectedFriends: UserWithUserId[];
  selectedHeadCount: number;
  currentSelectedFriends: UserWithUserId[];
};

type SelectedFriendsAction = {
  setSelectedFriends: (state: UserWithUserId[]) => void;
  setCurrentSelectedFriends: (state: UserWithUserId[]) => void;
  getImgUrl: () => string;
  getTitle: () => string;
};

export const useSelectedFriendsStore = create<
  SelectedFriendsState & SelectedFriendsAction
>()(
  persist(
    (set, get) => ({
      isSelected: false,
      isSelfSelected: false,
      selectedFriends: [],
      selectedHeadCount: 0,
      currentSelectedFriends: [],

      setSelectedFriends: (state) =>
        set(() => ({
          isSelected: !(state.length === 0),
          isSelfSelected: state.length === 1 && state[0].id === 0,
          selectedFriends: state,
          selectedHeadCount: state.length,
        })),

      setCurrentSelectedFriends: (state) =>
        set(() => ({
          currentSelectedFriends: state,
        })),

      getImgUrl: () => {
        if (get().selectedHeadCount > 1) return peopleImgUrl;
        if (get().selectedHeadCount === 1)
          return get().selectedFriends[0].profileUrl!;
        return defaultImgUrl;
      },

      getTitle: () => {
        if (!get().isSelected) return '선물 받을 친구를 선택해주세요.';
        if (get().selectedHeadCount > 1)
          return `${get().selectedHeadCount}명의 친구에게 선물하기`;
        if (get().isSelfSelected) return '나를 위한 선물하기';
        return `${get().selectedFriends[0].name}에게 선물하기`;
      },
    }),
    {
      name: 'funding-seleted-friends',
    },
  ),
);
